import React from "react";
import "./AboutWork.css";
import img1 from "../../projectImage//quality_logo_png_-_Google_Search-removebg-preview.png";
import img2 from "../../projectImage/intigriti_logo_png_-_Google_Search-removebg-preview.png";
import img3 from "../../projectImage/security_logo_png_-_Google_Search-removebg-preview.png";
import img4 from "../../projectImage/support_logo_png_-_Google_Search-removebg-preview.png";

const AboutWork = () => {
	return (
		<div className="mainWork">
			<div className="aboutMain">
				<div className="subMain">
					<div className="sectionMenu">
						<div className="wording-demo-icon">
							{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
							<img src={img1} alt="" className="img-fluid" />
						</div>
						<h2>Quality</h2>
						<p>
							Design Quality is very important for every website. I make sure
							100% quality & satisfaction before delivering the projects.
						</p>
					</div>
					<div className="sectionMenu">
						<div className="wording-demo-icon">
							{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
							<img src={img2} alt="" className="img-fluid" />
						</div>
						<h2>Integrity</h2>
						<p>
							Friendly coding and design professionally increase website speed
							and SEO result , Only experienced person can make sure this.
						</p>
					</div>
					<div className="sectionMenu">
						<div className="wording-demo-icon">
							{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
							<img src={img3} alt="" className="img-fluid" />
						</div>
						<h2>Security & Safety</h2>
						<p>
							Get complete security website ans safe your all data and
							information.
						</p>
					</div>
					<div className="sectionMenu">
						<div className="wording-demo-icon">
							{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
							<img src={img4} alt="" className="img-fluid" />
						</div>
						<h2>Support</h2>
						<p>
							Get life time working for relationship & support with full
							instructions.
						</p>
					</div>
				</div>
				<div className="subMain2">
					<div className="sub-img">
						<h3 className="text-center pt-4">ABOUT MY WORK</h3>
						<img
							src="https://www.westend61.de/images/0000719234pw/young-man-at-office-desk-thinking-UUF007025.jpg"
							alt=""
						/>
					</div>
					<div className="work-Section">
						<h2>Working On:</h2>

						<img
							src="https://i.ibb.co/gVN2pfR/png-clipart-freelancer-freelance-marketplace-logo-job-graphic-designer-design-web-design-text-remove.png"
							alt=""
						/>

						<img
							src="https://i.ibb.co/5jRh0sT/download-removebg-preview.png"
							alt=""
						/>
						<img
							src="https://i.ibb.co/94X2GR4/hd-linkedin-official-logo-transparent-background-31623962207jz85kqlqot-removebg-preview.png"
							alt=""
						/>
						<img
							src="https://i.ibb.co/4FQYgd8/png-clipart-fiverr-logo-freelancer-money-fiverr-text-logo-removebg-preview.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutWork;
