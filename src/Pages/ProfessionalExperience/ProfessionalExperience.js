import React, { Component } from "react";
import img1 from "../../projectImage/Graduation beautiful logo png - Google Search.png";
import "./ProfessionalExperience.css";

class ProfessionalExperience extends Component {
	render() {
		return (
			<div id="experience" className="container head ">
				{/* <div className="educationHead">
				<h2>Education </h2>
			</div> */}
				<div>
					<div class="card">
						<div className="card-part">
							<h5 className="card-title  ">Frontend Web Developer</h5>

							<h6>
								<div className="wording-education-Img">
									{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
									<img src={img1} alt="" className="img-fluid" />
								</div>
								01-01-2023 to till now
							</h6>

							<p className="card-text">Kasfia IT, Khulna, Bangladesh</p>
						</div>
						<div className="card-part">
							<h5 className="card-title">React.JS Developer</h5>
							<h6>
								<div className="wording-education-Img">
									{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
									<img src={img1} alt="" className="img-fluid" />
								</div>
								01-08-2022 to 30-11-2022
							</h6>
							<p className="card-text ">Saha Technology, Dhaka, Bangladesh</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProfessionalExperience;
