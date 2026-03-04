import React from 'react'
import Navbar from './components/navbar'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
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
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/enroll" element={<Enrollment />} />
    </Routes>
      <Footer />
    </>
  )
}

export default App