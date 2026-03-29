/**
 * Renames Component_*.vue files to semantic paths and rewrites relative imports.
 * Run from project root: node scripts/migrate-component-names.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcRoot = path.join(__dirname, '../src')

/** old filename -> new path under src/ (posix) */
const renameMap = {
  'Component_1.vue': 'components/layout/GlobalNavBrand.vue',
  'Component_1_1.vue': 'components/layout/NavProductSwitcher.vue',
  'Component_2.vue': 'components/layout/HeaderToolbar.vue',
  'Component_2_1.vue': 'components/layout/header-mega-menu/GlobalNavMegaMenu.vue',
  'Component_2_2.vue': 'components/layout/header-search/HeaderSearchBar.vue',
  'Component_2_3.vue': 'components/layout/header-feedback/HeaderFeedbackRegion.vue',
  'Component_3.vue': 'components/command-palette/CommandPaletteSearch.vue',
  'Component_4.vue': 'components/command-palette/CommandPaletteFilters.vue',
  'Component_5.vue': 'components/command-palette/CommandPaletteShortcuts.vue',
  'Component_7.vue': 'components/footer/FooterNavPlatform.vue',
  'Component_7_1.vue': 'components/footer/FooterNavPlatformLinks.vue',
  'Component_8.vue': 'components/footer/FooterNavEcosystem.vue',
  'Component_8_1.vue': 'components/footer/FooterNavEcosystemLinks.vue',
  'Component_9.vue': 'components/footer/FooterNavSupport.vue',
  'Component_9_1.vue': 'components/footer/FooterNavSupportLinks.vue',
  'Component_10.vue': 'components/footer/FooterNavCompany.vue',
  'Component_10_1.vue': 'components/footer/FooterNavCompanyLinks.vue',
  'Component_11.vue': 'components/footer/FooterLegalLinks.vue',
  'Component_12.vue': 'components/footer/FooterSocialLinks.vue',
  'Component_2_2_1.vue': 'components/layout/header-search/HeaderSearchPopover.vue',
  'Component_2_2_1_1.vue': 'components/layout/header-search/HeaderSearchPopoverBody.vue',
  'Component_2_2_1_1_1.vue': 'components/layout/header-search/HeaderSearchSuggestions.vue',
  'Component_2_2_1_1_1_1.vue': 'components/layout/header-search/HeaderSearchSuggestionItem.vue',
  'Component_2_3_1.vue': 'components/layout/header-feedback/FeedbackDialog.vue',
  'Component_2_3_2.vue': 'components/layout/header-feedback/FeedbackMenuItems.vue',
  'Component_2_3_1_1.vue': 'components/layout/header-feedback/FeedbackDialogHeader.vue',
  'Component_2_3_1_2.vue': 'components/layout/header-feedback/FeedbackDialogBody.vue',
  'Component_2_3_2_1.vue': 'components/layout/header-feedback/FeedbackLinkGithub.vue',
  'Component_2_3_2_2.vue': 'components/layout/header-feedback/FeedbackDropdownPanel.vue',
  'Component_2_3_2_2_1.vue': 'components/layout/header-feedback/FeedbackDropdownLinks.vue',
  'Component_12_1.vue': 'components/footer/FooterSocialIconList.vue',
  'Component_12_2.vue': 'components/footer/FooterLocaleSelector.vue',
  'Component_12_2_1.vue': 'components/footer/FooterLocaleButton.vue',
  'Component_12_2_1_1.vue': 'components/footer/FooterLocaleMenu.vue',
}

for (let i = 1; i <= 15; i++) {
  renameMap[`Component_2_1_${i}.vue`] =
    `components/layout/header-mega-menu/MegaMenuColumn${String(i).padStart(2, '0')}.vue`
}

/** old import stem -> absolute path under src */
function absolutePathForStem(stem) {
  const fileName = `${stem}.vue`
  const rel = renameMap[fileName]
  if (!rel) return null
  return path.join(srcRoot, rel)
}

function rewriteImportsInFile(filePath) {
  let text = fs.readFileSync(filePath, 'utf8')
  const dir = path.dirname(filePath)
  const out = text.replace(
    /from\s+['"](\.\/[^'"]+|(?:\.\.\/)+[^'"]+)['"]/g,
    (full, spec) => {
      if (!spec.endsWith('.vue')) return full
      const resolved = path.normalize(path.join(dir, spec))
      const base = path.basename(resolved, '.vue')
      const targetAbs = absolutePathForStem(base)
      if (!targetAbs || !fs.existsSync(targetAbs)) return full
      let rel = path.relative(dir, targetAbs).replace(/\\/g, '/')
      if (!rel.startsWith('.')) rel = './' + rel
      return `from '${rel}'`
    }
  )
  if (out !== text) fs.writeFileSync(filePath, out)
}

function moveAll() {
  for (const [oldName, relDest] of Object.entries(renameMap)) {
    const from = path.join(srcRoot, 'components', oldName)
    const to = path.join(srcRoot, relDest)
    if (!fs.existsSync(from)) {
      console.warn('skip (missing):', oldName)
      continue
    }
    fs.mkdirSync(path.dirname(to), { recursive: true })
    fs.renameSync(from, to)
  }
}

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name)
    if (fs.statSync(p).isDirectory()) walk(p, acc)
    else if (/\.(vue|ts)$/.test(name)) acc.push(p)
  }
  return acc
}

function rewriteAllImports() {
  for (const file of walk(srcRoot)) {
    rewriteImportsInFile(file)
  }
}

moveAll()
rewriteAllImports()
console.log('Migration complete. Run: npm run build')
