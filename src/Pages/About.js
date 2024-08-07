import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useTypewriter } from "react-simple-typewriter";
import "./About.css";
import {
	FaFacebookSquare,
	FaGithubSquare,
	FaInvision,
	FaTwitter,
} from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { FcCallback, FcLink } from "react-icons/fc";
import { MdOutgoingMail } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

const About = () => {
	const {} = useTypewriter({
		loop: {},
	});

	return (
		<div className="about">
			<div id="" className="about-part p-2 ">
				<div className="row m-3">
					<div className="col-lg-4 col-md-5 ">
						<div className="avatar hover-effect  images   animate__animated  animate__backInLeft">
							<img
								src="https://i.ibb.co/qDGDyVr/Whats-App-Image-2024-03-05-at-11-22-15-PM.jpg"
								width="290"
								height="320"
								alt=""
							/>
						</div>
					</div>
					<div className="col-lg-8 col-md-7 HeaderContent text-center text-md-start">
						<h3>I'm</h3>
						<h2>Shimul Majumdar</h2>
						<h4 className="py-1">
							<span style={{ fontWeight: "bold" }}>
								<Typewriter
									loop
									cursor
									cursorStyle="|"
									typeSpeed={70}
									deleteSpeed={50}
									delaySpeed={1000}
									words={[
										"MERN Stack Developer",
										"React Web Developer",
										"Web Designer",
										"Front End Developer",
									]}
								/>
							</span>
						</h4>
						<p className="aboutContent  slide-left">
							<span>
								<ImLocation2></ImLocation2>
							</span>{" "}
							Khulna, Bangladesh <br />
							<span>
								<FcCallback></FcCallback>
							</span>{" "}
							01303461237 <br />
							<span>
								<MdOutgoingMail></MdOutgoingMail>
							</span>{" "}
							shimulmajumdar906@gmail.com <br />
							
						</p>
						<div className="HeaderIcons  slide-left">
							<a href="https://www.facebook.com/shimulmajumdar.shuvo">
								<span>
									<FaFacebookSquare></FaFacebookSquare>
								</span>
							</a>
							<a href="https://github.com/Shimulmajumdarshuvo">
								<span>
									<FaGithubSquare></FaGithubSquare>
								</span>
							</a>

							<span>
								<FaTwitter></FaTwitter>
							</span>
							<a href="https://www.linkedin.com/in/shimul-majumdar-a4ab4820b/">
								<span>
									<FaInvision></FaInvision>
								</span>
							</a>
						</div>
						<br />

						<div className="d-print-none links mt-3  slide-left">
							<a className="ButtonsContact  " href="#contact">
								Contact Me{" "}
								<span>
									<RiContactsFill></RiContactsFill>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
