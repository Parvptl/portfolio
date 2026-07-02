import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Parv Patel — ML & Backend Engineer',
  description:
    'ML engineer building production machine learning systems. DualForensics, real-time vitals pipelines, leakage-safe forecasting models. B.Tech Data Science, IIT Palakkad.',
  keywords: [
    'machine learning',
    'backend engineer',
    'FastAPI',
    'PyTorch',
    'production ML',
    'ML systems',
    'MLOps',
    'IIT Palakkad',
  ],
  authors: [{ name: 'Parv Patel' }],
  creator: 'Parv Patel',
  metadataBase: new URL('https://parvpatel.dev'), // Fallback URL for absolute resolution
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Parv Patel — ML & Backend Engineer',
    description:
      'ML engineer building production machine learning systems. DualForensics, real-time vitals pipelines, leakage-safe forecasting models.',
    url: 'https://parvpatel.dev',
    siteName: 'Parv Patel Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/placeholder.jpg',
        width: 1200,
        height: 630,
        alt: 'Parv Patel — ML & Backend Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parv Patel — ML & Backend Engineer',
    description: 'Building production machine learning systems and backend services.',
    images: ['/placeholder.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#141414' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // JSON-LD structured data for Person Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Parv Patel',
    url: 'https://parvpatel.dev',
    sameAs: ['https://github.com/Parvptl', 'https://www.linkedin.com/in/parvptl/'],
    jobTitle: 'Machine Learning & Backend Engineer',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'IIT Palakkad',
    },
    knowsAbout: [
      'Machine Learning',
      'MLOps',
      'Backend Engineering',
      'FastAPI',
      'PyTorch',
      'Docker',
      'TypeScript',
      'PostgreSQL',
    ],
  }

  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
