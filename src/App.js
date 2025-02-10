import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills'
import './App.css';
import Certifications from './components/Certifications';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="profile">
        <Profile />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="Certifications">
        <Certifications />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
