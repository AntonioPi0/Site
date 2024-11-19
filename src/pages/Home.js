import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WhoWeAreSection from '../components/WhoWeAreSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhoWeAreSection />
      <Timeline />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
