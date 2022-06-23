import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useTypewriter } from 'react-simple-typewriter'
import './About.css'

const About = () => {
    const { } = useTypewriter({

        loop: {},
    })


    return (
        <div>
            <div id="about" className="container about-part cover-bg p-3 p-lg-4 ">
                <div className="row">
                    <div className="col-lg-4 col-md-5">
                        <div className="avatar hover-effect  bg-white shadow-sm p-1"><img src="https://i.ibb.co/qygwNDP/20210212-173627-removebg-preview.png" width="250" height="300" alt='' /></div>
                    </div>
                    <div className="col-lg-8 col-md-7 text-center text-md-start">
                        <h2 style={{ color: '#000024' }} >Shimul Majumdar Shuvo</h2>
                        <h4 >



                            <span style={{ color: '#27002E', fontWeight: 'bold' }}>
                                <Typewriter
                                    loop
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    words={['MERN Stack Developer', 'React Developer', 'Web Designer', 'Front End Developer']}

                                />
                            </span>
                        </h4>
                        <p className='text-black'>I am a MERN stack web developer from Khulna, Bangladesh. I work as a freelance web developer for clients across the globe with great product delivery.
                            Skilled in HTML, CSS, Bootstrap, TailwindCSS, Javascript(ES6), and MERN
                            (Mongo DB, Express, React, Node) stack, I also have sound knowledge
                            of Data Structures and Algorithms with great problem-solving capabilities.

                            I can vouch for the fact that I am a fast learner with a penchant to both
                            learn and unlearn; That is learning the latest relevant technologies and
                            skills. I also bring with me some fresh ideas and I am confident you will
                            find many of them to be quite useful and innovative 🙂🙂🙂.</p>

                        <div className="d-print-none" >
                            <a className="btn  shadow-lg mt-1 me-1 buttons" href="https://drive.google.com/file/d/1O_LJnko1vwiZhzrC5LRzvtxFBshS9fl_/view?fbclid=IwAR3nfpIiz6XCR3APrlWd4cvfLxT2PssHt57fWX9BewVERc0w3Sk2TnsUHVM" target="_blank/">Download Resume</a>
                            <a className="btn  shadow-lg mt-1 buttons" href="#contact">Hire Me</a></div>
                    </div>

                </div>




            </div>













        </div>
    );
};

export default About;