import React, { useEffect, useState } from "react";
import { BsBatteryFull, BsBarChartFill } from "react-icons/bs";
import { AiOutlineWifi } from "react-icons/ai";
import { Navbar } from "../components";
import { Basepage } from "../pages";
import { AnimatePresence, motion } from "framer-motion";

import { useStateContext } from "../contexts/ContextProvider";

const SystemBar = ({ ...props }) => {
	let today = new Date();
	return (
		<div className="flex justify-between h-10 p-1" {...props}>
			<div>
				{today.getHours()}:{today.getMinutes()}
			</div>

			<div className="flex gap-2">
				<BsBarChartFill />
				<AiOutlineWifi />
				<BsBatteryFull />
			</div>
		</div>
	);
};
const Layout = () => {
	const { riseup, setRiseup } = useStateContext();

	return (
		<div className="flex justify-center bg-gray-300 h-screen w-screen">
			<div className="flex flex-col w-425 h-725 border-4 my-auto bg-gray-100 border-black rounded-2xl p-3 p-t-2">
				<SystemBar onClick={() => setRiseup(false)} />
				<div className="flex flex-1 border-1 flex-col p-4 overflow-y-scroll">
					<Basepage />
				</div>
				<Navbar />
				<AnimatePresence>
					{riseup && (
						<motion.div
							initial={{ opacity: 0.5, y: 300 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 300 }}
							className="absolute w-[394px] h-[80vh] bg-black my-[10vh] rounded-tl-2xl rounded-tr-2xl"
						>
							riesup
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};
  

export default Layout;
