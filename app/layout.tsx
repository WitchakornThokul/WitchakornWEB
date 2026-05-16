import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WITCHAKORN THOKUL | Portfolio',
  description: 'A production-ready Next.js starter prepared for Vercel deployment.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
