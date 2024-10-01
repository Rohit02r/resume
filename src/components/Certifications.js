import React from 'react';
import '../Styles/Certifications.css';

const Certifications = () => {
  const certificationsData = [
    {
      title: 'FrontEnd Developer Course - Besant Technologies',
    },
    {
      title: 'React Basics - Meta',
      link: 'https://coursera.org/share/10108a17d5c495f6383c82ee1b1ee6aa',
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
              {/* Check if the certification has a link and is not the first one */}
              {certification.link && index !== 0 && (
                <a 
                  href={certification.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="view-link"
                >
                  View
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
      <hr/>
    </div>
  );
};

export default Certifications;