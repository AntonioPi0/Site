import React, { useState } from "react";
import Manager from "./Manager";
import '../../css/main.css';

const Department = ({ name,subDepartments }) => {

  return (
    <div className="department-container">
      {/* Nome e Responsabile Generale */}
      <h3>{name}</h3>

      {/* Sottodipartimenti */}
      {subDepartments && subDepartments.length > 0 && (
        <div className="subdepartments-section">
          {subDepartments.map((subDepartment, index) => (
            <div key={index} className="subdepartment">
                <h4>{subDepartment.name}</h4>

                <div className="subdepartment-content">
                  <div className="subdepartment-manager">
                    <Manager
                      image={subDepartment.leader.image}
                      name={subDepartment.leader.name}
                      surname={subDepartment.leader.surname}
                      role={subDepartment.leader.role}
                      email={subDepartment.leader.email}
                      linkedin={subDepartment.leader.linkedin}
                    />
                  </div>
                  {subDepartment.members && subDepartment.members.length > 0 && (
                    <div>
                      <h5>Membri</h5>
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
