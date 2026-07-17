import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { staysCase } from '../content/staysCase.js'

const { teaser } = staysCase

// The three screens that stand in for the work, fanned out like an Apple
// product shot. Middle one sits forward.
const SCREENS = [
  { src: '/screens/stays-reviews.png', alt: 'Stays — guest reviews' },
  { src: '/screens/stays-rooms.png', alt: 'Stays — room selection' },
  { src: '/screens/stays-location.png', alt: 'Stays — property location' },
]

// Recent case study — a single, full-bleed dark entry point between the
// portfolio and the AI section. The whole panel is one link.
export default function CaseStudyTeaser() {
  return (
    <section className="bg-paper px-6 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-container">
        <Reveal>
          <Link
            to="/case/turning-stays-around"
            aria-label={`${teaser.kicker}: ${teaser.title}`}
            className="teaser group block overflow-hidden rounded-[28px] bg-ink text-paper outline-none ring-offset-4 ring-offset-paper transition-transform duration-500 ease-smooth hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-accent"
          >
            <div className="grid items-center gap-10 p-9 sm:p-14 lg:grid-cols-12 lg:gap-6 lg:p-16">
              {/* Copy */}
              <div className="lg:col-span-6">
                <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-paper/40">
                  {teaser.kicker}
                </span>
                <h2 className="mt-5 text-balance text-[clamp(2rem,3.6vw,3.25rem)] font-semibold leading-[1.04] tracking-tightest text-paper">
                  {teaser.title}
                </h2>
                <p className="mt-5 max-w-md text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-paper/55">
                  {teaser.hook}
                </p>
                <span className="mt-9 inline-flex items-center gap-2 text-[15px] font-medium text-paper">
                  {teaser.cta}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 ease-smooth group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>

              {/* Screens */}
              <div className="lg:col-span-6">
                <div className="teaser__screens">
                  {SCREENS.map((s, i) => (
                    <div key={s.src} className={`teaser__screen teaser__screen--${i}`}>
                      <img src={s.src} alt={s.alt} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
