import React from 'react';
import Navbar from '../components/General/Navbar';
import Sponsor from '../components/Sponsors/Sponsor';
import Footer from '../components/General/Footer';
import dassault_page from '../images/Sponsors/Dassault_logo.png';
import polito_page from '../images/Sponsors/Politecnico_logo.png';
import '../css/main.css';

const Sponsors = () => {

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
      Se la tua azienda condivide la nostra visione di crescita, sviluppo e innovazione, ti invitiamo a diventare nostro partner. Con il tuo supporto finanziario o tecnico, possiamo raggiungere insieme traguardi ambiziosi.
      </p>

      <h4>Perché diventare nostro sponsor:</h4>
      <ul>
        <li>Aumento della visibilità della tua azienda in un contesto dinamico e impattante.</li>
        <li>Opportunità di collaborare in un progetto innovativo e all'avanguardia.</li>
        <li>Partecipazione attiva in sfide grandiose</li>
      </ul>

      <p>
      Unisciti a noi e metti in luce il tuo impegno verso la crescita della mobilità aerea urbana e lo sviluppo dei velivoli VTOL. Contattaci per scoprire come possiamo lavorare insieme!

      </p>


      
      <h3>Principali sponsors</h3>
      </div>
      <div className='sponsors-container'>
        {sponsors.map((sponsor) => (
            <div className='sponsor-item'>
                <Sponsor 
                    image = {sponsor.image}
                    description={sponsor.description}
                    website={sponsor.website}
                />
            </div>
        ))}
      </div>


      <Footer />
    </>
  );
};

export default Sponsors;
