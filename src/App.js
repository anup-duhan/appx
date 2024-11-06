
import './App.css';
import NavBar from './components/common/NavBar';
import Hero from './components/Hero';
import Footer from './components/common/Footer';
import SliderCard from './components/SliderCard';
import Empower from './components/Empower';
import ExternalChecking from './components/ExternalChecking';
import Trusted from './components/Trusted';
import CreditAccess from './components/CreditAccess';
import FooterEnd from './components/common/FooterEnd';
import BackToTop from './components/common/BackToTop';
import VisitorCounter from './components/common/VisitorCounter';

function App() {
  return (
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
      <VisitorCounter/>
      <FooterEnd />
    </>
  );
}

export default App;

