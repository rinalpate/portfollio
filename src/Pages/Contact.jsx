import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Back2 from '../Components/Back2'
import Form from '../Components/Form'

const Contact = () => {
  return (
    <div>
    <Navbar />
    <Back2 heading="CONTACT." text="Lets have a chart" />
    <Form />
    <Footer />
    </div>
  )
}
export default Contact