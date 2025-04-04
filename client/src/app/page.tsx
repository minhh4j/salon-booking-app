import React from 'react'
import Navbar from './components/layout/Navbar'
import HeroSection from './components/layout/HeroSection'
// import ServicesPage from './components/booking/Sarvice'
function page() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      {/* <ServicesPage /> */}
    </div>
  )
}

export default page