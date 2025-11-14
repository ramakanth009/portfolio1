import React from 'react';
import * as FaIcons from 'react-icons/fa';
import './Navbar.css';
import data from '../../data/Data.json';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const { socialLinks } = data;
  
  // Dynamically import icons based on the icon name from data
  const getIconComponent = (iconName) => {
    const IconComponent = FaIcons[iconName];
    return IconComponent ? <IconComponent className="icon" /> : null;
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="nav-left-section">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            aria-label={link.ariaLabel}
          >
            {getIconComponent(link.icon)}
          </a>
        ))}
      </div>
      <div className="nav-right-section">
        <button onClick={toggleDarkMode} className="theme-toggle" aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
          {darkMode ? <FaIcons.FaSun className="icon" /> : <FaIcons.FaMoon className="icon" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
