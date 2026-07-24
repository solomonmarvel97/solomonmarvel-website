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
    title: 'Consulting Engagements & Technical Leadership',
    description:
      'Strategic direction, engineering org design, hiring, and hands-on leadership for startups and scale-ups navigating critical growth phases.',
  },
  {
    title: 'Enterprise & Cloud Architecture',
    description:
      'Scalable, high-performance systems across fintech, banking, e-commerce, and retail - microservices, event-driven platforms, and cloud-native infrastructure.',
  },
  {
    title: 'AI & Intelligent Products',
    description:
      'LLMs, RAG pipelines, agentic AI, and multimodal systems built into real products - from strategy and architecture through to production deployment.',
  },
  {
    title: 'End-to-End Product Development',
    description:
      'Full product builds from concept to shipped software - platforms, APIs, mobile apps, and internal tools. I don\'t just advise; I build.',
  },
  {
    title: 'Engineering Consulting & Advisory',
    description:
      'Architecture reviews, technical due diligence, roadmap planning, and engineering team transformation for enterprises and founders.',
  },
  {
    title: 'Platform & Ecosystem Design',
    description:
      'Multi-product ecosystems, API platforms, and operational systems that simplify complexity and create lasting business impact at scale.',
  },
] as const

export const achievements = [
  { value: '17k+', label: 'Students trained' },
  { value: `${new Date().getFullYear() - 2010}+`, label: 'Years experience' },
  { value: '100+', label: 'Engineers managed across teams' },
  { value: '10+', label: 'Partnerships' },
  { value: '$200k+', label: 'Investments' },
] as const

export const skills = [
  { group: 'AI & ML', tags: ['Large Language Models', 'Retrieval-Augmented Generation', 'Agentic AI', 'Computer Vision', 'OpenCV', 'Multimodal AI', 'Fine-tuning & RLHF', 'Prompt Engineering', 'AI Agents & Orchestration', 'NLP', 'OpenAI', 'Anthropic Claude', 'Gemini', 'Mistral', 'LangChain', 'LlamaIndex', 'Hugging Face', 'TensorFlow', 'PyTorch', 'Diffusion Models'] },
  { group: 'Cloud', tags: ['AWS', 'Azure', 'GCP', 'Cloudflare', 'Serverless', 'Kubernetes', 'Docker', 'IaC'] },
  { group: 'Languages', tags: ['TypeScript', 'Python', 'Go', 'Rust', 'Java', 'Kotlin', 'JavaScript', 'C++'] },
  { group: 'Databases', tags: ['Graph Databases', 'Relational', 'Non-Relational', 'PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'CosmosDB', 'Neo4j'] },
  { group: 'Architecture', tags: ['Enterprise Architecture', 'Solutions Architecture', 'Data Architecture', 'Algorithmic Design', 'Engineering Consulting', 'Microservices', 'Event-Driven', 'Distributed Systems', 'API Design', 'CI/CD'] },
] as const

export const products = [
  { title: 'Netbox', year: '2026', isNew: true, url: 'https://github.com/solomonmarvel97/netbox' },
  { title: 'JobBox', year: '2026', isNew: true, url: 'https://getjobbox.com' },
  { title: 'SupportBox', year: '2025' },
  { title: 'SchoolBox', year: '2022' },
  { title: '3dBox', year: '2025' },
  { title: 'Usereferralai', year: '2024' },
] as const

export const companies = [
  { title: 'The JobBox Company', role: 'Founder & Chief Executive Officer · AI-native recruitment', year: '2025', status: 'Present', url: 'https://getjobbox.com' },
  { title: 'PeerPay Network', role: 'Chief Technology Officer · Peer-to-peer lending & settlement', year: '2025', status: 'Present', url: 'https://peerpaynetwork.com' },
  { title: 'Luvie Technologies UK', role: 'Chief Technology Officer · On-demand beauty & styling', year: '2025', status: 'Present', url: 'https://luvie.io' },
  { title: 'GxPay', role: 'Principal Solutions Architect · Consultant', affiliation: 'Fintech payment gateway', year: '2026', status: 'Present', url: 'https://gxpay.net' },
  { title: 'Ivorylearn', role: 'Executive Member / Technical Advisor', affiliation: 'A Boltcliq Partner', year: '2025', status: 'Present', url: 'https://ivorylearn.com' },
  { title: 'TopUniverse Institute', role: 'Founder & Board Member', affiliation: 'A Boltcliq Partner', year: '2025', status: 'Present', url: 'https://topuniverse.institute' },
  { title: 'Mindstark AI', role: 'Lead Architect & Distinguished Software Engineer', affiliation: 'A Boltcliq Partner · Venture studio', year: '2024', status: 'Present', url: 'https://mindstarkai.com' },
  { title: 'Irisempowers', role: 'Founder', affiliation: 'A Boltcliq Partner', year: '2025', status: 'Present', url: 'https://irisempowers.com' },
  { title: 'Kidsclubzone', role: 'Founder & Board Member', affiliation: 'A Boltcliq Partner', year: '2023', status: 'Present', url: 'https://kidsclubzone.com' },
  { title: 'Skyta.space', role: 'Distinguished Solutions Architect / Executive Member', year: '2023', status: 'Present' },
  { title: 'CRRNetwork NGO', role: 'Head of IT', year: '2023', status: 'Present', url: 'https://crrnetwork.org' },
  { title: 'NextGen Academy', role: 'Founder & Board Member', year: '2023', status: 'Present' },
  { title: 'MyLove', role: 'Founding Partner · Processed food for enterprise businesses', affiliation: 'A Boltcliq Partner', year: '2023', status: 'Present' },
  { title: 'Farm25', role: 'Founding Partner · Agricultural produce, distribution & AI platforms', affiliation: 'A Boltcliq Partner', year: '2023', status: 'Present' },
  { title: 'Swift', role: 'Founding Partner · Logistics for Boltcliq companies & partner brands', affiliation: 'A Boltcliq Partner', year: '2023', status: 'Present' },
  { title: 'Top Universe Org. (NGO)', role: 'Founder & Board Member · Boltcliq Educational Foundation', affiliation: '17k+ students trained', year: '2021', status: 'Present', url: 'https://topuniverse.org' },
  { title: 'Boltcliq Consult (Consulting)', role: 'Founder', year: '2020', status: 'Present', url: 'https://boltcliq.com' },
  { title: 'Boltcliq Group', role: 'Founder & Chief Executive Officer', year: '2014', status: 'Present', url: 'https://boltcliq.com', flagship: true },
  { title: 'Pingxtra', role: 'Founder', year: '2010', status: 'Closed' },
] as const

export type ExperienceGroup = {
  year: string
  items: Array<{ role: string; company: string; period: string; url?: string }>
}

export const experience: ExperienceGroup[] = [
  {
    year: '2014',
    items: [
      { role: 'Founder & Chief Executive Officer', company: 'Boltcliq Group', period: 'Present', url: 'https://boltcliq.com' },
    ],
  },
  {
    year: '2026',
    items: [
      { role: 'Principal Solutions Architect Consultant', company: 'GxPay · Fintech payment gateway', period: 'Jun 2026 · Consulting', url: 'https://gxpay.net' },
    ],
  },
  {
    year: '2025',
    items: [
      { role: 'Founder & Chief Executive Officer', company: 'The JobBox Company · AI-native recruitment', period: 'Present', url: 'https://getjobbox.com' },
      { role: 'Chief Technology Officer', company: 'Luvie Technologies UK · On-demand beauty & styling', period: 'Present', url: 'https://luvie.io' },
      { role: 'Chief Technology Officer', company: 'PeerPay Network', period: 'Present', url: 'https://peerpaynetwork.com' },
      { role: 'Head of R&D', company: 'uLesson Group / Miva Open University', period: 'Aug 2025 – Oct 2025', url: 'https://miva.edu.ng' },
      { role: 'Senior AI Solutions Architect / Technical Lead', company: 'uLesson Group / Miva Open University', period: 'May 2025 – Jun 2025', url: 'https://miva.edu.ng' },
    ],
  },
  {
    year: '2024',
    items: [
      { role: 'Lead Architect & Distinguished Software Engineer', company: 'MindStark AI', period: 'Present', url: 'https://mindstarkai.com' },
    ],
  },
  {
    year: '2023',
    items: [
      { role: 'Senior Solutions Architect', company: 'First City Monument Bank', period: 'Aug 2023 – Jun 2025' },
      { role: 'Principal Software Engineer', company: 'Bunkr Essentials', period: 'Jul 2023 – Oct 2023 · Consultant' },
    ],
  },
  {
    year: '2022',
    items: [
      { role: 'Contract Technical Writer', company: 'Redis', period: 'Sep 2022 – Jun 2023' },
    ],
  },
  {
    year: '2021',
    items: [
      { role: 'Founding Partner & Program Lead', company: 'Top Universe Org. (NGO)', period: 'Present', url: 'https://topuniverse.org' },
      { role: 'Technical Partner / Solutions Architect & Lead Engineer', company: 'Hayche Network', period: 'Aug 2021 – Sep 2022' },
      { role: 'Contract Senior Staff Engineer', company: 'MyRetailer', period: 'Dec 2021 – Feb 2022' },
    ],
  },
  {
    year: '2020',
    items: [
      { role: 'Project Development Lead', company: 'UmbrellaTree Colab', period: 'Sep 2020 – Sep 2022' },
    ],
  },
  {
    year: '2017',
    items: [
      { role: 'Mobile Application Engineer', company: 'Encentral Solutions', period: 'Jul 2017 – Jan 2018', url: 'https://www.encentralsolutions.com' },
    ],
  },
  {
    year: '2010',
    items: [
      { role: 'Founder & Full Stack Lead Engineer', company: 'Pingxtra', period: 'Jan 2010 – 2014' },
    ],
  },
]
