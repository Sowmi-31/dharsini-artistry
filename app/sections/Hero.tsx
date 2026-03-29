'use client'
import { motion } from 'framer-motion'
import { Star, ArrowDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-black relative overflow-hidden">

      {/* Gold particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { left: '10%', top: '20%', size: '10px', duration: 5, delay: 0 },
          { left: '80%', top: '15%', size: '8px', duration: 7, delay: 1 },
          { left: '25%', top: '70%', size: '12px', duration: 6, delay: 2 },
          { left: '60%', top: '80%', size: '7px', duration: 8, delay: 0.5 },
          { left: '45%', top: '10%', size: '9px', duration: 5, delay: 1.5 },
          { left: '90%', top: '50%', size: '11px', duration: 7, delay: 3 },
          { left: '5%', top: '60%', size: '8px', duration: 6, delay: 2.5 },
          { left: '70%', top: '40%', size: '10px', duration: 9, delay: 1 },
          { left: '35%', top: '85%', size: '7px', duration: 5, delay: 0 },
          { left: '55%', top: '30%', size: '12px', duration: 8, delay: 2 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            className="absolute text-[#D4AF37]"
            style={{ left: particle.left, top: particle.top, fontSize: particle.size }}
            animate={{ y: [0, -30, 0], opacity: [0.05, 0.3, 0.05] }}
            transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      {/* Gold glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, #D4AF3710 0%, transparent 65%)' }} />

      {/* Content — full height with padding top for navbar */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 w-full gap-6 min-h-screen" style={{ paddingTop: '80px' }}>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: 'spring' }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-[#D4AF37]/20 blur-2xl scale-125" />
          <Image
            src="/logo.jpeg"
            alt="DH Makeover & Designs"
            width={150}
            height={150}
            className="rounded-full border-2 border-[#D4AF37]/60 relative z-10"
          />
        </motion.div>

        {/* Brand name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-1"
        >
          <h1 className="text-5xl md:text-7xl font-bold gold-text leading-tight">
            DH Makeover
          </h1>
          <p className="text-white/50 text-lg md:text-xl tracking-[0.5em] uppercase font-light">
            & Designs
          </p>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-4 w-full max-w-xs">
          <div className="flex-1 h-px bg-[#D4AF37]/30" />
          <span className="text-[#D4AF37]">✦</span>
          <div className="flex-1 h-px bg-[#D4AF37]/30" />
        </div>

        {/* Tagline */}
        <p className="text-[#D4AF37]/60 text-xs md:text-sm tracking-[0.4em] uppercase font-light">
          Beauty &nbsp;·&nbsp; Style &nbsp;·&nbsp; Elegance
        </p>

        {/* Services */}
        <div className="flex flex-wrap justify-center gap-2">
          {['💄 Makeup', '🌿 Mehandi', '🥻 Saree Draping', '💍 Jewellery', '👰 Bridal'].map((service) => (
            <span key={service} className="border border-[#D4AF37]/20 text-[#D4AF37]/60 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase font-medium hover:border-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors">
              {service}
            </span>
          ))}
        </div>

        {/* Stars */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-[#D4AF37] text-[#D4AF37]" />
            ))}
          </div>
          <p className="text-white/30 text-xs tracking-widest uppercase">500+ Happy Clients · Salem, Tamil Nadu</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            href="#booking"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D4AF37] text-black px-10 py-3.5 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg shadow-[#D4AF37]/20 hover:bg-[#F0D060] transition-all"
          >
            Book Appointment
          </motion.a>
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-[#D4AF37]/40 text-[#D4AF37] px-10 py-3.5 rounded-full text-sm font-bold tracking-widest uppercase hover:border-[#D4AF37] transition-all"
          >
            View Our Work
          </motion.a>
        </div>

        {/* Scroll */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-[#D4AF37]/30" size={22} />
        </motion.div>

      </div>
    </section>
  )
}