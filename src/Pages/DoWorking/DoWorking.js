import React, { useEffect } from "react";
import "./DoWorking.css";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import img1 from "../../projectImage/IMG-1.png";
import img2 from "../../projectImage/IMG-2.png";
import img3 from "../../projectImage/IMG3.png";
import img4 from "../../projectImage/IMG4.png";
import img5 from "../../projectImage/IMG5.png";
import img6 from "../../projectImage/IMG6.png";

const DoWorking = () => {
	useEffect(() => {
		Aos.init({ duration: 3000 });
	}, []);
	return (
		<div className=" working-sec">
			<div className="WorkTitle ">
				<h2 className="">HOW DO I WORK</h2>
			</div>
			<div className="doWork">
				<div className="subWork " data-aos="fade-right">
					<div className="wording-demo-Img">
						{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
						<img src={img1} alt="" className="img-fluid" />
					</div>
					<h2>01. Discussion</h2>
					<p>
						I start with an initial meeting to understand the client's
						requirements, goals, and deadlines. Clear communication is
						established to ensure regular updates and feedback.
					</p>
				</div>
				<div className="subWork " data-aos="zoom-in-up">
					<div className="wording-demo-Img">
						{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
						<img src={img2} alt="" className="img-fluid" />
					</div>
					<h2>02. Planing</h2>
					<p>
						A detailed project plan and timeline are created, outlining the
						scope, deliverables, and milestones. Resources are allocated, and
						potential risks are identified with mitigation strategies.
					</p>
				</div>
				<div className="subWork " data-aos="fade-left">
					<div className="wording-demo-Img">
						{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
						<img src={img3} alt="" className="img-fluid" />
					</div>
					<h2>03. Design</h2>
					<p>
						Wireframes and mockups are developed to visualize the layout. The
						design focuses on user experience (UX) and user interface (UI),
						ensuring responsiveness across devices. Client feedback is
						incorporated to finalize the design.
					</p>
				</div>
				<div className="subWork" data-aos="zoom-in-right">
					<div className="wording-demo-Img">
						{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
						<img src={img4} alt="" className="img-fluid" />
					</div>
					<h2>04. Coding</h2>
					<p>
						The design is transformed into a functional website using Bootstrap,
						Tailwind CSS, JavaScript, React.js, Next.js, Node.js, and MongoDB.
						Thorough testing is conducted to ensure a seamless user experience.
					</p>
				</div>
				<div className="subWork" data-aos="zoom-in-up">
					<div className="wording-demo-Img">
						{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
						<img src={img5} alt="" className="img-fluid" />
					</div>
					<h2>05. Submit for Review</h2>
					<p>
						The website undergoes an internal review, then it's presented to the
						client for feedback. Necessary revisions are made based on client
						input.
					</p>
				</div>
				<div className="subWork " data-aos="zoom-in-left">
					<div className="wording-demo-Img">
						{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
						<img src={img6} alt="" className="img-fluid" />
					</div>
					<h2>06. Website is Ready!</h2>
					<p>
						The website is launched after obtaining the client's approval.
						Comprehensive documentation is provided, and post-launch support is
						offered to address any issues and keep the website updated.
					</p>
				</div>
			</div>
		</div>
	);
};

export default DoWorking;
