import React from'react';
import '../../css/main.css';
import logo_dassault from '../../images/Sponsors/Dassault_logo.png';

const Sponsor = () => {
    return (
        <section className="sponsor">
          <div className="sponsor-container">
            <h2>Our Sponsor</h2>
            <div className="sponsor-content">
              <img src={logo_dassault} alt="Dassault Logo" className="sponsor-logo" />
              <div className="sponsor-overlay">
                <p className="sponsor-description">
                  Dassault is a leading software and solutions company empowering innovation in engineering.
                </p>
                <a 
                  href="https://www.3ds.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="sponsor-button"
                >
                  Visit Their Website
                </a>
              </div>
            </div>
          </div>
        </section>
      );
    };

export default Sponsor;
