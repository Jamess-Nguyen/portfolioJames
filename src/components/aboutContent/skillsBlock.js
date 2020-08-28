import React from 'react';
import "./skillsBlock.css";
import "./skillsList.css";
import {Link} from "react-router-dom";
import ProjectPiece from "./projectPiece";
import boxDiscordBot from "./boxDiscordBot.jpg";

function SkillsBlock(props) {
    return(
        <div className="skillBox">
            <div className="title"><b>PROJECTS</b><br></br></div>
            <div className="skillsFlex">
                <div id="schedule_bot_9000" className="projBox">
                    <div id="content_bot">
                        <div class="backDrop">
                            <div class="text"><br></br>SUMMARY: Discord.Py bot that stores all user data and outputs it on command</div>
                            <div class="text"><br></br>TECHNOLOGIES: Python, Amazon Web Services, Mat.Plot.Lib, Discord.py, CSV </div>
                            <div className="bigSpacer"></div>
                            <Link to="Experience" style ={{ textDecoration: 'none'}}><button>./Details</button></Link>
                        </div>
                    </div>
                </div>
                <div id="portfolio" className="projBox">
                    <div id="content_portfolio">
                        <div class="backDrop">
                            <div class="text"><br></br>SUMMARY: Personal Website that chronicals my work as an aspiring fullstack developer</div>
                            <div class="text"><br></br>TECHNOLOGIES: React, Github, HTML, CSS, JS<br></br><br></br> </div>
                            <div className="bigSpacer"></div>
                            <Link to="Experience" style ={{ textDecoration: 'none'}}><button>./Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skillsFlex">
                <div id="quizify" className="projBox">
                    <div id="content_quiz">
                        <div class="backDrop">
                            <div class="text"><br></br>SUMMARY: A webgame where users listen to their favorite artist and try to guess the song title</div>
                            <div class="text"><br></br>TECHNOLOGIES: React, Spotify Web API, Github, HTML, CSS, JS<br></br><br></br></div>
                            <div className="bigSpacer"></div>
                            <Link to="Experience" style ={{ textDecoration: 'none'}}><button>./Details</button></Link>
                        </div>
                    </div>
                </div>
                <div id="john_jumper" className="projBox">
                    <div id="content_quiz">
                        <div class="backDrop">
                            <div class="text"><br></br>SUMMARY (W.I.P): Unity game where a block named john tries to jump higher than any block ever could</div>
                            <div class="text"><br></br>TECHNOLOGIES: C#, Unity<br></br><br></br></div>
                            <div className="bigSpacer"></div>
                            <Link to="Experience" style ={{ textDecoration: 'none'}}><button>./Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skillsFlex">
                <div className="title">SKILLS</div>
            </div>
            <div className="skillsFlex">
                <div className="tech">
                </div>
                <div className="py">
                </div>
                <div className="mark">
                </div>
            </div>
            <div className="skillsFlex">
                <div className="bash">
                </div>
                <div className="dep">
                </div>
                <div className="des">
                </div>
            </div>
        </div>
    );
  }

export default SkillsBlock;