import Reveal from './Reveal.jsx'
import { withAiGradient } from './withAiGradient.jsx'
import { aiNative } from '../content/site.js'

// Small line icons for the three pillar tiles.
const ICONS = {
  Research: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-4-4" />
    </svg>
  ),
  Ideation: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l1.9 5.6 5.6 1.9-5.6 1.9L12 18l-1.9-5.6L4.5 10.5l5.6-1.9L12 3z" />
    </svg>
  ),
  Validation: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8 12.5l2.5 2.5L16 9.5" />
    </svg>
  ),
}

const PILLAR_AREA = ['res', 'idea', 'val']

// Signature "Making design teams AI-native" moment, laid out as an Apple-style
// bento grid.
export default function AiNative() {
  return (
    <section
      id="ai-native"
      className="bg-ink px-6 py-24 text-paper sm:px-8 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-container">
        <div className="bento">
          {/* Headline tile */}
          <Reveal className="bento-card bento__head">
            <h2 className="bento__headline">
              {withAiGradient(aiNative.headline)}
            </h2>
            <p className="bento__sub">{aiNative.subline}</p>
          </Reveal>

          {/* Weeks → Days tile */}
          <Reveal className="bento-card bento__wd" delay={80}>
            <span className="bento__kicker">Idea → tested</span>
            <div className="wd">
              <span className="wd__from">{aiNative.focal.from}</span>
              <span className="wd__arrow" aria-hidden="true">↓</span>
              <span className="wd__to ai-grad">{aiNative.focal.to}</span>
            </div>
          </Reveal>

          {/* Pillar tiles */}
          {aiNative.pillars.map((pillar, i) => (
            <Reveal
              key={pillar.label}
              className={`bento-card bento__pillar bento__${PILLAR_AREA[i]}`}
              delay={140 + i * 80}
            >
              <span className="pillar__icon">{ICONS[pillar.label]}</span>
              <span className="bento__kicker">{pillar.label}</span>
              <p className="pillar__line">{pillar.line}</p>
            </Reveal>
          ))}

          {/* Closing tile */}
          <Reveal className="bento-card bento__close" delay={380}>
            <p>{aiNative.closing}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
