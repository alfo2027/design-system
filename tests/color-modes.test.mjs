import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const css = readFileSync(new URL('../src/styles/tokens.css', import.meta.url), 'utf8');
const values = Object.fromEntries([...css.matchAll(/(--[\w-]+):\s*([^;]+);/g)].map(m => [m[1], m[2]]));
function resolve(key, seen = new Set()) {
  assert.ok(values[key], `Missing token ${key}`);
  assert.ok(!seen.has(key), `Circular token ${key}`);
  seen.add(key);
  const ref = values[key].match(/^var\((.+)\)$/);
  return ref ? resolve(ref[1], seen) : values[key];
}
function luminance(hex) {
  const rgb = hex.slice(1).match(/../g).map(v => parseInt(v, 16) / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4);
  return rgb[0] * .2126 + rgb[1] * .7152 + rgb[2] * .0722;
}
test('Both modes retain complete, resolvable semantic color pairs', () => {
  const dark = Object.keys(values).filter(k => k.startsWith('--color-dark-'));
  assert.equal(dark.length, 28);
  for (const key of dark) for (const mode of ['light', 'dark']) assert.match(resolve(key.replace('dark', mode)), /^#[\da-f]{6}$/i);
});
test('Text, action states, and semantic badges keep at least 4.5:1 contrast', () => {
  const pairs = [['text','surface'], ['text-muted','surface-raised'], ['on-primary','primary'], ['on-primary','primary-hover'], ['on-primary','primary-pressed'], ['primary','primary-soft'], ['on-danger','danger'], ...['success','warning','danger','accent-violet','accent-teal','accent-rose'].map(n => [n, n+'-soft'])];
  for (const mode of ['light','dark']) for (const [fg,bg] of pairs) {
    const l = [fg,bg].map(n => luminance(resolve(`--color-${mode}-${n}`))).sort((a,b) => b-a);
    assert.ok((l[0]+.05)/(l[1]+.05) >= 4.5, `${mode}: ${fg} on ${bg}`);
  }
});
