import React, {useEffect} from 'react';
import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';
import profilePic from '../images/Zefiro_Logo_NoBackground.png'; // Replace with actual image
import Manager from '../components/Team/Manager';
import avallone_image from '../images/Advisors/immagine_Avallone.png';
import lerro_image from '../images/Advisors/immagine_Lerro.png';
import Department from '../components/Team/Department';
import image_alfonso from '../images/Departments/image_alfonso.jpg'
import image_dario from '../images/Departments/image_dario.jpg'
//import image_francesca from '../images/Departments/image_francesca.jpg'
import image_matteo from '../images/Departments/image_matteo.jpg'
import image_niccolo from '../images/Departments/image_niccolo.jpg'
import image_mirko from '../images/Departments/image_mirko.jpg'
import image_antonio from '../images/Departments/image_antonio.jpeg'
import CustomPieChart from '../components/Team/CustomPieChart';
import ScrollToTop from '../ScrollToTop';

const Team = () => {

  useEffect(() => {
    document.title = "Team - Zefiro"; // Change the title to "About"
  }, []);

  const president = {
    id: 1,
    image: image_mirko,
    name: 'Mirko',
    surname: 'Franzoni',
    role: 'President',
    email: 'mirko.franzoni@studenti.polito.it',
    linkedin: 'https://www.linkedin.com/in/mirko-franzoni-578b21270/',
    large: true
  };

  const advisors = [
    { image: lerro_image, name: 'Angelo', surname: 'Lerro', role: 'Faculty Advisor', email: 'angelo.lerro@polito.it', linkedin: 'https://www.linkedin.com/in/angelo-lerro-20962528/', large: true},
    { image: avallone_image, name: 'Francesco', surname: 'Avallone', role: 'Faculty Advisor', email: 'francesco.avallone@polito.it', linkedin: 'https://www.linkedin.com/in/francesco-avallone-3772111b/', large: true},
    
  ]

  const departments = [
    {
      name:'Structures & Materials',
      subDepartments: [{
        name:"",
        leaders: [{image: image_alfonso, name: 'Alfonso', surname: 'Del Zingaro', role: 'Manager', 
        email:'alfonso.delzingaro@studenti.polito.it', linkedin: 'https://www.linkedin.com/in/alfonso-del-zingaro-73536b325/'}],
        members: ["Marco Fila Robattino", "Ismaele Gravili", "Marco D'Addato","Vincenzo Faugiana", "Francesca Vaccaro"],
      }]
    },
    {
      name: 'Aerodynamics & Aeroacoustics',
      subDepartments: [
        {
          name: "",
          leaders: [{ image: image_niccolo, name: "Niccolò", surname: "Fratamico", role: "Manager",
             email: "niccolo.fratamico@studenti.polito.it", linkedin: "https://www.linkedin.com/in/niccol%C3%B2-fratamico-74010734a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " }],
          members: ["Alessandro Donina","Mauro Tringali", "Lorenzo D'Alessandro", "Matteo Ferrero","Mattia Macaluso"],
        }]
    },
    {
      name: 'Propulsion',
      subDepartments: [
        {
          name: '',
          leaders: [{image: image_matteo, name: 'Matteo', surname: 'Russo', role:'Manager',
            email:'s286538@studenti.polito.it', linkedin: 'https://www.linkedin.com/in/matteo-russo-5b3b13314/'},
          ],
          members: ["Silvia Vivo","Giuseppe Bulla"]
        }
      ]
      
    },
    {
      name: 'Flight Mechanics & Flight Simulation',
      subDepartments: [
        {
          name: "Flight Simulation",
          leaders: [{ image: profilePic, name: "Primiano", surname: "D'Addetta", role: "Manager", 
            email: "primiano.daddetta@studenti.polito.it", linkedin: "https://www.linkedin.com/in/primiano-d-addetta-6a36b5239/" }],
          members: ["Aurora Guerriero", "Michele Dona","Francesca Bianco", "Tania Giannuzzi", "Guido Di Lorenzo", "Luigi Vele"],

          //leaders: [{ image: image_francesca, name: "Francesca Pia", surname: "Vaccaro", role: "Manager", 
          //email: "francescapia.vaccaro@studenti.polito.it", linkedin: "https://www.linkedin.com/in/francesca-pia-vaccaro-028218210/" }],
        }
      ]
    }, 
    {
      name: 'Avionics & Systems Integration',
      subDepartments: [
        {
          name:"",
          leaders: [{image: image_dario, name: 'Dario', surname: 'Vetrano', role:'Manager',
          email:'dario.vetrano@studenti.polito.it', linkedin: 'https://www.linkedin.com/in/dario-vetrano-827b09218/'}],
          members: ["Ionut Covaci","Marcello Iacampo", "Marco Antonio Cannarsa","Hasan Abdullah", "Davide Alban"],
        }
      ]
      
    },
    {
      name: "Software Development",
      subDepartments: [
        {
          name: "",
          leaders: [{ image: image_antonio, name: "Antonio Pio", surname: "Evangelista", role: "Manager", 
          email: "antoniopio.evangelista@studenti.polito.it", linkedin: "https://www.linkedin.com/in/antonio-pio-evangelista" }],
          members: ["Andrea Falaschi", "Balzhan Dosmukhametova", "Michele Pio Lasalvia", "Cornel Secrieri","Shayaan Raza Khan", "Mattia Schina"],
        }
      ]
        
    },
    {
      name: "Management",
      subDepartments: [
        {
          name: "",
          leaders: [{ image: profilePic, name: "Camille", surname: "Baldi", role: "Manager", 
          email: "s346304@studenti.polito.it", linkedin: "https://www.linkedin.com/in/camille-baldi" }],
        }
      ]
    }
  ];
  
  const piecharts = [
    {
      data: [
        { name: "Aerospace", value: 76.2 },
        { name: "Computer", value: 9.5 },
        { name: "Electronic", value: 9.5 },
        { name: "Energetic", value: 4.8 }
      ],
      title: "Members by program",
      colors : ['#0C4765', '#FFD966', '#CFDAE0', '#5198BB']
    },
    {
      data: [
        { name: "Bachelor's", value: 4.8 },
        { name: "Master's", value: 95.2 },
      ],
      title: "Members by education level",
      colors : ['#5198BB','#0C4765', '#FFD966', '#CFDAE0']
    },
    {
      data: [
        { name: "Domestic", value: 90.5 },
        { name: "International", value: 9.5},
      ],
      title: "International students rate",
      colors : ['#0C4765','#5198BB', '#FFD966', '#CFDAE0']
    },
  ];

  return (
    <>
    <ScrollToTop />
    <Navbar />
    <div className="team">
      
      <h1>Team</h1>

      {/* Presidente*/}
        <div className="president">
          <Manager
            image={president.image}
            name={president.name}
            surname={president.surname}
            role={president.role}
            email={president.email}
            linkedin={president.linkedin}
            large={president.large}
          />
        </div>

      <h2>Our Departments</h2>

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

    <h2>Our Advisors</h2>

      <div className="advisors-container">
        {advisors.map((advisor) => (
          <Manager
            image={advisor.image}
            name={advisor.name}
            surname={advisor.surname}
            role={advisor.role}
            email={advisor.email}
            linkedin={advisor.linkedin}
            large={advisor.large}
          />
        ))}
      </div>

    <h2>Zefiro statistics</h2>

      <div className='piecharts-container'>
        {piecharts.map((piechart) =>(
          <CustomPieChart
            data={piechart.data}
            title={piechart.title}
            colors={piechart.colors}
            dataKey={piechart.dataKey}
            nameKey={piechart.nameKey}
          />
        ))}
      </div>

        

      
    </div>
    <Footer />
    </>
  );
};

export default Team;
