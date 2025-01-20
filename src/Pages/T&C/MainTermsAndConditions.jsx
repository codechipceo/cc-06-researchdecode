import React from 'react'
import TermsAndConditions from './TermsAndConditions'
import ResponsiveAppBar from '../../Components/Navbar/Navbar'
import Footer from '../LandingPage/Section/Footer'


export default function MainTermsAndConditions() {
  return (
    <div>
      <ResponsiveAppBar />
      <TermsAndConditions/>
      <Footer />
    </div>
  )
}
