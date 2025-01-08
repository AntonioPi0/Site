import React from 'react';
import '../../css/main.css';
import 'animate.css';
import droneVideo from '../../images/Video/drone.mp4'; // Assicurati di importare il video

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Video Background */}
      <video className="hero-video" autoPlay loop muted>
        <source src={droneVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text Content */}
      <div className="animated-title">
        <h1 className="animate__animated animate__fadeInDown">ZEFIRO</h1>
        <h2 className="animate__animated animate__fadeInUp animate__slower">
          <span className="highlight">Z</span>onal <span className="highlight">E</span>-mobility{' '}
          <span className="highlight">F</span>lying <span className="highlight">I</span>nnovative{' '}
          <span className="highlight">RO</span>torcrafts
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
