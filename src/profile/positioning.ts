import type { InquiryIntent } from './inquiries'

export const yearsOfExperience = 20

/** Premium positioning: specific person + specific outcome + proof. */
export const positioning = {
  title:
    'Technology Leader - Founder & CEO @JobBox | Connecting Companies With People, AI & Data @Boltcliq. F.D.E / S.A / E.A',
  headline:
    'I help business operators in fintech, banking, recruitment, and education scale with solution design & vertical AI integration for production systems, not AI wrappers.',
  subhead:
    'Two decades shipping production systems. JobBox founder. Boltcliq CEO since 2014. Senior Solutions Architect (Banking/Consulting). Ex Head of Research and Development.',
  contrarian:
    'Most companies do not have an AI problem. They have a vertical integration problem.',
  availabilityTitle: 'Open for vertical AI engagements',
  availabilitySubtitle:
    'Production AI for operators ready to grow and scale. Limited capacity.',
  availabilityCta: 'Start an engagement',
  pitchHeading: 'How I help businesses scale with AI',
  pitchIntro:
    'Most companies do not have an AI strategy problem. They have an integration problem. I design and ship vertical AI systems: software that sits inside your industry workflow, learns how the operation actually runs, and compounds revenue and throughput.',
  salesHook:
    'Most AI projects die in a demo. The ones that change a P&L live inside one industry\'s workflow (credit, hiring, learning, payouts) and they stay there long enough to move volume, cost, and speed.',
  salesProblem:
    'If you are a founder or operator, you have already seen the pattern: a generic chatbot, a prompt library, a slide that says you use GPT. None of it knows your products, your risk, or your customers. The team stops using it. You are left with a line item that did not grow the company.',
  salesOutcome:
    'The outcome I sell is a vertical AI system in production: specific to your industry, wired into the work your people already do, and built so you can grow volume without growing headcount at the same rate. That is how you scale with AI: by putting intelligence into the machine that already runs the operation.',
  salesAuthority:
    'I have spent two decades shipping production systems. Senior Solutions Architect at FCMB. Ex Head of Research and Development. I built JobBox, sit as CTO at PeerPay, advise Luvie UK, and consult GxPay. 20k+ people trained, 150+ engineers led, $200k+ of my own capital in the companies I run. If you operate in fintech, banking, recruitment, education, or payments, I have already done this work in your industry.',
  salesCta: 'If you are ready to put AI into the operation, not onto a slide, start an engagement.',
  ctaKicker: 'Ready when the work is real',
  ctaHeadline: 'Put AI inside the operation, not beside it.',
  ctaBody:
    'If your industry is fintech, banking, recruitment, education, or payments, I have already shipped in that room. Tell me the workflow you need to grow, and I will tell you whether a vertical AI system is the right move.',
} as const

export const seo = {
  homeTitle: 'Vertical AI Integrations Expert | Solomon Marvelous',
  homeDescription:
    'Solomon Marvelous helps businesses grow and scale with vertical AI integrations. Two decades embedding AI into products, operations, and industry workflows.',
  keywords:
    'Solomon Marvelous, vertical AI integrations, vertical AI, vertical AI expert, AI for business growth, scale with AI, grow with AI, industry-specific AI, AI integration consultant, embed AI in products, vertical AI for operations, hire vertical AI expert',
  imageAlt: 'Solomon Marvelous, vertical AI integrations expert based in Lagos, Nigeria',
  aboutTitle: 'My Story: From Coding at 8 to Vertical AI | Solomon Marvelous',
  aboutDescription:
    'Born in Delta State, Nigeria, Solomon Marvelous started coding at 8. Today he is a vertical AI integrations expert helping businesses grow and scale with AI.',
  experienceTitle: 'Experience | Solomon Marvelous',
  experienceDescription:
    'Experience of Solomon Marvelous, grouped by company, plus the companies he founded and operates across fintech, recruitment, education, and more.',
} as const

export type FeaturedOffer = {
  tier: string
  title: string
  description: string
  cta: string
  intent: InquiryIntent
}

export const featuredOffers: FeaturedOffer[] = [
  {
    tier: 'Start here',
    title: 'Vertical AI diagnostic',
    description: 'A short working session on where AI would actually grow or scale your operation, and where it would not.',
    cta: 'Book the diagnostic',
    intent: 'diagnostic',
  },
  {
    tier: 'Sprint',
    title: 'Vertical AI sprint',
    description: 'A scoped engagement that designs and ships one production integration inside a workflow you already run.',
    cta: 'Start a sprint',
    intent: 'sprint',
  },
  {
    tier: 'Partnership',
    title: 'Vertical AI partnership',
    description: 'I architect and lead the industry-specific system that becomes how you grow: AI in production, with the roadmap to scale it.',
    cta: 'Discuss a partnership',
    intent: 'partnership',
  },
]

export const faqs = [
  {
    question: 'What are vertical AI integrations?',
    answer:
      'Vertical AI integrations put AI inside a specific industry workflow, not a generic chatbot beside the business. I design these systems so AI fits the products, operations, and rules that already create value. The goal is growth and scale, not a demo.',
  },
  {
    question: 'How can vertical AI help a business grow and scale?',
    answer:
      'It increases capacity in the work that already drives the business: faster operations, smarter products, and clearer decisions as volume grows. I focus on integrations that support scale without a matching jump in complexity. A generic AI tool sitting next to the workflow rarely does that on its own.',
  },
  {
    question: 'How is this different from rolling out ChatGPT or a generic copilot?',
    answer:
      'A generic rollout sits next to the business. Vertical AI lives in the workflow: the data, products, and processes that make that industry distinct. I build the latter so AI is part of how the company operates, not an extra tab.',
  },
  {
    question: 'Can you embed AI into an existing product or operation?',
    answer:
      'Yes. I work with founders and operators who already have a product, platform, or operation and need AI wired into it. Work typically covers strategy, architecture, and shipping the integration into production, not a standalone prototype.',
  },
  {
    question: 'Do you only advise, or do you build?',
    answer:
      'Both, on purpose. I will not leave you with a strategy you cannot implement. I architect the vertical system and I build it, the same way I have shipped products as a founder and as an operator inside larger organisations.',
  },
  {
    question: 'How do I start a vertical AI engagement?',
    answer:
      'Reach out at me@solomonmarvel.com or start an engagement on this site. Share the industry, the workflow you want to improve, and where growth is constrained. From there I can tell you whether a vertical AI integration is the right lever.',
  },
] as const
