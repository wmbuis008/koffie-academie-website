'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

const navLinks = [
  { label: 'Menu',          href: '#menu' },
  { label: 'Over Ons',      href: '#about' },
  { label: 'Openingstijden',href: '#hours' },
  { label: 'Contact',       href: '#location' },
]

const socialLinks = [
  { label: 'Instagram',   href: 'https://www.instagram.com/koffieacademie/', external: true },
  { label: 'Google Maps', href: 'https://maps.google.com/?q=Koffie+Academie,+Overtoom+95,+Amsterdam', external: true },
]

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power2.out',
          scrollTrigger: { trigger: footerRef.current, start: 'top 88%' },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  const linkStyle = {
    display: 'block',
    fontSize: '14px',
    opacity: 0.75,
    marginBottom: '11px',
    transition: 'opacity 0.2s',
    letterSpacing: '0.15px',
  } as const

  return (
    <footer
      ref={footerRef}
      className="footer-section"
      style={{
        background: 'var(--color-deep-black)',
        color: 'var(--text-light)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div
          className="grid-4col"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '48px',
            paddingBottom: '48px',
            borderBottom: '1px solid rgba(245, 240, 232, 0.07)',
            marginBottom: '28px',
          }}
        >
          {/* Merk */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '16px',
                fontWeight: 600,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                marginBottom: '13px',
              }}
            >
              Koffie Academie
            </div>
            <div style={{ fontSize: '13px', opacity: 0.65, lineHeight: 1.7 }}>
              Italiaans eigendom<br />Amsterdam · Est. 2019
            </div>
          </div>

          {/* Navigatie */}
          <div>
            <div
              style={{
                fontSize: '10px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                opacity: 0.65,
                marginBottom: '20px',
              }}
            >
              Navigatie
            </div>
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontSize: '10px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                opacity: 0.65,
                marginBottom: '20px',
              }}
            >
              Contact
            </div>
            <address style={{ fontStyle: 'normal', fontSize: '14px', lineHeight: 1.82, opacity: 0.75 }}>
              Overtoom 95<br />
              1054 HD Amsterdam<br />
              <a
                href="tel:+31203707981"
                style={{ color: 'inherit', transition: 'opacity 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
              >
                +31 20 370 7981
              </a><br />
              <a
                href="mailto:overtoom@koffie-academie.nl"
                style={{ color: 'inherit', transition: 'opacity 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
              >
                overtoom@koffie-academie.nl
              </a>
            </address>
          </div>

          {/* Sociaal */}
          <div>
            <div
              style={{
                fontSize: '10px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                opacity: 0.65,
                marginBottom: '20px',
              }}
            >
              Volg Ons
            </div>
            {socialLinks.map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={external ? `${label} (opent in nieuw tabblad)` : label}
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div style={{ fontSize: '12px', opacity: 0.55, letterSpacing: '0.3px' }}>
          © 2026 Koffie Academie. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  )
}
