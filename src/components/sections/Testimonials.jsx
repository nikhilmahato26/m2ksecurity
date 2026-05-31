import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajiv Sharma',
    role: 'Facility Head, Medanta The Medicity',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
    rating: 5,
    text: 'M2K Security delivered a flawless multi-zone CCTV and access control system across our hospital. Their team handled the complexity of a live healthcare environment with zero disruption to operations.',
  },
  {
    name: 'Priya Nair',
    role: 'Operations Director, Vishal Megamart',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
    rating: 5,
    text: 'The nationwide CCTV rollout was executed professionally. We now have centralized visibility across all our stores with real-time alerts. The AMC support team is always responsive.',
  },
  {
    name: 'Amit Kapoor',
    role: 'Project Manager, DLF Limited',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9e5c5d7?w=80&q=80',
    rating: 5,
    text: 'From boom barriers at the vehicle entry to flap barriers at pedestrian gates and a full BMS integration — M2K handled everything seamlessly. A true turnkey partner.',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg,#F8FAFF 0%,#EEF3FF 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#4FC3F7] font-mono text-[11px] tracking-[0.2em] mb-5 uppercase">• Testimonials</p>
            <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.15] tracking-tight text-slate-900">
              Trusted By India's Leading
              <br />
              Organisations — Their Words,{' '}
              <span className="font-serif italic text-[#4FC3F7]">Our Pride.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 md:mt-0 flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-5 py-3.5 self-start md:self-auto shadow-sm"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4FC3F7] to-[#00E5FF] flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(79,195,247,0.3)]">
              <span className="text-[#0F172A] font-bold text-[13px]">G</span>
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="text-[13px] font-bold text-slate-900">4.9/5</div>
              <div className="text-[11px] text-slate-400">Based on 48 reviews</div>
            </div>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map(({ name, role, avatar, rating, text }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i }}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#4FC3F7]/30 hover:bg-slate-50 transition-all duration-500 group flex flex-col shadow-sm hover:shadow-md"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(rating)].map((_, i) => (
                  <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                ))}
                <span className="ml-1 text-slate-400 text-[11px] font-mono">{rating}.0</span>
              </div>

              <p className="text-slate-500 text-[13px] leading-[1.75] mb-6 italic flex-1">"{text}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <img
                  src={avatar}
                  alt={name}
                  className="w-9 h-9 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 flex-shrink-0"
                />
                <div>
                  <div className="font-semibold text-[13px] text-slate-900">{name}</div>
                  <div className="text-[11px] text-slate-400">{role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
