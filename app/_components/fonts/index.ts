import localFont from 'next/font/local';

export const Valkyrie = localFont({
  src: [
    {
      path: './valkyrie_a_regular.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: './valkyrie_a_italic.woff2',
      style: 'italic',
      weight: '400',
    },
    {
      path: './valkyrie_a_bold.woff2',
      style: 'normal',
      weight: '700',
    },
    {
      path: './valkyrie_a_bold_italic.woff2',
      style: 'italic',
      weight: '700',
    },
  ],
  // display: 'swap',
  variable: '--font-valkyrie',
});
