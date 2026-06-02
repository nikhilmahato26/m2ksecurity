import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Fingerprint, Flame, LayoutDashboard, Droplets, BellRing,
  Camera, Car, Shield, UserCheck, Zap, ChevronRight,
} from 'lucide-react'

const services = [
  {
    num: '01',
    icon: Fingerprint,
    title: 'Access Control System',
    short: 'Smart authentication for sensitive areas',
    color: '#4FC3F7',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmg0hDw0pqXSgV5nSTlloAfhRmT12iTVFyg&s',
  },
  {
    num: '02',
    icon: Flame,
    title: 'Fire Alarm System',
    short: 'Early detection of smoke, heat, and gas',
    color: '#FF6B35',
    image: 'https://images.pexels.com/photos/31470430/pexels-photo-31470430.jpeg',
  },
  {
    num: '03',
    icon: LayoutDashboard,
    title: 'Building Management System',
    short: 'Centralized control of all building systems',
    color: '#7C3AED',
    image: 'https://sycoraxtech.com/es/wp-content/uploads/2024/02/bms-768x576-1.jpg',
  },
  {
    num: '04',
    icon: Droplets,
    title: 'Firefighting System',
    short: 'Complete fire suppression solutions',
    color: '#0891B2',
    image: 'https://bristol-fire.com/wp-content/uploads/2024/08/Foam-Suppression-Systems.jpg',
  },
  {
    num: '05',
    icon: BellRing,
    title: 'Intruder Alarm System',
    short: '24/7 perimeter and interior detection',
    color: '#DC2626',
    image: 'https://londoncityfire.co.uk/wp-content/uploads/2020/08/Intruder-Alarm-Installations.jpg',
  },
  {
    num: '06',
    icon: Camera,
    title: 'CCTV Surveillance',
    short: 'HD cameras for every environment',
    color: '#059669',
    image: 'https://fudsinternational.com/cdn/shop/articles/CCTV_Camera_Features_blog.jpg?v=1751460982&width=1100',
  },
  {
    num: '07',
    icon: Car,
    title: 'Boom Barrier',
    short: 'Automated vehicle access control',
    color: '#D97706',
    image: 'https://nihva.com/wp-content/uploads/2025/06/automatic-boom-barrier-gate-system.jpg',
  },
  {
    num: '08',
    icon: Shield,
    title: 'Bollard System',
    short: 'High-strength vehicle intrusion prevention',
    color: '#7C3AED',
    image: 'https://smartpower.co.in/wp-content/uploads/2022/09/p333-730.jpg',
  },
  {
    num: '09',
    icon: UserCheck,
    title: 'Flap Barrier',
    short: 'Elegant pedestrian lane management',
    color: '#0284C7',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/4/CZ/SM/EL/2711683/flap-barrier-gate-500x500.jpg',
  },
  {
    num: '10',
    icon: Zap,
    title: 'Electrical Systems',
    short: 'End-to-end electrical design & installation',
    color: '#CA8A04',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=80',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg,#EEF3FF 0%,#F8FAFF 100%)' }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(79,195,247,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(79,195,247,0.06) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#4FC3F7] font-mono text-[11px] tracking-[0.2em] mb-4 uppercase">— Our Services</p>
            <h2 className="text-[38px] md:text-[50px] font-bold leading-[1.1] tracking-tight text-slate-900">
              Safeguarding{' '}
              <span className="font-serif italic text-[#4FC3F7]">Your</span>
              <br />
              <span className="font-serif italic text-[#4FC3F7]">Digital &amp; Physical</span> Assets.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 md:mt-0 text-slate-500 text-[14px] max-w-[260px] leading-[1.75]"
          >
            Comprehensive security and building management solutions for modern enterprises.
          </motion.p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map(({ num, icon: Icon, title, short, color, image }, i) => (
            <motion.a
              key={num}
              href="#contact"
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + 0.06 * i, ease: [0.23, 1, 0.32, 1] }}
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-slate-100 flex-shrink-0">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover  group-hover:scale-105 transition-all duration-500"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                {/* Service number — top right */}
                <span
                  className="absolute top-3 right-3 font-mono text-[11px] font-bold px-2 py-1 rounded-lg"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(8px)',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  {num}
                </span>

                {/* Icon badge — bottom left, overlapping image */}
                <div
                  className="absolute bottom-3 left-3 w-9 h-9 rounded-xl flex items-center justify-center shadow-lg"
                  style={{
                    background: 'rgba(255,255,255,0.92)',
                    backdropFilter: 'blur(8px)',
                    border: `1px solid ${color}40`,
                  }}
                >
                  <Icon size={16} style={{ color }} />
                </div>
              </div>

              {/* Body */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-[13.5px] font-semibold text-slate-900 leading-snug mb-1.5">
                  {title}
                </h3>
                <p className="text-[12px] text-slate-400 leading-[1.65] flex-1">
                  {short}
                </p>

                {/* CTA row */}
                <div className="mt-4 flex items-center justify-between">
                  <div
                    className="h-[2px] w-8 rounded-full transition-all duration-300 group-hover:w-14"
                    style={{ background: color }}
                  />
                  <span
                    className="flex items-center gap-1 text-[11px] font-semibold transition-all duration-200"
                    style={{ color }}
                  >
                    Get a Quote
                    <ChevronRight
                      size={12}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="h-[3px] w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
