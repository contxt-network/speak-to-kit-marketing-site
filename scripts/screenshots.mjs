import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const BASE = process.env.BASE_URL || 'http://localhost:3000';
const MODE = process.argv[2] || 'baseline';
const OUT = resolve(`screenshots/${MODE}`);

const PAGES = [
  { name: 'home',         path: '/index-new-copy.html' },
  { name: 'pricing',      path: '/pricing.html' },
  { name: 'jobseekers',   path: '/for-jobseekers-new-copy.html' },
  { name: 'how-it-works', path: '/how-kit-works.html' },
  { name: 'talent-teams', path: '/for-talent-teams.html' },
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile',  width: 390,  height: 844 },
];

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();
try {
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
    });
    const page = await ctx.newPage();
    for (const p of PAGES) {
      const url = `${BASE}${p.path}`;
      process.stdout.write(`  ${vp.name.padEnd(7)}  ${p.name.padEnd(13)}  ${url}\n`);
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      } catch (err) {
        process.stdout.write(`    timeout — falling back to load event\n`);
        await page.goto(url, { waitUntil: 'load', timeout: 30000 });
      }
      await page.waitForTimeout(1200); // give Babel/React + Fraunces time to settle
      await page.screenshot({
        path: resolve(OUT, `${p.name}-${vp.name}.png`),
        fullPage: true,
      });
    }
    await ctx.close();
  }
  console.log(`\n✓ Screenshots saved to ${OUT}`);
} finally {
  await browser.close();
}
