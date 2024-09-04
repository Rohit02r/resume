import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePic from './assets/Profile.jpg'; 

const Resume = () => {
  return (
    <div className="min-vh-100 bg-dark text-light font-rubik p-4">
      <div className="container p-5">
        <div className="d-flex flex-column align-items-center flex-md-row" data-aos="fade-up">
          <img src={profilePic} alt="Profile" className="rounded-circle mb-4 mb-md-0 me-md-4" style={{ width: '150px', height: '150px' }} />
          <div className="text-center text-md-start">
            <h1 className="display-4 fw-bold">Rohit R</h1>
            <p className="fs-4 mt-2">FrontEnd Developer</p>
            <p className="mt-2">
              <a href="mailto:rohit02r@gmail.com" className="text-primary text-decoration-none">rohit02r@gmail.com</a>
            </p>
            <p className="mt-2">
              <a href="https://linkedin.com/in/rohit-r-089830250/" className="text-primary text-decoration-none me-4">
                <FaLinkedin className="me-2" />
                LinkedIn
              </a>
              <a href="https://github.com/Rohit02r" className="text-primary text-decoration-none">
                <FaGithub className="me-2" />
                GitHub
              </a>
            </p>
          </div>
        </div>
        
       
        <div className="mt-5" data-aos="fade-up">
          <h2 className="display-6 fw-bold">Summary</h2>
          <p className="mt-3">
                        Enthusiastic and dedicated Front End Developer
                with a solid foundation in HTML, CSS, Bootstrap, JavaScript, and React.js.
                Proficient in creating responsive, user-friendly web applications.
                Good at building modern interfaces with a focus on usability.
                Always eager to learn and apply new technologies.




          </p>
        </div>

        
        <div className="mt-5" data-aos="fade-up">
          <h2 className="display-6 fw-bold">Technical Skills</h2>
          <div className="row row-cols-1 row-cols-sm-2 g-4 mt-3">
            <div className="col">
              <div className="bg-secondarys p-4 rounded shadow">
                <h3 className="fs-5 fw-semibold">Programming Languages</h3>
                <p>JavaScript, MySQL</p>
              </div>
            </div>
            <div className="col">
              <div className="bg-secondarys p-4 rounded shadow">
                <h3 className="fs-5 fw-semibold">Front End</h3>
                <p>HTML, CSS, Responsive Design, CRUD operations</p>
              </div>
            </div>
            <div className="col">
              <div className="bg-secondarys p-4 rounded shadow">
                <h3 className="fs-5 fw-semibold">Libraries & Tools</h3>
                <p>Bootstrap, React.js, Redux, Git</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mt-5" data-aos="fade-up">
          <h2 className="display-6 fw-bold">Projects</h2>
          <div className="mt-3">
            <div className="bg-secondarys p-4 rounded shadow mb-4">
              <h3 className="fs-5 fw-semibold">DJ Salon</h3><br/>
              <p><ul>
                <li>Developed and designed DJ Saloon website using React and Bootstrap, creating a modern and responsive user interface.</li><br/>
                <li> Integrated various features including an appointment booking form, service listings, and product sections to enhance user engagement</li><br/>
                <li>Utilized React components and Bootstrap styling to ensure a seamless and visually appealing experience across all devices</li><br/>
                </ul></p>
              <a href="https://rohit02r.github.io/djsalon/" className="text-primary text-decoration-none">View Project</a>
            </div>
            <div className="bg-secondarys p-4 rounded shadow mb-4">
              <h3 className="fs-5 fw-semibold">ABCD Dance Academy</h3><br/>
              <p><ul><li>Designed and developed the ABCD Dance Academy website using HTML, CSS, and Bootstrap, delivering a visually appealing and responsive design.</li><br/>
                <li>Implemented interactive features and smooth animations with JavaScript to enhance user experience and engagement.</li><br/>
                <li>Created a comprehensive site layout including class schedules, instructor profiles, and contact forms, ensuring optimal functionalityacross various devices.</li><br/>
                </ul></p>
              <a href="https://rohit02r.github.io/ABCDdanceAcademy/" className="text-primary text-decoration-none">View Project</a>
            </div>
          </div>
        </div>

        <div className="mt-5" data-aos="fade-up">
          <h2 className="display-6 fw-bold">Education</h2>
          <p className="mt-3">
            B.E in Electrical and Electronics Engineering<br />
            Chennai Institute of Technology, Chennai (Jun 2019 – Apr 2023)
          </p>
        </div>

        
        <div className="mt-5" data-aos="fade-up">
          <h2 className="display-6 fw-bold">Certifications</h2>
          <p className="mt-3">FrontEnd Developer Course - Besant Technologies</p>
          <p className="mt-3">React Basics - Coursera <a href="https://www.coursera.org/account/accomplishments/verify/S7DPZVXJ2JRD" className="text-primary text-decoration-none">view</a>
          </p>
          </div>
      </div>
    </div>
  );
};

export default Resume;
