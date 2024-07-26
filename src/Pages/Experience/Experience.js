import React,{useEffect} from "react";
import {} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import img1 from "../../projectImage/ProMan - Personal Portfolio HTML Template (1).png";
import img2 from "../../projectImage/ProMan - Personal Portfolio HTML Template (2).png";
import img3 from "../../projectImage/ProMan - Personal Portfolio HTML Template (3).png";
// import img4 from "../../projectImage/ProMan - Personal Portfolio HTML Template (4).png";

import "./Experience.css";

const Experience = () => {
		useEffect(() => {
			Aos.init({ duration: 3000 });
		}, []);
	return (
		<div id="service">
			<section id="team" className="team_wrapper wrapper">
				<div className="">
					<div className="row">
						<div className="col-sm-12 text-center mb-5 mt-5">
							<h1 className="text-black" data-aos="fade-left">
								My Services
							</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 col-sm-6 mb-4" data-aos="zoom-in-right">
							<div className="card rounded-3">
								<div className="team-img">
									{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
									<img src={img2} alt="" className="img-fluid" />
								</div>
								<div className="team-info pt-4 text-center">
									<h5>Web Design</h5>
									<p>
										I create visually appealing, responsive designs using
										Bootstrap and Tailwind CSS. My focus is on user-centric
										layouts that provide a seamless experience across devices,
										combining aesthetics with functionality.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-6 mb-4" data-aos="zoom-in-up">
							<div className="card rounded-3">
								<div className="team-img">
									<img src={img3} alt="" className="img-fluid" />
									{/* <img decoding="async" src="./images/team/team2.png" className="img-fluid"> */}
								</div>
								<div className="team-info pt-4 text-center">
									<h5>Web Development</h5>
									<p>
										I specialize in full-stack development using JavaScript,
										React.js, Next.js, Node.js, and MongoDB. I build dynamic,
										high-performing web applications with clean, maintainable
										code, ensuring scalability and security.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-6 mb-4" data-aos="zoom-in-left">
							<div className="card rounded-3">
								<div className="team-img">
									<img src={img1} alt="" className="img-fluid" />
									{/* <img decoding="async" src="./images/team/team3.png" className="img-fluid"> */}
								</div>
								<div className="team-info pt-4 text-center">
									<h5>UI / UX Design</h5>
									<p>
										I design intuitive and engaging interfaces by understanding
										user needs and behaviors. Through prototyping and user
										testing, I refine the user experience to create functional
										and delightful digital products.
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
