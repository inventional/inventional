import './globals.css';

import { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import Header from '@/components/header.component';

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
      </head>

      <body className={rubik.className}>{children}</body>
    </html>
  );
}
