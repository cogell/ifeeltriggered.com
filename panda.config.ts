import {
  defineConfig,
  defineGlobalStyles,
  defineTextStyles,
} from '@pandacss/dev';

import { blue, slate, plum, tomato, sky, yellow } from '@radix-ui/colors';

const globalCss = defineGlobalStyles({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  'html, body': {
    fontSize: '18px',
    fontFamily: 'body',
    color: 'text.primary',
    backgroundColor: 'background.primary',
  },
  'ol, ul': {
    ml: `1rem`,
  },
  li: {
    position: 'relative',
    pl: `1rem`,
    _before: {
      content: '"•"',
      position: 'absolute',
      left: 0,
    },
  },
  em: {
    fontStyle: 'italic',
  },
});

// https://panda-css.com/docs/theming/text-styles
const textStyles = defineTextStyles({
  h1: {
    description: 'Heading 1',
    value: {
      fontFamily: 'heading',
      fontSize: '2.5rem',
      lineHeight: 'calc(1ex / 0.42)',
    },
  },
  h2: {
    description: 'Heading 2',
    value: {
      fontFamily: 'heading',
      fontSize: '2rem',
      lineHeight: 'calc(1ex / 0.42)',
    },
  },
  h3: {
    description: 'Heading 3',
    value: {
      fontFamily: 'heading',
      fontSize: '1.5rem',
      lineHeight: 'calc(1ex / 0.42)',
    },
  },
  h4: {
    description: 'Heading 4',
    value: {
      fontFamily: 'heading',
      fontSize: '1.25rem',
      lineHeight: 'calc(1ex / 0.42)',
    },
  },
  h5: {
    description: 'Heading 5',
    value: {
      fontFamily: 'heading',
      fontSize: '1rem',
      lineHeight: 'calc(1ex / 0.42)',
    },
  },
  p: {
    description: 'Paragraph',
    value: {
      fontFamily: 'body',
      fontSize: '1.125rem',
      lineHeight: 'calc(1ex / 0.33)',
    },
  },
  caption: {
    description: 'Caption',
    value: {
      fontFamily: 'body',
      fontSize: '0.875rem',
      lineHeight: 'calc(1ex / 0.33)',
    },
  },
});

const interactiveColor = blue.blue5;
const errorColor = tomato.tomato9;

// https://panda-css.com/docs/customization/theme
const themeExtended = {
  textStyles,
  tokens: {
    fonts: {
      heading: { value: 'var(--font-valkyrie), sans-serif' },
      body: { value: 'var(--font-valkyrie), sans-serif' },
    },
    // https://panda-css.com/docs/customization/theme#colors
    colors: {
      background: {
        primary: { value: slate.slate2 },
        accent: { value: interactiveColor },
        accentAlt: { value: plum.plum5 },
        callout: { value: yellow.yellow3 },
      },
      text: {
        primary: { value: sky.sky12 },
        secondary: { value: slate.slate11 },
        code: { value: blue.blue11 },
        link: { value: blue.blue9 },
        error: { value: errorColor },
      },
      button: {
        background: { value: interactiveColor },
        warning: {
          background: { value: tomato.tomato9 },
          text: { value: tomato.tomato1 },
        },
      },
      input: {
        border: {
          default: { value: slate.slate8 },
          focus: { value: blue.blue9 },
          error: { value: errorColor },
        },
      },
      divider: {
        default: { value: blue.blue12 }, // same as text.primary
      },
    },
    // https://panda-css.com/docs/customization/theme#spacing
    spacing: {
      '0.25': { value: '0.0625rem' },
    },
  },
};

const staticCss = {
  css: [
    {
      properties: {
        backgroundColor: ['background.accentAlt'],
      },
    },
  ],
};

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  globalCss,

  // Where to look for your css declarations
  include: ['./app/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  jsxFramework: 'react',

  // Useful for theme customization
  theme: {
    extend: themeExtended,
  },

  staticCss,

  // The output directory for your css system
  outdir: 'styled-system',
});
