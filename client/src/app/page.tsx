import React from 'react'
import Navbar from './components/layout/Navbar'
import HeroSection from './components/layout/HeroSection'
import PetProductGrid from './admin/ManageBarbers'

function page() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <PetProductGrid/>
    </div>
  )
}

export default page