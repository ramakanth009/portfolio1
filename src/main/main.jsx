import React, { useState, useEffect } from 'react';
import Introside from './leftsec/introside';
import Rightside from './rightsec/rightside';
import Navbar from '../components/navbar/Navbar';
import '../components/navbar/Navbar.css';
import './main.css';

const Main = () => {
  const [activeTab, setActiveTab] = useState('work');
  
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved theme preference or use system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('darkMode');
      if (savedTheme !== null) {
        return savedTheme === 'true';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Apply dark/light mode to the document
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={`main-container ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="main-content">
        <div className={`left-section ${darkMode ? 'dark' : ''}`}>
          <Introside onTabChange={handleTabChange} />
        </div>
        <div className="right-section">
          <Rightside activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default Main;