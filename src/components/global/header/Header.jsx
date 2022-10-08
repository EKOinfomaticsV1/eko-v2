import React, { useEffect, useState } from "react";

// assets
import eko_logo from "../../../assets/header/eko_logo.svg";

// State management (recoil js)
import { useRecoilState } from "recoil";
import { Nav_links_atom } from "../../../recoil/helper/nav_links/Nav_links_atom";

const Header = () => {
  // global variables
  const [linksData] = useRecoilState(Nav_links_atom);

  return (
    <header className="bg-gradient-to-b gradient-tb-black fixed top-0 left-0 right-0 z-40 ">
      <div className="flex justify-between  py-10 w-[90%] mx-auto">
        <div>
          <img
            src={eko_logo}
            alt="eko infomatics logo"
            className="w-[80px]  "
          />
        </div>

        <div className="text-white justify-between  hidden md:flex">
          {linksData?.map((data, index) => {
            return (
              <div key={index} className="group cursor-pointer">
                <h1
                  className={` ${
                    index === 0
                      ? "pr-6"
                      : index === 3
                      ? "pl-6"
                      : "px-6 lg:px-8 xl:px-10"
                  }    pb-2 text-xl lg:text-2xl `}
                >
                  {data?.name}
                </h1>
                <div className="flex items-center ">
                  <div
                    className={` ${
                      index === 0 ? "invisible" : ""
                    } h-[1px] w-full bg-[#0074E5] rounded-full opacity-[33%]`}
                  ></div>
                  <div className="h-[3.5px] lg:h-[5px] aspect-square rounded-full  bg-[#29E5FF] opacity-[33%] group-hover:opacity-100 transition-all"></div>
                  <div
                    className={` ${
                      index === 3 ? "invisible" : ""
                    } h-[1px] w-full bg-[#0074E5] rounded-full opacity-[33%]`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
