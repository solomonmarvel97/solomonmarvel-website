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
    jobTitle: 'Enterprise Architect & Distinguished Technology Leader',
    description: `Technology Leader with ${new Date().getFullYear() - 2010}+ years of experience designing and delivering scalable, high-performance systems across fintech, e-commerce, retail, banking, and artificial intelligence domains.`,
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
        name: 'President',
        occupationLocation: { '@type': 'Organization', name: 'The Boltcliq Company' },
      },
      {
        '@type': 'Occupation',
        name: 'Chief Technology Officer',
        occupationLocation: { '@type': 'Organization', name: 'PeerPay Network', url: 'https://peerpaynetwork.com' },
      },
    ],
    founder: [
      { '@type': 'Organization', name: 'The Boltcliq Company', url: 'https://boltcliq.com', foundingDate: '2014' },
      { '@type': 'Organization', name: 'Mindstark AI', url: 'https://mindstarkai.com', foundingDate: '2025' },
      { '@type': 'Organization', name: 'TopUniverse Institute', url: 'https://topuniverse.institute', foundingDate: '2025' },
      { '@type': 'Organization', name: 'Top Universe Org.', url: 'https://topuniverse.org', foundingDate: '2021' },
      { '@type': 'Organization', name: 'Boltcliq Consult', url: 'https://boltcliq.com', foundingDate: '2020' },
      { '@type': 'Organization', name: 'Ivorylearn', foundingDate: '2025' },
    ],
    hasCredential: '$200k+ in investments raised across 10+ businesses and partnerships',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Computer Science',
    },
  }

  const profilePage = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${BASE_URL}/#profilepage`,
    name: 'Solomon Marvelous - Enterprise Architect & Technology Leader',
    description: 'Profile page of Solomon Marvelous, Enterprise Architect and Distinguished Technology Leader with 16+ years of experience.',
    url: `${BASE_URL}/`,
    mainEntity: { '@id': `${BASE_URL}/#person` },
    dateModified: '2026-01-01',
    inLanguage: 'en',
    image: `${BASE_URL}/profile/profile.png`,
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: 'Solomon Marvelous',
    url: BASE_URL,
    description: 'Personal profile of Solomon Marvelous - Enterprise Architect and Distinguished Technology Leader.',
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
