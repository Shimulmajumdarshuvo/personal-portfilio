import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
	const { id, name, live, img, description } = service;
	const navigate = useNavigate();

	const navigateToServiceDetail = (id) => {
		navigate(`/service/${id}`);
	};

	return (
		<div>
			{/* <img src={img} alt="" />
			<h4>{name}</h4>
			<p>{description}</p>

			<div className="servicerBtnDiv">
				<div>
					<a className="btn  shadow-lg  Butns" href={live} target="_blank">
						Live Link{" "}
					</a>
				</div>
				<div>
					<button
						className="btn Butns "
						onClick={() => navigateToServiceDetail(id)}>
						See Details
					</button>
				</div>
			</div> */}

			<div>
				<section id="portfolio" className="portfolio_wrapper">
					<div className="container">
						<div className="row">
							<div className="col-sm-12 mb-4">
								<span className="subtitle">My Complete Project</span>
								<span className="project">
									<h2>My Latest Project</h2>
								</span>

								<p>
									There are many variations of passages of Lorm Ipsum available,
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-3 col-md-6 mb-4">
								<div className="card p-0">
									{/* <span style="background-image:url('assets/img/portfolio/App-Landing-Page.png')"></span> */}
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-4">
								<div className="card p-0">
									{/* <span style="background-image:url('assets/img/portfolio/Christmas-Landing-Page.png')"></span> */}
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-4">
								<div className="card p-0">
									{/* <span style="background-image:url('assets/img/portfolio/E-Commerce-Website-Using-Bootstap-5.png')"></span> */}
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-4">
								<div className="card p-0">
									{/* <span style="background-image:url('assets/img/portfolio/Ecommerce-Jewellery-Website.png')"></span> */}
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-4">
								<div className="card p-0">
									{/* <span style="background-image:url('assets/img/portfolio/Foodies.png')"></span> */}
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-4">
								<div className="card p-0">
									{/* <span style="background-image:url('assets/img/portfolio/Hashtag-Landing-Page.png')"></span> */}
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-4">
								<div className="card p-0">
									{/* <span style="background-image:url('assets/img/portfolio/HeadPhones.png')"></span> */}
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-4">
								<div className="card p-0">
									{/* <span style="background-image:url('assets/img/portfolio/Pizza-Landing-Page.png')"></span> */}
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Service;
