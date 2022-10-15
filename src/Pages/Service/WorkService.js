import React from 'react';
import './WorkService.css';
import { BsFillEmojiSmileFill } from "react-icons/bs";

import { FaFirstOrder, FaServer } from "react-icons/fa";
import { BsSmartwatch } from "react-icons/bs";


const WorkService = () => {
    return (
        <div className='TopService'>
            <div className='mainService'>
                <div className="subService">
                    <div className='icon'>
                        <span>
                            <BsFillEmojiSmileFill></BsFillEmojiSmileFill>
                        </span>
                    </div>
                    <h2>100%</h2>
                    <p>Client Satisfaction</p>
                </div>
                <div className="subService">
                    <div className='icon'>
                        <span>
                            <FaServer></FaServer>
                        </span>
                    </div>


                    <h2>120+</h2>
                    <p>Projects Completed</p>
                </div>
                <div className="subService">

                    <div className='icon' >
                        <span>
                            <FaFirstOrder></FaFirstOrder>
                        </span>
                    </div>

                    <h2>2+</h2>
                    <p>Years of Experience</p>
                </div>
                <div className="subService ">



                    <div className='icon'>
                        <span>
                            <BsSmartwatch></BsSmartwatch>
                        </span>
                    </div>

                    <h2>24/7</h2>
                    <p>Hours Support</p>
                </div>

            </div>
        </div>
    );
};

export default WorkService;