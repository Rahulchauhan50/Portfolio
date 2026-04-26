import type { Metadata } from 'next';
import './globals.css';
import SiteShell from '@/components/SiteShell';
import { projects } from '@/lib/data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rahulcodes.tech';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Rahul Chauhan | Full-Stack Developer Portfolio',
    template: '%s | Rahul Chauhan',
  },
  description:
    'Portfolio of Rahul Chauhan, a full-stack developer focused on automation, AI workflows, and modern web applications with Next.js and React.',
  keywords: [
    'Rahul Chauhan',
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Automation Engineer',
    'AI Workflow Developer',
    'Portfolio',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Rahul Chauhan Portfolio',
    title: 'Rahul Chauhan | Full-Stack Developer Portfolio',
    description:
      'Explore projects in automation, AI integrations, and full-stack web development built with modern JavaScript technologies.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Chauhan | Full-Stack Developer Portfolio',
    description:
      'Explore projects in automation, AI integrations, and full-stack web development built with modern JavaScript technologies.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/R_logo_bw_dark_bg.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/R_logo_bw_dark_bg.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personId = `${siteUrl}/#person`;
  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;
  const logoUrl = `${siteUrl}/R_logo_bw_dark_bg.svg`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: 'Rahul Chauhan',
        url: siteUrl,
        jobTitle: 'Full-Stack Developer',
        description:
          'Full-stack developer focused on automation, AI workflows, and modern web applications with Next.js and React.',
        sameAs: [
          'https://github.com/Rahulchauhan50',
          'https://www.linkedin.com/in/rahulchauhan50/',
        ],
        knowsAbout: [
          'Next.js',
          'React',
          'Node.js',
          'TypeScript',
          'Automation',
          'AI Integrations',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteUrl,
        name: 'Rahul Chauhan Portfolio',
        description:
          'Portfolio website showcasing full-stack projects in automation, AI workflows, and web application development.',
        publisher: {
          '@id': organizationId,
        },
      },
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: 'Rahul Codes',
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: logoUrl,
        },
        sameAs: [
          'https://github.com/Rahulchauhan50',
          'https://www.linkedin.com/in/rahulchauhan50/',
        ],
        founder: {
          '@id': personId,
        },
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/projects#list`,
        name: 'Rahul Chauhan Projects',
        itemListElement: projects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': ['CreativeWork', 'Project'],
            '@id': `${siteUrl}/projects#project-${project.id}`,
            name: project.title,
            description: project.longDesc,
            image: project.image,
            creator: {
              '@id': personId,
            },
            dateCreated: project.year,
            url: `${siteUrl}/projects`,
            keywords: project.tech.join(', '),
          },
        })),
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
