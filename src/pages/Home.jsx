import React, { useState } from "react";
import { BiMap } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";

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

                <div className="rounded-lg border-2 h-10 w-full mt-4">
                    <div className="flex justify">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;