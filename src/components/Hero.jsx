import ScreenShowcase from './ScreenShowcase.jsx'
import AiToggle from './AiToggle.jsx'
import { hero } from '../content/site.js'

// Full-viewport hero. Headline-led copy on the left, with an auto-scrolling
// showcase of app screens on the right.
export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center px-6 pb-20 pt-32 sm:px-8 lg:pt-40"
    >
      {/* Ask-AI toggle — top-right corner, matching the Ask page position */}
      <div className="absolute right-6 top-6 z-20 sm:right-8">
        <AiToggle />
      </div>

      <div className="mx-auto grid w-full max-w-container items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Copy */}
        <div className="lg:col-span-7">
          <p className="reveal reveal-in mb-6 text-[13px] font-medium uppercase tracking-[0.2em] text-ink/50">
            {hero.tag}
          </p>
          <h1 className="text-balance text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-[0.98] tracking-tightest text-ink">
            {hero.headline}
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-[clamp(1.05rem,1.4vw,1.3rem)] leading-relaxed text-ink/70">
            {hero.subline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-full bg-ink px-7 text-[15px] font-medium text-paper transition-transform duration-300 ease-smooth hover:-translate-y-0.5"
            >
              Get in touch
            </a>
            <a
              href="#portfolio"
              className="inline-flex h-12 items-center rounded-full px-4 text-[15px] font-medium text-ink/70 transition-colors hover:text-ink"
            >
              See the work →
            </a>
          </div>
        </div>

        {/* Design showcase — auto-scrolling app screens */}
        <div className="lg:col-span-5">
          <ScreenShowcase />
        </div>
      </div>

      {/* Quiet scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
        <span className="text-[12px] font-medium uppercase tracking-[0.25em] text-ink/30">
          Scroll
        </span>
      </div>
    </section>
  )
}
