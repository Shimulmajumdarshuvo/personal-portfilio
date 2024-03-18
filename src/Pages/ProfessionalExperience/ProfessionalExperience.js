import React, { Component } from "react";
import { MdOutlineCastForEducation } from "react-icons/md";
import "./ProfessionalExperience.css";

class ProfessionalExperience extends Component {
	render() {
		return (
			<div className="container head ">
				{/* <div className="educationHead">
				<h2>Education </h2>
			</div> */}
				<div>
					<div class="card">
						<div className="card-part">
							<h5 className="card-title  ">Frontend Developer</h5>

							<h6>
								{" "}
								<MdOutlineCastForEducation size="2em" color="#2ca46d" />{" "}
								01-01-2023 to till now
							</h6>

							<p className="card-text">Kasfia IT, Khulna, Bangladesh</p>
						</div>
						<div className="card-part">
							<h5 className="card-title">React.JS Developer</h5>
							<h6>
								{" "}
								<MdOutlineCastForEducation size="2em" color="#2ca46d" />{" "}
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
