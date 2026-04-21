import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rahul.Dev',
  description: 'Full-Stack Architect Portfolio',
  icons: {
    icon: '/R_logo_bw_dark_bg.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
