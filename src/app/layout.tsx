import './globals.css';

import { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import Script from 'next/script';

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Inventional',
  description: 'Inventional is team of software engineers building the future of the AI industry.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={rubik.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="16,24,32,64" />

        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>

      <body className={rubik.className}>{children}</body>
    </html>
  );
}
