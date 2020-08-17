import React from 'react';
import Banner from '..//workEx/banner';
import bannerToContent from './aboutContent/bannerToContent.png'
import './aboutContent/aboutPage.css'
import SkillsBlock from './aboutContent/skillsBlock'
import TriangleDOWN from './aboutContent/TriangleDOWN.png'
function About () {
    return(
      <div>
          <Banner />
          <div id="skillsDesc">
          <SkillsBlock id="base" />

          </div>
      </div>
      
    );
  }
  
  
  export default About;
  