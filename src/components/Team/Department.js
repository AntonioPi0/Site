import React from "react";
import Manager from "./Manager";
import '../../css/main.css';

const Department = ({ name,subDepartments }) => {

  return (
    <div className="department-container">
      {/* Nome e Responsabile Generale */}
      <h2>{name}</h2>

      {/* Sottodipartimenti */}
      {subDepartments && subDepartments.length > 0 && (
        <div className="subdepartments-section">
          {subDepartments.map((subDepartment, index) => (
            <div key={index} className="subdepartment">
                <h4>{subDepartment.name}</h4>

                <div className="subdepartment-content">

                  {subDepartment.leaders && subDepartment.leaders.length > 0 && (
                    <div>
                        {subDepartment.leaders.map((leader, idx) => (
                          <Manager
                          image={leader.image}
                          name={leader.name}
                          surname={leader.surname}
                          role={leader.role}
                          email={leader.email}
                          linkedin={leader.linkedin}
                        />
                        ))}
                    </div>
                  )}

                  {subDepartment.members && subDepartment.members.length > 0 && (
                    <div>
                      <h5>Members</h5>
                      <ul>
                        {subDepartment.members.map((member, idx) => (
                          <li key={idx}>{member}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Department;
