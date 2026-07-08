import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { timeline, certifications } from '../content/site.js'

// Clean, minimal vertical timeline. Each company groups its role progression
// (newest first) so the growth in scope and seniority reads at a glance.
export default function Timeline() {
  return (
    <Section id="experience">
      <Reveal>
        <h2 className="text-balance text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-tightest text-ink">
          Experience.
        </h2>
      </Reveal>

      <div className="mt-16 sm:mt-20">
        {timeline.map((job) => (
          <Reveal key={`${job.company}-${job.period}`}>
            <div className="grid gap-4 border-t border-black/10 py-10 lg:grid-cols-12 lg:gap-16">
              {/* Period range */}
              <div className="lg:col-span-3">
                <span className="text-[15px] font-medium tabular-nums text-ink/45">
                  {job.period}
                </span>
              </div>

              {/* Company + role progression */}
              <div className="lg:col-span-9">
                <h3 className="text-[clamp(1.4rem,2.5vw,2rem)] font-semibold tracking-tight text-ink">
                  {job.company}
                  {job.parent && (
                    <span className="font-normal text-ink/40"> ({job.parent})</span>
                  )}
                  {job.location && (
                    <span className="font-normal text-ink/40"> · {job.location}</span>
                  )}
                </h3>

                {job.summary && (
                  <p className="mt-3 max-w-2xl text-[15.5px] leading-relaxed text-ink/55">
                    {job.summary}
                  </p>
                )}

                {/* Role rows */}
                <div className="mt-6 flex flex-col gap-2.5">
                  {job.roles.map((role) => (
                    <div
                      key={`${role.period}-${role.title}`}
                      className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-5"
                    >
                      {job.roles.length > 1 && (
                        <span className="shrink-0 text-[13.5px] font-medium tabular-nums text-ink/35 sm:w-28">
                          {role.period}
                        </span>
                      )}
                      <p className="text-[16px] text-ink/80">
                        <span className="font-semibold text-ink">{role.title}</span>
                        {role.scope && (
                          <span className="text-ink/50"> — {role.scope}</span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Certifications */}
      <Reveal>
        <div className="mt-16 border-t border-black/10 pt-10 sm:mt-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-ink/40">
            Certifications
          </p>
          <div className="mt-6 grid gap-x-16 gap-y-6 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div key={cert.title}>
                <p className="text-[16.5px] font-semibold tracking-tight text-ink">
                  {cert.title}
                </p>
                <p className="mt-1 text-[15px] text-ink/50">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
