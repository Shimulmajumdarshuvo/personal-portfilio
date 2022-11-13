import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useTypewriter } from 'react-simple-typewriter'
import './About.css'
import { FaFacebookSquare, FaGithubSquare, FaInvision, FaTelegram, FaTwitter } from 'react-icons/fa';

const About = () => {
    const { } = useTypewriter({

        loop: {},
    })


    return (
        <div className='about'>
            <div id="about" className="container about-part cover-bg p-3 p-lg-4 ">
                <div className="row">
                    <div className="col-lg-4 col-md-5">
                        <div className="avatar hover-effect  images shadow-sm p-1"><img src="https://i.ibb.co/MphYx5g/personalimg.png" width="250" height="270" alt='' /></div>
                    </div>
                    <div className="col-lg-8 col-md-7 text-center text-md-start">
                        <h2 style={{ color: 'white' }} >Shimul Majumdar Shuvo</h2>
                        <h4 >



                            <span style={{ color: 'white', fontWeight: 'bold' }}>
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
                        <p className='aboutContent text slide-left'>I am a MERN stack web developer and programmer.
                            I work as a freelance web developer for clients across the globe with great
                            product delivery.
                            Skilled in HTML, CSS, Bootstrap, TailwindCSS, Javascript(ES6), and MERN
                            (Mongo DB, Express, React, Node) stack, I also have sound knowledge
                            of Data Structures and Algorithms with great problem-solving capabilities.

                            I also bring with me some fresh ideas and I am confident you will
                            find many of them to be quite useful and innovative 🙂🙂🙂.</p>
                        <div className='aboutIcon ICON slide-left'>
                            <span><FaFacebookSquare></FaFacebookSquare></span>
                            <span><FaGithubSquare></FaGithubSquare></span>
                            <span><FaTwitter></FaTwitter></span>
                            <span><FaInvision></FaInvision></span>
                            <span><FaTelegram></FaTelegram></span>
                        </div>
                        <br />

                        <div className="d-print-none links  slide-left" >
                            <a className="btns  " href="https://drive.google.com/file/d/1O_LJnko1vwiZhzrC5LRzvtxFBshS9fl_/view?fbclid=IwAR3nfpIiz6XCR3APrlWd4cvfLxT2PssHt57fWX9BewVERc0w3Sk2TnsUHVM" target="_blank/">Download Resume</a>
                            <a className="btns  " href="#contact">Hire Me</a></div>
                    </div>

                </div>




            </div>













        </div>
    );
};

export default About;