/* Kit Style Guide — shared primitives (must load before sections) */

const KitMark = ({ size = 28, style = {} }) =>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 258 259" width={size} height={size}
    style={{ color: 'currentColor', display: 'block', ...style }} aria-hidden="true">
    <path fill="currentColor" transform="translate(86.75,94.625)"
      d="M0 0 C0.70302246 0.00161133 1.40604492 0.00322266 2.13037109 0.00488281 C14.29125048 0.28957634 22.54131281 6.4186563 30.6875 14.88085938 C32.21980719 16.49211145 33.74594919 18.1092509 35.265625 19.73242188 C41.09386122 25.7552653 46.98916399 30.30825617 55.3515625 32.00390625 C66.03649231 31.72272389 71.11174225 27.65535484 78.828125 20.5703125 C85.75174188 14.29438881 90.40793015 12.57304039 99.97265625 12.9609375 C106.80066242 13.82359382 110.81589446 17.29293915 115.02734375 22.59375 C118.94980924 28.30826841 119.03932004 34.81925064 117.890625 41.44921875 C116.05967352 47.7462073 111.70105554 51.93222808 106.25 55.375 C99.5883668 57.83177253 93.8495718 57.83585728 87.25 55.375 C83.54868878 53.33550198 80.77964524 50.95361018 77.875 47.9375 C72.1380232 42.00929064 66.02868156 38.29637743 57.6875 37.9375 C56.23150391 37.84662109 56.23150391 37.84662109 54.74609375 37.75390625 C43.82850812 39.69345498 36.57304259 48.74253124 29.39453125 56.47460938 C22.24320815 63.93917225 14.43275925 69.37894606 3.80493164 69.66772461 C-8.20364465 69.77987665 -16.92216078 66.9231453 -25.75 58.375 C-32.15285988 50.69476159 -34.39668032 41.23586048 -34.09375 31.390625 C-32.96168338 21.45931326 -28.27197697 12.85799873 -20.5078125 6.5546875 C-13.9492795 1.98358874 -8.04830691 -0.01925893 0 0 Z" />
  </svg>;

/* ---------- Tokens (mirror of tokens.css, inlined for demos) ---------- */
const T = {
  clay: { 50:'#fdf5ee',100:'#f7e5d4',200:'#eec4a5',300:'#e19c76',400:'#cc7452',500:'#b5533d',600:'#9b4230',700:'#7d3527',800:'#5d281d',900:'#3d1a13' },
  cream:{ 50:'#fbf7f0',100:'#f6efe2',200:'#f3ece1',300:'#efe6d7',400:'#e3d6bf',500:'#cdb998',600:'#a9946f',700:'#7e6c4f',800:'#544735',900:'#2e271d' },
  ink:  { 50:'#f5f4f1',100:'#e4e1d9',200:'#c9c4b6',300:'#9e988a',400:'#6b665b',500:'#3d3a33',600:'#2a2822',700:'#1f1c18',800:'#15130f',900:'#0c0b09' },
  semantic: {
    bg:'#f3ece1', 'bg-sunk':'#efe6d7', surface:'#ffffff', 'surface-alt':'#fbf7f0',
    'ink-primary':'#1a1814', 'ink-muted':'#6b665b',
    rule:'rgba(26,24,20,0.12)', 'rule-strong':'rgba(26,24,20,0.24)',
    accent:'#b5533d', 'accent-hover':'#9b4230', 'accent-soft':'rgba(181,83,61,0.12)',
    success:'#2ea853', danger:'#e25a4a'
  },
  type: {
    'xs':'11px','sm':'13px','base':'15px','lg':'17px','xl':'20px','2xl':'24px','3xl':'30px','4xl':'38px',
    'display-sm':'clamp(32px, 3.8vw, 52px)',
    'display-md':'clamp(44px, 5.2vw, 68px)',
    'display-lg':'clamp(52px, 6.6vw, 88px)',
    'display-xl':'clamp(56px, 6.5vw, 100px)',
  },
  radius: { xs:'4px', sm:'6px', md:'10px', lg:'16px', xl:'20px', '2xl':'24px', pill:'999px' },
  shadow: {
    xs:'0 1px 2px -1px rgba(26,24,20,0.08)',
    sm:'0 2px 8px -2px rgba(26,24,20,0.10)',
    md:'0 8px 24px -12px rgba(26,24,20,0.14)',
    lg:'0 14px 44px -20px rgba(26,24,20,0.18)',
    xl:'0 22px 60px -22px rgba(26,24,20,0.22)',
    accent:'0 10px 30px -8px rgba(181,83,61,0.40)',
    'accent-sm':'0 6px 20px -8px rgba(181,83,61,0.40)',
  },
  space: { 1:4, 2:8, 3:12, 4:16, 5:20, 6:24, 8:32, 10:40, 12:48, 16:64, 20:80, 24:96 },
  motion: {
    'ease-kit':'cubic-bezier(0.2, 0.8, 0.2, 1)',
    'ease-kit-in':'cubic-bezier(0.4, 0, 1, 1)',
    'ease-kit-out':'cubic-bezier(0, 0, 0.2, 1)',
    'duration-fast':'120ms','duration-base':'200ms','duration-slow':'320ms','duration-xslow':'520ms'
  }
};

/* ---------- Layout primitives for the guide itself ---------- */

const Section = ({ id, kicker, title, lede, children }) => (
  <section id={id} className="sg-section">
    <div className="sg-section-head">
      <div className="sg-kicker">{kicker}</div>
      <h2 className="sg-h2">{title}</h2>
      {lede && <p className="sg-lede">{lede}</p>}
    </div>
    {children}
  </section>
);

const SubSection = ({ id, title, note, children }) => (
  <div id={id} className="sg-sub">
    <div className="sg-sub-head">
      <h3 className="sg-h3">{title}</h3>
      {note && <p className="sg-note">{note}</p>}
    </div>
    {children}
  </div>
);

/* Two-column spec row: left description, right demo */
const Spec = ({ children }) => <div className="sg-spec">{children}</div>;

/* Token row: swatch / label / value / tailwind class / css var */
const TokenRow = ({ swatch, label, value, twClass, cssVar, meta }) => (
  <div className="sg-token-row">
    {swatch}
    <div className="sg-token-label">{label}{meta && <span className="sg-token-meta"> — {meta}</span>}</div>
    <div className="sg-token-value">{value}</div>
    <code className="sg-token-code">{twClass}</code>
    <code className="sg-token-code sg-token-code-alt">{cssVar}</code>
  </div>
);

/* Do / Don't panel */
const DoDont = ({ items }) => (
  <div className="sg-dodont">
    {items.map((it, i) => (
      <div key={i} className={`sg-dodont-item ${it.kind === 'do' ? 'sg-do' : 'sg-dont'}`}>
        <div className="sg-dodont-tag">
          <span className={`sg-dodont-dot ${it.kind === 'do' ? 'sg-do-dot' : 'sg-dont-dot'}`} />
          <span>{it.kind === 'do' ? 'Do' : 'Don’t'}</span>
        </div>
        <div className="sg-dodont-body">
          <div className="sg-dodont-demo">{it.demo}</div>
          <p className="sg-dodont-text">{it.text}</p>
        </div>
      </div>
    ))}
  </div>
);

/* Inline code pill */
const Code = ({ children }) => <code className="sg-inline-code">{children}</code>;

/* Callout box */
const Callout = ({ tone = 'info', title, children }) => (
  <aside className={`sg-callout sg-callout-${tone}`}>
    {title && <div className="sg-callout-title">{title}</div>}
    <div className="sg-callout-body">{children}</div>
  </aside>
);

/* Surface chip — shows which presets a component/token appears in */
const SurfaceChips = ({ marketing, app }) => (
  <div className="sg-surface-chips">
    {marketing && <span className="sg-chip sg-chip-marketing">Marketing</span>}
    {app && <span className="sg-chip sg-chip-app">App</span>}
  </div>
);

Object.assign(window, {
  KitMark, T, Section, SubSection, Spec, TokenRow, DoDont, Code, Callout, SurfaceChips
});
