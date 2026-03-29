import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import AIRecommender from './sections/AIRecommender'
import Booking from './sections/Booking'
import Reviews from './sections/Reviews'
import Footer from './sections/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <AIRecommender />
      <Booking />
      <Reviews />
      <Footer />
    </main>
  )
}