import React from 'react';
import "./skillsBlock.css"

function SkillsBlock(props) {
    return(
        <div className="skillBox">
            <div className="title"><b>SKILLS</b></div>
            <div className="skillsFlex">
                <div className="testBox"></div>
                <div className="testBox"></div>
                <div className="testBox"></div>
            </div>
        </div>
    );
  }

export default SkillsBlock;