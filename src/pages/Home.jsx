import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
// WhatIDo statements now live as white cards inside Leadership.
import Leadership from '../components/Leadership.jsx'
import Portfolio from '../components/Portfolio.jsx'
import CaseStudyTeaser from '../components/CaseStudyTeaser.jsx'
// import AiNative from '../components/AiNative.jsx' // hidden for now — re-enable later
// import CaseStudies from '../components/CaseStudies.jsx' // hidden for now — re-enable later
import Timeline from '../components/Timeline.jsx'
import About from '../components/About.jsx'
import Contact from '../components/Contact.jsx'
// import ProofStrip from '../components/ProofStrip.jsx' // footer ribbon removed — re-enable later

// The single scrolling page. The footer card ribbon (ProofStrip) was removed;
// the "Let's talk" section now closes the page.
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Leadership />
        <Portfolio />
        <CaseStudyTeaser />
        {/* <AiNative /> hidden for now — re-enable later */}
        {/* <CaseStudies /> hidden for now — re-enable later */}
        <Timeline />
        <About />
        <Contact />
        {/* <ProofStrip /> footer ribbon removed — re-enable later */}
      </main>
    </>
  )
}
