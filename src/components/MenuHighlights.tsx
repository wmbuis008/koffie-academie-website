'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const menuItems = [
  {
    name: 'Eggs Benedict',
    description: '2 poached eggs, ham, brioche, Hollandaise and a side salad',
    price: '€10.50',
    tag: 'Favoriet',
  },
  {
    name: 'Huevos Avocados',
    description: 'Toasted brioche, avocado, poached eggs, tomato relish, spinach and fennel salad',
    price: '€10.50',
    tag: null,
  },
  {
    name: 'Caesar Salad',
    description: 'Egg, romaine lettuce, parmesan and sourdough croutons',
    price: '€11.50',
    tag: null,
  },
  {
    name: 'Quinoa Salad',
    description: 'Quinoa, pumpkin, papadum and dukkah — Vegan & GF',
    price: '€12.50',
    tag: null,
  },
  {
    name: 'K.A. Fries',
    description: 'With truffle mayo & parmesan',
    price: '€6.50',
    tag: 'Populair',
  },
  {
    name: 'Bitterballen',
    description: 'With Dutch mustard',
    price: '€6.70',
    tag: null,
  },
  {
    name: 'K.A. Platter',
    description: 'A little bit of everything and more',
    price: '€17.00',
    tag: 'Aanbevolen',
  },
  {
    name: 'Amaretto Sour',
    description: 'Disaronno, Bourbon, Egg white, Lemon',
    price: '€9.00',
    tag: null,
  },
]

export default function MenuHighlights() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
          },
        }
      )

      const cards = cardsRef.current ? Array.from(cardsRef.current.children) : []
      if (cards.length) {
        gsap.fromTo(
          cards,
          { y: 44, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.07,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 78%',
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="section-padding"
      style={{
        background: 'var(--color-soft-white)',
        padding: '140px 48px',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '72px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(34px, 4vw, 54px)',
              fontWeight: 500,
              color: 'var(--text-dark)',
              marginBottom: '14px',
              letterSpacing: '-0.3px',
            }}
          >
            Menu Highlights
          </h2>
          <p
            style={{
              fontSize: '17px',
              color: 'var(--text-muted-dark)',
              fontWeight: 300,
            }}
          >
            Van ochtend tot avond
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid-4col"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '18px',
            marginBottom: '52px',
          }}
        >
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--color-warm-cream)',
                padding: '28px 22px 24px',
                borderRadius: 'var(--border-radius-lg)',
                border: '1px solid rgba(26, 26, 26, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                position: 'relative',
                cursor: 'default',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 10px 36px rgba(26,26,26,0.07)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {item.tag && (
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    background: 'var(--color-terracotta)',
                    color: 'var(--color-warm-cream)',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.tag}
                </div>
              )}
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '19px',
                  fontWeight: 600,
                  color: 'var(--text-dark)',
                  marginTop: item.tag ? '10px' : '0',
                  lineHeight: 1.3,
                }}
              >
                {item.name}
              </h3>
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--text-muted-dark)',
                  lineHeight: 1.65,
                  flex: 1,
                }}
              >
                {item.description}
              </p>
              <div
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'var(--color-wood-brown)',
                  marginTop: '4px',
                }}
              >
                {item.price}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a
            href="#volledig-menu"
            style={{
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-terracotta)',
              letterSpacing: '0.2px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.68')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Bekijk volledige menu →
          </a>
        </div>
      </div>
    </section>
  )
}
