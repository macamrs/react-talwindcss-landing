import './App.css'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { LatestVideos } from './components/LatestVideos'
import { Navbar } from './components/Navbar'
import { PopularTutorials } from './components/PopularTutorials'
import { ResponsiveNavBar } from './components/ResponsiveNavBar'
import { Testimonials } from './components/Testimonials'

function App() {
  return (
    <>
    <div className='hidden md:block'>
      <Navbar />
    </div>    
    <div className='block md:hidden'>
      <ResponsiveNavBar />
    </div>
      
      <Hero />
      <Testimonials />
      <PopularTutorials />
      <CTA />
      <LatestVideos />
      <Footer />
    </>
  )
}

export default App
