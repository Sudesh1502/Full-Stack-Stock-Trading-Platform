import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Hero from '../Hero/Hero'
import RaiseTicket from '../RaiseTicket/RaiseTicket'
import { FaCirclePlus } from "react-icons/fa6";
function SupportPage() {
  return (
    <>
      <FaCirclePlus/>
      <Hero/>
      <RaiseTicket/>
    </>
  )
}

export default SupportPage
