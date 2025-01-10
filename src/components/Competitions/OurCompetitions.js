  import React from 'react';
  import '../../css/main.css';

  const OurCompetitions = () => {
    return (
      <section className="competitions-section">
          <div className="competitions">
              <h2>Competitions</h2>
              <p>Our team is committed to <b>continuous growth and learning</b> by participating in a variety of competitions. These events provide invaluable opportunities to <b>enhance our skills</b> and <b>tackle real-world challenges</b>. By engaging in diverse competitions, we aim to broaden our expertise, gain practical experience, and further our passion for innovation and excellence.</p>
              <h3>Student Design Competition: May 2025</h3>
              <p>
              The <b>Vertical Flight Society</b> annual Student Design Competition engages engineering students worldwide in designing vertical lift aircraft to meet specific requirements,
              fostering interest in <b>vertical flight technology</b>. Winning teams receive cash stipends and complimentary registration to present their designs at the <b>Society Annual Forum</b>,
              a premier vertical flight technical event. Sponsored by major industry players like <b>Airbus</b>, <b>Boeing</b>, <b>Bell</b>, and others, the competition promotes education and careers in vertical flight while benefiting from strong industry support.
              </p>
          <div className="competition-button-container">
          <a href={"https://vtol.org/awards-and-contests/student-design-competition"} target="_blank" rel="noopener noreferrer" className="competition-button">
            DISCOVER MORE...
          </a>
          </div>
              <h3>Design-Build Competition: March 2026</h3>
              <p>
              We are proud participants in this innovative competition organized by <b>Vertical Flight Society</b> centered around <b>electric-powered remote-control</b> vertical take-off and landing (VTOL) aircraft.
              This event inspires interest in cutting-edge unmanned aircraft technology and challenges teams to <b>design and fabricate small air vehicles</b>.
              Geared toward university students, the competition fosters hands-on skills and deepens understanding of eVTOL and advanced air mobility (AAM) technologies.
              By taking part, we are helping to <b>shape the next generation of engineers</b> and leaders who will push the boundaries of this exciting field into the future.
              </p>
              <div className="competition-button-container">
          <a href={"https://vtol.org/awards-and-contests/design-build-vertical-flight"} target="_blank" rel="noopener noreferrer" className="competition-button">
            DISCOVER MORE...
          </a>
          </div>
        </div>
      </section>
        
    );
  };

  export default OurCompetitions;
