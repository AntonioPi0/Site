import React from 'react';
import '../../css/main.css';

const Timeline = () => {
  const timelineData = [
    {
      date: "July 2024",
      title: "The beginning",
      description: <>Nascita dell'idea</>
    },
    {
      date: "November 2024",
      title: "Team approval",
      description: <>Nascita del team a livello ufficiale, inizio del lavoro per competizione di design</>
    },
    {
      date: "March 2024",
      title: "Design Competition",
      description: <>Prima competizione per il team</>
    },
    {
      date: "April 2024",
      title: "First Recruitment",
      description: <>Primo Recruitment</> 
    },
  ];

  return (
    <section className="timeline-section">
      <div className="timeline-container">
        <h1>Our timeline</h1>
        <div className="timeline-line"></div>
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-point"></div>
            <div className="timeline_year">{item.date}</div>
            <div className="timeline-content">
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;