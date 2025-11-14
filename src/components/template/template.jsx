import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import './template.css';
import data from '../../data/Data.json';

const Template = ({ sectionKey }) => {
  const section = data.sections[sectionKey];
  const items = section?.items || [];

  // Show item numbers if there is more than one item
  const showItemNumbers = items.length > 1;

  return (
    <div className="template-container">
      <div className="timeline">
        {items.map((item, idx) => (
          <div className="year-section" key={idx}>
            {showItemNumbers && (
              <div className="year-indicator">
                <span className="year-chevron">›</span>
                <span className="year-text">{String(idx + 1).padStart(2, '0')}</span>
              </div>
            )}
            <div className="entry-item">
              <div className="entry-header">
                <div className="entry-title-section">
                  <div className="duration">{item.duration}</div>
                  <h3>{item.title}</h3>
                  {item.subtitle && <p className="company">{item.subtitle}</p>}
                </div>
              </div>

              <div className="entry-divider"></div>

              {Array.isArray(item.highlights) && item.highlights.length > 0 && (
                <div className="highlights-container">
                  {item.highlights.map((highlightGroup, groupIndex) => (
                    <div key={groupIndex} className="highlights-section">
                      <div className="highlights-header">
                        <div className="highlights-line"></div>
                        <div className="highlights-content">
                          <h4 className="highlights-title">{highlightGroup.title}</h4>
                        </div>
                      </div>
                      <ul>
                        {highlightGroup.points.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {Array.isArray(item.skills) && item.skills.length > 0 && (
                <div className="entry-skills">
                  {item.skills.map((s, i) => (
                    <span className="entry-skill" key={i}>
                      {s}
                    </span>
                  ))}
                </div>
              )}

              {Array.isArray(item.links) && item.links.length > 0 && (
                <div className="entry-links">
                  {item.links.map((link, i) => (
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="entry-link" 
                      key={i}
                    >
                      {link.text}
                      {link.text && <FiChevronRight className="link-chevron" />}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template;