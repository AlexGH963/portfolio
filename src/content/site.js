// ============================================================================
//  SITE CONTENT
//  Every word on the site lives here. Edit copy freely without touching layout.
//  Links marked PLACEHOLDER should be swapped for real URLs.
// ============================================================================

export const meta = {
  name: 'Alexandros Hashemakis',
  role: 'Product Design Leader',
}

// --- Fixed header navigation (anchors into the single-page scroll) ----------
export const nav = [
  { label: 'Product design', href: '#leadership' },
  { label: 'Recent work', href: '#portfolio' },
  // { label: 'Case studies', href: '#case-studies' }, // hidden for now
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

// --- 1. Hero ----------------------------------------------------------------
export const hero = {
  headline: 'Product design leader who turns design into measurable growth.',
  subline:
    "15 years designing digital products, the last decade leading design across Saudi Arabia's leading travel platform. I build the teams, experimentation cultures, and AI-native ways of working that make design compound into real business results.",
  tag: 'Alexandros Hashemakis',
  portraitAlt: 'Portrait of Alexandros Hashemakis',
}

// --- 1b. Hero design showcase -----------------------------------------------
//  Two columns of app-screen frames that auto-scroll in opposite directions.
//  To add a screenshot: drop the image in /public/screens/ and set `src`
//  (e.g. src: '/screens/flights.jpg'). Until then, a labelled placeholder shows.
export const screens = {
  // Three columns scrolling in alternating directions. Cars screen leads.
  columnA: [
    { label: 'Car transfers', src: '/screens/transfers.png' },
    { label: 'Stays · Rooms', src: '/screens/stays-rooms.png' },
    { label: 'Flights · Fare families', src: '/screens/flights-fare.png' },
  ],
  columnB: [
    { label: 'Flights · Add-ons', src: '/screens/flights-addons.png' },
    { label: 'Stays · The Lana', src: '/screens/stays-property.png' },
    { label: 'Flights · Baggage', src: '/screens/flights-baggage.png' },
  ],
  columnC: [
    { label: 'Stays · Location', src: '/screens/stays-location.png' },
    { label: 'Stays · Room select', src: '/screens/stays-room-select.png' },
  ],
}

// --- 1c. Bottom-ribbon screens ----------------------------------------------
//  The hero app screens plus four more, shuffled for the bottom marquee.
//  New files live in /public/screens/ (stays-ai-search, flights-fare-detail,
//  stays-reviews, stays-photos). Missing files fall back to a labelled frame.
export const bottomScreens = [
  { label: 'Stays · AI search', src: '/screens/stays-ai-search.png' },
  { label: 'Flights · Fare families', src: '/screens/flights-fare.png' },
  { label: 'Stays · Reviews', src: '/screens/stays-reviews.png' },
  { label: 'Car transfers', src: '/screens/transfers.png' },
  { label: 'Flights · Fare detail', src: '/screens/flights-fare-detail.png' },
  { label: 'Stays · The Lana', src: '/screens/stays-property.png' },
  { label: 'Stays · Location', src: '/screens/stays-location.png' },
  { label: 'Stays · Traveller photos', src: '/screens/stays-photos.png' },
  { label: 'Flights · Add-ons', src: '/screens/flights-addons.png' },
  { label: 'Stays · Rooms', src: '/screens/stays-rooms.png' },
  { label: 'Flights · Baggage', src: '/screens/flights-baggage.png' },
  { label: 'Stays · Room select', src: '/screens/stays-room-select.png' },
]

// --- 2. Proof strip ---------------------------------------------------------
export const proof = [
  {
    stat: '15+',
    label: 'years in product design, 9+ leading teams',
  },
  {
    stat: '4',
    label: 'product lines owned end-to-end — Flights, Stays, Travel activities, Car transfers',
  },
  {
    stat: '0→1',
    label: "Built the company's most profitable new revenue stream",
  },
  {
    stat: '15+',
    label: 'designers grown; design turned into a continuous experimentation engine',
  },
]

// --- 3. What I do (three theme blocks) --------------------------------------
export const whatIDo = [
  {
    title: 'I lead design as a growth function.',
    body:
      "Conversion, average order value, and new revenue are design outcomes, not afterthoughts. I've owned CRO across multi-product funnels and built monetization from the ground up — including a net-new revenue stream that became the most profitable in the business.",
  },
  {
    title: 'I build experimentation cultures, not just experiments.',
    body:
      'I made A/B testing and continuous discovery the default way teams move from idea to decision — framing the right problems, validating before build, and turning testing into steady, compounding gains.',
  },
  {
    title: 'I make design teams AI-native.',
    body:
      "I've cut idea-to-tested-prototype from weeks to days by embedding AI across research, ideation, and prototyping — leading adoption by example and turning it into a team-wide capability.",
  },
]

// --- 4. Impact-driven leadership --------------------------------------------
export const leadership = {
  headline: 'Turning design into measurable growth.',
  intro:
    "Great design isn't the goal — measurable growth is, and the team that keeps delivering it. Here's how I lead.",
  capabilities: [
    {
      title: 'Strategic Design Leadership',
      body:
        'Worked as a peer to Product, Engineering, and senior leadership, turning business goals into design strategy and roadmap, and partnering directly with C-level to make design a driver of company direction.',
    },
    {
      title: 'Generative & Evaluative Discovery',
      body:
        'Led generative research to uncover real user needs aligned with business goals, and directed evaluative research to validate solutions and reduce risk before development.',
    },
    {
      title: 'Team Leadership & Operating Model',
      body:
        'Built, scaled, and mentored 15+ designers across four concurrent product lines, setting the craft bar and installing a data-driven way of working that made quality and speed repeatable.',
    },
  ],
}

// --- 5. What I led — across the portfolio -----------------------------------
export const portfolio = {
  headline: 'Shaping travel experiences in the GCC.',
  intro: 'Travel booking app',
  products: [
    {
      name: 'Flights',
      icon: '/icons/flights.svg',
      scope:
        "Scaled Flights into Saudi Arabia's leading flight platform through discovery-led strategy, experimentation, and conversion optimization. Directed a 100+ experiment roadmap driving ongoing gains in conversion and revenue, contributing to thousands of daily bookings.",
      initiatives: [
        {
          title: 'Multi-airline roundtrip booking',
          body:
            'Led design and research for a new selection experience letting customers combine airlines in one itinerary, lifting roundtrip bookings and flexibility.',
        },
        {
          title: 'Fare calendar',
          body:
            'Led design and research for a flexible fare calendar enabling price comparison across dates, driving conversion uplift.',
        },
        {
          title: 'Travel add-ons (0→1)',
          body:
            'Led strategy and design of a new ancillary revenue platform that became a high-performing stream outside core bookings.',
        },
        {
          title: 'Fare families & upgrades',
          body:
            'Led design and research for clearer fare comparison, lifting upgrade visibility, AOV, and conversion.',
        },
      ],
    },
    {
      name: 'Stays',
      icon: '/icons/hotels.svg',
      scope:
        'Led product strategy and research across Stays, embedding a CRO-driven experimentation culture that turned it into a continuous optimization engine and repositioned it from a high-friction flow into a competitive hotel-booking experience.',
      initiatives: [
        {
          title: 'Property & room-selection funnel',
          body:
            "Led discovery and problem framing at the funnel's most critical drop-off stage: location clarity (maps, landmarks), review usability (summarized and re-ranked), amenities, and room selection; delivered repeated conversion gains.",
        },
        {
          title: 'Dynamic property ranking',
          body:
            'Led design and research to surface the most relevant properties per query, lifting high-intent visibility and conversion.',
        },
        {
          title: 'Date & price flexibility',
          body:
            'Led design and research for flexible-date price visibility in hotel search, driving a significant conversion uplift.',
        },
        {
          title: 'Stays upsell',
          body:
            'Led strategy and design of a dynamic upsell system (room upgrades, meals, views), lifting AOV and GBV and making upsell rate a core business metric.',
        },
        {
          title: 'Pay-at-property',
          body:
            'Led design and research for a flexible payment option that raised booking confidence and closed a key competitive gap.',
        },
        {
          title: 'AI-powered search',
          body:
            'Led design and research to enable natural-language, AI-powered search in Stays — letting customers describe exactly what they want and surfacing the right property faster. Lifted overall conversion, while query analysis deepened our understanding of what travelers look for by destination and group size.',
        },
      ],
    },
    {
      name: 'Travel activities',
      icon: '/icons/activities.svg',
      scope:
        'Led design and research for Travel activities as a 0→1 product line, expanding Almosafer from a booking platform into a holistic travel-experience provider.',
      initiatives: [
        {
          title: 'Product foundation (0→1)',
          body:
            'Led the design of the core booking experience, interaction patterns, and funnel as it scaled into a strategic business line.',
        },
        {
          title: 'Cross-product upsell',
          body:
            'Integrated contextual activity recommendations into Flights and Stays journeys, lifting ancillary revenue and engagement.',
        },
      ],
    },
    {
      name: 'Car transfers',
      icon: '/icons/car.svg',
      scope:
        "Defined and led design and research for Almosafer's new car-transfers product, completing the company's full-journey travel offering.",
      initiatives: [
        {
          title: 'End-to-end experience (0→1)',
          body:
            'Led research and design of the complete transfer booking flow, translating customer needs into a clear, efficient journey.',
        },
        {
          title: 'Foundation & roadmap',
          body:
            'Defined the initial experience and phased roadmap to scale the product beyond launch.',
        },
      ],
    },
  ],
}

// --- 5b. Making design AI-native (signature dark section) --------------------
export const aiNative = {
  headline: 'Making design teams AI-native.',
  subline:
    "I didn't just adopt AI — I rebuilt how my team works around it. I designed a repeatable, AI-driven workflow and embedded it across the team, turning AI from a personal advantage into an organizational capability.",
  pillars: [
    { label: 'Research', line: 'Synthesis in hours, not days.' },
    { label: 'Ideation', line: 'More directions explored, faster.' },
    { label: 'Validation', line: 'Ideas tested in days, not weeks.' },
  ],
  focal: { from: 'Weeks', to: 'Days' },
  closing:
    'A design org that moves faster, validates earlier, and makes better-informed decisions — before a line of code is written.',
}

// --- 6. Case studies (cards → routed pages) ---------------------------------
//  `slug` maps to the route /case/:slug. Templated pages live in caseStudyPages.
export const caseStudies = [
  {
    slug: 'turning-stays-around',
    title: 'Turning Stays around',
    hook:
      'Took a high-friction hotel funnel to a competitive booking experience through discovery-led CRO.',
  },
  {
    slug: 'market-first-for-flights',
    title: 'A market-first for Flights',
    hook:
      'Led multi-airline roundtrip selection — a complex redesign that gave customers new flexibility and lifted bookings.',
  },
  {
    slug: 'new-revenue-stream',
    title: 'Building a new revenue stream (0-to-1)',
    hook:
      'Designed the add-ons platform that became the most profitable stream in the business.',
  },
]

// --- Case-study page templates (empty — fill later) -------------------------
//  Each section renders a heading + a placeholder. Replace `placeholder` with
//  real copy, and drop images into the media arrays.
const emptyTemplate = (title, hook) => ({
  title,
  hook,
  sections: [
    {
      heading: 'Problem',
      placeholder:
        'Describe the user and business problem. What was broken, and what was at stake?',
    },
    {
      heading: 'Approach',
      placeholder:
        'How did you frame the problem, what discovery and experiments did you run, and what did the process look like?',
    },
    {
      heading: 'My role',
      placeholder:
        'What did you personally lead vs. orchestrate across the team? Who did you partner with?',
    },
    {
      heading: 'Outcome',
      placeholder:
        'What changed — for the customer and for the business? Add the numbers that matter.',
    },
  ],
})

export const caseStudyPages = {
  'turning-stays-around': emptyTemplate(
    'Turning Stays around',
    'Took a high-friction hotel funnel to a competitive booking experience through discovery-led CRO.',
  ),
  'market-first-for-flights': emptyTemplate(
    'A market-first for Flights',
    'Led multi-airline roundtrip selection — a complex redesign that gave customers new flexibility and lifted bookings.',
  ),
  'new-revenue-stream': emptyTemplate(
    'Building a new revenue stream (0-to-1)',
    'Designed the add-ons platform that became the most profitable stream in the business.',
  ),
}

// --- 7. Experience timeline -------------------------------------------------
//  Each entry groups a company with its role progression (newest first).
export const timeline = [
  {
    company: 'Almosafer',
    parent: 'part of Seera Group',
    location: 'Dubai',
    period: '2020 — 2026',
    summary:
      "Led product design across Almosafer's full travel portfolio, expanding ownership from Flights into Stays, Travel activities, and Car transfers as the brand became Seera Group's flagship KSA travel platform.",
    roles: [
      {
        period: '2025 — 2026',
        title: 'Senior Manager of Product Design',
        scope: 'Flights, Stays, Travel activities & Car transfers',
      },
      {
        period: '2024 — 2025',
        title: 'Senior Manager of Product Design',
        scope: 'Flights, Stays & Travel activities',
      },
      {
        period: '2020 — 2024',
        title: 'Senior Manager of Product Design',
        scope: 'Flights',
      },
    ],
  },
  {
    company: 'Tajawal',
    parent: 'part of Seera Group',
    location: 'Dubai',
    period: '2016 — 2020',
    summary:
      "Led Flights design and built deep domain expertise through the brand's transformation from a UAE-focused platform into Almosafer.",
    roles: [
      { period: '2018 — 2020', title: 'Manager of Product Design', scope: 'Flights' },
      { period: '2016 — 2018', title: 'Senior Product Designer', scope: 'Flights' },
    ],
  },
  {
    company: 'MoveSouq & CarSwitch',
    parent: 'part of Glowfish Capital',
    location: 'Dubai',
    period: '2013 — 2016',
    summary:
      'Designed and delivered end-to-end user experiences for the MoveSouq and CarSwitch mobile applications.',
    roles: [{ period: '2013 — 2016', title: 'User Experience Designer', scope: '' }],
  },
  {
    company: 'TenFour Agency & To.Ad Design Studio',
    parent: '',
    location: 'Athens',
    period: '2011 — 2013',
    summary:
      'Designed and delivered end-to-end websites and digital experiences for clients across a range of industries.',
    roles: [{ period: '2011 — 2013', title: 'User Experience Designer', scope: '' }],
  },
]

// Certifications — shown beneath the experience timeline.
export const certifications = [
  { title: 'Continuous Discovery Habits', issuer: 'Teresa Torres · Product Talk' },
  {
    title: 'Mini MBA — Strategic Management & Leadership',
    issuer: 'Mustashar MBA',
  },
]

// --- 8. About ---------------------------------------------------------------
export const about = {
  headline: 'About',
  paragraphs: [
    "I'm a Product Design Leader based in Dubai, originally from Greece, with 15 years designing digital products. For the past decade I led design at Almosafer — Saudi Arabia's leading travel platform — growing from the founding designer for Flights to leading design across its core portfolio.",
  ],
  portraitAlt: 'Portrait of Alexandros Hashemakis',
}

// --- 9. Contact -------------------------------------------------------------
export const contact = {
  headline: "Let's talk.",
  links: [
    { label: 'Email', href: 'mailto:alexhashemakis@gmail.com', kind: 'primary' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/alexandros-g-hashemakis-54a14599/',
      kind: 'secondary',
    },
  ],
}

export const footer = {
  note: `© ${'2026'} Alexandros Hashemakis. Designed and built with care.`,
}
