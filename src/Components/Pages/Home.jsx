import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Slide from './Slide';
import Service from './Service';
import About from './About';
import Testimonial from './Testimonial';  
import Footer from './Footer'; 
import Spinner from './Spinner';
import Contact from './Contact';
import Category from './Category';
import MidBanner from './MidBanner';
import FAQ from './FAQ';

export default function Home() {
    useEffect(() => {
        // Show the scroll-to-top button when scrolling down
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');
        
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', () => {});
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <Spinner />
            <Navbar />
            <Slide />
            <Service />
            <About />
            <Category />
            <MidBanner />
            <FAQ />
            <Testimonial />
            <Contact />
            <Footer />
            
            {/* Scroll to Top Button */}
            <button 
                id="scrollToTopBtn" 
                className="scroll-to-top-btn" 
                onClick={scrollToTop} 
                style={{ display: 'none' }} // Hidden by default
            >
                <i className="bi bi-arrow-up"></i>
            </button>

            <style>{`
                .scroll-to-top-btn {
                    position: fixed;
                    bottom: 20px; /* Distance from the bottom */
                    right: 20px; /* Distance from the right */
                    background-color: #007bff; /* Button color */
                    color: white; /* Text color */
                    border: none;
                    border-radius: 5px;
                    padding: 10px 15px;
                    font-size: 16px;
                    cursor: pointer;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                    transition: background-color 0.3s;
                }

                .scroll-to-top-btn:hover {
                    background-color: #0056b3; /* Darker shade on hover */
                }
            `}</style>
        </>
    );
}
