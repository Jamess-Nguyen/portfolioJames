import React from 'react';
import './reactNav.css';
import {Link} from "react-router-dom";
const Toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
        </div>
        <div className="toolbar__logo"><a>James Nguyen</a></div>
        <div className="toolbar_navigation-items">
            <ul>
                <li class="emptySpacer"></li>
                <Link to="/"><li><button>About</button></li></Link>
                <Link to="Experience"><li><button>Experience</button></li></Link>
                <Link to="Projects"><li><button>Projects</button></li></Link>
                <Link to="/Doodles"><li><button>Doodles</button></li></Link>
            </ul>
        </div>
    </nav>
  </header>
);

export default Toolbar;