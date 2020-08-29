import React from 'react';
import "./finalFooter.css";
function TheFooter () {
  return(
    <div id="Container">
    <div className="skillsFlex">
        <footer>
        <div id="cr" className="skillsFlex">
            <div id="copyRight">&copy; James Nguyen 2020</div>
        </div>
        <div id="so" className="skillsFlex">               
            <div id="so" className="iconFlex">
                <a href="https://github.com/Jamess-Nguyen" target="_blank"><div id="git"></div></a>
                <a href="https://www.youtube.com/channel/UCEoPpUT9b9NEbMQc_vdq-ag?view_as=subscriber" target="_blank"><div id="yt"></div></a>
                <a href="https://www.linkedin.com/in/james-nguyen-85574b187/" target="_blank"><div id="linkedIn"></div></a>
            </div>
        </div>
        </footer>
    </div>
    </div>
  );
}


export default TheFooter;