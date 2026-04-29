'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
          },
        }
      )
      gsap.fromTo(
        imageRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding"
      style={{
        background: 'var(--color-warm-cream)',
        padding: '140px 48px',
      }}
    >
      <div
        className="grid-2col"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '100px',
          alignItems: 'center',
        }}
      >
        <div
          ref={contentRef}
          style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(38px, 4vw, 60px)',
              fontWeight: 500,
              color: 'var(--text-dark)',
              lineHeight: 1.08,
              letterSpacing: '-0.5px',
            }}
          >
            Meer dan een<br />koffieshop
          </h2>
          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.88,
              color: 'var(--text-dark)',
              opacity: 0.72,
            }}
          >
            Twee Italiaanse eigenaren die hun passie voor echte koffie en
            authentiek eten naar Amsterdam brachten. Een buurtcafé waar vaste
            klanten zich thuis voelen en eerstegangers terugkomen.
          </p>
          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.88,
              color: 'var(--text-dark)',
              opacity: 0.72,
            }}
          >
            Gezellig genoeg om de hele dag te blijven, goed genoeg om te
            blijven terugkomen.
          </p>
          <div
            style={{
              marginTop: '8px',
              paddingTop: '28px',
              borderTop: '1px solid rgba(26, 26, 26, 0.1)',
            }}
          >
            <div
              style={{
                fontSize: '20px',
                color: 'var(--color-terracotta)',
                marginBottom: '9px',
                letterSpacing: '3px',
              }}
            >
              ★★★★★
            </div>
            <div
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--text-dark)',
                letterSpacing: '0.15px',
              }}
            >
              4,7 beoordeling · 936 Google-reviews
            </div>
          </div>
        </div>

        <div
          ref={imageRef}
          style={{
            position: 'relative',
            height: '580px',
            borderRadius: 'var(--border-radius-xl)',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/images/cafe-interior.png"
            alt="Koffie Academie interieur"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  )
}
