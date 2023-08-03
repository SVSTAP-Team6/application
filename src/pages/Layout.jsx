import React, { useState } from "react";
import { BsBatteryFull, BsBarChartFill } from "react-icons/bs";
import { AiOutlineWifi } from "react-icons/ai";
import { Navbar } from "../components";
import {Basepage} from "../pages";

const SystemBar = () => {
    let today = new Date();
    return (
        <div className="flex justify-between h-10 p-1">
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
}
const Layout = () => {
    return (
        <div className="flex justify-center bg-gray-300 h-screen w-screen">
            <div className="flex flex-col w-425 h-725 border-4 my-auto bg-white border-black rounded-2xl p-3 p-t-2">
                <SystemBar />
                <div className="flex flex-1 border-1 flex-col">
                    <Basepage />
                </div>
                <Navbar />
            </div>
        </div>
    );
}

export default Layout;