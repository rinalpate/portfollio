import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Back2 from '../Components/Back2'
import AboutContent from '../Components/AboutContent'

const About = () => {
  return (
    <div>
    <Navbar />
    <Back2 heading="ABOUT." text="Im a friendly Front-End Developer." />
    <AboutContent />
    <Footer />
    </div>
  )
}

export default About