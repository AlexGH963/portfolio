// --- Stays CRO case study ---------------------------------------------------
//  Full content for the routed case-study page at /case/turning-stays-around.
//  Sourced from the Almosafer · Stays product design case study deck.

export const staysCase = {
  // Home-page entry point.
  teaser: {
    kicker: 'Recent case study',
    title: 'Conversion rate optimization',
    hook: 'From business goals to user needs to real impact.',
    tags: ['Conversion ↑', 'AOV ↑', '15+ experiments'],
    cta: 'Read the case study',
  },

  // Title page.
  hero: {
    kicker: 'Stays booking experience - Product design case study.',
    title: 'From business goals to user needs to real impact',
  },

  // The objective.
  objective: {
    kicker: 'The objective',
    title: 'Grow Stays conversion',
    body: "Stays is one of Almosafer's largest revenue drivers. The objective was to increase booking conversion across the customer journey by identifying and solving the highest-impact friction points through data, design, and experimentation.",
    considerationsKicker: 'Key considerations',
    considerations: [
      {
        n: '01',
        label: 'Revenue impact',
        body: 'Small increases in conversion can drive significant business growth.',
      },
      {
        n: '02',
        label: 'Unknown friction',
        body: 'While parts of the booking funnel performed well, others leaked customers. The challenge was to pinpoint where users dropped off and understand why.',
      },
      {
        n: '03',
        label: 'Evidence over opinions',
        body: 'Every opportunity needed to be validated with data and measured through experimentation, ensuring design decisions translated into measurable business outcomes.',
      },
    ],
    closing:
      'I started by identifying where the business lost the most revenue, uncovered the customer problems behind those drop-offs, and translated them into a prioritized roadmap of measurable experiments.',
  },

  // My scope.
  scope: {
    kicker: 'My scope',
    title: 'What I led, end to end',
    items: [
      {
        n: '01',
        label: 'Discovery & data',
        body: 'Led funnel analysis, user research and competitive benchmarking to pinpoint where the funnel dropped off, and why.',
      },
      {
        n: '02',
        label: 'Problem framing',
        body: 'Turned the findings into one shared problem map, sized the opportunities, and prioritized where to focus first.',
      },
      {
        n: '03',
        label: 'Design direction',
        body: 'Set the design direction and the bar for quality on the highest-priority problems.',
      },
      {
        n: '04',
        label: 'Experimentation plan',
        body: 'Led and sequenced a 15+ experiment roadmap, driving outcome analysis and next-step recommendations.',
      },
      {
        n: '05',
        label: 'Team & delivery',
        body: 'Led a cross-functional team of 3 designers and 1 researcher, setting the quality bar and sequencing work against business priority.',
      },
      {
        n: '06',
        label: 'Stakeholder alignment',
        body: 'Partnered with Product, Data, Engineering and C-level leadership to align on the objective, review results, and agree what shipped.',
      },
    ],
  },

  // Funnel analysis.
  funnel: {
    kicker: 'Funnel analysis',
    title: 'One step was losing the most people',
    body: 'Hotel details → Guest details was the weakest link in the Stays funnel.',
    steps: [
      { value: '83%', label: 'Hotel listing → Hotel details' },
      { value: '49%', label: 'Hotel details → Guest details', weakest: true },
      { value: '72%', label: 'Guest details → Payment' },
      { value: '55%', label: 'Payment → Confirmed' },
    ],
    caption: 'Step-to-step conversion across the Stays booking funnel.',
    stat: {
      value: '49%',
      label: 'step conversion at Hotel details → Guest details',
      body: 'The lowest in the entire funnel (iOS) and the same drop showed up on every platform.',
    },
  },

  // The user moment.
  moment: {
    kicker: 'The user moment',
    title: "They've found a place they like. Now they have to be sure.",
    body: "Where exactly is this hotel, and what's around it? What does it actually look like, and what does it include? What are other travelers saying about it? And what room options do I have to choose from? It's the highest-intent, highest-anxiety moment in the journey and it's exactly where we were losing them.",
  },

  // Discovery — three lenses.
  discovery: {
    kicker: 'Discovery',
    title: 'Three lenses on the same question',
    body: 'Before proposing anything, we looked at the problem from three independent angles.',
    lenses: [
      {
        n: '01',
        label: 'Behavioral data',
        tag: 'What they did',
        body: 'We ran funnel and on-page event analysis with the data team — what users did, and where they stalled.',
      },
      {
        n: '02',
        label: 'User research',
        tag: 'What they felt',
        body: "We ran interviews and affinity-mapped the findings — what travelers said, and didn't trust.",
      },
      {
        n: '03',
        label: 'Competitive benchmarking',
        tag: 'What good looks like',
        body: 'We benchmarked Booking, Expedia and others on the same step — what “good” looks like in market.',
      },
    ],
  },

  // Search intent.
  searchIntent: {
    kicker: 'Search intent',
    title: 'Knowing the hotel converts. Exploring stalls.',
    body: 'Travelers who search a specific hotel convert far better than those who arrive by destination and explore — the same step, a very different outcome.',
    cohorts: [
      {
        label: 'Hotel search',
        rows: [
          { k: 'Share', v: '27.5%' },
          { k: 'Detail → Guest conversion', v: '68.8%' },
          { k: 'Overall conversion', v: '31.4%' },
        ],
      },
      {
        label: 'Non-hotel search',
        rows: [
          { k: 'Share', v: '72.5%' },
          { k: 'Detail → Guest conversion', v: '53.1%' },
          { k: 'Overall conversion', v: '17.4%' },
        ],
      },
    ],
    stat: {
      value: '1.8×',
      label: 'better overall conversion when the hotel is already chosen',
      body: 'Going from exploring to booking is where the experience breaks down.',
    },
  },

  // Room selection.
  roomSelection: {
    kicker: 'Room selection',
    title: "They weren't choosing — they were defaulting",
    body: 'Faced with too many near-identical rooms, most travelers just took the first, cheapest option.',
    stats: [
      { value: '47%', label: 'of bookings were the very first room shown' },
      { value: '61%', label: 'of bookings were the first package shown' },
      { value: '80%', label: 'of searches had at least one duplicate room' },
    ],
    closing:
      'When comparison gets hard, people stop comparing — and that caps both conversion and revenue.',
  },

  // The flagship — collapse the duplicates.
  flagship: {
    kicker: 'Room selection',
    title: 'Duplicated rooms',
    body: 'The same room repeated under different bed types pushes travelers toward the cheapest option. Merging will reduces cognitive load, improves visibility of all available room options, and can potentially lift conversion and AOV at once.',
    before: {
      label: 'Before',
      rooms: [
        { name: 'Standard Room' },
        { name: 'Standard Room — King bed', duplicate: true },
        { name: 'Standard Room — Twin bed', duplicate: true },
        { name: 'Deluxe Room' },
        { name: 'Deluxe Room — King bed', duplicate: true },
        { name: 'Deluxe Room — Twin bed', duplicate: true },
      ],
    },
    after: {
      label: 'After',
      rooms: [
        { name: 'Standard Room', action: 'Select bedding preference →' },
        { name: 'Deluxe Room', action: 'Select bedding preference →' },
      ],
    },
    caption: 'Fewer listings · higher-value rooms surfaced first',
    result: 'Conversion ↑ AOV ↑ — one change, two levers',
  },

  // Voice of the customer.
  voc: {
    kicker: 'Voice of the customer',
    title: 'What travelers told us',
    groups: [
      {
        label: 'Property selection',
        question: 'Can I trust and evaluate this place?',
        items: [
          {
            label: 'Location',
            body: 'Users need clear location context and proximity to landmarks and often use Google Maps due to lack of detail, sometimes finding better or cheaper options outside the app.',
          },
          {
            label: 'Reviews',
            body: 'Users rely heavily on reviews and their source, especially recent ones and those from similar backgrounds, focusing on cleanliness, service, and location.',
          },
          {
            label: 'Property images',
            body: "Users don't trust hotel photos and struggle to understand what facilities actually look like or whether they reflect reality.",
          },
          {
            label: 'Property amenities',
            body: 'Users want key and unique hotel amenities clearly visible upfront, as they are not always obvious. When uncertain, they often contact the hotel directly to confirm details.',
          },
        ],
      },
      {
        label: 'Room selection',
        question: 'Which room is actually right for me?',
        items: [
          {
            label: 'Room options',
            body: 'Users are confused by room options, especially when similar rooms with the same descriptions, sizes, or photos are priced differently without a clear reason.',
          },
          {
            label: 'Room amenities',
            body: 'Users find room details unclear (e.g., “Standard Room”) and often need to check the hotel’s official website to understand what’s actually included.',
          },
          {
            label: 'Loading time',
            body: 'Rooms take too long to load.',
          },
        ],
      },
    ],
  },

  // Competitive benchmark.
  benchmark: {
    kicker: 'Competitive benchmark',
    title: 'What competitors do better',
    body: 'Booking, Expedia vs Almosafer',
    areas: [
      {
        label: 'Location & nearby',
        body: 'Competitors surface maps, nearby attractions, and landmarks upfront — helping users immediately validate location. Almosafer has the same data but hides it deeper within property details, forcing users to leave the flow to confirm basic context.',
        gap: 'Discoverability + map utility',
      },
      {
        label: 'Amenities',
        body: 'Competitors structure amenities into clear categories (e.g. dining, facilities, services) and allow users to search them. Almosafer presents a flat, unstructured list making it harder for users to quickly verify what matters to them.',
        gap: 'Structure + search',
      },
      {
        label: 'Reviews',
        body: 'Competitors allow filtering reviews by persona, language, topic, and travel context, and surface AI-generated summaries of guest sentiment. Almosafer provides basic reviews without advanced filtering or summarisation, limiting their usefulness in decision-making.',
        gap: 'Review depth, filtering, and AI summaries',
      },
      {
        label: 'Rooms & packages',
        body: 'Competitors separate the decision into two steps — property selection → room selection → package — reducing cognitive load. Almosafer combines property, room, and package selection into a single step, increasing complexity and cognitive load.',
        gap: 'Decision flow + cognitive load',
      },
      {
        label: 'Property images',
        body: 'Competitors combine hotel photos with guest-generated images and add contextual labels to build trust. Almosafer relies primarily on supplier-provided imagery, which users perceive as less authentic and potentially outdated.',
        gap: 'Real, social-proof image gallery',
      },
    ],
    takeawayKicker: 'Takeaway',
    takeaway:
      'Across all five areas, competitors consistently do four things better: surfacing trust signals at the right moment, enabling search and filtering for easier exploration, using real user-generated content to build credibility, and structuring the decision flow to reduce cognitive load.',
  },

  // Design direction & experimentation — section intro.
  experimentation: {
    kicker: 'Design direction & experimentation',
    title: 'From problems to experiments',
    body: 'With opportunities sized and prioritized, we translated each one into a testable hypothesis, creating a structured wave of experiments designed to build momentum and drive learnings, all measured against conversion impact.',
  },

  // Sizing & prioritization.
  sizing: {
    kicker: 'Sizing & prioritization',
    title: 'Where we focused first',
    body: 'Behavioral data, user research and benchmarking let us size every opportunity so we could focus on the problems with the biggest impact.',
    focusKicker: 'Focus areas',
    areas: [
      {
        label: 'Location',
        started: true,
        body: 'Users need clear location context and proximity to landmarks, and switch to Google Maps when detail is missing — sometimes finding better or cheaper options outside the app.',
      },
      {
        label: 'Reviews',
        started: true,
        body: 'Users rely heavily on reviews and their source — favoring recent ones and reviewers from similar backgrounds, focusing on cleanliness, service and location.',
      },
      {
        label: 'Room options',
        started: true,
        body: 'Users are confused by room options — especially when similar rooms with the same descriptions, sizes or photos are priced differently with no clear reason.',
      },
      {
        label: 'Room amenities',
        body: 'Users find room details unclear (e.g. “Standard Room”) and often check the hotel’s official website to understand what’s actually included.',
      },
      {
        label: 'Property images',
        body: "Users don't trust hotel photos and struggle to understand what facilities actually look like or whether they reflect reality.",
      },
    ],
  },

  // Quick wins — the first experiments.
  quickWins: {
    kicker: 'The first experiments',
    title: 'Underused content that increased conversion',
    body: 'Within a week, we launched two quick experiments to improve visibility of reviews and hotel location (map), to validate the need and reduce risk before investing in larger improvements.',
    stats: [
      { value: '54%', label: 'higher conversion when travelers engaged with reviews' },
      { value: '38%', label: 'higher conversion when travelers engaged with the map' },
    ],
    screen: '/screens/case/property-selection.jpg',
  },

  // The shipped work. No section kicker — the per-item "What changed" lists
  // carry that label.
  shipped: {
    title: 'The solutions',
    items: [
      {
        label: 'Reviews & Ratings',
        changes: [
          'Improved visibility of reviews and ratings across key categories to support faster decision-making.',
          'Leveraged AI to summarize customer reviews for quicker sentiment understanding.',
          'Expanded review categories for easier discovery of relevant feedback.',
          'Prioritized Saudi customer reviews to reflect culturally relevant perspectives.',
          'Increased transparency of review sources to build trust.',
        ],
        results: ['Conversion ↑'],
        screens: [
          '/screens/case/reviews-address.jpg',
          '/screens/case/reviews-lana.jpg',
          '/screens/case/reviews-summary.jpg',
        ],
      },
      {
        label: 'Location',
        changes: [
          'Enhanced the property location entry point by surfacing nearby landmarks for better location context.',
          'Improved the map experience by showcasing nearby attractions, landmarks, and activities with distance information.',
        ],
        results: ['Conversion ↑'],
        screens: [
          '/screens/case/location-landmarks.jpg',
          '/screens/case/location-around.jpg',
          '/screens/case/location-map.jpg',
        ],
      },
      {
        label: 'Property Gallery',
        changes: [
          'Enhanced the gallery entry point by surfacing more property images for better visibility into key areas.',
          'Categorized property images to provide better context about the property’s spaces (Property, Rooms, Pools, Wellness, etc.).',
          'Added contextual customer reviews within the gallery to build confidence in the accuracy of the images.',
        ],
        results: ['Conversion ↑'],
        screens: [
          '/screens/case/gallery-sofitel.jpg',
          '/screens/case/gallery-pools.jpg',
          '/screens/case/gallery-rooms.jpg',
        ],
      },
      {
        label: 'Rooms & Options',
        changes: [
          'Reduced duplicate room listings caused by bedding variations to increase visibility of high-value room options.',
          'Simplified room selection with a two-step flow (Room → Package) to reduce cognitive load and improve clarity.',
        ],
        results: ['Conversion ↑', 'AOV ↑'],
        screens: [
          '/screens/case/rooms-available.jpg',
          '/screens/case/rooms-packages.jpg',
          '/screens/case/rooms-bedding.jpg',
        ],
      },
    ],
  },

  // The wave — 15 experiments.
  wave: {
    kicker: 'The wave',
    title: 'Fifteen experiments. Multiple conversion wins',
    body: 'Applied across both problem spaces, with several experiments already shipped and delivered wins and learnings, others still running, and some in development.',
    groups: [
      {
        label: 'Location & map',
        count: 2,
        items: [
          'Better map usability — nearby landmarks & attractions',
          'Richer discovery of surrounding points of interest',
        ],
      },
      {
        label: 'Rooms',
        count: 2,
        items: [
          'Duplicate room listings reduced — caused by bedding variations',
          'Simplified room selection to cut cognitive load & add clarity',
        ],
      },
      {
        label: 'Reviews & ratings',
        count: 7,
        items: [
          'Reviews made visible across the journey',
          'Ratings by category — cleanliness, location, service',
          'AI-powered review summaries to speed up understanding',
          'Richer review filtering with additional categories',
          'Transparent review sources — Almosafer, Google & more',
          'Smarter ranking — recency, relevance, group size, persona',
          'Saudi-national reviews prioritized for our core customer base',
        ],
      },
      {
        label: 'Amenities & images',
        count: 4,
        items: [
          'Clearer property amenity visibility & categorization',
          'Better categorization of hotel images',
          'Contextual review signals to build trust in hotel images',
          'Improved clarity and grouping of room amenities',
        ],
      },
    ],
  },

  // Upsell opportunity.
  upsell: {
    kicker: 'Upsell opportunity',
    title: 'Turning the cheapest-room default into revenue opportunity',
    body: 'Most customers pick the cheapest room which excludes breakfast. We saw the opportunity and experimented with upselling breakfast to those customers before checkout.',
    didKicker: 'What we did',
    did: [
      'Offered breakfast to cheapest-room bookers, before checkout',
      'Phase 1 ran with no price cap to learn the optimal price from real behavior',
      'Used the results to set the optimal breakfast price cap',
    ],
    stat: {
      value: 'SAR 1M',
      label: 'GBV generated within 3 months',
    },
    screen: '/screens/case/upsell-breakfast.jpg',
    closing:
      'Upsell rate became a core business KPI and we scaled to views and bundles, with dynamic logic by destination & group size.',
  },

  // The story so far.
  story: {
    kicker: 'The story so far',
    title:
      'From a business objective to a wave of experiments delivering uplift in conversion, AOV, and revenue.',
    steps: [
      {
        n: '01',
        label: 'Discovery',
        body: 'Led discovery, research, and benchmarking to define and prioritize the right problems — ensuring effort focused on the highest-impact opportunities.',
      },
      {
        n: '02',
        label: 'A wave of wins',
        body: 'Led design and experimentation across a structured roadmap of improvements, driving measurable uplift in conversion, AOV, and revenue across the journey.',
      },
      {
        n: '03',
        label: 'A lasting shift',
        body: 'Introduced and embedded a new business metric — upsell rate — now used company-wide to measure performance.',
      },
    ],
    closing: 'Turning design into measurable business growth.',
  },
}
