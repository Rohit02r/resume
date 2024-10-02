import React from 'react';
import '../Styles/Profile.css';
import Prop from '../assets/Profile.jpg'
import ReactTypingEffect from 'react-typing-effect';

import resumePDF from '../assets/RohitR_2023_BE_EEE_FrontEnd_Developer_Velachery.pdf'; 

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
      <button className="bt"><a href={resumePDF} download="Rohit_Resume" className='ad'>
        <h5 >Download Resume</h5>
      </a></button>
    </div>
  );
}

export default Profile;
