'use client'
import React, { useState } from "react";
import levelsData from "./data/data";

const Timeline = () => {
	const [selectedLevel, setSelectedLevel] = useState(0);

	return (
		<div className="flex flex-col w-full h-auto">
			<h2 className="text-base md:text-3xl font-bold text-seventh mb-[30px] xl:mb-[50px]">
				مراحل احراز هویت سریع در صرافی ارز هشت
			</h2>

			{/* دسکتاپ */}
			{levelsData.map((level, index) => (
				<div key={index} className="hidden sm:flex lg:flex-row w-full h-auto gap-8 relative mb-10">
					<div className="flex flex-col items-center">
						<div className="flex">
							<div className="w-5 h-5 rotate-45 bg-[#FFC107] rounded-[5px] z-10"></div>
							<span className="absolute mr-14 text-base font-semibold text-seventh">
								{level.level}
							</span>
						</div>

						<div
							className={`absolute top-6 right-2 w-1 bg-[#ADADAD80] opacity-50 ${index !== levelsData.length - 1 ? "h-full" : "h-0"
								}`}
						></div>
					</div>

					<div className="w-full flex flex-col md:flex-row justify-between mt-10 items-start">
						{[
							{
								title: "اطلاعات مورد نیاز",
								data: level.requiredInformation,
								boxColor: "bg-[#FFC107]",
								color: "text-[#FFC107]",
							},
							{
								title: "دسترسی ها",
								data: level.accessibility,
								boxColor: "bg-[#33B028]",
								color: "text-[#33B028]",
							},
							{
								title: "محدودیت ها",
								data: level.restrictions,
								boxColor: "bg-[#F00500]",
								color: "text-[#F00500]",
							},
						].map((section, idx) => (
							<div
								key={idx}
								className="w-full md:mt-0 md:w-[32%] bg-third rounded-xl px-4 py-4 flex flex-col mb-5 md:mb-[50px]"
							>
								<span className={`mb-4 text-sm font-semibold ${section.color}`}>
									{section.title}:
								</span>
								<ul className="flex flex-col gap-1">
									{section.data.map((item, i) => (
										<li key={i} className="flex items-start">
											<div className="w-6">
												<div className={`w-2 h-2 rotate-45 rounded-sm ${section.boxColor} mx-2 mt-2`}></div>
											</div>
											<span className="text-sm font-normal text-seventh leading-7 text-justify">
												{item}
											</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			))}

			{/* موبایل */}
			<div className="sm:hidden flex overflow-x-auto gap-3 px-4 mb-4 scrollbar-hidden ">
				{levelsData.map((level, index) => {
					const isSelected = selectedLevel === index;
					return (
						<div
							key={index}
							onClick={() => setSelectedLevel(index)}
							className={`flex-shrink-0 px-4 py-2 rounded-[20px] text-sm font-semibold cursor-pointer transition-all duration-200 ${isSelected ? "bg-secondary text-sixth opacity-100" : "bg-secondary text-sixth opacity-50"
								}`}
						>
							{level.level}
						</div>
					);
				})}
			</div>

			{selectedLevel !== null && (
				<div className="sm:hidden mt-4 w-full px-4">
					{[
						{
							title: "اطلاعات مورد نیاز",
							data: levelsData[selectedLevel].requiredInformation,
							boxColor: "bg-[#FFC107]",
							color: "text-[#FFC107]",
						},
						{
							title: "دسترسی ها",
							data: levelsData[selectedLevel].accessibility,
							boxColor: "bg-[#33B028]",
							color: "text-[#33B028]",
						},
						{
							title: "محدودیت ها",
							data: levelsData[selectedLevel].restrictions,
							boxColor: "bg-[#F00500]",
							color: "text-[#F00500]",
						},
					].map((section, idx) => (
						<div
							key={idx}
							className="w-full bg-third rounded-xl px-4 py-4 flex flex-col mb-5"
						>
							<span className={`mb-4 text-sm font-semibold ${section.color}`}>
								{section.title}:
							</span>
							<ul className="flex flex-col gap-1">
								{section.data.map((item, i) => (
									<li key={i} className="flex items-start">
										<div className="w-6">
											<div
												className={`w-2 h-2 rotate-45 rounded-sm ${section.boxColor} mx-2 mt-2`}
											></div>
										</div>
										<span className="text-sm font-normal text-seventh leading-7 text-justify">
											{item}
										</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Timeline;
