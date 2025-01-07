import React from'react';
import '../../css/main.css';

const Sponsor = ({image, description, website}) => {
    return (
      <div className='sponsor-container'>
        <div className='sponsor-image'>
          <img src={image} alt={`${website}`}/>
        </div>

        <div className='sponsor-overlay'>
          <p className='sponsor-description'>
            {description}
          </p>
          <a 
            href={website} 
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



