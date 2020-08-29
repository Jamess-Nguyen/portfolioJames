import React from 'react';
import "./block.css";

function Wkex () {
    return(
      <div>
          <div className="flexCenterContainer"><div className="redTitle"><em><b>Work Experience:</b></em></div></div>
          <div className="flexCenterContainer"><div className="normalText"><b>Software Developer @ WJ Development</b></div></div>
          <div className="flexCenterContainer"><div className="normalText">June 2020 - Present</div></div>
          <div className="flexCenterContainer">
            <ul>
                <li>Worked at a Startup that focused on making bots and game applications</li>
                <li>Developed a Discord.py bot which Scrapes data of all users in a server and outputs it in Graph format on command</li>
                <li>Working in Unity to develop a cross platform video game</li>
            </ul>
          </div>
          <div style={{height: "20px"}}></div>
          <div className="flexCenterContainer"><div className="normalText"><b>Program Mentor @ Dreams For Schools</b></div></div>
          <div className="flexCenterContainer"><div className="normalText">August 2019 - January 2020</div></div>
          <div className="flexCenterContainer">
            <ul>
                <li>Mentored 5 students for 10 weeks  on mobile app development using Thunkable</li>
                <li>Worked with a team of 5 to create daily agendas</li>
                <li>Exposed students in at-risk communities to careers in S.T.E.M</li>
            </ul>
          </div>
          <div style={{height:"20px"}}></div>
      </div>     
    );
  }
  
  
  export default Wkex;