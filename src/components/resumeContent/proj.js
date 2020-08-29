import React from 'react';
import "./block.css";
function Proj () {
    return(
      <div> 
          <div className="flexCenterContainer"><div className="redTitle"><em><b>Projects:</b></em></div></div>
          <div className="flexCenterContainer"><div className="normalText"><b>Personal Website Project, React.JS</b></div></div>
          <ul><li>Created a personal website to showcase my skills and passions. Hosted on AWS.</li></ul>
          <div className="flexCenterContainer"><div className="normalText"><b>Schedule_Bot_9000, Python</b></div></div>
          <ul><li>Data scraping bot which takes metrics of all users in the server and outputs the data in graph form on command. Hosted on AWS.</li></ul>
          <div className="flexCenterContainer"><div className="normalText"><b>Quizify, React.JS</b></div></div>
          <ul><li>Web based music quiz. Users are played a song and prompted to guess which song is playing.</li></ul>
          <div className="flexCenterContainer"><div className="normalText"><b>MapQuest API, Python</b></div></div>
          <ul><li>Used MapQuest RESTful API to query for direction, distance, time, and elevation to provide directions to user inputted address.</li></ul>
          <div className="flexCenterContainer"><div className="normalText"><b>John_Jumper, C# (W.I.P)</b></div></div>
          <ul><li>Cross platform game. Currently being developed in Unity.</li></ul>
          <div style={{height:"100px"}}></div>
      </div>     
    );
  }
  
  
  export default Proj;
  