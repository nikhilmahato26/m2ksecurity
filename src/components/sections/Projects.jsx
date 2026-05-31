import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Medanta Hospital — Multi-Zone Security',
    subtitle: 'Healthcare Security Infrastructure',
    tags: ['Access Control', 'CCTV', 'Fire Safety', 'BMS'],
    desc: 'Designed and deployed a comprehensive security infrastructure across Medanta The Medicity — covering 500+ access points, HD surveillance across all wards, and an integrated fire alarm and suppression system meeting hospital-grade compliance standards.',
    img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&q=80',
    year: '2024',
  },
  {
    title: 'Vishal Megamart — Nationwide CCTV Rollout',
    subtitle: 'Retail Chain Surveillance',
    tags: ['CCTV', 'Remote Monitoring', 'Retail'],
    desc: 'Executed a large-scale CCTV surveillance rollout across multiple Vishal Megamart retail locations nationwide. Centralized live monitoring, AI-powered motion detection, and remote access dashboards to manage all stores from a single operations center.',
    img: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?w=600&q=80',
    year: '2024',
  },
  {
    title: 'DLF Commercial Complex — Integrated BMS',
    subtitle: 'Building Management & Access Control',
    tags: ['BMS', 'Boom Barrier', 'Flap Barrier', 'Electrical'],
    desc: 'Delivered a full building management system integration for a DLF commercial complex — including automated HVAC control, flap barriers at pedestrian entry points, boom barriers at vehicle gates, and end-to-end electrical installation.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    year: '2023',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} className="py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg,#F8FAFF 0%,#EEF3FF 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#4FC3F7] font-mono text-[11px] tracking-[0.2em] mb-5 uppercase">— Our Work</p>
          <h2 className="text-[38px] md:text-[50px] font-bold leading-[1.1] tracking-tight text-slate-900">
            Featured{' '}
            <span className="font-serif italic text-[#4FC3F7]">Projects</span> That Matter.
          </h2>
          <p className="mt-4 text-slate-500 text-[14px] max-w-md mx-auto leading-[1.75]">
            A selection of deployments where our expertise has made premises safer,
            smarter, and more secure.
          </p>
        </motion.div>

        {/* Projects list */}
        <div className="space-y-4">
          {projects.map(({ title, subtitle, tags, desc, img, year }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i }}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#4FC3F7]/35 hover:bg-slate-50 transition-all duration-500 shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-72 h-52 md:h-auto overflow-hidden relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white z-10 hidden md:block" />
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Content */}
                <div className="p-7 md:p-9 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-[20px] text-slate-900 group-hover:text-[#4FC3F7] transition-colors duration-300 mb-1">
                          {title}
                        </h3>
                        <p className="text-slate-400 text-[13px]">{subtitle}</p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.12, rotate: 15 }}
                        className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-[#4FC3F7]/40 group-hover:text-[#4FC3F7] transition-all duration-300 cursor-pointer flex-shrink-0"
                      >
                        <ArrowUpRight size={15} />
                      </motion.div>
                    </div>
                    <p className="text-slate-500 text-[13px] leading-[1.7] mb-5">{desc}</p>
                    <div className="flex gap-2 flex-wrap">
                      {tags.map((t, ti) => (
                        <span key={ti} className="px-3 py-1 rounded-full text-[11px] border border-slate-200 text-slate-400 font-mono tracking-wide">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-5 pt-5 border-t border-slate-200 flex items-center justify-between">
                    <span className="font-mono text-[11px] text-slate-300">{year}</span>
                    <button className="text-[12px] text-[#4FC3F7] font-semibold hover:underline flex items-center gap-1">
                      View Project <ArrowUpRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
