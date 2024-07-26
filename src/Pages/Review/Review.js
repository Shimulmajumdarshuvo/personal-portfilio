import React ,{useEffect}from "react";
import img1 from "../../projectImage/Shourav.jpg";
import img2 from "../../projectImage/tajul.jpg";
import img3 from "../../projectImage/Shah.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Review.css";
import { BsFillStarFill } from "react-icons/bs";

const Review = () => {
		useEffect(() => {
			Aos.init({ duration: 3000 });
		}, []);
	return (
		<div id="testimonial">
			<div className="Review-Main">
				<h1 data-aos="fade-left">Testimonial</h1>
				<div className="review container">
					<div className="subReview" data-aos="zoom-in-right">
						<div className="singleReview-part1"></div>
						<div className="singleReview-part2">
							<div className="singleReview">
								<div className="client flex">
									<h2>Shaharuzzaman</h2>
									<img src={img1} alt="" className="img-fluid" />
								</div>
								<p>
									"Your front-end development skills are outstanding. Your
									attention to detail and clean coding practices are evident,
									ensuring a high-quality and maintainable product."
								</p>
								<span>
									<BsFillStarFill></BsFillStarFill>
								</span>{" "}
								<span>
									<BsFillStarFill></BsFillStarFill>
								</span>{" "}
								<span>
									<BsFillStarFill></BsFillStarFill>
								</span>{" "}
								<span>
									<BsFillStarFill></BsFillStarFill>
								</span>{" "}
								<span>
									<BsFillStarFill></BsFillStarFill>
								</span>
							</div>
						</div>
					</div>
					<div className="subReview" data-aos="zoom-in-up">
						<div className="singleReview-part1"></div>
						<div className="singleReview-part2-2">
							<div className="singleReview">
								<div className="client flex">
									<h2>Tajul Islam</h2>
									<img src={img2} alt="" className="img-fluid" />
								</div>
								<p>
									"Your expertise in React and Tailwind CSS is impressive. The
									components are well-structured and reusable, and the styling
									is clean and consistent. The application performs smoothly,
									with a responsive design that adapts seamlessly to various
									devices."
								</p>
								<span>
									<BsFillStarFill></BsFillStarFill>
								</span>{" "}
								<span>
									<BsFillStarFill></BsFillStarFill>
								</span>{" "}
								<span>
									<BsFillStarFill></BsFillStarFill>
								</span>{" "}
								<span>
									<BsFillStarFill></BsFillStarFill>
								</span>{" "}
								<span>
									<BsFillStarFill></BsFillStarFill>
								</span>
							</div>
						</div>
					</div>
					<div className="subReview" data-aos="zoom-in-left">
						<div className="singleReview-part1"></div>
						<div className="singleReview-part2-3">
							<div className="singleReview">
								<div className="client flex">
									<h2>Shah Faran</h2>
									<img src={img3} alt="" className="img-fluid" />
								</div>
								<p>
									"Your proficiency in HTML, CSS, and JavaScript is exceptional.
									The code is well-organized and optimized, resulting in a fast
									and responsive site. The interactive elements are intuitive
									and enhance the overall user experience."
								</p>
								<span>
									<BsFillStarFill></BsFillStarFill>
								</span>{" "}
								<span>
									<BsFillStarFill></BsFillStarFill>
								</span>{" "}
								<span>
									<BsFillStarFill></BsFillStarFill>
								</span>{" "}
								<span>
									<BsFillStarFill></BsFillStarFill>
								</span>{" "}
								<span>
									<BsFillStarFill></BsFillStarFill>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
