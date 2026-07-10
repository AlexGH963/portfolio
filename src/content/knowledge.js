// ============================================================================
//  ASK-AI KNOWLEDGE BASE
//  A self-contained "AI about Alex" built from the CV + site content.
//  answerQuestion() matches a question's intent against these entries and
//  returns the best answer, with graceful fallbacks for anything unknown.
//
//  Answers use "\n" for structure (rendered via white-space: pre-line).
//  To make it smarter, add entries below — or swap answerQuestion() for a
//  call to a serverless function that proxies the Claude API.
// ============================================================================

export const askIntro =
  'His experience, how he leads design, his work across Almosafer, or how he makes teams AI-native.'

export const suggestions = [
  'What does Alex do?',
  'How does he use AI in design?',
  'How does he lead design teams?',
  'How does he drive growth and conversion?',
  "What's his biggest impact?",
  'Tell me about his experience',
  'What did he build across the portfolio?',
]

// A confident, evidence-backed endorsement. Used both for evaluative questions
// ("is he good?", "is he talented?") and as the default for any yes/no question
// the KB can't otherwise answer — the assistant should always advocate for Alex.
const POSITIVE_ANSWER =
  "Yes — genuinely. Alex is a proven product design leader who turns design into measurable growth:\n\n• Built a net-new revenue stream from 0→1 that became one of the most profitable in the business.\n• Scaled Flights into Saudi Arabia's leading flight platform through a 100+ experiment roadmap and thousands of daily bookings.\n• Grew and mentored a 15+ person design team into a data-driven, AI-native way of working.\n\nHe pairs sharp craft with real business fluency — partnering with C-level, product, and engineering, and deciding on evidence, not opinion. So yes: he's very good, and the results back it up."

// Each entry: keywords to match + the answer. STRONG keywords (below) win over
// generic connector words.
const KB = [
  {
    keywords: ['who is', 'about alex', 'tell me about', 'summary', 'introduce', 'background', 'yourself', 'bio'],
    answer:
      "Alexandros Hashemakis is a product design leader based in Dubai, originally from Greece — 15 years in digital product design, 9+ leading teams.\n\nFor the past decade he led design at Almosafer, Saudi Arabia's leading travel platform, growing from the founding designer on Flights to leading design across the full portfolio: Flights, Stays, Travel activities, and Car transfers.",
  },
  {
    keywords: ['what does', 'what do you do', 'what he do', 'role', 'title', 'position', 'current', 'job', 'responsib'],
    answer:
      "He's a product design leader — Senior Manager of Product Design at Almosafer (part of Seera Group), Saudi Arabia's leading travel platform — leading design across four concurrent product lines: Flights, Stays, Travel activities, and Car transfers.\n\nDay to day, that means:\n• Owning design strategy and roadmap as a peer to Product and Engineering, and a partner to C-level.\n• Running design as a growth function — conversion, AOV, and new revenue are outcomes he owns, validated through continuous experimentation.\n• Building and mentoring the team (15+ designers), setting the craft bar, and installing a data-driven, AI-native way of working.\n\nHe's a player-coach: hands-on in the craft while making design a driver of the business, not a support function.",
  },
  {
    keywords: ['experience', 'career', 'history', 'companies', 'worked', 'work history', 'tajawal', 'past', 'journey', 'cv', 'resume'],
    answer:
      '15 years in product design, 9+ leading teams:\n\n• Almosafer (2020–2026) — Senior Manager, Product Design. Scaled from Flights to the full portfolio.\n• Tajawal (2016–2020) — led Flights design through its transformation into Almosafer.\n• MoveSouq & CarSwitch, Dubai (2013–2016) — UX designer.\n• Agencies in Athens (2011–2013) — UX designer.',
  },
  {
    keywords: ['lead', 'leadership', 'manage', 'player-coach', 'player coach', 'how do you lead', 'leader', 'style'],
    answer:
      "Alex leads design as a business function — his belief is that great design isn't the goal, measurable growth is, and the team that keeps delivering it.\n\n• He works as a peer to Product, Engineering, and senior leadership, turning business goals into design strategy and roadmap.\n• Partners directly with C-level to make design a driver of company direction rather than a support service — aligning metrics, customer insight, and roadmap priorities with what the business needs to achieve.\n• As a player-coach, he stays close enough to the craft to set the bar himself while scaling a 15+ person team across four concurrent product lines.",
  },
  {
    keywords: ['team', 'mentor', 'designers', 'hiring', 'scale', 'grow', 'people', 'operating model', 'coach', 'develop'],
    answer:
      "He has built, scaled, and mentored 15+ designers across four concurrent product lines.\n\nHow he does it:\n• Owns hiring quality and sets a high craft bar.\n• Installs a data-driven operating model — pairing discovery with rapid experimentation — so quality and speed become repeatable.\n• Balances a shared design resource across product lines, prioritizing against business targets.",
  },
  {
    keywords: ['conversion', 'cro', 'revenue', 'growth', 'aov', 'gbv', 'monetization', 'monetisation', 'business impact', 'money', 'profit', 'sales'],
    answer:
      "Growth is the core of how Alex works — he treats conversion, average order value, and new revenue as design outcomes he personally owns, not afterthoughts, across multiple product funnels.\n\nConversion, at scale:\n• On Flights, he built a discovery-led practice and a continuous experimentation program across the booking funnel — directing a 100+ experiment roadmap that drove ongoing gains in conversion, booking experience, and revenue. It contributed to thousands of daily bookings and helped make Almosafer the market leader for flight bookings in Saudi Arabia.\n• On Stays, he embedded a CRO-driven experimentation culture that turned a high-friction flow into a continuous optimization engine — with repeated conversion gains from the property & room-selection funnel, dynamic property ranking, and date/price flexibility.\n\nNew revenue, from 0 to 1:\n• Designed a net-new travel add-ons platform that became one of the most profitable revenue streams in the business — outside core bookings.\n• Built a dynamic Stays upsell system (room upgrades, meals, views) that lifted AOV and GBV and made upsell rate a core business metric.\n• Fare families & upgrades that raised upgrade visibility, AOV, and conversion; cross-product activity upsell that grew ancillary revenue.\n\nThe through-line: he ties design directly to the P&L, validates every bet with experimentation, and turns wins into a repeatable engine — as a trusted partner to C-level, aligning metrics and roadmap with business objectives.",
  },
  {
    keywords: ['experiment', 'a/b', 'ab test', 'testing', 'validation', 'data-driven', 'discovery culture', 'hypothesis', 'iterate'],
    answer:
      "He builds experimentation cultures, not just experiments.\n\nAlex drove company-wide adoption of A/B testing and continuous validation — making it the default way to move from idea to decision, and making experiment results a regular input to roadmap and strategy.\n• Framed clear hypotheses, analyzed results, and turned continuous testing into steady, repeatable gains.\n• On Flights, directed a 100+ experiment roadmap across the booking funnel.\n• On Stays, built a sustained experimentation roadmap that consistently improved conversion.\n• Raised the whole team's confidence with data — so decisions are made on evidence, not opinion.",
  },
  {
    keywords: ['ai', 'artificial intelligence', 'ai-native', 'ai native', 'prototyping', 'workflow', 'weeks to days', 'automation', 'genai', 'llm', 'machine learning'],
    answer:
      'Deeply — AI shapes both how his team works and the products they ship:\n\n• Way of working: he rebuilt how his team designs around AI (research, ideation, prototyping), cutting idea-to-tested-prototype from weeks to days, and led adoption by example so it became a team-wide capability.\n• Recent product: he led an AI-powered natural-language search in Stays that lets customers describe exactly what they want and surfaces the right property faster — lifting conversion.',
  },
  {
    keywords: ['research', 'discovery', 'generative', 'evaluative', 'user needs', 'validate', 'user research', 'insights'],
    answer:
      'He runs discovery before delivery:\n\n• Generative research to uncover real user needs aligned with business goals.\n• Evaluative research to validate solutions and de-risk before development — so the team builds the right thing before engineering invests.',
  },
  {
    keywords: ['product', 'products', 'portfolio', 'projects', 'what did you build', 'what have you', 'built', 'almosafer', 'seera', 'tajawal', 'what he did', 'what did he do'],
    answer:
      "Alex owned four product lines end-to-end at Almosafer — each with its own strategy, funnel, and experimentation roadmap:\n\n• Flights — scaled into the leading flight platform in Saudi Arabia via a 100+ experiment roadmap; thousands of daily bookings.\n• Stays — turned a high-friction hotel funnel into a competitive, continuously-optimizing booking experience.\n• Travel activities — built 0→1 into a strategic product line, expanding Almosafer beyond bookings into a holistic travel-experience provider.\n• Car transfers — defined and launched a new 0→1 product, completing the company's full-journey travel offering.",
  },
  {
    keywords: ['flights', 'flight', 'multi-airline', 'fare calendar', 'fare families', 'add-ons', 'baggage', 'ancillary'],
    answer:
      "On Flights, Alex scaled it into Saudi Arabia's leading flight platform. Highlights:\n\n• Multi-airline roundtrip booking — a market-first.\n• Flexible fare calendar for price comparison across dates.\n• Fare families & upgrades.\n• A 0→1 travel add-ons platform that became a high-performing ancillary revenue stream.",
  },
  {
    keywords: ['stays', 'hotel', 'hotels', 'rooms', 'property', 'upsell', 'pay-at-property', 'lodging', 'accommodation'],
    answer:
      'On Stays, Alex embedded a CRO-driven experimentation culture that repositioned it from a high-friction flow into a competitive hotel-booking experience:\n\n• Property & room-selection funnel improvements.\n• Dynamic property ranking and date/price flexibility.\n• A dynamic upsell system and pay-at-property.\n• AI-powered natural-language search.',
  },
  {
    keywords: ['activities', 'experiences', 'destination'],
    answer:
      'Alex led Travel activities as a 0→1 product line — defining the core booking experience and funnel, and integrating contextual activity recommendations into Flights and Stays. It expanded Almosafer from a booking platform into a holistic travel-experience provider.',
  },
  {
    keywords: ['transfers', 'car transfer', 'cars', 'transfer'],
    answer:
      "Alex defined and led design for Almosafer's new Car transfers product — a 0→1 end-to-end booking flow from discovery to confirmation, plus the phased roadmap to scale it beyond launch. It completed the company's full-journey travel offering.",
  },
  {
    keywords: ['skills', 'strengths', 'good at', 'expertise', 'specialise', 'specialize', 'strong', 'capabilities'],
    answer:
      'Core strengths:\n\n• Strategic design leadership\n• Conversion & revenue growth (CRO, monetization)\n• Experimentation & data fluency\n• Generative & evaluative discovery\n• AI in design workflows\n• Team leadership & operating model\n\nIn short: he turns business goals into design strategy and measurable growth — and builds the team to keep delivering it.',
  },
  {
    keywords: ['impact', 'achievement', 'proud', 'biggest', 'accomplish', 'wins', 'proudest'],
    answer:
      "Alex's impact shows up in the P&L, not just the portfolio:\n\n• Signature win — designed a net-new travel add-ons platform from 0 to 1 that became one of the most profitable revenue streams in the business.\n• Scaled Flights into the leading flight platform in Saudi Arabia through a 100+ experiment roadmap, contributing to thousands of daily bookings.\n• Repositioned Stays from a high-friction flow into a continuous optimization engine with repeated conversion gains, and made upsell rate a core business metric.\n• Launched two product lines 0→1 (Travel activities and Car transfers), completing Almosafer's full-journey offering.\n• Grew 15+ designers into a data-driven team where experimentation is the default — so wins keep compounding long after any single project ships.",
  },

  // --- Persona-specific: PM ---
  {
    keywords: ['product manager', 'product managers', 'pms', 'product team', 'cross-functional', 'work with product', 'collaborate'],
    answer:
      "Alex works as a true peer to Product. He frames the right problems with PMs, aligns metrics and roadmap priorities to business goals, and uses experimentation so decisions are made on evidence, not opinion.\n\nHe's used to operating across multiple product lines at once and prioritizing a shared design resource against business targets.",
  },
  {
    keywords: ['prioritize', 'prioritise', 'roadmap', 'trade-off', 'tradeoff', 'trade off', 'focus', 'decide what', 'backlog'],
    answer:
      'Alex prioritizes against business impact. With a shared design team across four product lines, he ranks work against targets, validates the highest-leverage bets with discovery and experiments first, and is explicit about trade-offs — so effort lands on the highest-impact opportunities.',
  },
  {
    keywords: ['metric', 'metrics', 'kpi', 'kpis', 'measure', 'success', 'roi', 'numbers', 'outcomes'],
    answer:
      'He measures design by business outcomes — conversion, AOV, GBV, new revenue, upsell rate, and experiment win-rate. Alex made results a regular input to roadmap and strategy, so design is held accountable to the numbers, not just the craft.',
  },

  // --- Persona-specific: CTO / Engineering ---
  {
    keywords: ['engineering', 'engineers', 'developers', 'dev team', 'handoff', 'feasibility', 'technical', 'velocity', 'shipping'],
    answer:
      "Alex partners closely with engineering. He de-risks before build with evaluative research and rapid prototyping, so teams don't burn cycles on the wrong thing.\n\nHis AI-native prototyping shortens idea-to-tested-prototype to days, and clear discovery keeps handoff smooth. He treats velocity and reduced rework as design responsibilities.",
  },

  // --- Persona-specific: CEO / Strategy ---
  {
    keywords: ['strategy', 'vision', 'direction', 'company direction', 'strategic', 'big picture', 'long term', 'c-level', 'c level', 'executive'],
    answer:
      'Alex turns business goals into design strategy and roadmap, and partners directly with C-level to make design a driver of company direction — not a support service. He aligns metrics, customer insight, and roadmap priorities with what the business needs to achieve.',
  },
  {
    id: 'hire',
    keywords: ['why hire', 'why to hire', 'why should', 'shall i hire', 'should i hire', 'should we hire', 'hire alex', 'hire him', 'worth hiring', 'worth it', 'convince', 'good hire', 'right hire', 'reasons to hire', 'sell me', 'value', 'bring', 'what makes', 'stand out', 'different', 'fit'],
    answer:
      "Alex turns design into measurable growth. He doesn't treat design as decoration — he owns conversion, AOV, and new revenue as outcomes, and he has the record to back it:\n\n• Built a net-new revenue stream from 0 to 1 that became one of the most profitable in the business.\n• Scaled Flights into Saudi Arabia's leading flight platform via a 100+ experiment roadmap and thousands of daily bookings.\n• Grew and mentored 15+ designers into a data-driven team where experimentation — and now AI — is the default.\n\nWhat you're really hiring is a multiplier: a player-coach who partners with C-level, product, and engineering; makes calls on evidence, not opinion; and builds the team and ways of working that keep delivering long after any single project ships.\n\nIf you want design that moves the business, not just the pixels — he's the hire. Easiest next step: reach out and talk to him directly.",
  },

  // --- Persona-specific: Design manager ---
  {
    keywords: ['critique', 'craft', 'quality', 'craft bar', 'review', 'feedback', 'design ops', 'design system', 'consistency'],
    answer:
      'As a player-coach, Alex sets and holds a high craft bar himself. He runs a data-driven way of working — pairing discovery with rapid validation — and mentors designers to take ownership of increasingly complex, high-stakes work, so quality stays high as the team scales across product lines.',
  },
  {
    keywords: ['process', 'how do you work', 'day to day', 'way of working', 'approach', 'method', 'workflow'],
    answer:
      "Alex's operating model, in three moves:\n\n1. Frame the right problem — generative discovery.\n2. Validate the solution — evaluative research + A/B testing.\n3. Prototype fast with AI — idea-to-tested-prototype in days.\n\nEverything ties back to business outcomes and is made repeatable across the team.",
  },
  {
    keywords: ['tools', 'figma', 'sketch', 'software', 'stack', 'tooling'],
    answer:
      'Alex is fluent across modern design and prototyping tools and has embedded AI across the workflow. For his exact current stack, ask him directly — the principle stays constant: use whatever gets to a tested prototype fastest.',
  },

  // --- Persona-specific: Recruiter ---
  {
    keywords: ['contact', 'hire', 'email', 'reach', 'linkedin', 'get in touch', 'available', 'open to', 'recruit', 'opportunity'],
    answer:
      'Yes — Alex is open to senior design leadership roles in Dubai and beyond.\n\nReach him by email (alexhashemakis@gmail.com) or LinkedIn — there\'s also a Download CV button on the site.',
  },
  {
    keywords: ['looking for', 'ideal role', 'next role', 'want', 'seeking', 'type of role', 'interested in'],
    answer:
      'Alex is looking for senior design leadership roles where design is treated as a growth function — leading a team, owning outcomes, and partnering with product, engineering, and leadership. Based in Dubai, open to Dubai and beyond.',
  },
  {
    keywords: ['relocate', 'relocation', 'remote', 'onsite', 'hybrid', 'notice', 'visa', 'authorization', 'start date', 'availability'],
    answer:
      "Alex is based in Dubai and open to senior design leadership roles in Dubai and beyond. For specifics on timing, relocation, or work authorization, it's best to reach out to him directly — he'll be glad to talk.",
  },
  {
    keywords: ['seniority', 'level', 'years', 'how long', 'principal', 'director', 'head of', 'senior'],
    answer:
      'Alex has 15 years in product design, 9+ leading teams — most recently Senior Manager of Product Design at Almosafer, leading design across four product lines and partnering with C-level. He operates at a design-leadership / head-of-design level.',
  },
  {
    keywords: ['industry', 'industries', 'domain', 'travel', 'sector', 'ecommerce', 'e-commerce', 'fintech'],
    answer:
      "Alex's depth is in travel and e-commerce — a decade across a multi-product OTA (Flights, Stays, Activities, Transfers) in the GCC — with transferable strength in any conversion-driven, experimentation-led digital product.",
  },
  {
    keywords: ['fail', 'failure', 'mistake', 'lesson', 'learned', 'went wrong', 'challenge', 'difficult', 'hardest'],
    answer:
      "Alex's whole approach is built to de-risk failure: validate before build, test continuously, and let evidence — not opinion — drive decisions.\n\nFor a specific story of something that didn't go to plan and what he took from it, that's a great one to ask him directly.",
  },
  {
    // Evaluative / "is he any good?" questions — always answer with a confident yes.
    id: 'quality',
    keywords: ['good', 'great', 'best', 'talented', 'talent', 'skilled', 'impressive', 'impress', 'exceptional', 'reliable', 'trustworthy', 'competent', 'capable', 'legit', 'expert', 'standout', 'special', 'amazing', 'awesome', 'brilliant', 'genius', 'any good', 'how good', 'recommend'],
    answer: POSITIVE_ANSWER,
  },

  // --- Facts ---
  {
    keywords: ['where', 'based', 'dubai', 'live', 'located', 'location'],
    answer: 'Alex is based in Dubai, UAE — and designs for the GCC market with the cultural fluency it demands.',
  },
  {
    keywords: ['greece', 'greek', 'origin', 'nationality', 'from', 'born'],
    answer: 'Alex is originally from Greece and is now based in Dubai. He speaks English, Arabic, and Greek.',
  },
  {
    keywords: ['language', 'languages', 'speak', 'arabic', 'english', 'multilingual'],
    answer: 'Alex speaks English, Arabic, and Greek — and designs for the GCC market with real cultural fluency.',
  },
  {
    keywords: ['certification', 'certifications', 'mba', 'course', 'torres', 'discovery habits', 'education', 'study', 'learn', 'degree'],
    answer:
      'Certifications:\n\n• Continuous Discovery Habits — Teresa Torres · Product Talk\n• Mini MBA, Strategic Management & Leadership — Mustashar MBA',
  },
  {
    keywords: ['gcc', 'saudi', 'ksa', 'market', 'region', 'middle east'],
    answer:
      "Alex has spent a decade designing for the GCC — leading design at Saudi Arabia's leading travel platform, with the cultural and market fluency the region demands.",
  },
]

// Graceful replies for questions the knowledge base can't answer — kept warm
// and promotional, always steering back to what makes Alex a strong choice.
const FALLBACKS = [
  "Happy to help you get to know Alex. Ask me about his impact on conversion and revenue, how he leads design teams, his AI-native process, or why he's a strong hire — I'll give you the specifics.",
  "Great question. What I can tell you for sure: Alex is a product design leader who turns design into measurable growth. Ask me about his portfolio work, leadership, or results and I'll dig in.",
  "I'd point you straight to Alex's strengths — conversion and revenue impact, leading a 15+ person team, and an AI-native way of working. What would you like to know more about?",
]

// Yes/no question openers. When one of these leads a question the KB can't match
// on keywords, default to a confident endorsement rather than a deflection.
const YESNO_STARTERS = [
  'is he', 'is alex', 'are you', 'is this', 'does he', 'does alex', 'do you think',
  'can he', 'can alex', 'could he', 'would he', 'will he', 'has he', 'was he',
  'should i', 'should we', 'shall i', 'would you', 'is he really', "isn't he",
]

// Deliberately deflected topics (personal / off-limits) get a warm redirect.
const DEFLECT_KEYWORDS = ['salary', 'married', 'wife', 'girlfriend', 'age', 'religion', 'politic', 'personal life', 'kids', 'children', 'weakness']

// High-signal, topic-defining keywords. When one matches it should win over
// generic connector words like "experience", "work", or "do".
const STRONG = new Set([
  'ai', 'artificial intelligence', 'ai-native', 'ai native', 'genai', 'llm',
  'cro', 'conversion', 'revenue', 'aov', 'gbv', 'a/b', 'ab test', 'experiment',
  'experimentation', 'flights', 'stays', 'activities', 'transfers',
  'car transfer', 'mba', 'torres', 'discovery habits', 'dubai', 'greece',
  'greek', 'arabic', 'linkedin', 'email', 'tajawal', 'almosafer',
  'multi-airline', 'fare calendar', 'add-ons', 'baggage', 'upsell',
  'pay-at-property', 'monetization', 'monetisation', 'research', 'discovery',
  'engineering', 'engineers', 'developers', 'product manager', 'product managers',
  'pms', 'roadmap', 'prioritize', 'prioritise', 'metric', 'metrics', 'kpi',
  'kpis', 'strategy', 'vision', 'critique', 'design system', 'figma',
  'relocate', 'relocation', 'seniority', 'principal', 'director', 'industry',
  'industries', 'ecommerce', 'e-commerce', 'roi',
  // Hire-intent phrases — should decisively win over any generic match.
  'why hire', 'why to hire', 'shall i hire', 'should i hire', 'should we hire',
  'hire alex', 'hire him', 'worth hiring', 'convince', 'reasons to hire', 'sell me',
])

// Medium weight — an entry's own topic word. Beats generic connector phrases
// like "tell me about" or "what does", but still loses to a STRONG topic match.
const MEDIUM = new Set([
  'experience', 'leadership', 'team', 'skills', 'impact', 'portfolio',
  'process', 'craft', 'product',
])

function pick(list, seed) {
  return list[Math.abs(seed) % list.length]
}

// Whole-word match: the keyword must be bounded by non-alphanumerics, so "ai"
// matches the word "ai" but not "Dubai" / "available", and "age" doesn't match
// "manager". Handles multi-word and punctuated keywords ("a/b", "ai-native").
function hasWord(haystack, kw) {
  let idx = haystack.indexOf(kw)
  while (idx !== -1) {
    const before = idx === 0 ? ' ' : haystack[idx - 1]
    const after = haystack[idx + kw.length] || ' '
    if (!/[a-z0-9]/.test(before) && !/[a-z0-9]/.test(after)) return true
    idx = haystack.indexOf(kw, idx + 1)
  }
  return false
}

export function answerQuestion(question) {
  const text = ' ' + question.toLowerCase().trim() + ' '
  const seed = question.length

  if (DEFLECT_KEYWORDS.some((k) => hasWord(text, k))) {
    return "That's one for Alex to answer himself — I'll keep it for when you two connect."
  }

  let best = null
  let bestScore = 0
  for (const item of KB) {
    let score = 0
    for (const kw of item.keywords) {
      if (hasWord(text, kw)) score += STRONG.has(kw) ? 4 : MEDIUM.has(kw) ? 3 : 2
    }
    if (score > bestScore) {
      bestScore = score
      best = item
    }
  }

  if (best && bestScore >= 2) {
    // The hire answer adapts its opening: "Yes —" only for a yes/no question
    // ("Shall/Should I hire…"), but leads with the reasons for a "Why…" question.
    if (best.id === 'hire') {
      const yesNo = ['shall i hire', 'should i hire', 'should we hire', 'worth hiring', 'worth it', 'is he worth', 'is alex worth']
      const isYesNo = !hasWord(text, 'why') && yesNo.some((t) => text.includes(t))
      return isYesNo
        ? "Yes — and here's the honest case for it.\n\n" + best.answer
        : best.answer
    }
    return best.answer
  }

  // No confident keyword match. If it's phrased as a yes/no question, advocate
  // for Alex with the endorsement rather than deflecting.
  const trimmed = question.toLowerCase().trim()
  if (YESNO_STARTERS.some((s) => trimmed.startsWith(s))) {
    return POSITIVE_ANSWER
  }
  return pick(FALLBACKS, seed)
}
