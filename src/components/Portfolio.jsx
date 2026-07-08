import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import ProjectStack from './ProjectStack.jsx'
import { withAiGradient } from './withAiGradient.jsx'
import { portfolio } from '../content/site.js'

// "What I led — across the portfolio." Four product lines, each with a bold
// name, a one-line scope statement, and clean, scannable initiative sub-items.
export default function Portfolio() {
  return (
    <Section id="portfolio">
      <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-4">
        <Reveal>
          <h2 className="text-balance text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-tightest text-ink">
            {portfolio.headline}
          </h2>
          <p className="mt-6 max-w-xl text-[clamp(1.05rem,1.4vw,1.3rem)] leading-relaxed text-ink/60">
            {portfolio.intro}
          </p>
        </Reveal>
        <div className="w-full min-w-0">
          <ProjectStack />
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-16 sm:mt-24 sm:gap-24">
        {portfolio.products.map((product) => (
          <Reveal key={product.name}>
            <div className="grid gap-8 border-t border-black/10 pt-10 lg:grid-cols-12 lg:gap-16">
              {/* Product name + scope */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4">
                  {product.icon && (
                    <img
                      src={product.icon}
                      alt=""
                      aria-hidden="true"
                      className="product__icon h-14 w-14 shrink-0 sm:h-16 sm:w-16"
                    />
                  )}
                  <h3 className="metal-text text-[clamp(1.8rem,3vw,2.75rem)] font-semibold tracking-tightest">
                    {product.name}
                  </h3>
                </div>
                <p className="mt-4 max-w-md text-[16px] leading-relaxed text-ink/60">
                  {product.scope}
                </p>
              </div>

              {/* Initiatives */}
              <div className="lg:col-span-7">
                <p className="mb-5 text-[13px] font-medium uppercase tracking-[0.2em] text-ink/40">
                  Selected initiatives
                </p>
                <ul>
                  {product.initiatives.map((it) => (
                    <li
                      key={it.title}
                      className="border-b border-black/[0.07] py-5 last:border-b-0"
                    >
                      <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                        <h4 className="shrink-0 text-[16.5px] font-semibold tracking-tight text-ink sm:w-56">
                          {withAiGradient(it.title)}
                        </h4>
                        <p className="text-[15.5px] leading-relaxed text-ink/60">
                          {it.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
