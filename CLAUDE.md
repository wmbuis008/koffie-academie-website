# CLAUDE.md — Koffie Academie Website

Instructies voor Claude Code bij het werken in deze map.

## Project

Next.js 16 website voor **Koffie Academie**, een Italiaans-gerund koffiehuis op Overtoom 95, Amsterdam.

## Dev-server starten

```bash
npm run dev
# Open http://localhost:3000
```

## GitHub

Repository: **https://github.com/wmbuis008/koffie-academie-website**

```bash
git add <bestanden>
git commit -m "Beschrijving in het Nederlands"
git push
```

## Architectuur

```
src/
├── app/
│   ├── layout.tsx            # Root layout, metadata
│   ├── page.tsx              # Samenstelling van alle secties
│   └── globals.css           # CSS-variabelen, reset, responsive utilities
└── components/
    ├── Navigation.tsx        # Sticky nav met KA-logo; transparant → blur bij scroll
    ├── Hero.tsx              # Full-screen hero met café-afbeelding + GSAP timeline
    ├── About.tsx             # Split layout: tekst links, foto rechts
    ├── MenuHighlights.tsx    # 8 echte menu-items in 4-koloms grid; link → #volledig-menu
    ├── FullMenu.tsx          # Volledig menu met tab-navigatie (5 categorieën)
    ├── AtmosphereGallery.tsx # 3-koloms galerij met 6 echte foto's + ScrollTrigger
    ├── HoursLocation.tsx     # Openingstijden + Google Maps embed
    ├── Reviews.tsx           # 3 Google-reviews
    └── Footer.tsx            # 4-koloms footer
public/
├── images/
│   └── cafe-interior.png         # Hero + About achtergrond
└── afbeeldingen/                 # Galerij- en navbarfoto's
    ├── coffee-beans.jpg
    ├── latte-croissant.jpg
    ├── latte-pastries.jpg
    ├── bakery-display.jpg
    ├── aeropress-man.jpg
    ├── iced-coffee.jpg
    └── ka-logo.png               # Cirkellogo in navbar (36×36px)
```

## Paginavolgorde

```
Navigation → Hero → About → MenuHighlights → FullMenu → AtmosphereGallery → HoursLocation → Reviews → Footer
```

## FullMenu — categorieën & structuur

Component op `id="volledig-menu"` (donkere achtergrond). Tabbladen:

| Tab | Inhoud |
|-----|--------|
| Dinner | 12 gerechten, €8.50–€14.50 |
| Borrel Bites | 12 hapjes incl. K.A. Platter €17 |
| Extras | 7 toevoegingen, €2.50–€4.50 |
| Cocktails | 13 cocktails, €8–€18 |
| Spirits | 3 groepen: Vodka/Gin/Rum · Whiskey/Bourbon · Other |

Dietaire badges: `V` (vegetarisch), `🌱 Vegan`, `GF` (glutenvrij).  
Tab-overgang: CSS opacity fade (140ms). Itemnamen in `var(--font-serif)`.

## AtmosphereGallery — foto-volgorde

Warm → koel, geen tekst-overlays:

1. `coffee-beans.jpg`
2. `latte-croissant.jpg`
3. `latte-pastries.jpg`
4. `bakery-display.jpg`
5. `aeropress-man.jpg`
6. `iced-coffee.jpg`

GSAP ScrollTrigger: scale `0.92 → 1.0`, duration `0.7s`, stagger `0.15s`, ease `power2.out`.  
Hover: `scale(1.03)` op inner wrapper, CSS transition `0.4s ease`.

## Navigation — logo

```tsx
<Image
  src="/afbeeldingen/ka-logo.png"
  width={36} height={36}
  style={{ borderRadius: '50%', objectFit: 'cover', mixBlendMode: 'multiply' }}
/>
```

## Design systeem

| Token | Waarde |
|-------|--------|
| `--color-deep-black` | `#1a1a1a` |
| `--color-warm-cream` | `#f5f0e8` |
| `--color-terracotta` | `#c4683a` (primaire accentkleur) |
| `--color-wood-brown` | `#8b5e3c` |
| `--color-dark-gray` | `#2a2a2a` |
| `--color-soft-white` | `#faf8f4` |
| `--font-serif` | Playfair Display (koppen + menu-itemnamen) |
| `--font-sans` | Inter (bodytekst) |

## Animaties (GSAP)

Alle animaties zijn subtiel en cinematografisch — geen bounce of flash.

- **Load:** Navigation slideDown, Hero titel/subtitle/knoppen fade-up in sequence
- **Scroll:** ScrollTrigger op elke sectie — fade/slide vanuit richting die past bij layout
- Registreer `ScrollTrigger` altijd met `gsap.registerPlugin(ScrollTrigger)` in `useEffect`
- Gebruik `gsap.context()` met `.revert()` cleanup om memory leaks te voorkomen

## Bedrijfsinfo

- **Naam:** Koffie Academie
- **Adres:** Overtoom 95, 1054 HD Amsterdam
- **Telefoon:** 020-370-7981
- **Openingstijden:** Ma–Vr 08:30–16:00 · Za–Zo 09:00–17:00
- **Beoordeling:** 4,7 ★ · 936 Google-reviews
- **Eigendom:** Italiaans · Est. 2019

## Taal

Variabelenamen in het Engels (TypeScript conventie), commentaar en commit-berichten in het **Nederlands**.
