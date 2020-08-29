import React from 'react';
import Header from './resumeContent/header';
import Footer from "./footer/footer";
import Tech from "./resumeContent/Tech";
import Education from "./resumeContent/Education";
import Wkex from "./resumeContent/wkex";
import Proj from "./resumeContent/proj";
import "./plain.css";
function Resume () {
    return(
      <div> 
        <div className="Center">
            <div id="centerText">
                <Header/>
            </div>   
          <Tech/>
          <Education/>
          <Wkex/>
          <Proj/>
        </div>
          <Footer/>
        
      </div>
      
    );
  }
  
  
  export default Resume;
  