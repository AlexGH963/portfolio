import { Link } from 'react-router-dom'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { caseStudies } from '../content/site.js'

// Case-study card grid. Each card links to a routed, templated page.
// The image area is a clearly-marked placeholder to fill with visuals later.
export default function CaseStudies() {
  return (
    <Section id="case-studies">
      <Reveal>
        <h2 className="max-w-4xl text-balance text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-tightest text-ink">
          Selected case studies.
        </h2>
        <p className="mt-6 max-w-2xl text-[clamp(1.05rem,1.4vw,1.3rem)] leading-relaxed text-ink/60">
          A closer look at three pieces of work — the problem, the approach, and
          the outcome.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-8 sm:mt-20 lg:grid-cols-3">
        {caseStudies.map((study, i) => (
          <Reveal key={study.slug} delay={i * 90}>
            <Link
              to={`/case/${study.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-black/10 bg-white/40 p-3 transition-all duration-500 ease-smooth hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.28)]"
            >
              {/* Image placeholder — replace with a real cover image. */}
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-neutral-100">
                <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-ink/30">
                  Image placeholder
                </span>
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5" />
              </div>

              <div className="flex flex-1 flex-col px-3 pb-3 pt-6">
                <h3 className="text-[1.4rem] font-semibold leading-snug tracking-tight text-ink">
                  {study.title}
                </h3>
                <p className="mt-3 flex-1 text-[15.5px] leading-relaxed text-ink/60">
                  {study.hook}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-[15px] font-medium text-accent">
                  Read the case study
                  <span className="transition-transform duration-300 ease-smooth group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
