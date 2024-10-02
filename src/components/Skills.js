import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Styles/Skills.css';
import { Card, Col, Row } from 'react-bootstrap';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skills = [
    {
      category: 'Frontend',
      items: ['HTML - 5', 'CSS - 3', 'Responsive Design']
    },
    {
      category: 'Programming Language',
      items: ['JavaScript', 'MySQL', 'Python']
    },
    {
      category: 'Libraries and Tools',
      items: ['Bootstrap - 5', 'React.js', 'Redux', 'Git']
    },
    {
      category: 'Database',
      items: ['MongoDB']
    }
  ];

  return (
    <div className="skills container" data-aos="fade-up">
      <h2 className='mb-4'>Skills</h2>
      <Row>
        {skills.map((skillCategory, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card data-aos="fade-up" className="h-100 bg-black " >
              <Card.Body className="bg-black rounded text-white card ">
                <Card.Title className="text-white fw-bold">{skillCategory.category}</Card.Title>
                <hr />
                <ul className="list-unstyled">
                  {skillCategory.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="sl">{item}</li>
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
