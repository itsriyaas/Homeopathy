import React from 'react'
import DoctorProfile from '../components/DoctorProfile'
import { Helmet } from 'react-helmet'

function Paediatrics() {
  return (
    <>
     <Helmet>
        <title>Paediatrics</title>
        <meta name="description" content="Pediatric Homeopathy Irinjalakuda" />
        <meta property="og:title" content="Pediatric Homeopathy Irinjalakuda" />
        <meta property="og:description" content="Best Homeopathic Clinic for Allergy and Child Behavior in Kerala" />
      </Helmet>
    <DoctorProfile/>
    </>
  )
}

export default Paediatrics