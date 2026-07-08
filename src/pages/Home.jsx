import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
// WhatIDo statements now live as white cards inside Leadership.
import Leadership from '../components/Leadership.jsx'
import Portfolio from '../components/Portfolio.jsx'
import AiNative from '../components/AiNative.jsx'
// import CaseStudies from '../components/CaseStudies.jsx' // hidden for now — re-enable later
import Timeline from '../components/Timeline.jsx'
import About from '../components/About.jsx'
import Contact from '../components/Contact.jsx'
import ProofStrip from '../components/ProofStrip.jsx'

// The single scrolling page. The card ribbon (ProofStrip) closes the page,
// after the "Let's talk" section.
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Leadership />
        <Portfolio />
        <AiNative />
        {/* <CaseStudies /> hidden for now — re-enable later */}
        <Timeline />
        <About />
        <Contact />
        <ProofStrip />
      </main>
    </>
  )
}
