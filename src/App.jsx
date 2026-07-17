import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import ScrollManager from './components/ScrollManager.jsx'
import Home from './pages/Home.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import CaseStudyStays from './pages/CaseStudyStays.jsx'
import Ask from './pages/Ask.jsx'
import NotFound from './pages/NotFound.jsx'

// Top-level routing. The site is a single scrolling page (Home) plus
// templated, routed case-study pages.
export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Ask AI hidden for now — re-enable by uncommenting:
        <Route path="/ask" element={<Ask />} /> */}
        {/* Fully written case study — takes precedence over the template. */}
        <Route path="/case/turning-stays-around" element={<CaseStudyStays />} />
        <Route path="/case/:slug" element={<CaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Vercel Web Analytics — privacy-friendly page-view + visitor counts. */}
      <Analytics />
    </>
  )
}
