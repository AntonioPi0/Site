import React, { useState } from 'react';
import '../css/main.css';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
  };

  return (
    <button onClick={toggleTheme} id="theme-toggle">
      <span className="theme-text">{darkMode ? 'Dark' : 'Light'}</span>
    </button>
  );
};

export default ThemeToggle;
