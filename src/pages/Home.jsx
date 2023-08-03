import React, { useState } from "react";
import { BiMap } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { AiOutlineSearch, AiOutlineControl, AiOutlineDollarCircle } from "react-icons/ai";
import strawberry from "../images/strawberry.png";
import misu from "../images/misu.png";
import pineapple from "../images/pineapple.png";

const Home = () => {
    return (
        <div className="flex flex-col itmes-stretch">

            {/* 위치 */}
            <div className="flex justify-between">
                <div className="flex gap-2 text-slate-400	">
                    <BiMap size={24} />
                    <span>
                        San Jose State University
                    </span>
                </div>
                <div>
                    <FiMenu size={24} />
                </div>
            </div>

            {/* 검색창 */}
            <div className="flex flex-col items-center mt-4">
                <p className="text-xl">
                    Choose the best powder for you
                </p>

                <div className="rounded-2xl border-2 w-full mt-4 p-1">
                    <div className="flex justify-between h-full items-stretch p-2">
                        <div className="flex justify-center items-center gap-4 text-slate-400 text-lg">
                            <AiOutlineSearch />
                            <span>Search</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <AiOutlineControl size={28} />
                        </div>
                    </div>
                </div>

                {/* AI 추천 */}
                <div className="rounded-2xl w-full mt-6 p-4 bg-gray-900 flex">
                    {/* 글자 */}
                    <div className="flex flex-col p-2 mt-4 ">
                        <span className="text-sm text-slate-400">
                            AI recommendation for you
                        </span>
                        <span className="text-lg mt-2 text-white">
                            Strawberry flavored <br />
                            grain powder
                        </span>
                        <span className="text-orange-600 mt-4 text-2xl flex">
                            <div className="flex items-center mr-2">
                                <AiOutlineDollarCircle />
                            </div>
                            <span>
                                10.04
                            </span>
                        </span>
                    </div>
                    {/* 사진 */}
                    <div className="flex justify-center items-center ml-2">
                        <img src={strawberry} className="rounded-full border-4 w-28 h-28" />
                    </div>
                </div>

                {/* 구독 */}
                <div className="flex flex-col justify-center mt-4 w-full">
                    <div className="text-lg font-bold justify-center flex p-2">
                        My Subscription
                    </div>
                    <div className="flex flex-nowrap max-w-full overflow-x-auto gap-6">
                        {/* item 1 */}
                        <div className="flex rounded-2xl bg-stone-200 w-full min-w-full mt-3 p-6 justify-center items-center">
                            <div className="flex justify-evenly gap-8 w-full items-center">
                                <div>
                                    <img src={misu} className="w-28 h-28 rounded-full" />
                                </div>
                                <div className="flex justify-center items-center flex-col mr-4 gap-1">
                                    <div className="text-lg font-bold">Plain Powder</div>

                                    <div className="text-sm">every Monday</div>
                                    <div className="text-xs">5 / week</div>
                                    <div className="text-sm font-bold">07.06.23 ~ 08.05.23</div>
                                    <div className="text-orange-600 text-xs flex">
                                        <div className="flex items-center mr-1">
                                            <AiOutlineDollarCircle />
                                        </div>
                                        <span >
                                            32.18
                                        </span>
                                        <span className="text-black">
                                            &nbsp;/ month
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* item 2 */}
                        <div className="flex rounded-2xl bg-stone-200 w-full min-w-full mt-3 p-6 justify-center items-center">
                            <div className="flex justify-evenly gap-8 w-full items-center">
                                <div>
                                    <img src={pineapple} className="w-28 h-28 rounded-full" />
                                </div>
                                <div className="flex justify-center items-center flex-col mr-4 gap-1">
                                    <div className="font-bold">Pineapple Powder</div>

                                    <div className="text-sm">every Monday</div>
                                    <div className="text-xs">3 / week</div>
                                    <div className="text-sm font-bold">07.06.23 ~ 08.05.23</div>
                                    <div className="text-orange-600 text-xs flex">
                                        <div className="flex items-center mr-1">
                                            <AiOutlineDollarCircle />
                                        </div>
                                        <span >
                                            32.18
                                        </span>
                                        <span className="text-black">
                                            &nbsp;/ month
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Home;