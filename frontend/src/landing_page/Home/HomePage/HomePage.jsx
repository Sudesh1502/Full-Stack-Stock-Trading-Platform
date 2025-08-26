import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Awards from '../Awards/Awards'
import Education from '../Education/Education'
import Stats from '../Stats/Stats'
import Pricing from '../Pricing/Pricing'
import OpenAccount from '../../OpenAccount/OpenAccount'
import "./HomePage.css"
import Footer from '../../Footer/Footer'

function HomePage() {
  return (
    <>
    
    <Hero/>
    <Awards/>
    <Stats/>
    <Pricing/>
    <Education/>
    <OpenAccount/>
    
    </>
  )
}

export default HomePage
