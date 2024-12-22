import React, {useEffect} from 'react';
import Navbar from '../components/General/Navbar';
import Mission from '../components/About/Mission';
import Footer from '../components/General/Footer';

const About = () => {

  useEffect(() => {
    document.title = "About - Zefiro"; // Change the title to "About"
  }, []);

  return (
    <>
      <Navbar />
      <Mission />
      <Footer />
    </>
  );
};

export default About;
