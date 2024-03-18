import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useTypewriter } from "react-simple-typewriter";
import "./About.css";
import {
	FaFacebookSquare,
	FaGithubSquare,
	FaInvision,
	FaTelegram,
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
			<div id="about" className="container about-part cover-bg p-3 p-lg-4 ">
				<div className="row">
					<div className="col-lg-4 col-md-5">
						<div className="avatar hover-effect  images   animate__animated  animate__backInLeft">
							<img
								src="https://i.ibb.co/qDGDyVr/Whats-App-Image-2024-03-05-at-11-22-15-PM.jpg"
								width="250"
								height="270"
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
										"React Developer",
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
							Khulna Bangladesh <br />
							<span>
								<FcCallback></FcCallback>
							</span>{" "}
							01303461237 <br />
							<span>
								<MdOutgoingMail></MdOutgoingMail>
							</span>{" "}
							shimulmajumdar906@gmail.com <br />
							<span>
								<FcLink></FcLink>
							</span>{" "}
							inkedin.com/in/shimul-majumdar-a4ab4820b/
						</p>
						<div className="HeaderIcons  slide-left">
							<span>
								<FaFacebookSquare></FaFacebookSquare>
							</span>
							<span>
								<FaGithubSquare></FaGithubSquare>
							</span>
							<span>
								<FaTwitter></FaTwitter>
							</span>
							<span>
								<FaInvision></FaInvision>
							</span>
							<span>
								<FaTelegram></FaTelegram>
							</span>
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
