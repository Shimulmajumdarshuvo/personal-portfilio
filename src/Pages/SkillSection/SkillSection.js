import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const SkillSection = () => {
    return (
        <div id="skill" className='container'>

            <div className='w-25 d-flex text-center container my-1'>
                <h2 className=' header' >Professional Skills </h2>

            </div>
            <div class="row row-cols-1 row-cols-md-3   g-4">
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

            </div>

        </div>
    );
};

export default SkillSection;