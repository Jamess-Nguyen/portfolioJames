import React from 'react';
import "./skillsBlock.css";
import "./skillsList.css";
import "./footer.css"


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
                            <a href="https://github.com/captnw/DiscordUserScheduleBot" target="_blank"><button>./View Git</button></a>
                        </div>
                    </div>
                </div>
                <div id="portfolio" className="projBox">
                    <div id="content_portfolio">
                        <div class="backDrop">
                            <div class="text"><br></br>SUMMARY: Personal Website that chronicals my work as an aspiring fullstack developer</div>
                            <div class="text"><br></br>TECHNOLOGIES: React, Github Pages, HTML, CSS, JS<br></br><br></br> </div>
                            <div className="bigSpacer"></div>
                            <a href="https://github.com/Jamess-Nguyen/portfolioJames" target="_blank"><button>./View Git</button></a>
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
                            <a href="https://quizify.xyz/login" target="_blank"><button>./Play</button></a>
                        </div>
                    </div>
                </div>
                <div id="john_jumper" className="projBox">
                    <div id="content_quiz">
                        <div class="backDrop">
                            <div class="text"><br></br>SUMMARY: Unity game where John tries to jump as high as he can!</div>
                            <div class="text"><br></br>TECHNOLOGIES: C#, Unity, GitHub, Itch.io<br></br><br></br></div>
                            <div className="bigSpacer"></div>
                            <a href="https://jangu.itch.io/johnjumper" target="_blank"><button>./Play</button></a>
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
            <div className="skillsFlex">
                <div className="title">BUILD LOG</div>
            </div>
            <div className="skillsFlex">
                <div className="iframe-container">
            <iframe max-width="560" max-height="315" src="https://www.youtube.com/embed/OekrLlLfaII" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div>
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
        </div>
    );
  }

export default SkillsBlock;