import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaInvision, FaSkype, FaTwitter } from 'react-icons/fa';
import img1 from "../projectImage/procoder-removebg-preview.png";
import './Footer.css';

const Footer = () => {
    return (
			<div className="HeadFooter">
				<div className="footerPart">
					<div className="fSection">
						<div className="working-logo-footer">
							{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
							<img src={img1} alt="" className="img-fluid" />
						</div>
						<h5>
							I am Experience Front-end Web Developer. Designed and Developed by
							[Kasfia IT], Expert in React.js Web Development.
						</h5>
					</div>
					<div className="fSection">
						<h4>Useful Links</h4>
						<a href="#about">
							<h6>About Me</h6>
						</a>
						<a href="##experience">
							<h6>Experience</h6>
						</a>
						{/* <a href="#skill">
							<h6>Education</h6>
						</a> */}
						<a href="#project">
							<h6>Projects</h6>
						</a>
						<a href="#contact">
							<h6>Contact Me</h6>
						</a>
					</div>
					<div className="fSection">
						{" "}
						<h4>Contact Us</h4>
						<h6>Email : shimulmajumdar906@gmail.com</h6>
						<h6>Phone : +8801303461237</h6>
						<h6 className="py-1">Address : Khulna, Bangladesh</h6>
					</div>

					{/* <div className="fSection ">
						<div className='text-center'>
							<span>
								<FaFacebookSquare />
							</span>
							<span>
								<FaGithubSquare />
							</span>
							<span>
								<FaInvision />
							</span>
							<span>
								<FaSkype></FaSkype>
							</span>

							<span>
								<FaTwitter></FaTwitter>
							</span>
						</div>
					</div> */}
				</div>
			</div>
		);
};


export default Footer;