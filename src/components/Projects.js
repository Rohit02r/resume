import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Styles/Projects.css';
import dd from '../assets/dgd.png';
import abcd from '../assets/abc.png';
import sk from '../assets/skdental.png';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      name: 'Dogs Den',
      image:dd,
      description: 'Built with React, Bootstrap, and Bootstrap-Toaster, The Dogs Den is your go-to app for buying and selling dogs effortlessly',
      link: 'https://rohit02r.github.io/dogsden/',
    },
    {image:sk,
      name: 'Sk Dental',
      description: 'Developed using React, Bootstrap, SK Dental offers a seamless experience for managing dental appointments and services.',
      link: 'https://rohit02r.github.io/skdental/',
    },
    {
      image:abcd,
      name: 'ABCD Dance Academy',
      description: 'A responsive , user-friendly Dance Academy website with attractive UI. Which is done using HTML, CSS, JavaScript, and Bootstrap.',
      link: 'https://rohit02r.github.io/ABCDdanceAcademy/',
    },
    
  ];

  return (
    <div className="projects" data-aos="fade-up">
      <hr/>
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt='project ' className='pi'></img>
            <h3 className='ph'>{project.name}</h3>
            <hr/>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;