import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Compass, Package, Wrench, Headphones } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MapPin,
    title: 'Site Survey',
    desc: 'Our engineers visit your premises to assess vulnerabilities, map entry points, and understand your specific security requirements.',
    color: '#4FC3F7',
  },
  {
    num: '02',
    icon: Compass,
    title: 'Custom Design',
    desc: 'We create a tailored security system blueprint — selecting the right technologies and layout for your building type and risk profile.',
    color: '#7C3AED',
  },
  {
    num: '03',
    icon: Package,
    title: 'Supply & Sourcing',
    desc: 'Top-brand equipment is procured from trusted OEM partners at competitive prices without compromising on compliance or quality.',
    color: '#059669',
  },
  {
    num: '04',
    icon: Wrench,
    title: 'Installation & Testing',
    desc: 'Certified engineers deploy every system with precision and run comprehensive tests before handover to ensure zero snags.',
    color: '#D97706',
  },
  {
    num: '05',
    icon: Headphones,
    title: 'AMC & Support',
    desc: 'Annual maintenance contracts and 24/7 technical support keep your systems running flawlessly long after installation.',
    color: '#0891B2',
  },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg,#F8FAFF 0%,#EEF3FF 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[#4FC3F7] font-mono text-[11px] tracking-[0.2em] mb-4 uppercase">— How We Work</p>
          <h2 className="text-[38px] md:text-[50px] font-bold leading-[1.1] tracking-tight text-slate-900">
            From Survey To Support —{' '}
            <span className="font-serif italic text-[#4FC3F7]">Our Process.</span>
          </h2>
          <p className="mt-4 text-slate-500 text-[14px] max-w-md mx-auto leading-[1.75]">
            A structured five-step delivery model that ensures every project is completed on time, within budget, and to the highest standard.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] border-t-2 border-dashed border-slate-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map(({ num, icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Circle */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${color}22, ${color}10)`,
                    border: `2px solid ${color}50`,
                    boxShadow: `0 8px 24px ${color}25`,
                  }}
                >
                  <Icon size={22} style={{ color }} />
                </div>

                {/* Step number */}
                <span
                  className="font-mono text-[11px] font-bold tracking-[0.15em] mb-3"
                  style={{ color }}
                >
                  STEP {num}
                </span>

                {/* Title */}
                <h3 className="font-bold text-[16px] text-slate-900 mb-3 leading-snug">
                  {title}
                </h3>

                {/* Desc */}
                <p className="text-slate-500 text-[13px] leading-[1.7]">{desc}</p>

                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden w-px h-8 border-l-2 border-dashed border-slate-200 mt-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 rounded-2xl bg-gradient-to-r from-[#0891B2] to-[#4FC3F7] p-px shadow-lg"
        >
          <div className="rounded-2xl bg-white px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <h4 className="font-bold text-[20px] text-slate-900 mb-1">Ready to secure your premises?</h4>
              <p className="text-slate-500 text-[14px]">Get a free site survey and consultation from our certified engineers.</p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 px-8 py-3 rounded-full bg-gradient-to-r from-[#4FC3F7] to-[#00E5FF] text-[#0F172A] font-bold text-[14px] shadow-[0_0_20px_rgba(79,195,247,0.3)] hover:shadow-[0_0_35px_rgba(79,195,247,0.5)] transition-all duration-300"
            >
              Book a Free Survey ›
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
