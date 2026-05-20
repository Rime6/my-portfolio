import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import HowIWork from './components/HowIWork'
import CaseStudies from './components/CaseStudies'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowIWork />
      <CaseStudies />
      <Footer />
    </>
  )
}

export default App