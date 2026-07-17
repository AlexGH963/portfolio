import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'
import { staysCase as c } from '../content/staysCase.js'

// --- Small building blocks --------------------------------------------------

// Section kicker + headline, used at the top of nearly every chapter.
function Head({ kicker, title, body, tone = 'light', center = false }) {
  const dim = tone === 'dark' ? 'text-paper/40' : 'text-ink/40'
  const strong = tone === 'dark' ? 'text-paper' : 'text-ink'
  const soft = tone === 'dark' ? 'text-paper/60' : 'text-ink/60'
  return (
    <div className={center ? 'text-center' : ''}>
      <span className={`text-[12px] font-medium uppercase tracking-[0.2em] ${dim}`}>
        {kicker}
      </span>
      <h2
        className={`mt-4 text-balance text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.05] tracking-tightest ${strong}`}
      >
        {title}
      </h2>
      {body && (
        <p
          className={`mt-5 text-[clamp(1.05rem,1.35vw,1.25rem)] leading-relaxed ${soft} ${
            center ? 'mx-auto max-w-2xl' : 'max-w-2xl'
          }`}
        >
          {body}
        </p>
      )}
    </div>
  )
}

// Light or dark full-width chapter.
function Chapter({ tone = 'light', className = '', children }) {
  const tones = tone === 'dark' ? 'bg-ink text-paper' : 'bg-paper text-ink'
  return (
    <section className={`${tones} px-6 py-20 sm:px-8 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-container">{children}</div>
    </section>
  )
}

// Big number + supporting label.
function Stat({ value, label, body, tone = 'light' }) {
  const strong = tone === 'dark' ? 'text-paper' : 'text-ink'
  const soft = tone === 'dark' ? 'text-paper/55' : 'text-ink/55'
  return (
    <div>
      <div
        className={`text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-none tracking-tightest ${strong}`}
      >
        {value}
      </div>
      <p className={`mt-4 text-[15.5px] leading-relaxed ${soft}`}>{label}</p>
      {body && <p className={`mt-2 text-[14.5px] leading-relaxed ${soft}`}>{body}</p>}
    </div>
  )
}

// Numbered item — used for scope, considerations, lenses, story steps.
function Numbered({ n, label, body, tag, tone = 'light' }) {
  const dim = tone === 'dark' ? 'text-paper/35' : 'text-ink/35'
  const strong = tone === 'dark' ? 'text-paper' : 'text-ink'
  const soft = tone === 'dark' ? 'text-paper/55' : 'text-ink/55'
  const line = tone === 'dark' ? 'border-paper/15' : 'border-black/10'
  return (
    <div className={`border-t ${line} pt-6`}>
      <span className={`text-[13px] font-medium tabular-nums ${dim}`}>{n}</span>
      <h3 className={`mt-3 text-[19px] font-semibold tracking-tight ${strong}`}>{label}</h3>
      {tag && (
        <span className={`mt-2 block text-[11px] font-medium uppercase tracking-[0.18em] ${dim}`}>
          {tag}
        </span>
      )}
      <p className={`mt-3 text-[15.5px] leading-relaxed ${soft}`}>{body}</p>
    </div>
  )
}

// --- Page -------------------------------------------------------------------

export default function CaseStudyStays() {
  useEffect(() => {
    document.title = `${c.teaser.title} — Alexandros Hashemakis`
    return () => {
      document.title = 'Alexandros Hashemakis — Product Design Leader'
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        {/* ---- Title -------------------------------------------------- */}
        <header className="bg-paper px-6 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44">
          <div className="mx-auto max-w-container">
            <Link
              to="/#portfolio"
              className="text-[14px] font-medium text-ink/50 transition-colors hover:text-ink"
            >
              ← Back
            </Link>
            <Reveal>
              <span className="mt-10 block text-[12px] font-medium uppercase tracking-[0.2em] text-ink/40">
                {c.hero.kicker}
              </span>
              <h1 className="mt-5 max-w-4xl text-balance text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-tightest text-ink">
                {c.hero.title}
              </h1>
              <p className="mt-8 text-[15px] text-ink/50">{c.hero.byline}</p>
            </Reveal>
          </div>
        </header>

        {/* ---- The objective ------------------------------------------ */}
        <Chapter tone="dark">
          <Reveal>
            <Head
              kicker={c.objective.kicker}
              title={c.objective.title}
              body={c.objective.body}
              tone="dark"
            />
          </Reveal>
          <Reveal>
            <span className="mt-16 block text-[11px] font-medium uppercase tracking-[0.2em] text-paper/35">
              {c.objective.considerationsKicker}
            </span>
            <div className="mt-6 grid gap-8 sm:grid-cols-3 sm:gap-10">
              {c.objective.considerations.map((it) => (
                <Numbered key={it.n} {...it} tone="dark" />
              ))}
            </div>
          </Reveal>
          <Reveal>
            <p className="mt-16 max-w-3xl text-[clamp(1.15rem,1.7vw,1.5rem)] font-medium leading-relaxed tracking-tight text-paper">
              {c.objective.closing}
            </p>
          </Reveal>
        </Chapter>

        {/* ---- My scope ----------------------------------------------- */}
        <Chapter>
          <Reveal>
            <Head kicker={c.scope.kicker} title={c.scope.title} />
          </Reveal>
          <Reveal>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
              {c.scope.items.map((it) => (
                <Numbered key={it.n} {...it} />
              ))}
            </div>
          </Reveal>
        </Chapter>

        {/* ---- Funnel analysis ---------------------------------------- */}
        <Chapter className="border-t border-black/[0.07]">
          <Reveal>
            <Head kicker={c.funnel.kicker} title={c.funnel.title} body={c.funnel.body} />
          </Reveal>

          <Reveal>
            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-black/[0.07] sm:grid-cols-4">
              {c.funnel.steps.map((s) => (
                <div
                  key={s.label}
                  className={`p-7 sm:p-8 ${s.weakest ? 'bg-ink text-paper' : 'bg-paper'}`}
                >
                  <div
                    className={`text-[clamp(2rem,3.4vw,2.9rem)] font-semibold leading-none tracking-tightest ${
                      s.weakest ? 'text-paper' : 'text-ink'
                    }`}
                  >
                    {s.value}
                  </div>
                  <p
                    className={`mt-3 text-[14px] leading-snug ${
                      s.weakest ? 'text-paper/60' : 'text-ink/50'
                    }`}
                  >
                    {s.label}
                  </p>
                  {s.weakest && (
                    <span className="mt-4 inline-block text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                      Weakest link
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-4 text-[13px] text-ink/40">{c.funnel.caption}</p>
          </Reveal>

          <Reveal>
            <div className="mt-14 max-w-2xl">
              <Stat {...c.funnel.stat} />
            </div>
          </Reveal>
        </Chapter>

        {/* ---- The user moment ---------------------------------------- */}
        <Chapter tone="dark">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-paper/40">
                {c.moment.kicker}
              </span>
              <p className="mt-6 text-balance text-[clamp(1.9rem,4.4vw,3.5rem)] font-semibold leading-[1.1] tracking-tightest text-paper">
                {c.moment.title}
              </p>
              <p className="mx-auto mt-8 max-w-2xl text-[clamp(1.05rem,1.35vw,1.25rem)] leading-relaxed text-paper/55">
                {c.moment.body}
              </p>
            </div>
          </Reveal>
        </Chapter>

        {/* ---- Discovery ---------------------------------------------- */}
        <Chapter>
          <Reveal>
            <Head
              kicker={c.discovery.kicker}
              title={c.discovery.title}
              body={c.discovery.body}
            />
          </Reveal>
          <Reveal>
            <div className="mt-14 grid gap-8 sm:grid-cols-3 sm:gap-10">
              {c.discovery.lenses.map((it) => (
                <Numbered key={it.n} {...it} />
              ))}
            </div>
          </Reveal>
        </Chapter>

        {/* ---- Search intent ------------------------------------------ */}
        <Chapter className="border-t border-black/[0.07]">
          <Reveal>
            <Head
              kicker={c.searchIntent.kicker}
              title={c.searchIntent.title}
              body={c.searchIntent.body}
            />
          </Reveal>

          <Reveal>
            <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
              {c.searchIntent.cohorts.map((co) => (
                <div key={co.label} className="rounded-2xl border border-black/10 p-7 sm:p-8">
                  <h3 className="text-[19px] font-semibold tracking-tight text-ink">
                    {co.label}
                  </h3>
                  <dl className="mt-6">
                    {co.rows.map((r) => (
                      <div
                        key={r.k}
                        className="flex items-baseline justify-between gap-4 border-b border-black/[0.07] py-3 last:border-b-0"
                      >
                        <dt className="text-[14.5px] text-ink/50">{r.k}</dt>
                        <dd className="text-[16px] font-semibold tabular-nums tracking-tight text-ink">
                          {r.v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
              <div className="flex flex-col justify-center rounded-2xl bg-ink p-7 sm:p-8">
                <Stat {...c.searchIntent.stat} tone="dark" />
              </div>
            </div>
          </Reveal>
        </Chapter>

        {/* ---- Room selection ----------------------------------------- */}
        <Chapter className="border-t border-black/[0.07]">
          <Reveal>
            <Head
              kicker={c.roomSelection.kicker}
              title={c.roomSelection.title}
              body={c.roomSelection.body}
            />
          </Reveal>
          <Reveal>
            <div className="mt-14 grid gap-10 sm:grid-cols-3">
              {c.roomSelection.stats.map((s) => (
                <Stat key={s.value} {...s} />
              ))}
            </div>
          </Reveal>
          <Reveal>
            <p className="mt-14 max-w-3xl text-[clamp(1.15rem,1.7vw,1.5rem)] font-medium leading-relaxed tracking-tight text-ink">
              {c.roomSelection.closing}
            </p>
          </Reveal>
        </Chapter>

        {/* ---- The flagship — collapse the duplicates ----------------- */}
        <Chapter tone="dark">
          <Reveal>
            <Head
              kicker={c.flagship.kicker}
              title={c.flagship.title}
              body={c.flagship.body}
              tone="dark"
            />
          </Reveal>

          <Reveal>
            <div className="mt-14 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
              {/* Before */}
              <div className="rounded-2xl border border-paper/15 p-6 sm:p-7">
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-paper/40">
                  {c.flagship.before.label}
                </span>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {c.flagship.before.rooms.map((r, i) => (
                    <li
                      key={i}
                      className={`flex items-center justify-between gap-3 rounded-lg px-4 py-3 text-[14.5px] ${
                        r.duplicate
                          ? 'bg-paper/[0.04] text-paper/40'
                          : 'bg-paper/[0.08] text-paper'
                      }`}
                    >
                      <span>{r.name}</span>
                      {r.duplicate && (
                        <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.14em] text-accent">
                          Duplicate
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                aria-hidden="true"
                className="text-center text-2xl text-paper/30 lg:text-3xl"
              >
                <span className="hidden lg:inline">→</span>
                <span className="lg:hidden">↓</span>
              </div>

              {/* After */}
              <div className="rounded-2xl border border-paper/15 p-6 sm:p-7">
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-paper/40">
                  {c.flagship.after.label}
                </span>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {c.flagship.after.rooms.map((r, i) => (
                    <li key={i} className="rounded-lg bg-paper/[0.08] px-4 py-3">
                      <span className="text-[14.5px] text-paper">{r.name}</span>
                      <span className="mt-1 block text-[13px] text-paper/45">{r.action}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[13px] text-paper/40">{c.flagship.caption}</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="mt-12 text-[clamp(1.15rem,1.7vw,1.5rem)] font-medium tracking-tight text-paper">
              {c.flagship.result}
            </p>
          </Reveal>
        </Chapter>

        {/* ---- Voice of the customer ---------------------------------- */}
        <Chapter>
          <Reveal>
            <Head kicker={c.voc.kicker} title={c.voc.title} />
          </Reveal>
          <div className="mt-14 flex flex-col gap-14">
            {c.voc.groups.map((g) => (
              <Reveal key={g.label}>
                <div className="border-t border-black/10 pt-8">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                    <h3 className="text-[22px] font-semibold tracking-tight text-ink">
                      {g.label}
                    </h3>
                    <p className="text-[16px] text-ink/45">{g.question}</p>
                  </div>
                  <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {g.items.map((it) => (
                      <div key={it.label}>
                        <h4 className="text-[16.5px] font-semibold tracking-tight text-ink">
                          {it.label}
                        </h4>
                        <p className="mt-3 text-[15px] leading-relaxed text-ink/55">
                          {it.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Chapter>

        {/* ---- Competitive benchmark ---------------------------------- */}
        <Chapter className="border-t border-black/[0.07]">
          <Reveal>
            <Head
              kicker={c.benchmark.kicker}
              title={c.benchmark.title}
              body={c.benchmark.body}
            />
          </Reveal>
          <Reveal>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {c.benchmark.areas.map((a) => (
                <div key={a.label} className="border-t border-black/10 pt-6">
                  <h3 className="text-[19px] font-semibold tracking-tight text-ink">
                    {a.label}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/55">{a.body}</p>
                  <p className="mt-4 text-[13px] font-medium text-accent">Gap: {a.gap}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-14 rounded-2xl bg-ink p-8 sm:p-12">
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-paper/40">
                {c.benchmark.takeawayKicker}
              </span>
              <p className="mt-5 max-w-4xl text-[clamp(1.1rem,1.6vw,1.4rem)] leading-relaxed text-paper">
                {c.benchmark.takeaway}
              </p>
            </div>
          </Reveal>
        </Chapter>

        {/* ---- Design direction & experimentation --------------------- */}
        <Chapter className="border-t border-black/[0.07]">
          <Reveal>
            <Head
              kicker={c.experimentation.kicker}
              title={c.experimentation.title}
              body={c.experimentation.body}
              center
            />
          </Reveal>
        </Chapter>

        {/* ---- Sizing & prioritization -------------------------------- */}
        <Chapter className="border-t border-black/[0.07]">
          <Reveal>
            <Head kicker={c.sizing.kicker} title={c.sizing.title} body={c.sizing.body} />
          </Reveal>
          <Reveal>
            <span className="mt-14 block text-[11px] font-medium uppercase tracking-[0.2em] text-ink/35">
              {c.sizing.focusKicker}
            </span>
            <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
              {c.sizing.areas.map((a) => (
                <div key={a.label} className="border-t border-black/10 pt-6">
                  <h3 className="text-[17px] font-semibold tracking-tight text-ink">
                    {a.label}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink/55">{a.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Chapter>

        {/* ---- Quick wins --------------------------------------------- */}
        <Chapter tone="dark">
          <Reveal>
            <Head
              kicker={c.quickWins.kicker}
              title={c.quickWins.title}
              body={c.quickWins.body}
              tone="dark"
            />
          </Reveal>
          <Reveal>
            <div className="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-16">
              {c.quickWins.stats.map((s) => (
                <Stat key={s.value} {...s} tone="dark" />
              ))}
            </div>
          </Reveal>
        </Chapter>

        {/* ---- What changed / shipped --------------------------------- */}
        <Chapter>
          <Reveal>
            <Head kicker={c.shipped.kicker} title={c.shipped.title} />
          </Reveal>
          <div className="mt-14 flex flex-col gap-16 sm:gap-24">
            {c.shipped.items.map((it) => (
              <Reveal key={it.label}>
                <div className="grid gap-10 border-t border-black/10 pt-10 lg:grid-cols-12 lg:gap-16">
                  <div className="lg:col-span-5">
                    <h3 className="text-[clamp(1.6rem,2.6vw,2.25rem)] font-semibold tracking-tightest text-ink">
                      {it.label}
                    </h3>
                    <p className="mt-5 text-[13px] font-medium uppercase tracking-[0.16em] text-accent">
                      {it.result}
                    </p>
                    {it.screens?.length > 0 && (
                      <div className="mt-8 flex gap-4">
                        {it.screens.map((src) => (
                          <div key={src} className="screen w-[132px] shrink-0">
                            <img src={src} alt={`${it.label} screen`} loading="lazy" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="lg:col-span-7">
                    <p className="mb-5 text-[13px] font-medium uppercase tracking-[0.2em] text-ink/40">
                      What changed
                    </p>
                    <ul>
                      {it.changes.map((ch) => (
                        <li
                          key={ch}
                          className="border-b border-black/[0.07] py-4 text-[15.5px] leading-relaxed text-ink/60 last:border-b-0"
                        >
                          {ch}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Chapter>

        {/* ---- The wave ----------------------------------------------- */}
        <Chapter tone="dark">
          <Reveal>
            <Head kicker={c.wave.kicker} title={c.wave.title} body={c.wave.body} tone="dark" />
          </Reveal>
          <Reveal>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {c.wave.groups.map((g) => (
                <div key={g.label} className="border-t border-paper/15 pt-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-[17px] font-semibold tracking-tight text-paper">
                      {g.label}
                    </h3>
                    <span className="text-[13px] font-medium tabular-nums text-accent">
                      {g.count}
                    </span>
                  </div>
                  <ul className="mt-5 flex flex-col gap-3">
                    {g.items.map((i) => (
                      <li key={i} className="text-[14.5px] leading-relaxed text-paper/55">
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </Chapter>

        {/* ---- Upsell opportunity ------------------------------------- */}
        <Chapter className="border-t border-black/[0.07]">
          <Reveal>
            <Head
              kicker={c.upsell.kicker}
              title={c.upsell.title}
              body={c.upsell.body}
            />
          </Reveal>
          <Reveal>
            <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="mb-5 text-[13px] font-medium uppercase tracking-[0.2em] text-ink/40">
                  {c.upsell.didKicker}
                </p>
                <ul>
                  {c.upsell.did.map((d) => (
                    <li
                      key={d}
                      className="border-b border-black/[0.07] py-4 text-[15.5px] leading-relaxed text-ink/60 last:border-b-0"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-ink p-8 sm:p-12">
                <Stat {...c.upsell.stat} tone="dark" />
                <p className="mt-8 text-[15px] leading-relaxed text-paper/55">
                  {c.upsell.closing}
                </p>
              </div>
            </div>
          </Reveal>
        </Chapter>

        {/* ---- The story so far --------------------------------------- */}
        <Chapter tone="dark">
          <Reveal>
            <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-paper/40">
              {c.story.kicker}
            </span>
            <p className="mt-5 max-w-4xl text-balance text-[clamp(1.5rem,2.8vw,2.4rem)] font-semibold leading-[1.15] tracking-tightest text-paper">
              {c.story.title}
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-14 grid gap-8 sm:grid-cols-3 sm:gap-10">
              {c.story.steps.map((s) => (
                <Numbered key={s.n} n={`${s.n} ·`} label={s.label} body={s.body} tone="dark" />
              ))}
            </div>
          </Reveal>
          <Reveal>
            <p className="mt-16 text-balance text-[clamp(1.75rem,3.6vw,3rem)] font-semibold tracking-tightest text-paper">
              {c.story.closing}
            </p>
          </Reveal>
        </Chapter>

        {/* ---- Back --------------------------------------------------- */}
        <div className="bg-paper px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-container">
            <Link
              to="/#portfolio"
              className="group inline-flex items-center gap-2 text-[clamp(1.4rem,2.4vw,2rem)] font-semibold tracking-tightest text-ink"
            >
              <span
                aria-hidden="true"
                className="text-accent transition-transform duration-300 ease-smooth group-hover:-translate-x-1"
              >
                ←
              </span>
              Back to the portfolio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
