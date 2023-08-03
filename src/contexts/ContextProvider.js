import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
export const ContextProvider = ({ children }) => {
	const [riseup, setRiseup] = useState(false);

	return (
		<StateContext.Provider
			value={{
				riseup: riseup,
				setRiseup: setRiseup,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
