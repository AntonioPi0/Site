import React from 'react';
import '../../css/main.css';

const RightNav = ({ open }) => {
  return (
    <ul className={`right-nav ${open ? 'open' : ''}`}>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Sign In</li>
      <li>Sign Up</li>
    </ul>
  );
};

export default RightNav;
