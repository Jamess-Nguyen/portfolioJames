import React from "react";
import "./sideDrawer.css";
const SideDrawer = (props) => (
    <nav className="sideDrawer">
        <ul>
            <li><a href="/">Experience</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Doodles</a></li>
            <li><a href="/">Hackathons</a></li>        
        </ul>
    </nav>
);

export default SideDrawer;