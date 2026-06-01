import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#works' },
  { label: 'Services', href: '#services' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#F8FAFF]/95 backdrop-blur-xl border-b border-slate-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-2.5 group flex-shrink-0"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4FC3F7] to-[#00E5FF] flex items-center justify-center shadow-[0_0_15px_rgba(79,195,247,0.4)]">
            <Shield size={15} className="text-[#0F172A]" />
          </div>
          <span className="font-bold text-[17px] tracking-tight text-slate-900">
            M2K <span className="text-[#4FC3F7]">Security Solutions</span>
          </span>
        </motion.a>

        {/* Desktop Nav - pill container */}
        <div className="hidden md:flex items-center gap-0.5 bg-slate-100/60 border border-slate-200 rounded-full px-2 py-1.5 backdrop-blur-sm">
          {navLinks.map(({ label, href, dropdown }) => (
            <motion.a
              key={label}
              href={href}
              className="flex items-center gap-1 px-4 py-1.5 text-[13px] text-slate-500 hover:text-slate-900 rounded-full transition-all duration-300 hover:bg-slate-100 font-medium"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {label}
              {dropdown && <ChevronDown size={11} className="opacity-50" />}
            </motion.a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(0,229,255,0.45)' }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#4FC3F7] to-[#00E5FF] text-[#0F172A] font-bold text-[13px] shadow-[0_0_20px_rgba(79,195,247,0.25)]"
          >
            Get Started <span className="text-[15px] leading-none">›</span>
          </motion.a>

          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 text-slate-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F8FAFF]/98 backdrop-blur-xl border-t border-slate-200 px-6 py-4 flex flex-col gap-1"
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-slate-500 hover:text-slate-900 border-b border-slate-100 text-sm font-medium flex items-center justify-between"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 text-center py-3 rounded-full bg-gradient-to-r from-[#4FC3F7] to-[#00E5FF] text-[#0F172A] font-bold text-sm"
            >
              Get Started ›
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
