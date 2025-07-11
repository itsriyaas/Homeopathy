import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutUsSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import Testimonials from '../components/Testimonials'
import OurClinics from '../components/OurClinics'
import BlogSection from '../components/BlogSection'

function Home() {
  return (
    <>
    <HeroSection/>
    <AboutUsSection/>
    <ServicesSection/>
    <OurClinics/>
    <BlogSection/>
    <Testimonials/>
    </>
  )
}

export default Home