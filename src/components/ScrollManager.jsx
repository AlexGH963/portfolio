import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// Handles scrolling across route/hash changes:
//  1. On a fresh page load or refresh, always start at the top — even if the
//     URL still carries a "#section" hash from an earlier click. (Otherwise a
//     refresh would keep jumping you back down to that section.)
//  2. On in-app navigation to "/#section", scroll smoothly to that section.
//  3. On navigating to a fresh page (e.g. a case study), start at the top.
export default function ScrollManager() {
  const { pathname, hash } = useLocation()
  const firstLoad = useRef(true)

  useEffect(() => {
    // Take over scroll handling so the browser doesn't restore an old position
    // or jump to the hash on reload.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    if (firstLoad.current) {
      firstLoad.current = false
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return
    }

    if (hash) {
      // Let the target route render before scrolling to the anchor.
      const id = hash.replace('#', '')
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}
