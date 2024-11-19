"use client"

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/main.css';
import logo from '../images/Zefiro_HLogo_NoBackground.png';

/*

 <button
            id="theme-toggle"
            onClick={toggleTheme}
            className="theme-toggle"
          >
            {darkMode ? 'Dark' : 'Light'}
          </button>

  <button
            id="theme-toggle-mobile"
            onClick={toggleTheme}
            className="theme-toggle"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>

          const [darkMode, setDarkMode] = useState(false);

          const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
  };
*/

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
                className={({isActive }) => (isActive ? 'noactive' : '')}
              >
                TEAM
              </NavLink>
              
            </div>

            {
              <div className="dropdown-content">
                <NavLink 
                 to="/team_students"
                 className={({isActive }) => (isActive ? 'active' : '')}>
                  Students</NavLink>
                <NavLink to="/team_advisors">Advisors</NavLink>
              </div>
            }
            
          </div>
          <NavLink
            to="/sponsors"
            className={({ isActive }) => (isActive ? 'active' : '')}
            >
            SPONSORS
            </NavLink>
          
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;