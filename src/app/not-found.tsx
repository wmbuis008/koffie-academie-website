import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pagina niet gevonden | Koffie Academie Amsterdam',
  description: 'Deze pagina bestaat niet. Bezoek Koffie Academie op Overtoom 95, Amsterdam — specialty koffie & focaccia.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '48px 24px',
        background: 'var(--color-soft-white)',
      }}
    >
      <div>
        <p
          style={{
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'var(--color-terracotta)',
            marginBottom: '20px',
          }}
        >
          404
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: 500,
            lineHeight: 1.1,
            marginBottom: '24px',
            letterSpacing: '-0.5px',
            color: 'var(--text-dark)',
          }}
        >
          Pagina niet gevonden
        </h1>
        <p
          style={{
            fontSize: '17px',
            lineHeight: 1.8,
            opacity: 0.62,
            maxWidth: '460px',
            margin: '0 auto 48px',
            color: 'var(--text-dark)',
          }}
        >
          Deze pagina bestaat niet. Ga terug naar de homepage om ons menu, openingstijden en locatie te bekijken.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            padding: '15px 42px',
            background: 'var(--color-terracotta)',
            color: 'var(--color-warm-cream)',
            fontSize: '14px',
            fontWeight: 500,
            borderRadius: 'var(--border-radius)',
            textDecoration: 'none',
            letterSpacing: '0.3px',
          }}
        >
          Terug naar home
        </Link>
      </div>
    </main>
  )
}
