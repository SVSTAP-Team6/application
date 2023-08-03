import React, { useState } from "react";
import clsx from "clsx";

import { AiOutlineUnorderedList } from "react-icons/ai";
import { Card } from "../components";

const options = [
	{
		name: "Standard",
		value: "standard",
	},
	{
		name: "AI",
		value: "ai",
	},
	{
		name: "Customized",
		value: "customized",
	},
];

const grains = [
	{
		title: "Plain Powder",
		desc: "This Powder is Plain and simple. Whoever like this without burden.",
		price: "7.50",
	},
];

const Order = () => {
	const [orderOption, setOrderOption] = useState("standard"); // standard | ai | customized

	return (
		<div className="flex flex-col itmes-stretch">
			<div className="rounded border-1 shadow-neutral-400 w-full h-full flex justify-center flex-col gap-4">
				<p className=" font-semibold text-[1.1rem]">
					We think you might enjoy these specially selected powders
				</p>

				{/* header */}
				<div className="w-full flex justify-between">
					{options.map((option) => (
						<button
							className={clsx([
								"w-fit min-w-[4rem] rounded-2xl p-2 mx-2 hover:brightness-90 transition",
								orderOption === option.value
									? "bg-orange-400 text-white"
									: "bg-white text-gray-400",
							])}
							onClick={() => setOrderOption(option.value)}
						>
							{option.name}
						</button>
					))}
					<button className=" rounded-xl w-10 h-10 bg-white flex justify-center items-center text-gray-400">
						<AiOutlineUnorderedList></AiOutlineUnorderedList>
					</button>
				</div>

				{/* body */}
				{grains.map((grain) => (
					<Card
						title={grain.title}
						desc={grain.desc}
						price={grain.price}
						imgSrc={grain.imgSrc}
					></Card>
				))}
			</div>
		</div>
	);
};

export default Order;
