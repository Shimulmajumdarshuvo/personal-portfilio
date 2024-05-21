import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaInvision, FaSkype, FaTelegram, FaTwitter } from 'react-icons/fa';
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
							A front-end developer portfolio is a collection of projects that
							showcase your skills as a web developer.
						</h5>
					</div>
					<div className="fSection">
						<h4>Useful Links</h4>
						<h6>About Us</h6>
						<h6>Experience</h6>
						<h6>Education</h6>
						<h6>PortFolio</h6>
						<h6>Contact Us</h6>
					</div>
					<div className="fSection">
						{" "}
						<h4>Contact Us</h4>
						<h6>Email : shimulmajumdar906@gmail.com</h6>
						<h6>Phone : +8801303461237</h6>
						<h6 className="py-1">Address : Khulna , Bangladesh</h6>
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

					<div className="fSection">
						<img
							src="https://freepngimg.com/thumb/apple/58663-app-google-play-store-apple-download-hd-png-thumb.png"
							alt=""
						/>
					</div>
				</div>
			</div>
			// <div className='footer'>

			//     <div className='text-center'><p >Copy Right<small><span>&copy;</span>
			//         Developer Shimul Majumdar. {new Date().getUTCFullYear()}</small></p>
			//     </div>

			// </div>
		);
};


export default Footer;