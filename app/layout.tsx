import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dilruba Tas - Ph.D. Candidate in Political Science | University of Florida',
  description: 'Dilruba Tas is a Ph.D. Candidate in Political Science at the University of Florida. Researching gender and armed conflict, emotions, refugee studies, and AI applications in conflict forecasting. Member of the Violence, Conflict, and Security (ViCS) Lab.',
  keywords: ['Dilruba Tas', 'Political Science', 'University of Florida', 'Ph.D. Candidate', 'gender and armed conflict', 'refugee studies', 'AI applications', 'conflict forecasting', 'ViCS Lab', 'academic research', 'international security', 'emotions research'],
  authors: [{ name: 'Dilruba Tas' }],
  creator: 'Dilruba Tas',
  publisher: 'Dilruba Tas',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dilrubatas.github.io/dilrubatas.com/',
    title: 'Dilruba Tas - Ph.D. Candidate in Political Science',
    description: 'Dilruba Tas is a Ph.D. Candidate in Political Science at the University of Florida. Researching gender and armed conflict, emotions, refugee studies, and AI applications in conflict forecasting.',
    siteName: 'Dilruba Tas - Academic Website',
    images: [
      {
        url: '/dilrubatas.com/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Dilruba Tas - Academic Portrait',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dilruba Tas - Ph.D. Candidate in Political Science',
    description: 'Dilruba Tas is a Ph.D. Candidate in Political Science at the University of Florida. Researching gender and armed conflict, emotions, refugee studies, and AI applications in conflict forecasting.',
    images: ['/dilrubatas.com/profile.jpg'],
    creator: '@dilrubatas',
  },
  alternates: {
    canonical: 'https://dilrubatas.github.io/dilrubatas.com/',
  },
  verification: {
    google: 'TdAK7X3ngw_cpUdEpiEEDX89z0tVEdUelZdHkyQ_BUY', 
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dilruba Tas",
    "jobTitle": "Ph.D. Candidate in Political Science",
    "affiliation": {
      "@type": "Organization",
      "name": "University of Florida",
      "url": "https://www.ufl.edu"
    },
    "description": "Ph.D. Candidate in Political Science researching gender and armed conflict, emotions, refugee studies, and AI applications in conflict forecasting. Member of the Violence, Conflict, and Security (ViCS) Lab.",
    "url": "https://dilrubatas.github.io/dilrubatas.com/",
    "image": "https://dilrubatas.github.io/dilrubatas.com/profile.jpg",
    "sameAs": [
      "https://github.com/dilrubatas"
    ],
    "knowsAbout": [
      "Political Science",
      "International Security",
      "Gender and Armed Conflict",
      "Refugee Studies",
      "Emotions Research",
      "AI Applications in Conflict Forecasting"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "University of Florida"
    }
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
} 