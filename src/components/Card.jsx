import React from "react";

const Card = ({
	title = "title",
	desc = "desc",
	price = "0.00",
	imgSrc = "https://watermark.lovepik.com/photo/20211208/large/lovepik-whole-grains-picture_501616030.jpg",
}) => {
	return (
		<>
			<div className="w-full p-2 rounded-2xl bg-white flex items-center gap-2">
				<img
					className=" rounded-full w-24 h-24 m-2 object-cover"
					src={imgSrc}
					alt="img"
				></img>
				<div>
					<p className=" font-bold">{title}</p>
					<p className="text-gray-400 text-xs">{desc}</p>
					<p className=" text-orange-400 font-bold mt-2">
						<span className="">$</span>
						{price}
					</p>
				</div>
			</div>
		</>
	);
};

export default Card;
