'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

type Tab = 'dinner' | 'borrel' | 'extras' | 'cocktails' | 'spirits'

const FADE_DURATION_MS = 140

const tabs: { id: Tab; label: string }[] = [
  { id: 'dinner',    label: 'Dinner' },
  { id: 'borrel',    label: 'Borrel Bites' },
  { id: 'extras',    label: 'Extras' },
  { id: 'cocktails', label: 'Cocktails' },
  { id: 'spirits',   label: 'Spirits' },
]

interface MenuItem {
  name: string
  description?: string
  price: string
  variant?: string
  tags?: ('V' | 'VEGAN' | 'GF')[]
}

const dinner: MenuItem[] = [
  { name: 'Poached eggs on toast',     description: 'With a side salad',                                                                       price: '€8.50',  tags: ['V'] },
  { name: 'Smashed avocado',           description: 'With marinated feta on sourdough',                                                         price: '€8.50',  tags: ['V'] },
  { name: 'BLT',                       description: 'On a brioche bun',                                                                          price: '€9.50' },
  { name: "Burrito 'Con Carne'",       description: 'Tortilla wrap with chilli con carne, rice, cheddar cheese and garlic dip',                  price: '€9.50' },
  { name: "Burrito 'Sin Carne'",       description: 'Tortilla wrap with chilli sin carne, rice, cheddar cheese and garlic dip',                  price: '€9.50',  tags: ['V'] },
  { name: 'Yum-Cha Waffle',            description: 'Savoury waffle, soy glazed mushroom and fried egg',                                         price: '€10.50' },
  { name: 'Vegan Waffle',              description: 'Cinnamon raisin waffle with apple compote and shaved almonds',                              price: '€10.50', tags: ['VEGAN'] },
  { name: 'Huevos Avocados',           description: 'Toasted brioche, avocado, poached eggs, tomato relish, spinach and fennel salad',           price: '€10.50', tags: ['V'] },
  { name: 'Eggs Benedict',             description: '2 poached eggs, ham, brioche, Hollandaise and a side salad',                                price: '€10.50', variant: '+ Salmon — €13.50' },
  { name: 'Flat Bread Pizza Style',    description: 'Flatbread, Bechamel, truffle, mozzarella and truffle potato',                               price: '€10.50', variant: '+ Bacon — €13.50', tags: ['V'] },
  { name: 'Caesar Salad',              description: 'Egg, romaine lettuce, parmesan and sourdough croutons',                                     price: '€11.50', variant: '+ Chicken €13.50  ·  + Salmon €14.50', tags: ['V'] },
  { name: 'Quinoa Salad',              description: 'Quinoa, pumpkin, papadum and dukkah',                                                       price: '€12.50', tags: ['VEGAN', 'GF'] },
]

const borrel: MenuItem[] = [
  { name: 'Olives',                   price: '€3.50' },
  { name: 'Nuts',                     price: '€3.50' },
  { name: 'Olives & Nuts',            price: '€6.00' },
  { name: 'Fries',                    price: '€4.50' },
  { name: 'K.A. Fries',              description: 'With truffle mayo & parmesan',     price: '€6.50', tags: ['V'] },
  { name: 'Jalapeño Cheese Poppers', description: 'With homemade chilli sauce',        price: '€6.70' },
  { name: 'Veggie Gyoza',            description: 'With homemade chilli sauce',        price: '€6.50', tags: ['V'] },
  { name: 'Bitterballen',            description: 'With Dutch mustard',               price: '€6.70' },
  { name: 'Vegan Bitterballen',      description: 'With Dutch mustard',               price: '€7.50', tags: ['VEGAN'] },
  { name: "Dutch 'Kaas Stengel'",    description: 'With Dutch mustard',               price: '€7.20', tags: ['V'] },
  { name: 'Bread & Spread',          description: 'Selection of breads and spreads',  price: '€7.00' },
  { name: 'K.A. Platter',           description: 'A little bit of everything and more', price: '€17.00' },
]

const extras: MenuItem[] = [
  { name: 'Bread',         price: '€2.50' },
  { name: 'Chicken',       price: '€3.00' },
  { name: 'Bacon',         price: '€3.00' },
  { name: 'Salmon',        price: '€3.50' },
  { name: 'Half avocado',  price: '€2.50' },
  { name: 'Fries',         price: '€4.50' },
  { name: 'Side salad',    price: '€3.50' },
]

const cocktails: MenuItem[] = [
  { name: 'Amaretto Sour',       description: 'Disaronno, Bourbon, Egg white, Lemon',                                    price: '€9.00' },
  { name: 'Old Fashioned',       description: 'Bourbon, orange bitters, sugar',                                           price: '€10.00' },
  { name: 'Cosmopolitan',        description: 'Ketel One Vodka, Cointreau, Lime, Cranberry',                              price: '€9.00' },
  { name: 'Apple Daiquiri',      description: 'Havana Club 3yr, Sour Apple, Lime',                                        price: '€9.00' },
  { name: "Tommy's Margarita",   description: 'Tequila, Mezcal, Lime, Vanilla',                                           price: '€10.00' },
  { name: 'Dark & Stormy',       description: 'Spiced Rum, Lime, Ginger beer',                                            price: '€8.00' },
  { name: 'Moscow Mule',         description: 'Ketel One Vodka, Lime, Ginger beer',                                       price: '€8.00' },
  { name: 'Tom Collins',         description: 'Tanqueray, Lemon, Soda, Sugar',                                            price: '€10.00' },
  { name: 'Long Island Iced Tea',description: 'Rum, Gin, Vodka, Triple Sec, Tequila, Lemon, Lime, Coca Cola',             price: '€9.50' },
  { name: 'Bloody Mary',         description: 'Ketel One Vodka, Tomato Juice, Lemon, Worcestershire, Tabasco',            price: '€8.50' },
  { name: 'G&T Red',             description: 'Tanqueray, Tonic, Crème de Cassis, Red Fruit, Mint',                       price: '€9.50' },
  { name: 'G&T Black',           description: 'Hendricks, Tonic, Crème de Violet, Lime, Orange zest',                    price: '€9.50' },
  { name: 'Aperol Spritz for 2', description: 'DIY-Kit with Cava & Soda',                                                 price: '€18.00' },
]

const spiritsGroups: { title: string; items: { name: string; price: string }[] }[] = [
  {
    title: 'Vodka · Gin · Rum',
    items: [
      { name: 'Ketel One Vodka',      price: '€4.00' },
      { name: 'Tanqueray',            price: '€4.00' },
      { name: 'Hendricks',            price: '€6.00' },
      { name: 'Havana Club 3yr',      price: '€4.00' },
      { name: 'Havana Club Especial', price: '€4.50' },
      { name: 'Havana Club 7yr',      price: '€5.00' },
      { name: 'Union 55',             price: '€5.00' },
      { name: 'Sailor Jerry',         price: '€4.50' },
      { name: 'Bundaberg Rum',        price: '€6.00' },
    ],
  },
  {
    title: 'Whiskey · Bourbon · Tequila · Cognac',
    items: [
      { name: 'Jack Daniels',          price: '€4.50' },
      { name: 'Jack Daniels Honey',    price: '€4.50' },
      { name: 'Bulleit Bourbon',       price: '€5.00' },
      { name: 'Johnnie Walker Black',  price: '€6.00' },
      { name: 'Chivas 12yr',           price: '€6.50' },
      { name: 'Talisker 10',           price: '€6.00' },
      { name: 'Martell VS',            price: '€6.00' },
      { name: 'Jose Cuervo Blanco',    price: '€4.00' },
      { name: 'Corralejo Blanco',      price: '€5.00' },
      { name: 'Corralejo Reposado',    price: '€6.00' },
    ],
  },
  {
    title: 'Other',
    items: [
      { name: 'Mezcal Vida',   price: '€7.00' },
      { name: 'Cointreau',     price: '€4.00' },
      { name: 'Disaronno',     price: '€4.00' },
      { name: "Bailey's",      price: '€4.00' },
      { name: 'Licor 43',      price: '€4.00' },
      { name: 'Malibu',        price: '€4.00' },
      { name: 'Sambuca',       price: '€4.00' },
      { name: 'Jonge Jenever', price: '€3.50' },
      { name: 'Aperol',        price: '€4.00' },
      { name: 'Campari',       price: '€4.00' },
    ],
  },
]

function Badge({ type }: { type: 'V' | 'VEGAN' | 'GF' }) {
  const config = {
    V:     { label: 'V',        bg: 'rgba(90,170,122,0.15)', color: '#6bbf8a', border: 'rgba(90,170,122,0.35)' },
    VEGAN: { label: '🌱 Vegan', bg: 'rgba(90,170,122,0.15)', color: '#6bbf8a', border: 'rgba(90,170,122,0.35)' },
    GF:    { label: 'GF',       bg: 'rgba(106,160,196,0.15)', color: '#7aa8cc', border: 'rgba(106,160,196,0.35)' },
  }[type]

  return (
    <span style={{
      display: 'inline-block',
      padding: '2px 7px',
      borderRadius: '3px',
      fontSize: '10px',
      fontWeight: 600,
      letterSpacing: '0.06em',
      background: config.bg,
      color: config.color,
      border: `1px solid ${config.border}`,
    }}>
      {config.label}
    </span>
  )
}

function MenuRow({ item }: { item: MenuItem }) {
  return (
    <div style={{ padding: '15px 0', borderBottom: '1px solid rgba(245,240,232,0.07)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1.5rem' }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', fontWeight: 600, color: 'var(--text-light)' }}>
          {item.name}
        </span>
        <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-terracotta)', whiteSpace: 'nowrap', flexShrink: 0 }}>
          {item.price}
        </span>
      </div>
      {item.description && (
        <p style={{ fontSize: '13px', color: 'rgba(245,240,232,0.48)', marginTop: '3px', lineHeight: 1.55 }}>
          {item.description}
        </p>
      )}
      {item.tags && item.tags.length > 0 && (
        <div style={{ display: 'flex', gap: '5px', marginTop: '6px', flexWrap: 'wrap' }}>
          {item.tags.map(tag => <Badge key={tag} type={tag} />)}
        </div>
      )}
      {item.variant && (
        <p style={{ fontSize: '12px', color: 'rgba(245,240,232,0.35)', marginTop: '4px', fontStyle: 'italic' }}>
          {item.variant}
        </p>
      )}
    </div>
  )
}

export default function FullMenu() {
  const [activeTab, setActiveTab] = useState<Tab>('dinner')
  const [visible, setVisible] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  const handleTabChange = (tab: Tab) => {
    if (tab === activeTab) return
    setVisible(false)
    setTimeout(() => {
      setActiveTab(tab)
      setVisible(true)
    }, FADE_DURATION_MS)
  }

  const contentMap: Record<Tab, React.ReactNode> = {
    dinner:    dinner.map((item) => <MenuRow key={item.name} item={item} />),
    borrel:    borrel.map((item) => <MenuRow key={item.name} item={item} />),
    extras: (
      <div className="menu-inner-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0 3rem' }}>
        {extras.map((item) => <MenuRow key={item.name} item={item} />)}
      </div>
    ),
    cocktails: cocktails.map((item) => <MenuRow key={item.name} item={item} />),
    spirits: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {spiritsGroups.map((group) => (
          <div key={group.title}>
            <p style={{
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-terracotta)',
              marginBottom: '4px',
              paddingBottom: '10px',
              borderBottom: '1px solid rgba(245,240,232,0.1)',
            }}>
              {group.title}
            </p>
            <div className="menu-inner-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0 3rem' }}>
              {group.items.map((item) => (
                <div key={item.name} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(245,240,232,0.07)',
                  gap: '1rem',
                }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', fontWeight: 600, color: 'var(--text-light)' }}>{item.name}</span>
                  <span style={{ fontSize: '13px', color: 'var(--color-terracotta)', whiteSpace: 'nowrap', flexShrink: 0 }}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  }

  return (
    <section
      id="volledig-menu"
      ref={sectionRef}
      className="section-padding"
      style={{ background: 'var(--color-deep-black)' }}
    >
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>

        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(30px, 4vw, 50px)',
            fontWeight: 500,
            color: 'var(--text-light)',
            marginBottom: '12px',
            letterSpacing: '-0.3px',
          }}>
            Volledig Menu
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: 300 }}>
            Overtoom 95, Amsterdam
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Menu categorieën"
          style={{
            display: 'flex',
            borderBottom: '1px solid rgba(245,240,232,0.1)',
            marginBottom: '8px',
            overflowX: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          {tabs.map(tab => (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => handleTabChange(tab.id)}
              style={{
                flex: '0 0 auto',
                padding: '12px 22px',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab.id
                  ? '2px solid var(--color-terracotta)'
                  : '2px solid transparent',
                color: activeTab === tab.id
                  ? 'var(--color-terracotta)'
                  : 'rgba(245,240,232,0.45)',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'color 0.18s, border-color 0.18s',
                marginBottom: '-1px',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id)
                  (e.currentTarget as HTMLElement).style.color = 'rgba(245,240,232,0.8)'
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id)
                  (e.currentTarget as HTMLElement).style.color = 'rgba(245,240,232,0.45)'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          padding: '14px 0 24px',
          fontSize: '11px',
          color: 'rgba(245,240,232,0.35)',
          flexWrap: 'wrap',
        }}>
          <Badge type="V" /> Vegetarian
          <Badge type="VEGAN" />
          <Badge type="GF" /> Gluten-free
        </div>

        <div
          ref={contentRef}
          role="tabpanel"
          id={`panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          style={{
            opacity: visible ? 1 : 0,
            transition: `opacity ${FADE_DURATION_MS}ms ease`,
          }}
        >
          {contentMap[activeTab]}
        </div>

      </div>
    </section>
  )
}
