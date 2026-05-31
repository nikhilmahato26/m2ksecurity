import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Fingerprint, Flame, LayoutDashboard, Droplets, BellRing,
  Camera, Car, Shield, UserCheck, Zap, Check, ChevronRight,
} from 'lucide-react'

const services = [
  {
    num: '01',
    icon: Fingerprint,
    title: 'Access Control System',
    short: 'Smart authentication for sensitive areas',
    desc: 'Restrict and monitor entry to sensitive areas with smart authentication. Scalable from a single door to complex multi-site enterprise deployments with full remote management.',
    bullets: [
      'Biometric, RFID, keycard & mobile access',
      'Real-time logs and remote management',
      'Central dashboard control',
      'Scalable for multi-site enterprise deployments',
    ],
    color: '#4FC3F7',
  },
  {
    num: '02',
    icon: Flame,
    title: 'Fire Alarm System',
    short: 'Early detection of smoke, heat, and gas',
    desc: 'Early detection of smoke, heat, and gas with intelligent sensors providing instant alerts to occupants and emergency response teams, fully compliant with national safety standards.',
    bullets: [
      'Intelligent smoke, heat & gas sensors',
      'Instant alerts to occupants & emergency teams',
      'Compliant with national fire safety standards',
      'Integrated with BMS for automated evacuation',
    ],
    color: '#FF6B35',
  },
  {
    num: '03',
    icon: LayoutDashboard,
    title: 'Building Management System',
    short: 'Centralized control of all building systems',
    desc: 'Centralized monitoring and control of every building system from a single pane of glass. Optimize energy across HVAC, lighting, and power while automating critical workflows.',
    bullets: [
      'Real-time dashboards with alerts & logs',
      'Optimize energy across HVAC & lighting',
      'Automated workflows and scheduling',
      'Seamless integration with fire & security',
    ],
    color: '#7C3AED',
  },
  {
    num: '04',
    icon: Droplets,
    title: 'Firefighting System',
    short: 'Complete fire suppression solutions',
    desc: 'Complete fire suppression solutions including sprinklers, hydrants, and hose reels. Specialized gas suppression systems for server rooms and sensitive zones built to NBC norms.',
    bullets: [
      'Sprinklers, hydrants & hose reels',
      'FM200 / CO₂ gas suppression for server rooms',
      'Designed per NBC & local fire authority norms',
      'Regular AMC and inspection services',
    ],
    color: '#0891B2',
  },
  {
    num: '05',
    icon: BellRing,
    title: 'Intruder Alarm System',
    short: '24/7 perimeter and interior detection',
    desc: '24/7 perimeter and interior intrusion detection with motion sensors, door contacts, and glass break detectors. Tamper-proof with backup power for continuous protection.',
    bullets: [
      'Motion sensors, door & glass break detectors',
      'Instant alerts via SMS, app & monitoring station',
      'Tamper-proof design with backup power',
      'Central monitoring station integration',
    ],
    color: '#DC2626',
  },
  {
    num: '06',
    icon: Camera,
    title: 'CCTV Surveillance',
    short: 'HD cameras for every environment',
    desc: 'High-definition cameras for indoor, outdoor, and low-light environments with centralized recording and AI-powered analytics for proactive threat detection.',
    bullets: [
      'HD cameras for indoor, outdoor & low-light',
      'Remote live viewing via mobile or web',
      'AI-powered motion detection & face recognition',
      'Scalable from small offices to large campuses',
    ],
    color: '#059669',
  },
  {
    num: '07',
    icon: Car,
    title: 'Boom Barrier',
    short: 'Automated vehicle access control',
    desc: 'Automated vehicle access control for parking lots and gated premises. Fast operation with smooth cycles and integration with ANPR, access cards, and intercom systems.',
    bullets: [
      'Fast smooth open/close cycles',
      'Integrates with ANPR & access cards',
      'Intercom system compatibility',
      'Durable for high-traffic commercial sites',
    ],
    color: '#D97706',
  },
  {
    num: '08',
    icon: Shield,
    title: 'Bollard System',
    short: 'High-strength vehicle intrusion prevention',
    desc: 'High-strength fixed or retractable bollards for vehicle intrusion prevention, protecting pedestrian zones, building entrances, and critical infrastructure.',
    bullets: [
      'Fixed or retractable variants available',
      'Protects pedestrian zones & building entrances',
      'Manual, semi-automatic & fully automated',
      'Crash-rated for high-security installations',
    ],
    color: '#7C3AED',
  },
  {
    num: '09',
    icon: UserCheck,
    title: 'Flap Barrier',
    short: 'Elegant pedestrian lane management',
    desc: 'Elegant pedestrian lane management for offices, metro stations, and gyms. Bi-directional flow control with anti-tailgating intelligence and a sleek stainless steel finish.',
    bullets: [
      'Single or bi-directional flow control',
      'Integrates with cards, biometrics & QR codes',
      'Anti-tailgating intelligence built-in',
      'Sleek stainless steel finish',
    ],
    color: '#0284C7',
  },
  {
    num: '10',
    icon: Zap,
    title: 'Electrical Systems',
    short: 'End-to-end electrical design & installation',
    desc: 'End-to-end electrical design, supply, and installation including power distribution, DB setup, earthing, and cable management compliant with IE rules and IS standards.',
    bullets: [
      'Power distribution & DB setup',
      'UPS, DG integration & energy metering',
      'Earthing & professional cable management',
      'Compliant with IE rules & IS standards',
    ],
    color: '#CA8A04',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)

  const ActiveIcon = services[active].icon
  const activeColor = services[active].color

  return (
    <section id="services" ref={ref} className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg,#EEF3FF 0%,#F8FAFF 100%)' }}>
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(79,195,247,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(79,195,247,0.06) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#4FC3F7] font-mono text-[11px] tracking-[0.2em] mb-4 uppercase">— Our Services</p>
            <h2 className="text-[38px] md:text-[50px] font-bold leading-[1.1] tracking-tight text-slate-900">
              Safeguarding{' '}
              <span className="font-serif italic text-[#4FC3F7]">Your</span>
              <br />
              <span className="font-serif italic text-[#4FC3F7]">Digital &amp; Physical</span> Assets.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 md:mt-0 text-slate-500 text-[14px] max-w-[260px] leading-[1.75]"
          >
            Comprehensive security and building management solutions for modern enterprises.
          </motion.p>
        </div>

        {/* Interactive Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col lg:grid lg:grid-cols-[5fr_7fr] gap-4 lg:gap-8"
        >
          {/* Left: Service list */}
          <div className="space-y-1">
            {services.map(({ num, icon: Icon, title, short, color }, i) => (
              <motion.button
                key={num}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.35 + 0.04 * i }}
                className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-left transition-all duration-300 group ${
                  active === i
                    ? 'bg-white border border-slate-200 shadow-md'
                    : 'border border-transparent hover:bg-white/70 hover:border-slate-200'
                }`}
              >
                {/* Icon */}
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={{
                    background: active === i ? `${color}18` : '#F1F5F9',
                    boxShadow: active === i ? `0 0 14px ${color}30` : 'none',
                  }}
                >
                  <Icon
                    size={16}
                    style={{ color: active === i ? color : '#94A3B8' }}
                    className="transition-colors duration-300"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div
                    className="font-semibold text-[13px] leading-snug transition-colors duration-200"
                    style={{ color: active === i ? '#0F172A' : '#475569' }}
                  >
                    {title}
                  </div>
                  <div className="text-[11px] text-slate-400 truncate mt-0.5">{short}</div>
                </div>

                {/* Number + chevron */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className="font-mono text-[10px] text-slate-300">{num}</span>
                  <ChevronRight
                    size={13}
                    className="transition-all duration-300"
                    style={{ color: active === i ? color : '#CBD5E1', transform: active === i ? 'translateX(2px)' : 'none' }}
                  />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right: Detail Panel */}
          <div className="lg:sticky lg:top-24 h-fit">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg overflow-hidden relative"
              >
                {/* Background accent */}
                <div
                  className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-10 pointer-events-none"
                  style={{ background: activeColor }}
                />
                <div
                  className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full blur-[60px] opacity-8 pointer-events-none"
                  style={{ background: activeColor }}
                />

                {/* Icon + Number */}
                <div className="flex items-start justify-between mb-6 relative">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${activeColor}22, ${activeColor}10)`,
                      border: `1px solid ${activeColor}30`,
                      boxShadow: `0 8px 32px ${activeColor}25`,
                    }}
                  >
                    <ActiveIcon size={30} style={{ color: activeColor }} />
                  </div>
                  <span className="font-mono text-[40px] font-bold leading-none" style={{ color: `${activeColor}15` }}>
                    {services[active].num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[24px] font-bold text-slate-900 mb-3 leading-snug relative">
                  {services[active].title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-[14px] leading-[1.75] mb-6 relative">
                  {services[active].desc}
                </p>

                {/* Divider */}
                <div className="h-px mb-6 relative" style={{ background: `linear-gradient(90deg, ${activeColor}40, transparent)` }} />

                {/* Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative">
                  {services[active].bullets.map((b, i) => (
                    <motion.div
                      key={b}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 * i }}
                      className="flex items-start gap-2.5"
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${activeColor}15`, border: `1px solid ${activeColor}30` }}
                      >
                        <Check size={10} style={{ color: activeColor }} />
                      </div>
                      <span className="text-[13px] text-slate-600 leading-snug">{b}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between relative"
                >
                  <span className="text-[12px] text-slate-400 font-mono">SERVICE {services[active].num} / 10</span>
                  <a
                    href="#contact"
                    className="flex items-center gap-1.5 text-[13px] font-semibold transition-all duration-200 hover:gap-2.5"
                    style={{ color: activeColor }}
                  >
                    Get a Quote <ChevronRight size={14} />
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
