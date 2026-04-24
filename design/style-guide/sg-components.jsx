/* Kit Style Guide — Components section */

/* =========================================================
   BUTTONS
   ========================================================= */

const MktPrimary = ({ children='Get started' }) => (
  <button style={{ background:T.clay[500], color:'#fff', padding:'10px 20px', borderRadius:999, fontWeight:600, fontSize:14, border:0, boxShadow:T.shadow['accent-sm'], cursor:'pointer', fontFamily:"'Inter',sans-serif" }}>{children}</button>
);
const MktSecondary = ({ children='Sign in' }) => (
  <button style={{ background:'transparent', color:T.ink[700], padding:'10px 18px', borderRadius:999, fontWeight:500, fontSize:14, border:`1px solid ${T.semantic.rule}`, cursor:'pointer', fontFamily:"'Inter',sans-serif" }}>{children}</button>
);
const MktGhost = ({ children='Learn more' }) => (
  <button style={{ background:'transparent', color:T.clay[500], padding:'10px 14px', fontWeight:500, fontSize:14, border:0, cursor:'pointer', fontFamily:"'Inter',sans-serif", textDecoration:'underline', textDecorationColor:`${T.clay[500]}66`, textUnderlineOffset:4 }}>{children}</button>
);
const AppPrimary = ({ children='Save brief' }) => (
  <button style={{ background:T.clay[500], color:'#fff', padding:'8px 14px', borderRadius:6, fontWeight:600, fontSize:13, border:0, cursor:'pointer', fontFamily:"'Inter',sans-serif" }}>{children}</button>
);
const AppSecondary = ({ children='Cancel' }) => (
  <button style={{ background:'#fff', color:T.ink[700], padding:'8px 14px', borderRadius:6, fontWeight:500, fontSize:13, border:`1px solid ${T.semantic.rule}`, cursor:'pointer', fontFamily:"'Inter',sans-serif" }}>{children}</button>
);
const AppGhost = ({ children='More options' }) => (
  <button style={{ background:'transparent', color:T.ink[500], padding:'8px 10px', fontWeight:500, fontSize:13, border:0, cursor:'pointer', fontFamily:"'Inter',sans-serif" }}>{children}</button>
);
const AppDanger = ({ children='Archive search' }) => (
  <button style={{ background:'transparent', color:T.semantic.danger, padding:'8px 14px', borderRadius:6, fontWeight:500, fontSize:13, border:`1px solid ${T.semantic.danger}33`, cursor:'pointer', fontFamily:"'Inter',sans-serif" }}>{children}</button>
);

const ButtonsComp = () => (
  <Section id="buttons" kicker="Components · 01"
    title="Buttons"
    lede="Two dialects. Marketing uses pill buttons with warm shadow under the primary. App uses 6px-radius rectangles, no shadow, denser padding. Never mix.">

    <SubSection id="buttons-marketing" title="Marketing buttons" note="Pill radius 999. Primary sits on a warm shadow-accent-sm. Use exactly one primary per viewport.">
      <div className="sg-demo-row">
        <div className="sg-demo-stack"><MktPrimary/><span className="sg-demo-lbl">primary</span></div>
        <div className="sg-demo-stack"><MktSecondary/><span className="sg-demo-lbl">secondary</span></div>
        <div className="sg-demo-stack"><MktGhost/><span className="sg-demo-lbl">ghost (link)</span></div>
      </div>
      <pre className="sg-code">{`<!-- marketing primary -->
<button class="bg-accent hover:bg-accent-hover text-white font-semibold
               text-sm px-5 py-2.5 rounded-pill shadow-accent-sm
               transition-colors duration-fast ease-kit">
  Get started
</button>`}</pre>
    </SubSection>

    <SubSection id="buttons-app" title="App buttons" note="6px radius, no shadow, 13px text. Keep the visual weight quiet — the interface is a workspace, not a billboard.">
      <div className="sg-demo-row">
        <div className="sg-demo-stack"><AppPrimary/><span className="sg-demo-lbl">primary</span></div>
        <div className="sg-demo-stack"><AppSecondary/><span className="sg-demo-lbl">secondary</span></div>
        <div className="sg-demo-stack"><AppGhost/><span className="sg-demo-lbl">ghost</span></div>
        <div className="sg-demo-stack"><AppDanger/><span className="sg-demo-lbl">danger</span></div>
      </div>
      <pre className="sg-code">{`<!-- app primary -->
<button class="bg-accent hover:bg-accent-hover text-white font-semibold
               text-sm px-3.5 py-2 rounded-sm
               transition-colors duration-fast ease-kit">
  Save brief
</button>`}</pre>
    </SubSection>

    <SubSection id="buttons-states" title="States">
      <div className="sg-state-grid">
        {[
          { label:'resting', style:{} },
          { label:'hover',   style:{ background:T.clay[600] } },
          { label:'focus',   style:{ outline:`2px solid ${T.clay[500]}66`, outlineOffset:2 } },
          { label:'pressed', style:{ background:T.clay[700], transform:'translateY(1px)' } },
          { label:'disabled',style:{ opacity:0.4, cursor:'not-allowed' } },
          { label:'loading', style:{}, loading:true },
        ].map(s => (
          <div key={s.label} className="sg-state-cell">
            <button style={{ background:T.clay[500], color:'#fff', padding:'10px 20px', borderRadius:999, fontWeight:600, fontSize:14, border:0, boxShadow:T.shadow['accent-sm'], fontFamily:"'Inter',sans-serif", display:'flex', alignItems:'center', gap:8, ...s.style }}>
              {s.loading && <span className="sg-spinner" />}
              {s.loading ? 'Saving…' : 'Get started'}
            </button>
            <span className="sg-demo-lbl">{s.label}</span>
          </div>
        ))}
      </div>
    </SubSection>

    <SubSection id="buttons-rules" title="Rules">
      <DoDont items={[
        { kind:'do', demo:<MktPrimary/>, text:'Exactly one primary button per above-the-fold view. The eye should know where to go.' },
        { kind:'dont', demo:<div style={{ display:'flex', gap:8 }}><MktPrimary children="Start" /><MktPrimary children="Book demo" /></div>, text:'Don’t put two primary buttons side by side. Demote the second to secondary or ghost.' },
        { kind:'do', demo:<AppPrimary children="Save brief"/>, text:'App button copy is a concrete verb phrase. "Save brief", not "Submit".' },
        { kind:'dont', demo:<button style={{ background:T.clay[500], color:'#fff', padding:'8px 14px', borderRadius:999, fontSize:13, border:0 }}>Submit</button>, text:'Don’t use pill radius inside the app. Don’t label primaries "Submit", "OK", "Click here".' },
      ]} />
    </SubSection>
  </Section>
);

/* =========================================================
   INPUTS
   ========================================================= */

const MktInput = () => (
  <input placeholder="Describe your ideal hire…" style={{
    width:'100%', padding:'14px 18px', background:'#fff',
    border:`1px solid ${T.semantic.rule}`, borderRadius:20,
    fontSize:15, color:T.ink[700], outline:'none',
    fontFamily:"'Inter',sans-serif",
    boxShadow:T.shadow.sm
  }}/>
);
const AppInput = ({ placeholder='Search candidates', invalid=false, disabled=false }) => (
  <input placeholder={placeholder} disabled={disabled} style={{
    width:'100%', padding:'9px 12px', background: disabled ? T.cream[50] : '#fff',
    border:`1px solid ${invalid ? T.semantic.danger : T.semantic.rule}`, borderRadius:6,
    fontSize:14, color:T.ink[700], outline:'none',
    fontFamily:"'Inter',sans-serif",
    opacity: disabled ? 0.6 : 1
  }}/>
);
const AppLabel = ({ children }) => <label style={{ display:'block', fontSize:12, color:T.ink[500], fontWeight:500, marginBottom:6, fontFamily:"'Inter',sans-serif" }}>{children}</label>;

const InputsComp = () => (
  <Section id="inputs" kicker="Components · 02"
    title="Inputs & forms"
    lede="Field visuals track surface. Marketing inputs feel soft and generous (20px radius, padded, shadow-sm). App inputs are terse (6px radius, 1px rule, no shadow).">

    <SubSection id="inputs-marketing" title="Marketing composer / single input">
      <div style={{ maxWidth:560 }}><MktInput/></div>
      <pre className="sg-code">{`<input class="w-full bg-surface border border-rule rounded-xl
               px-[18px] py-[14px] text-base shadow-sm
               focus:ring-2 focus:ring-accent-soft focus:border-accent
               transition-colors duration-fast ease-kit"
       placeholder="Describe your ideal hire…" />`}</pre>
    </SubSection>

    <SubSection id="inputs-app" title="App form">
      <div style={{ maxWidth:420, display:'grid', gap:16 }}>
        <div><AppLabel>Role title</AppLabel><AppInput placeholder="Senior Product Engineer" /></div>
        <div><AppLabel>Location</AppLabel><AppInput placeholder="London, remote OK" /></div>
        <div><AppLabel>Salary band <span style={{ color:T.semantic.danger }}>Required</span></AppLabel><AppInput invalid /><div style={{ fontSize:12, color:T.semantic.danger, marginTop:6 }}>Pick a band so Kit can screen.</div></div>
        <div><AppLabel>Start date (auto-filled)</AppLabel><AppInput disabled placeholder="ASAP" /></div>
      </div>
    </SubSection>

    <SubSection id="inputs-states" title="States">
      <div className="sg-state-grid">
        <div className="sg-state-cell"><AppInput placeholder="resting" /><span className="sg-demo-lbl">resting</span></div>
        <div className="sg-state-cell"><div style={{ boxShadow:`0 0 0 3px ${T.semantic['accent-soft']}`, borderRadius:6 }}><AppInput placeholder="focused" /></div><span className="sg-demo-lbl">focused</span></div>
        <div className="sg-state-cell"><AppInput placeholder="error" invalid /><span className="sg-demo-lbl">error</span></div>
        <div className="sg-state-cell"><AppInput placeholder="disabled" disabled /><span className="sg-demo-lbl">disabled</span></div>
      </div>
    </SubSection>

    <SubSection id="inputs-rules" title="Rules">
      <DoDont items={[
        { kind:'do', demo:<AppLabel>Role title</AppLabel>, text:'Labels above the input. 12px, ink-muted, 500 weight.' },
        { kind:'dont', demo:<div style={{ position:'relative', padding:'9px 12px', border:`1px solid ${T.semantic.rule}`, borderRadius:6, fontSize:14, color:T.ink[300], background:'#fff', maxWidth:260 }}>Role title</div>, text:'Don’t use placeholder-as-label. It disappears on focus and fails screen readers.' },
        { kind:'do', demo:<div style={{ fontSize:12, color:T.semantic.danger }}>Pick a band so Kit can screen.</div>, text:'Error text explains what to do, not what went wrong. "Pick a band" > "Invalid input".' },
      ]} />
    </SubSection>
  </Section>
);

/* =========================================================
   CARDS
   ========================================================= */

const MktCard = () => (
  <div style={{ background:'#fff', borderRadius:16, border:`1px solid ${T.semantic.rule}`, boxShadow:T.shadow.lg, padding:24, maxWidth:360, fontFamily:"'Inter',sans-serif" }}>
    <div style={{ fontSize:11, color:T.clay[500], letterSpacing:'0.22em', marginBottom:12, fontWeight:600 }}>THE SHORTLIST</div>
    <h3 style={{ fontFamily:"'Fraunces',serif", fontWeight:400, fontSize:28, margin:'0 0 10px', letterSpacing:'-0.02em', color:T.ink[700] }}>Amelia Hart</h3>
    <p style={{ fontSize:14, color:T.ink[500], margin:0, lineHeight:1.5, fontStyle:'italic', fontFamily:"'Fraunces',serif" }}>“She described her zero-to-one approach in specific, architectural terms.”</p>
  </div>
);
const AppCard = () => (
  <div style={{ background:'#fff', borderRadius:10, border:`1px solid ${T.semantic.rule}`, boxShadow:T.shadow.sm, padding:18, maxWidth:360, fontFamily:"'Inter',sans-serif" }}>
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
      <div>
        <h3 style={{ fontSize:15, fontWeight:600, margin:'0 0 2px', color:T.ink[700] }}>Amelia Hart</h3>
        <div style={{ fontSize:12, color:T.ink[400] }}>Senior PM · Interviewed 12 min</div>
      </div>
      <span style={{ fontSize:11, color:T.semantic.success, fontWeight:600 }}>● live</span>
    </div>
    <div style={{ fontSize:13, color:T.ink[500], lineHeight:1.5 }}>Described zero-to-one approach in specific, architectural terms.</div>
  </div>
);

const CardsComp = () => (
  <Section id="cards" kicker="Components · 03"
    title="Cards & surfaces"
    lede="Cards are flat rectangles with a thin rule and a soft warm shadow. Marketing cards use 16px radius and shadow-lg; app cards use 10px and shadow-sm.">

    <div className="sg-demo-row">
      <div className="sg-demo-stack"><MktCard/><span className="sg-demo-lbl">marketing card</span></div>
      <div className="sg-demo-stack"><AppCard/><span className="sg-demo-lbl">app card</span></div>
    </div>

    <SubSection id="cards-anatomy" title="Anatomy">
      <ul className="sg-anatomy">
        <li><b>Surface:</b> always white. Never tint cards with clay or cream.</li>
        <li><b>Rule:</b> 1px rule token — <Code>border-rule</Code>. Paired with every shadow.</li>
        <li><b>Shadow:</b> warm, composed on ink. <Code>shadow-lg</Code> on marketing, <Code>shadow-sm</Code> on app.</li>
        <li><b>Corner:</b> 16px marketing, 10px app. No other radii on cards.</li>
        <li><b>Padding:</b> 24px marketing (p-6), 18px app (p-[18px] or pragmatically p-5).</li>
      </ul>
    </SubSection>

    <SubSection id="cards-rules" title="Rules">
      <DoDont items={[
        { kind:'do', demo:<AppCard/>, text:'Use shadow + thin rule together. The rule defines the card at the edges; the shadow gives warmth.' },
        { kind:'dont', demo:<div style={{ background:'#fff', borderRadius:10, border:`2px solid ${T.ink[700]}`, padding:18, maxWidth:300, fontSize:13 }}>Hard outlined card</div>, text:'Don’t use 2px or ink-700 borders. Cards are quiet; brutalism isn’t the voice.' },
        { kind:'do', demo:<div style={{ background:'#fff', borderRadius:10, padding:18, maxWidth:300, fontSize:13, color:T.ink[500] }}>Hover elevates shadow, nothing else moves.</div>, text:'On hover, elevate shadow-sm → shadow-md over 200ms. No translate, no scale.' },
      ]} />
    </SubSection>
  </Section>
);

/* =========================================================
   PROGRESS / METERS
   ========================================================= */

const ProgressBar = ({ pct = 62, variant = 'marketing' }) => {
  const h = variant === 'marketing' ? 6 : 4;
  const r = variant === 'marketing' ? 999 : 2;
  return (
    <div style={{ width:'100%', height:h, background:T.ink[100], borderRadius:r, overflow:'hidden' }}>
      <div style={{ width:`${pct}%`, height:'100%', background:T.clay[500], borderRadius:r, transition:'width 320ms var(--ease-kit)' }} />
    </div>
  );
};
const HairlineMeter = ({ pct = 62 }) => (
  <div style={{ width:'100%', height:1, background:T.semantic.rule, position:'relative' }}>
    <div style={{ position:'absolute', left:0, top:-1, height:3, width:`${pct}%`, background:T.clay[500] }} />
  </div>
);

const ProgressComp = () => (
  <Section id="progress" kicker="Components · 04"
    title="Progress & meters"
    lede="Three patterns. Pill bar (marketing), square bar (app), hairline meter (dense tables and inline stats).">

    <SubSection id="progress-variants" title="Variants">
      <div style={{ display:'grid', gap:28, maxWidth:480 }}>
        <div><div style={{ fontSize:12, color:T.ink[500], marginBottom:8, fontWeight:500 }}>Sourcing — 62%</div><ProgressBar pct={62} variant="marketing" /></div>
        <div><div style={{ fontSize:12, color:T.ink[500], marginBottom:8, fontWeight:500 }}>Screening — 34%</div><ProgressBar pct={34} variant="app" /></div>
        <div><div style={{ fontSize:12, color:T.ink[500], marginBottom:8, fontWeight:500 }}>Match strength</div><HairlineMeter pct={78} /></div>
      </div>
    </SubSection>

    <Callout title="Animation">
      Width changes use <Code>320ms</Code> <Code>ease-kit</Code>. Indeterminate state: a 30%-wide segment slides left→right 1200ms, linear. No pulse, no stripes.
    </Callout>
  </Section>
);

/* =========================================================
   CHAT BUBBLES
   ========================================================= */

const Bubble = ({ who, text, avatar }) => {
  const isKit = who === 'kit';
  return (
    <div style={{ display:'flex', gap:10, alignItems:'flex-start', flexDirection: isKit ? 'row' : 'row-reverse', marginBottom:10 }}>
      <div style={{ width:28, height:28, borderRadius:999, background: isKit ? T.clay[500] : T.ink[100], color: isKit ? '#fff' : T.ink[500], display:'grid', placeItems:'center', fontSize:11, fontWeight:700, flex:'0 0 auto' }}>{avatar}</div>
      <div style={{
        background: isKit ? T.cream[100] : T.clay[500],
        color: isKit ? T.ink[700] : '#fff',
        padding:'10px 14px',
        borderRadius: isKit ? '4px 14px 14px 14px' : '14px 4px 14px 14px',
        fontSize:14, lineHeight:1.45,
        maxWidth:'78%',
        fontFamily:"'Inter',sans-serif"
      }}>{text}</div>
    </div>
  );
};

const ChatComp = () => (
  <Section id="chat" kicker="Components · 05"
    title="Chat bubbles"
    lede="Two speakers only: Kit (cream-100 on the left) and the candidate (clay-500 on the right). No system messages as bubbles — use inline timestamps in ink-muted instead.">

    <SubSection id="chat-demo" title="Conversation">
      <div style={{ maxWidth:480, background:'#fff', border:`1px solid ${T.semantic.rule}`, borderRadius:10, padding:18 }}>
        <Bubble who="kit" avatar="K" text="Quick one — walk me through a zero-to-one product you've shipped end to end." />
        <Bubble who="them" avatar="AH" text="Sure. Last year I led the shift from a single-tenant backend to multi-tenant — started with a dozen customers on the old stack…" />
        <Bubble who="kit" avatar="K" text="How did you decide what to migrate first?" />
        <div style={{ textAlign:'center', fontSize:11, color:T.ink[400], margin:'8px 0', letterSpacing:'0.04em' }}>11:42 · 4 min in</div>
        <Bubble who="them" avatar="AH" text="I sequenced by risk. Customers whose data models were furthest from the destination went last…" />
      </div>
    </SubSection>

    <SubSection id="chat-rules" title="Rules">
      <DoDont items={[
        { kind:'do', demo:<span style={{ fontSize:13, color:T.ink[500] }}>Kit cream-100, candidate clay-500</span>, text:'Two speakers, two colours. Consistent across every transcript view.' },
        { kind:'dont', demo:<span style={{ fontSize:13, color:T.ink[500] }}>System messages as chat bubbles</span>, text:'Don’t put "call connected" or "transcribing…" as a bubble. Inline text, centred, ink-muted.' },
      ]} />
    </SubSection>
  </Section>
);

/* =========================================================
   NAV / HEADER
   ========================================================= */

const MktHeader = () => (
  <header style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'14px 24px', background:T.cream[300], borderBottom:`1px solid ${T.semantic.rule}`, fontFamily:"'Inter',sans-serif", borderRadius:'10px 10px 0 0' }}>
    <div style={{ display:'flex', alignItems:'center', gap:24 }}>
      <span style={{ display:'inline-flex', alignItems:'center', gap:8, fontWeight:600, fontSize:15, color:T.ink[700], letterSpacing:'-0.01em' }}>
        <span style={{ color:T.clay[500], display:'inline-flex' }}><KitMark size={20} /></span>
        speak to <span style={{ color:T.clay[500] }}>Kit</span>
      </span>
      <nav style={{ display:'flex', gap:20, fontSize:13, color:T.ink[500] }}>
        <a>How it works</a><a>Shortlist</a><a>For teams</a>
      </nav>
    </div>
    <MktPrimary children="Get started" />
  </header>
);
const AppHeader = () => (
  <header style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 18px', background:'#fff', borderBottom:`1px solid ${T.semantic.rule}`, fontFamily:"'Inter',sans-serif", borderRadius:'10px 10px 0 0' }}>
    <div style={{ display:'flex', alignItems:'center', gap:18 }}>
      <span style={{ display:'inline-flex', alignItems:'center', gap:6, fontWeight:600, fontSize:14, color:T.ink[700] }}>
        <span style={{ color:T.clay[500], display:'inline-flex' }}><KitMark size={18} /></span>Kit
      </span>
      <span style={{ fontSize:12, color:T.ink[300] }}>/</span>
      <span style={{ fontSize:13, color:T.ink[500] }}>Senior PM — London</span>
    </div>
    <div style={{ display:'flex', gap:10, alignItems:'center' }}>
      <AppGhost children="Share" />
      <AppPrimary children="New brief" />
    </div>
  </header>
);

const NavComp = () => (
  <Section id="nav" kicker="Components · 06"
    title="Navigation & header"
    lede="Marketing nav sits on cream-sunk; app nav sits on white. Both are 14px tall enough to breathe, never over 64px.">

    <div className="sg-demo-stack" style={{ marginBottom:32 }}>
      <MktHeader/><span className="sg-demo-lbl">marketing header — 56px tall</span>
    </div>
    <div className="sg-demo-stack">
      <AppHeader/><span className="sg-demo-lbl">app header — 48px tall, breadcrumb pattern</span>
    </div>
  </Section>
);

/* =========================================================
   FOOTER
   ========================================================= */

const FooterComp = () => (
  <Section id="footer" kicker="Components · 07"
    title="Footer"
    lede="One line. Wordmark, minimal links, tiny copyright. The footer isn’t a sitemap — it’s a period at the end of a sentence.">
    <div style={{ padding:'24px 28px', background:T.cream[300], borderTop:`1px solid ${T.semantic.rule}`, borderRadius:10, display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:13, color:T.ink[500], fontFamily:"'Inter',sans-serif" }}>
      <span style={{ display:'inline-flex', alignItems:'center', gap:8, color:T.ink[700], fontWeight:600 }}>
        <span style={{ color:T.clay[500], display:'inline-flex' }}><KitMark size={18} /></span>speak to <span style={{ color:T.clay[500] }}>Kit</span>
      </span>
      <div style={{ display:'flex', gap:18 }}>
        <a>Privacy</a><a>Terms</a><a>Contact</a>
      </div>
      <span style={{ fontSize:12, color:T.ink[400] }}>© 2026 Kit</span>
    </div>
  </Section>
);

/* =========================================================
   VOICE CAPSULE / COMPOSER
   ========================================================= */

const ComposerDemo = ({ variant='marketing' }) => {
  const isMkt = variant === 'marketing';
  return (
    <div style={{
      background:'#fff', border:`1px solid ${T.semantic.rule}`,
      borderRadius: isMkt ? 24 : 10,
      boxShadow: isMkt ? T.shadow.xl : T.shadow.sm,
      padding: isMkt ? '26px 26px 18px' : '14px 14px 12px',
      maxWidth: isMkt ? 680 : 480,
      fontFamily:"'Inter',sans-serif"
    }}>
      <textarea rows={isMkt ? 3 : 2} placeholder={isMkt ? 'Describe your ideal hire…' : 'What should Kit focus on next?'}
        style={{
          width:'100%', border:0, outline:0, resize:'none',
          fontSize: isMkt ? 19 : 14, lineHeight:1.5, color:T.ink[700],
          background:'transparent', fontFamily:"'Inter',sans-serif"
        }} />
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop: isMkt ? 12 : 8 }}>
        <div style={{ display:'flex', gap:8, alignItems:'center' }}>
          <button style={{
            width: isMkt ? 38 : 30, height: isMkt ? 38 : 30, borderRadius:999,
            background:T.clay[500], color:'#fff', border:0, cursor:'pointer',
            display:'grid', placeItems:'center',
            boxShadow: isMkt ? T.shadow['accent-sm'] : 'none'
          }}>
            <svg viewBox="0 0 24 24" width={isMkt ? 18 : 14} height={isMkt ? 18 : 14} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>
          </button>
          <span style={{ fontSize:12, color:T.ink[400] }}>or type</span>
        </div>
        <button style={{
          background: isMkt ? T.clay[500] : 'transparent',
          color: isMkt ? '#fff' : T.clay[500],
          padding: isMkt ? '10px 16px' : '6px 10px',
          borderRadius: isMkt ? 999 : 6,
          fontWeight:600, fontSize: isMkt ? 13 : 12, border:0, cursor:'pointer'
        }}>{isMkt ? 'Continue →' : 'Send'}</button>
      </div>
    </div>
  );
};

const ComposerComp = () => (
  <Section id="composer" kicker="Components · 08"
    title="Voice capsule / composer"
    lede="Kit’s primary input. Marketing hero uses the 24px-radius, shadow-xl variant with a large textarea. The app uses a stripped-back 10px, shadow-sm variant with no serif, no oversized mic.">

    <div className="sg-split">
      <div className="sg-split-card">
        <div className="sg-split-tag"><SurfaceChips marketing /><span className="sg-split-title">Marketing hero composer</span></div>
        <div style={{ marginTop:18 }}><ComposerDemo variant="marketing" /></div>
        <ul className="sg-anatomy" style={{ marginTop:18 }}>
          <li>24px radius, shadow-xl, border-rule.</li>
          <li>19px textarea, Inter, 3 rows resting.</li>
          <li>Mic button 38px, clay-500, shadow-accent-sm.</li>
          <li>Submit pill 999r, clay-500, arrow glyph.</li>
        </ul>
      </div>
      <div className="sg-split-card">
        <div className="sg-split-tag"><SurfaceChips app /><span className="sg-split-title">App inline composer</span></div>
        <div style={{ marginTop:18 }}><ComposerDemo variant="app" /></div>
        <ul className="sg-anatomy" style={{ marginTop:18 }}>
          <li>10px radius, shadow-sm, border-rule.</li>
          <li>14px textarea, Inter, 2 rows resting.</li>
          <li>Mic button 30px, clay-500, no shadow.</li>
          <li>Submit ghost button, 6px radius.</li>
        </ul>
      </div>
    </div>

    <Callout tone="warn" title="Why the simplified app version">
      The CTO flagged the marketing composer’s morph animation and ambient waveform as expensive to rebuild. The app variant drops both. Same posture, same affordance, no multi-step transitions.
    </Callout>
  </Section>
);

/* =========================================================
   SHORTLIST CARD
   ========================================================= */

const ShortlistMkt = () => (
  <div style={{ background:'#fff', border:`1px solid ${T.semantic.rule}`, borderRadius:16, boxShadow:T.shadow.lg, padding:24, maxWidth:420, fontFamily:"'Inter',sans-serif" }}>
    <div style={{ fontSize:11, color:T.clay[500], letterSpacing:'0.22em', fontWeight:600, marginBottom:16 }}>THE SHORTLIST · 3 IDENTIFIED</div>
    {[
      { n:'Amelia Hart', t:'Senior PM · London', q:'Walked through a zero-to-one multi-tenant migration in architectural detail.' },
      { n:'Raj Patel',   t:'Staff PM · Amsterdam', q:'Concrete on cross-team sequencing; led 3 launches past review gates.' },
      { n:'Noor Khan',  t:'Principal PM · remote', q:'Led the wedge product at her last company from 0 to $4M ARR in 9 months.' },
    ].map((c,i) => (
      <div key={i} style={{ padding:'14px 0', borderTop: i === 0 ? 'none' : `1px solid ${T.semantic.rule}`, display:'flex', gap:12, alignItems:'flex-start' }}>
        <div style={{ width:32, height:32, borderRadius:999, background:`linear-gradient(135deg, ${T.clay[500]} 0%, ${T.clay[400]} 100%)`, color:'#fff', display:'grid', placeItems:'center', fontSize:12, fontWeight:700, flex:'0 0 auto' }}>{c.n.split(' ').map(x=>x[0]).join('')}</div>
        <div>
          <div style={{ fontSize:14, fontWeight:600, color:T.ink[700] }}>{c.n}</div>
          <div style={{ fontSize:12, color:T.ink[400], marginBottom:4 }}>{c.t}</div>
          <div style={{ fontSize:13, color:T.ink[500], lineHeight:1.4, fontStyle:'italic', fontFamily:"'Fraunces',serif" }}>“{c.q}”</div>
        </div>
      </div>
    ))}
  </div>
);

const ShortlistApp = () => (
  <div style={{ background:'#fff', border:`1px solid ${T.semantic.rule}`, borderRadius:10, boxShadow:T.shadow.sm, overflow:'hidden', maxWidth:480, fontFamily:"'Inter',sans-serif" }}>
    <div style={{ padding:'12px 16px', borderBottom:`1px solid ${T.semantic.rule}`, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
      <div style={{ fontSize:13, fontWeight:600, color:T.ink[700] }}>Shortlist · 3 candidates</div>
      <div style={{ fontSize:11, color:T.semantic.success, fontWeight:600 }}>● live</div>
    </div>
    {[
      { n:'Amelia Hart', t:'Senior PM · London', s:94 },
      { n:'Raj Patel',   t:'Staff PM · Amsterdam', s:89 },
      { n:'Noor Khan',  t:'Principal PM · remote', s:86 },
    ].map((c,i) => (
      <div key={i} style={{ padding:'12px 16px', borderTop: i === 0 ? 'none' : `1px solid ${T.semantic.rule}`, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div>
          <div style={{ fontSize:14, fontWeight:600, color:T.ink[700] }}>{c.n}</div>
          <div style={{ fontSize:12, color:T.ink[400] }}>{c.t}</div>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <div style={{ width:80 }}><HairlineMeter pct={c.s} /></div>
          <span style={{ fontSize:12, color:T.ink[500], fontVariantNumeric:'tabular-nums', width:24, textAlign:'right' }}>{c.s}</span>
          <button style={{ background:'transparent', border:0, color:T.ink[400], cursor:'pointer', padding:4 }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6"/></svg>
          </button>
        </div>
      </div>
    ))}
  </div>
);

const ShortlistComp = () => (
  <Section id="shortlist" kicker="Components · 09"
    title="Shortlist card"
    lede="Kit’s signature output: three candidates, each with a one-line quote (marketing) or a match meter (app). The pattern — three items, one accent kicker, italic serif quote — is recognisable as Kit’s voice.">
    <div className="sg-split">
      <div className="sg-split-card"><div className="sg-split-tag"><SurfaceChips marketing /><span className="sg-split-title">Marketing — editorial</span></div><div style={{ marginTop:18 }}><ShortlistMkt/></div></div>
      <div className="sg-split-card"><div className="sg-split-tag"><SurfaceChips app /><span className="sg-split-title">App — working view</span></div><div style={{ marginTop:18 }}><ShortlistApp/></div></div>
    </div>
    <Callout tone="warn" title="Simplification note">
      App variant drops the italic-serif quotes (CTO: "too much work to match on the product side") and replaces with a hairline match meter. The three-row pattern + accent kicker are what make it Kit — keep those.
    </Callout>
  </Section>
);

Object.assign(window, { ButtonsComp, InputsComp, CardsComp, ProgressComp, ChatComp, NavComp, FooterComp, ComposerComp, ShortlistComp });
