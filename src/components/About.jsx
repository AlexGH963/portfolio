import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Portrait from './Portrait.jsx'
import { about } from '../content/site.js'

// About — portrait alongside a calm, readable narrative.
export default function About() {
  return (
    <Section id="about" tone="dark">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-20">
        {/* Portrait — natural 4:5 crop so the face is never cut off. */}
        <div className="lg:col-span-5">
          <Reveal>
            <Portrait
              alt={about.portraitAlt}
              className="max-w-[360px] shadow-[0_40px_100px_-40px_rgba(0,0,0,0.6)]"
            />
          </Reveal>
        </div>

        {/* Copy */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="mb-8 text-[13px] font-medium uppercase tracking-[0.2em] text-paper/40">
              {about.headline}
            </p>
            <div className="flex flex-col gap-6">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`text-pretty leading-relaxed ${
                    i === 0
                      ? 'text-[clamp(1.1rem,1.6vw,1.4rem)] font-medium tracking-tight text-paper'
                      : 'text-[clamp(1.05rem,1.3vw,1.2rem)] text-paper/60'
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
