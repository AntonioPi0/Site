import React from 'react';
import '../../css/main.css';

const Timeline = () => {
  const timelineData = [
    {
      date: "July 2024",
      title: "The beginning",
      description: <>Some friends who study aerospace engineering decide they want to start a team to work on sustainable mobility via drones </>
    },
    {
      date: "May 2025",
      title: "Design Competition",
      description: <>Annual Student Design Competition, VFS, Pioneering Hydrogen-Electric
       VTOL, sponsored by Airbus</>
    },
    { 
      date: "September 2025",
      title: "GoAERO Competition Stage 2",
      description: <>GoAERO challenges partecipants to create a compact, autonomy-enabled rescue aircraft
      that is safe and simple to fly</>
    },
    {
      date: "March 2026",
      title: "Design-Build Competition ",
      description: <>Annual VFS Design-Build-Vertical Flight Competition</>
    },
    {
      date: "June 2026",
      title: "Conference TU Delft",
      description: <>Participation in a conference on advanced air mobility at TU Delft</> 
    },
    { 
      date: "December 2026",
      title: "GoAERO Competition Stage 3",
      description: <>The GoAERO competition culminates in a 3-mission fly-off exhibiting productivity,
       adversity, and maneuvering</>
    },
  ];

  return (
    <section className="timeline-section">
      <div className="timeline-container">
        <div className = "timeline-subcontainer">
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
      </div>
    </section>
  );
};

export default Timeline;