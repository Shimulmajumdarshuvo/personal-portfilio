import React, { useState } from "react";
import Education from "../Education/Education";
import ProfessionalExperience from "../ProfessionalExperience/ProfessionalExperience";

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
			{/* add new department  */}
			<div className="">
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-center ">
					{elements.map((item) => {
						return (
							<button
								key={item.label}
								onClick={() => handleButtonClick(item.element, item.label)}
								className={`${
									selectedButtonLabel === item.label
										? " scale-105 bg-violet-600 text-white hover:bg-violet-700"
										: "bg-slate-200 hover:bg-slate-300"
								} mx-2 py-2 px-3`}>
								{item.label}
							</button>
						);
					})}
				</div>
			</div>
			<div className="mx-auto py-2">
				{selectedDetail && <div>{selectedDetail}</div>}
			</div>
		</>
	);
}
