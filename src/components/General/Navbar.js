"use client"

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/main.css';
import logo from '../../images/Zefiro_HLogo_NoBackground.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  

  return (
    <nav className="navbar">
      <div className="nav-content">
        <NavLink to="/" className="logo">
          <img src={logo} alt="Zefiro Logo" height="50" />
        </NavLink>
        
        {/* Mobile Menu Trigger */}
        <div className="mobile-container">
          
          
          {/* Burger Component for Mobile */}
          <div 
            className="burger-container" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`burger ${isMenuOpen ? 'open' : ''}`}>
              <div className="burgerLine"/>
              <div className="burgerLine"/>
              <div className="burgerLine"/>
            </div>
          </div>
        </div>

        {/* Full Menu */}
        <div className={`nav-links ${isMenuOpen ? 'active mobile-menu' : ''}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            ABOUT
          </NavLink>
          <div 
            className="dropdown" 
          >
            <div className="dropdown-title">
            <NavLink
                to="/team"
                className={({isActive }) => (isActive ? 'active' : '')}
              >
                TEAM
              </NavLink>
              
            </div>
            
          </div>
          <NavLink
            to="/apply"
            className={({ isActive }) => (isActive ? 'active' : '')}
            >
            APPLY
            </NavLink>
          
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;