import React from 'react';
import './workExperience.css'

function Ex(props){
    return(
        <div className="borderBox">
            <div className="contentBox">
                <h1 className="company">{props.company}</h1>
                <p className="position">{props.position}</p>
                <img src={props.image} className="imageBorder" width="100px" height="100px"></img>
                <p className="desc">{props.descOne}</p>
                <p id="desc2" className="desc">{props.descTwo}</p>
            </div>
        </div> //end borderBox
    );
}

export default Ex;