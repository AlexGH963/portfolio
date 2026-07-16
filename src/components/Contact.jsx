import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { contact } from '../content/site.js'

const EMAIL = 'alexhashemakis@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/alexandros-g-hashemakis-54a14599/'
const btnClass =
  'inline-flex items-center rounded-full border-0 bg-ink px-8 py-4 text-[16px] font-medium text-paper transition-opacity duration-200 hover:opacity-85'

// Big, confident closer with the primary calls to action.
export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <section id="contact" className="bg-paper px-6 pt-32 pb-32 sm:px-8 sm:pt-48 sm:pb-48">
      <div className="mx-auto max-w-container text-center">
        <Reveal>
          <h2 className="text-balance text-[clamp(3rem,10vw,8rem)] font-semibold leading-[0.95] tracking-tightest text-ink">
            {contact.headline}
          </h2>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <button type="button" onClick={copyEmail} className={btnClass}>
              {copied ? 'Copied!' : 'Email'}
            </button>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className={btnClass}
            >
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
