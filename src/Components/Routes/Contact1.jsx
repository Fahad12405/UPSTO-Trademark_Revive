import React from 'react'
import Navbar from '../Pages/Navbar'
import Header from '../Pages/Header'
import Footer from '../Pages/Footer'
import Contact from '../Pages/Contact'
import Spinner from '../Pages/Spinner'
import Service from '../Pages/Service'
import MidBanner from '../Pages/MidBanner'
import Scroll from '../Pages/Scroll';







export default function() {
  return (
    <>
    <Spinner/>
    <Navbar/>
    <Header name="Contact"/>
    <Contact/>
    <Service/>
    <MidBanner />
    <Footer/>
    <Scroll />
    </>
  )
}
