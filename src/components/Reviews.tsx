'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const reviews = [
  {
    name: 'Sophie M.',
    stars: 5,
    text: 'Absoluut mijn favoriete koffietent in de buurt. De sfeer is warm en gezellig, de koffie is top en de focaccia is om van te smullen!',
  },
  {
    name: 'Marc van D.',
    stars: 5,
    text: 'Eindelijk een plek waar ze écht weten hoe je een goede Italiaanse espresso maakt. En dat tuinuitzicht is een bonus.',
  },
  {
    name: 'Elena R.',
    stars: 5,
    text: 'Italiaanse gastvrijheid in Amsterdam. De eigenaren zijn zo vriendelijk en de koffie smaakt precies zoals thuis in Rome.',
  },
]

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

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

      const cards = cardsRef.current ? Array.from(cardsRef.current.children) : []
      if (cards.length) {
        gsap.fromTo(
          cards,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.13,
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
      ref={sectionRef}
      className="section-padding"
      style={{
        background: 'var(--color-soft-white)',
        padding: '140px 48px',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
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
          Wat gasten zeggen
        </h2>

        <div
          ref={cardsRef}
          className="grid-3col"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginBottom: '52px',
          }}
        >
          {reviews.map((review, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--color-warm-cream)',
                padding: '36px 30px',
                borderRadius: 'var(--border-radius-lg)',
                border: '1px solid rgba(26, 26, 26, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div
                style={{
                  fontSize: '17px',
                  color: 'var(--color-terracotta)',
                  letterSpacing: '3px',
                }}
              >
                {'★'.repeat(review.stars)}
              </div>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.78,
                  color: 'var(--text-dark)',
                  fontStyle: 'italic',
                  opacity: 0.78,
                  flex: 1,
                }}
              >
                &ldquo;{review.text}&rdquo;
              </p>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--text-dark)',
                  letterSpacing: '0.3px',
                  paddingTop: '4px',
                  borderTop: '1px solid rgba(26, 26, 26, 0.08)',
                }}
              >
                {review.name}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a
            href="https://maps.google.com/?q=Koffie+Academie,+Overtoom+95,+Amsterdam"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-terracotta)',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.68')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Lees alle 936 reviews →
          </a>
        </div>
      </div>
    </section>
  )
}
