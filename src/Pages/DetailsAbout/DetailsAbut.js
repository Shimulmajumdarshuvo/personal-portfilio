import React from 'react';
import './DetailsAbout.css';
import { ImDownload } from "react-icons/im";

const DetailsAbut = () => {
    return (
        <div>
            <div className='DetailsAbout'>
                <div id="about" className="container about-part cover-bg p-3 p-lg-4 ">
                    <div className="row">

                        <div className="col-lg-8 col-md-7 text-center text-md-start">
                            <h2 className='aboutIcon text  slide-left' style={{ color: 'white' }} >About Me</h2>

                            <p className='AboutContents ICON slide-left'>I am a MERN stack web developer and programmer.
                                I work as a freelance web developer for clients across the globe with great
                                product delivery.
                                Skilled in HTML, CSS, Bootstrap, TailwindCSS, Javascript(ES6), and MERN
                                (Mongo DB, Express, React, Node) stack, I also have sound knowledge
                                of Data Structures and Algorithms with great problem-solving capabilities.

                                I also bring with me some fresh ideas and I am confident you will
                                find many of them to be quite useful and innovative 🙂🙂🙂.</p>
                            {/* <div className='aboutIcon ICON slide-left'>
                                <h2>About section</h2>
                            </div> */}
                            <br />

                            <div className="d-print-none links  slide-left" >
                                <a className="btns  " href="https://drive.google.com/file/d/1O_LJnko1vwiZhzrC5LRzvtxFBshS9fl_/view?fbclid=IwAR3nfpIiz6XCR3APrlWd4cvfLxT2PssHt57fWX9BewVERc0w3Sk2TnsUHVM" target="_blank/">Download Resume <span><ImDownload></ImDownload></span></a>
                            </div>
                        </div>




                        <div className="col-lg-4 col-md-5">
                            <div className="avatar hover-effect  images shadow-sm p-1"><img src="https://bestwpware.com/html/tf/nick-berg/nick-berg/assets/img/about.png" width="480" height="400" alt='' /></div>
                        </div>







                    </div>




                </div>













            </div>
        </div>
    );
};

export default DetailsAbut;