'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Over Ons', href: '#about' },
  { label: 'Openingstijden', href: '#hours' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', delay: 0.4 }
      )
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease',
        background: scrolled ? 'rgba(26, 26, 26, 0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '22px 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <a
          href="#"
          aria-label="Koffie Academie — naar boven"
          style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <Image
            src="/afbeeldingen/ka-logo.png"
            alt="Koffie Academie logo"
            width={36}
            height={36}
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
              mixBlendMode: 'multiply',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '16px',
              fontWeight: 600,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: 'var(--text-light)',
            }}
          >
            Koffie Academie
          </span>
        </a>

        <div
          className="nav-links"
          style={{ display: 'flex', gap: '36px', alignItems: 'center' }}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: '13px',
                fontWeight: 400,
                color: 'var(--text-light)',
                letterSpacing: '0.4px',
                opacity: 0.82,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.82')}
            >
              {label}
            </a>
          ))}
          <a
            href="#location"
            style={{
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--color-warm-cream)',
              background: 'var(--color-terracotta)',
              padding: '10px 26px',
              borderRadius: 'var(--border-radius)',
              letterSpacing: '0.4px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.82')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Vind Ons
          </a>
        </div>

        <button
          className="hamburger"
          aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu" role="navigation" aria-label="Mobiel menu">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a href="#location" onClick={closeMenu}>
            Vind Ons
          </a>
        </div>
      )}
    </nav>
  )
}
