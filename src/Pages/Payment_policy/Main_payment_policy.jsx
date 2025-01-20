import React from 'react'
import PaymentPolicy from './PaymentPolicy'
import ResponsiveAppBar from '../../Components/Navbar/Navbar'
import Footer from '../LandingPage/Section/Footer'

function Main_payment_policy() {
  return (
    <div>
      <ResponsiveAppBar/>
      <PaymentPolicy/>
      <Footer/>
    </div>
  )
}

export default Main_payment_policy
