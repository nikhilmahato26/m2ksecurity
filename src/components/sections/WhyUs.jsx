import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const points = [
  'End-to-End Installation & Commissioning',
  'Annual Maintenance Contracts (AMC)',
  'Multi-Brand Product Expertise',
  'Certified & Trained Engineers',
  '24/7 Service Support',
  'Turnkey Project Delivery',
]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg,#EEF3FF 0%,#F8FAFF 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="relative h-[500px]"
          >
            {/* Main large image */}
            <div className="absolute top-0 left-0 right-14 bottom-14 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"
                alt="Security installation team"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFF]/60 to-transparent" />
            </div>

            {/* Small overlay image */}
            <div className="absolute bottom-0 right-0 w-44 h-36 rounded-2xl overflow-hidden border border-[#4FC3F7]/25 shadow-[0_0_30px_rgba(79,195,247,0.15)]">
              <img
                src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1780297531/Bitdefender_B2__Your_Cyber_Safety_Net____In_a_world_full_of_digital_threats_protection_isn_t_optional_it_s_essential____Bitdefender_d_rw3l6r.jpg"
                alt="Access control panel"
                className="w-full h-full object-cover "
              />
              <div className="absolute inset-0 bg-[#00E5FF]/5" />
            </div>

            {/* Stats overlay — Installations */}
            <div className="absolute top-5 right-0 bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl px-5 py-4 text-center shadow-md">
              <div className="text-[28px] font-bold text-slate-900 leading-none">500<span className="text-[#4FC3F7]">+</span></div>
              <div className="text-[10px] text-slate-400 font-mono mt-1 tracking-widest">INSTALLATIONS</div>
            </div>

            {/* Stats overlay — States */}
            <div className="absolute bottom-20 left-4 bg-white/90 backdrop-blur-md border border-[#4FC3F7]/20 rounded-2xl px-5 py-4 shadow-md">
              <div className="text-[10px] text-slate-400 font-mono mb-1.5 tracking-widest">PAN INDIA PRESENCE</div>
              <div className="text-[22px] font-bold text-[#4FC3F7] leading-none">15+ States</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="text-[#4FC3F7] font-mono text-[11px] tracking-[0.2em] mb-5 uppercase">— Why M2K Security</p>
            <h2 className="text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-tight mb-6 text-slate-900">
              M2K Security Is The{' '}
              <span className="font-serif italic text-[#4FC3F7]">Trusted Choice</span>
              <br />
              For{' '}
              <span className="font-serif italic text-[#4FC3F7]">Complete Security.</span>
            </h2>
            <p className="text-slate-500 text-[14px] leading-[1.75] mb-9">
              With over 25 years of field experience, our certified engineers deliver
              turnkey security solutions — from initial design and supply to installation,
              commissioning, and long-term annual maintenance.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
              {points.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + 0.06 * i }}
                  className="flex items-center gap-2.5 text-[13px] text-slate-600"
                >
                  <CheckCircle2 size={14} className="text-[#4FC3F7] flex-shrink-0" />
                  {p}
                </motion.div>
              ))}
            </div>

            <blockquote className="border-l-2 border-[#4FC3F7]/30 pl-5 text-slate-500 text-[13px] italic leading-[1.75]">
              "From access control and CCTV to fire suppression and building automation,
              M2K Security provides a single point of accountability for all your physical
              security needs — ensuring compliance, safety, and peace of mind at every
              level of your organisation."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
