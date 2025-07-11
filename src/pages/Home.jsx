import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutUsSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import BookAppointment from '../components/BookUs'
import Testimonials from '../components/Testimonials'

function Home() {
  return (
    <>
    <HeroSection/>
    <AboutUsSection/>
    <ServicesSection/>
    <BookAppointment/>
    <Testimonials/>
    </>
  )
}

export default Home