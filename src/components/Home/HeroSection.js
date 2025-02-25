import React, { useEffect, useRef } from 'react';
import '../../css/main.css';
import 'animate.css';
import droneVideo from '../../images/Video/drone_ZEFIRO.mp4';

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.log('Autoplay bloccato:', error);
      });
    }
  }, []);

  return (
    <section className="hero">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
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
