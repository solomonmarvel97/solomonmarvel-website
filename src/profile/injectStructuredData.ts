/** Injects JSON-LD for Person, ProfilePage, WebSite, and BreadcrumbList. Idempotent per navigation. */
export function injectProfileStructuredData() {
  document.querySelectorAll('script[data-profile-ld]').forEach(el => el.remove())

  const BASE_URL = 'https://solomonmarvelous.com'

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE_URL}/#person`,
    name: 'Solomon Marvelous',
    givenName: 'Solomon',
    familyName: 'Marvelous',
    alternateName: ['marvmargic', 'superdeveloper'],
    jobTitle: 'Chief Technology Officer · Enterprise Architect · AI / ML, Cloud & Data Leader',
    description: `Chief Technology Officer and enterprise architect with ${new Date().getFullYear() - 2010}+ years designing, building, and scaling high-performance systems across fintech, banking, e-commerce, retail, education, and artificial intelligence.`,
    image: `${BASE_URL}/profile/og-banner.png`,
    url: `${BASE_URL}/`,
    email: 'solomon@boltcliq.com',
    nationality: { '@type': 'Country', name: 'Nigeria' },
    birthPlace: { '@type': 'Place', name: 'Delta State, Nigeria' },
    homeLocation: { '@type': 'Place', name: 'Lagos, Nigeria' },
    sameAs: [
      'https://linkedin.com/in/superdeveloper',
      'https://x.com/marvmargic',
      'https://github.com/solomonmarvel97',
      'https://boltcliq.com',
      'https://getjobbox.com',
      'https://peerpaynetwork.com',
      'https://luvie.io',
    ],
    knowsAbout: [
      'Enterprise Architecture', 'Solutions Architecture', 'Data Architecture',
      'Large Language Models', 'Retrieval-Augmented Generation', 'Agentic AI',
      'Computer Vision', 'Multimodal AI', 'Fine-tuning', 'RLHF',
      'AI Agents', 'Prompt Engineering', 'LangChain', 'LlamaIndex',
      'Diffusion Models', 'Hugging Face', 'OpenAI', 'Anthropic Claude',
      'Cloud Computing', 'AWS', 'Azure', 'Google Cloud Platform',
      'Kubernetes', 'Docker', 'IaC', 'Serverless',
      'TypeScript', 'Python', 'Go', 'Rust', 'Java', 'Node.js',
      'Graph Databases', 'Relational Databases', 'Non-Relational Databases',
      'PostgreSQL', 'MongoDB', 'Redis', 'Neo4j',
      'Microservices', 'Event-Driven Architecture', 'Distributed Systems',
      'Fintech', 'EdTech', 'API Design', 'CI/CD',
    ],
    hasOccupation: [
      {
        '@type': 'Occupation',
        name: 'Founder & Chief Executive Officer',
        occupationLocation: { '@type': 'Organization', name: 'Boltcliq Group', url: 'https://boltcliq.com' },
      },
      {
        '@type': 'Occupation',
        name: 'Founder & Chief Executive Officer',
        occupationLocation: { '@type': 'Organization', name: 'The JobBox Company', url: 'https://getjobbox.com' },
      },
      {
        '@type': 'Occupation',
        name: 'Chief Technology Officer',
        occupationLocation: { '@type': 'Organization', name: 'PeerPay Network', url: 'https://peerpaynetwork.com' },
      },
      {
        '@type': 'Occupation',
        name: 'Chief Technology Officer',
        occupationLocation: { '@type': 'Organization', name: 'Luvie Technologies UK', url: 'https://luvie.io' },
      },
      {
        '@type': 'Occupation',
        name: 'Principal Solutions Architect Consultant',
        occupationLocation: { '@type': 'Organization', name: 'GxPay', url: 'https://gxpay.net' },
      },
    ],
    founder: [
      { '@type': 'Organization', name: 'Boltcliq Group', url: 'https://boltcliq.com', foundingDate: '2014' },
      { '@type': 'Organization', name: 'The JobBox Company', url: 'https://getjobbox.com', foundingDate: '2025' },
      { '@type': 'Organization', name: 'Mindstark AI', url: 'https://mindstarkai.com', foundingDate: '2024' },
      { '@type': 'Organization', name: 'TopUniverse Institute', url: 'https://topuniverse.institute', foundingDate: '2025' },
      { '@type': 'Organization', name: 'Top Universe Org.', url: 'https://topuniverse.org', foundingDate: '2021' },
      { '@type': 'Organization', name: 'Boltcliq Consult', url: 'https://boltcliq.com', foundingDate: '2020' },
      { '@type': 'Organization', name: 'Irisempowers', url: 'https://irisempowers.com', foundingDate: '2025' },
      { '@type': 'Organization', name: 'Kidsclubzone', url: 'https://kidsclubzone.com', foundingDate: '2023' },
      { '@type': 'Organization', name: 'Ivorylearn', url: 'https://ivorylearn.com', foundingDate: '2025' },
      { '@type': 'Organization', name: 'MyLove', foundingDate: '2023' },
      { '@type': 'Organization', name: 'Farm25', foundingDate: '2023' },
      { '@type': 'Organization', name: 'Swift', foundingDate: '2023' },
    ],
    hasCredential: '$200k+ in investments raised across 10+ businesses and partnerships',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Delta State Polytechnic, Ogwashi-Uku',
      description: 'Higher National Diploma, Computer Science (2014 – 2016)',
    },
  }

  const profilePage = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${BASE_URL}/#profilepage`,
    name: 'Solomon Marvelous - CTO, Enterprise Architect & AI / ML Leader',
    description: 'Profile page of Solomon Marvelous, Chief Technology Officer, Enterprise Architect, and AI / ML, Cloud & Data Leader with 16+ years of experience.',
    url: `${BASE_URL}/`,
    mainEntity: { '@id': `${BASE_URL}/#person` },
    dateModified: '2026-07-24',
    inLanguage: 'en',
    image: `${BASE_URL}/profile/profile.png`,
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: 'Solomon Marvelous',
    url: BASE_URL,
    description: 'Personal profile of Solomon Marvelous - Chief Technology Officer, Enterprise Architect, and AI / ML, Cloud & Data Leader.',
    inLanguage: 'en',
    author: { '@id': `${BASE_URL}/#person` },
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    ],
  }

  for (const schema of [person, profilePage, website, breadcrumb]) {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-profile-ld', 'true')
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
  }
}
