import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rahul.Dev',
  description: 'Full-Stack Architect Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
