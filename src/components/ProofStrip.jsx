import { cardsHTML } from '../content/blackCards.js'

// Dark panel showcasing the "black cards" as a seamless auto-scrolling ribbon.
// Duplicated for a seamless loop; pauses on hover; halts under
// prefers-reduced-motion.
export default function ProofStrip() {
  return (
    <section className="overflow-hidden bg-paper py-8 text-ink sm:py-10">
      <div className="cards-marquee" aria-hidden="true" role="presentation">
        <div className="cards-track">
          <div
            className="cards-group"
            dangerouslySetInnerHTML={{ __html: cardsHTML }}
          />
          <div
            className="cards-group"
            dangerouslySetInnerHTML={{ __html: cardsHTML }}
          />
        </div>
      </div>
    </section>
  )
}
