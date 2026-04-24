/* Kit Style Guide — Foundations section */

/* =========================================================
   COLOUR
   ========================================================= */

const Swatch = ({ color, size = 64, dark = false }) => (
  <div style={{
    width: size, height: size, borderRadius: 12, background: color,
    border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
    position: 'relative'
  }}>
    {dark && <span style={{ position:'absolute', inset:0, display:'grid', placeItems:'center', color:'rgba(255,255,255,0.88)', fontSize:11, fontWeight:600, letterSpacing:'0.04em' }}>Aa</span>}
  </div>
);

const ScaleStrip = ({ name, scale, description, darkAbove = 400 }) => {
  const keys = Object.keys(scale);
  return (
    <div className="sg-scale">
      <div className="sg-scale-head">
        <div>
          <div className="sg-scale-name">{name}</div>
          <div className="sg-scale-desc">{description}</div>
        </div>
        <code className="sg-inline-code">bg-{name.toLowerCase()}-500</code>
      </div>
      <div className="sg-scale-strip">
        {keys.map(k => (
          <div key={k} className="sg-scale-cell">
            <div style={{
              height: 64, background: scale[k],
              borderRadius: k === keys[0] ? '8px 0 0 8px' : k === keys[keys.length-1] ? '0 8px 8px 0' : 0,
              display: 'grid', placeItems: 'center',
              color: Number(k) >= darkAbove ? '#fff' : T.ink[700],
              fontSize: 11, fontWeight: 600
            }}>{k}</div>
            <div className="sg-scale-hex">{scale[k]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ColourFoundations = () => (
  <Section id="colour" kicker="Foundations · 01"
    title="Colour"
    lede="One brand accent (clay), one warm neutral (cream), one ink scale. That's it. Resist adding blues, greens, or purples — warmth and restraint are the voice.">

    <SubSection id="colour-scales" title="Scales"
      note="Every UI colour resolves to one of these three ramps. 50 is lightest, 900 is darkest.">
      <ScaleStrip name="Clay"  scale={T.clay}  description="The one brand colour. Use for accents, primary action, and the hero wash — never as a large fill." darkAbove={400} />
      <ScaleStrip name="Cream" scale={T.cream} description="Warm neutral for marketing backgrounds and soft surfaces. App surfaces stay close to white." darkAbove={500} />
      <ScaleStrip name="Ink"   scale={T.ink}   description="Text, borders, and dark surfaces. Never pure black — #1f1c18 is as dark as we go." darkAbove={300} />
    </SubSection>

    <SubSection id="colour-semantic" title="Semantic tokens"
      note="Use these in components, not raw scale values. When the system changes, only the semantic layer moves.">
      <div className="sg-semantic-grid">
        {[
          { k:'bg',            v:T.semantic['bg'],            tw:'bg-bg',             css:'--bg',            m:'marketing background' },
          { k:'bg-sunk',       v:T.semantic['bg-sunk'],       tw:'bg-bg-sunk',        css:'--bg-sunk',       m:'nav, sunken sections' },
          { k:'surface',       v:T.semantic['surface'],       tw:'bg-surface',        css:'--surface',       m:'cards, composer, modals' },
          { k:'surface-alt',   v:T.semantic['surface-alt'],   tw:'bg-surface-alt',    css:'--surface-alt',   m:'hover state' },
          { k:'ink-primary',   v:T.semantic['ink-primary'],   tw:'text-ink-primary',  css:'--ink-primary',   m:'body text' },
          { k:'ink-muted',     v:T.semantic['ink-muted'],     tw:'text-ink-muted',    css:'--ink-muted',     m:'secondary text, meta' },
          { k:'rule',          v:T.semantic['rule'],          tw:'border-rule',       css:'--rule',          m:'default border / divider' },
          { k:'rule-strong',   v:T.semantic['rule-strong'],   tw:'border-rule-strong',css:'--rule-strong',   m:'emphasised border' },
          { k:'accent',        v:T.semantic['accent'],        tw:'bg-accent',         css:'--accent',        m:'the brand action colour' },
          { k:'accent-hover',  v:T.semantic['accent-hover'],  tw:'bg-accent-hover',   css:'--accent-hover',  m:'hover / pressed' },
          { k:'accent-soft',   v:T.semantic['accent-soft'],   tw:'bg-accent-soft',    css:'--accent-soft',   m:'hero wash, selected bg' },
          { k:'success',       v:T.semantic['success'],       tw:'text-success',      css:'--success',       m:'success / live indicator' },
          { k:'danger',        v:T.semantic['danger'],        tw:'text-danger',       css:'--danger',        m:'error, destructive' },
        ].map(t => (
          <div key={t.k} className="sg-semantic-row">
            <div className="sg-semantic-swatch" style={{
              background: t.v,
              border: ['surface','bg'].includes(t.k) ? '1px solid rgba(0,0,0,0.08)' : 'none',
              backgroundImage: t.v.startsWith('rgba') ? 'linear-gradient(45deg, #f5f4f1 25%, transparent 25%, transparent 75%, #f5f4f1 75%), linear-gradient(45deg, #f5f4f1 25%, transparent 25%, transparent 75%, #f5f4f1 75%)' : 'none',
              backgroundSize: '10px 10px',
              backgroundPosition: '0 0, 5px 5px',
              position:'relative'
            }}>
              {t.v.startsWith('rgba') && <span style={{ position:'absolute', inset:0, background:t.v, borderRadius:'inherit' }} />}
            </div>
            <div className="sg-semantic-meta">
              <div className="sg-semantic-name">{t.k}</div>
              <div className="sg-semantic-desc">{t.m}</div>
            </div>
            <div className="sg-semantic-value">{t.v}</div>
            <code className="sg-inline-code">{t.tw}</code>
            <code className="sg-inline-code sg-inline-code-alt">var({t.css})</code>
          </div>
        ))}
      </div>
    </SubSection>

    <SubSection id="colour-usage" title="Usage rules">
      <DoDont items={[
        { kind:'do', demo:(
            <div style={{ padding:'14px 20px', background:'#fff', borderRadius:12, border:`1px solid ${T.semantic.rule}`, boxShadow:T.shadow.sm, fontSize:14, color:T.ink[700] }}>
              Hire an EM <button style={{ marginLeft:8, background:T.clay[500], color:'#fff', border:0, padding:'6px 12px', borderRadius:999, fontSize:12, fontWeight:600 }}>Continue</button>
            </div>
          ), text:'Use clay for one primary action per view. Body text stays ink.' },
        { kind:'dont', demo:(
            <div style={{ padding:'14px 20px', background:T.clay[500], borderRadius:12, fontSize:14, color:'#fff' }}>Whole background in clay.</div>
          ), text:'Don’t use clay as a large fill. It is an accent, not a surface.' },
        { kind:'do', demo:(
            <div style={{ padding:'14px 20px', background:T.cream[200], borderRadius:12, fontSize:14, color:T.ink[700], border:`1px solid ${T.semantic.rule}` }}>
              Marketing page on cream.
            </div>
          ), text:'Marketing surfaces live on cream-200. App surfaces stay near white.' },
        { kind:'dont', demo:(
            <div style={{ padding:'14px 20px', background:'#000', borderRadius:12, fontSize:14, color:'#fff' }}>Pure black #000</div>
          ), text:'Don’t use pure black. Dark surfaces use ink-700 (#1f1c18) — warmer, less harsh.' },
      ]} />
    </SubSection>

    <Callout title="Accessibility">
      Clay-500 on cream-200 sits at ~4.8:1 — passes AA for normal text above 14px. Clay-500 on white is ~4.6:1. Never put clay-400 or lighter on white for body text; use ink-700 instead and keep clay for accents, marks, and buttons (where the surface behind is white or cream).
    </Callout>
  </Section>
);

/* =========================================================
   TYPE
   ========================================================= */

const TypeSpecimen = ({ font, size, weight = 400, leading = 1.1, sample, label }) => (
  <div className="sg-type-row">
    <div className="sg-type-meta">
      <div className="sg-type-label">{label}</div>
      <div className="sg-type-props">{font} · {size} · {weight}</div>
    </div>
    <div style={{ fontFamily: font, fontSize: size.startsWith('clamp') ? size : size, fontWeight: weight, lineHeight: leading, letterSpacing: size.startsWith('clamp') || parseInt(size) > 28 ? '-0.025em' : '-0.01em', color: T.ink[700], fontStyle: label.includes('italic') ? 'italic' : 'normal' }}>
      {sample}
    </div>
  </div>
);

const TypeFoundations = () => (
  <Section id="type" kicker="Foundations · 02"
    title="Typography"
    lede="Two stacks. Inter for everything. Fraunces for marketing display only. The app surface is sans-only — no serif, no exceptions.">

    <div className="sg-split">
      <div className="sg-split-card">
        <div className="sg-split-tag">
          <SurfaceChips marketing app />
          <span className="sg-split-title">Inter</span>
        </div>
        <div style={{ fontFamily:"'Inter',sans-serif", fontSize:86, fontWeight:500, letterSpacing:'-0.035em', lineHeight:1, color:T.ink[700], marginTop:12 }}>Aa</div>
        <div className="sg-split-weights">
          {[400,500,600,700].map(w => (
            <div key={w} style={{ fontFamily:"'Inter',sans-serif", fontWeight:w, fontSize:15, color:T.ink[500] }}>
              <span style={{ color:T.ink[300], fontSize:11, fontFamily:"'JetBrains Mono',monospace', marginRight:10", display:'inline-block', width:34 }}>{w}</span>
              The quick brown fox
            </div>
          ))}
        </div>
        <div className="sg-split-note">Used for every piece of UI inside the product. Also the body stack on marketing.</div>
      </div>

      <div className="sg-split-card">
        <div className="sg-split-tag">
          <SurfaceChips marketing />
          <span className="sg-split-title">Fraunces</span>
        </div>
        <div style={{ fontFamily:"'Fraunces',serif", fontSize:86, fontWeight:400, letterSpacing:'-0.035em', lineHeight:1, color:T.clay[500], marginTop:12, fontStyle:'italic' }}>Aa</div>
        <div className="sg-split-weights">
          {[{w:400,s:'normal'},{w:400,s:'italic'},{w:500,s:'normal'},{w:600,s:'normal'}].map((x,i) => (
            <div key={i} style={{ fontFamily:"'Fraunces',serif", fontWeight:x.w, fontStyle:x.s, fontSize:18, color:T.ink[500] }}>
              <span style={{ color:T.ink[300], fontSize:11, fontFamily:"'JetBrains Mono',monospace", marginRight:10, display:'inline-block', width:60, fontStyle:'normal' }}>{x.w} {x.s === 'italic' ? 'it' : ''}</span>
              Describe your ideal hire.
            </div>
          ))}
        </div>
        <div className="sg-split-note">Display only. Headlines, hero numerals, pull-quotes. Never sub-20px. Never in the app.</div>
      </div>
    </div>

    <SubSection id="type-scale" title="App scale (Inter)"
      note="Use these across product UI. Nothing smaller than 11px ever; nothing larger than 38px without promoting to the display scale.">
      <div className="sg-type-list">
        <TypeSpecimen label="4xl — hero app" font="'Inter',sans-serif" size="38px" weight={600} leading={1.1} sample="One brief. Three candidates." />
        <TypeSpecimen label="3xl — page title" font="'Inter',sans-serif" size="30px" weight={600} leading={1.2} sample="Active searches" />
        <TypeSpecimen label="2xl — section title" font="'Inter',sans-serif" size="24px" weight={600} leading={1.3} sample="Senior Product Engineer" />
        <TypeSpecimen label="xl — card title" font="'Inter',sans-serif" size="20px" weight={600} leading={1.35} sample="Amelia Hart · Interviewed 12 min" />
        <TypeSpecimen label="lg — body large" font="'Inter',sans-serif" size="17px" weight={400} leading={1.5} sample="Kit reached out to 47 people this morning." />
        <TypeSpecimen label="base — body" font="'Inter',sans-serif" size="15px" weight={400} leading={1.55} sample="Describes her approach to zero-to-one work in detail." />
        <TypeSpecimen label="sm — meta / label" font="'Inter',sans-serif" size="13px" weight={500} leading={1.5} sample="Last seen 4 hours ago · London" />
        <TypeSpecimen label="xs — caption" font="'Inter',sans-serif" size="11px" weight={600} leading={1.45} sample="CONTINUE WITH KIT" />
      </div>
    </SubSection>

    <SubSection id="type-display" title="Marketing display (Fraunces)"
      note="Serif, fluid clamp() sizing. Reserved for hero headlines, hero numerals, section titles, and pull-quotes.">
      <div className="sg-type-list">
        <TypeSpecimen label="display-xl — hero numeral" font="'Fraunces',serif" size="clamp(56px, 6.5vw, 100px)" weight={400} leading={1.0} sample="03" />
        <TypeSpecimen label="display-lg — hero headline" font="'Fraunces',serif" size="clamp(52px, 6.6vw, 88px)" weight={400} leading={1.0} sample="Describe your ideal hire." />
        <TypeSpecimen label="display-md — section title" font="'Fraunces',serif" size="clamp(44px, 5.2vw, 68px)" weight={400} leading={1.02} sample="How Kit works." />
        <TypeSpecimen label="display-sm — pull quote italic" font="'Fraunces',serif" size="clamp(32px, 3.8vw, 52px)" weight={400} leading={1.2} sample={<em>“It felt like the search did itself.”</em>} />
      </div>
    </SubSection>

    <SubSection id="type-usage" title="Rules">
      <DoDont items={[
        { kind:'do', demo:<h4 style={{ fontFamily:"'Fraunces',serif", fontWeight:400, fontSize:36, letterSpacing:'-0.025em', margin:0, color:T.clay[500] }}>Your next three.</h4>, text:'Use Fraunces for marketing headlines and set them in clay or ink-700. Italic is fine for emphasis within a headline.' },
        { kind:'dont', demo:<h4 style={{ fontFamily:"'Fraunces',serif", fontWeight:400, fontSize:14, margin:0, color:T.ink[400] }}>Kit automates sourcing end-to-end.</h4>, text:'Don’t set Fraunces below 20px. It becomes hard to read. Use Inter for all body copy.' },
        { kind:'do', demo:<div style={{ fontFamily:"'Inter',sans-serif", fontSize:15, color:T.ink[700], lineHeight:1.55 }}>In the product, everything is Inter — headlines, rows, buttons, labels. Consistent, fast, rendered in one weight you already ship.</div>, text:'App surface is sans-only. Don’t pull Fraunces into the product, even for empty states or delight.' },
        { kind:'dont', demo:<div style={{ fontFamily:"'Inter',sans-serif", fontWeight:900, fontSize:16, color:T.ink[700] }}>VERY BOLD 900 SHOUTY</div>, text:'Don’t use 800 or 900 weights. The stack tops out at 700, and 600 does 95% of the work.' },
      ]} />
    </SubSection>
  </Section>
);

/* =========================================================
   SPACING + LAYOUT
   ========================================================= */

const SpacingFoundations = () => (
  <Section id="spacing" kicker="Foundations · 03"
    title="Spacing & layout"
    lede="4 px grid. Components compose on multiples of 4. Generous outer spacing, tight inner spacing.">

    <SubSection id="space-scale" title="Scale">
      <div className="sg-space-grid">
        {Object.entries(T.space).map(([k,v]) => (
          <div key={k} className="sg-space-row">
            <code className="sg-inline-code">space-{k}</code>
            <div className="sg-space-bar-wrap">
              <div className="sg-space-bar" style={{ width: v }} />
            </div>
            <span className="sg-space-val">{v}px</span>
          </div>
        ))}
      </div>
    </SubSection>

    <SubSection id="layout-containers" title="Containers">
      <div className="sg-container-list">
        {[
          { name:'prose', w:680,  use:'hero sub-text, body copy, inline narrative' },
          { name:'shell', w:1200, use:'marketing page shell — hero, stats, problem, spine' },
          { name:'app',   w:1440, use:'authenticated product shell' },
        ].map(c => (
          <div key={c.name} className="sg-container-row">
            <div className="sg-container-bar-wrap">
              <div className="sg-container-bar" style={{ width: `${c.w / 1440 * 100}%` }}>
                <span>{c.w}px</span>
              </div>
            </div>
            <div className="sg-container-meta">
              <code className="sg-inline-code">max-w-{c.name}</code>
              <span className="sg-container-use">{c.use}</span>
            </div>
          </div>
        ))}
      </div>
    </SubSection>

    <SubSection id="layout-rhythm" title="Section rhythm"
      note="Vertical padding on marketing sections uses clamp() so space flexes with viewport. App sections are fixed — compact and predictable.">
      <div className="sg-rhythm-table">
        <div className="sg-rhythm-head">
          <span>Context</span><span>Top</span><span>Bottom</span><span>Token</span>
        </div>
        {[
          { ctx:'Marketing hero',   top:'88px', bot:'96px',  tok:'clamp(56px, 7vh, 88px) → clamp(64px, 8vh, 96px)' },
          { ctx:'Marketing section',top:'80px', bot:'80px',  tok:'py-20' },
          { ctx:'Marketing deep',   top:'110px',bot:'90px',  tok:'py-24 (spine only)' },
          { ctx:'App page',         top:'32px', bot:'32px',  tok:'py-8' },
          { ctx:'App card interior',top:'20px', bot:'20px',  tok:'p-5' },
          { ctx:'App row',          top:'12px', bot:'12px',  tok:'py-3' },
        ].map((r,i) => (
          <div key={i} className="sg-rhythm-row">
            <span>{r.ctx}</span><span>{r.top}</span><span>{r.bot}</span><code className="sg-inline-code">{r.tok}</code>
          </div>
        ))}
      </div>
    </SubSection>
  </Section>
);

/* =========================================================
   RADII + SHADOWS
   ========================================================= */

const RadiiShadows = () => (
  <Section id="surface" kicker="Foundations · 04"
    title="Radii & shadows"
    lede="Two radii dialects, one shadow ramp. Marketing uses pillier shapes (lg+); app uses quieter shapes (sm/md). No component mixes them.">

    <SubSection id="radii" title="Radii">
      <div className="sg-radii-grid">
        {Object.entries(T.radius).map(([k,v]) => (
          <div key={k} className="sg-radii-cell">
            <div className="sg-radii-demo" style={{ borderRadius: v }}>
              <span className="sg-radii-val">{v}</span>
            </div>
            <code className="sg-inline-code">rounded-{k}</code>
            <div className="sg-radii-use">{({
              xs:'input inner, badge',
              sm:'app buttons',
              md:'app cards, modals',
              lg:'marketing cards',
              xl:'composer',
              '2xl':'hero composer',
              pill:'pill buttons, chips, avatars'
            })[k]}</div>
          </div>
        ))}
      </div>
    </SubSection>

    <SubSection id="shadows" title="Shadows"
      note="Warm shadows — composed on ink-700, not pure black. Always paired with a subtle 1-pixel border.">
      <div className="sg-shadow-grid">
        {Object.entries(T.shadow).map(([k,v]) => (
          <div key={k} className="sg-shadow-cell">
            <div className="sg-shadow-demo" style={{ boxShadow: v, background: k.startsWith('accent') ? '#fff' : '#fff' }} />
            <code className="sg-inline-code">shadow-{k}</code>
            <div className="sg-shadow-use">{({
              xs:'inline hover affordance',
              sm:'app card resting',
              md:'modal, dropdown',
              lg:'marketing card resting',
              xl:'marketing composer, elevated',
              accent:'primary CTA resting',
              'accent-sm':'CTA in nav (smaller)'
            })[k]}</div>
          </div>
        ))}
      </div>
    </SubSection>
  </Section>
);

/* =========================================================
   MOTION
   ========================================================= */

const MotionFoundations = () => {
  const [playing, setPlaying] = React.useState(false);
  React.useEffect(() => {
    const iv = setInterval(() => setPlaying(p => !p), 1800);
    return () => clearInterval(iv);
  }, []);
  return (
    <Section id="motion" kicker="Foundations · 05"
      title="Motion"
      lede="Fast, single-direction, kit-ease. Kit doesn't bounce. It settles.">

      <SubSection id="motion-tokens" title="Timings & easings">
        <div className="sg-motion-grid">
          {[
            { k:'duration-fast',  v:'120ms', use:'hover, focus ring' },
            { k:'duration-base',  v:'200ms', use:'button press, small state change' },
            { k:'duration-slow',  v:'320ms', use:'panel open, card hover elevate' },
            { k:'duration-xslow', v:'520ms', use:'hero capsule morph' },
          ].map(m => (
            <div key={m.k} className="sg-motion-row">
              <code className="sg-inline-code">{m.k}</code>
              <div className="sg-motion-bar">
                <div className="sg-motion-ball" style={{ transform: playing ? `translateX(calc(100% - 24px))` : 'translateX(0)', transition: `transform ${m.v} var(--ease-kit)` }} />
              </div>
              <span className="sg-motion-val">{m.v}</span>
              <span className="sg-motion-use">{m.use}</span>
            </div>
          ))}
        </div>
        <div className="sg-motion-easings">
          {[
            { k:'ease-kit',     v:'cubic-bezier(0.2, 0.8, 0.2, 1)', use:'default — soft arrive' },
            { k:'ease-kit-in',  v:'cubic-bezier(0.4, 0, 1, 1)',     use:'exit — elements leaving' },
            { k:'ease-kit-out', v:'cubic-bezier(0, 0, 0.2, 1)',     use:'enter — elements entering' },
          ].map(e => (
            <div key={e.k} className="sg-motion-easing-row">
              <code className="sg-inline-code">{e.k}</code>
              <span className="sg-motion-val">{e.v}</span>
              <span className="sg-motion-use">{e.use}</span>
            </div>
          ))}
        </div>
      </SubSection>

      <SubSection id="motion-rules" title="Rules">
        <DoDont items={[
          { kind:'do', demo:<div style={{ fontSize:13, color:T.ink[500] }}><code>transform</code> and <code>opacity</code> only</div>, text:'Animate properties that don’t cause layout — transform and opacity. Faster, steadier.' },
          { kind:'dont', demo:<div style={{ fontSize:13, color:T.ink[500] }}>animating <code>height</code>, <code>top</code>, <code>width</code></div>, text:'Don’t animate layout properties. Use transform, or animate max-height with a known end-value if you must.' },
          { kind:'do', demo:<div style={{ fontSize:13, color:T.ink[500] }}>One motion at a time per element</div>, text:'Elements settle. They don’t bounce, spring back, or oscillate. Ease-kit, one direction, done.' },
          { kind:'dont', demo:<div style={{ fontSize:13, color:T.ink[500] }}>Multi-step keyframes on UI</div>, text:'Multi-keyframe transitions belong in the hero waveform and loading indicators — not on buttons, inputs, or cards.' },
        ]} />
      </SubSection>
    </Section>
  );
};

/* =========================================================
   ICONS
   ========================================================= */

const stroke = { stroke:'currentColor', strokeWidth:1.6, fill:'none', strokeLinecap:'round', strokeLinejoin:'round' };
const Icon = ({ name, children }) => (
  <div className="sg-icon-cell">
    <svg viewBox="0 0 24 24" width="28" height="28" style={{ color:T.ink[700] }} {...stroke}>{children}</svg>
    <div className="sg-icon-name">{name}</div>
  </div>
);

const IconsFoundations = () => (
  <Section id="icons" kicker="Foundations · 06"
    title="Iconography"
    lede="24×24 viewbox. 1.6px stroke, round joins, round caps. No fills. No colour inside an icon — tint the whole icon via text colour.">

    <SubSection id="icons-set" title="Set">
      <div className="sg-icon-grid">
        <Icon name="mic"><path {...stroke} d="M12 3v0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z"/><path {...stroke} d="M5 11a7 7 0 0 0 14 0M12 18v3"/></Icon>
        <Icon name="waveform"><path {...stroke} d="M3 12h2m3-5v10m3-7v4m3-8v12m3-7v4m3-3h2"/></Icon>
        <Icon name="arrow-right"><path {...stroke} d="m13 6 6 6-6 6M5 12h14"/></Icon>
        <Icon name="play"><path {...stroke} d="m7 5 11 7-11 7z"/></Icon>
        <Icon name="pause"><path {...stroke} d="M8 5v14M16 5v14"/></Icon>
        <Icon name="close"><path {...stroke} d="m6 6 12 12M6 18 18 6"/></Icon>
        <Icon name="check"><path {...stroke} d="m5 12 5 5L20 7"/></Icon>
        <Icon name="search"><circle {...stroke} cx="11" cy="11" r="7"/><path {...stroke} d="m20 20-4-4"/></Icon>
        <Icon name="user"><circle {...stroke} cx="12" cy="8" r="4"/><path {...stroke} d="M4 21a8 8 0 0 1 16 0"/></Icon>
        <Icon name="brief"><path {...stroke} d="M5 4h14v16H5z"/><path {...stroke} d="M8 8h8M8 12h8M8 16h5"/></Icon>
        <Icon name="phone"><path {...stroke} d="M4 6c0 8.5 5.5 14 14 14l2-4-4-2-2 2c-3-1.5-5-3.5-6.5-6.5l2-2-2-4Z"/></Icon>
        <Icon name="sparkle"><path {...stroke} d="M12 4v6M12 14v6M4 12h6M14 12h6"/></Icon>
      </div>
    </SubSection>

    <SubSection id="icons-rules" title="Rules">
      <DoDont items={[
        { kind:'do', demo:(
          <div style={{ display:'flex', gap:10, alignItems:'center', color:T.clay[500] }}>
            <svg viewBox="0 0 24 24" width="20" height="20" {...stroke}><path {...stroke} d="M12 3v0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z"/><path {...stroke} d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>
            <span style={{ color:T.ink[700], fontSize:14 }}>Start voice brief</span>
          </div>
        ), text:'Tint the whole icon by setting text colour on its parent. Uses currentColor.' },
        { kind:'dont', demo:(
          <svg viewBox="0 0 24 24" width="28" height="28" style={{ color:'#000' }}>
            <path fill="#b5533d" d="M12 3a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z"/>
            <circle fill="#2ea853" cx="18" cy="18" r="3"/>
          </svg>
        ), text:'Don’t fill icons. Don’t use more than one colour per icon. Don’t add little coloured dots.' },
        { kind:'do', demo:<span style={{ fontSize:13, color:T.ink[500] }}>16 · 20 · 24 · 28 only</span>, text:'Ship at these sizes. At 16 use 1.4px stroke; at 28+ keep 1.6.' },
        { kind:'dont', demo:<span style={{ fontSize:13, color:T.ink[500] }}>3rd-party icon packs (Heroicons, Feather)</span>, text:'Don’t mix in packs that use different stroke widths or corner styles — they’ll look wrong next to ours.' },
      ]} />
    </SubSection>
  </Section>
);

Object.assign(window, { ColourFoundations, TypeFoundations, SpacingFoundations, RadiiShadows, MotionFoundations, IconsFoundations });
