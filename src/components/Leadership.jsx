import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { leadership, whatIDo } from '../content/site.js'

// Impact-driven leadership — a headline + intro, then six capability blocks
// in a refined grid. Dark section for weight and contrast.
export default function Leadership() {
  return (
    <Section id="leadership" tone="dark">
      <Reveal>
        <h2 className="max-w-4xl text-balance text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-tightest">
          {leadership.headline}
        </h2>
      </Reveal>

      {/* Three headline statements as white cards on the dark section */}
      <div className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-3">
        {whatIDo.map((block, i) => (
          <Reveal key={block.title} delay={i * 90}>
            <div className="flex h-full flex-col rounded-[28px] bg-paper p-8 text-ink">
              <span className="text-[13px] font-medium tabular-nums text-ink/30">
                0{i + 1}
              </span>
              <h3 className="mt-5 text-balance text-[clamp(1.35rem,2vw,1.7rem)] font-semibold leading-[1.12] tracking-tight text-ink">
                {block.title}
              </h3>
              <p className="mt-4 text-[15.5px] leading-relaxed text-ink/60">
                {block.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-x-12 gap-y-14 sm:mt-24 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
        {leadership.capabilities.map((cap, i) => (
          <Reveal key={cap.title} delay={(i % 3) * 90}>
            <div>
              <h3 className="text-[1.3rem] font-semibold leading-snug tracking-tight text-paper">
                {cap.title}
              </h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-paper/55">
                {cap.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
