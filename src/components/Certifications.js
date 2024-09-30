import React from 'react';
import '../Styles/Certifications.css';

const Certifications = () => {
    const certificationsData = [
      {
        title: 'FrontEnd Developer Course - Besant Technologies',
        link: 'https://www.besanttech.com/',
      },
      {
        title: 'React Basics - Meta',
        link: 'https://www.coursera.org/meta',
      },
    ];
  
    return (
        <div>
            <hr/>
      <div className="certifications" data-aos="fade-up">
        <h2>Certifications</h2>
        <ul className="certification-list">
          {certificationsData.map((certification, index) => (
            <li key={index} className="certification-item">
              <span>{certification.title}</span>
              <a 
                href={certification.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="view-link"
              >
                View
              </a>
            </li>
          ))}
        </ul>
        
        
      </div>
      <hr/>
      </div>
    );
  }
  
  export default Certifications;