import { motion } from 'framer-motion'

const partners = [
  'CrowdStrike', 'Palo Alto', 'UDIX', 'Fortinet', 'SentinelOne',
  'FireEye', 'Zscaler', 'Tenable', 'CrowdStrike', 'Palo Alto',
  'UDIX', 'Fortinet', 'SentinelOne', 'FireEye', 'Zscaler', 'Tenable',
]

export default function Partners() {
  return (
    <section className="border-y border-slate-200 py-14 overflow-hidden" style={{ backgroundColor: '#F0F5FF' }}>
      <div className="max-w-7xl mx-auto px-6 mb-7">
        <p className="text-slate-400 text-[11px] font-mono tracking-[0.2em] text-center uppercase">
          • Our Clients &amp; Partners
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F0F5FF] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F0F5FF] to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="marquee-track flex gap-10 items-center whitespace-nowrap">
            {partners.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-slate-200 bg-white text-slate-500 text-[12px] font-mono hover:text-slate-700 hover:border-[#4FC3F7]/35 transition-all duration-300 cursor-pointer shadow-sm"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#4FC3F7]/60 to-[#00E5FF]/30" />
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 flex justify-end">
        <div className="text-right">
          <div className="text-[22px] font-bold text-slate-900">125+</div>
          <div className="text-slate-400 text-[11px] font-mono tracking-widest uppercase">Clients Worldwide</div>
        </div>
      </div>
    </section>
  )
}
