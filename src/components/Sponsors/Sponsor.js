import React from'react';
import '../../css/main.css';
const Sponsor = ({image, description, link}) => {
    return (
      <div className='sponsor-container'>
        <div className='sponsor-image'>
          <img src={image} />
        </div>
        <div className='sponsor-overlay'>
          <p className='sponsor-description'>
            {description}
          </p>
          <a 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="sponsor-button"
                >
                  Visit Their Website
                </a>
        </div>
      </div>
      
      );
    };

export default Sponsor;



