import React, {useEffect} from 'react';
import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';
import profilePic from '../images/Zefiro_Logo_NoBackground.png'; // Replace with actual image
import Manager from '../components/Team/Manager';
import avallone_image from '../images/Advisors/immagine_Avallone.png';
import lerro_image from '../images/Advisors/immagine_Lerro.png';
import Department from '../components/Team/Department';
import image_alfonso from '../images/Departments/image_alfonso.jpg'
import CustomPieChart from '../components/Team/CustomPieChart';
import ScrollToTop from '../ScrollToTop';

const Team = () => {

  useEffect(() => {
    document.title = "Team - Zefiro"; // Change the title to "About"
  }, []);

  const president = {
    id: 1,
    image: profilePic,
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
        members: ['Mirko Franzoni'],
      }]
    },
    {
      name: 'Aereodinamics & Aereoacustics',
      subDepartments: [
        {
          name: "Aereodinamics",
          leaders: [{ image: profilePic, name: "Niccolò", surname: "Fratamico", role: "Manager",
             email: "niccolo.fratamico@studenti.polito.it", linkedin: "#" }],
          members: ["Lorenzo D'Alessandro", ],
        },
        {
          name: "Aereoacustics",
          leaders: [{ image: profilePic, name: "Christian", surname: "Gambino", role: "Manager", 
            email: "christian.gambino@studenti.polito.it", linkedin: "https://www.linkedin.com/in/christian-gambino/" }],
          members: ["Gabriel Cialdini"],
        }
      ]
    },
    {
      name: 'Propulsion',
      subDepartments: [
        {
          name: '',
          leaders: [{image: profilePic, name: 'Matteo', surname: 'Russo', role:'Manager',
            email:'s286538@studenti.polito.it', linkedin: 'https://www.linkedin.com/in/matteo-russo-5b3b13314/'},
            {image: profilePic, name: 'Riccardo', surname: 'Monteleone', role:'Manager',
              email:'riccardo.monteleone@studenti.polito.it', linkedin: 'https://www.linkedin.com/in/riccardo-monteleone-5a6b902a4/'}
          ],
          members: []
        }
      ]
      
    },
    {
      name: 'Flight Mechanics & Flight Simulation',
      subDepartments: [
        {
          name: "Flight Simulation",
          leaders: [{ image: profilePic, name: "Primiano", surname: "D'Addatta", role: "Manager", 
            email: "primiano.daddetta@studenti.polito.it", linkedin: "https://www.linkedin.com/in/primiano-d-addetta-6a36b5239/" }],
          members: [],
        },
        {
          name: "Flight Mechanics",
          leaders: [{ image: profilePic, name: "Francesca Pia", surname: "Vaccaro", role: "Manager", 
            email: "francescapia.vaccaro@studenti.polito.it", linkedin: "https://www.linkedin.com/in/francesca-pia-vaccaro-028218210/" }],
          members: ["Francesca Bianco", "Tania Giannuzzi"],
        }
      ]
    }, 
    {
      name: 'Control & Systems',
      subDepartments: [
        {
          name:"",
          leaders: [{image: profilePic, name: 'Dario', surname: 'Vetrano', role:'Manager',
          email:'dario.vetrano@studenti.polito.it', linkedin: 'https://www.linkedin.com/in/dario-vetrano-827b09218/'}],
          members: ["Nima Nouri","Marcello Iacampo", "Marco Antonio Cannarsa","Erfan Haghighat Damavandi","Marco Rubens Ercole"],
        }
      ]
      
    },
    {
      name: "Software Development",
      subDepartments: [
        {
          name: "",
          leaders: [{ image: profilePic, name: "Antonio Pio", surname: "Evangelista", role: "Manager", 
            email: "antoniopio.evangelista@studenti.polito.it", linkedin: "https://www.linkedin.com/in/antonio-pio-evangelista" }],
          members: ["Andrea Fala"],
        }
      ]
        
    }
  ];
  
  const piecharts = [
    {
      data: [
        { name: "Aerospace", value: 80 },
        { name: "Computer", value: 10 },
        { name: "Electronic", value: 5 },
        { name: "Energetic", value: 5 }
      ],
      title: "Industry Distribution",
    },
    {
      data: [
        { name: "Bachelor's", value: 5 },
        { name: "Master's", value: 95 },
      ],
      title: "Education Level",
    },
    {
      data: [
        { name: "Domestic", value: 90 },
        { name: "International", value: 10},
      ],
      title: "Student Demographics",
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
