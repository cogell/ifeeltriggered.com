// import BlinkloaderScript from 'app/lib/blinkloader-script';
import './globals.css';

import { css } from '@/styled-system/css';

import { Valkyrie } from '@/app/_components/fonts';

// import { container } from './layout.css';

// TODO: move to config/constants?
export const BLOG_TITLE = 'I Feel Triggered';
export const BLOG_DESCRIPTION = '';

export const metadata = {
  metadataBase: new URL('https://ifeeltriggered.com'),
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  openGraph: {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${Valkyrie.variable}`}>
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      </head>
      {/* <BlinkloaderScript /> */}
      <body>
        <div
          className={css({
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          })}
        >
          <div
            className={css({
              width: '100%',
              maxWidth: '36rem',
              padding: '0 1rem',
              // margin: '1rem auto 0 auto',

              display: 'flex',
              flexDirection: 'column',
              // justifyContent: 'center',
              // alignItems: 'center',
              height: '100vh',
            })}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
