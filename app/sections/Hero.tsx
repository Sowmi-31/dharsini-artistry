'use client'
import { motion } from 'framer-motion'
import { Sparkles, Star, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-[#FDF8F0] via-[#F7E7CE] to-[#FDF8F0] flex items-center justify-center relative overflow-hidden">
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#B76E79] opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center px-6 z-10 max-w-4xl mx-auto">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-[#B76E79]/10 border border-[#B76E79]/30 px-4 py-2 rounded-full mb-8"
        >
          <Sparkles size={14} className="text-[#B76E79]" />
          <span className="text-sm text-[#722F37] font-medium tracking-wider uppercase">Salem's Premier Beauty Artist</span>
          <Sparkles size={14} className="text-[#B76E79]" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-4 leading-none"
        >
          <span className="text-[#722F37]">Dharshu</span>
          <br />
          <span className="gold-text">Artistry</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-[#3D1C02]/70 mb-4 font-light italic"
        >
          Where Beauty Meets Tradition
        </motion.p>

        {/* Services Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {['💄 Makeup', '🌿 Mehandi', '🥻 Saree Draping', '💍 Jewellery', '👰 Bridal'].map((service) => (
            <span key={service} className="bg-white/70 backdrop-blur-sm border border-[#B76E79]/30 text-[#722F37] px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
              {service}
            </span>
          ))}
        </motion.div>

        {/* Stars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-1 mb-8"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className="fill-[#D4AF37] text-[#D4AF37]" />
          ))}
          <span className="text-[#3D1C02]/60 text-sm ml-2">500+ Happy Clients</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#booking"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#B76E79] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-[#722F37] transition-colors"
          >
            Book Your Appointment ✨
          </motion.a>
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/70 backdrop-blur-sm border-2 border-[#B76E79] text-[#B76E79] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#B76E79] hover:text-white transition-colors"
          >
            View Portfolio 📸
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-16 flex justify-center"
        >
          <ArrowDown className="text-[#B76E79] opacity-50" size={28} />
        </motion.div>
      </div>
    </section>
  )
}