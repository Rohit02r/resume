import React from 'react';
import '../Styles/Profile.css';
import Prop from '../assets/Profile.jpg'
import ReactTypingEffect from 'react-typing-effect';

import resumePDF from '../assets/RohitR_2024_B_E_EEE_FrontEnd_Developer_Velachery1.pdf'; // Ensure your resume is placed in 'src/assets/'

const Profile = () => {
  return (
    <div className="profile">
      <img src={Prop} alt="Profile" className="profilep rounded-circle bg-black" />
      <h2>Rohit R</h2>
      <ReactTypingEffect
        className="typed-text"
        text={["I am a Front End Developer"]}
        speed={100}
        eraseSpeed={50}
        eraseDelay={2000}
        typingDelay={1000}
      /><br/><br/>
      <button href={resumePDF} download="Rohit_Resume" className="bt">
        <h5 >Download Resume</h5>
      </button>
    </div>
  );
}

export default Profile;
