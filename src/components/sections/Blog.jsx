import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const posts = [
  {
    date: 'March 12, 2024',
    tag: 'Access Control',
    title: 'Why Every Commercial Building Needs a Modern Access Control System in 2024.',
    desc: 'Traditional lock-and-key systems are no longer sufficient for modern enterprises. We explore how biometric and RFID-based access control reduces risk, tracks entry logs, and enables remote management — all from a single dashboard.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    date: 'January 8, 2024',
    tag: 'Fire Safety',
    title: 'Understanding NBC Compliance for Fire Safety Systems in India.',
    desc: 'The National Building Code sets strict requirements for fire detection and suppression. This guide breaks down what is required for commercial buildings, hospitals, and manufacturing units — and how M2K Security ensures full compliance.',
    img: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&q=80',
  },
]

export default function Blog() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg,#EEF3FF 0%,#F8FAFF 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <p className="text-[#4FC3F7] font-mono text-[11px] tracking-[0.2em] mb-5 uppercase">— Insights</p>
            <h2 className="text-[38px] font-bold tracking-tight text-slate-900">
              Latest <span className="font-serif italic text-[#4FC3F7]">Articles</span>
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-1.5 text-[13px] text-slate-400 hover:text-[#4FC3F7] transition-colors duration-300">
            View All <ArrowUpRight size={13} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map(({ date, tag, title, desc, img }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 * i }}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#4FC3F7]/30 hover:bg-slate-50 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-md"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#4FC3F7]/15 border border-[#4FC3F7]/25 text-[#0891B2] text-[11px] font-mono tracking-wide">
                  {tag}
                </span>
              </div>
              <div className="p-7">
                <div className="text-[11px] text-slate-400 font-mono mb-3">{date}</div>
                <h3 className="font-bold text-[18px] leading-snug mb-3 text-slate-900 group-hover:text-[#4FC3F7] transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-slate-500 text-[13px] leading-[1.7]">{desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
