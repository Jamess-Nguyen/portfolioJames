import React from 'react';
import "./block.css";

function Education () {
    return(
      <div>
          <div className="flexCenterContainer">
              <div className="redTitle"><em><b>Education:</b></em></div>
          </div>
          <div className="flexCenterContainer"><div className="normalText"><b>B.S in Software Engineering (2022)</b></div></div>
          <div className="flexCenterContainer"><div className="normalText">University of California Irvine (3.43 GPA)</div></div>
          <div style={{height: "20px"}}></div>
      </div>     
    );
  }
  
  
  export default Education;