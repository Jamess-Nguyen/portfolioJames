import React from 'react';
import "./block.css";
import "./header.css";
function Header () {
    return(
      <div> 
        <div style={{height: "50px"}}></div>
        <div id="name" className="flexCenterContainer"><b>James Nguyen</b></div>
        <div className="titleDesc" className="flexCenterContainer">jamesn11@uci.edu</div>
        <div className="titleDesc" className="flexCenterContainer">https://github.com/Jamess-Nguyen</div>
        <div style={{height: "3px"}}></div>
        <hr></hr>
      </div>     
    );
  }
  
  
  export default Header;
  