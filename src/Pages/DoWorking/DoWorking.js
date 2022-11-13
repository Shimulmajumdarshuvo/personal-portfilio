import React from 'react';
import './DoWorking.css';
import 'animate.css';
import { GiDiscussion } from "react-icons/gi";
import { SiAltiumdesigner, SiHoudini } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { GiMiniSubmarine, GiClockwork } from "react-icons/gi";
import { MdWeb } from "react-icons/md";



const DoWorking = () => {
    return (
        <div className='working-sec'>
            <div className='WorkTitle'>
                <h2>HOW DO I WORK</h2>
                <h3><GiClockwork></GiClockwork></h3>

            </div>
            <div className='doWork'>
                <div className="subWork animate__animated animate__zoomIn">
                    <h1><GiDiscussion></GiDiscussion></h1>
                    <h2>01. Discussion</h2>
                    <p>To understand the projects needs & requirements. It's very important for me. For that I discuss with every details to related projects if nedded I communicate by video or audio conversation.</p>
                </div>
                <div className="subWork animate__animated animate__zoomIn">
                    <h1><SiHoudini></SiHoudini></h1>
                    <h2>02. Planing</h2>
                    <p>To understand the projects needs & requirements. It's very important for me. For that I discuss with every details to related projects if nedded I communicate by video or audio conversation.</p>
                </div>
                <div className="subWork animate__animated animate__zoomIn">
                    <h1><SiAltiumdesigner></SiAltiumdesigner></h1>
                    <h2>03. Design</h2>
                    <p>To understand the projects needs & requirements. It's very important for me. For that I discuss with every details to related projects if nedded I communicate by video or audio conversation.</p>
                </div>
                <div className="subWork animate__animated animate__zoomIn">
                    <h1><FaLaptopCode></FaLaptopCode></h1>
                    <h2>04. Coding</h2>
                    <p>To understand the projects needs & requirements. It's very important for me. For that I discuss with every details to related projects if nedded I communicate by video or audio conversation.</p>
                </div>
                <div className="subWork animate__animated animate__zoomIn">
                    <h1><GiMiniSubmarine></GiMiniSubmarine></h1>
                    <h2>05. Submit for Review</h2>
                    <p>To understand the projects needs & requirements. It's very important for me. For that I discuss with every details to related projects if nedded I communicate by video or audio conversation.</p>
                </div>
                <div className="subWork hover:animate__animated animate__zoomIn">
                    <h1><MdWeb></MdWeb></h1>
                    <h2>06. Website is Ready!</h2>
                    <p>To understand the projects needs & requirements. It's very important for me. For that I discuss with every details to related projects if nedded I communicate by video or audio conversation.</p>
                </div>


            </div>
        </div>
    );
};

export default DoWorking;