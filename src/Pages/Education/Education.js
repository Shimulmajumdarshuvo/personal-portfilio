import React from "react";
import img1 from "../../projectImage/Graduation beautiful logo png - Google Search.png";
import "./Education.css";

const Education = () => {
	return (
		<div className="head ">
			{/* <div className="educationHead">
				<h2>Education </h2>
			</div> */}
			<div>
				<div class="card">
					<div className="card-part">
						<h5 className="card-title  ">
							Bachelor of Computer Science from North Western University,Khulna
						</h5>

						<h6>
							<div className="wording-education-Img">
								{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
								<img src={img1} alt="" className="img-fluid" />
							</div>
							Graduation 2023
						</h6>

						<p className="card-text">
							Currently completing my B.Sc in Computer Science and <br />{" "}
							Engineering in North Western University,Khulna
						</p>
					</div>
					<div className="card-part">
						<h5 className="card-title">
							Higher Secondary from Chuknagor College,Chuknagor
						</h5>
						<h6>
							<div className="wording-education-Img">
								{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
								<img src={img1} alt="" className="img-fluid" />
							</div>
							Graduation 2017
						</h6>
						<p className="card-text ">
							Completed my Higher Secondary education from <br />
							Chuknagor College,Chuknagor
						</p>
					</div>
					{/* <div className="card-part">
						<h5 className="card-title">
							Secondary from Dibbya Palli Secondary School,Chuknagor
						</h5>
						<h6>
							{" "}
							<MdOutlineCastForEducation size="2em" color="#2ca46d" />{" "}
							Graduation 2015
						</h6>
						<p className="card-text">
							Completed my Secondary education from Dibbya <br /> Palli
							Secondary School,Chuknagor
						</p>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Education;
