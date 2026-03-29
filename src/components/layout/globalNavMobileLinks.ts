/** Mobile drawer: sections expand in-place; leaf items navigate and close the drawer. */

export type MobileNavChild = { label: string; href: string }

export type MobileNavSection = {
  id: string
  label: string
  children: MobileNavChild[]
}

export type MobileNavLeaf = {
  id: string
  label: string
  href: string
}

export type MobileNavItem = MobileNavSection | MobileNavLeaf

export function isMobileNavSection(item: MobileNavItem): item is MobileNavSection {
  return 'children' in item && Array.isArray(item.children)
}

export const globalNavMobileLinks: MobileNavItem[] = [
  {
    id: 'platform',
    label: 'Platform',
    children: [
      { label: 'MCP Registry', href: '#/mcp' },
      { label: 'GitHub Actions', href: '#/features/actions' },
      { label: 'GitHub Codespaces', href: '#/features/codespaces' },
      { label: 'GitHub Issues', href: '#/features/issues' },
      { label: 'Code review', href: '#/features/code-review' },
      { label: 'GitHub Advanced Security', href: '#/security/advanced-security' },
      { label: 'Why GitHub', href: '#/why-github' },
      { label: 'GitHub Marketplace', href: '#/marketplace' },
      { label: 'View all features', href: '#/features' },
    ],
  },
  {
    id: 'solutions',
    label: 'Solutions',
    children: [
      { label: 'Enterprises', href: '#/enterprise' },
      { label: 'Small and medium teams', href: '#/team' },
      { label: 'Startups', href: '#/enterprise/startups' },
      { label: 'Nonprofits', href: '#/solutions/industry/nonprofits' },
      { label: 'App Modernization', href: '#/solutions/use-case/app-modernization' },
      { label: 'DevSecOps', href: '#/solutions/use-case/devsecops' },
      { label: 'DevOps', href: '#/solutions/use-case/devops' },
      { label: 'CI/CD', href: '#/solutions/use-case/ci-cd' },
      { label: 'Healthcare', href: '#/solutions/industry/healthcare' },
      { label: 'View all solutions', href: '#/solutions' },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    children: [
      { label: 'AI', href: '#/resources/articles?topic=ai' },
      { label: 'Software Development', href: '#/resources/articles?topic=software-development' },
      { label: 'DevOps', href: '#/resources/articles?topic=devops' },
      { label: 'Security', href: '#/resources/articles?topic=security' },
      { label: 'View all topics', href: '#/resources/articles' },
      { label: 'Customer stories', href: '#/customer-stories' },
      { label: 'Events & webinars', href: '#/resources/events' },
      { label: 'Documentation', href: 'https://docs.github.com' },
      { label: 'Customer support', href: 'https://support.github.com' },
      { label: 'View all resources', href: '#/resources' },
    ],
  },
  {
    id: 'open-source',
    label: 'Open Source',
    children: [
      { label: 'GitHub Sponsors', href: '#/sponsors' },
      { label: 'Topics', href: '#/topics' },
      { label: 'Trending', href: '#/trending' },
      { label: 'Collections', href: '#/collections' },
      { label: 'Security Lab', href: 'https://securitylab.github.com' },
      { label: 'Maintainer Community', href: 'https://maintainers.github.com' },
      { label: 'Accelerator', href: '#/accelerator' },
    ],
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    children: [
      { label: 'Enterprise platform', href: '#/enterprise' },
      { label: 'GitHub Advanced Security', href: '#/security/advanced-security' },
      { label: 'Copilot for Business', href: '#/features/copilot/copilot-business' },
      { label: 'Premium Support', href: '#/premium-support' },
    ],
  },
  { id: 'pricing', label: 'Pricing', href: '#/pricing' },
]
