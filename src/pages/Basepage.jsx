import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import { Home } from ".";
import { Order } from ".";

const BasePage = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/home" />} />
			{/* <Route path="/" element={<Dashboard />} /> */}

			<Route path="/home" element={<Home />} />
			<Route path="/order" element={<Order />} />

			<Route path="*" element={<Navigate to="/dashboard" />} />
		</Routes>
	);
};

export default BasePage;
