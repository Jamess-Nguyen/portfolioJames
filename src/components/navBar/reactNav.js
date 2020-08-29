import React from 'react';
import './reactNav.css';
import {Link} from "react-router-dom";

function topFunction(){
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
}
const Toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
        </div>
        <div className="toolbar__logo"><a>James Nguyen</a></div>
        <div className="toolbar_navigation-items">
            <ul>
                <li class="emptySpacer"></li>
                <Link to="/"><li><button onClick={topFunction}>Projects</button></li></Link>
                <Link to="Experience"><li><button onClick={topFunction}>Experience</button></li></Link>
                <Link to="Resume"><li><button onClick={topFunction}>Resume</button></li></Link>
                <Link to="/Doodles"><li><button onClick={topFunction}>Doodles</button></li></Link>
            </ul>
        </div>
    </nav>
  </header>
);

export default Toolbar;