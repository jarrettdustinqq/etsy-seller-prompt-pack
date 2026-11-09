import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const pagePath = new URL('../index.html', import.meta.url);

test('landing page gives a conditional B1 checkout instruction and attribution link', () => {
  assert.ok(existsSync(pagePath), 'index.html should exist');
  const page = readFileSync(pagePath, 'utf8');

  assert.match(page, /45 AI Prompts for Etsy Sellers/);
  assert.match(page, /B1FEEDBACK5/);
  assert.match(page, /If B1FEEDBACK5 is accepted at checkout/i);
  assert.doesNotMatch(page, /one of its five uses remains/i);
  assert.match(page, /utm_source=github/);
  assert.match(page, /not affiliated with Etsy/i);
});
