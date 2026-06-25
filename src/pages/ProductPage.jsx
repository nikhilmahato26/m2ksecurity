import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ChevronRight, PackageX } from 'lucide-react'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import { getServiceBySlug } from '../data/products'

export default function ProductPage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <Navbar />

      {!service ? (
        <NotFound />
      ) : (
        <>
          {/* Hero / header */}
          <section
            className="relative pt-36 pb-20 overflow-hidden"
            style={{
              background: `linear-gradient(180deg, ${service.color}14 0%, #F8FAFF 100%)`,
            }}
          >
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
              {/* Breadcrumb */}
              <div className="flex items-center gap-1.5 text-[12px] text-slate-400 mb-8">
                <Link to="/" className="hover:text-slate-600 transition-colors">
                  Home
                </Link>
                <ChevronRight size={12} />
                <Link to="/#services" className="hover:text-slate-600 transition-colors">
                  Services
                </Link>
                <ChevronRight size={12} />
                <span className="text-slate-700 font-medium">{service.title}</span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              >
                <p
                  className="font-mono text-[11px] tracking-[0.2em] mb-4 uppercase"
                  style={{ color: service.color }}
                >
                  — Products
                </p>
                <h1 className="text-[40px] md:text-[56px] font-bold leading-[1.05] tracking-tight text-slate-900 max-w-3xl">
                  {service.title}
                </h1>
                {service.tagline && (
                  <p className="mt-5 text-slate-500 text-[15px] md:text-[16px] max-w-2xl leading-[1.7]">
                    {service.tagline}
                  </p>
                )}
              </motion.div>
            </div>
          </section>

          {/* Product grid */}
          <section className="relative pb-28 -mt-6">
            <div className="max-w-7xl mx-auto px-6">
              {groupByBrand(service.products) ? (
                <div className="space-y-14">
                  {groupByBrand(service.products).map(([brand, items]) => (
                    <div key={brand}>
                      {/* Brand heading */}
                      <div className="flex items-center gap-3 mb-6">
                        <span
                          className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold"
                          style={{ background: `${service.color}1a`, color: service.color }}
                        >
                          {brand}
                        </span>
                        <div className="h-px flex-1 bg-slate-200" />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {items.map((product, i) => (
                          <ProductCard key={product.id} product={product} color={service.color} index={i} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {service.products.map((product, i) => (
                    <ProductCard key={product.id} product={product} color={service.color} index={i} />
                  ))}
                </div>
              )}

              {/* Back link */}
              <div className="mt-14">
                <Link
                  to="/#services"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <ArrowLeft size={15} />
                  Back to all services
                </Link>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  )
}

// Returns an array of [brand, products[]] pairs if any product has a brand,
// otherwise null (caller renders a flat grid). Order follows first appearance.
function groupByBrand(products) {
  if (!products.some((p) => p.brand)) return null
  const groups = new Map()
  for (const p of products) {
    const brand = p.brand || 'Other'
    if (!groups.has(brand)) groups.set(brand, [])
    groups.get(brand).push(p)
  }
  return [...groups.entries()]
}

function ProductCard({ product, color, index }) {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: 0.04 * (index % 4), ease: [0.23, 1, 0.32, 1] }}
      className="group bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-50 flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-all duration-500"
        />
        {product.brand && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-slate-600 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-slate-200">
            {product.brand}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1 border-t border-slate-100">
        <h3 className="text-[13.5px] font-semibold text-slate-900 leading-snug mb-3 flex-1">
          {product.title}
        </h3>

        {/* CTA row */}
        <div className="mt-auto flex items-center justify-between">
          <div
            className="h-[2px] w-8 rounded-full transition-all duration-300 group-hover:w-14"
            style={{ background: color }}
          />
          <span
            className="flex items-center gap-1 text-[11px] font-semibold transition-all duration-200"
            style={{ color }}
          >
            Enquire Now
            <ChevronRight
              size={12}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="h-[3px] w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />
    </motion.a>
  )
}

function NotFound() {
  return (
    <section className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex w-16 h-16 rounded-2xl bg-slate-100 items-center justify-center mb-6">
          <PackageX size={26} className="text-slate-400" />
        </div>
        <h1 className="text-[32px] font-bold text-slate-900 mb-3">Products coming soon</h1>
        <p className="text-slate-500 max-w-md mx-auto mb-8">
          We&apos;re still curating the product range for this service. In the meantime, reach out and
          we&apos;ll tailor a solution for you.
        </p>
        <Link
          to="/#services"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#4FC3F7] to-[#00E5FF] text-[#0F172A] font-bold text-[13px]"
        >
          <ArrowLeft size={15} />
          Back to services
        </Link>
      </div>
    </section>
  )
}
