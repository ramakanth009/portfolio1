import React from 'react';
import '../section.css';
import Template from '../../template/template';
import data from '../../../data/Data.json';

const Work = () => {
  const { title, subtitle } = data.sections.work;
  
  return (
    <div className="section-container">
      <div className="section-header">
        <div className="section-title-section">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
      </div>
      
      <div className="template-wrapper">
        <Template sectionKey="work" />
      </div>
    </div>
  );
};

export default Work;