import React from 'react'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Back2 from '../Components/Back2'
import PricingCard from '../Components/PricingCard'
import Work from '../Components/work'
const Project = () => {
  return (
    <div>
    <Navbar />
    <Back2 heading="PROJECTS." text="Some of my most recent works" />
    <Work />
    <PricingCard />
    <Footer />
    </div>
  )
}

export default Project