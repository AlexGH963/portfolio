import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { staysCase } from '../content/staysCase.js'

const { teaser } = staysCase

// Recent case study — a single full-bleed entry point between the portfolio
// and the AI section. Built on the AI section's bento card + bloom, so the two
// dark moments on the page read as one family.
export default function CaseStudyTeaser() {
  return (
    <section className="bg-paper px-6 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-container">
        <Reveal>
          <Link
            to="/case/turning-stays-around"
            aria-label={`${teaser.kicker}: ${teaser.title}`}
            className="teaser bento-card cs-glow group block text-paper outline-none ring-offset-4 ring-offset-paper transition-transform duration-500 ease-smooth hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-accent"
          >
            <div className="px-8 py-14 sm:px-14 sm:py-20 lg:px-20 lg:py-24">
              <span className="bento__kicker">{teaser.kicker}</span>
              <h2 className="mt-6 max-w-3xl text-balance text-[clamp(2.1rem,4.4vw,3.75rem)] font-semibold leading-[1.04] tracking-tightest text-paper">
                {teaser.title}
              </h2>
              <p className="mt-6 max-w-xl text-[clamp(1rem,1.3vw,1.15rem)] leading-relaxed text-paper/55">
                {teaser.hook}
              </p>

              <div className="mt-10 cs-tags">
                {teaser.tags.map((t) => (
                  <span key={t} className="cs-tag cs-tag--dark">
                    {t}
                  </span>
                ))}
              </div>

              <span className="mt-10 inline-flex items-center gap-2 text-[15px] font-medium text-paper">
                {teaser.cta}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-smooth group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
