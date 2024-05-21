import React from "react";
import {} from "react-icons/fa";
import img1 from "../../projectImage/ProMan - Personal Portfolio HTML Template (1).png";
import img2 from "../../projectImage/ProMan - Personal Portfolio HTML Template (2).png";
import img3 from "../../projectImage/ProMan - Personal Portfolio HTML Template (3).png";
// import img4 from "../../projectImage/ProMan - Personal Portfolio HTML Template (4).png";

import "./Experience.css";

const Experience = () => {
	return (
		<div id="service">
			<section id="team" className="team_wrapper wrapper">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 text-center mb-5 mt-5">
							<h1 className="text-black">My Services</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 col-sm-6 mb-4">
							<div className="card rounded-3">
								<div className="team-img">
									{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
									<img src={img2} alt="" className="img-fluid" />
								</div>
								<div className="team-info pt-4 text-center">
									<h5>Web Design</h5>
									<p>
										Web design refers to the design of websites that are
										displayed on the internet. It usually refers to the user
										experience aspects of website development rather than
										software development. Web design used to be focused on
										designing .
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-6 mb-4">
							<div className="card rounded-3">
								<div className="team-img">
									<img src={img3} alt="" className="img-fluid" />
									{/* <img decoding="async" src="./images/team/team2.png" className="img-fluid"> */}
								</div>
								<div className="team-info pt-4 text-center">
									<h5>Web Development</h5>
									<p>
										Web development is the work involved in developing a website
										for the Internet or an intranet. Web development can range
										from developing a simple single static page of plain text to
										complex web applications and social network services.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-6 mb-4">
							<div className="card rounded-3">
								<div className="team-img">
									<img src={img1} alt="" className="img-fluid" />
									{/* <img decoding="async" src="./images/team/team3.png" className="img-fluid"> */}
								</div>
								<div className="team-info pt-4 text-center">
									<h5>UI / UX Design</h5>
									<p>
										User interface design or user interface engineering is the
										design of user interfaces for machines and software, such as
										computers, home appliances, mobile devices with the focus on maximizing usability
										and the user experience.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Experience;
