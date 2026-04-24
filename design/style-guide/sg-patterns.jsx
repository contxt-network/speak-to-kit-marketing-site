/* Kit Style Guide — Patterns, Handoff, and Logomark section */

/* =========================================================
   GRID / LAYOUT PRIMITIVES
   ========================================================= */

const GridPatterns = () => (
  <Section id="grid" kicker="Patterns · 01"
    title="Grid & layout primitives"
    lede="12-column soft grid on marketing. Flex and CSS grid on app — no strict column count. The narrative spine is a single centred rule with left/right alternating content.">

    <SubSection id="grid-shell" title="Marketing shell">
      <div style={{ background:T.cream[200], border:`1px solid ${T.semantic.rule}`, borderRadius:10, padding:20 }}>
        <div style={{ maxWidth:800, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(12, 1fr)', gap:8, height:180 }}>
          {Array.from({length:12}).map((_,i) => (
            <div key={i} style={{ background:'#fff', border:`1px dashed ${T.semantic.rule}`, borderRadius:4, display:'grid', placeItems:'center', fontSize:10, color:T.ink[400] }}>{i+1}</div>
          ))}
        </div>
        <div style={{ textAlign:'center', fontSize:12, color:T.ink[500], marginTop:14 }}>max-w-shell · 12 columns · 24px gutter (desktop), 16px (tablet), 1 col (mobile)</div>
      </div>
    </SubSection>

    <SubSection id="grid-spine" title="Narrative spine (marketing only)" note="The 01→09 journey. Left: process. Right: deliverable. One centred vertical hairline fades top and bottom.">
      <div style={{ background:T.ink[700], borderRadius:12, padding:'40px 24px', color:T.cream[200], position:'relative' }}>
        <div style={{ position:'absolute', left:'50%', top:24, bottom:24, width:1, background:`linear-gradient(to bottom, transparent 0%, ${T.clay[500]} 10%, ${T.clay[500]} 90%, transparent 100%)` }} />
        {[
          { side:'left', n:'01', title:'You describe the hire' },
          { side:'right', n:'02', title:'Kit writes the brief' },
          { side:'left', n:'03', title:'Candidates get a call' },
        ].map((r,i) => (
          <div key={i} style={{ display:'grid', gridTemplateColumns:'1fr 1fr', paddingBottom:28, position:'relative' }}>
            <div style={{ gridColumn:1, paddingRight:48, textAlign:'right', display: r.side==='left' ? 'block':'none', fontSize:14 }}>
              <div style={{ fontSize:11, color:T.clay[500], letterSpacing:'0.2em', marginBottom:4 }}>{r.n}</div>
              <div>{r.title}</div>
            </div>
            <div style={{ position:'absolute', left:'50%', top:0, transform:'translateX(-50%)', width:32, height:32, borderRadius:999, background:T.ink[700], border:`1px solid ${T.clay[500]}`, display:'grid', placeItems:'center', fontFamily:"'Fraunces',serif", fontSize:12, color:T.clay[500] }}>{r.n}</div>
            <div style={{ gridColumn:2, paddingLeft:48, textAlign:'left', display: r.side==='right' ? 'block':'none', fontSize:14 }}>
              <div style={{ fontSize:11, color:T.clay[500], letterSpacing:'0.2em', marginBottom:4 }}>{r.n}</div>
              <div>{r.title}</div>
            </div>
          </div>
        ))}
      </div>
      <Callout tone="warn" title="App variant">The spine is marketing-only. In the app, replace with a stepped progress indicator (see Progress & meters) or a simple vertical list.</Callout>
    </SubSection>
  </Section>
);

/* =========================================================
   BRAND — LOGO PACK (full asset library)
   ========================================================= */

// Tiny SVG renderers used inline so cells always preview the actual asset.
// These mirror the files in style-guide/logo-pack/ — download links point
// at the files, previews render from JSX for crisp in-page display.

const KIT_PATH_D = 'M0 0 C0.70302246 0.00161133 1.40604492 0.00322266 2.13037109 0.00488281 C14.29125048 0.28957634 22.54131281 6.4186563 30.6875 14.88085938 C32.21980719 16.49211145 33.74594919 18.1092509 35.265625 19.73242188 C41.09386122 25.7552653 46.98916399 30.30825617 55.3515625 32.00390625 C66.03649231 31.72272389 71.11174225 27.65535484 78.828125 20.5703125 C85.75174188 14.29438881 90.40793015 12.57304039 99.97265625 12.9609375 C106.80066242 13.82359382 110.81589446 17.29293915 115.02734375 22.59375 C118.94980924 28.30826841 119.03932004 34.81925064 117.890625 41.44921875 C116.05967352 47.7462073 111.70105554 51.93222808 106.25 55.375 C99.5883668 57.83177253 93.8495718 57.83585728 87.25 55.375 C83.54868878 53.33550198 80.77964524 50.95361018 77.875 47.9375 C72.1380232 42.00929064 66.02868156 38.29637743 57.6875 37.9375 C56.23150391 37.84662109 56.23150391 37.84662109 54.74609375 37.75390625 C43.82850812 39.69345498 36.57304259 48.74253124 29.39453125 56.47460938 C22.24320815 63.93917225 14.43275925 69.37894606 3.80493164 69.66772461 C-8.20364465 69.77987665 -16.92216078 66.9231453 -25.75 58.375 C-32.15285988 50.69476159 -34.39668032 41.23586048 -34.09375 31.390625 C-32.96168338 21.45931326 -28.27197697 12.85799873 -20.5078125 6.5546875 C-13.9492795 1.98358874 -8.04830691 -0.01925893 0 0 Z';

const MarkPreview = ({ fill='currentColor', size=80 }) => (
  <svg viewBox="0 0 258 259" width={size} height={size} aria-hidden="true">
    <path fill={fill} transform="translate(86.75,94.625)" d={KIT_PATH_D}/>
  </svg>
);

const WordmarkPreview = ({ variant, fill, accent }) => {
  // Shared inline lockup style
  const commonText = { fontFamily:"'Inter',sans-serif", letterSpacing:'-0.02em', color:fill };
  if (variant === 'speak-to-kit') return (
    <span style={{ display:'inline-flex', alignItems:'center', gap:10, fontWeight:600, fontSize:22, ...commonText }}>
      <MarkPreview fill={fill} size={26}/>speak to <span style={{ color:accent }}>Kit</span>
    </span>
  );
  if (variant === 'kit') return (
    <span style={{ display:'inline-flex', alignItems:'center', gap:8, fontWeight:700, fontSize:26, ...commonText, color:accent }}>
      <MarkPreview fill={accent} size={28}/>Kit
    </span>
  );
  if (variant === 'kit-lowercase') return (
    <span style={{ display:'inline-flex', alignItems:'center', gap:8, fontWeight:700, fontSize:26, ...commonText, color:accent }}>
      <MarkPreview fill={accent} size={28}/>kit
    </span>
  );
  if (variant === 'stk') return (
    <span style={{ display:'inline-flex', alignItems:'center', gap:8, fontWeight:700, fontSize:14, letterSpacing:'0.14em', color:fill, fontFamily:"'Inter',sans-serif" }}>
      <MarkPreview fill={accent} size={22}/>STK
    </span>
  );
  return null;
};

const AppIconPreview = ({ bg, fill }) => (
  <div style={{ width:110, height:110, borderRadius:'22%', background:bg, display:'flex', alignItems:'center', justifyContent:'center' }}>
    <MarkPreview fill={fill} size={72}/>
  </div>
);

// Download arrow
const DownloadIcon = ({ size=14 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3v12M6 11l6 6 6-6M5 21h14"/>
  </svg>
);

const PackCell = ({ href, name, use, bg, children }) => (
  <a className="sg-pack-cell" href={href} download title={`Download ${name}`}>
    <div className="sg-pack-preview" data-bg={bg}>
      {children}
    </div>
    <div className="sg-pack-meta">
      <div className="sg-pack-name">{name}</div>
      <div className="sg-pack-use">{use}</div>
    </div>
    <span className="sg-pack-dl" aria-hidden="true"><DownloadIcon size={12}/></span>
  </a>
);

const CLAY = T.clay[500];
const INK  = T.ink[700];
const CREAM = T.cream[200];
const WHITE = '#ffffff';

const BrandPatterns = () => (
  <Section id="brand" kicker="Patterns · 02"
    title="Logo pack"
    lede="One mark, four wordmarks, a full surface-colour matrix. Thirty-nine SVGs covering every placement — click any card to download. The mark is always a single flat colour; never gradient-filled, stroked, rotated, or boxed.">

    {/* ========== HERO ========== */}
    <div className="sg-pack-hero">
      <div className="sg-pack-hero-primary">
        <span className="sg-pack-hero-mark"><MarkPreview fill="currentColor" size={128}/></span>
        <span className="sg-pack-hero-caption">The mark · clay-500</span>
      </div>
      <div className="sg-pack-hero-meta">
        <div className="sg-pack-hero-meta-card">
          <span className="k">Format</span>
          <span className="v">SVG vector. 258 × 259 viewBox. <Code>currentColor</Code> fill for tinting via CSS.</span>
        </div>
        <div className="sg-pack-hero-meta-card">
          <span className="k">Minimum size</span>
          <span className="v">20px on screen, 6mm in print. Below that, use the square app-icon lockup.</span>
        </div>
        <div className="sg-pack-hero-meta-card">
          <span className="k">Clear space</span>
          <span className="v">0.5× the mark's own height on every side. Never let copy or UI encroach.</span>
        </div>
      </div>
    </div>

    {/* ========== GROUP 1 · MARK ========== */}
    <div className="sg-pack-group">
      <div className="sg-pack-group-head">
        <span className="sg-pack-group-title">01 · Logomark</span>
        <span className="sg-pack-group-count">9 files</span>
      </div>
      <div className="sg-pack-grid">
        <PackCell href="style-guide/logo-pack/kit-mark.svg"               name="kit-mark.svg"               use="currentColor — tint via CSS" bg="cream">
          <span style={{ color:CLAY, display:'flex' }}><MarkPreview fill="currentColor" size={80}/></span>
        </PackCell>
        <PackCell href="style-guide/logo-pack/kit-mark-clay.svg"          name="kit-mark-clay.svg"          use="clay on transparent"         bg="transparent">
          <MarkPreview fill={CLAY} size={80}/>
        </PackCell>
        <PackCell href="style-guide/logo-pack/kit-mark-ink.svg"           name="kit-mark-ink.svg"           use="ink on transparent"          bg="transparent">
          <MarkPreview fill={INK} size={80}/>
        </PackCell>
        <PackCell href="style-guide/logo-pack/kit-mark-white.svg"         name="kit-mark-white.svg"         use="white on transparent"        bg="transparent">
          <MarkPreview fill={WHITE} size={80}/>
        </PackCell>
        <PackCell href="style-guide/logo-pack/kit-mark-cream.svg"         name="kit-mark-cream.svg"         use="cream on transparent"        bg="transparent">
          <MarkPreview fill={CREAM} size={80}/>
        </PackCell>
        <PackCell href="style-guide/logo-pack/kit-mark-on-white.svg"      name="kit-mark-on-white.svg"      use="clay on white bg"            bg="white">
          <MarkPreview fill={CLAY} size={80}/>
        </PackCell>
        <PackCell href="style-guide/logo-pack/kit-mark-on-cream.svg"      name="kit-mark-on-cream.svg"      use="clay on cream bg"            bg="cream">
          <MarkPreview fill={CLAY} size={80}/>
        </PackCell>
        <PackCell href="style-guide/logo-pack/kit-mark-on-ink.svg"        name="kit-mark-on-ink.svg"        use="clay on ink bg"              bg="ink">
          <MarkPreview fill={CLAY} size={80}/>
        </PackCell>
        <PackCell href="style-guide/logo-pack/kit-mark-white-on-ink.svg"  name="kit-mark-white-on-ink.svg"  use="cream on ink bg"             bg="ink">
          <MarkPreview fill={CREAM} size={80}/>
        </PackCell>
      </div>
    </div>

    {/* ========== GROUP 2 · WORDMARKS ========== */}
    <div className="sg-pack-group">
      <div className="sg-pack-group-head">
        <span className="sg-pack-group-title">02 · Wordmark lockups</span>
        <span className="sg-pack-group-count">24 files · 4 variants × 6 surfaces</span>
      </div>

      {/* Row: speak to Kit */}
      <div style={{ marginBottom:18 }}>
        <div style={{ fontSize:12, color:T.ink[400], fontFamily:"'JetBrains Mono',monospace", marginBottom:8 }}>
          "speak to Kit" — marketing, public-facing header &amp; footer
        </div>
        <div className="sg-pack-grid">
          <PackCell href="style-guide/logo-pack/kit-wordmark-speak-to-kit.svg"           name="speak-to-kit.svg"           use="default · transparent"  bg="transparent">
            <WordmarkPreview variant="speak-to-kit" fill={INK} accent={CLAY}/>
          </PackCell>
          <PackCell href="style-guide/logo-pack/kit-wordmark-speak-to-kit-on-white.svg"  name="…-on-white.svg"             use="white bg"               bg="white">
            <WordmarkPreview variant="speak-to-kit" fill={INK} accent={CLAY}/>
          </PackCell>
          <PackCell href="style-guide/logo-pack/kit-wordmark-speak-to-kit-on-cream.svg"  name="…-on-cream.svg"             use="cream bg"               bg="cream">
            <WordmarkPreview variant="speak-to-kit" fill={INK} accent={CLAY}/>
          </PackCell>
          <PackCell href="style-guide/logo-pack/kit-wordmark-speak-to-kit-on-ink.svg"    name="…-on-ink.svg"               use="ink bg · clay Kit"      bg="ink">
            <WordmarkPreview variant="speak-to-kit" fill={CREAM} accent={CLAY}/>
          </PackCell>
          <PackCell href="style-guide/logo-pack/kit-wordmark-speak-to-kit-mono-ink.svg"  name="…-mono-ink.svg"             use="mono · all ink"         bg="transparent">
            <WordmarkPreview variant="speak-to-kit" fill={INK} accent={INK}/>
          </PackCell>
          <PackCell href="style-guide/logo-pack/kit-wordmark-speak-to-kit-mono-white.svg"name="…-mono-white.svg"           use="mono · all white"       bg="ink">
            <WordmarkPreview variant="speak-to-kit" fill={WHITE} accent={WHITE}/>
          </PackCell>
        </div>
      </div>

      {/* Row: Kit */}
      <div style={{ marginBottom:18 }}>
        <div style={{ fontSize:12, color:T.ink[400], fontFamily:"'JetBrains Mono',monospace", marginBottom:8 }}>
          "Kit" — app header, badges, tight spaces
        </div>
        <div className="sg-pack-grid">
          <PackCell href="style-guide/logo-pack/kit-wordmark-kit.svg"           name="kit.svg"           use="default · transparent" bg="transparent">
            <WordmarkPreview variant="kit" accent={CLAY}/>
          </PackCell>
          <PackCell href="style-guide/logo-pack/kit-wordmark-kit-on-white.svg"  name="kit-on-white.svg"  use="white bg"              bg="white">
            <WordmarkPreview variant="kit" accent={CLAY}/>
          </PackCell>
          <PackCell href="style-guide/logo-pack/kit-wordmark-kit-on-cream.svg"  name="kit-on-cream.svg"  use="cream bg"              bg="cream">
            <WordmarkPreview variant="kit" accent={CLAY}/>
          </PackCell>
          <PackCell href="style-guide/logo-pack/kit-wordmark-kit-on-ink.svg"    name="kit-on-ink.svg"    use="ink bg · cream Kit"    bg="ink">
            <WordmarkPreview variant="kit" accent={CREAM}/>
          </PackCell>
          <PackCell href="style-guide/logo-pack/kit-wordmark-kit-mono-ink.svg"  name="kit-mono-ink.svg"  use="mono · ink"            bg="transparent">
            <WordmarkPreview variant="kit" accent={INK}/>
          </PackCell>
          <PackCell href="style-guide/logo-pack/kit-wordmark-kit-mono-white.svg"name="kit-mono-white.svg" use="mono · white"         bg="ink">
            <WordmarkPreview variant="kit" accent={WHITE}/>
          </PackCell>
        </div>
      </div>

      {/* Row: kit lowercase */}
      <div style={{ marginBottom:18 }}>
        <div style={{ fontSize:12, color:T.ink[400], fontFamily:"'JetBrains Mono',monospace", marginBottom:8 }}>
          "kit" — social, product updates, informal
        </div>
        <div className="sg-pack-grid">
          <PackCell href="style-guide/logo-pack/kit-wordmark-kit-lowercase.svg"           name="kit-lc.svg"           use="default"     bg="transparent">
            <WordmarkPreview variant="kit-lowercase" accent={CLAY}/>
          </PackCell>
          <PackCell href="style-guide/logo-pack/kit-wordmark-kit-lowercase-on-white.svg"  name="kit-lc-on-white.svg"  use="white bg"    bg="white">
            <WordmarkPreview variant="kit-lowercase" accent={CLAY}/>
          </PackCell>
          <PackCell href="style-guide/logo-pack/kit-wordmark-kit-lowercase-on-cream.svg"  name="kit-lc-on-cream.svg"  use="cream bg"    bg="cream">
            <WordmarkPreview variant="kit-lowercase" accent={CLAY}/>
          </PackCell>
          <PackCell href="style-guide/logo-pack/kit-wordmark-kit-lowercase-on-ink.svg"    name="kit-lc-on-ink.svg"    use="ink bg"      bg="ink">
            <WordmarkPreview variant="kit-lowercase" accent={CREAM}/>
          </PackCell>
          <PackCell href="style-guide/logo-pack/kit-wordmark-kit-lowercase-mono-ink.svg"  name="kit-lc-mono-ink.svg"  use="mono · ink"  bg="transparent">
            <WordmarkPreview variant="kit-lowercase" accent={INK}/>
          </PackCell>
          <PackCell href="style-guide/logo-pack/kit-wordmark-kit-lowercase-mono-white.svg"name="kit-lc-mono-white.svg" use="mono · white" bg="ink">
            <WordmarkPreview variant="kit-lowercase" accent={WHITE}/>
          </PackCell>
        </div>
      </div>

      {/* Row: STK monogram */}
      <div>
        <div style={{ fontSize:12, color:T.ink[400], fontFamily:"'JetBrains Mono',monospace", marginBottom:8 }}>
          "STK" — very tight spaces only · legal footers, badges
        </div>
        <div className="sg-pack-grid">
          <PackCell href="style-guide/logo-pack/kit-wordmark-stk.svg"           name="stk.svg"           use="default"     bg="transparent">
            <WordmarkPreview variant="stk" fill={INK} accent={CLAY}/>
          </PackCell>
          <PackCell href="style-guide/logo-pack/kit-wordmark-stk-on-white.svg"  name="stk-on-white.svg"  use="white bg"    bg="white">
            <WordmarkPreview variant="stk" fill={INK} accent={CLAY}/>
          </PackCell>
          <PackCell href="style-guide/logo-pack/kit-wordmark-stk-on-cream.svg"  name="stk-on-cream.svg"  use="cream bg"    bg="cream">
            <WordmarkPreview variant="stk" fill={INK} accent={CLAY}/>
          </PackCell>
          <PackCell href="style-guide/logo-pack/kit-wordmark-stk-on-ink.svg"    name="stk-on-ink.svg"    use="ink bg"      bg="ink">
            <WordmarkPreview variant="stk" fill={CREAM} accent={CLAY}/>
          </PackCell>
          <PackCell href="style-guide/logo-pack/kit-wordmark-stk-mono-ink.svg"  name="stk-mono-ink.svg"  use="mono · ink"  bg="transparent">
            <WordmarkPreview variant="stk" fill={INK} accent={INK}/>
          </PackCell>
          <PackCell href="style-guide/logo-pack/kit-wordmark-stk-mono-white.svg"name="stk-mono-white.svg" use="mono · white" bg="ink">
            <WordmarkPreview variant="stk" fill={WHITE} accent={WHITE}/>
          </PackCell>
        </div>
      </div>
    </div>

    {/* ========== GROUP 3 · APP ICONS ========== */}
    <div className="sg-pack-group">
      <div className="sg-pack-group-head">
        <span className="sg-pack-group-title">03 · App icons · 1024 × 1024</span>
        <span className="sg-pack-group-count">4 files</span>
      </div>
      <div className="sg-pack-grid appicon">
        <PackCell href="style-guide/logo-pack/kit-appicon-clay.svg"  name="appicon-clay.svg"  use="primary · home screen" bg="cream">
          <AppIconPreview bg={CLAY}  fill={CREAM}/>
        </PackCell>
        <PackCell href="style-guide/logo-pack/kit-appicon-cream.svg" name="appicon-cream.svg" use="light variant"         bg="cream">
          <AppIconPreview bg={CREAM} fill={CLAY}/>
        </PackCell>
        <PackCell href="style-guide/logo-pack/kit-appicon-ink.svg"   name="appicon-ink.svg"   use="dark mode"             bg="cream">
          <AppIconPreview bg={INK}   fill={CLAY}/>
        </PackCell>
        <PackCell href="style-guide/logo-pack/kit-appicon-white.svg" name="appicon-white.svg" use="store listings"        bg="cream">
          <AppIconPreview bg={WHITE} fill={CLAY}/>
        </PackCell>
      </div>
    </div>

    {/* ========== GROUP 4 · FAVICONS ========== */}
    <div className="sg-pack-group">
      <div className="sg-pack-group-head">
        <span className="sg-pack-group-title">04 · Favicon</span>
        <span className="sg-pack-group-count">2 files</span>
      </div>
      <div className="sg-pack-grid">
        <PackCell href="style-guide/logo-pack/favicon.svg"          name="favicon.svg"          use="primary · clay bg"  bg="cream">
          <div style={{ width:64, height:64, borderRadius:12, background:CLAY, display:'flex', alignItems:'center', justifyContent:'center' }}>
            <MarkPreview fill={CREAM} size={42}/>
          </div>
        </PackCell>
        <PackCell href="style-guide/logo-pack/favicon-on-white.svg" name="favicon-on-white.svg" use="light variant"      bg="cream">
          <div style={{ width:64, height:64, borderRadius:12, background:WHITE, display:'flex', alignItems:'center', justifyContent:'center', border:`1px solid ${T.semantic.rule}` }}>
            <MarkPreview fill={CLAY} size={42}/>
          </div>
        </PackCell>
      </div>
    </div>

    {/* ========== RULES ========== */}
    <SubSection id="brand-rules" title="Rules">
      <DoDont items={[
        { kind:'do', demo:(
          <span style={{ display:'inline-flex', alignItems:'center', gap:8, color:T.clay[500] }}><MarkPreview fill="currentColor" size={40}/></span>
        ), text:'Use the currentColor mark and tint via CSS. One flat colour, always.' },
        { kind:'dont', demo:(
          <span style={{ display:'inline-flex', alignItems:'center', gap:8, background:`linear-gradient(135deg, ${T.clay[500]}, ${T.clay[300]})`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
            <MarkPreview fill="currentColor" size={40}/>
          </span>
        ), text:'Don\u2019t gradient-fill the mark. Don\u2019t stroke it. Don\u2019t put it in a coloured box that isn\u2019t the app-icon lockup.' },
        { kind:'do', demo:<div style={{ padding:18, background:T.cream[200], borderRadius:8, color:T.clay[500] }}><MarkPreview fill="currentColor" size={32}/></div>, text:'Honour the 0.5× clear-space rule. The mark needs air.' },
        { kind:'dont', demo:<div style={{ padding:4, background:T.cream[200], borderRadius:8, color:T.clay[500], border:`1px dashed ${T.clay[500]}` }}><MarkPreview fill="currentColor" size={44}/></div>, text:'Don\u2019t crop clear space. Don\u2019t wrap the mark in borders, rules, or decorative containers.' },
      ]} />
    </SubSection>
  </Section>
);

/* =========================================================
   HANDOFF — DOWNLOADS + STACK
   ========================================================= */

const Handoff = () => (
  <Section id="handoff" kicker="Handoff"
    title="Build-ready"
    lede="Everything below maps 1:1 to what’s documented above. Drop tailwind.config.js into a repo; or use tokens.css if you’re not using Tailwind.">

    <div className="sg-handoff-grid">
      <a className="sg-handoff-card" href="style-guide/tailwind.config.js" download>
        <div className="sg-handoff-icon">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8c2-4 5-4 7-2s4 2 6 0c2-2 5-2 5 2-2 4-5 4-7 2s-4-2-6 0c-2 2-5 2-5-2Z"/></svg>
        </div>
        <div className="sg-handoff-title">tailwind.config.js</div>
        <div className="sg-handoff-desc">Full Tailwind preset. Semantic tokens, scales, type, spacing, radii, shadows, motion. Drop in at repo root and merge.</div>
        <div className="sg-handoff-cta">Download →</div>
      </a>

      <a className="sg-handoff-card" href="style-guide/tokens.css" download>
        <div className="sg-handoff-icon">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h10"/></svg>
        </div>
        <div className="sg-handoff-title">tokens.css</div>
        <div className="sg-handoff-desc">Every token as a CSS custom property. Use with any framework. Swap surface preset via <Code>data-surface="marketing"</Code>.</div>
        <div className="sg-handoff-cta">Download →</div>
      </a>

      <a className="sg-handoff-card" href="#" onClick={(e) => { e.preventDefault(); window.downloadKitLogoPack && window.downloadKitLogoPack(); }}>
        <div className="sg-handoff-icon" style={{ color:T.clay[500] }}><KitMark size={32}/></div>
        <div className="sg-handoff-title">kit-logo-pack.zip</div>
        <div className="sg-handoff-desc">All 39 SVGs — mark, wordmarks, app icons, favicons — plus a README. Single ZIP, ~70 KB.</div>
        <div className="sg-handoff-cta">Download →</div>
      </a>
    </div>

    <SubSection id="handoff-surface" title="Switching surface presets">
      <p className="sg-body">The two personalities — marketing and app — share every token except for type stack, radii dialect, and background. Set one attribute on your root:</p>
      <pre className="sg-code">{`<!-- marketing pages -->
<html data-surface="marketing">

<!-- app shell -->
<html data-surface="app">   <!-- or omit; app is the default -->`}</pre>
      <p className="sg-body">In Tailwind, pair with the <Code>data-[surface=marketing]:</Code> variant:</p>
      <pre className="sg-code">{`<h1 class="font-sans text-4xl data-[surface=marketing]:font-display
           data-[surface=marketing]:text-display-lg">
  Describe your ideal hire.
</h1>`}</pre>
    </SubSection>

    <SubSection id="handoff-priorities" title="What to ship first">
      <ol className="sg-body" style={{ paddingLeft:22, lineHeight:1.7 }}>
        <li><b>Tokens.</b> Port the whole semantic layer first. Every later component lands on the right colours and spacing automatically.</li>
        <li><b>Buttons + inputs.</b> 80% of the app surface is these two. Nail the hover and focus states before anything else.</li>
        <li><b>Cards.</b> App variant only — the shortlist list, brief card, search card. Leave the marketing shadow/radius for marketing.</li>
        <li><b>Progress + hairline meter.</b> Needed for the live sourcing / screening / shortlist views.</li>
        <li><b>Navigation.</b> Breadcrumb pattern with primary CTA on the right.</li>
        <li><b>Composer.</b> App variant only to start. Ship the voice capsule into marketing later, once the rest is stable.</li>
      </ol>
    </SubSection>

    <SubSection id="handoff-skip" title="What not to rebuild">
      <ul className="sg-body" style={{ paddingLeft:22, lineHeight:1.7 }}>
        <li><b>Ambient waveform</b> — rAF-driven SVG in the hero. Marketing-only, pre-rendered on the static page.</li>
        <li><b>Hero capsule morph</b> — 260ms radius + padding transition. Marketing-only.</li>
        <li><b>Narrative spine</b> — the 01→09 alternating journey. Marketing storytelling, not an app pattern.</li>
        <li><b>Italic serif quotes inside the app.</b> Use Inter 13px regular instead; keep the three-row pattern.</li>
      </ul>
    </SubSection>
  </Section>
);

Object.assign(window, { GridPatterns, BrandPatterns, Handoff });
