# AUDIT — Speak to Kit Marketing Site

**Date:** 2026-04-29
**Branch:** `prd/marketing-iteration-2026-04-29`
**Scope:** PRD `marketing iteration 2026-04-29` (all tasks T0–T10).

---

## 1. Stack & build

- Static HTML in `/public/`, served by `serve` on port 3000 (`npm run dev`).
- React 18.3 + Babel-standalone loaded from `unpkg.com` CDN — **no build step**, no bundler, no transpile pipeline.
- Sub-pages (`pricing.html`, `how-kit-works.html`, etc.) are plain HTML using `public/assets/kit-shell.css` for shared styles.
- Deploy = `gh-pages -d public -b gh-pages --dotfiles` → GitHub Pages.

**Implications for the PRD:**
- T5 cannot use `next/font` or `@fontsource` (those need a build step). Fonts stay as a `<link>` tag in HTML head.
- T6's `NEXT_PUBLIC_LEAD_WEBHOOK_URL` env var has no injection mechanism. We use a runtime `window.STK_CONFIG.LEAD_WEBHOOK_URL` (placeholder edited pre-deploy). `.env.example` documents the var name only.
- "Tailwind theme variables" (PRD T0/T5 wording) → in this repo, that's `:root` CSS variables in `kit-shell.css` (and inline Tailwind config under `design/style-guide/` is reference-only, not compiled).

---

## 2. File map

```
/public/
  ├── index.html                           ← original homepage (untouched this PRD)
  ├── index-new-copy.html                  ← TARGET: new-copy homepage (staging)
  ├── for-jobseekers.html                  ← original jobseekers (untouched)
  ├── for-jobseekers-new-copy.html         ← TARGET: new-copy jobseekers
  ├── pricing.html                         ← TARGET (T7)
  ├── how-kit-works.html                   ← TARGET (login removal + T9 sweep)
  ├── for-talent-teams.html                ← TARGET (login + extra demo CTAs + T9)
  ├── faq.html / contact.html / resources.html / privacy-policy.html ← header CTA swap + T9
  ├── content.js                           ← TARGET: edit STK_CONTENT_NEW + STK_JOBSEEKER_NEW
  ├── config.js                            ← NEW (T6): window.STK_CONFIG
  ├── assets/kit-shell.css                 ← TARGET: theme tokens (T5 font fix, T9 sweep)
  └── .nojekyll
/design/                                   ← reference only, never deployed
  ├── style-guide/tailwind.config.js       ← reference (NOT compiled)
  ├── style-guide/sg-*.jsx
  └── screenshots/                         ← legacy design refs
/screenshots/                              ← NEW
  ├── baseline/
  └── after/
/scripts/screenshots.mjs                   ← NEW (T0)
.env.example                               ← NEW (T6, doc-only)
AUDIT.md                                   ← THIS FILE
package.json                               ← devDeps += playwright; scripts += screenshots
```

---

## 3. Section locations (homepage = `index-new-copy.html`)

| Section | File / lines | Notes |
|---|---|---|
| Header (Wordmark + nav + CTAs) | `index-new-copy.html:882-893` | Has hidden `Log in` (opacity 0) and visible `Get started` button — both flagged for T6. |
| Hero | `index-new-copy.html:895-909` | h1 at line 899, sub-paragraph 900-902, `HeroJourneyCapsule` (input box) at 903, footnote 904, secondary links 905-907. |
| Hero capsule (the input box) | `VoiceCapsule` defined ~line 280-490 | Submit button "Continue →" at line 485 is the **competing CTA** the PRD calls out. Submit handler `submit()` at line ~285 calls `onLoginOpen()`. |
| Stats strip | `index-new-copy.html:911-921` | Renders `C.stats[]` from `content.js`. |
| Problem section | `index-new-copy.html:923-940` | Three columns. |
| The Spine ("How it works") | `index-new-copy.html:942-1075` | `SpineNode` components, intro h2 at line 949 with italic Fraunces emphasis. |
| Conversation / Chat visual | `transcript[]` array + Conversation component (line ~656). Also `STK_CONTENT_NEW.conversation.chat.bubbles[]` in `content.js:57-65` | Two distinct chat visuals — both targeted by T3. |
| Testimonials | `index-new-copy.html:1080+`, data in `STK_CONTENT_NEW.testimonials` (`content.js`) | 7 items available. |
| Footer | end of `index-new-copy.html` | |

Sub-page header structure (in every static `.html`): `pricing.html:32-33` is canonical — `<a href="https://app.contxt.network/" class="login">Log in</a>` and `<a href="https://app.contxt.network/employer" class="stk-btn stk-btn-primary">Get started</a>`. Same on every sub-page.

---

## 4. Theme tokens (single source of truth)

`public/assets/kit-shell.css :root` (lines 8-31):

- Accent: `--clay-500: #b5533d` (canonical). Hover `--clay-600: #9b4230`.
- Backgrounds: `--cream-200: #f3ece1` (page), `--cream-300: #efe6d7` (header), `--cream-50: #fbf7f0`.
- Text: `--ink-700: #1f1c18` (body), `--ink-400: #6b665b` (muted).
- Fonts:
  - `--font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif`
  - `--font-display: 'Fraunces', Georgia, ui-serif, serif`
  - `--font-mono: 'JetBrains Mono', ui-monospace, monospace`
- Layout: `--max-shell: 1200px`, `--max-prose: 720px`.

`index-new-copy.html` does NOT include `kit-shell.css` (homepage uses inline styles via React). So changes to `kit-shell.css` propagate to all sub-pages but NOT to the homepage. Homepage edits go inline in JSX.

`TWEAK_DEFAULTS` at `index-new-copy.html:44-49`: runtime config for accent (`primaryColor: "#B5533D"`), wordmark variant, dark/light mode. Don't touch the hex format here — this is the editable runtime config.

---

## 5. Hero background image

**Finding:** there is no hero background image asset. The hero uses a CSS radial gradient (`index-new-copy.html:896`):

```js
background: `radial-gradient(ellipse 1100px 620px at 50% 38%, ${dark ? `${primary}26` : `${primary}1f`}, transparent 62%)`
```

…over the page background `--cream-200`.

**PRD §T1 says "Don't touch the hero background image" — but there isn't one to touch.** When Ryan supplies the new image, the swap is one CSS edit at line 896 (replace `radial-gradient(...)` with `url('/hero.webp') center/cover, ...`). I won't pre-add a `--hero-bg` CSS var (would be dead code now); will document the swap location in the PR description.

---

## 6. Font issue diagnosis (T5 — Fraunces "leaning / weird f")

The headline at line 899 uses:

```js
fontFamily: "'Fraunces', serif",
fontWeight: 400,
fontSize: 'clamp(52px, 6.6vw, 88px)',
letterSpacing: '-0.028em',
lineHeight: 1.0
```

Top suspects, ranked:

1. **Weight 400 at 88px display size.** Fraunces 400 has a thin stem-to-curve ratio that reads as "leaning" at large sizes. PRD T1 already wants weight bumped to 500–600. Likely the primary fix — overlaps with T1.
2. **Letter-spacing too tight.** `-0.028em` at 88px = ~2.5px negative tracking, which compresses ascenders/descenders and exaggerates italic-like slants. Recommend loosening to `-0.018em` to `-0.02em`.
3. **`font-optical-sizing` not pinned.** Fraunces variable axis runs 9..144. Default is `auto` (browser-derived), but explicit `font-optical-sizing: auto` declaration is safer and documented behaviour.
4. **Italic axis is loaded** (Google Fonts URL ends `9..144,1,400`) but the headline does NOT request `fontStyle: 'italic'`, so this is not the cause for h1. (Italic IS used intentionally elsewhere — testimonial quote line 835, "How" emphasis line 950, etc.)

**Plan**: combine T1 weight bump + tracking loosen + add `font-optical-sizing: auto` to `--font-display` consumers. Documented findings in PR.

---

## 7. Pricing audit (T7)

`pricing.html:50-122`. Current 4 tiers: **Free / Starter (£99/mo) / Pro (£299/mo) / Scale (Custom)**. "Popular" badge on Starter.

| Current → New | Action |
|---|---|
| Free | Keep. Same bullets. |
| Starter (£99) | Rename to **Startup**. Keep £99 + same bullets. |
| Pro (£299) | **Delete**. Move bullets to new Growth. |
| (none) | **New Growth tier** (Custom / "Talk to us"). Inherits Pro's bullets. **Move "Popular" badge here.** |
| Scale (Custom) | Rename to **Enterprise**. Keep bullets, keep Custom. |

Pro's bullets to move to Growth: `Everything in Startup`, `~200 network matches`, `~100 screening calls/mo`, `~150 outreach messages/mo`, `Free and premium board posting`, `Market monitoring`, `Custom screening frameworks`.

---

## 8. Existing testimonials (T8)

`content.js:67-80` (`STK_CONTENT_NEW.testimonials`):

- Hero: Mathew C. — "It may have altered in a positive sense my willingness for engaging with AI." (tag: "AI convert")
- Items (7 total):
  - Mark B. — "Your questions were very focussed, laser direct." (Insightful)
  - Richard — "You soon forget you're actually having a conversation with AI." (Feels human)
  - David — "Surprisingly authentic." (Feels human)
  - Nishi B. — "It actually feels like a conversation, so it's actually really nice." (Feels human)
  - James F. — "A really fantastic way to do an interview." (Impressive)
  - Naveen — "I would prefer this approach rather than talking to a human. I'm a convert." (AI convert)
  - Rod — "Very, very impressive experience." (Impressive)

Enough for a 3×2 grid (use 6 of 7). No invention needed.

---

## 9. Service-model copy sweep (T2)

Light scan against patterns `we'll`, `our team`, `our recruiters`, `managed service`, `done for you`, `we handle`, `we'll be in touch`:

- `pricing.html:170` — "Kit handles the heavy lifting…" — subject is **Kit**, not "we". Already product-framed. Will leave; flag in PR.
- No other obvious offenders found in initial search. Full sweep happens during T2 execution.

---

## 10. Login / app links (T6)

Pattern: every static sub-page header has these two:

```html
<a href="https://app.contxt.network/" class="login">Log in</a>
<a href="https://app.contxt.network/employer" class="stk-btn stk-btn-primary">Get started</a>
```

Pages affected: `pricing.html`, `how-kit-works.html`, `for-talent-teams.html`, `faq.html`, `contact.html`, `resources.html`, `privacy-policy.html`. Each at lines 32-33.

`for-talent-teams.html` has 3 additional in-body CTAs at lines 43, 106, 153 (`Book my 5-minute demo`, `Test on my hardest vacancy`, `Book a free demo`) — all replaced with `Get early access` link to homepage hero anchor.

`index-new-copy.html` has its own header CTAs at lines 890-891 (hidden `Log in` + visible `Get started` button) — handled inline.

`LoginModal` component lives at `index-new-copy.html:67-105`. Will be commented out (per PRD: don't delete, in case Ryan wants it back).

---

## 11. Tech debt / pre-existing issues (NOT FIXED — flagged for later)

These were noted during audit. Per PRD §T0, do not fix as part of this iteration:

1. **Two homepage versions** (`index.html` and `index-new-copy.html`) and two jobseeker versions exist side-by-side. After this PRD lands, the original `index.html` will be visibly outdated. Worth a follow-up to either canonicalize new-copy or formalise the A/B split.
2. **Hidden `Log in` link in homepage header** (line 890): `<a style={{ opacity: 0 }}>Log in</a>` — invisible but in the DOM. Will be removed by T6 (since login is going away).
3. **`content.js?v=6` cache-buster** is hard-coded in HTML. After content edits, bump to `?v=7` (will be done in T2 commit).
4. **Inline JSX is enormous** (`index-new-copy.html` is ~1000+ lines of single-file JSX). Out of scope, but worth noting that this makes diffs in CI hard to review.
5. **No automated tests / lint / typecheck**. PRD T10 says "fix things you broke" — there's no harness to detect breakage other than visual inspection + `npm run dev` console check.
6. **Google Fonts URL loads 7 font families** (Inter, Fraunces, JetBrains Mono, Instrument Serif, DM Serif Display, Source Serif 4, DM Sans). Most aren't referenced anywhere. Worth pruning to just Inter + Fraunces + JetBrains Mono. Not done in this PRD.
7. **Mixed accent hex casing** (`#B5533D` in `TWEAK_DEFAULTS` and inline JSX, `#b5533d` in CSS). T9 will normalise where feasible.

---

## 12. Verification checklist for this PRD

- [ ] `npm run dev` → site loads on `localhost:3000`, no console errors on `/index-new-copy.html`, `/pricing.html`, `/how-kit-works.html`, `/for-jobseekers-new-copy.html`, `/for-talent-teams.html`, `/faq.html`, `/contact.html`, `/resources.html`, `/privacy-policy.html`.
- [ ] Hero capture form submits a query OR an email correctly (network tab verification).
- [ ] Error/success states render cleanly without stack traces.
- [ ] Pricing page: 4 equal-height cards, "Popular" badge on Growth, no £299 anywhere.
- [ ] No `app.contxt.network` link survives anywhere.
- [ ] Fraunces headlines render with sturdier strokes / no leaning.
- [ ] Baseline + after screenshots committed at `screenshots/baseline/` and `screenshots/after/`.
