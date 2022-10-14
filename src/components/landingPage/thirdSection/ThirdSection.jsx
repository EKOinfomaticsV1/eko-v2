import React from "react";
// assets
import thridSectionImg from "../../../assets/third_section/thridSectionImg.svg";
import earth from "../../../assets/third_section/earth.mp4";
import retail from "../../../assets/third_section/retail.png";
import Retail from "../../../assets/third_section/Retail.png";
import Defence from "../../../assets/third_section/Defence.png";
import Manufacture from "../../../assets/third_section/Manufacture.png";
import Banking from "../../../assets/third_section/Banking.png";
import Healthcare from "../../../assets/third_section/Healthcare.png";
function ThirdSection() {
  return (
    <section className="bg-black py-20 text-white overflow-hidden">
      <div className=" text-right text-3xl lg:text-4xl  text-white px-5 mb-20 font-semibold tracking-widest  ">
        OUR SOLUTIONS
      </div>
      <div className="flex h-full border">
        <div className="flex justify-between items-center w-fit sm:w-full  border border-red-500">
          <div className="  flex-1 md:flex-[0.4] lg:flex-[0.35] xl:flex-[0.3] 2xl:flex-[0.25] 2xl:max-w-[30vw] ">
            <video
              autoPlay
              loop
              muted
              className="scale-150 sm:scale-125 md:scale-125 lg:scale-125 ml-[-5rem] md:ml-0 relative"
            >
              <source src={earth} type="video/mp4" />
            </video>
            <div className=" py-2 text-white absolute md:py-10 right-0 left-0 w-[50%] float-right flex items-end justify-center md:mt-[-2rem]">
              <div className="w-[60%] sm:flex-1 lg:flex-[0.5] text-transparent bg-transparent py-[5.8rem] sm:py-[4rem] px-[2.5rem] sm:px-[2rem] md:px-[2rem] md:py-20 ">
                sdfsdfs
              </div>
              <div className="w-[40%] lg:flex-1 bg-black h-full  mt-2 py-[5.2rem] sm:py-20 px-20 md:py-20  sm:px-[6rem] md:px-[2rem]  "></div>
            </div>
          </div>

          <div className=" flex-1 md:flex-[0.6] lg:flex-[0.65] xl:flex-[0.7] 2xl:flex-[0.75] flex flex-col gap-5 items-center   ml-[-5rem] md:ml-[-2rem] lg:ml-[3rem] xl:ml-[4rem] 2xl:ml-[1rem]">
            {/* 1 */}
            {/* <div className="w-full flex items-center z-10 translate-x-[5%] sm:-translate-x-[10%] translate-y-[5%] overflow-hidden">
              <div className="flex items-start w-[30%] sm:w-[50%] md:w-[40%] lg:w-[22%] xl:w-[18%]">
                <div className="bg-[#0085FE] aspect-square w-[8px] rounded-full -translate-y-[2.5px]"></div>
                <div className="border-t-[#0085FE] border-t-2 border-dashed flex-1"></div>
              </div>

              <div className="rounded-lg p-2 border-[#0085FE] aspect-square w-[65%]  max-w-[75px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[130px] xl:max-w-[150px] bg-white"></div>
            </div> */}
            <div className="w-full flex items-center z-10 translate-x-[5%] sm:-translate-x-[10%] translate-y-[10%] sm:translate-y-[10%] md:-translate-x-[5%] lg:-translate-x-[20%] xl:-translate-x-[18%] 2xl:-translate-x-[5%]  lg:translate-y-[40%] xl:translate-y-[40%] 2xl:translate-y-[40%]   overflow-hidden">
              <div className="flex items-start w-[28%] sm:w-[50%] md:w-[40%] lg:w-[22%] xl:w-[18%]">
                <div className="bg-[#0085FE] aspect-square w-[8px] rounded-full -translate-y-[2.5px]"></div>
                <div className="border-t-[#0085FE] border-t-2 border-dashed flex-1"></div>
              </div>

              <div className="rounded-lg p-2 aspect-square w-[65%] max-w-[75px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[130px]  xl:max-w-[150px] bg-[#061137] border-[#0074E5] border border-opacity-50">
                <h1 className="text-white font-semibold text-sm sm:text-base md:text-sm lg:text-lg xl:text-xl xl:w-[80%] xl:mx-auto  tracking-[0.2em] text-center  mb-2 lg:mb-5 ">
                  RETAIL
                </h1>
                <div className="aspect-square  mx-auto">
                  <img src={Retail} alt="retail" />
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="w-full flex items-center z-10 translate-x-[25%] sm:translate-x-[15%] md:translate-x-[10%] lg:translate-x-[5%] translate-y-[10%] lg:translate-y-[12%] xl:translate-y-[10%] overflow-hidden">
              <div className="flex items-start w-[28%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%]">
                <div className="bg-[#0085FE] aspect-square w-[8px] rounded-full -translate-y-[2.5px]"></div>
                <div className="border-t-[#0085FE] border-t-2 border-dashed flex-1"></div>
              </div>

              <div className="rounded-lg p-2 aspect-square w-[65%] max-w-[75px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[130px]  xl:max-w-[150px] bg-[#061137] border-[#0074E5] border border-opacity-50">
                <h1 className="text-white font-semibold text-[12px] sm:text-base md:text-sm lg:text-lg xl:text-xl xl:w-[80%] xl:mx-auto  tracking-[0.2em] text-center  mb-2 lg:mb-5 ">
                  MANUFACTURE
                </h1>
                <div className="aspect-square  mx-auto">
                  <img src={Manufacture} alt="telecom" />
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="w-full flex items-center z-10 translate-x-[30%] sm:translate-x-[15%] md:translate-x-[16%] lg:translate-x-[5%]  translate-y-[15%] overflow-hidden">
              <div className="flex items-start w-[10%] sm:w-[30%] md:w-[10%] lg:w-[20%] xl:w-[10%]">
                <div className="bg-[#0085FE] aspect-square w-[8px] rounded-full -translate-y-[2.5px]"></div>
                <div className="border-t-[#0085FE] border-t-2 border-dashed flex-1"></div>
              </div>

              <div className="rounded-lg p-2 aspect-square w-[65%] max-w-[75px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[130px]  xl:max-w-[150px] bg-[#061137] border-[#0074E5] border border-opacity-50">
                <h1 className="text-white font-semibold text-sm sm:text-base md:text-sm lg:text-lg xl:text-xl xl:w-[80%] xl:mx-auto  tracking-[0.2em] text-center  mb-2 lg:mb-5 ">
                  HEALTHCARE
                </h1>
                <div className="aspect-square  mx-auto">
                  <img src={Healthcare} alt="Healthcare" />
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="w-full flex items-center z-10  translate-y-[20%] translate-x-[25%] md:translate-x-[16%] lg:translate-x-[5%]  sm:translate-x-[15%] overflow-hidden">
              <div className="flex items-start w-[28%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%]">
                <div className="bg-[#0085FE] aspect-square w-[8px] rounded-full -translate-y-[2.5px]"></div>
                <div className="border-t-[#0085FE] border-t-2 border-dashed flex-1"></div>
              </div>

              <div className="rounded-lg p-2 aspect-square w-[65%] max-w-[75px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[130px]  xl:max-w-[150px] bg-[#061137] border-[#0074E5] border border-opacity-50">
                <h1 className="text-white font-semibold text-sm sm:text-base md:text-sm lg:text-lg xl:text-xl xl:w-[80%] xl:mx-auto  tracking-[0.2em] text-center  mb-2 lg:mb-5 ">
                  DEFENCE
                </h1>
                <div className="aspect-square  mx-auto">
                  <img src={Defence} alt="Defence" />
                </div>
              </div>
            </div>
            {/* 5 */}
            {/* <div className="w-full flex items-center translate-x-[5%] sm:-translate-x-[10%]  translate-y-[20%] overflow-hidden">
              <div className="flex items-start w-[20%] sm:w-[50%] ">
                <div className="bg-[#0085FE] aspect-square w-[8px] rounded-full -translate-y-[2.5px]"></div>
                <div className="border-t-[#0085FE] border-t-2 border-dashed flex-1"></div>
              </div>

              <div className="rounded-lg p-2 border-[#0085FE] aspect-square w-[65%] bg-white max-w-[75px] sm:max-w-[100px] "></div>
            </div> */}
            <div className="w-full flex items-center z-10 translate-x-[5%] sm:-translate-x-[10%] translate-y-[20%] lg:-translate-x-[17%] xl:-translate-x-[8%]   lg:-translate-y-[24%]   overflow-hidden">
              <div className="flex items-start w-[28%] sm:w-[50%] md:w-[40%] lg:w-[22%] xl:w-[18%]">
                <div className="bg-[#0085FE] aspect-square w-[8px] rounded-full -translate-y-[2.5px]"></div>
                <div className="border-t-[#0085FE] border-t-2 border-dashed flex-1"></div>
              </div>

              <div className="rounded-lg p-2 aspect-square w-[65%] max-w-[75px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[130px]  xl:max-w-[150px] bg-[#061137] border-[#0074E5] border border-opacity-50">
                <h1 className="text-white font-semibold text-sm sm:text-base md:text-sm lg:text-lg xl:text-xl xl:w-[80%] xl:mx-auto  tracking-[0.2em] text-center  mb-2 lg:mb-5 ">
                  BANKING
                </h1>
                <div className="aspect-square  mx-auto">
                  <img src={Banking} alt="retail" />
                </div>
              </div>
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
