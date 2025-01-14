"use client";

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/main.css';
import logo from '../../images/Zefiro_HLogo.png';
import Burger from './Burger';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        {/* Logo */}
        <NavLink to="/" className="logo">
          <img src={logo} alt="Zefiro Logo" height="50" />
        </NavLink>

        {/* Burger Menu for Mobile */}
        <div className="mobile-container">
          <Burger open={isMenuOpen} onToggle={handleMenuToggle} />
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? 'active mobile-menu' : ''}`}>
          
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            TEAM
          </NavLink>
          <NavLink
            to="/sponsors"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            SPONSORS
          </NavLink>
          
          <div className='apply-page'>
            <NavLink
              to="/apply"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              APPLY
            </NavLink>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
