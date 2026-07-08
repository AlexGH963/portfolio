import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'
import { caseStudyPages, caseStudies } from '../content/site.js'

// Templated case-study page. Structure is ready; fill copy + visuals later
// by editing `caseStudyPages` in src/content/site.js.
export default function CaseStudy() {
  const { slug } = useParams()
  const page = caseStudyPages[slug]

  // Keep the browser tab title in sync per case study.
  useEffect(() => {
    if (page) document.title = `${page.title} — Alexandros Hashemakis`
    return () => {
      document.title = 'Alexandros Hashemakis — Product Design Leader'
    }
  }, [page])

  // Unknown slug → gentle fallback.
  if (!page) {
    return (
      <>
        <Header />
        <main className="mx-auto flex min-h-[70vh] max-w-container flex-col items-center justify-center px-6 text-center">
          <p className="text-[15px] font-medium uppercase tracking-[0.2em] text-ink/40">
            Not found
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tightest">
            This case study doesn’t exist yet.
          </h1>
          <Link to="/#case-studies" className="mt-8 text-accent underline underline-offset-4">
            ← Back to case studies
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  // Neighbouring case studies for prev/next navigation.
  const index = caseStudies.findIndex((c) => c.slug === slug)
  const next = caseStudies[(index + 1) % caseStudies.length]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <header className="px-6 pb-16 pt-36 sm:px-8 sm:pb-24 sm:pt-44">
          <div className="mx-auto max-w-3xl">
            <Link
              to="/#case-studies"
              className="text-[14px] font-medium text-ink/50 transition-colors hover:text-ink"
            >
              ← Case studies
            </Link>
            <h1 className="mt-8 text-balance text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-tightest text-ink">
              {page.title}
            </h1>
            <p className="mt-6 text-[clamp(1.15rem,1.6vw,1.4rem)] leading-relaxed text-ink/60">
              {page.hook}
            </p>
          </div>
        </header>

        {/* Cover image placeholder */}
        <div className="px-6 sm:px-8">
          <div className="mx-auto flex aspect-[16/9] max-w-5xl items-center justify-center rounded-2xl bg-neutral-100">
            <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-ink/30">
              Cover image placeholder
            </span>
          </div>
        </div>

        {/* Structured sections — Problem / Approach / My role / Outcome */}
        <article className="mx-auto max-w-3xl px-6 py-24 sm:px-8 sm:py-32">
          <div className="flex flex-col gap-20">
            {page.sections.map((section) => (
              <Reveal key={section.heading}>
                <section>
                  <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-accent">
                    {section.heading}
                  </h2>
                  {/* PLACEHOLDER copy — replace in src/content/site.js */}
                  <p className="mt-5 text-[clamp(1.15rem,1.6vw,1.45rem)] leading-relaxed text-ink/45">
                    {section.placeholder}
                  </p>

                  {/* Inline image placeholder for this section */}
                  <div className="mt-8 flex aspect-[16/10] items-center justify-center rounded-xl border border-dashed border-black/15 bg-neutral-50">
                    <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-ink/25">
                      Image / diagram placeholder
                    </span>
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </article>

        {/* Next case study */}
        <div className="border-t border-black/10 px-6 py-20 sm:px-8">
          <Link
            to={`/case/${next.slug}`}
            className="group mx-auto flex max-w-3xl flex-col gap-2"
          >
            <span className="text-[13px] font-medium uppercase tracking-[0.2em] text-ink/40">
              Next case study
            </span>
            <span className="inline-flex items-center gap-2 text-[clamp(1.6rem,3vw,2.5rem)] font-semibold tracking-tightest text-ink">
              {next.title}
              <span className="text-accent transition-transform duration-300 ease-smooth group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
