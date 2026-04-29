'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const photos = [
  {
    src: '/afbeeldingen/coffee-beans.jpg',
    alt: 'Close-up of roasted coffee beans',
    quote: null,
  },
  {
    src: '/afbeeldingen/latte-croissant.jpg',
    alt: 'Latte art with croissant and cookie on wooden table',
    quote: null,
  },
  {
    src: '/afbeeldingen/latte-pastries.jpg',
    alt: 'Latte with heart art, pastry display in background',
    quote: null,
  },
  {
    src: '/afbeeldingen/bakery-display.jpg',
    alt: 'Bakery display case with brownies, coconut squares, croissants, banana bread',
    quote: null,
  },
  {
    src: '/afbeeldingen/aeropress-man.jpg',
    alt: 'Man holding aeropress in front of Dutch Aeropress Championship poster',
    quote: null,
  },
  {
    src: '/afbeeldingen/iced-coffee.jpg',
    alt: 'Two iced coffees on sunny terrace',
    quote: null,
  },
]

export default function AtmosphereGallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
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

      const items = gridRef.current ? Array.from(gridRef.current.children) : []
      if (items.length) {
        gsap.fromTo(
          items,
          { scale: 0.92, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
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
      ref={sectionRef}
      className="section-padding"
      style={{
        background: 'var(--color-warm-cream)',
        padding: '140px 48px',
      }}
    >
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        <h2
          ref={titleRef}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(34px, 4vw, 54px)',
            fontWeight: 500,
            color: 'var(--text-dark)',
            textAlign: 'center',
            marginBottom: '72px',
            letterSpacing: '-0.3px',
          }}
        >
          De Sfeer
        </h2>

        <div
          ref={gridRef}
          className="grid-3col"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '18px',
          }}
        >
          {photos.map((photo, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                aspectRatio: '1 / 1',
                borderRadius: 'var(--border-radius-xl)',
                overflow: 'hidden',
                cursor: 'default',
              }}
            >
              {/* Inner wrapper handles hover scale so it clips inside the border-radius */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.transform = 'scale(1.03)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')
                }
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>

              {photo.quote && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '22px',
                    left: '22px',
                    right: '22px',
                    background: 'rgba(26, 26, 26, 0.8)',
                    backdropFilter: 'blur(14px)',
                    color: 'var(--text-light)',
                    padding: '15px 18px',
                    borderRadius: 'var(--border-radius)',
                    fontSize: '13px',
                    fontStyle: 'italic',
                    lineHeight: 1.65,
                    letterSpacing: '0.1px',
                    zIndex: 1,
                  }}
                >
                  {photo.quote}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
