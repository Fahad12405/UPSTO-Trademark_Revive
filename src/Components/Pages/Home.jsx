import React from 'react'
import Navbar from './Navbar'
import Slide from './Slide'
import Service from './Service'
import About from './About'
import Testimonial from './Testimonial'  
import Footer from './Footer' 
import Spinner from './Spinner'
import Contact from './Contact'
import Category from './Category'
import MidBanner from './MidBanner'
import FAQ from './FAQ'
import Scroll from './Scroll'

export default function Home() {
    return (
        <>
            <Spinner/>
            <Navbar/>
            <Slide/>
            <Service/>
            <About/>
            <Category/>
            <MidBanner/>
            <FAQ/>
           


            
            <Testimonial/>
            <Contact/>
            <Footer/>  
           <Scroll />
        </>
    )
}
