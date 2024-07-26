import React, { useState,useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Education from "../Education/Education";
import Aos from "aos";
import "aos/dist/aos.css";
import ProfessionalExperience from "../ProfessionalExperience/ProfessionalExperience";
import "./ExperienceEducation.css";

const elements = [
	{
		label: "Education",
		element: <Education />,
	},
	{
		label: "Experience",
		element: <ProfessionalExperience />,
	},
];

export default function TestimonialCertificate() {
		useEffect(() => {
			Aos.init({ duration: 3000 });
		}, []);
	const [selectedDetail, setSelectedDetail] = useState(elements[0].element);
	const [selectedButtonLabel, setSelectedButtonLabel] = useState(
		elements[0].label
	);

	const handleButtonClick = (detailText, label) => {
		setSelectedDetail(detailText);
		setSelectedButtonLabel(label);
	};

	return (
		<>
			<div>
				<Row className="mb-3">
					{elements.map((item) => (
						<Col key={item.label} xs={12} md={6} xl={3}>
							<Button
								onClick={() => handleButtonClick(item.element, item.label)}
								className={`custom-button ${
									selectedButtonLabel === item.label
										? "custom-button-selected"
										: "custom-button-unselected"
								}`}>
								{item.label}
							</Button>
						</Col>
					))}
				</Row>

				<Row>
					<Col>
						<div id="experience" className="mx-auto py-3" data-aos="zoom-in-left">
							{selectedDetail && <div>{selectedDetail}</div>}
						</div>
					</Col>
				</Row>
			</div>
		</>
	);
}
