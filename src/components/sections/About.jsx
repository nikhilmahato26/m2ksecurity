import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const stats = [
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 125, suffix: '+', label: 'Happy Clients' },
  { value: 25, suffix: '+', label: 'Years of Experience' },
  { value: 50, suffix: '+', label: 'Security Experts' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="works" ref={ref} className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg,#F8FAFF 0%,#EEF3FF 100%)' }}>
      {/* Top divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-px bg-gradient-to-r from-transparent via-[#4FC3F7]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#4FC3F7] font-mono text-[11px] tracking-[0.2em] mb-5 uppercase">— Who We Are</p>
          <h2 className="text-[38px] md:text-[50px] font-bold leading-[1.1] tracking-tight text-slate-900">
            We <span className="font-serif italic text-[#4FC3F7]">Believe</span> In Proactive
            <br />
            Approach To{' '}
            <span className="font-serif italic text-[#4FC3F7]">Physical Security</span>
            <br />
            <span className="font-serif italic text-[#4FC3F7]">Empowering</span> Businesses.
          </h2>
          <p className="mt-6 text-slate-500 max-w-lg mx-auto text-[14px] leading-[1.75]">
            Our team of certified security specialists designs, installs, and maintains
            comprehensive security systems — protecting people, property, and assets
            across industries for over two decades.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-white border border-slate-200 rounded-2xl p-7 text-center group hover:border-[#4FC3F7]/35 hover:bg-slate-50 transition-all duration-500 cursor-default shadow-sm hover:shadow-md"
            >
              <div className="font-mono text-[2.6rem] font-bold text-slate-900 group-hover:text-[#4FC3F7] transition-colors duration-300 leading-none mb-2">
                <Counter target={value} suffix={suffix} />
              </div>
              <p className="text-slate-400 text-[11px] font-mono tracking-widest uppercase">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
