import React,{useEffect} from "react";
import "./WorkService.css";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaFirstOrder, FaServer } from "react-icons/fa";
import { BsSmartwatch } from "react-icons/bs";

const WorkService = () => {
		useEffect(() => {
			Aos.init({ duration: 3000 });
		}, []);
	return (
		<div className="TopService container">
			<div className="mainService">
				<div className="subService" data-aos="zoom-in-right">
					<div className="icon">
						<span>
							<BsFillEmojiSmileFill></BsFillEmojiSmileFill>
						</span>
					</div>
					<h2>100%</h2>
					<p>Client Satisfaction</p>
				</div>
				<div className="subService"  data-aos="zoom-out-up">
					<div className="icon">
						<span>
							<FaServer></FaServer>
						</span>
					</div>

					<h2>50+</h2>
					<p>Projects Completed</p>
				</div>
				<div className="subService" data-aos="zoom-in-up">
					<div className="icon">
						<span>
							<FaFirstOrder></FaFirstOrder>
						</span>
					</div>

					<h2>4+</h2>
					<p>Years of Experience</p>
				</div>
				<div className="subService " data-aos="zoom-in-left">
					<div className="icon">
						<span>
							<BsSmartwatch></BsSmartwatch>
						</span>
					</div>

					<h2>24/7</h2>
					<p>Hours Support</p>
				</div>
			</div>
		</div>
	);
};

export default WorkService;
