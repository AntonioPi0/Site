import React, {useEffect} from 'react';
import Navbar from '../components/General/Navbar';
import HeroSection from '../components/Home/HeroSection';
import WhoWeAreSection from '../components/Home/WhoWeAreSection';
import ContactSection from '../components/Home/ContactSection';
import Footer from '../components/General/Footer';
import Timeline from '../components/Home/Timeline';
import '../css/main.css';

const Home = () => {

  useEffect(() => {
    document.title = "Zefiro"; // Change the title to "About"
  }, []);

  return (
    <>
      <Navbar />
      <div className="page-container">
        <HeroSection />
        <WhoWeAreSection />
        <Timeline />
        <ContactSection />
      </div>
      <Footer />
    
    </>
    
  );
};

export default Home;
