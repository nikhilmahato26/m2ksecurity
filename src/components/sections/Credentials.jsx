import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BadgeCheck, MapPin, Building2, Calendar, FileCheck, Star } from 'lucide-react'

const credentialCards = [
  {
    icon: BadgeCheck,
    label: 'GST Identification Number',
    value: '08FVLPR5768H1ZO',
    sub: 'Government Verified · Regular Registration',
    color: '#059669',
    bg: '#05966912',
  },
  {
    icon: Calendar,
    label: 'GST Registered Since',
    value: 'October 2023',
    sub: 'Rajasthan Goods & Services Tax Act, 2017',
    color: '#0891B2',
    bg: '#0891B212',
  },
  {
    icon: Building2,
    label: 'Constitution of Business',
    value: 'Proprietorship',
    sub: 'Single-owner registered entity',
    color: '#7C3AED',
    bg: '#7C3AED12',
  },
  {
    icon: MapPin,
    label: 'Registered Address',
    value: 'Sanchod, Alwar',
    sub: 'Bawal Road, Alwar, Rajasthan — 301401',
    color: '#D97706',
    bg: '#D9770612',
  },
]

export default function Credentials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg,#EEF3FF 0%,#F8FAFF 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#4FC3F7] font-mono text-[11px] tracking-[0.2em] mb-4 uppercase">— The Person Behind It</p>
          <h2 className="text-[38px] md:text-[50px] font-bold leading-[1.1] tracking-tight text-slate-900">
            Our Founder &{' '}
            <span className="font-serif italic text-[#4FC3F7]">Business</span>
            <br />
            <span className="font-serif italic text-[#4FC3F7]">Credentials.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[5fr_7fr] gap-6 items-start">

          {/* Left: Founder card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.23, 1, 0.32, 1] }}
            className="rounded-2xl overflow-hidden shadow-lg border border-slate-200"
          >
            {/* Gradient header */}
            <div className="relative bg-gradient-to-br from-[#0891B2] via-[#4FC3F7] to-[#00C5E0] px-8 pt-10 pb-16">
              {/* Decorative circles */}
              <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white/5 blur-xl" />
              <div className="absolute bottom-0 left-8 w-20 h-20 rounded-full bg-white/5 blur-lg" />

              {/* Avatar */}
              <div className="relative w-24 h-24 rounded-2xl bg-white/20 border-2 border-white/40 flex items-center justify-center mb-5 shadow-lg backdrop-blur-sm">
                <span className="text-[40px] font-bold text-white leading-none">R</span>
                <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-emerald-400 border-2 border-white flex items-center justify-center">
                  <BadgeCheck size={13} className="text-white" />
                </div>
              </div>

              <h3 className="text-[28px] font-bold text-white leading-tight mb-1">Rahul</h3>
              <p className="text-white/75 text-[14px] font-medium">Founder &amp; Proprietor</p>
              <p className="text-white/55 text-[12px] font-mono mt-1 tracking-wide">M2K Security Solutions</p>
            </div>

            {/* Pull down card overlap */}
            <div className="relative -mt-8 mx-5 bg-white rounded-xl border border-slate-200 shadow-md px-6 py-5 mb-0">
              <div className="flex items-center gap-2 mb-3">
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
                <span className="text-[11px] text-slate-400 font-mono ml-1">Verified Proprietor</span>
              </div>
              <p className="text-slate-600 text-[13px] leading-[1.75] italic">
                "M2K Security Solutions was built on a simple belief — every premises deserves
                reliable, professionally installed security. We bring that commitment to every
                project, from a single CCTV camera to a full enterprise security deployment."
              </p>
            </div>

            {/* Footer details */}
            <div className="bg-white px-8 py-5 mt-0 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div>
                <div className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mb-1">Trade Name</div>
                <div className="text-[13px] font-semibold text-slate-800">M2K Security Solutions</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mb-1">Entity Type</div>
                <div className="text-[13px] font-semibold text-slate-800">Proprietorship</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mb-1">State</div>
                <div className="text-[13px] font-semibold text-slate-800">Rajasthan</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mb-1">GST Status</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <div className="text-[13px] font-semibold text-emerald-600">Active</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Credential cards grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {credentialCards.map(({ icon: Icon, label, value, sub, color, bg }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + 0.1 * i }}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#4FC3F7]/30 transition-all duration-300 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: bg, border: `1px solid ${color}25` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <div className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mb-2">{label}</div>
                <div className="font-bold text-[18px] text-slate-900 mb-1.5 leading-snug">{value}</div>
                <div className="text-[12px] text-slate-400 leading-snug">{sub}</div>
              </motion.div>
            ))}

            {/* GST Verification banner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="sm:col-span-2 rounded-2xl p-px shadow-sm"
              style={{ background: 'linear-gradient(135deg, #059669, #4FC3F7)' }}
            >
              <div className="bg-white rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                    <FileCheck size={22} className="text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-bold text-[15px] text-slate-900 mb-0.5">Government Verified Business</div>
                    <div className="text-[12px] text-slate-500">Registered under the Rajasthan Goods &amp; Services Tax Act, 2017. Certificate issued 11 Dec 2023.</div>
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[12px] font-semibold text-emerald-700 font-mono">GSTIN Active</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
