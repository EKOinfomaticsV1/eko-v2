import React, { useEffect, useState } from "react";
//media assets
import hero_image from "../assets/landingPage/hero_image.gif";
import smallScreenArrow from "../assets/landingPage/arrow-tr.svg";
import SecondSection from "../components/landingPage/second_section/SecondSection";
import ThirdSection from "../components/landingPage/thirdSection/ThirdSection";
import FifthAndSixthSection from "../components/landingPage/fifth_and_sixth_section/FifthAndSixthSection";
import SeventhSection from "../components/landingPage/seventh_section/SeventhSection";
import EightSection from "../components/landingPage/eight_section/EightSection";
const LandingPage = () => {
  const [indexNumber, setIndexNumber] = useState(0);
  const [activeAccordian, setActiveAccordian] = useState(0);
  const hero_heading = [
    {
      content: "your marketing",
      color: "#0074E5",
    },
    {
      content: "your product",
      color: "#BF99FF",
    },
    {
      content: "your solution",
      color: "#2AF6FF",
    },
  ];

  const hero_accordian = [
    {
      question: "Who are we?",
      content: (
        <div className="absolute top-0 bottom-0 right-0 left-0 p-5  flex justify-center items-end  font-gillSans text-[#9D9D9D] font-normal text-sm lg:text-lg xl:text-xl 2xl:text-2xl tracking-[1px] leading-[30px] z-[10] ">
          <p className="xl:w-[80%] 2xl:w-[60%] mr-auto">
            We are a firm specialized in
            <span className="font-semibold text-white text-base lg:text-xl xl:text-2xl 2xl:text-3xl">
              {" "}
              Machine Learning
            </span>
            ,{" "}
            <span className="font-semibold text-white text-base lg:text-xl xl:text-2xl 2xl:text-3xl">
              AI
            </span>{" "}
            and{" "}
            <span className="font-semibold text-white text-base lg:text-xl xl:text-2xl 2xl:text-3xl">
              Big Data Analytics
            </span>
            {"  "}
            based solutions.
          </p>
        </div>
      ),
    },

    {
      question: "What we do?",
      content: (
        <div className="absolute top-0 bottom-0 right-0 left-0 p-5  flex justify-center items-end  font-gillSans text-[#9D9D9D] font-normal  tracking-[1px] leading-[30px] z-[10] ">
          <div className="flex items-end gap-2 w-full xl:w-[80%] 2xl:w-[60%] mr-auto">
            <div className="w-full ">
              <h1 className="text-white font-semibold text-base lg:text-xl xl:text-2xl 2xl:text-3xl ">
                5 +
              </h1>
              <h2 className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl  mt-2 ">
                Propietary solutions
              </h2>
            </div>
            <div className="w-full">
              <h1 className="text-white font-semibold   text-base lg:text-xl xl:text-2xl 2xl:text-3xl">
                BIG DATA, ML, AI, RPA, FINTECH
              </h1>
              <h2 className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl  mt-2 ">
                We deliver business value
              </h2>
            </div>
          </div>
        </div>
      ),
    },

    {
      question: "We have delivered ",
      content: (
        <div className="absolute top-0 bottom-0 right-0 left-0 p-5  flex justify-center items-end  font-gillSans text-[#9D9D9D] font-normal  tracking-[1px] leading-[30px] z-[10] ">
          <div className="flex items-end gap-2 w-full">
            <div className="w-full ">
              <h1 className="text-white font-semibold  text-base lg:text-xl xl:text-2xl 2xl:text-3xl">
                1000 +
              </h1>
              <h2 className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl  mt-2">
                Projects
              </h2>
            </div>
            <div className="w-full">
              <h1 className="text-white font-semibold   text-base lg:text-xl xl:text-2xl 2xl:text-3xl">
                $ 5 BN+
              </h1>
              <h2 className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl  mt-2">
                Inc. customer revenue
              </h2>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // infinite loop in text Array
  useEffect(() => {
    const changeText = setInterval(() => {
      if (indexNumber < 2) {
        setIndexNumber(indexNumber + 1);
      } else if (indexNumber === 2) {
        setIndexNumber(0);
      }
    }, 5000);
    return () => {
      clearInterval(changeText);
    };
  });

  return (
    <>
      <div className=" bg-black text-white pb-10">
        {/* Hero texts before sm*/}
        <div className="w-[90%] mx-auto  md:ml-auto md:mx-0 pt-20 sm:pt-32 sm:hidden">
          <h2 className="uppercase tracking-[0.06em] text-center text-sm sm:text-lg sm:text-left">
            eko solutions powers
          </h2>
          <h1
            className="text-4xl sm:text-6xl  mt-3 font-extrabold tracking-[0.06em] text-center  sm:text-left fade-in-out min-h-[80px]   "
            style={{ color: hero_heading[indexNumber]?.color }}
          >
            {hero_heading[indexNumber]?.content}
          </h1>
        </div>

        <div className="w-[90%] mx-auto  sm:flex justify-between  h-full sm:pt-32  ">
          <div className="w-[100%] md:w-[40%] lg:w-[60%]  ">
            {/* Hero texts after sm */}
            <div className=" hidden sm:block w-full mx-auto  md:ml-auto md:mx-0  mb-5 ">
              <h2 className="uppercase tracking-[0.06em] text-center text-sm sm:text-lg sm:text-left md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                eko solutions powers
              </h2>
              <h1
                className="text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] 2xl:text-[6.8rem]  mt-3 font-extrabold tracking-[0.06em] text-center  sm:text-left fade-in-out min-h-[80px] sm:min-h-[120px] lg:min-h-[200px]  xl:min-h-[200px] "
                style={{ color: hero_heading[indexNumber]?.color }}
              >
                {hero_heading[indexNumber]?.content}
              </h1>
            </div>
            {/* hero image */}
            <div className=" sm:hidden  aspect-square rounded-full overflow-hidden flex justify-center items-center   relative scale-[-1] w-[60%]  max-w-[70vw] mx-auto     ">
              <img
                src={hero_image}
                alt="..."
                className=" scale-[200%] md:scale-[150%]  "
              />
              <div className="h-full w-full  absolute top-0 rounded-full boxshadow-blur md:boxshadow-blur-md"></div>
            </div>

            {/* Hero paragraph */}
            <div className="w-[95%] mt-5   mx-auto ">
              <div className=" relative min-h-[110px] ">
                {hero_accordian[activeAccordian].content}

                <div className="absolute left-0 right-0 top-0 bottom-0 flex gap-10">
                  <div className="border-l border-b border-l-[#0074E5] border-b-[#0074E5] h-full w-[20%]"></div>
                  <div className="border-b border-b-[#0074E5] h-full w-[80%]"></div>
                </div>
              </div>

              <div className="   h-[180px] md:h-[200px]  relative ">
                <div className="flex items-start h-full ">
                  <div className="w-full pt-12  lg:pt-20  ">
                    {hero_accordian?.map((data, index) => {
                      return (
                        <h1
                          onClick={() => setActiveAccordian(index)}
                          className={` ${
                            activeAccordian === index
                              ? "font-semibold"
                              : "font-normal text-[#9D9D9D]"
                          }  font-akrobatRegular pb-1  mb-5  text-base lg:text-xl xl:text-2xl cursor-pointer transition-all relative `}
                          key={index}
                        >
                          {data?.question}

                          <div
                            className={`bg-[#0074E5] h-[1px] max-w-[500px] absolute bottom-0 right-[60px] transition-all duration-700  ${
                              activeAccordian != index
                                ? "visible w-[1000px] ease-in"
                                : " invisible w-0"
                            } `}
                          ></div>
                        </h1>
                      );
                    })}
                  </div>

                  <div
                    className={` ${
                      activeAccordian === 0
                        ? "h-[33%] md:h-[30%] lg:h-[48%]  "
                        : activeAccordian === 1
                        ? "h-[60%] md:h-[54%] lg:h-[72%]"
                        : "h-[88%] md:h-[78%] lg:h-[98%]"
                    } transition-all duration-700   w-fit flex items-end`}
                  >
                    <div className="w-[5px] h-[5px] translate-y-[2px] rounded-full bg-[#0074E5]"></div>
                  </div>

                  <div
                    className={` ${
                      activeAccordian === 0
                        ? "h-[33%] md:h-[30%] lg:h-[48%] "
                        : activeAccordian === 1
                        ? "h-[60%] md:h-[54%] lg:h-[72%]"
                        : "h-[88%] md:h-[78%] lg:h-[98%]"
                    } transition-all duration-700 w-full border-b border-r border-b-[#0074E5] border-r-[#0074E5]`}
                  ></div>
                  <div
                    className={` ${
                      activeAccordian === 0
                        ? "h-[33%] md:h-[30%] lg:h-[48%] "
                        : activeAccordian === 1
                        ? "h-[60%] md:h-[54%] lg:h-[72%]"
                        : "h-[88%] md:h-[78%] lg:h-[98%]"
                    }   transition-all w-[40%] `}
                  ></div>
                </div>

                {/* right top arrow before sm */}
                <div>
                  <img
                    src={smallScreenArrow}
                    alt="..."
                    className="absolute bottom-0 right-0 py-2 sm:hidden"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" w-[100%] md:w-[60%] lg:w-[40%]  hidden sm:flex flex-col justify-between items-end relative  ">
            {/* hero image after sm*/}
            <div className="h-[90%]  self-start  ml-auto">
              <div className=" aspect-square rounded-full overflow-hidden flex justify-center items-center   relative scale-[-1] w-[100%] sm:w-[90%] md:w-[80%] lg:w-[95%] max-w-[600px]   mx-auto sm:mx-0 sm:ml-auto    ">
                <img
                  src={hero_image}
                  alt="..."
                  className=" scale-[200%] md:scale-[170%] 2xl:scale-[160%]  "
                />
                <div className="h-full w-full  absolute top-0 rounded-full boxshadow-blur md:boxshadow-blur-md"></div>
              </div>
            </div>

            {/* right top arrow after sm */}
            <div className="h-[10%]  flex justify-end gap-5 lg:gap-10 items-end">
              <div className="group relative cursor-pointer ">
                <h1 className="text-2xl xl:text-3xl 2xl:text-4xl tracking-[0.1em] pb-1">
                  <span>GET</span>{" "}
                  <span className="font-semibold">STARTED</span>
                </h1>

                <div className="bg-[#0074E5] group-hover:bg-gradient-to-r from-[#0085FE] to-[#29E5FF] h-[4px] w-full transition-all duration-300"></div>

                <div className="bg-black h-[4px] w-[50px] absolute bottom-0 right-5 group-hover:translate-x-40 transition-all duration-300"></div>
              </div>
              <img
                src={smallScreenArrow}
                alt="..."
                className=" pb-3 hidden sm:block w-[40px]"
              />
            </div>
          </div>
        </div>

        <div className="py-5"></div>
      </div>

      {/* second section */}
      <SecondSection />
      <ThirdSection />
      <FifthAndSixthSection />
      <SeventhSection />
      <EightSection />
    </>
  );
};

export default LandingPage;
