import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const clients = [
  {
    name: 'Medanta Hospital',
    location: 'Gurugram',
    industry: 'Healthcare',
    image: 'https://upload.wikimedia.org/wikipedia/en/6/68/Medanta_the_medicity_hospital.jpg',
  },
  {
    name: 'DLF Limited',
    location: 'Gurugram',
    industry: 'Real Estate',
    image: 'https://media.assettype.com/outlookbusiness/2025-08-04/iol0co28/ABC.avif?w=801&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0',
  },
  {
    name: 'Genpact',
    location: 'Gurugram',
    industry: 'Enterprise',
    image: 'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/6383477f72c61_process-developer-s2p.jpg?d=700x400',
  },
  {
    name: 'Johnson Controls',
    location: 'Pan India',
    industry: 'Engineering',
    image: 'https://www.coolingpost.com/wp-content/uploads/2024/06/JC-Hitachi-770x501.jpg',
  },
  {
    name: 'Larsen & Toubro',
    location: 'Pan India',
    industry: 'Engineering',
    image: 'https://www.lntecc.com/media/xoujl255/l-t-construction.jpg',
  },
  {
    name: 'Vishal Megamart',
    location: 'Pan India',
    industry: 'Retail',
    image: 'https://cms-resources.groww.in/uploads/TAX_SLAB_2025_06_17_T114550_211_11zon_2dc02dc76f.jpg',
  },
  {
    name: 'Umang Realtech',
    location: 'Gurugram',
    industry: 'Real Estate',
    image: 'https://housing-images.n7net.in/4f2250e8/1fde6b5326126a4e3f124cbcaccbd6b3/v0/medium/umang_monsoon_breeze_phase_2-sector_78-gurgaon-umang_realtech.jpeg',
  },
  {
    name: 'Think9 Retail',
    location: 'Pan India',
    industry: 'Retail',
    image: 'https://content.jdmagicbox.com/v2/comp/mumbai/y2/022pxx22.xx22.230113100622.l8y2/catalogue/think9-consumer-technologies-pvt-ltd-worli-mumbai-investment-companies-s5mrcpjm1a.jpg',
  },
  {
    name: 'Howell Protection',
    location: 'Pan India',
    industry: 'Security',
    image: 'https://www.howell.co.in/common/uploaded_files/service_logo/troble_1415448536.png',
  },
  {
    name: 'Deer Smart India',
    location: 'Delhi NCR',
    industry: 'Technology',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrGaV6bNXPU4b9ZCshjVczNuIaUYGOLldCjg&s',
  },
  {
    name: 'Rapid Innovation',
    location: 'Delhi NCR',
    industry: 'Technology',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    name: 'ATL Battery Technology',
    location: 'Pan India',
    industry: 'Manufacturing',
    image: 'https://www.atlbattery.com/static/images/contact/1.jpg',
  },
]

const VISIBLE = 3
const totalPages = Math.ceil(clients.length / VISIBLE)

export default function Clients() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (dir) => {
    setDirection(dir)
    setPage((p) => Math.min(Math.max(p + dir, 0), totalPages - 1))
  }

  const visible = clients.slice(page * VISIBLE, page * VISIBLE + VISIBLE)

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -80 : 80 }),
  }

  return (
    <section
      id="clients"
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80)',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-900/82 backdrop-blur-[2px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-[#4FC3F7] font-mono text-[11px] tracking-[0.25em] uppercase mb-3">
            — Trusted By
          </p>
          <h2 className="text-white text-[36px] md:text-[46px] font-bold tracking-tight">
            Featured Clients
          </h2>
        </motion.div>

        {/* Carousel wrapper */}
        <div className="relative flex items-center gap-4">

          {/* Prev arrow */}
          <button
            onClick={() => go(-1)}
            disabled={page === 0}
            className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Cards */}
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {visible.map((client) => (
                  <div
                    key={client.name}
                    className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden bg-slate-200">
                      <img
                        src={client.image}
                        alt={client.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Industry pill on image */}
                      <span className="absolute top-3 left-3 text-[10px] font-mono font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white border border-white/20">
                        {client.industry}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="px-5 py-4 text-center">
                      <h3 className="text-slate-900 font-bold text-[15px] leading-snug mb-0.5">
                        {client.name}
                      </h3>
                      <p className="text-slate-400 text-[12px] mb-4">
                        ( {client.location} )
                      </p>
                      <a
                        href="#contact"
                        className="inline-block w-full bg-slate-800 hover:bg-slate-700 text-white text-[13px] font-semibold py-2.5 rounded-xl transition-colors duration-200"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next arrow */}
          <button
            onClick={() => go(1)}
            disabled={page === totalPages - 1}
            className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > page ? 1 : -1); setPage(i) }}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === page ? '28px' : '8px',
                background: i === page ? '#4FC3F7' : 'rgba(255,255,255,0.3)',
              }}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-10 mt-12"
        >
          {[
            { val: '125+', label: 'Clients Served' },
            { val: '25+', label: 'Years of Trust' },
            { val: '98%', label: 'Client Retention' },
          ].map(({ val, label }, i) => (
            <div key={label} className="flex items-center gap-10">
              {i > 0 && <div className="w-px h-10 bg-white/15" />}
              <div className="text-center">
                <div className="text-[26px] font-bold text-white leading-none">{val}</div>
                <div className="text-[10px] text-white/45 font-mono tracking-widest uppercase mt-1">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
