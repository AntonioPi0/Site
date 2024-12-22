import React, {useEffect} from 'react';
import Navbar from '../components/General/Navbar';
import Sponsor from '../components/Sponsors/Sponsor';
import Footer from '../components/General/Footer';
import dassault_page from '../images/Sponsors/Dassault_logo.png';
import polito_page from '../images/Sponsors/Politecnico_logo.png';
import '../css/main.css';

const Sponsors = () => {

  useEffect(() => {
    document.title = "Sponsors - Zefiro"; // Change the title to "About"
  }, []);

  const sponsors = [
    {image: polito_page, description:"Politecnico di Torino, established in 1859, is a leading technical university in Italy,excelling in engineering, architecture, and innovation. Renowned for its research and global partnerships, it prepares students for future technological challenges.",
      website:"https://www.polito.it/" },
    {image: dassault_page, description:"Dassault Systèmes is a global leader in 3D design, engineering, and simulation software, empowering innovation across industries. Its solutions enable sustainable product development and transformative digital experiences.",
       website:"https://www.3ds.com/"},
    
  ]
  return (
    <>
      <Navbar />
      <div className="sponsors">

      
      <h2>Sponsors</h2>
        <p>
        If your company shares our vision of growth, development, and innovation, we invite you to become our partner. With your financial or technical support, we can achieve ambitious goals together.
        </p>

      <h4>Why become our sponsor</h4>
        <ul>
          <li>Increase your company's visibility in a dynamic and impactful context.</li>
          <li>Opportunity to collaborate on an innovative and cutting-edge project.</li>
          <li>Active participation in grand challenges.</li>
        </ul>

      <p>
      Join us and showcase your commitment to the growth of urban air mobility and the development of VTOL vehicles. Contact us to find out how we can work together!
      </p>

      <h3>Main Sponsors</h3>
        <div className='sponsors-container'>
          {sponsors.map((sponsor) => (
              <div className='sponsor-item'>
                  <Sponsor 
                      image={sponsor.image}
                      description={sponsor.description}
                      website={sponsor.website}
                  />
              </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sponsors;
