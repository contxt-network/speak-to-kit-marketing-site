/**
 * Kit — Tailwind configuration
 * -----------------------------
 * Drop-in config. Semantic tokens map onto the `clay` / `cream` / `ink` scales.
 * The `marketing` preset enables Fraunces (serif display) for the public site.
 * The `app` preset uses Inter only — sans-serif throughout, for the product surface.
 *
 * Apply the preset by setting `data-surface="marketing"` or `data-surface="app"`
 * on <html> or <body>. Defaults to `app` (sans-only) so nothing drifts by accident.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './app/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* ---------- SCALE ---------- */
        clay: {
          50:  '#fdf5ee',  // lightest wash, hover on cream
          100: '#f7e5d4',  // warm tint
          200: '#eec4a5',
          300: '#e19c76',
          400: '#cc7452',
          500: '#b5533d',  // BRAND — primary
          600: '#9b4230',  // hover / pressed
          700: '#7d3527',
          800: '#5d281d',
          900: '#3d1a13',
        },
        cream: {
          50:  '#fbf7f0',
          100: '#f6efe2',
          200: '#f3ece1',  // BRAND — marketing background
          300: '#efe6d7',  // BRAND — marketing surface-sunk
          400: '#e3d6bf',
          500: '#cdb998',
          600: '#a9946f',
          700: '#7e6c4f',
          800: '#544735',
          900: '#2e271d',
        },
        ink: {
          50:  '#f5f4f1',
          100: '#e4e1d9',
          200: '#c9c4b6',
          300: '#9e988a',
          400: '#6b665b',  // muted text
          500: '#3d3a33',
          600: '#2a2822',
          700: '#1f1c18',  // darkest body
          800: '#15130f',
          900: '#0c0b09',
        },
        /* ---------- SEMANTIC TOKENS ---------- */
        // Marketing surface (cream)
        'bg':           '#f3ece1',  // cream.200
        'bg-sunk':      '#efe6d7',  // cream.300
        'surface':      '#ffffff',  // card / composer background
        'surface-alt':  '#fbf7f0',  // cream.50 hover
        'ink-primary':  '#1a1814',  // body text
        'ink-muted':    '#6b665b',  // secondary text
        'rule':         'rgba(26,24,20,0.12)',
        'rule-strong':  'rgba(26,24,20,0.24)',
        'accent':       '#b5533d',  // clay.500 — the one brand colour
        'accent-hover': '#9b4230',  // clay.600
        'accent-soft':  'rgba(181,83,61,0.12)',  // wash behind hero radial
        'success':      '#2ea853',
        'danger':       '#e25a4a',
      },
      fontFamily: {
        // App uses sans everywhere. Marketing adds serif for display only.
        sans:    ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'ui-serif', 'serif'],  // marketing-only
        mono:    ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        /* App scale — use these everywhere inside the product */
        'xs':   ['11px', { lineHeight: '1.45' }],
        'sm':   ['13px', { lineHeight: '1.5'  }],
        'base': ['15px', { lineHeight: '1.55' }],
        'lg':   ['17px', { lineHeight: '1.5'  }],
        'xl':   ['20px', { lineHeight: '1.35' }],
        '2xl':  ['24px', { lineHeight: '1.3'  }],
        '3xl':  ['30px', { lineHeight: '1.2'  }],
        '4xl':  ['38px', { lineHeight: '1.1', letterSpacing: '-0.02em'  }],
        /* Marketing display scale — serif, only on .marketing root */
        'display-sm': ['clamp(32px, 3.8vw, 52px)',  { lineHeight: '1.1',  letterSpacing: '-0.02em'  }],
        'display-md': ['clamp(44px, 5.2vw, 68px)',  { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(52px, 6.6vw, 88px)',  { lineHeight: '1.0',  letterSpacing: '-0.028em' }],
        'display-xl': ['clamp(56px, 6.5vw, 100px)', { lineHeight: '1.0',  letterSpacing: '-0.04em'  }],
      },
      spacing: {
        /* 4px base. Mirrors Tailwind's default but we use these token names in prose. */
        '0.5': '2px',
        '1':   '4px',
        '1.5': '6px',
        '2':   '8px',
        '3':   '12px',
        '4':   '16px',
        '5':   '20px',
        '6':   '24px',
        '7':   '28px',
        '8':   '32px',
        '10':  '40px',
        '12':  '48px',
        '16':  '64px',
        '20':  '80px',
        '24':  '96px',
      },
      borderRadius: {
        'none':  '0',
        'xs':    '4px',   // input inner, badge
        'sm':    '6px',   // buttons (app)
        'md':    '10px',  // cards (app)
        'lg':    '16px',  // cards (marketing)
        'xl':    '20px',  // composer
        '2xl':   '24px',  // hero composer
        'pill':  '999px', // buttons (marketing), chips, avatars
      },
      boxShadow: {
        /* Subtle warm shadows — no pure black */
        'xs':     '0 1px 2px -1px rgba(26,24,20,0.08)',
        'sm':     '0 2px 8px -2px rgba(26,24,20,0.10)',
        'md':     '0 8px 24px -12px rgba(26,24,20,0.14)',
        'lg':     '0 14px 44px -20px rgba(26,24,20,0.18)',
        'xl':     '0 22px 60px -22px rgba(26,24,20,0.22)',
        'accent': '0 10px 30px -8px rgba(181,83,61,0.40)',
        'accent-sm': '0 6px 20px -8px rgba(181,83,61,0.40)',
      },
      transitionTimingFunction: {
        'kit':     'cubic-bezier(0.2, 0.8, 0.2, 1)',  // default
        'kit-in':  'cubic-bezier(0.4, 0, 1, 1)',
        'kit-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '120ms',
        'base': '200ms',
        'slow': '320ms',
        'xslow':'520ms',
      },
      maxWidth: {
        'prose': '680px',   // hero sub-text, body copy
        'shell': '1200px',  // marketing container
        'app':   '1440px',  // app shell
      },
    },
  },
  plugins: [],
};
