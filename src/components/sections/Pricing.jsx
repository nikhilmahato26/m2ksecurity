import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Essential Plan',
    price: { monthly: 25000, yearly: 270000 },
    badge: 'Most Popular',
    badgeColor: '#4FC3F7',
    features: [
      'CCTV Surveillance (up to 16 cameras)',
      'Basic Access Control System',
      'Fire Alarm System',
      'On-site Installation & Commissioning',
      'Remote Monitoring Setup',
      '1-Year Warranty on Equipment',
    ],
  },
  {
    name: 'Enterprise Plan',
    price: { monthly: 75000, yearly: 810000 },
    badge: 'Full Suite',
    badgeColor: '#00C5E0',
    features: [
      'Everything in Essential',
      'Building Management System (BMS)',
      'Boom Barrier & Bollard Systems',
      'Flap Barrier & Pedestrian Control',
      'Firefighting System Installation',
      'Annual Maintenance Contract (AMC)',
    ],
  },
]

const billingOptions = ['Billing Monthly', 'Billing Yearly']

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [billing, setBilling] = useState('Billing Monthly')
  const [selected, setSelected] = useState(0)

  const getBillingKey = () => billing.split(' ')[1].toLowerCase()

  const formatPrice = (price) =>
    price >= 100000
      ? `₹${(price / 100000).toFixed(1)}L`
      : `₹${(price / 1000).toFixed(0)}K`

  return (
    <section id="contact" ref={ref} className="py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg,#EEF3FF 0%,#F8FAFF 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-[#4FC3F7] font-mono text-[11px] tracking-[0.2em] mb-5 uppercase">— Plans &amp; Pricing</p>
          <h2 className="text-[38px] md:text-[50px] font-bold leading-[1.1] tracking-tight text-slate-900">
            Transparent &amp; Flexible{' '}
            <span className="font-serif italic text-[#4FC3F7]">Pricing</span>
            <br />
            <span className="font-serif italic text-[#4FC3F7]">Choose</span> A Perfect Plan.
          </h2>
          <p className="mt-4 text-slate-500 text-[14px] max-w-sm mx-auto leading-[1.75]">
            All prices are indicative. Contact us for a custom quote tailored to your premises.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex bg-slate-100 border border-slate-200 rounded-full p-1 gap-1">
            {billingOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setBilling(opt)}
                className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-300 ${
                  billing === opt
                    ? 'bg-gradient-to-r from-[#4FC3F7] to-[#00E5FF] text-[#0F172A] font-bold shadow-[0_0_20px_rgba(79,195,247,0.3)]'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Plan selectors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
        >
          {plans.map(({ name, price, badge, badgeColor }, i) => (
            <button
              key={name}
              onClick={() => setSelected(i)}
              className={`flex items-center gap-4 px-5 py-3.5 rounded-xl border transition-all duration-300 text-left ${
                selected === i
                  ? 'border-[#4FC3F7]/50 bg-[#4FC3F7]/8 shadow-[0_0_25px_rgba(79,195,247,0.12)]'
                  : 'border-slate-200 bg-white hover:border-[#4FC3F7]/25 shadow-sm'
              }`}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${badgeColor}20` }}>
                <div className="w-3 h-3 rounded-full" style={{ background: badgeColor }} />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-[14px] text-slate-900">{name}</div>
                <div className="text-[11px] font-mono" style={{ color: badgeColor }}>{badge}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-[18px] font-bold font-mono text-slate-900">
                  {formatPrice(price[getBillingKey()])}
                </div>
                <div className="text-[10px] text-slate-400">/ Per Month</div>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Selected plan detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="max-w-lg mx-auto bg-white border border-slate-200 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex justify-between items-start mb-7">
              <div>
                <h3 className="text-[26px] font-serif italic font-bold text-slate-900">{plans[selected].name.split(' ')[0]}</h3>
                <span className="text-[13px] text-slate-400">Security Package</span>
              </div>
              <div className="text-right">
                <div className="text-[32px] font-bold font-mono leading-none text-slate-900">
                  {formatPrice(plans[selected].price[getBillingKey()])}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">Starting from / Per Month</div>
              </div>
            </div>

            <p className="text-[13px] font-semibold text-slate-600 mb-5">Package Includes:</p>

            <div className="space-y-3.5 mb-8">
              {plans[selected].features.map((f) => (
                <div key={f} className="flex items-center justify-between text-[13px]">
                  <span className="text-slate-500">{f}</span>
                  <div className="w-5 h-5 rounded-full border border-[#4FC3F7]/35 flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-[#4FC3F7]" />
                  </div>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0,229,255,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#4FC3F7] to-[#00E5FF] text-[#0F172A] font-bold text-[14px] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(79,195,247,0.25)]"
            >
              Request a Custom Quote <span className="text-base leading-none">›</span>
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
