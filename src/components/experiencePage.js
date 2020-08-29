import React from 'react';
import Appjam from './jobImages/Appjam.jpg';
import Ex from '..//workEx/workExperience';
import HackUCI from './jobImages/HackUCI.png';
import TheFooter from './footer/footer';
import "./plain.css";
function Experience () {
  return(
    <div>
        <Ex 
        company="UCI Hackathon" 
        position="Front-End Engineer"
        image={HackUCI}
        descOne="Worked with a group of four as a front-end engineer"
        descTwo="Developed a web-based spotify game using HTML/CSS/JS" 
        />

        <Ex 
        company="App Jam+" 
        position="Computer Science Tutor"
        image={Appjam}
        descOne="Taught students the fundamental concepts of computer science and debugging"
        descTwo="Developed android app using Google Thunkable" 
        />

        <div id="spacer"></div>
        <TheFooter/>
    </div>
    
  );
}


export default Experience;
