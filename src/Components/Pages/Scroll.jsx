import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            setIsVisible(scrollTop > 100); // Show button if scrolled more than 100px
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
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
            {isVisible && (
                <button 
                    className="scroll-to-top-btn" 
                    onClick={scrollToTop}
                >
                    <i className="bi bi-arrow-up"></i>
                </button>
            )}
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
};

export default ScrollToTop;
