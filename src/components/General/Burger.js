import React, { useState } from 'react';
import RightNav from './RightNav';
import '../../css/main.css';

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <div 
        className={`burger ${open ? 'open' : ''}`} 
        onClick={() => setOpen(!open)}
      >
        <div className="burgerLine"/>
        <div className="burgerLine"/>
        <div className="burgerLine"/>
      </div>
      <RightNav open={open}/>
    </>
  )
}

export default Burger;