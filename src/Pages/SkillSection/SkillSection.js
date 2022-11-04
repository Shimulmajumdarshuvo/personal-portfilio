import React from 'react';
import './SkillSection.css';


const SkillSection = () => {
    return (
        <div id="skill" className=' Skill-Sections'>

            <div className='HeadTitle text-info'>
                <h2 className=' header ' >Professional Skills </h2>

            </div>


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