export const coverImages = [
  'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
  'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg',
  'https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg',
  'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg',
  'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg',
  'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg',
  'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg',
  'https://images.pexels.com/photos/1287075/pexels-photo-1287075.jpeg',
  'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg',
  'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg',
  'https://images.pexels.com/photos/1192671/pexels-photo-1192671.jpeg',
  'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
  'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg',
  'https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg',
  'https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg',
] as const

export const businessOfferings = [
  {
    title: 'Vertical AI integration',
    description:
      'I wire AI into the workflows that already make you money (underwriting, onboarding, matching, tutoring, payouts) so the system is specific to your industry and usable by your team.',
  },
  {
    title: 'Production AI for scale',
    description:
      'I take a working idea off a slide and put it into production: latency, audit trails, failure modes, and the architecture required to run at banking and payments volume.',
  },
  {
    title: 'AI-native industry products',
    description:
      'I design and ship products where AI is the operating system, not a feature. That is the same pattern behind JobBox in recruitment and the systems I have led in education and fintech.',
  },
  {
    title: 'Vertical AI architecture',
    description:
      'I design the industry-specific spine that lets AI run in production: data, controls, failure modes, and the engineering path your team can actually ship.',
  },
] as const

export const achievements = [
  { value: '20k+', label: 'Students trained to ship' },
  { value: '20+', label: 'Years in production' },
  { value: '150+', label: 'Engineers led' },
  { value: '20+', label: 'Operating partnerships' },
  { value: '$200k+', label: 'Personal capital deployed' },
] as const

export const skills = [
  { group: 'Vertical AI', tags: ['Vertical AI Integrations', 'Domain-specific AI', 'Production AI Systems', 'AI Agents & Orchestration', 'Retrieval-Augmented Generation', 'Large Language Models', 'Agentic AI', 'Fine-tuning & RLHF', 'Multimodal AI', 'Computer Vision', 'NLP', 'OpenAI', 'Anthropic Claude', 'Gemini', 'LangChain', 'LlamaIndex', 'Hugging Face', 'PyTorch'] },
  { group: 'Cloud', tags: ['AWS', 'Azure', 'GCP', 'Cloudflare', 'Serverless', 'Kubernetes', 'Docker', 'IaC'] },
  { group: 'Languages', tags: ['TypeScript', 'Python', 'Go', 'Rust', 'Java', 'Kotlin', 'JavaScript', 'C++'] },
  { group: 'Databases', tags: ['Graph Databases', 'Relational', 'Non-Relational', 'PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'CosmosDB', 'Neo4j'] },
  { group: 'Architecture', tags: ['Enterprise Architecture', 'Solutions Architecture', 'Data Architecture', 'Microservices', 'Event-Driven', 'Distributed Systems', 'API Design', 'CI/CD'] },
] as const

export type Product = {
  title: string
  year: string
  pitch: string
  detail: string[]
  url?: string
  urlLabel?: string
  isNew?: boolean
}

export const products: Product[] = [
  {
    title: 'Netbox',
    year: '2026',
    isNew: true,
    url: 'https://github.com/solomonmarvel97/netbox',
    urlLabel: 'View on GitHub',
    pitch: 'Local network monitor that tells you if the problem is your Wi-Fi or the ISP.',
    detail: [
      'Netbox is a local network stability monitor with a Python backend and a Vue dashboard. It runs HTTP/S, TCP, ICMP, and DNS checks from your machine, stores history in SQLite, and helps you separate local network issues from upstream or ISP problems.',
      'The dashboard covers live monitoring, configurable targets, incident history, and on-demand speed tests. It can run as a desktop app with a bundled backend, with no cloud required.',
    ],
  },
  {
    title: 'JobBox',
    year: '2026',
    isNew: true,
    url: 'https://getjobbox.com',
    urlLabel: 'Visit JobBox',
    pitch: 'AI-native recruitment workspace for screening, scoring, and explaining candidate fit in minutes.',
    detail: [
      'JobBox is an AI-native recruitment workspace that helps recruiters, founders, and hiring teams screen, score, shortlist, and explain candidate fit in minutes instead of weeks, leveraging our enterprise-ready AI infrastructure.',
    ],
  },
  {
    title: 'SupportBox',
    year: '2025',
    pitch: 'Support desk for teams that need conversations, tickets, and replies in one workflow.',
    detail: [
      'SupportBox is a customer support product for teams that have outgrown a shared inbox. It brings incoming conversations, tickets, and replies into one queue so support work lives inside the operation instead of across email, chat, and spreadsheets.',
      'It follows the same production pattern as the rest of the Box line: a system a team can run every day, not a chatbot dropped beside the helpdesk.',
    ],
  },
  {
    title: 'SchoolBox',
    year: '2022',
    pitch: 'School operations platform for students, classes, and institutional records.',
    detail: [
      'SchoolBox is an education operations product for schools and training institutes. It is built around the records a school actually runs: students, classes, staff, and the administration that sits behind teaching.',
      'I shipped it in 2022 in the same education line as Top Universe and the institutes I still operate.',
    ],
  },
  {
    title: '3dBox',
    year: '2025',
    pitch: 'Browser-based 3D viewer for inspecting and presenting spatial files.',
    detail: [
      '3dBox is a 3D viewing product for models and spatial files in the browser. It is for inspecting, presenting, and sharing 3D assets without a heavyweight desktop suite.',
      'It sits in the Box product line as the dedicated viewer for spatial work.',
    ],
  },
  {
    title: 'Usereferralai',
    year: '2024',
    url: 'https://usereferralai.com',
    urlLabel: 'Visit ReferralAI',
    pitch: 'Referral program tracking with codes, analytics, and fraud controls.',
    detail: [
      'Usereferralai (ReferralAI) is a referral management platform for businesses that run affiliate or referral programs. It tracks referral codes, conversions, and campaign performance from a shared dashboard.',
      'The product covers real-time analytics, multi-platform tracking, fraud detection, and integration so a referral program can run as part of the growth operation rather than a spreadsheet on the side.',
    ],
  },
]

export type CompanyRole = {
  role: string
  period?: string
}

export type Company = {
  title: string
  role: string
  year: string
  status: string
  url?: string
  flagship?: boolean
  affiliation?: string
  roles?: CompanyRole[]
}

export type CompanyIndustryGroup = {
  industry: string
  companies: Company[]
}

export const companies: CompanyIndustryGroup[] = [
  {
    industry: 'Recruitment',
    companies: [
      { title: 'The JobBox Company', role: 'Founder & Chief Executive Officer · AI-native recruitment', year: '2025', status: 'Present', url: 'https://getjobbox.com' },
    ],
  },
  {
    industry: 'Holding & consulting',
    companies: [
      { title: 'Boltcliq Group', role: 'Founder & Chief Executive Officer', affiliation: '150k ARR Business Agency', year: '2014', status: 'Present', url: 'https://boltcliq.com', flagship: true },
      { title: 'Boltcliq Consult (Consulting)', role: 'Founder', year: '2020', status: 'Present', url: 'https://boltcliq.com' },
    ],
  },
  {
    industry: 'Fintech & payments',
    companies: [
      { title: 'PeerPay Network', role: 'Chief Technology Officer · Peer-to-peer lending & settlement', year: '2025', status: 'Present', url: 'https://peerpaynetwork.com' },
      { title: 'GxPay', role: 'Principal Solutions Architect · Consultant', affiliation: 'Payment gateway', year: '2026', status: 'Present', url: 'https://gxpay.net' },
    ],
  },
  {
    industry: 'Beauty & lifestyle',
    companies: [
      {
        title: 'Luvie Technologies UK',
        role: 'Technical Advisor & Independent Contributor',
        affiliation: 'On-demand beauty & styling',
        year: '2025',
        status: 'Present',
        url: 'https://luvie.io',
        roles: [
          { role: 'Technical Advisor & Independent Contributor' },
          { role: 'Chief Technology Officer', period: '2025 – Aug 2026' },
        ],
      },
    ],
  },
  {
    industry: 'Education',
    companies: [
      { title: 'Ivorylearn', role: 'Executive Member / Technical Advisor · Digital skills for women', affiliation: 'A Boltcliq Partner', year: '2025', status: 'Present', url: 'https://ivorylearn.com' },
      { title: 'TopUniverse Institute', role: 'Founder & Board Member', affiliation: 'A Boltcliq Partner', year: '2025', status: 'Present', url: 'https://topuniverse.institute' },
      { title: 'Kidsclubzone', role: 'Founder & Board Member · STEM learning for kids', affiliation: 'A Boltcliq Partner', year: '2023', status: 'Present', url: 'https://kidsclubzone.com' },
      { title: 'NextGen Academy', role: 'Founder & Board Member', year: '2023', status: 'Present' },
      { title: 'Top Universe Org. (NGO)', role: 'Founder & Board Member · Boltcliq Educational Foundation', affiliation: '20k+ students trained', year: '2021', status: 'Present', url: 'https://topuniverse.org' },
    ],
  },
  {
    industry: 'Agriculture & food',
    companies: [
      { title: 'MyLove', role: 'Founding Partner · Processed food for enterprise businesses', affiliation: 'A Boltcliq Partner', year: '2023', status: 'Present' },
      { title: 'Farm25', role: 'Founding Partner · Agricultural produce, distribution & AI platforms', affiliation: 'A Boltcliq Partner', year: '2023', status: 'Present' },
    ],
  },
  {
    industry: 'Logistics',
    companies: [
      { title: 'Swift', role: 'Founding Partner · Logistics for Boltcliq companies & partner brands', affiliation: 'A Boltcliq Partner', year: '2023', status: 'Present' },
    ],
  },
  {
    industry: 'Community',
    companies: [
      { title: 'Irisempowers', role: 'Founder', affiliation: 'A Boltcliq Partner', year: '2025', status: 'Present', url: 'https://irisempowers.com' },
    ],
  },
  {
    industry: 'AI & ventures',
    companies: [
      { title: 'Mindstark AI', role: 'Lead Architect & Distinguished Software Engineer', affiliation: 'A Boltcliq Partner · Venture studio', year: '2024', status: 'Present', url: 'https://mindstarkai.com' },
    ],
  },
  {
    industry: 'Social',
    companies: [
      { title: 'Pingxtra', role: 'Founder', year: '2010', status: 'Closed' },
    ],
  },
]

export type ExperienceRole = {
  role: string
  period?: string
}

export type ExperienceGroup = {
  company: string
  url?: string
  detail?: string
  roles: ExperienceRole[]
}

export const experience: ExperienceGroup[] = [
  {
    company: 'The JobBox Company',
    url: 'https://getjobbox.com',
    detail: 'AI-native recruitment',
    roles: [
      { role: 'Founder & Chief Executive Officer' },
    ],
  },
  {
    company: 'Boltcliq Group',
    url: 'https://boltcliq.com',
    detail: '150k ARR Business Agency',
    roles: [
      { role: 'Founder & Chief Executive Officer' },
    ],
  },
  {
    company: 'PeerPay Network',
    url: 'https://peerpaynetwork.com',
    roles: [
      { role: 'Chief Technology Officer' },
    ],
  },
  {
    company: 'GxPay',
    url: 'https://gxpay.net',
    detail: 'Fintech payment gateway',
    roles: [
      { role: 'Principal Solutions Architect Consultant' },
    ],
  },
  {
    company: 'Luvie Technologies UK',
    url: 'https://luvie.io',
    detail: 'On-demand beauty & styling',
    roles: [
      { role: 'Technical Advisor & Independent Contributor' },
      { role: 'Chief Technology Officer', period: '2025 – Aug 2026' },
    ],
  },
  {
    company: 'MindStark AI',
    url: 'https://mindstarkai.com',
    roles: [
      { role: 'Lead Architect & Distinguished Software Engineer' },
    ],
  },
  {
    company: 'Top Universe Org. (NGO)',
    url: 'https://topuniverse.org',
    roles: [
      { role: 'Founding Partner & Program Lead' },
    ],
  },
  {
    company: 'uLesson Group / Miva Open University',
    url: 'https://miva.edu.ng',
    roles: [
      { role: 'Head of Research and Development', period: 'Aug 2025 – Oct 2025' },
      { role: 'Senior AI Solutions Architect / Technical Lead', period: 'May 2025 – Jun 2025' },
    ],
  },
  {
    company: 'First City Monument Bank',
    roles: [
      { role: 'Senior Solutions Architect', period: 'Aug 2023 – Jun 2025' },
    ],
  },
  {
    company: 'Bunkr Essentials',
    roles: [
      { role: 'Principal Software Engineer · Consultant', period: 'Jul 2023 – Oct 2023' },
    ],
  },
  {
    company: 'Redis',
    roles: [
      { role: 'Contract Technical Writer', period: 'Sep 2022 – Jun 2023' },
    ],
  },
  {
    company: 'Hayche Network',
    roles: [
      { role: 'Technical Partner / Solutions Architect & Lead Engineer', period: 'Aug 2021 – Sep 2022' },
    ],
  },
  {
    company: 'UmbrellaTree Colab',
    roles: [
      { role: 'Project Development Lead', period: 'Sep 2020 – Sep 2022' },
    ],
  },
  {
    company: 'MyRetailer',
    roles: [
      { role: 'Contract Senior Staff Engineer', period: 'Dec 2021 – Feb 2022' },
    ],
  },
  {
    company: 'Encentral Solutions',
    url: 'https://www.encentralsolutions.com',
    roles: [
      { role: 'Mobile Application Engineer', period: 'Jul 2017 – Jan 2018' },
    ],
  },
  {
    company: 'Pingxtra',
    roles: [
      { role: 'Founder & Full Stack Lead Engineer', period: 'Jan 2010 – 2014' },
    ],
  },
]
