import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Koffie Academie — Italiaanse Koffie & Authentieke Focaccia | Amsterdam',
  description: 'Specialty koffie, authentieke focaccia & warme sfeer. Italiaans-gerund koffiehuis op Overtoom 95, Amsterdam.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}
