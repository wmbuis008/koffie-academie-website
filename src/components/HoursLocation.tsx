'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const hours = [
  { day: 'Maandag – Vrijdag', time: '08:30 – 16:00' },
  { day: 'Zaterdag – Zondag', time: '09:00 – 17:00' },
]

const services = ['✓ Ter plaatse eten', '✓ Afhalen', '✗ Bezorging']

export default function HoursLocation() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        [leftRef.current, rightRef.current],
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.18,
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
      id="hours"
      ref={sectionRef}
      className="section-padding"
      style={{
        background: 'var(--color-dark-gray)',
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
        }}
      >
        {/* Openingstijden */}
        <div ref={leftRef} style={{ color: 'var(--text-light)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 3vw, 40px)',
              fontWeight: 500,
              marginBottom: '40px',
              letterSpacing: '-0.3px',
            }}
          >
            Openingstijden
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              marginBottom: '44px',
            }}
          >
            {hours.map(({ day, time }) => (
              <div
                key={day}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingBottom: '20px',
                  borderBottom: '1px solid rgba(245, 240, 232, 0.08)',
                }}
              >
                <span style={{ fontSize: '16px', opacity: 0.72 }}>{day}</span>
                <span style={{ fontSize: '16px', fontWeight: 500 }}>{time}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {services.map((s) => (
              <span
                key={s}
                style={{
                  fontSize: '13px',
                  opacity: 0.55,
                  letterSpacing: '0.15px',
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Locatie */}
        <div ref={rightRef} id="location" style={{ color: 'var(--text-light)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 3vw, 40px)',
              fontWeight: 500,
              marginBottom: '24px',
              letterSpacing: '-0.3px',
            }}
          >
            Locatie
          </h2>

          <address
            style={{
              fontStyle: 'normal',
              fontSize: '17px',
              lineHeight: 1.85,
              opacity: 0.72,
              marginBottom: '32px',
            }}
          >
            Overtoom 95<br />
            1054 HD Amsterdam<br />
            <a
              href="tel:+31203707981"
              style={{ color: 'inherit', transition: 'opacity 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.72')}
            >
              +31 20 370 7981
            </a><br />
            <a
              href="mailto:overtoom@koffie-academie.nl"
              style={{ color: 'inherit', transition: 'opacity 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.72')}
            >
              overtoom@koffie-academie.nl
            </a>
          </address>

          <div
            style={{
              width: '100%',
              height: '280px',
              borderRadius: 'var(--border-radius-lg)',
              overflow: 'hidden',
              marginBottom: '18px',
              filter: 'grayscale(100%) invert(92%) contrast(83%)',
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d623729.4625161872!2d3.6551986781249908!3d52.36238300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609e6a5c3de89%3A0xf39b9e8bb7c46e94!2sKoffie%20Academie!5e0!3m2!1snl!2s!4v1777478506644!5m2!1snl!2s"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Koffie Academie locatie"
            />
          </div>

          <a
            href="https://maps.google.com/?q=Koffie+Academie,+Overtoom+95,+Amsterdam"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--color-terracotta)',
              letterSpacing: '0.2px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.78')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Routebeschrijving →
          </a>
        </div>
      </div>
    </section>
  )
}
