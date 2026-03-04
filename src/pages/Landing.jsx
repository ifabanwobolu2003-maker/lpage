import React from 'react'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import Testiomonials from '../components/Testiomonials'

const Landing = () => {
  return (
    <div>
        <HeroSection />
        <FeatureSection />
        <CTA />
        <Pricing />
        <Testiomonials />
    </div>
  )
}

export default Landing