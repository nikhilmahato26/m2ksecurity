import { motion } from 'framer-motion'
import { Shield, Twitter, Linkedin, Github, Mail } from 'lucide-react'

const links = {
  Company: ['About Us', 'Our Team', 'Careers', 'Press Kit'],
  Services: ['Access Control', 'CCTV Surveillance', 'Fire Safety', 'BMS Solutions'],
  Resources: ['Case Studies', 'Blog', 'Product Catalogue', 'Compliance Guide'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'AMC Terms'],
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 pt-16 pb-8" style={{ background: '#EEF3FF' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#home" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4FC3F7] to-[#00E5FF] flex items-center justify-center shadow-[0_0_15px_rgba(79,195,247,0.3)]">
                <Shield size={15} className="text-[#0F172A]" />
              </div>
              <span className="font-bold text-[17px] text-slate-900">
                M2K <span className="text-[#4FC3F7]">Security</span>
              </span>
            </a>
            <p className="text-slate-400 text-[12px] leading-[1.75] mb-6">
              Integrated physical security solutions protecting businesses and premises across India for over 25 years.
            </p>
            <div className="flex gap-2.5">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.15 }}
                  className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#4FC3F7]/35 hover:text-[#4FC3F7] transition-all duration-300 bg-white"
                >
                  <Icon size={12} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-[13px] text-slate-600 mb-5 tracking-wide">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 text-[13px] hover:text-[#4FC3F7] transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-[11px] font-mono">
            © 2024 M2K Security Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] text-slate-400 font-mono">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
