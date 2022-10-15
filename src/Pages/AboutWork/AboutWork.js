import React from 'react';
import './AboutWork.css';
import { ImPodcast } from "react-icons/im";
import { SiPrivateinternetaccess } from "react-icons/si";
import { GiSecurityGate } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";





const AboutWork = () => {
    return (
        <div className='mainWork'>
            <div className='aboutMain'>
                <div className="subMain">
                    <div className="sectionMenu">
                        <h1><ImPodcast></ImPodcast></h1>
                        <h2>Quality</h2>
                        <p>Design Quality is very important for every website. I make sure 100% quality & satisfaction before delivering the projects.</p>
                    </div>
                    <div className="sectionMenu">
                        <h1><SiPrivateinternetaccess></SiPrivateinternetaccess></h1>
                        <h2>Integrity</h2>
                        <p>
                            Friendly coding and design professionally increase website speed and SEO result , Only experienced person can make sure this.
                        </p>
                    </div>
                    <div className="sectionMenu">
                        <h1 className='text-info'><GiSecurityGate></GiSecurityGate></h1>
                        <h2>Security & Safety</h2>
                        <p>
                            Get complete security website ans safe your all data and information.
                        </p>
                    </div>
                    <div className="sectionMenu">
                        <h1><MdSupportAgent></MdSupportAgent></h1>
                        <h2>Support</h2>
                        <p>
                            Get life time working for relationship & support with full instructions.
                        </p>
                    </div>

                </div>
                <div className="subMain2">
                    <div className='sub-img'>
                        <h3 className='text-center pt-4'>ABOUT MY WORK</h3>
                        <img src="https://acrorma.com/assets/images/24-h-img.png" alt="" />
                    </div>
                    <div className='work-Section'>
                        <h2>Working On:</h2>

                        <img src="https://i.ibb.co/gVN2pfR/png-clipart-freelancer-freelance-marketplace-logo-job-graphic-designer-design-web-design-text-remove.png" alt="" />

                        <img src="https://i.ibb.co/5jRh0sT/download-removebg-preview.png" alt="" />
                        <img src="https://i.ibb.co/94X2GR4/hd-linkedin-official-logo-transparent-background-31623962207jz85kqlqot-removebg-preview.png" alt="" />
                        <img src="https://i.ibb.co/4FQYgd8/png-clipart-fiverr-logo-freelancer-money-fiverr-text-logo-removebg-preview.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutWork;