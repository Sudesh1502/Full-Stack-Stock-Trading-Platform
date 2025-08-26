// Layout.jsx

import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Renders the child route */}
      <Footer />
    </>
  )
}
