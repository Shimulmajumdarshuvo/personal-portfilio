import React from "react";
import "./SkillEducation.css";

import SkillSection from "../SkillSection/SkillSection";
import ExperienceEducation from "../Experience&Education/ExperienceEducation";

const SkillEducation = () => {
	return (
		<div className="SkillEducation">
			<div>
				<SkillSection></SkillSection>
			</div>
			<div>
				<ExperienceEducation></ExperienceEducation>
			</div>
		</div>
	);
};

export default SkillEducation;
