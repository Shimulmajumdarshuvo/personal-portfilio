import React from 'react';
import { } from 'react-icons/fa';
import { GoFileCode } from "react-icons/go";
import { FaGgCircle } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";
import './Experience.css';

const Experience = () => {


    return (
        <div className='container stylePart my-3' >
            <div className='w-25 d-flex text-center container'>
                <h2 className=' header' >Experience section </h2>

            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div class="card">

                        <div className="card-body">
                            <h2 className='icons'> <GoFileCode /></h2>
                            <h4>Web Development</h4>
                            <p class="card-text">Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card">

                        <div class="card-body">
                            <h2 className='icons'><AiOutlineAntDesign /></h2>
                            <h4>Web Design</h4>
                            <p class="card-text">Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development. Web design used to be focused on designing .</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">

                        <div class="card-body">
                            <h2 className='icons'><FaGgCircle /></h2>
                            <h4>UI / UX Design</h4>
                            <p class="card-text">User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience.</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Experience;