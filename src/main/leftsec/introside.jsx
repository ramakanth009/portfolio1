import React, { useState, useEffect } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import './introside.css';
import data from '../../data/Data.json';

const Introside = ({ onTabChange }) => {
  const { intro } = data;
  const [activeTab, setActiveTab] = useState('work');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isBlurred, setIsBlurred] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  useEffect(() => {
    if (!intro.titles || intro.titles.length <= 1) return;

    const interval = setInterval(() => {
      setIsBlurred(true);
      
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => 
          prevIndex === intro.titles.length - 1 ? 0 : prevIndex + 1
        );
        setIsBlurred(false);
      }, 800); // Increased from 500ms to 800ms for longer blur duration
      
    }, 5000); // Increased from 3000ms to 5000ms (5 seconds) for longer display time

    return () => clearInterval(interval);
  }, [intro.titles]);

  return (
    <div className="intro-container">
      <h1 className="intro-title">{intro.name}</h1>
      <h2 className={`intro-subtitle ${isBlurred ? 'blurred' : ''}`}>
        {intro.titles[currentTitleIndex]}
      </h2>
      
      <div className="intro-content">
        <p className="intro-text">{intro.description}</p>
        <div className="action-container">
          <div className="chip">
            {intro.availability}
          </div>
          <a 
            href={`mailto:${intro.contact.email}?subject=${encodeURIComponent(intro.contact.subject)}`}
            className="contact-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="btn-icon" />
            <span>Get In Touch</span>
          </a>
        </div>
        <div className="segment-tabs">
          <button 
            className={`tab ${activeTab === 'work' ? 'active' : ''}`}
            onClick={() => handleTabClick('work')}
          >
            Work
          </button>
          <button 
            className={`tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => handleTabClick('projects')}
          >
            Projects
          </button>
          <button 
            className={`tab ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => handleTabClick('education')}
          >
            Education
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introside;