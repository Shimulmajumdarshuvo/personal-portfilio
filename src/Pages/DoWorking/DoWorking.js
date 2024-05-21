import React from "react";
import "./DoWorking.css";
import "animate.css";
import img1 from "../../projectImage/IMG-1.png";
import img2 from "../../projectImage/IMG-2.png";
import img3 from "../../projectImage/IMG3.png";
import img4 from "../../projectImage/IMG4.png";
import img5 from "../../projectImage/IMG5.png";
import img6 from "../../projectImage/IMG6.png";

const DoWorking = () => {
	return (
		<div className=" working-sec">
			<div className="WorkTitle ">
				<h2 className="">HOW DO I WORK</h2>
			</div>
			<div className="doWork">
				<div className="subWork animate__animated animate__zoomIn">
					<div className="wording-demo-Img">
						{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
						<img src={img1} alt="" className="img-fluid" />
					</div>
					<h2>01. Discussion</h2>
					<p>
						To understand the projects needs & requirements. It's very important
						for me. For that I discuss with every details to related projects if
						nedded I communicate by video or audio conversation.
					</p>
				</div>
				<div className="subWork animate__animated animate__zoomIn">
					<div className="wording-demo-Img">
						{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
						<img src={img2} alt="" className="img-fluid" />
					</div>
					<h2>02. Planing</h2>
					<p>
						To understand the projects needs & requirements. It's very important
						for me. For that I discuss with every details to related projects if
						nedded I communicate by video or audio conversation.
					</p>
				</div>
				<div className="subWork animate__animated animate__zoomIn">
					<div className="wording-demo-Img">
						{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
						<img src={img3} alt="" className="img-fluid" />
					</div>
					<h2>03. Design</h2>
					<p>
						To understand the projects needs & requirements. It's very important
						for me. For that I discuss with every details to related projects if
						nedded I communicate by video or audio conversation.
					</p>
				</div>
				<div className="subWork animate__animated animate__zoomIn">
					<div className="wording-demo-Img">
						{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
						<img src={img4} alt="" className="img-fluid" />
					</div>
					<h2>04. Coding</h2>
					<p>
						To understand the projects needs & requirements. It's very important
						for me. For that I discuss with every details to related projects if
						nedded I communicate by video or audio conversation.
					</p>
				</div>
				<div className="subWork animate__animated animate__zoomIn">
					<div className="wording-demo-Img">
						{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
						<img src={img5} alt="" className="img-fluid" />
					</div>
					<h2>05. Submit for Review</h2>
					<p>
						To understand the projects needs & requirements. It's very important
						for me. For that I discuss with every details to related projects if
						nedded I communicate by video or audio conversation.
					</p>
				</div>
				<div className="subWork hover:animate__animated animate__zoomIn">
					<div className="wording-demo-Img">
						{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
						<img src={img6} alt="" className="img-fluid" />
					</div>
					<h2>06. Website is Ready!</h2>
					<p>
						To understand the projects needs & requirements. It's very important
						for me. For that I discuss with every details to related projects if
						nedded I communicate by video or audio conversation.
					</p>
				</div>
			</div>
		</div>
	);
};

export default DoWorking;
