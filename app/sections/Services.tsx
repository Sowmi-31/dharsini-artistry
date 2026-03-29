'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    id: 1,
    emoji: '💄',
    title: 'Makeup Artistry',
    description: 'Transform yourself with our professional makeup services for every occasion.',
    color: '#B76E79',
    bg: '#FFF0F3',
    services: ['Party Makeup', 'Bridal Makeup', 'Reception Look', 'Engagement Look'],
    price: 'Starting ₹1,500'
  },
  {
    id: 2,
    emoji: '🌿',
    title: 'Mehandi Design',
    description: 'Intricate and beautiful mehandi designs from traditional to contemporary.',
    color: '#2D6A4F',
    bg: '#F0FFF4',
    services: ['Half Hand', 'Full Hand', 'Both Hands', 'Bridal Mehandi'],
    price: 'Starting ₹300'
  },
  {
    id: 3,
    emoji: '🥻',
    title: 'Saree Pre-Pleating',
    description: 'Expert saree draping and pre-pleating for a flawless, elegant look.',
    color: '#9B2226',
    bg: '#FFF5F5',
    services: ['Simple Pleat', 'Designer Pleat', 'Bridal Draping', 'Party Style'],
    price: 'Starting ₹200'
  },
  {
    id: 4,
    emoji: '💍',
    title: 'Jewellery Rental',
    description: 'Premium jewellery rental for weddings, parties and special occasions.',
    color: '#D4AF37',
    bg: '#FFFBF0',
    services: ['Necklace Sets', 'Bridal Sets', 'Party Jewellery', 'Full Set Rental'],
    price: 'Starting ₹500'
  },
  {
    id: 5,
    emoji: '👰',
    title: 'Bridal Package',
    description: 'Complete bridal transformation package for your most special day.',
    color: '#722F37',
    bg: '#FFF0F3',
    services: ['Makeup + Mehandi', 'Saree Draping', 'Jewellery Rental', 'Full Package'],
    price: 'Starting ₹12,000'
  },
]

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#B76E79]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-[#B76E79] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            ✦ What We Offer ✦
          </p>
          <h2 className="text-5xl font-bold text-[#722F37] mb-4">Our Services</h2>
          <p className="text-[#3D1C02]/60 text-lg max-w-2xl mx-auto">
            Every service crafted with love, tradition and artistic excellence
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -12,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 group relative overflow-hidden"
            >
              {/* Background color on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
                style={{ backgroundColor: service.bg }}
              />

              <div className="relative z-10">
                {/* Emoji */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-5xl mb-4 inline-block"
                >
                  {service.emoji}
                </motion.div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: service.color }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#3D1C02]/60 mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Service list */}
                <ul className="space-y-2 mb-6">
                  {service.services.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#3D1C02]/70">
                      <span style={{ color: service.color }}>✦</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-lg font-bold"
                    style={{ color: service.color }}
                  >
                    {service.price}
                  </span>
                  <motion.a
                    href="#booking"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white text-sm px-4 py-2 rounded-full font-semibold"
                    style={{ backgroundColor: service.color }}
                  >
                    Book Now
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}