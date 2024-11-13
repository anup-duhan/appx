import React, { useState, useEffect } from 'react';
import NavBar from './components/common/NavBar';
import Hero from './components/Hero';
import Footer from './components/common/Footer';
import Preloader from './components/common/Preloader';
import BackToTop from './components/common/BackToTop';
import VisitorCounter from './components/common/VisitorCounter';
import SliderCard from './components/SliderCard';
import Empower from './components/Empower';
import ExternalChecking from './components/ExternalChecking';
import Trusted from './components/Trusted';
import CreditAccess from './components/CreditAccess';
import FooterEnd from './components/common/FooterEnd';




function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Default loading delay
    let delay = 3000;

    // Check if the Network Information API is available
    if (navigator.connection) {
      const { effectiveType } = navigator.connection;

      // Set delay based on network speed
      switch (effectiveType) {
        case '4g':
          delay = 1500; // Fast connection
          break;
        case '3g':
          delay = 3000; // Medium connection
          break;
        case '2g':
          delay = 5000; // Slower connection
          break;
        case 'slow-2g':
        case 'unknown':
        default:
          delay = 7000; // Very slow or unknown connection
          break;
      }
    }

    // Set loading timeout based on calculated delay
    const timer = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <BackToTop />
          <NavBar />
          <Hero />
          <SliderCard />
          <Empower />
          <ExternalChecking />
          <Trusted />
          <CreditAccess />
          <Footer />
          <VisitorCounter />
          <FooterEnd />
        </>
      )}
    </>
  );
}

export default App;
