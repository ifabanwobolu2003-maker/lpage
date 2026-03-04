import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import CTA from './components/CTA'
import Pricing from './components/Pricing'
import Testiomonials from './components/Testiomonials'
import Footer from './components/Footer'
import Enrollment from './componennts/Enrollment'

const App = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <CTA />
      <Pricing />
      <Enrollment />
      <Testiomonials />
      <Footer />
    </div>
    </>
  )
}

export default App