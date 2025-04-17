import React from 'react'
import Navbar from './components/layout/Navbar'
import HeroSection from './components/layout/HeroSection'
// import SideBar from "./components/layout/SideBar";

function page() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      {/* <SideBar /> */}
    </div>
  )
}

export default page