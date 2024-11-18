import React from 'react';
import Navbar from '../components/Navbar';
import Member from '../components/Member';
import Footer from '../components/Footer';
import pic from '../images/Zefiro_Logo_NoBackground.png'

const Advisors = () => {
  const advisors = [
    { id: 1, image: pic, name: 'John', surname: 'Doe', role: 'Team Leader', email: 'john.doe@example.com', linkedin: 'https://www.linkedin.com/in/johndoe' },
    { id: 2, image: pic, name: 'Jane', surname: 'Smith', role: 'Designer', email: 'jane.smith@example.com', linkedin: 'https://www.linkedin.com/in/janesmith' },
    { id: 3, image: pic, name: 'Alice', surname: 'Johnson', role: 'Developer', email: 'alice.johnson@example.com', linkedin: 'https://www.linkedin.com/in/alicejohnson' },
    { id: 4, image: pic, name: 'Bob', surname: 'Brown', role: 'Researcher', email: 'bob.brown@example.com', linkedin: 'https://www.linkedin.com/in/bobbrown' },
    { id: 5, image: pic, name: 'Charlie', surname: 'Davis', role: 'Marketing', email: 'charlie.davis@example.com', linkedin: 'https://www.linkedin.com/in/charliedavis' },
    { id: 6, image: pic, name: 'Ella', surname: 'Williams', role: 'Engineer', email: 'ella.williams@example.com', linkedin: 'https://www.linkedin.com/in/ellawilliams' },
    { id: 7, image: pic, name: 'David', surname: 'Wilson', role: 'Product Manager', email: 'david.wilson@example.com', linkedin: 'https://www.linkedin.com/in/davidwilson' },
    { id: 8, image: pic, name: 'Grace', surname: 'Taylor', role: 'Analyst', email: 'grace.taylor@example.com', linkedin: 'https://www.linkedin.com/in/gracetaylor' },
  ];

  return (
    <div className="team-page">

      <Navbar />
      
      <div className="intro">
        <h2>Meet Our Advisors</h2>
        <p>Our advisors bring extensive experience and guidance to the team, ensuring our success in every venture.</p>
      </div>
      <div className="advisors-list">
        {advisors.map((advisor) => (
          <Member
            key={advisor.id}
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

export default Advisors;

