import { CTA } from './sections/CTA'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { LatestVideos } from './sections/LatestVideos'
import { Navbar } from './components/Navbar'
import { PopularTutorials } from './sections/PopularTutorials'
import { ResponsiveNavBar } from './components/ResponsiveNavBar'
import { Testimonials } from './sections/Testimonials'
import { makeMockServer } from "./constants/mockAPI"

// Initialize API 
makeMockServer();

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
