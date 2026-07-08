import { useEffect, useRef, useState } from 'react'
import AiToggle from '../components/AiToggle.jsx'
import { answerQuestion, suggestions, askIntro } from '../content/knowledge.js'

const reduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// The "Ask AI" page — a futuristic, self-contained assistant that answers
// questions about Alex from the knowledge base, with a typing reveal.
export default function Ask() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([]) // { role: 'user' | 'ai', text }
  const [thinking, setThinking] = useState(false)
  const inputRef = useRef(null)
  const scrollRef = useRef(null)
  const timers = useRef([])

  useEffect(() => {
    document.title = 'Ask AI — Alexandros Hashemakis'
    const t = setTimeout(() => inputRef.current?.focus(), 700)
    return () => {
      clearTimeout(t)
      timers.current.forEach(clearTimeout)
      document.title = 'Alexandros Hashemakis — Product Design Leader'
    }
  }, [])

  // Keep the conversation scrolled to the latest.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, thinking])

  const ask = (raw) => {
    const q = raw.trim()
    if (!q || thinking) return
    setInput('')
    setMessages((m) => [...m, { role: 'user', text: q }])
    setThinking(true)

    const full = answerQuestion(q)

    // Small "thinking" beat, then type the answer out.
    const t1 = setTimeout(() => {
      setThinking(false)
      if (reduceMotion()) {
        setMessages((m) => [...m, { role: 'ai', text: full }])
        return
      }
      setMessages((m) => [...m, { role: 'ai', text: '' }])
      let i = 0
      const step = () => {
        i += 2 // a couple chars per tick — fast but visibly "typing"
        setMessages((m) => {
          const copy = m.slice()
          copy[copy.length - 1] = { role: 'ai', text: full.slice(0, i) }
          return copy
        })
        if (i < full.length) {
          const t = setTimeout(step, 12)
          timers.current.push(t)
        }
      }
      step()
    }, 650)
    timers.current.push(t1)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    ask(input)
  }

  const started = messages.length > 0 || thinking

  return (
    <div className="ask">
      {/* Ambient animated aura + one-shot entry flash */}
      <div className="ask__aura" aria-hidden="true" />
      <div className="ask__flash" aria-hidden="true" />

      {/* Top bar — just the toggle, aligned to its home-page position */}
      <header className="ask__bar">
        <AiToggle on />
      </header>

      <main className="ask__main">
        <div className="ask__inner">
          {/* Intro (fades out once a conversation starts) */}
          <div className={`ask__intro ${started ? 'is-hidden' : ''}`}>
            <h1 className="ask__headline">Ask anything about Alex</h1>
            <p className="ask__sub">{askIntro}</p>
          </div>

          {/* Conversation */}
          {started && (
            <div className="ask__thread" ref={scrollRef}>
              {messages.map((m, i) => (
                <div key={i} className={`bubble bubble--${m.role}`}>
                  {m.role === 'ai' && <span className="bubble__badge ai-grad">AI</span>}
                  <p>{m.text}</p>
                </div>
              ))}
              {thinking && (
                <div className="bubble bubble--ai">
                  <span className="bubble__badge ai-grad">AI</span>
                  <span className="dots" aria-label="Thinking">
                    <i /><i /><i />
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Search bar */}
          <form className="ask__form" onSubmit={onSubmit}>
            <div className="ask__field">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Alex's experience, leadership, AI work…"
                aria-label="Ask a question about Alex"
                autoComplete="off"
              />
              <button type="submit" aria-label="Ask" disabled={!input.trim() || thinking}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </form>

          {/* Suggested questions — always visible */}
          <div className="ask__chips">
            {suggestions.map((s) => (
              <button key={s} type="button" className="chip" onClick={() => ask(s)}>
                {s}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
