import React from "react";
// assets
import thridSectionImg from "../../../assets/third_section/thridSectionImg.svg";
import earth from "../../../assets/third_section/earth.mp4";

function ThirdSection() {
  return (
    <section className="bg-black py-20 text-white overflow-hidden">
      <div className=" text-right text-3xl lg:text-4xl  text-white px-5 mb-20 font-semibold tracking-widest  ">
        OUR SOLUTIONS
      </div>
      <div className="flex h-full border">
        <div className="flex justify-between items-center w-fit sm:w-full  border border-red-500">
          <div className=" border flex-1 md:flex-[0.4] lg:flex-[0.35] xl:flex-[0.3] 2xl:flex-[0.25] 2xl:max-w-[30vw] ">
            <video
              autoPlay
              loop
              muted
              className="scale-150 sm:scale-125 md:scale-100 "
            >
              <source src={earth} type="video/mp4" />
            </video>
          </div>

          <div className=" flex-1 md:flex-[0.6] lg:flex-[0.65] xl:flex-[0.7] 2xl:flex-[0.75] flex flex-col gap-5 items-center   ">
            {/* 1 */}
            <div className="w-full flex items-center z-10 translate-x-[5%] sm:-translate-x-[10%] translate-y-[5%] overflow-hidden">
              <div className="flex items-start w-[30%] sm:w-[50%] ">
                <div className="bg-[#0085FE] aspect-square w-[8px] rounded-full -translate-y-[2.5px]"></div>
                <div className="border-t-[#0085FE] border-t-2 border-dashed flex-1"></div>
              </div>

              <div className="rounded-lg p-2 border-[#0085FE] aspect-square w-full max-w-[75px] sm:max-w-[100px] bg-white"></div>
            </div>

            {/* 2 */}
            <div className="w-full flex items-center z-10 translate-x-[25%] sm:translate-x-[15%] translate-y-[10%] overflow-hidden">
              <div className="flex items-start w-[30%] sm:w-[50%]">
                <div className="bg-[#0085FE] aspect-square w-[8px] rounded-full -translate-y-[2.5px]"></div>
                <div className="border-t-[#0085FE] border-t-2 border-dashed flex-1"></div>
              </div>

              <div className="rounded-lg p-2 border-[#0085FE] aspect-square w-full max-w-[75px] sm:max-w-[100px] bg-white"></div>
            </div>
            {/* 3 */}
            <div className="w-full flex items-center z-10 translate-x-[30%] sm:translate-x-[15%] translate-y-[15%] overflow-hidden">
              <div className="flex items-start w-[10%] sm:w-[30%] ">
                <div className="bg-[#0085FE] aspect-square w-[8px] rounded-full -translate-y-[2.5px]"></div>
                <div className="border-t-[#0085FE] border-t-2 border-dashed flex-1"></div>
              </div>

              <div className="rounded-lg p-2 border-[#0085FE] aspect-square w-full max-w-[75px] sm:max-w-[100px]  bg-white"></div>
            </div>
            {/* 4 */}
            <div className="w-full flex items-center z-10  translate-y-[20%] translate-x-[30%] sm:translate-x-[10%] overflow-hidden">
              <div className="flex items-start w-[30%] sm:w-[50%]  ">
                <div className="bg-[#0085FE] aspect-square w-[8px] rounded-full -translate-y-[2.5px]"></div>
                <div className="border-t-[#0085FE] border-t-2 border-dashed flex-1"></div>
              </div>

              <div className="rounded-lg p-2 border-[#0085FE] aspect-square w-full bg-white max-w-[75px] sm:max-w-[100px] "></div>
            </div>
            {/* 5 */}
            <div className="w-full flex items-center translate-x-[5%] sm:-translate-x-[15%] translate-y-[20%] overflow-hidden">
              <div className="flex items-start w-[20%] sm:w-[50%] ">
                <div className="bg-[#0085FE] aspect-square w-[8px] rounded-full -translate-y-[2.5px]"></div>
                <div className="border-t-[#0085FE] border-t-2 border-dashed flex-1"></div>
              </div>

              <div className="rounded-lg p-2 border-[#0085FE] aspect-square w-full bg-white max-w-[75px] sm:max-w-[100px] "></div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col  w-fit  pr-5 ">
          <h1 className="vertival-rl tracking-[1.2em] text-xl  flex items-end justify-start   flex-1">
            POWERS
          </h1>

          <div className="w-[2px] bg-[#0074E5] flex-1 mx-auto"></div>
        </div>
      </div>

      <h1 className=" text-right text-3xl lg:text-4xl  text-white px-5 mt-20  w-min ml-auto font-semibold tracking-widest z-10">
        MULTILE INDUSTRIES
      </h1>
    </section>
  );
}

export default ThirdSection;
