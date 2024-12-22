import React, {useEffect} from 'react';
import Navbar from '../components/General/Navbar';
import ApplyPage from '../components/Apply/ApplyPage';
import Footer from '../components/General/Footer';

const Apply = () => {
  
  useEffect(() => {
    document.title = "Apply - Zefiro"; // Change the title to "About"
  }, []);

  return (
    <>
      <Navbar />
      <ApplyPage />
      <Footer />
    </>
  );
};

export default Apply;
