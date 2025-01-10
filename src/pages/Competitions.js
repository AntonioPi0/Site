import React, {useEffect} from 'react';
import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';
import OurCompetitions from '../components/Competitions/OurCompetitions'
import ScrollToTop from '../ScrollToTop';

const Competitions = () => {

    useEffect(() => {
      document.title = "Competitions - Zefiro"; // Change the title to "Competitions"
    }, []);

    return (
        <>
          <ScrollToTop />
          <Navbar />
          <OurCompetitions/>
          <Footer />
        </>
    );
};

export default Competitions