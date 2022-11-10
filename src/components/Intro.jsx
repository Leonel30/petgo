import React from 'react';
import 'animate.css';

const Intro = ({handleView}) => {

    setTimeout(()=>{
        handleView("login")
     },2000)
    
  return (
    <div className="container-intro">
        <div className="container-logo-intro
        animate__animated 
        animate__lightSpeedInLeft"></div>
    </div>
  );
}

export default Intro;
