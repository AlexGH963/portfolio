import { useNavigate } from 'react-router-dom'

// The "Ask AI" toggle. Off (on the site) → navigates to /ask. On (on the ask
// page) → navigates back home. Styled with the Siri gradient when active.
export default function AiToggle({ on = false }) {
  const navigate = useNavigate()
  return (
    <button
      type="button"
      onClick={() => navigate(on ? '/' : '/ask')}
      className="ai-toggle"
      aria-pressed={on}
      aria-label={on ? 'Close Ask AI' : 'Open Ask AI'}
    >
      <span className="ai-toggle__label">
        Ask <span className="ai-grad">AI</span>
      </span>
      <span className={`ai-toggle__track ${on ? 'is-on' : ''}`}>
        <span className="ai-toggle__knob" />
      </span>
    </button>
  )
}
