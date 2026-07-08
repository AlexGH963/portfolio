import { meta, footer, contact } from '../content/site.js'

// Quiet footer — wordmark, copyright, and a compact link set.
export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-paper px-6 py-12 sm:px-8">
      <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-6 sm:flex-row">
        <span className="text-[15px] font-semibold tracking-tight text-ink">
          {meta.name}
        </span>
        <div className="flex items-center gap-6">
          {contact.links.map((link) => {
            const external = link.href.startsWith('http')
            return (
              <a
                key={link.label}
                href={link.href}
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="text-[14px] font-medium text-ink/55 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-container text-[13px] text-ink/40">
        {footer.note}
      </p>
    </footer>
  )
}
