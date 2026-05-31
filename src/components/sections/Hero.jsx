import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SplineScene } from '@/components/ui/spline-scene'
import { Spotlight } from '@/components/ui/spotlight'
import { Camera, Shield, Flame } from 'lucide-react'

const features = [
  { icon: Shield, label: 'Secure Your Premises' },
  { icon: Camera, label: '24/7 Surveillance' },
  { icon: Flame, label: 'Fire Safety Systems' },
]

const bottomLabels = ['ACCESS CONTROL', 'CCTV SURVEILLANCE', 'FIRE & SAFETY', 'BUILDING MANAGEMENT']

export default function Hero() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-hidden bg-[#F8FAFF]">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#4FC3F7" />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(79,195,247,0.12)_0%,transparent_70%)]" />

      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(79,195,247,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(79,195,247,0.08) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient orbs */}
      <div className="absolute top-24 left-8 w-64 h-64 rounded-full bg-[#4FC3F7]/8 blur-[80px] animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-24 right-8 w-80 h-80 rounded-full bg-[#00E5FF]/8 blur-[100px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-0 min-h-screen flex flex-col">
        <div className="flex flex-col lg:flex-row items-center flex-1 gap-0">

          {/* Left Text */}
          <div className="lg:w-1/2 z-10 py-12">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#4FC3F7]/35 bg-[#4FC3F7]/10 text-[#0891B2] text-[11px] font-mono tracking-widest mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-ping" />
              INTEGRATED SECURITY SOLUTIONS
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.2 }}
              className="text-[42px] md:text-[54px] xl:text-[62px] font-bold leading-[1.08] mb-6 tracking-tight text-slate-900"
            >
              Integrated{' '}
              <span className="font-serif italic text-[#4FC3F7]">Security</span>
              <br />
              <span className="font-serif italic text-[#4FC3F7]">Solutions For</span>
              <br />
              A Safer Tomorrow.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-slate-500 text-[14px] leading-[1.75] max-w-[420px] mb-8"
            >
              M2K Security delivers end-to-end physical security systems — from access control
              and CCTV surveillance to fire safety and building management — protecting
              businesses and premises across India.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-5 mb-9"
            >
              {features.map(({ icon: Icon, label }, i) => (
                <div key={label} className={`flex items-center gap-2 text-[13px] text-slate-500 ${i < features.length - 1 ? 'pr-5 border-r border-slate-200' : ''}`}>
                  <Icon size={13} className="text-[#4FC3F7]" />
                  {label}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-3"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, boxShadow: '0 0 35px rgba(0,229,255,0.45)' }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 rounded-full bg-gradient-to-r from-[#4FC3F7] to-[#00E5FF] text-[#0F172A] font-bold text-[14px] flex items-center gap-2 shadow-[0_0_25px_rgba(79,195,247,0.3)]"
              >
                Get a Free Quote <span className="text-base leading-none">›</span>
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.04, borderColor: 'rgba(79,195,247,0.5)', color: '#0F172A' }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 rounded-full border border-slate-300 text-slate-600 font-semibold text-[14px] flex items-center gap-2 hover:bg-slate-50 transition-all duration-300"
              >
                Our Services <span className="text-base leading-none">›</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right: 3D Scene */}
          <div className="h-[480px] lg:h-[580px] relative -mx-6 lg:mx-0 w-[calc(100%+3rem)] lg:w-1/2">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Bottom label bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="border-t border-slate-200 grid grid-cols-2 md:grid-cols-5 divide-x divide-slate-200"
        >
          <div className="py-4 px-5 flex items-center gap-2 text-[10px] font-mono text-slate-400 tracking-widest">
            SCROLL DOWN <span className="text-[#4FC3F7]/70">↓</span>
          </div>
          {bottomLabels.map((item) => (
            <div key={item} className="py-4 px-5 text-[10px] font-mono text-slate-400 tracking-widest text-center hidden md:block">
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
