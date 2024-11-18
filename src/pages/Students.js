import React, { useState } from 'react';
import Member from '../components/Member';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import profilePic from '../images/Zefiro_Logo_NoBackground.png'; // Replace with actual image

const Students = () => {
  // Dati del presidente e dei dipartimenti
  const president = {
    id: 1,
    image: profilePic,
    name: 'Mirko',
    surname: 'Franzoni',
    role: 'Team Leader',
    email: 'mirko.franzoni@example.com',
    linkedin: 'https://www.linkedin.com/in/mirkofranzoni',
  };

  const departments = [
    {
      name: 'Strutture',
      leader: { image: profilePic, name: 'Anna', surname: 'Rossi', role: 'Responsabile', email: 'anna.rossi@example.com', linkedin: '#' },
      members: ['Mario Bianchi', 'Luca Verdi', 'Sara Neri'],
    },
    {
      name: 'Aerodinamica',
      leader: { image: profilePic, name: 'Luca', surname: 'Ricci', role: 'Responsabile', email: 'luca.ricci@example.com', linkedin: '#' },
      members: ['Giulia Ferri', 'Andrea Galli', 'Marco Moretti'],
    },
    {
      name: 'Simulazione del volo',
      leader: { image: profilePic, name: 'Marco', surname: 'Gallo', role: 'Responsabile', email: 'marco.gallo@example.com', linkedin: '#' },
      members: ['Elena Bianchi', 'Davide Neri'],
    },
    {
      name: 'Avionica',
      leader: { image: profilePic, name: 'Elisa', surname: 'Ferri', role: 'Responsabile', email: 'elisa.ferri@example.com', linkedin: '#' },
      members: ['Francesca Rossi', 'Luigi Ricci'],
    },
    {
      name: 'Meccanica del volo',
      leader: { image: profilePic, name: 'Giorgio', surname: 'Conti', role: 'Responsabile', email: 'giorgio.conti@example.com', linkedin: '#' },
      members: ['Matteo Bianchi', 'Clara Rossi'],
    },
    {
      name: 'Aeroacustica',
      leader: { image: profilePic, name: 'Martina', surname: 'Lombardi', role: 'Responsabile', email: 'martina.lombardi@example.com', linkedin: '#' },
      members: ['Fabio Verdi', 'Silvia Ferri'],
    },
    {
      name: 'Propulsione',
      leader: { image: profilePic, name: 'Paolo', surname: 'Greco', role: 'Responsabile', email: 'paolo.greco@example.com', linkedin: '#' },
      members: ['Federica Galli', 'Alessandro Neri'],
    },
  ];

  // Stato per il dipartimento selezionato
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  return (
    <div className="students-page">
      <Navbar />

      {/* Presidente al centro */}
      <div className="president-section">
        <div className="president">
          <Member
            image={president.image}
            name={president.name}
            surname={president.surname}
            role={president.role}
            email={president.email}
            linkedin={president.linkedin}
          />
        </div>
      </div>

      {/* Dipartimenti centrati */}
      <div className="departments">
        <h2>I nostri dipartimenti</h2>
        <div className="department-menu">
          {departments.map((department, index) => (
            <div
              key={index}
              className="department-item"
              onClick={() => setSelectedDepartment(selectedDepartment === department.name ? null : department.name)}
            >
              {department.name}
            </div>
          ))}
        </div>

        {/* Dettagli del dipartimento selezionato */}
        {selectedDepartment && (
          <div className="department-details">
            {departments
              .filter((dept) => dept.name === selectedDepartment)
              .map((dept, index) => (
                <div key={index}>
                  <h3>{dept.name}</h3>
                  <div className="department">
                  
                  <Member
                    image={dept.leader.image}
                    name={dept.leader.name}
                    surname={dept.leader.surname}
                    role={dept.leader.role}
                    email={dept.leader.email}
                    linkedin={dept.leader.linkedin}
                  />
                  </div>
                  <h4>Membri del team</h4>
                  <ul>
                    {dept.members.map((member, idx) => (
                      <li key={idx}>{member}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Students;
