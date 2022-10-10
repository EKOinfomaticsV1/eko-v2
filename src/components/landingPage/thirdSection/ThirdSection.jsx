import React from "react";
// assets
import thridSectionImg from "../../../assets/third_section/thridSectionImg.svg";

function ThirdSection() {
  return (
    <section className="bg-black py-20 tracking-widest leading-relaxed">
      <div className="w-[95%] ml-auto flex justify-between items-end sm:items-center ">
        <div className="text-white flex-1 sm:flex-[0.6]">
          <h1 className="text-xl sm:text-2xl md:text-4xl xl:text-5xl">
            <span className="text-[#0085FE] font-extrabold text-5xl sm:text-7xl md:text-8xl xl:text-9xl">
              ONE
            </span>
            <span> Source</span>
          </h1>
          <h1 className="text-2xl md:text-4xl xl:text-5xl  text-white hidden sm:block">
            <span className="bg-gradient-to-r from-[#0085FE] to-[#29E5FF] text-5xl sm:text-7xl  md:text-8xl xl:text-9xl font-extrabold bg-clip-text text-transparent">
              ENDLESS
            </span>
            <span> Solutions</span>
          </h1>
        </div>
        <div className="flex-1 sm:flex-[0.4]">
          <img src={thridSectionImg} alt="..." className="ml-auto" />
        </div>
      </div>
      <h1 className="text-xl  text-white w-[95%] ml-auto sm:hidden">
        <span className="bg-gradient-to-r from-[#0085FE] to-[#29E5FF] text-5xl font-extrabold bg-clip-text text-transparent">
          ENDLESS
        </span>
        <span> Solutions</span>
      </h1>
    </section>
  );
}

export default ThirdSection;
