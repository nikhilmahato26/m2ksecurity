import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'

// ⚠️  Replace with the actual M2K Security WhatsApp number (country code + number, no spaces)
const WHATSAPP_NUMBER = '919999999999'

const serviceOptions = [
  'Access Control System',
  'Fire Alarm System',
  'Building Management System (BMS)',
  'Firefighting System',
  'Intruder Alarm System',
  'CCTV Surveillance',
  'Boom Barrier',
  'Bollard System',
  'Flap Barrier',
  'Electrical Systems',
  'Complete Security Package',
  'Annual Maintenance Contract (AMC)',
]

const contactDetails = [
  { icon: Phone, label: 'Call Us', value: '+91 99999 99999', href: 'tel:+919999999999' },
  { icon: Mail, label: 'Email Us', value: 'info@m2ksecurity.in', href: 'mailto:info@m2ksecurity.in' },
  { icon: MapPin, label: 'Registered Address', value: 'Sanchod, Alwar, Rajasthan — 301401', href: '#' },
  { icon: Clock, label: 'Working Hours', value: 'Mon – Sat, 9 AM – 7 PM', href: null },
]

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)

  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = [
      `Hello M2K Security! 👋`,
      ``,
      `I'd like to enquire about your services.`,
      ``,
      `*Name:* ${form.name}`,
      `*Company:* ${form.company || 'N/A'}`,
      `*Phone:* ${form.phone}`,
      `*Service Required:* ${form.service || 'General Enquiry'}`,
      form.message ? `*Message:* ${form.message}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" ref={ref} className="py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg,#EEF3FF 0%,#F8FAFF 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#4FC3F7] font-mono text-[11px] tracking-[0.2em] mb-4 uppercase">— Get In Touch</p>
          <h2 className="text-[38px] md:text-[50px] font-bold leading-[1.1] tracking-tight text-slate-900">
            Let's Secure Your{' '}
            <span className="font-serif italic text-[#4FC3F7]">Premises</span>
            <br />
            Together.
          </h2>
          <p className="mt-4 text-slate-500 text-[14px] max-w-sm mx-auto leading-[1.75]">
            Fill in the form and we'll respond via WhatsApp within minutes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[5fr_7fr] gap-10 items-start">

          {/* Left: Contact info card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Top gradient panel */}
            <div className="bg-gradient-to-br from-[#0891B2] to-[#4FC3F7] px-8 py-10">
              <h3 className="text-[22px] font-bold text-white mb-2">Contact Information</h3>
              <p className="text-white/70 text-[14px] leading-[1.7]">
                Reach out directly — our team is ready to schedule a free site survey.
              </p>

              {/* Quick WhatsApp button */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/15 border border-white/30 text-white text-[13px] font-semibold hover:bg-white/25 transition-all duration-200"
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact details */}
            <div className="bg-white px-8 py-7 space-y-5">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#4FC3F7]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={16} className="text-[#0891B2]" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono tracking-widest uppercase mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-[14px] font-semibold text-slate-800 hover:text-[#0891B2] transition-colors duration-200">
                        {value}
                      </a>
                    ) : (
                      <span className="text-[14px] font-semibold text-slate-800">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="bg-slate-50 border-t border-slate-100 px-8 py-5">
              <p className="text-[11px] text-slate-400 font-mono tracking-widest uppercase mb-3">Why Choose M2K</p>
              <div className="space-y-2">
                {['25+ Years of Industry Experience', 'Certified & Trained Engineers', 'Pan-India Service Network'].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-[12px] text-slate-600">
                    <CheckCircle2 size={12} className="text-[#4FC3F7] flex-shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 space-y-5"
            >
              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[12px] font-semibold text-slate-600 mb-1.5 tracking-wide">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Rajiv Sharma"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-[14px] text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-[#4FC3F7] focus:ring-2 focus:ring-[#4FC3F7]/20 transition-all duration-200 bg-slate-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-slate-600 mb-1.5 tracking-wide">
                    Company / Organisation
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp Pvt. Ltd."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-[14px] text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-[#4FC3F7] focus:ring-2 focus:ring-[#4FC3F7]/20 transition-all duration-200 bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[12px] font-semibold text-slate-600 mb-1.5 tracking-wide">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-[14px] text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-[#4FC3F7] focus:ring-2 focus:ring-[#4FC3F7]/20 transition-all duration-200 bg-slate-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-slate-600 mb-1.5 tracking-wide">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-[14px] text-slate-900 focus:outline-none focus:border-[#4FC3F7] focus:ring-2 focus:ring-[#4FC3F7]/20 transition-all duration-200 bg-slate-50 focus:bg-white appearance-none cursor-pointer"
                  >
                    <option value="" className="text-slate-400">Select a service…</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[12px] font-semibold text-slate-600 mb-1.5 tracking-wide">
                  Message / Additional Details
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your premises size, number of entry points, specific requirements, or any other details…"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[14px] text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-[#4FC3F7] focus:ring-2 focus:ring-[#4FC3F7]/20 transition-all duration-200 bg-slate-50 focus:bg-white resize-none"
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(37,211,102,0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold text-[15px] text-white transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                >
                  <WhatsAppIcon />
                  {submitted ? 'Opening WhatsApp…' : 'Send via WhatsApp'}
                </motion.button>

                <a
                  href={`mailto:info@m2ksecurity.in?subject=Security%20Enquiry&body=Name%3A%20${encodeURIComponent(form.name)}%0ACompany%3A%20${encodeURIComponent(form.company)}%0APhone%3A%20${encodeURIComponent(form.phone)}%0AService%3A%20${encodeURIComponent(form.service)}%0AMessage%3A%20${encodeURIComponent(form.message)}`}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-[14px] hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
                >
                  <Mail size={16} />
                  Email Instead
                </a>
              </div>

              <p className="text-[11px] text-slate-400 text-center pt-1">
                Clicking "Send via WhatsApp" will open WhatsApp with your enquiry pre-filled. We respond within 30 minutes during business hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
