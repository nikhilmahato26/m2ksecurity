import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Clients from './components/sections/Clients'
import Process from './components/sections/Process'
import WhyUs from './components/sections/WhyUs'
import Credentials from './components/sections/Credentials'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Process />
      <WhyUs />
      <Credentials />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
