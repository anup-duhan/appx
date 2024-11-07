import React, { useState, useEffect } from 'react';
import { TopArrow } from './Icons';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle the scroll event
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener on component unmount
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 animate-bounce z-[1000]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-blue-500 cursor-pointer rounded-full font-bold py-2 px-2 shadow-lg shadow-blue-950 hover:bg-orange-500 hover:duration-1000"
        >
        <TopArrow/>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
