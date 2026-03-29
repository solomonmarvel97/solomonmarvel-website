/**
 * One-time migration: React JSX components -> Vue 3 SFCs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import parser from '@babel/parser';
import _traverse from '@babel/traverse';

const traverse = _traverse.default;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function transformJsxTemplate(jsx) {
  let s = jsx;
  s = s.replace(/\bclassName=/g, 'class=');
  s = s.replace(/\btabIndex=/g, 'tabindex=');
  s = s.replace(/\bhtmlFor=/g, 'for=');
  s = s.replace(/\bxlinkHref=/g, 'xlink:href=');
  s = s.replace(/\bstrokeWidth=/g, 'stroke-width=');
  s = s.replace(/\bstrokeLinecap=/g, 'stroke-linecap=');
  s = s.replace(/\bstrokeLinejoin=/g, 'stroke-linejoin=');
  s = s.replace(/\bclipPath=/g, 'clip-path=');
  s = s.replace(/\bfillRule=/g, 'fill-rule=');
  s = s.replace(/\bstrokeDasharray=/g, 'stroke-dasharray=');
  s = s.replace(/\bstrokeDashoffset=/g, 'stroke-dashoffset=');
  s = s.replace(/\bfontFamily=/g, 'font-family=');
  // Longer / more specific patterns first (inner {'>'} is a substring of {"{'>'}"})
  s = s.replace(/\{\s*"\{'>'\}"\s*\}/g, '>');
  s = s.replace(/\{\s*"\{'Type > to filter'\}"\s*\}/g, 'Type &gt; to filter');
  s = s.replace(/\{\s*'>'\s*\}/g, '>');
  const t = s.trim();
  if (t.startsWith('<>') && t.endsWith('</>')) {
    s = t.slice(2, -3).trim();
  }
  return s;
}

function findJsxReturn(ast, code) {
  let jsxNode = null;
  traverse(ast, {
    FunctionDeclaration(path) {
      path.traverse({
        ReturnStatement(rpath) {
          const arg = rpath.node.argument;
          if (arg?.type === 'JSXElement' || arg?.type === 'JSXFragment') {
            jsxNode = arg;
            rpath.stop();
          }
        },
      });
      if (jsxNode) path.stop();
    },
  });
  if (!jsxNode) {
    throw new Error('No JSX return found');
  }
  return code.slice(jsxNode.start, jsxNode.end);
}

function findUseEffectBody(ast, code) {
  let body = null;
  traverse(ast, {
    CallExpression(path) {
      if (
        path.node.callee.type === 'Identifier' &&
        path.node.callee.name === 'useEffect' &&
        path.node.arguments[0]?.type === 'ArrowFunctionExpression'
      ) {
        const fn = path.node.arguments[0];
        if (fn.body.type === 'BlockStatement') {
          body = code.slice(fn.body.start + 1, fn.body.end - 1).trim();
        }
        path.stop();
      }
    },
  });
  return body;
}

function convertImports(importLines, { isApp }) {
  const out = [];
  for (const line of importLines) {
    if (line.includes('from') && line.includes('react')) {
      continue;
    }
    const m = line.match(/import\s+(.+?)\s+from\s+['"]([^'"]+)['"]/);
    if (!m) {
      out.push(line);
      continue;
    }
    const names = m[1];
    let spec = m[2];
    if (spec.startsWith('.') && !spec.endsWith('.vue') && !spec.endsWith('.css')) {
      spec = `${spec}.vue`;
    }
    out.push(`import ${names} from '${spec}'`);
  }
  return out;
}

function parseImports(code) {
  const ast = parser.parse(code, { sourceType: 'module', plugins: ['jsx'] });
  const imports = [];
  traverse(ast, {
    ImportDeclaration(path) {
      imports.push(code.slice(path.node.start, path.node.end));
    },
  });
  return imports;
}

function buildVueFile({ imports, template, scriptBody }) {
  const importBlock = convertImports(imports, { isApp: !!scriptBody }).join('\n');
  let script = '';
  if (scriptBody) {
    script = `<script setup lang="ts">
import { onMounted } from 'vue'
${importBlock}

function runDelayedScripts() {
${scriptBody.split('\n').map((l) => '  ' + l).join('\n')}
}

onMounted(() => {
  runDelayedScripts()
})
</script>

`;
  } else if (importBlock.trim()) {
    script = `<script setup lang="ts">
${importBlock}
</script>

`;
  }
  return `${script}<template>
${template
  .split('\n')
  .map((l) => '  ' + l)
  .join('\n')}
</template>
`;
}

function processComponentFile(absPath, outPath) {
  const code = fs.readFileSync(absPath, 'utf8');
  const ast = parser.parse(code, { sourceType: 'module', plugins: ['jsx'] });
  const jsxRaw = findJsxReturn(ast, code);
  const template = transformJsxTemplate(jsxRaw);
  const imports = parseImports(code);
  const vue = buildVueFile({ imports, template, scriptBody: null });
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, vue, 'utf8');
}

function processApp() {
  const absPath = path.join(root, 'Component.jsx');
  const code = fs.readFileSync(absPath, 'utf8');
  const ast = parser.parse(code, { sourceType: 'module', plugins: ['jsx'] });
  const jsxRaw = findJsxReturn(ast, code);
  const template = transformJsxTemplate(jsxRaw);
  const effectBody = findUseEffectBody(ast, code);
  const imports = parseImports(code);
  const vue = buildVueFile({
    imports,
    template,
    scriptBody: effectBody,
  });
  const outPath = path.join(root, 'src', 'App.vue');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, vue, 'utf8');
}

function main() {
  const componentsDir = path.join(root, 'components');
  const files = fs.readdirSync(componentsDir).filter((f) => f.endsWith('.jsx'));
  for (const f of files) {
    const base = f.replace(/\.jsx$/, '');
    processComponentFile(
      path.join(componentsDir, f),
      path.join(root, 'src', 'components', `${base}.vue`)
    );
  }
  processApp();
  console.log(`Converted ${files.length + 1} files to src/`);
}

main();
