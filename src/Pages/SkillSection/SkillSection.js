import React ,{useEffect}from "react";
import "./SkillSection.css";
import Aos from "aos";
import "aos/dist/aos.css";

const SkillSection = () => {
		useEffect(() => {
			Aos.init({ duration: 3000 });
		}, []);
	return (
		<div id="skill" className=" Skill-Sections">
			<div className="mb-4 ">
				<h2 className="subtitle" data-aos="fade-left">
					Professional Skills{" "}
				</h2>
			</div>

			<div className="container mt-4" data-aos="zoom-in-right">
				<div className="row">
					<div className="col-md-12 ">
						<div className="progress-title">
							<h3>HTML</h3>
							<div className="progress">
								<div
									className="progress-bar"
									style={{ width: "85%", backgroundColor: "#CB2DF6" }}>
									{/* <div className="progress-value">85%</div> */}
								</div>
							</div>
						</div>
						<div className="progress-title">
							<h3>CSS</h3>
							<div className="progress">
								<div
									className="progress-bar"
									style={{ width: "80%", backgroundColor: "#77183C" }}>
									{/* <div className="progress-value">80%</div> */}
								</div>
							</div>
						</div>
						<div className="progress-title">
							<h3>Bootstrap</h3>
							<div className="progress">
								<div
									className="progress-bar"
									style={{ width: "85%", backgroundColor: "blue" }}>
									{/* <div className="progress-value">85%</div> */}
								</div>
							</div>
						</div>
						<div className="progress-title">
							<h3>Tailwind CSS</h3>
							<div className="progress">
								<div
									className="progress-bar"
									style={{ width: "80%", backgroundColor: "yellow" }}>
									{/* <div className="progress-value">90%</div> */}
								</div>
							</div>
						</div>
						<div className="progress-title">
							<h3>Javascript + Es6</h3>
							<div className="progress">
								<div
									className="progress-bar"
									style={{ width: "65%", backgroundColor: "#096363" }}>
									{/* <div className="progress-value">75%</div> */}
								</div>
							</div>
						</div>
						<div className="progress-title">
							<h3>React.JS + Next.JS</h3>
							<div className="progress">
								<div
									className="progress-bar"
									style={{ width: "65%", backgroundColor: "#00EBDD" }}>
									{/* <div className="progress-value">75%</div> */}
								</div>
							</div>
						</div>
						<div className="progress-title">
							<h3>Node.JS + MongoDB</h3>
							<div className="progress">
								<div
									className="progress-bar"
									style={{ width: "60%", backgroundColor: "violet " }}>
									{/* <div className="progress-value">75%</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillSection;
