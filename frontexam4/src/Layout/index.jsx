import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from '../Sections/Navbar'
import Footer from '../Sections/Footer'
function Layout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout