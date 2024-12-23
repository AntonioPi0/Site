import React from 'react';
import '../../css/main.css';

const Burger = ({ open, onToggle }) => {
  return (
    <div className={`burger ${open ? 'open' : ''}`} onClick={onToggle}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default Burger;
