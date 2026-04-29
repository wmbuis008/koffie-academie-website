# CLAUDE.md — Koffie Academie Website

Instructies voor Claude Code bij het werken in deze map.

## Project

Next.js 16 website voor **Koffie Academie**, een Italiaans-gerund koffiehuis op Overtoom 95, Amsterdam. Gebouwd vanuit een Claude Design export (`eerste-test-run/Koffie Academie.html`).

## Dev-server starten

```bash
cd "Koffie.Accademie.Website"
npm run dev
# Open http://localhost:3000
```

## Architectuur

```
src/
├── app/
│   ├── layout.tsx       # Root layout, metadata
│   ├── page.tsx         # Samenstelling van alle secties
│   └── globals.css      # CSS-variabelen, reset, responsive utilities
└── components/
    ├── Navigation.tsx   # Sticky nav, transparant → blur bij scroll
    ├── Hero.tsx         # Full-screen hero met café-afbeelding
    ├── About.tsx        # Split layout: tekst links, foto rechts
    ├── MenuHighlights.tsx  # 4-koloms grid van 8 menu-items
    ├── AtmosphereGallery.tsx  # 3-koloms galerij (6 kleurgradiënten)
    ├── HoursLocation.tsx   # Openingstijden + Google Maps embed
    ├── Reviews.tsx      # 3 Google-reviews
    └── Footer.tsx       # 4-koloms footer
public/
└── images/
    └── cafe-interior.png  # Echte café-foto (hero + about sectie)
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
| `--font-serif` | Playfair Display (koppen) |
| `--font-sans` | Inter (bodytekst) |

## Animaties (GSAP)

Alle animaties zijn subtiel en cinematografisch — geen bounce of flash.

- **Load:** Navigation slideDown, Hero titel/subtitle/knoppen fade-up in sequence
- **Scroll:** ScrollTrigger op elke sectie — fade/slide vanuit richting die past bij layout
- Registreer `ScrollTrigger` altijd met `gsap.registerPlugin(ScrollTrigger)` in `useEffect`
- Gebruik `gsap.context()` met `.revert()` cleanup om memory leaks te voorkomen

## Inhoud

- **Naam:** Koffie Academie
- **Adres:** Overtoom 95, 1054 HD Amsterdam
- **Telefoon:** 020-370-7981
- **Openingstijden:** Ma–Vr 08:30–16:00 · Za–Zo 09:00–17:00
- **Beoordeling:** 4,7 ★ · 936 Google-reviews
- **Eigendom:** Italiaans · Est. 2019

## Git-workflow

Commit en push na elke betekenisvolle wijziging:

```bash
git add <bestanden>
git commit -m "Beschrijving in het Nederlands"
git push
```

## Taal

Variabelenamen in het Engels (TypeScript conventie), commentaar en commit-berichten in het **Nederlands**.
