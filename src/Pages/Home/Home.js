import React from "react";

import About from "../About";
import AboutWork from "../AboutWork/AboutWork";
import Contact from "../Contact/Contact";
import DoWorking from "../DoWorking/DoWorking";

import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import WorkService from "../Service/WorkService";
import Review from "../Review/Review";

import SkillExperience from "../Skill&Education/SkillEducation";
import DetailsAbut from "../DetailsAbout/DetailsAbut";

const Home = () => {
	return (
		<div className="Total-section">
			<About></About>
			<DetailsAbut></DetailsAbut>
			<AboutWork></AboutWork>
			<SkillExperience></SkillExperience>
			<Experience></Experience>

			<DoWorking></DoWorking>
			<Projects></Projects>
			<WorkService></WorkService>
			<Review></Review>
			<Contact></Contact>
		</div>
	);
};

export default Home;
