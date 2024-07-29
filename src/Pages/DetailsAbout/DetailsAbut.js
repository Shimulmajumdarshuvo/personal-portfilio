import React from "react";
import "./DetailsAbout.css";
import { ImDownload } from "react-icons/im";

const DetailsAbut = () => {
	return (
		<div>
			<div className="DetailsAbout">
				<div id="about" className=" about-part cover-bg p-3 p-lg-4 ">
					<div className="row">
						<div className="col-lg-8 col-md-7 text-center text-md-start gap-2">
							<h2 className="aboutIcon slide-left">About Me</h2>

							<p className="AboutContents ICON slide-left py-2 ">
								I am a skilled Front-End Web Developer and Programmer with
								extensive experience in freelance web development, consistently
								delivering high-quality products to a diverse range of clients.
								My expertise includes HTML, CSS, Bootstrap, TailwindCSS,
								JavaScript (ES6), and the MERN (MongoDB, Express, React, Node,
								Next) stack. I am eager to contribute to the creation of
								engaging and user-friendly web applications while continuously
								enhancing my technical abilities and growing within the company.
								I am confident that my fresh ideas and innovative approach will
								add significant value to your team.
							</p>

							<br />

							<div className="d-print-none links mt-1  slide-left">
								<a
									className="ButtonsContact  "
									href="https://drive.google.com/file/d/17Bw_6iHBvBX1UEX3dIe3SJAp-mONpHlS/view?usp=sharing"
									target="_blank/">
									Download Resume{" "}
									<span>
										<ImDownload></ImDownload>
									</span>
								</a>
							</div>
							<br />
						</div>

						<div className="col-lg-4 col-md-5">
							<div className="avatar hover-effect  images  p-1 animate__animated  animate__backInRight">
								<img
									src="https://i.ibb.co/JdLq3dt/web-design-coding-and-asian-man-with-a-computer-for-programming-a-website-at-night-cyber.webp"
									width="300"
									height="300"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsAbut;
