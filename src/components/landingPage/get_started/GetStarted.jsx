import React from "react";

import Hamburger from "../../global/header/Hamburger";
import Header from "../../global/header/Header";
import Overlay from "../../global/overlay/Overlay";
import Sidebar from "../../global/sidebar/Sidebar";

const GetStarted = () => {
  return (
    <div className="bg-black">
      <div className="cursor-default font-akrobatRegular">
        <div className="h-[20px] w-full bg-red-500"></div>

        <Overlay />
        <Sidebar />
        <Hamburger />
        <Header />
        <div className="pt-20"></div>

        <div className="text-white h-[90vh] pt-6">
          <div className="flex flex-col justify-center items-center my-5 md:my-0 md:translate-y-[50%]">
            <div className="w-[65%] text-center">
              <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl font-semibold font-akrobatRegular">
                we work to provide your solution
              </h1>
              <h1 className="font-gillSans text-sm md:text-lg mx-[1rem] sm:mx-[3rem]  text-center flex justify-center items-center mt-8">
                Finding Your Critical Business Priorities should be Simple.
              </h1>
            </div>
            <div className="w-[80%] ">
              <p className="font-gillSans text-sm md:text-lg text-justify flex justify-center items-center mt-8">
                We're here to help you make business decisions that are valuable
                and validated by data. Book an exclusive 30-minute meeting with
                our experts to understand what your immediate and top business
                priorities should be.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
