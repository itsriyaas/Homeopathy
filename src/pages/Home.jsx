import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutUsSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import Testimonials from '../components/Testimonials'
import OurClinics from '../components/OurClinics'
import BlogSection from '../components/BlogSection'
import { Helmet } from 'react-helmet'
import BookOnlineSection from '../components/BookOnline'

function Home() {
  return (
    <>
     <Helmet>
        <title>Body Mind Multispeciality Homoeopathic clinic | Holistic Healing & Natural Remedies</title>
        <meta name="description" content="Body Mind Multispeciality Homoeopathic clinic" />
        <meta property="og:title" content="Body Mind Multispeciality Homoeopathic clinic" />
        <meta property="og:description" content="Discover natural, holistic treatments at Body Mind Multispeciality Homoeopathic clinic. Personalized care, proven remedies, and expert consultations for physical, mental, and emotional well-being." />
      </Helmet>
    <HeroSection/>
    <AboutUsSection/>
    <BookOnlineSection/>
    <ServicesSection/>
    <OurClinics/>
    <BlogSection/>
    <Testimonials/>
    </>
  )
}

export default Home