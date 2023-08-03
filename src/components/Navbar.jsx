import React, { useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { AiFillHome, AiOutlineUser, AiOutlineSetting} from "react-icons/ai";
import { styled } from "styled-components";

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between p-4">
                <AiOutlineSetting size={28}/>
                <AiFillHome size={28}/>
                <AiOutlineUser size={28}/>
            </div>
        </>
    );
};

export default Navbar;
