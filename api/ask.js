// ============================================================================
//  /api/ask — Vercel serverless function
//  Proxies Ask-AI questions to Google Gemini, keeping the API key server-side.
//  Set GEMINI_API_KEY in the Vercel project env vars. If it's missing or the
//  upstream call fails, the frontend falls back to the local keyword answers.
// ============================================================================
import { SYSTEM_PROMPT } from '../src/content/askContext.js'

// Fast, free-tier-friendly model. Swap for 'gemini-2.5-flash-lite' (cheaper/faster)
// or 'gemini-2.5-pro' (smarter) if you like.
const MODEL = 'gemini-2.5-flash'
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'method_not_allowed' })
  }

  const key = process.env.GEMINI_API_KEY
  if (!key) {
    // Not configured yet — tell the client so it can use the local fallback.
    return res.status(503).json({ error: 'not_configured' })
  }

  // Parse + guard the question (abuse protection: cap length).
  let question = ''
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {}
    question = String(body.question || '').trim().slice(0, 500)
  } catch {
    return res.status(400).json({ error: 'bad_request' })
  }
  if (!question) return res.status(400).json({ error: 'empty_question' })

  try {
    const upstream = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [{ role: 'user', parts: [{ text: question }] }],
        generationConfig: {
          maxOutputTokens: 800,
          temperature: 0.6,
          // Disable Gemini 2.5 "thinking" — unneeded for Q&A, and it otherwise
          // consumes the output budget and can truncate the answer.
          thinkingConfig: { thinkingBudget: 0 },
        },
      }),
    })

    if (!upstream.ok) {
      console.error('Gemini upstream error', upstream.status, await upstream.text())
      return res.status(502).json({ error: 'upstream_error' })
    }

    const data = await upstream.json()
    const answer = (data?.candidates?.[0]?.content?.parts || [])
      .map((p) => p.text || '')
      .join('')
      .trim()

    if (!answer) return res.status(502).json({ error: 'empty_answer' })
    return res.status(200).json({ answer })
  } catch (err) {
    console.error('Gemini request failed', err)
    return res.status(502).json({ error: 'request_failed' })
  }
}
