import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Clients from './components/sections/Clients'
import Projects from './components/sections/Projects'
import WhyUs from './components/sections/WhyUs'
import Pricing from './components/sections/Pricing'
import Testimonials from './components/sections/Testimonials'
import Blog from './components/sections/Blog'
import Footer from './components/sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Projects />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  )
}
