import React from 'react';
import Banner from '../workEx/banner';
import './aboutContent/aboutPage.css'
import SkillsBlock from './aboutContent/skillsBlock'
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
  