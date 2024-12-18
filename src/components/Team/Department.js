"use client";

import React, { useState } from "react";
import Manager from "./Manager";
import '../../css/main.css';

const Department = ({ name, leader, members, subDepartments }) => {
  const [expandedSubDepts, setExpandedSubDepts] = useState([]);

  const toggleSubDepartment = (index) => {
    setExpandedSubDepts((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="department-container">
      {/* Nome e Responsabile Generale */}
      <h3>{name}</h3>
      <div className="department-manager">
        <Manager
          image={leader.image}
          name={leader.name}
          surname={leader.surname}
          role={leader.role}
          email={leader.email}
          linkedin={leader.linkedin}
        />
      </div>

      {members && members.length > 0 && (
        <div>
          <h4>Membri del Dipartimento</h4>
          <ul>
            {members.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Sottodipartimenti */}
      {subDepartments && subDepartments.length > 0 && (
        <div className="subdepartments-section">
          {subDepartments.map((subDepartment, index) => (
            <div key={index} className="subdepartment">
              {/* Nome del Sottodipartimento (click per espandere/comprimere) */}
              <h4
                onClick={() => toggleSubDepartment(index)}
              >
                {subDepartment.name}
              </h4>

              {/* Contenuto del sottodipartimento, visibile solo se espanso */}
              {expandedSubDepts.includes(index) && (
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
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Department;
