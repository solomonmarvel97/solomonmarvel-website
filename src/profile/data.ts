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
  { title: 'JobBox', year: '2026', isNew: true, url: 'https://getjobbox.com' },
  { title: 'SupportBox', year: '2025', url: 'https://getsupportbox.com' },
  { title: 'SchoolBox', year: '2022' },
  { title: '3dBox', year: '2025', url: 'https://get3dbox.com' },
  { title: 'Usereferralai', year: '2024', url: 'https://usereferralai.com' },
] as const

export const companies = [
  { title: 'Ivorylearn', role: 'Founder', affiliation: 'A Boltcliq Partner', year: '2025', status: 'Present' },
  { title: 'TopUniverse Institute', role: 'Founder', affiliation: 'A Boltcliq Partner', year: '2025', status: 'Present', url: 'https://topuniverse.institute' },
  { title: 'Mindstark AI', role: 'Founder', affiliation: 'A Boltcliq Partner', year: '2025', status: 'Present', url: 'https://mindstarkai.com' },
  { title: 'Irisempowers', role: 'Co-founder', affiliation: 'A Boltcliq Partner', year: '2025', status: 'Present', url: 'https://irisempowers.com' },
  { title: 'Kidsclubzone', role: 'Co-founder', affiliation: 'A Boltcliq Partner', year: '2023', status: 'Present', url: 'https://kidsclubzone.com' },
  { title: 'MyLove', role: 'Founder · Processed food for enterprise businesses', affiliation: 'A Boltcliq Partner', year: '2023', status: 'Present' },
  { title: 'Farm25', role: 'Founder · Agricultural produce, distribution & AI platforms', affiliation: 'A Boltcliq Partner', year: '2023', status: 'Present' },
  { title: 'Swift', role: 'Founder · Logistics for Boltcliq companies & partner brands', affiliation: 'A Boltcliq Partner', year: '2023', status: 'Present' },
  { title: 'Top Universe Org. (NGO)', role: 'Founder · Boltcliq Educational Foundation', affiliation: '16+ members', year: '2021', status: 'Present', url: 'https://topuniverse.org' },
  { title: 'Boltcliq Consult (Consulting)', role: 'Founder', year: '2020', status: 'Present', url: 'https://boltcliq.com' },
  { title: 'The Boltcliq Company', role: 'Founder', year: '2014', status: 'Present', url: 'https://boltcliq.com', flagship: true },
  { title: 'Pingxtra', role: 'Founder', year: '2009', status: 'Closed' },
] as const

export type ExperienceGroup = {
  year: string
  items: Array<{ role: string; company: string; period: string; url?: string }>
}

export const experience: ExperienceGroup[] = [
  {
    year: '2014',
    items: [
      { role: 'President', company: 'The Boltcliq Company', period: 'Present', url: 'https://boltcliq.com' },
    ],
  },
  {
    year: '2025',
    items: [
      { role: 'Head of R&D', company: 'uLesson Group / Miva University', period: 'Sep 2025', url: 'https://miva.edu.ng' },
      { role: 'Senior AI Solutions Architect', company: 'uLesson Group / Miva University', period: 'May 2025', url: 'https://miva.edu.ng' },
      { role: 'Chief Technology Officer', company: 'PeerPay Network', period: 'Present', url: 'https://peerpaynetwork.com' },
    ],
  },
  {
    year: '2024',
    items: [
      { role: 'Lead Architect & Distinguished Engineer', company: 'Boltcliq Consult', period: 'Present' },
    ],
  },
  {
    year: '2023',
    items: [
      { role: 'Senior Solutions Architect', company: 'First City Monument Bank', period: 'May 2025' },
      { role: 'Principal Software Engineer', company: 'Bunkr Essentials', period: 'Sep 2023' },
    ],
  },
  {
    year: '2022',
    items: [
      { role: 'Contract Technical Writer', company: 'Redis', period: 'May 2023' },
    ],
  },
  {
    year: '2021',
    items: [
      { role: 'Founding Partner & Program Lead', company: 'Top Universe Org. (NGO)', period: 'Present' },
    ],
  },
  {
    year: '2020',
    items: [
      { role: 'Project Development Lead', company: 'UmbrellaTree Colab', period: 'Aug 2022' },
    ],
  },
  {
    year: '2017',
    items: [
      { role: 'Mobile Application Engineer', company: 'Encentral Solutions', period: 'Dec 2017', url: 'https://www.encentralsolutions.com' },
    ],
  },
  {
    year: '2009',
    items: [
      { role: 'Founder & Lead Engineer', company: 'Pingxtra', period: 'Dec 2013' },
    ],
  },
]
