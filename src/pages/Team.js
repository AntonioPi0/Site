import React, { useState } from 'react';
import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';
import profilePic from '../images/Zefiro_Logo_NoBackground.png'; // Replace with actual image
import Manager from '../components/Team/Manager';
import avallone_image from '../images/Advisors/immagine_Avallone.png';
import lerro_image from '../images/Advisors/immagine_Lerro.png';
import Department from '../components/Team/Department';
import image_alfonso from '../images/Departments/image_alfonso.jpg'


const Team = () => {

  const president = {
    id: 1,
    image: profilePic,
    name: 'Mirko',
    surname: 'Franzoni',
    role: 'Presidente',
    email: 'mirko.franzoni@studenti.polito.it',
    linkedin: 'https://www.linkedin.com/in/mirkofranzoni',
  };

  const advisors = [
    { image: lerro_image, name: 'Angelo', surname: 'Lerro', role: 'Faculty Advisor', email: 'angelo.lerro@polito.it', linkedin: '#' },
    { image: avallone_image, name: 'Francesco', surname: 'Avallone', role: 'Faculty Advisor', email: 'francesco.avallone@polito.it', linkedin: '#' },
    
  ]

  const departments = [
    {
      name:'Strutture',
      leader: {image: image_alfonso, name: 'Alfonso', surname: 'Del Zingaro', role: 'Responsabile', 
          email:'alfonso.delzingaro@studenti.polito.it', linkedin: '#'},
      members: ['Mirko Franzoni'],
      subDepartments: []
    },
    {
      name: 'Aereodinamica e Aereoacustica',
      leader: {image: profilePic, name: 'Niccolò', surname: 'Fratamico', role:'Responsabile',
        email:'niccolo.fratamico@studenti.polito.it', linkedin: '#'},
      members: [],
      subDepartments: [
        {
          name: "Aereodinamica",
          leader: { image: profilePic, name: "Niccolò", surname: "Fratamico", role: "Responsabile", email: "niccolo.fratamico@studenti.polito.it", linkedin: "#" },
          members: ["Lorenzo"],
        },
        {
          name: "Aereoacustica",
          leader: { image: profilePic, name: "Christian", surname: "Gambino", role: "Responsabile", email: "christian.gambino@studenti.polito.it", linkedin: "#" },
          members: ["Lorenzo"],
        }
      ]
    },
    {
      name: 'Propulsione',
      leader: [{image: profilePic, name: 'Matteo', surname: 'Russo', role:'Responsabile',
        email:'matteo.russo@studenti.polito.it', linkedin: '#'},
        {image: profilePic, name: 'Riccardo', surname: 'Monteleone', role:'Responsabile',
          email:'riccardo.monteleone@studenti.polito.it', linkedin: '#'}
      ],
      members: []
    },
    {
      name: 'Sistemi',
      leader: {image: profilePic, name: 'Dario', surname: 'Vetrano', role:'Responsabile',
        email:'dario.vetrano@studenti.polito.it', linkedin: '#'},
      members: [],
      subDepartments: [
        {
          name: "Elettronica",
          leader: { image: profilePic, name: "Niccolò", surname: "Fratamico", role: "Responsabile", email: "dario.vetrano@studenti.polito.it", linkedin: "#" },
          members: ["Nima Nouri","Marcello", "Erfan","Marco Ercole"],
        },
        {
          name: "Sviluppo Software",
          leader: { image: profilePic, name: "Antonio Pio", surname: "Evangelista", role: "Responsabile", email: "antoniopio.evangelista@studenti.polito.it", linkedin: "#" },
          members: ["Andrea Fala"],
        }
      ]
    },
    {
      name: 'Meccanica del volo e simulazione del volo',
      leader: {image: profilePic, name: 'Primiano', surname: 'D\'Addatta', role:'Responsabile',
        email:'primiano.daddata@studenti.polito.it', linkedin: '#'},
      members: [],
      subDepartments: [
        {
          name: "Simulazione del volo",
          leader: { image: profilePic, name: "Primiano", surname: "D'Addatta", role: "Responsabile", email: "primiano.daddatta@studenti.polito.it", linkedin: "#" },
          members: [],
        },
        {
          name: "Meccanica del volo",
          leader: { image: profilePic, name: "Francesca Pia", surname: "Vaccaro", role: "Responsabile", email: "francesca.vaccaro@studenti.polito.it", linkedin: "#" },
          members: ["Francesca Bianco", "Tania Giannuzzi"],
        }
      ]
    }
  ];

  // Stato per il dipartimento selezionato
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  return (
    <div className="students-page">
      <Navbar />

      {/* Presidente*/}
      <div className="president-section">
        <div className="president">
          <Manager
            image={president.image}
            name={president.name}
            surname={president.surname}
            role={president.role}
            email={president.email}
            linkedin={president.linkedin}
          />
        </div>
      </div>

      <h2>I nostri dipartimenti</h2>

      <div className="departments-container">
      {departments.map((department, index) => (
        <div key={index} className="department-item">
          <Department
            name={department.name}
            leader={department.leader}
            members={department.members}
            subDepartments={department.subDepartments}
          />
        </div>
      ))}
    </div>

    <h2>I nostri Advisors</h2>

      <div className="advisors-container">
        {advisors.map((advisor) => (
          <Manager
            image={advisor.image}
            name={advisor.name}
            surname={advisor.surname}
            role={advisor.role}
            email={advisor.email}
            linkedin={advisor.linkedin}
          />
        ))}
      </div>

        

      <Footer />
    </div>
  );
};

export default Team;
