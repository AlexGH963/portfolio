import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { whatIDo } from '../content/site.js'

// Three theme blocks — each a bold declarative headline + short paragraph.
// One idea per row, with plenty of air between them.
export default function WhatIDo() {
  return (
    <Section id="what-i-do">
      <div className="flex flex-col gap-20 sm:gap-28">
        {whatIDo.map((block, i) => (
          <Reveal key={block.title}>
            <div className="grid gap-6 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-1">
                <span className="text-[15px] font-medium tabular-nums text-ink/30">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-balance text-[clamp(1.9rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-tightest text-ink lg:col-span-7">
                {block.title}
              </h3>
              <p className="text-[clamp(1.05rem,1.3vw,1.2rem)] leading-relaxed text-ink/65 lg:col-span-4 lg:pt-2">
                {block.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
