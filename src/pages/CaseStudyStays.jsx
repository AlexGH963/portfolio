import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '../components/Header.jsx'
import Reveal from '../components/Reveal.jsx'
import { withAiGradient } from '../components/withAiGradient.jsx'
import { staysCase as c } from '../content/staysCase.js'

// --- Building blocks --------------------------------------------------------

// Bento surface. Light chapters get the light twin; `glow` adds the AI
// section's radial bloom for the one or two cards that should carry weight.
function Card({ tone = 'light', glow = false, className = '', children }) {
  return (
    <div
      className={`bento-card ${tone === 'light' ? 'bento-card--light' : ''} ${
        glow ? 'cs-glow' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

// Metadata pill — results, counts, gaps, labels. Outline by default; `solid`
// inverts against the chapter (black on light, white on dark).
function Tag({ variant = '', tone = 'light', className = '', children }) {
  const v =
    variant === 'solid'
      ? tone === 'dark'
        ? 'cs-tag--solid-dark'
        : 'cs-tag--solid'
      : tone === 'dark'
        ? 'cs-tag--dark'
        : ''
  return <span className={`cs-tag ${v} ${className}`}>{children}</span>
}

function Head({ kicker, title, body, tone = 'light', center = false }) {
  const dim = tone === 'dark' ? 'text-paper/40' : 'text-ink/40'
  const strong = tone === 'dark' ? 'text-paper' : 'text-ink'
  const soft = tone === 'dark' ? 'text-paper/60' : 'text-ink/60'
  return (
    <div className={center ? 'text-center' : ''}>
      <span className={`text-[12px] font-semibold uppercase tracking-[0.18em] ${dim}`}>
        {kicker}
      </span>
      <h2
        className={`mt-4 text-balance text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.05] tracking-tightest ${strong}`}
      >
        {withAiGradient(title)}
      </h2>
      {body && (
        <p
          className={`mt-5 text-[clamp(1.05rem,1.35vw,1.25rem)] leading-relaxed ${soft} ${
            center ? 'mx-auto max-w-2xl' : 'max-w-2xl'
          }`}
        >
          {withAiGradient(body)}
        </p>
      )}
    </div>
  )
}

function Chapter({ tone = 'light', className = '', children }) {
  const tones = tone === 'dark' ? 'bg-ink text-paper' : 'bg-paper text-ink'
  return (
    <section className={`${tones} px-6 py-20 sm:px-8 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-container">{children}</div>
    </section>
  )
}

function Stat({ value, label, body, tone = 'light' }) {
  const strong = tone === 'dark' ? 'text-paper' : 'text-ink'
  const soft = tone === 'dark' ? 'text-paper/55' : 'text-ink/55'
  return (
    <>
      <div
        className={`text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-none tracking-tightest ${strong}`}
      >
        {value}
      </div>
      <p className={`mt-4 text-[15.5px] leading-relaxed ${soft}`}>{label}</p>
      {body && <p className={`mt-2 text-[14.5px] leading-relaxed ${soft}`}>{body}</p>}
    </>
  )
}

// Numbered bento item — scope, considerations, lenses, story steps.
function NumCard({ n, label, body, tag, tone = 'light' }) {
  const dim = tone === 'dark' ? 'text-paper/35' : 'text-ink/35'
  const strong = tone === 'dark' ? 'text-paper' : 'text-ink'
  const soft = tone === 'dark' ? 'text-paper/55' : 'text-ink/55'
  return (
    <Card tone={tone}>
      <span className={`text-[13px] font-medium tabular-nums ${dim}`}>{n}</span>
      <h3 className={`mt-3 text-[19px] font-semibold tracking-tight ${strong}`}>{label}</h3>
      {tag && (
        <div className="mt-3">
          <Tag tone={tone}>{tag}</Tag>
        </div>
      )}
      <p className={`mt-3 text-[15.5px] leading-relaxed ${soft}`}>{withAiGradient(body)}</p>
    </Card>
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
              <span className="mt-10 block text-[12px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                {c.hero.kicker}
              </span>
              <h1 className="mt-5 max-w-4xl text-balance text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-tightest text-ink">
                {c.hero.title}
              </h1>
            </Reveal>
          </div>
        </header>

        {/* ---- The objective ------------------------------------------ */}
        <Chapter tone="dark">
          <Reveal>
            <Card tone="dark" glow className="px-8 py-12 sm:px-12 sm:py-16">
              <Head
                kicker={c.objective.kicker}
                title={c.objective.title}
                body={c.objective.body}
                tone="dark"
              />
            </Card>
          </Reveal>
          <Reveal>
            <span className="mt-14 block text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/35">
              {c.objective.considerationsKicker}
            </span>
            <div className="mt-5 grid gap-3.5 sm:grid-cols-3">
              {c.objective.considerations.map((it) => (
                <NumCard key={it.n} {...it} tone="dark" />
              ))}
            </div>
          </Reveal>
          <Reveal>
            <p className="mt-14 max-w-3xl text-[clamp(1.15rem,1.7vw,1.5rem)] font-medium leading-relaxed tracking-tight text-paper">
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
            <div className="mt-12 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {c.scope.items.map((it) => (
                <NumCard key={it.n} {...it} />
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
            <div className="mt-12 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
              {c.funnel.steps.map((s) => (
                <Card key={s.label} tone={s.weakest ? 'dark' : 'light'} glow={s.weakest}>
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
                    <div className="mt-4">
                      <Tag variant="solid" tone="dark">Weakest link</Tag>
                    </div>
                  )}
                </Card>
              ))}
            </div>
            <p className="mt-4 text-[13px] text-ink/40">{c.funnel.caption}</p>
          </Reveal>

          <Reveal>
            <Card className="mt-3.5 px-8 py-10 sm:px-12 sm:py-12">
              <div className="max-w-2xl">
                <Stat {...c.funnel.stat} />
              </div>
            </Card>
          </Reveal>
        </Chapter>

        {/* ---- The user moment ---------------------------------------- */}
        <Chapter tone="dark">
          <Reveal>
            <Card tone="dark" glow className="px-8 py-16 sm:px-12 sm:py-24">
              <div className="mx-auto max-w-4xl text-center">
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-paper/40">
                  {c.moment.kicker}
                </span>
                <p className="mt-6 text-balance text-[clamp(1.9rem,4.4vw,3.5rem)] font-semibold leading-[1.1] tracking-tightest text-paper">
                  {c.moment.title}
                </p>
                <p className="mx-auto mt-8 max-w-2xl text-[clamp(1.05rem,1.35vw,1.25rem)] leading-relaxed text-paper/55">
                  {c.moment.body}
                </p>
              </div>
            </Card>
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
            <div className="mt-12 grid gap-3.5 sm:grid-cols-3">
              {c.discovery.lenses.map((it) => (
                <NumCard key={it.n} {...it} />
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
            <div className="mt-12 grid gap-3.5 lg:grid-cols-3">
              {c.searchIntent.cohorts.map((co) => (
                <Card key={co.label}>
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
                </Card>
              ))}
              <Card tone="dark" glow className="flex flex-col justify-center">
                <Stat {...c.searchIntent.stat} tone="dark" />
              </Card>
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
            <div className="mt-12 grid gap-3.5 sm:grid-cols-3">
              {c.roomSelection.stats.map((s) => (
                <Card key={s.value}>
                  <Stat {...s} />
                </Card>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <p className="mt-12 max-w-3xl text-[clamp(1.15rem,1.7vw,1.5rem)] font-medium leading-relaxed tracking-tight text-ink">
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
            <div className="mt-12 grid items-center gap-3.5 lg:grid-cols-[1fr_auto_1fr]">
              {/* Before */}
              <Card tone="dark">
                <span className="bento__kicker">{c.flagship.before.label}</span>
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
                        <Tag tone="dark" className="shrink-0">
                          Duplicate
                        </Tag>
                      )}
                    </li>
                  ))}
                </ul>
              </Card>

              <div
                aria-hidden="true"
                className="text-center text-2xl text-paper/30 lg:text-3xl"
              >
                <span className="hidden lg:inline">→</span>
                <span className="lg:hidden">↓</span>
              </div>

              {/* After */}
              <Card tone="dark" glow>
                <span className="bento__kicker">{c.flagship.after.label}</span>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {c.flagship.after.rooms.map((r, i) => (
                    <li key={i} className="rounded-lg bg-paper/[0.08] px-4 py-3">
                      <span className="text-[14.5px] text-paper">{r.name}</span>
                      <span className="mt-1 block text-[13px] text-paper/45">{r.action}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[13px] text-paper/40">{c.flagship.caption}</p>
              </Card>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 cs-tags">
              <Tag variant="solid" tone="dark">Conversion ↑</Tag>
              <Tag variant="solid" tone="dark">AOV ↑</Tag>
              <Tag tone="dark">One change, two levers</Tag>
            </div>
          </Reveal>
        </Chapter>

        {/* ---- Voice of the customer ---------------------------------- */}
        <Chapter>
          <Reveal>
            <Head kicker={c.voc.kicker} title={c.voc.title} />
          </Reveal>
          <div className="mt-12 flex flex-col gap-3.5">
            {c.voc.groups.map((g) => (
              <Reveal key={g.label}>
                <Card className="px-7 py-8 sm:px-9 sm:py-10">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                    <h3 className="text-[22px] font-semibold tracking-tight text-ink">
                      {g.label}
                    </h3>
                    <Tag>{g.question}</Tag>
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
                </Card>
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
            <div className="mt-12 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {c.benchmark.areas.map((a) => (
                <Card key={a.label}>
                  <h3 className="text-[19px] font-semibold tracking-tight text-ink">
                    {a.label}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/55">
                    {withAiGradient(a.body)}
                  </p>
                  <div className="mt-4">
                    <Tag variant="solid">Gap: {a.gap}</Tag>
                  </div>
                </Card>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <Card tone="dark" glow className="mt-3.5 px-8 py-10 sm:px-12 sm:py-14">
              <span className="bento__kicker">{c.benchmark.takeawayKicker}</span>
              <p className="mt-5 max-w-4xl text-[clamp(1.1rem,1.6vw,1.4rem)] leading-relaxed text-paper">
                {c.benchmark.takeaway}
              </p>
            </Card>
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
            <span className="mt-12 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/35">
              {c.sizing.focusKicker}
            </span>
            {/* The three we started with are inverted so they lead the row. */}
            <div className="mt-5 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
              {c.sizing.areas.map((a) => (
                <Card
                  key={a.label}
                  tone={a.started ? 'dark' : 'light'}
                  glow={a.started}
                  className="flex flex-col"
                >
                  <h3
                    className={`text-[17px] font-semibold tracking-tight ${
                      a.started ? 'text-paper' : 'text-ink'
                    }`}
                  >
                    {a.label}
                  </h3>
                  <p
                    className={`mt-3 text-[14.5px] leading-relaxed ${
                      a.started ? 'text-paper/60' : 'text-ink/55'
                    }`}
                  >
                    {a.body}
                  </p>
                  {a.started && (
                    <div className="mt-5 pt-1">
                      <Tag variant="solid" tone="dark">
                        Started here
                      </Tag>
                    </div>
                  )}
                </Card>
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
            <div className="mt-12 grid items-center gap-3.5 lg:grid-cols-3">
              <div className="grid gap-3.5 sm:grid-cols-2 lg:col-span-2">
                {c.quickWins.stats.map((s) => (
                  <Card key={s.value} tone="dark" glow className="px-8 py-10">
                    <Stat {...s} tone="dark" />
                  </Card>
                ))}
              </div>
              <div className="cs-shots justify-center">
                <div className="cs-shot">
                  <img
                    src={c.quickWins.screen}
                    alt="Property selection — reviews and map surfaced on the detail page"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </Chapter>

        {/* ---- What changed / shipped --------------------------------- */}
        <Chapter>
          <Reveal>
            <Head kicker={c.shipped.kicker} title={c.shipped.title} />
          </Reveal>
          <div className="mt-12 flex flex-col gap-3.5">
            {c.shipped.items.map((it) => (
              <Reveal key={it.label}>
                <Card className="px-7 py-9 sm:px-10 sm:py-12">
                  <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                    {/* Copy */}
                    <div className="lg:col-span-5">
                      <h3 className="text-[clamp(1.6rem,2.6vw,2.25rem)] font-semibold tracking-tightest text-ink">
                        {it.label}
                      </h3>
                      <div className="mt-5 cs-tags">
                        {it.results.map((r) => (
                          <Tag key={r} variant="solid">
                            {r}
                          </Tag>
                        ))}
                      </div>
                      <p className="mb-4 mt-8 text-[12px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                        What changed
                      </p>
                      <ul>
                        {it.changes.map((ch) => (
                          <li
                            key={ch}
                            className="border-b border-black/[0.07] py-4 text-[15.5px] leading-relaxed text-ink/60 last:border-b-0"
                          >
                            {withAiGradient(ch)}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Solution screens — the deck's own exports, large */}
                    <div className="lg:col-span-7">
                      <div className="cs-shots justify-center">
                        {it.screens.map((src) => (
                          <div key={src} className="cs-shot">
                            <img src={src} alt={`${it.label} — Stays app screen`} loading="lazy" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
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
            <div className="mt-12 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
              {c.wave.groups.map((g) => (
                <Card key={g.label} tone="dark">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-[17px] font-semibold tracking-tight text-paper">
                      {g.label}
                    </h3>
                    <Tag variant="solid" tone="dark">{g.count}</Tag>
                  </div>
                  <ul className="mt-5 flex flex-col gap-3">
                    {g.items.map((i) => (
                      <li key={i} className="text-[14.5px] leading-relaxed text-paper/55">
                        {withAiGradient(i)}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Reveal>
        </Chapter>

        {/* ---- Upsell opportunity ------------------------------------- */}
        <Chapter className="border-t border-black/[0.07]">
          <Reveal>
            <Head kicker={c.upsell.kicker} title={c.upsell.title} body={c.upsell.body} />
          </Reveal>
          <Reveal>
            <div className="mt-12 grid items-stretch gap-3.5 lg:grid-cols-3">
              <Card className="px-7 py-8 sm:px-9 sm:py-10">
                <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-ink/40">
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
              </Card>
              <Card className="flex items-center justify-center px-6 py-8">
                <div className="cs-shot">
                  <img
                    src={c.upsell.screen}
                    alt="Breakfast upsell offered before checkout"
                    loading="lazy"
                  />
                </div>
              </Card>
              <Card tone="dark" glow className="flex flex-col justify-center px-8 py-10 sm:px-12">
                <Stat {...c.upsell.stat} tone="dark" />
                <div className="mt-6 cs-tags">
                  <Tag variant="solid" tone="dark">New business KPI</Tag>
                </div>
                <p className="mt-6 text-[15px] leading-relaxed text-paper/55">
                  {c.upsell.closing}
                </p>
              </Card>
            </div>
          </Reveal>
        </Chapter>

        {/* ---- The story so far --------------------------------------- */}
        <Chapter tone="dark">
          <Reveal>
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-paper/40">
              {c.story.kicker}
            </span>
            <p className="mt-5 max-w-4xl text-balance text-[clamp(1.5rem,2.8vw,2.4rem)] font-semibold leading-[1.15] tracking-tightest text-paper">
              {c.story.title}
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-12 grid gap-3.5 sm:grid-cols-3">
              {c.story.steps.map((s) => (
                <NumCard key={s.n} n={`${s.n} ·`} label={s.label} body={s.body} tone="dark" />
              ))}
            </div>
          </Reveal>
          <Reveal>
            <Card tone="dark" glow className="mt-3.5 px-8 py-14 text-center sm:py-16">
              <p className="text-balance text-[clamp(1.75rem,3.6vw,3rem)] font-semibold tracking-tightest text-paper">
                {c.story.closing}
              </p>
            </Card>
          </Reveal>
        </Chapter>

        {/* ---- Back --------------------------------------------------- */}
        <div className="bg-paper px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-container">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-[clamp(1.4rem,2.4vw,2rem)] font-semibold tracking-tightest text-ink"
            >
              <span
                aria-hidden="true"
                className="transition-transform duration-300 ease-smooth group-hover:-translate-x-1"
              >
                ←
              </span>
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
