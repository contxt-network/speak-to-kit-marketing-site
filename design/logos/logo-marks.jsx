if (!window.__LOGO_MARKS_LOADED__) { (function(){
window.__LOGO_MARKS_LOADED__ = true;
/* Kit — Logo Exploration · 12 directions + 1 reference
   Each mark is drawn in SVG at display size. Cards include a favicon row
   (on clay / on ink / on cream) as the final legibility test.            */

const CLAY  = '#B5533D';
const INK   = '#1F1C18';
const CREAM = '#F3ECE1';

/* ============================================================
   Individual marks. Conventions:
   - viewBox sized to the glyph's bounds (no whitespace)
   - single flat fill via `fill={c}` prop
   - no strokes unless character-defining (e.g. masthead seal rule)
   ============================================================ */

/* 01 · Speech Ribbon — single gestural curve, like a mic waveform caught mid-breath */
const MarkSpeechRibbon = ({ size=120, c=CLAY }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
    <path fill={c} d="M12 50 Q 30 10, 50 50 T 88 50 Q 70 90, 50 50 T 12 50 Z"/>
  </svg>
);

/* 02 · Quote K — the K is built from two quote-marks/brackets facing each other */
const MarkQuoteK = ({ size=120, c=CLAY }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
    {/* Vertical bar — the K's spine */}
    <rect x="18" y="14" width="12" height="72" fill={c} rx="1.5"/>
    {/* Upper arm — open-quote shape */}
    <path fill={c} d="M42 36 Q 58 22, 76 22 L 86 22 Q 72 22, 62 30 Q 56 35, 56 42 Z"/>
    {/* Lower arm — close-quote shape, mirrored */}
    <path fill={c} d="M42 64 Q 58 78, 76 78 L 86 78 Q 72 78, 62 70 Q 56 65, 56 58 Z"/>
  </svg>
);

/* 03 · Serif K Monogram — tall Fraunces-inspired K with a dot (conversation) */
const MarkSerifK = ({ size=120, c=CLAY }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
    {/* Stem with tiny serifs */}
    <path fill={c} d="M18 14 L 34 14 L 34 86 L 18 86 Z M14 14 L 38 14 L 38 18 L 14 18 Z M14 82 L 38 82 L 38 86 L 14 86 Z"/>
    {/* Upper arm */}
    <path fill={c} d="M38 48 L 64 14 L 82 14 L 56 48 Z"/>
    {/* Lower leg */}
    <path fill={c} d="M38 48 L 64 86 L 82 86 L 56 48 Z"/>
    {/* Dot (conversation/breath) */}
    <circle cx="90" cy="18" r="4" fill={c}/>
  </svg>
);

/* 04 · Shortlist Stack — three horizontal bars, descending length = your three */
const MarkShortlistStack = ({ size=120, c=CLAY }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
    <rect x="10" y="22" width="80" height="10" rx="2" fill={c}/>
    <rect x="10" y="45" width="62" height="10" rx="2" fill={c}/>
    <rect x="10" y="68" width="44" height="10" rx="2" fill={c}/>
    <circle cx="88" cy="73" r="5" fill={c}/>
  </svg>
);

/* 05 · Checkmark K — the K's negative space resolves into a tick */
const MarkCheckK = ({ size=120, c=CLAY }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
    <rect x="16" y="14" width="12" height="72" fill={c} rx="1.5"/>
    <path fill={c} d="M28 50 L 56 22 L 72 22 L 44 50 Z"/>
    <path fill={c} d="M28 50 L 60 86 L 80 86 L 48 50 Z M48 50 L 88 28 L 94 38 L 58 60 Z"/>
  </svg>
);

/* 06 · Voice Orb — solid disc + one ambient ring = listening */
const MarkVoiceOrb = ({ size=120, c=CLAY }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
    <circle cx="50" cy="50" r="22" fill={c}/>
    <circle cx="50" cy="50" r="38" fill="none" stroke={c} strokeWidth="3" strokeDasharray="2 6" strokeLinecap="round"/>
  </svg>
);

/* 07 · Conversation Pair — two speech bubbles overlapping, forming a K wedge */
const MarkConversationPair = ({ size=120, c=CLAY }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
    {/* Bubble left */}
    <path fill={c} d="M10 26 Q 10 14, 22 14 L 52 14 Q 64 14, 64 26 L 64 48 Q 64 60, 52 60 L 28 60 L 18 70 L 20 60 Q 10 58, 10 48 Z"/>
    {/* Bubble right — tinted via opacity to suggest a second voice but keep one colour */}
    <path fill={c} opacity="0.35" d="M36 40 Q 36 28, 48 28 L 78 28 Q 90 28, 90 40 L 90 62 Q 90 74, 78 74 L 54 74 L 44 84 L 46 74 Q 36 72, 36 62 Z"/>
  </svg>
);

/* 08 · kit. wordmark — purely typographic, the period does the heavy lifting */
const MarkKitWordmark = ({ size=120, c=CLAY }) => (
  <svg viewBox="0 0 240 100" width={size*2} height={size} aria-hidden="true">
    <text x="0" y="78" fontFamily="Fraunces, Georgia, serif" fontWeight="400" fontSize="96" fill={c} letterSpacing="-4">kit</text>
    <circle cx="154" cy="74" r="10" fill={c}/>
  </svg>
);

/* 09 · Directional Arrow — a K whose arms converge into an arrowhead */
const MarkArrowK = ({ size=120, c=CLAY }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
    <rect x="14" y="14" width="12" height="72" fill={c} rx="1.5"/>
    <path fill={c} d="M26 50 L 72 22 L 72 34 L 40 50 Z"/>
    <path fill={c} d="M26 50 L 72 78 L 72 66 L 40 50 Z"/>
    <path fill={c} d="M66 28 L 92 50 L 66 72 Z"/>
  </svg>
);

/* 10 · Editorial Seal — circular masthead stamp with K inside (newspaper emblem) */
const MarkEditorialSeal = ({ size=120, c=CLAY }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
    <circle cx="50" cy="50" r="44" fill="none" stroke={c} strokeWidth="3"/>
    <circle cx="50" cy="50" r="38" fill="none" stroke={c} strokeWidth="1"/>
    <text x="50" y="62" fontFamily="Fraunces, Georgia, serif" fontWeight="500" fontStyle="italic" fontSize="44" fill={c} textAnchor="middle" letterSpacing="-1">K</text>
    {/* Decorative dots at N/S */}
    <circle cx="50" cy="10" r="2" fill={c}/>
    <circle cx="50" cy="90" r="2" fill={c}/>
  </svg>
);

/* 11 · Sound Bloom — concentric arcs from a dot, abstract radio/voice */
const MarkSoundBloom = ({ size=120, c=CLAY }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
    <circle cx="30" cy="50" r="8" fill={c}/>
    <path d="M44 34 Q 58 50, 44 66" fill="none" stroke={c} strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M58 24 Q 78 50, 58 76" fill="none" stroke={c} strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M72 14 Q 100 50, 72 86" fill="none" stroke={c} strokeWidth="3.5" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

/* 12 · Folded Paper — a piece of paper folded into a K-like shape (editorial, like a letter arriving) */
const MarkFoldedPaper = ({ size=120, c=CLAY }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
    {/* Main folded shape */}
    <path fill={c} d="M18 14 L 82 14 L 82 86 L 50 74 L 18 86 Z"/>
    {/* Fold lines in negative via lighter fill */}
    <path fill={CREAM} d="M50 14 L 50 74 L 82 86 L 82 52 Z" opacity="0.18"/>
    {/* Tiny fold tab detail */}
    <path fill={CREAM} d="M70 14 L 82 14 L 82 26 Z" opacity="0.3"/>
  </svg>
);

/* 00 · CURRENT — the inherited Contxt mark in clay */
const MarkCurrent = ({ size=120, c=CLAY }) => {
  const d = 'M0 0 C0.70302246 0.00161133 1.40604492 0.00322266 2.13037109 0.00488281 C14.29125048 0.28957634 22.54131281 6.4186563 30.6875 14.88085938 C32.21980719 16.49211145 33.74594919 18.1092509 35.265625 19.73242188 C41.09386122 25.7552653 46.98916399 30.30825617 55.3515625 32.00390625 C66.03649231 31.72272389 71.11174225 27.65535484 78.828125 20.5703125 C85.75174188 14.29438881 90.40793015 12.57304039 99.97265625 12.9609375 C106.80066242 13.82359382 110.81589446 17.29293915 115.02734375 22.59375 C118.94980924 28.30826841 119.03932004 34.81925064 117.890625 41.44921875 C116.05967352 47.7462073 111.70105554 51.93222808 106.25 55.375 C99.5883668 57.83177253 93.8495718 57.83585728 87.25 55.375 C83.54868878 53.33550198 80.77964524 50.95361018 77.875 47.9375 C72.1380232 42.00929064 66.02868156 38.29637743 57.6875 37.9375 C56.23150391 37.84662109 56.23150391 37.84662109 54.74609375 37.75390625 C43.82850812 39.69345498 36.57304259 48.74253124 29.39453125 56.47460938 C22.24320815 63.93917225 14.43275925 69.37894606 3.80493164 69.66772461 C-8.20364465 69.77987665 -16.92216078 66.9231453 -25.75 58.375 C-32.15285988 50.69476159 -34.39668032 41.23586048 -34.09375 31.390625 C-32.96168338 21.45931326 -28.27197697 12.85799873 -20.5078125 6.5546875 C-13.9492795 1.98358874 -8.04830691 -0.01925893 0 0 Z';
  return (
    <svg viewBox="0 0 258 259" width={size} height={size} aria-hidden="true">
      <path fill={c} transform="translate(86.75,94.625)" d={d}/>
    </svg>
  );
};

/* ============================================================
   LOGOS registry — drives the design-canvas sections
   ============================================================ */

const LOGOS = [
  /* Typographic */
  { id:'serif-k',       group:'typographic', num:'03', label:'03 · Serif K Monogram', name:'Serif K Monogram',
    Mark: MarkSerifK,
    desc:'Tall Fraunces-inflected K with a lone dot. Feels like a nameplate — confident, literary, spoken.',
    why:'Editorial DNA straight from the style guide. Pairs cleanly with the Fraunces display face used on the marketing site.' },
  { id:'kit-wordmark',  group:'typographic', num:'08', label:'08 · kit. wordmark', name:'kit. (wordmark)',
    Mark: MarkKitWordmark,
    desc:'Three lowercase letters and a full stop. The period does the heavy lifting — end of sentence, start of trust.',
    why:'Cheapest to make, hardest to beat. Works on letterhead, in a footer, shouted on a billboard.' },
  { id:'quote-k',       group:'typographic', num:'02', label:'02 · Quote K', name:'Quote K',
    Mark: MarkQuoteK,
    desc:'A K whose arms are open-and-close quote marks. The brand is what is said — and what is heard.',
    why:'The only brand metaphor that is literally "speak to Kit" drawn into the letter itself.' },
  { id:'check-k',       group:'typographic', num:'05', label:'05 · Checkmark K', name:'Checkmark K',
    Mark: MarkCheckK,
    desc:'A K that resolves into a tick on second glance. The promise is decided candidates, not more candidates.',
    why:'Signals outcome (a shortlist) rather than process (another tool). Risk: a little on-the-nose.' },

  /* Abstract */
  { id:'speech-ribbon', group:'abstract', num:'01', label:'01 · Speech Ribbon', name:'Speech Ribbon',
    Mark: MarkSpeechRibbon,
    desc:'A single gestural curve — a waveform caught mid-breath. Voice, made visible but not literal.',
    why:'Closest to the ambient hero waveform on the marketing site. The mark and the product already rhyme.' },
  { id:'voice-orb',     group:'abstract', num:'06', label:'06 · Voice Orb', name:'Voice Orb',
    Mark: MarkVoiceOrb,
    desc:'A solid disc held inside a single dashed ring. Listening, not broadcasting. Calm, not tech.',
    why:'Favicon-proof by construction — a shape, not a glyph. Extends well into app states (pulse = listening).' },
  { id:'shortlist',     group:'abstract', num:'04', label:'04 · Shortlist Stack', name:'Shortlist Stack',
    Mark: MarkShortlistStack,
    desc:'Three bars, descending, with a single pick-dot on the final row. "Your next three."',
    why:'The clearest product metaphor — the shortlist is the deliverable. Feels a little chart-y.' },
  { id:'sound-bloom',   group:'abstract', num:'11', label:'11 · Sound Bloom', name:'Sound Bloom',
    Mark: MarkSoundBloom,
    desc:'A dot with three arcs blooming outward. Voice radiating, attention arriving.',
    why:'Dynamic, directional, friendly. Works in motion too (arcs can animate in sequence).' },
  { id:'arrow-k',       group:'abstract', num:'09', label:'09 · Directional K', name:'Directional K',
    Mark: MarkArrowK,
    desc:'A K whose open arms converge into an arrowhead. Kit points you at the three people worth meeting.',
    why:'Energetic, decisive. Risk: reads as a generic "play" or "forward" button at small sizes.' },

  /* Conceptual */
  { id:'conversation',  group:'conceptual', num:'07', label:'07 · Conversation Pair', name:'Conversation Pair',
    Mark: MarkConversationPair,
    desc:'Two speech bubbles overlapping. Operator, meet candidate. Kit holds the conversation.',
    why:'Literally dialogic. Feels friendlier than any K-based mark. Risk: reads as a messaging app.' },
  { id:'seal',          group:'conceptual', num:'10', label:'10 · Editorial Seal', name:'Editorial Seal',
    Mark: MarkEditorialSeal,
    desc:'A circular masthead stamp — the italic K held inside a double-ruled disc. Authority, quietly.',
    why:'Most obviously editorial of the bunch. Pairs beautifully with Fraunces. Risk: feels like a club.' },
  { id:'folded-paper',  group:'conceptual', num:'12', label:'12 · Folded Paper', name:'Folded Paper',
    Mark: MarkFoldedPaper,
    desc:'A letter folded into a K — an arriving missive. The shortlist as correspondence.',
    why:'Editorial story with real warmth. Risk: the fold lines may not survive at 20px.' },

  /* Reference */
  { id:'current', group:'reference', num:'00', label:'00 · Current (inherited)', name:'Current (inherited)',
    Mark: MarkCurrent,
    desc:'The Contxt mark tinted clay. In use today across the marketing site, app, and style guide.',
    why:'Useful placeholder, not a brand. We own none of the meaning. This sheet exists to replace it.' },
];

/* ============================================================
   LogoCard — display mark + meta + favicon test row
   ============================================================ */

const LogoCard = ({ logo }) => {
  const { Mark, num, name, desc } = logo;
  return (
    <div className="lx-card">
      <div className="big">
        <Mark size={130} c={CLAY}/>
      </div>
      <div className="meta">
        <div className="num">{num} · direction</div>
        <div className="name">{name}</div>
        <div className="desc">{desc}</div>
      </div>
      <div className="tests">
        <span className="tlabel">Favicon · 20px</span>
        <div className="fav">
          <span className="fav-cell on-clay"><Mark size={14} c={CREAM}/></span>
          <span className="fav-cell on-ink"><Mark size={14} c={CLAY}/></span>
          <span className="fav-cell on-cream"><Mark size={14} c={CLAY}/></span>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { LogoCard, LOGOS });
})(); }
