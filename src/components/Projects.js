import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Styles/Projects.css';
import { FaFolderOpen } from 'react-icons/fa';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      name: 'CineTime',
      description: 'Frontend with React TypeScript, Backend with Django for booking and seat selection, MySQL for Database.',
    },
    {
      name: 'SPD Mobiles ECom',
      description: 'Django platform for mobile sales with cart using SQLite.',
    },
    {
      name: 'Web Scraper',
      description: 'Automated scraper using Selenium to extract data from websites.',
    },
    {
      name: 'DJ Salon Website',
      description: 'React-based salon site with Enhanced UI using Bootstrap.',
    },
    {
      name: 'Dogs Den',
      description: 'React site using React-Bootstrap, Yup for validation, and Toaster notifications.',
    },
    {
      name: 'ABCD Dance Academy',
      description: 'Responsive website with HTML, CSS, JavaScript, and Bootstrap.',
    },
  ];

  return (
    <div className="projects" data-aos="fade-up">
      <hr />
      <h2 className="projects-title">Projects</h2>
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item">
            <FaFolderOpen className="project-icon me-3" /> 
            <strong className="project-name">{project.name} - </strong> 
            <span className="project-description">{project.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
