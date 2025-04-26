import React from 'react'
import Navbar from '../components/layout/Navbar'
import HeroSection from './home/page'



function page({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default page