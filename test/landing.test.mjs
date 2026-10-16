import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const pagePath = new URL('../index.html', import.meta.url);

test('landing page exposes the verified B1 offer and attribution link', () => {
  assert.ok(existsSync(pagePath), 'index.html should exist');
  const page = readFileSync(pagePath, 'utf8');

  assert.match(page, /45 AI Prompts for Etsy Sellers/);
  assert.match(page, /B1FEEDBACK5/);
  assert.match(page, /utm_source=github/);
  assert.match(page, /not affiliated with Etsy/i);
});
