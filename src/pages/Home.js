import React from 'react';
import Navbar from '../components/General/Navbar';
import HeroSection from '../components/Home/HeroSection';
import WhoWeAreSection from '../components/Home/WhoWeAreSection';
import ContactSection from '../components/Home/ContactSection';
import Footer from '../components/General/Footer';
import Timeline from '../components/Home/Timeline';
import Sponsor from '../components/Home/Sponsor';
import '../css/main.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <HeroSection />
        <WhoWeAreSection />
        <Sponsor />
        <Timeline />
        <ContactSection />
      </div>
      <Footer />
    
    </>
    
  );
};

export default Home;
