import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Handles two things across route changes:
//  1. Navigating to "/#section" scrolls smoothly to that section.
//  2. Navigating to a fresh page (e.g. a case study) starts at the top.
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
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
