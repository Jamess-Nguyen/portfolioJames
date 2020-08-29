import React from 'react';
import Appjam from './jobImages/Appjam.jpg';
import Ex from '../workEx/workExperience';
import HackUCI from './jobImages/HackUCI.png';
import TheFooter from './footer/footer';
import "./plain.css";
import WJDevelopment from './jobImages/WJDevelopment.png';
function Experience () {
  return(
    <div>
        <Ex
          company="WJ Development" 
          position="Software Developer"
          image={WJDevelopment}
          descOne="Worked at a startup to develop various Apps"
          descTwo="Developed Discord.Py bot using Asychronous Programming and Mat.Plot.Lib to
                   provide users metrics of all activity"
                    
        />

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
