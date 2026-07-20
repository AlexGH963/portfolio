// Wrap any standalone "AI" token — plus any optional `extraWords` — in a Siri /
// Apple-Intelligence gradient span. Styling lives in `.ai-grad` (see index.css).
export function withAiGradient(text, extraWords = []) {
  const words = ['AI', ...extraWords]
  const pattern = new RegExp(`(\\b(?:${words.join('|')})\\b)`, 'g')
  const set = new Set(words)
  return text.split(pattern).map((part, i) =>
    set.has(part) ? (
      <span key={i} className="ai-grad">
        {part}
      </span>
    ) : (
      part
    ),
  )
}
