import React from 'react';
import './banner.css';
import banner from './websiteBanner.png';
function Banner(props) {
    return(
        <div className="bannerBorder">
            <button className="bannerButton">/ Download Resume</button>
        </div>
    );
}

export default Banner;