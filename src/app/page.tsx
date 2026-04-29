import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import MenuHighlights from '@/components/MenuHighlights'
import FullMenu from '@/components/FullMenu'
import AtmosphereGallery from '@/components/AtmosphereGallery'
import HoursLocation from '@/components/HoursLocation'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <MenuHighlights />
      <FullMenu />
      <AtmosphereGallery />
      <HoursLocation />
      <Reviews />
      <Footer />
    </main>
  )
}
