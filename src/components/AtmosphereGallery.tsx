'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'

const photos = [
  { src: '/afbeeldingen/coffee-beans.jpg',    alt: 'Close-up van geroosterde koffiebonen' },
  { src: '/afbeeldingen/latte-croissant.jpg', alt: 'Latte art met croissant en koekje op houten tafel' },
  { src: '/afbeeldingen/latte-pastries.jpg',  alt: 'Latte met hartmotief, gebakken display op de achtergrond' },
  { src: '/afbeeldingen/bakery-display.jpg',  alt: 'Gebakken display met brownies, kokosrepen, croissants en bananenbrood' },
  { src: '/afbeeldingen/aeropress-man.jpg',   alt: 'Man houdt aeropress vast voor Dutch Aeropress Championship poster' },
  { src: '/afbeeldingen/iced-coffee.jpg',     alt: 'Twee ijskoffies op zonnig terras' },
]

export default function AtmosphereGallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
        }
      )
      const items = gridRef.current ? Array.from(gridRef.current.children) : []
      if (items.length) {
        gsap.fromTo(
          items,
          { scale: 0.92, opacity: 0 },
          {
            scale: 1, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power2.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 78%' },
          }
        )
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="galerij"
      ref={sectionRef}
      className="section-padding"
      style={{ background: 'var(--color-warm-cream)' }}
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
          {photos.map((photo) => (
            <div
              key={photo.src}
              style={{
                position: 'relative',
                aspectRatio: '1 / 1',
                borderRadius: 'var(--border-radius-xl)',
                overflow: 'hidden',
                cursor: 'default',
              }}
            >
              <div
                style={{ position: 'absolute', inset: 0, transition: 'transform 0.4s ease' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.03)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
