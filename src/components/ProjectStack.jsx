import { projectCardsHTML } from '../content/projectCards.js'

// A horizontal carousel of black project cards that scrolls smoothly and loops
// seamlessly. The cards are duplicated so the track can translate a full set
// (-50%) and snap back invisibly. Pure CSS animation — pauses on hover and
// honours prefers-reduced-motion.
export default function ProjectStack() {
  return (
    <div className="pstack" aria-hidden="true" role="presentation">
      <div
        className="ptrack"
        dangerouslySetInnerHTML={{ __html: projectCardsHTML + projectCardsHTML }}
      />
    </div>
  )
}
