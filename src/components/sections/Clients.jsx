import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronDown, ArrowUpRight } from 'lucide-react'

const clients = [
  {
    name: 'Medanta',
    full: 'Medanta The Medicity',
    industry: 'Healthcare',
    desc: 'Comprehensive security system for one of India\'s largest multi-speciality hospitals.',
  },
  {
    name: 'Umang Realtech',
    full: 'Umang Realtech Pvt. Ltd.',
    industry: 'Real Estate',
    desc: 'Integrated BMS and access control solutions across large residential & commercial properties.',
  },
  {
    name: 'Deer Smart India',
    full: 'Deer Smart India Pvt. Ltd.',
    industry: 'Technology',
    desc: 'End-to-end security and electrical systems deployed for modern tech facilities.',
  },
  {
    name: 'Howell Protection',
    full: 'Howell Protection Systems (India) Pvt. Ltd.',
    industry: 'Security',
    desc: 'Strategic partnership for advanced fire and security system deployments across India.',
  },
  {
    name: 'Rapid Innovation',
    full: 'Rapid Innovation',
    industry: 'Technology',
    desc: 'Smart surveillance and access control for an innovative technology workspace.',
  },
  {
    name: 'Think9 Retail',
    full: 'Think9 Retail Pvt. Ltd.',
    industry: 'Retail',
    desc: 'Multi-site CCTV and access control rollout across retail locations nationwide.',
  },
  {
    name: 'Vishal Megamart',
    full: 'Vishal Megamart',
    industry: 'Retail',
    desc: 'Large-scale surveillance and fire safety systems for a nationwide retail chain.',
  },
  {
    name: 'Genpact',
    full: 'Genpact',
    industry: 'Enterprise',
    desc: 'Enterprise-grade access control and building management for global operations.',
  },
  {
    name: 'Johnson Controls',
    full: 'Johnson Controls',
    industry: 'Engineering',
    desc: 'Strategic collaboration on building automation and integrated security solutions.',
  },
  {
    name: 'DLF',
    full: 'DLF Limited',
    industry: 'Real Estate',
    desc: 'Advanced security and BMS for premium commercial and residential developments.',
  },
  {
    name: 'L&T',
    full: 'Larsen & Toubro',
    industry: 'Engineering',
    desc: 'Electrical and security systems integration for large-scale infrastructure projects.',
  },
  {
    name: 'ATL Battery',
    full: 'ATL Battery Technology India Pvt. Ltd.',
    industry: 'Manufacturing',
    desc: 'Fire, CCTV, and access control systems for advanced manufacturing facilities.',
  },
]

const industries = ['All Industries', 'Healthcare', 'Real Estate', 'Retail', 'Technology', 'Engineering']

export default function Clients() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeFilter, setActiveFilter] = useState('All Industries')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <section id="clients" ref={ref} className="py-20 overflow-hidden" style={{ background: '#F8FAFF' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-[38px] md:text-[46px] font-bold tracking-tight text-slate-900 mb-3">
            Our Clients
          </h2>
          <p className="text-slate-500 text-[15px] max-w-md mx-auto leading-relaxed">
            We are proud of contributing to the success of India's leading organisations.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center gap-3 mb-8"
        >
          {/* Industry dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-600 text-[13px] font-medium shadow-sm hover:border-slate-300 transition-all duration-200"
            >
              {activeFilter}
              <span className="w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center ml-1">
                <ChevronDown size={11} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </span>
            </button>

            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-full left-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-20 py-1.5 min-w-[160px]"
              >
                {industries.map((ind) => (
                  <button
                    key={ind}
                    onClick={() => { setActiveFilter(ind); setDropdownOpen(false) }}
                    className={`w-full text-left px-4 py-2 text-[13px] transition-colors duration-150 ${
                      activeFilter === ind
                        ? 'text-[#0891B2] bg-[#4FC3F7]/8 font-semibold'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* Type pill (decorative, matching the image) */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-500 text-[13px] font-medium shadow-sm cursor-default">
            All Sectors
            <span className="w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center ml-1">
              <ChevronDown size={11} />
            </span>
          </button>
        </motion.div>

        {/* Client Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-md"
          onClick={() => dropdownOpen && setDropdownOpen(false)}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {clients.map((client, i) => {
              const isActive =
                activeFilter === 'All Industries' ||
                client.industry === activeFilter ||
                client.industry.toLowerCase().includes(activeFilter.toLowerCase())

              return (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + 0.04 * i }}
                  className={`relative group border-r border-b border-slate-100 min-h-[130px] flex flex-col items-center justify-center p-5 cursor-default overflow-hidden transition-all duration-300 ${
                    !isActive ? 'opacity-25 grayscale' : ''
                  }`}
                >
                  {/* Normal state */}
                  <div className="flex flex-col items-center text-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-95">
                    <span className="font-bold text-slate-800 text-[15px] leading-tight mb-2.5 tracking-tight">
                      {client.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                      {client.industry}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0891B2] to-[#0E7490] flex flex-col items-start justify-between p-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div>
                      <div className="text-white font-bold text-[13px] leading-snug mb-2">
                        {client.full}
                      </div>
                      <p className="text-white/75 text-[11px] leading-relaxed">
                        {client.desc}
                      </p>
                    </div>
                    <div className="flex items-center justify-between w-full mt-3">
                      <span className="text-white/50 text-[10px] font-mono tracking-widest uppercase">
                        {client.industry}
                      </span>
                      
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Bottom stat */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-8 mt-8"
        >
          <div className="text-center">
            <div className="text-[26px] font-bold text-slate-900">125+</div>
            <div className="text-[11px] text-slate-400 font-mono tracking-widest uppercase">Clients Worldwide</div>
          </div>
          <div className="w-px h-10 bg-slate-200" />
          <div className="text-center">
            <div className="text-[26px] font-bold text-slate-900">25+</div>
            <div className="text-[11px] text-slate-400 font-mono tracking-widest uppercase">Years of Trust</div>
          </div>
          <div className="w-px h-10 bg-slate-200" />
          <div className="text-center">
            <div className="text-[26px] font-bold text-slate-900">98%</div>
            <div className="text-[11px] text-slate-400 font-mono tracking-widest uppercase">Client Retention</div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
