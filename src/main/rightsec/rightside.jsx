import React from 'react';
import Work from '../../components/sections/work/Work';
import Projects from '../../components/sections/projects/Projects';
import Education from '../../components/sections/education/Education';

const RightSide = ({ activeTab }) => {
  const renderSection = () => {
    switch (activeTab) {
      case 'work':
        return <Work />;
      case 'projects':
        return <Projects />;
      case 'education':
        return <Education />;
      default:
        return <Work />;
    }
  };

  return (
    <div className="rightside-container">
      {renderSection()}
    </div>
  );
};

export default RightSide;