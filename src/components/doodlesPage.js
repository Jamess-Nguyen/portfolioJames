import React from 'react';
import LightHouse from "./doodles/lightHouse.png";
import "./doodles.css";
import Footer from "./footer/footer";
function Doodles () {
    return(
      <div>
        <div style={{height:"50px"}}></div>
        <img src={LightHouse} className="x1980"></img>
        <div className="spacer"></div>
        <Footer/>
      </div>    
    );
  }
  
  
  export default Doodles;