// Wrap any standalone "AI" token in a Siri / Apple-Intelligence gradient span.
// Styling lives in `.ai-grad` (see index.css).
export function withAiGradient(text) {
  return text.split(/(\bAI\b)/g).map((part, i) =>
    part === 'AI' ? (
      <span key={i} className="ai-grad">
        AI
      </span>
    ) : (
      part
    ),
  )
}
