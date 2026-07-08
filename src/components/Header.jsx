import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { nav, meta } from '../content/site.js'

// Minimal fixed header that fades in once you scroll past the hero.
// On the home page, links are in-page anchors. On any other route (a case
// study), they become "/#section" links so navigation returns home first.
export default function Header() {
  const [visible, setVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const hrefFor = (anchor) => (onHome ? anchor : `/${anchor}`)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth ${
        visible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-2 opacity-0 pointer-events-none'
      }`}
    >
      <div className="border-b border-black/5 bg-paper/80 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex h-[68px] max-w-container items-center justify-between px-6 sm:px-8">
          {/* Wordmark → home */}
          <Link
            to="/"
            className="text-[15px] font-semibold tracking-tight text-ink transition-opacity hover:opacity-60"
          >
            {meta.name}
          </Link>

          {/* Right group: nav + Ask-AI toggle + mobile menu */}
          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={hrefFor(item.href)}
                  className="text-[14px] font-medium text-ink/70 transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden -mr-2 p-2 text-ink"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                ) : (
                  <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {menuOpen && (
          <nav
            className="border-t border-black/5 bg-paper/95 px-6 pb-6 pt-2 md:hidden"
            aria-label="Mobile"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={hrefFor(item.href)}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-[17px] font-medium text-ink/80 transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
