import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Styles/Skills.css';
import { Card, Col, Row } from 'react-bootstrap';
import { AiOutlineAntDesign } from "react-icons/ai";
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGitAlt, FaGithub, FaDatabase, FaPython, FaJsSquare, FaCode, FaServer,FaChartBar  } from 'react-icons/fa';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML - 5', icon: <FaHtml5 className="skill-icon" /> },
        { name: 'CSS - 3', icon: <FaCss3Alt className="skill-icon" /> },
        { name: 'React', icon: <FaReact className="skill-icon" /> },
      ]
    },
    {
      category: 'Libraries & Frameworks',
      items: [
        { name: 'Bootstrap - 5', icon: <FaBootstrap className="skill-icon" /> },
        { name: 'Redux', icon: <FaReact className="skill-icon" /> },
        { name: 'Ant Design', icon:  <AiOutlineAntDesign className="skill-icon"  /> },
        { name: 'Apex Charts', icon:  <FaChartBar className="skill-icon"/> }
      ]
    },
    {
      category: 'Programming Languages',
      items: [
        { name: 'JavaScript', icon: <FaJsSquare className="skill-icon" /> },
        { name: 'TypeScript', icon: <BiLogoTypescript  className="skill-icon"/> },
        { name: 'Python', icon: <FaPython className="skill-icon" /> },
      ]
    },
    {
      category: 'Version Control',
      items: [
        { name: 'Git', icon: <FaGitAlt className="skill-icon" /> },
        { name: 'Github', icon: <FaGithub className="skill-icon" /> },
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Django', icon: <FaServer className="skill-icon" /> },
      ]
    },
    {
      category: 'Database',
      items: [
        { name: 'MySQL', icon: <FaDatabase className="skill-icon" /> },
      ]
    }
  ];

  return (
    <div className="skills container" data-aos="fade-up">
      <h2 className='mb-4'>Skills</h2>
      <Row>
        {skills.map((skillCategory, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card data-aos="fade-up" className="h-100 bg-black cs">
              <Card.Body className="bg-black rounded text-white">
                <Card.Title className="text-white fw-bold mb-4" >{skillCategory.category}</Card.Title>
                <hr />
                <ul className="list-unstyled">
                  {skillCategory.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="sl">
                      {item.icon} {item.name}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Skills;
