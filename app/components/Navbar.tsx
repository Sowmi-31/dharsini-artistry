'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-[#D4AF37]/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.a href="#home" whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
          <Image src="/logo.jpeg" alt="DH Makeover & Designs" width={55} height={55} className="rounded-full border-2 border-[#D4AF37]" />
          <div className="hidden sm:block">
            <p className="text-[#D4AF37] font-bold text-lg leading-none">DH Makeover</p>
            <p className="text-[#D4AF37]/70 text-xs tracking-[0.2em] uppercase">& Designs</p>
          </div>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, -1).map((link) => (
            <a key={link.name} href={link.href} className="text-sm text-white/80 hover:text-[#D4AF37] transition-colors font-medium tracking-wide">
              {link.name}
            </a>
          ))}
          <motion.a
            href="#booking"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D4AF37] text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#F0D060] transition-colors shadow-lg shadow-[#D4AF37]/30"
          >
            Book Now ✨
          </motion.a>
        </div>

        {/* Mobile */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#D4AF37]">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 border-t border-[#D4AF37]/20 px-6 py-4 space-y-4"
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className="block text-white/80 hover:text-[#D4AF37] font-medium py-2">
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}