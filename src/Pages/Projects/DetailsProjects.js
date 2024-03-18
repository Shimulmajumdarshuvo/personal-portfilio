import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailsProjects.css";

const DetailsProjects = () => {
	const { serviceId } = useParams();
	const [services, setServices] = useState([]);
	useEffect(() => {
		const url = "/service.json";
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setServices(data);
			});
	}, [serviceId]);
	const service = services?.find((service) => service.id === serviceId);

	return (
		<div>
			{/* <section id="portfolio" class="portfolio_wrapper">
				<div class="container">
					<div class="row">
						<div class="col-sm-12 mb-4">
							<span class="subtitle">My Complete Project</span>
							<span class="project">
								<h2>My Latest Project</h2>
							</span>

							<p>
								There are many variations of passages of Lorm Ipsum available,
							</p>
						</div>
					</div>
					<div className="row">
						<div class="col-lg-3 col-md-6 mb-4">
							<div class="card p-0">
								<span style="background-image:url('assets/img/portfolio/App-Landing-Page.png')"></span>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 mb-4">
							<div class="card p-0">
								<span style="background-image:url('assets/img/portfolio/Christmas-Landing-Page.png')"></span>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 mb-4">
							<div class="card p-0">
								<span style="background-image:url('assets/img/portfolio/E-Commerce-Website-Using-Bootstap-5.png')"></span>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 mb-4">
							<div class="card p-0">
								<span style="background-image:url('assets/img/portfolio/Ecommerce-Jewellery-Website.png')"></span>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 mb-4">
							<div class="card p-0">
								<span style="background-image:url('assets/img/portfolio/Foodies.png')"></span>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 mb-4">
							<div class="card p-0">
								<span style="background-image:url('assets/img/portfolio/Hashtag-Landing-Page.png')"></span>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 mb-4">
							<div class="card p-0">
								<span style="background-image:url('assets/img/portfolio/HeadPhones.png')"></span>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 mb-4">
							<div class="card p-0">
								<span style="background-image:url('assets/img/portfolio/Pizza-Landing-Page.png')"></span>
							</div>
						</div>
					</div>
				</div>
			</section> */}

			<div className="add-card">
				<div className="text-center">
					<img src={service?.img} alt="" />
					<img src={service?.img2nd} alt="" />
					<img src={service?.img3rd} alt="" />
				</div>
				<div>
					<h2> {service?.name}</h2>
					<p>{service?.description}</p>
					<p>{service?.feature}</p>
					<p>{service?.technology}</p>
					<a
						className="btn  shadow-lg mt-1 me-1 buttons"
						href={service?.live}
						target="_blank">
						LIVE LINK{" "}
					</a>
					<a
						className="btn  shadow-lg mt-1 me-1 buttons"
						href={service?.gitClient}
						target="_blank">
						Git Client{" "}
					</a>
					<a
						className="btn  shadow-lg mt-1 me-1 buttons"
						href={service?.gitServer}
						target="_blank">
						Git Server{" "}
					</a>
				</div>
			</div>
		</div>
	);
};

export default DetailsProjects;
