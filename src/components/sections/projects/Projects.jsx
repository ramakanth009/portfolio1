import React from 'react';
import '../section.css';
import Template from '../../template/template';
import data from '../../../data/Data.json';

const Projects = () => {
  const { title, subtitle } = data.sections.projects;
  
  return (
    <div className="section-container">
      <div className="section-header">
        <div className="section-title-section">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
      </div>
      <div className="template-wrapper">

      <Template sectionKey="projects" />
      </ div>
    </div>
  );
};

export default Projects;