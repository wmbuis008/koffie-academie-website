import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
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
  themeColor: '#c4683a',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://koffie-academie.nl'),
  title: 'Koffie Academie — Italiaanse Koffie & Authentieke Focaccia | Amsterdam',
  description:
    'Specialty espresso, authentieke focaccia & warme Italiaanse sfeer op Overtoom 95 Amsterdam. Ma–Vr 08:30–16:00, Za–Zo 09:00–17:00. 4,7 ★ · 936 Google-reviews.',
  keywords: [
    'koffie amsterdam',
    'specialty koffie amsterdam',
    'italiaanse koffie amsterdam',
    'koffiebar amsterdam',
    'espresso amsterdam',
    'focaccia amsterdam',
    'koffie oud-west',
    'overtoom café',
    'flat white amsterdam',
    'koffie academie',
    'italian coffee amsterdam',
    'specialty coffee amsterdam',
    'koffiehuis amsterdam',
    'café amsterdam overtoom',
  ],
  authors: [{ name: 'Koffie Academie', url: 'https://koffie-academie.nl' }],
  creator: 'Koffie Academie',
  publisher: 'Koffie Academie',
  category: 'food & drink',
  applicationName: 'Koffie Academie',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://koffie-academie.nl',
    languages: {
      'nl-NL': 'https://koffie-academie.nl',
    },
  },
  openGraph: {
    title: 'Koffie Academie — Italiaanse Koffie & Authentieke Focaccia | Amsterdam',
    description:
      'Specialty espresso, authentieke focaccia & warme sfeer. Italiaans-gerund koffiehuis op Overtoom 95, Amsterdam. 4,7 ★ · 936 reviews.',
    url: 'https://koffie-academie.nl',
    siteName: 'Koffie Academie',
    images: [
      {
        url: '/images/cafe-interior.png',
        width: 1200,
        height: 630,
        alt: 'Koffie Academie — Italiaans koffiehuis op Overtoom 95, Amsterdam',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koffie Academie Amsterdam — Specialty Koffie & Focaccia',
    description: 'Specialty koffie & authentieke focaccia op Overtoom 95. 4,7 ★ · 936 Google-reviews.',
    images: ['/images/cafe-interior.png'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/afbeeldingen/ka-logo.png',
    apple: '/afbeeldingen/ka-logo.png',
  },
  other: {
    'geo.region': 'NL-NH',
    'geo.placename': 'Amsterdam',
    'geo.position': '52.3662;4.8713',
    'ICBM': '52.3662, 4.8713',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://koffie-academie.nl/#website',
      name: 'Koffie Academie',
      url: 'https://koffie-academie.nl',
      description:
        'Specialty koffie, authentieke focaccia & warme Italiaanse sfeer op Overtoom 95, Amsterdam.',
      inLanguage: 'nl-NL',
      publisher: { '@id': 'https://koffie-academie.nl/#business' },
    },
    {
      '@type': ['CafeOrCoffeeShop', 'Restaurant', 'FoodEstablishment'],
      '@id': 'https://koffie-academie.nl/#business',
      name: 'Koffie Academie',
      alternateName: ['Koffie Academie Amsterdam', 'Koffie Academie Overtoom'],
      description:
        'Italiaans-gerund koffiehuis op Overtoom 95, Amsterdam. Specialty espresso, authentieke focaccia en warme sfeer. 4,7 sterren op basis van 936 Google-reviews.',
      url: 'https://koffie-academie.nl',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://koffie-academie.nl/#logo',
        url: 'https://koffie-academie.nl/afbeeldingen/ka-logo.png',
        contentUrl: 'https://koffie-academie.nl/afbeeldingen/ka-logo.png',
        caption: 'Koffie Academie logo',
      },
      image: [
        {
          '@type': 'ImageObject',
          url: 'https://koffie-academie.nl/images/cafe-interior.png',
          caption: 'Koffie Academie interieur',
          width: 1200,
          height: 630,
        },
        {
          '@type': 'ImageObject',
          url: 'https://koffie-academie.nl/afbeeldingen/coffee-beans.jpg',
          caption: 'Specialty koffiebonen bij Koffie Academie Amsterdam',
        },
        {
          '@type': 'ImageObject',
          url: 'https://koffie-academie.nl/afbeeldingen/latte-croissant.jpg',
          caption: 'Latte en croissant bij Koffie Academie',
        },
        {
          '@type': 'ImageObject',
          url: 'https://koffie-academie.nl/afbeeldingen/latte-pastries.jpg',
          caption: 'Koffie met gebak bij Koffie Academie',
        },
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Overtoom 95',
        addressLocality: 'Amsterdam',
        addressRegion: 'Noord-Holland',
        postalCode: '1054 HD',
        addressCountry: 'NL',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 52.3662,
        longitude: 4.8713,
      },
      telephone: '+31-20-370-7981',
      email: 'overtoom@koffie-academie.nl',
      hasMap: 'https://maps.google.com/?q=Koffie+Academie,+Overtoom+95,+Amsterdam',
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
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Sophie M.' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody:
            'Absoluut mijn favoriete koffietent in de buurt. De sfeer is warm en gezellig, de koffie is top en de focaccia is om van te smullen!',
          datePublished: '2025-03-14',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Marc van D.' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody:
            'Eindelijk een plek waar ze écht weten hoe je een goede Italiaanse espresso maakt. En dat tuinuitzicht is een bonus.',
          datePublished: '2025-02-08',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Elena R.' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody:
            'Italiaanse gastvrijheid in Amsterdam. De eigenaren zijn zo vriendelijk en de koffie smaakt precies zoals thuis in Rome.',
          datePublished: '2025-01-22',
        },
      ],
      menu: 'https://koffie-academie.nl/#volledig-menu',
      servesCuisine: ['Italian', 'Coffee', 'Focaccia', 'Cocktails'],
      priceRange: '€€',
      currenciesAccepted: 'EUR',
      paymentAccepted: 'Cash, Credit Card, Debit Card, Contactless',
      foundingDate: '2019',
      sameAs: [
        'https://www.instagram.com/koffieacademie/',
        'https://maps.google.com/?q=Koffie+Academie,+Overtoom+95,+Amsterdam',
      ],
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'WiFi', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Afhalen', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Ter plaatse eten', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Bezorging', value: false },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://koffie-academie.nl/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Koffie Academie Amsterdam',
          item: 'https://koffie-academie.nl',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://koffie-academie.nl/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Waar is Koffie Academie gevestigd?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Koffie Academie is gevestigd op Overtoom 95, 1054 HD Amsterdam, in de wijk Oud-West.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wat zijn de openingstijden van Koffie Academie?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Koffie Academie is open van maandag tot en met vrijdag van 08:30 tot 16:00 uur, en op zaterdag en zondag van 09:00 tot 17:00 uur.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wat serveert Koffie Academie?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Koffie Academie serveert specialty espresso, flat whites, lattes en andere koffiedranken, naast authentieke Italiaanse focaccia, cocktails en een uitgebreide borrel- en dinerkaart met vegetarische en veganistische opties.',
          },
        },
        {
          '@type': 'Question',
          name: 'Hoe goed is Koffie Academie beoordeeld?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Koffie Academie heeft een gemiddelde beoordeling van 4,7 sterren op basis van 936 Google-reviews.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kan ik contact opnemen met Koffie Academie?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja, u kunt Koffie Academie bereiken via telefoon +31 20 370 7981 of per e-mail via overtoom@koffie-academie.nl.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Koffie Academie Italiaans?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja, Koffie Academie is Italiaans-gerund en opgericht in 2019. De eigenaren brachten de Italiaanse koffiecultuur en culinaire tradities naar Amsterdam.',
          },
        },
      ],
    },
  ],
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
