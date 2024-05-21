import React from "react";
import Image1 from "../../../src/projectImage/image1.png";
import Image2 from "../../../src/projectImage/images2.png";
import Image3 from "../../../src/projectImage/images3.png";
import Image4 from "../../../src/projectImage/images4.png";
import Image5 from "../../../src/projectImage/images5.png";
import Image6 from "../../../src/projectImage/images6.png";
import Image7 from "../../../src/projectImage/images7.png";
import Image8 from "../../../src/projectImage/images8.png";
import "./Projects.css";

const Projects = () => {
	return (
		<section id="project" className=" portfolio_wrapper">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 mb-4">
						<span className="subtitle">My Latest Project</span>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3 col-md-6 mb-4">
						<div className="card portfolioSection p-0">
							<span style={{ backgroundImage: `url(${Image1})` }}></span>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 mb-4">
						<div className="card portfolioSection p-0">
							<span style={{ backgroundImage: `url(${Image2})` }}></span>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 mb-4">
						<div className="card portfolioSection p-0">
							<span style={{ backgroundImage: `url(${Image3})` }}></span>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 mb-4">
						<div className="card portfolioSection p-0">
							<span style={{ backgroundImage: `url(${Image4})` }}></span>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 mb-4">
						<div className="card portfolioSection p-0">
							<span style={{ backgroundImage: `url(${Image5})` }}></span>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 mb-4">
						<div className="card portfolioSection p-0">
							<span style={{ backgroundImage: `url(${Image6})` }}></span>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 mb-4">
						<div className="card portfolioSection p-0">
							<span style={{ backgroundImage: `url(${Image7})` }}></span>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 mb-4">
						<div className="card portfolioSection p-0">
							<span style={{ backgroundImage: `url(${Image8})` }}></span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
