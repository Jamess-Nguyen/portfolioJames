import React from 'react';
import LightHouse from "./doodles/lightHouse.png";
import Milk from "./doodles/Milk.png";
import Girl from "./doodles/girlwithsword.png";
import Bottle from "./doodles/Bottle.png";
import "./doodles.css";
import Footer from "./footer/footer";
function Doodles () {
    return(
      <div>
        <img src={Milk} className="x1980"></img>
        <img src={Girl} className="x1980"></img>
        <img src={Bottle} className="x1980"></img>
        <Footer/>
      </div>    
    );
  }
  
  
  export default Doodles;