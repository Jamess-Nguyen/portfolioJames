import React from 'react';
import './projectBanner.css';
import jamesWorld from './projectImages/jamesWorld.png'


function ProjectBanner(props) {
    return(
        <div className="projectBorder">
        <div className="realBanner">
                    <div className="projectLines"></div>
                    <div className="projectImage">
                        <img className="james" src={jamesWorld} width="100%" height="100%" ></img>
                        <div className="bannerText"><b>Personal, Hackathon, <br></br>& Professional Work</b>
                    </div>
                    </div>
        </div>
        </div>
    );
}

export default ProjectBanner;