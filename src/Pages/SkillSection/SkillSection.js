import React from 'react';
import './SkillSection.css';


const SkillSection = () => {
    return (
        <div id="skill" className=' Skill-Sections'>

            <div className='w-25 d-flex text-info text-center container my-1'>
                <h2 className=' header ' >Professional Skills </h2>

            </div>
            {/* <div class="row row-cols-1 row-cols-md-3   g-4">
                <div class="col shadow-lg">
                    <div class="card">

                        <div class="card-body">
                            <h2 class="card-title">Font End</h2>
                            <span>HTML</span>
                            <ProgressBar variant="info" now={90} />
                            <span>CSS</span>
                            <ProgressBar variant="info" now={80} />
                            <span>Javascript & ES6</span>
                            <ProgressBar variant="info" now={75} />
                            <span>REACT </span>
                            <ProgressBar variant="info" now={85} />
                            <span>Boostarp  </span>
                            <ProgressBar variant="info" now={90} />
                            <span>Tailwind </span>
                            <ProgressBar variant="info" now={80} />



                        </div>
                    </div>
                </div>
                <div class="col shadow-sm">
                    <div class="card">

                        <div class="card-body">
                            <h2 class="card-title">Back End</h2>
                            <span>Node js</span>
                            <ProgressBar variant="success" now={60} />
                            <span>MongoDB</span>
                            <ProgressBar variant="info" now={55} />
                            <span>Express js</span>
                            <ProgressBar variant="success" now={50} />

                        </div>
                    </div>
                </div>
                <div class="col shadow-lg">
                    <div class="card">

                        <div class="card-body">
                            <h2 class="card-title">Tools</h2>
                            <span>GitHub</span>
                            <ProgressBar variant="primary" now={75} />
                            <span>Firebase</span>
                            <ProgressBar variant="info" now={70} />
                            <span>Netlify</span>
                            <ProgressBar variant="primary" now={80} />
                            <span>Heroku</span>
                            <ProgressBar variant="info" now={50} />
                            <span>VS Code</span>
                            <ProgressBar variant="primary" now={78} />

                        </div>
                    </div>
                </div>

            </div> */}
            {/* <div className="nh-skill">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="nh-skill-inner">
                                <div className="nh-professional-skill">
                                    <h3>Technical Skill</h3>
                                    <div className="each-skills">
                                        <div className="candidatos">
                                            <div className="parcial">
                                                <div className="info">
                                                    <div className="name">Javascript</div>
                                                    <div className="percentage-num">86%</div>
                                                </div>
                                                <div className="progressBar">
                                                    <div className="percentages" style={{ width: "86%" }}></div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="candidatos">
                                            <div className="parcial">
                                                <div className="info">
                                                    <div className="name">React</div>
                                                    <div className="percentage-num">90%</div>
                                                </div>
                                                <div className="progressBar">
                                                    <div className="percentages" style={{ width: "90%" }}></div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="candidatos">
                                            <div className="parcial">
                                                <div className="info">
                                                    <div className="name">Node.js</div>
                                                    <div className="percentage-num">60%</div>
                                                </div>
                                                <div className="progressBar">
                                                    <div className="percentages" style={{ width: "60%" }}></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="candidatos">
                                            <div className="parcial">
                                                <div className="info">
                                                    <div className="name">CSS</div>
                                                    <div className="percentage-num">80%</div>
                                                </div>
                                                <div className="progressBar">
                                                    <div className="percentages" style={{ width: "80%" }}></div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-12 col-md-6">
                            <div className="nh-professional-skills">
                                <h3>Professional Skills</h3>
                                <ul className='nh-professional-progress'>
                                    <li>
                                        <div className="nh-progress nh-progress-circle" data-progress="95"></div>
                                        <div className="pr-skill-name">Communication</div>
                                    </li>

                                    <li>
                                        <div className="nh-progress nh-progress-circle" data-progress="75"></div>
                                        <div className="pr-skill-name">Team work</div>
                                    </li>

                                    <li>
                                        <div className="nh-progress nh-progress-circle" data-progress="65"></div>
                                        <div className="pr-skill-name">MongoDB</div>
                                    </li>

                                    <li>
                                        <div className="nh-progress nh-progress-circle" data-progress="70"></div>
                                        <div className="pr-skill-name">Redux</div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}

            <div className="container">
                <div className="row">
                    <div className="col-md-12 container">
                        <div className="progress-title">
                            <h3>HTML</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "90%", backgroundColor: "#CB2DF6" }}>
                                    <div className="progress-value">90%</div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-title">
                            <h3>CSS</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "90%", backgroundColor: '#77183C' }}>
                                    <div className="progress-value">90%</div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-title">
                            <h3>Javascript + Es6</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "80%", backgroundColor: "#096363" }}>
                                    <div className="progress-value">80%</div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-title">
                            <h3>React.JS</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "85%", backgroundColor: "#00EBDD" }}>
                                    <div className="progress-value">85%</div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-title">
                            <h3>Node.JS + MongoDB</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "80%", backgroundColor: "#2D4BF6 " }}>
                                    <div className="progress-value">80%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default SkillSection;