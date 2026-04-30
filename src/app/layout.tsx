import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Koffie Academie — Italiaanse Koffie & Authentieke Focaccia | Amsterdam',
  description:
    'Specialty espresso, authentieke focaccia & warme Italiaanse sfeer op Overtoom 95 Amsterdam. Ma–Vr 08:30–16:00, Za–Zo 09:00–17:00. 4,7 ★ · 936 Google-reviews.',
  alternates: {
    canonical: 'https://koffie-academie.nl',
  },
  openGraph: {
    title: 'Koffie Academie — Italiaanse Koffie & Authentieke Focaccia | Amsterdam',
    description:
      'Specialty espresso, authentieke focaccia & warme sfeer. Italiaans-gerund koffiehuis op Overtoom 95, Amsterdam.',
    url: 'https://koffie-academie.nl',
    siteName: 'Koffie Academie',
    images: [
      {
        url: '/images/cafe-interior.png',
        width: 1200,
        height: 630,
        alt: 'Koffie Academie interieur',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koffie Academie Amsterdam',
    description: 'Specialty koffie & authentieke focaccia op Overtoom 95.',
    images: ['/images/cafe-interior.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'Koffie Academie',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Overtoom 95',
    addressLocality: 'Amsterdam',
    postalCode: '1054 HD',
    addressCountry: 'NL',
  },
  telephone: '+31-20-370-7981',
  email: 'overtoom@koffie-academie.nl',
  url: 'https://koffie-academie.nl',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '16:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '936',
  },
  servesCuisine: ['Italian', 'Coffee'],
  priceRange: '€€',
  foundingDate: '2019',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Sla navigatie over
        </a>
        {children}
      </body>
    </html>
  )
}
