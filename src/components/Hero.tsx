'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.3, delay: 0.6 })
        .fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.65')
        .fromTo(buttonsRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.55')
        .fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, '-=0.3')
    })
    return () => ctx.revert()
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '640px',
        background: 'var(--color-deep-black)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0 }} aria-hidden="true">
        <Image
          src="/images/cafe-interior.png"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', opacity: 0.38 }}
        />
      </div>

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(26,26,26,0.25) 0%, rgba(26,26,26,0.72) 100%)',
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: 'var(--text-light)',
          maxWidth: '900px',
          padding: '0 48px',
        }}
      >
        <h1
          ref={titleRef}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(46px, 7.5vw, 84px)',
            fontWeight: 500,
            lineHeight: 1.08,
            letterSpacing: '-1px',
            marginBottom: '28px',
            color: 'var(--text-light)',
          }}
        >
          Waar koffie<br />een ritueel wordt
        </h1>

        <p
          ref={subtitleRef}
          style={{
            fontSize: '17px',
            fontWeight: 300,
            color: 'var(--text-muted)',
            marginBottom: '48px',
            lineHeight: 1.9,
            letterSpacing: '0.15px',
          }}
        >
          Specialty koffie, authentieke focaccia &amp; warme sfeer
          <br />
          Overtoom 95, Amsterdam
        </p>

        <div
          ref={buttonsRef}
          style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#menu"
            style={{
              padding: '15px 42px',
              background: 'var(--color-terracotta)',
              color: 'var(--color-warm-cream)',
              fontSize: '14px',
              fontWeight: 500,
              borderRadius: 'var(--border-radius)',
              letterSpacing: '0.3px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.84')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Bekijk ons menu
          </a>
          <a
            href="#location"
            style={{
              padding: '15px 42px',
              background: 'transparent',
              color: 'var(--color-warm-cream)',
              fontSize: '14px',
              fontWeight: 400,
              border: '1px solid rgba(245, 240, 232, 0.22)',
              borderRadius: 'var(--border-radius)',
              letterSpacing: '0.3px',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(245, 240, 232, 0.5)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(245, 240, 232, 0.22)')}
          >
            Vind ons
          </a>
        </div>
      </div>

      <div
        ref={scrollRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          color: 'var(--text-muted)',
        }}
      >
        <span style={{ fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '52px',
            background: 'linear-gradient(to bottom, rgba(245, 240, 232, 0.35), transparent)',
          }}
        />
      </div>
    </section>
  )
}
