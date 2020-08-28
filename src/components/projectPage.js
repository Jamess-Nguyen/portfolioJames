import React from 'react';
import Banner from '../workEx/banner';
import bannerToContent from './aboutContent/bannerToContent.png'
import './aboutContent/aboutPage.css'
import SkillsBlock from './aboutContent/skillsBlock'
import TriangleDOWN from './aboutContent/TriangleDOWN.png'
function Projects () {
    return(
      <div>
                  
          <Banner />
          <div id="skillsDesc">
          <SkillsBlock/>
          </div>
      </div>
      
    );
  }
  
  
  export default Projects;
  