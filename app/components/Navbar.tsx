'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'AI Recommender', href: '#recommender' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Book Now', href: '#booking' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#FDF8F0]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a href="#home" whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
          <Sparkles className="text-[#B76E79]" size={24} />
          <div>
            <p className="text-xl font-bold text-[#722F37] leading-none">Dharshu</p>
            <p className="text-xs tracking-[0.3em] text-[#B76E79] uppercase">Artistry</p>
          </div>
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, -1).map((link) => (
            <a key={link.name} href={link.href} className="text-sm text-[#3D1C02] hover:text-[#B76E79] transition-colors font-medium tracking-wide">
              {link.name}
            </a>
          ))}
          <motion.a href="#booking" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#B76E79] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#722F37] transition-colors shadow-lg">
            Book Now ✨
          </motion.a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#722F37]">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#FDF8F0] border-t border-[#F7E7CE] px-6 py-4 space-y-4"
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className="block text-[#3D1C02] hover:text-[#B76E79] font-medium py-2">
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}