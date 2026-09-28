import { test } from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
async function render(name, props) {
  const result = await build({
    stdin: { contents: `import { createElement } from 'react'; import { renderToStaticMarkup } from 'react-dom/server'; import { ${name} } from './src/components/${name}/${name}'; export default (props) => renderToStaticMarkup(createElement(${name}, props));`, resolveDir: process.cwd(), loader: 'tsx' },
    bundle: true, write: false, platform: 'node', format: 'cjs', packages: 'external', loader: { '.css': 'empty' }, jsx: 'automatic',
  });
  const module = { exports: {} };
  new Function('require', 'module', 'exports', result.outputFiles[0].text)(require, module, module.exports);
  return module.exports.default(props);
}

test('TextField connects its label and error, preserving external descriptions', async () => {
  const html = await render('TextField', { id: 'email', label: '이메일', error: '형식을 확인하세요', hint: '숨겨질 안내', 'aria-describedby': 'external' });
  assert.match(html, /for="email"/);
  assert.match(html, /id="email"/);
  assert.match(html, /aria-invalid="true"/);
  assert.match(html, /aria-describedby="external email-message"/);
  assert.match(html, /id="email-message"[^>]*>형식을 확인하세요/);
  assert.doesNotMatch(html, /숨겨질 안내/);
});

test('TextField gives separate instances unique label targets without explicit ids', async () => {
  const result = await build({ stdin: { contents: `import { renderToStaticMarkup } from 'react-dom/server'; import { TextField } from './src/components/TextField/TextField'; export default renderToStaticMarkup(<><TextField label="이름"/><TextField label="이메일"/></>);`, resolveDir: process.cwd(), loader: 'tsx' }, bundle: true, write: false, platform: 'node', format: 'cjs', packages: 'external', loader: { '.css': 'empty' }, jsx: 'automatic' });
  const module = { exports: {} };
  new Function('require', 'module', 'exports', result.outputFiles[0].text)(require, module, module.exports);
  const ids = [...module.exports.default.matchAll(/<input[^>]*id="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length, 2);
  assert.notEqual(ids[0], ids[1]);
});

test('Icon exposes a named graphic only when given a label', async () => {
  assert.match(await render('Icon', { name: 'Search', label: '검색' }), /role="img"/);
  assert.match(await render('Icon', { name: 'Search', label: '검색' }), /aria-label="검색"/);
  assert.match(await render('Icon', { name: 'Search' }), /aria-hidden="true"/);
});
