import React from 'react'
import Header from '../Componets/Header'
import Navbar from '../Componets/Navbar'
import HeroSection from '../Componets/HeroSection'
import LogoMarquee from '../Componets/Marque'
import NewArrival from '../Componets/NewArrival'
import TopSelling from '../Componets/TopSelling'
import DressStyle from '../Componets/DressStyle'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <LogoMarquee />
      <NewArrival />
      <TopSelling />
      <DressStyle />
    </>
  )
}

export default HomePage
