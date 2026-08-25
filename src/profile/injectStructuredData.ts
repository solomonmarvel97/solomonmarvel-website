import { faqs, positioning } from './positioning'

const BASE_URL = 'https://solomonmarvelous.com'

function replaceLdJson(schemas: object[]) {
  document.querySelectorAll('script[data-profile-ld]').forEach(el => el.remove())
  for (const schema of schemas) {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-profile-ld', 'true')
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
  }
}

function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE_URL}/#person`,
    name: 'Solomon Marvelous',
    givenName: 'Solomon',
    familyName: 'Marvelous',
    alternateName: ['marvmargic', 'superdeveloper'],
    jobTitle: positioning.title,
    description: 'Solomon Marvelous is a vertical AI integrations expert who helps businesses grow and scale with AI. Two decades designing and shipping industry-specific AI systems into products, operations, and platforms.',
    image: `${BASE_URL}/profile/profile.png`,
    url: `${BASE_URL}/`,
    email: 'me@solomonmarvel.com',
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
      'Vertical AI Integrations', 'Vertical AI', 'AI for Business Growth', 'Scaling with AI',
      'Industry-Specific AI', 'AI Product Integration', 'Operational AI',
      'Enterprise AI Adoption', 'AI-Native Product Development',
      'Large Language Models', 'Retrieval-Augmented Generation', 'Agentic AI', 'AI Agents',
      'Multimodal AI', 'Fine-tuning', 'Prompt Engineering',
      'Solutions Architecture', 'Cloud-Native AI Infrastructure',
      'Fintech AI', 'EdTech AI', 'Distributed Systems',
    ],
    hasOccupation: [
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
        name: 'Technical Advisor & Independent Contributor',
        occupationLocation: { '@type': 'Organization', name: 'Luvie Technologies UK', url: 'https://luvie.io' },
      },
      {
        '@type': 'Occupation',
        name: 'Principal Solutions Architect',
        occupationLocation: { '@type': 'Organization', name: 'GxPay', url: 'https://gxpay.net' },
      },
      {
        '@type': 'Occupation',
        name: 'Founder & Chief Executive Officer',
        occupationLocation: { '@type': 'Organization', name: 'Boltcliq Group', url: 'https://boltcliq.com' },
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
    hasCredential: '$200k+ in personal financing across 20+ businesses and partnerships',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Delta State Polytechnic, Ogwashi-Uku',
      description: 'Higher National Diploma, Computer Science (2014 – 2016)',
    },
  }
}

function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: 'Solomon Marvelous',
    url: BASE_URL,
    description: 'Personal site of Solomon Marvelous, a vertical AI integrations expert who helps businesses grow and scale with AI.',
    inLanguage: 'en',
    author: { '@id': `${BASE_URL}/#person` },
  }
}

/** Injects JSON-LD for Person, ProfilePage, WebSite, and BreadcrumbList. Idempotent per navigation. */
export function injectProfileStructuredData() {
  const profilePage = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${BASE_URL}/#profilepage`,
    name: 'Vertical AI Integrations Expert | Solomon Marvelous',
    description: 'Work and profile of Solomon Marvelous, a vertical AI integrations expert who helps businesses grow and scale with AI.',
    url: `${BASE_URL}/`,
    mainEntity: { '@id': `${BASE_URL}/#person` },
    dateModified: '2026-08-25',
    inLanguage: 'en',
    image: `${BASE_URL}/profile/profile.png`,
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Work', item: BASE_URL },
    ],
  }

  const service = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}/#service`,
    name: 'Vertical AI Integrations',
    serviceType: 'Vertical AI integration consulting and implementation',
    description: 'Industry-specific AI designed, shipped, and scaled for founders and operators in fintech, banking, recruitment, and education.',
    url: BASE_URL,
    provider: { '@id': `${BASE_URL}/#person` },
    areaServed: [
      { '@type': 'Place', name: 'Lagos, Nigeria' },
      { '@type': 'Place', name: 'Worldwide' },
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'Founders, operators, and product leaders who want to grow and scale with AI',
    },
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${BASE_URL}/#faq`,
    mainEntity: faqs.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  replaceLdJson([personSchema(), profilePage, websiteSchema(), breadcrumb, service, faqPage])
}

/** Injects JSON-LD for the My Story / About page. Idempotent per navigation. */
export function injectAboutStructuredData() {
  const aboutPage = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${BASE_URL}/about#page`,
    name: 'My Story: From Coding at 8 to Vertical AI | Solomon Marvelous',
    description: 'Born in Delta State, Nigeria, Solomon Marvelous started coding at 8. Today he is a vertical AI integrations expert helping businesses grow and scale with AI.',
    url: `${BASE_URL}/about`,
    mainEntity: { '@id': `${BASE_URL}/#person` },
    dateModified: '2026-08-25',
    inLanguage: 'en',
    image: `${BASE_URL}/profile/profile.png`,
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Work', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'My Story', item: `${BASE_URL}/about` },
    ],
  }

  replaceLdJson([personSchema(), aboutPage, websiteSchema(), breadcrumb])
}

export function injectSectionStructuredData(page: {
  path: string
  name: string
  description: string
  crumb: string
}) {
  const url = `${BASE_URL}${page.path}`
  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#page`,
    name: page.name,
    description: page.description,
    url,
    mainEntity: { '@id': `${BASE_URL}/#person` },
    dateModified: '2026-08-25',
    inLanguage: 'en',
    image: `${BASE_URL}/profile/profile.png`,
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Work', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: page.crumb, item: url },
    ],
  }

  replaceLdJson([personSchema(), webPage, websiteSchema(), breadcrumb])
}

