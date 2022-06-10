import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div id="about" className="container cover-bg p-3 p-lg-4 text-white">
                <div className="row">
                    <div className="col-lg-4 col-md-5">
                        <div className="avatar hover-effect bg-white shadow-sm p-1"><img src="https://i.ibb.co/51Mbc0z/CV.jpg" width="220" height="250" /></div>
                    </div>
                    <div className="col-lg-8 col-md-7 text-center text-md-start">
                        <h2 className="h1 text-black mt-2">Shimul Majumdar Shuvo</h2>
                        <p className='text-black' > Junior MERN Stack Web Developer & Web Designer</p>
                        <p className='text-black'>I am a MERN stack web developer from Khulna, Bangladesh. I work as a freelance web developer for clients across the globe with great product delivery.
                            Skilled in HTML, CSS, Bootstrap, TailwindCSS, Javascript(ES6), and MERN
                            (Mongo DB, Express, React, Node) stack, I also have sound knowledge
                            of Data Structures and Algorithms with great problem-solving capabilities.
                            I can vouch for the fact that I am a fast learner with a penchant to both
                            learn and unlearn; That is learning the latest relevant technologies and
                            skills. I also bring with me some fresh ideas and I am confident you will
                            find many of them to be quite useful and innovative 🙂🙂🙂.</p>

                        <div className="d-print-none" >
                            <a className="btn  shadow-lg mt-1 me-1 buttons" href="https://drive.google.com/file/d/1O_LJnko1vwiZhzrC5LRzvtxFBshS9fl_/view?fbclid=IwAR3nfpIiz6XCR3APrlWd4cvfLxT2PssHt57fWX9BewVERc0w3Sk2TnsUHVM" target="_blank">Download Resume</a>
                            <a className="btn  shadow-lg mt-1 buttons" href="#contact">Hire Me</a></div>
                    </div>

                </div>




            </div>













        </div>
    );
};

export default About;