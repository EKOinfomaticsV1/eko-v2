import React, { useEffect, useState } from "react";
//media assets
import hero_image from "../assets/landingPage/hero_image.gif";
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
        <div className="absolute top-0 bottom-0 right-0 left-0 p-5  flex justify-center items-end  font-gillSans text-[#9D9D9D] font-normal text-sm md:text-lg tracking-[1px] leading-[30px] z-[10] ">
          <p>
            We are a firm specialized in
            <span className="font-semibold text-white text-base md:text-xl">
              {" "}
              Machine Learning
            </span>
            ,{" "}
            <span className="font-semibold text-white text-base md:text-xl">
              AI
            </span>{" "}
            and{" "}
            <span className="font-semibold text-white text-base md:text-xl">
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
          <div className="flex items-end gap-2 w-full">
            <div className="w-full ">
              <h1 className="text-white font-semibold text-base md:text-xl">
                5 +
              </h1>
              <h2 className="text-sm md:text-lg  mt-2 ">
                Propietary solutions
              </h2>
            </div>
            <div className="w-full">
              <h1 className="text-white font-semibold   text-base md:text-xl">
                BIG DATA, ML, AI, RPA, FINTECH
              </h1>
              <h2 className="text-sm md:text-lg  mt-2 ">
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
              <h1 className="text-white font-semibold  text-base md:text-xl">
                1000 +
              </h1>
              <h2 className="text-sm md:text-lg  mt-2">Projects</h2>
            </div>
            <div className="w-full">
              <h1 className="text-white font-semibold   text-base md:text-xl">
                $ 5 BN+
              </h1>
              <h2 className="text-sm md:text-lg  mt-2">
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
    <div className=" bg-black text-white">
      {/* Hero texts */}
      <div className="w-[90%] mx-auto  md:ml-auto md:mx-0 pt-20 sm:pt-32">
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

      <div className="w-[90%] mx-auto md:ml-auto md:mx-0 sm:flex justify-between items-center  ">
        <div className="sm:w-[100%] md:w-[40%] sm:pt-10">
          {/* hero image */}
          <div className=" sm:hidden aspect-square rounded-full overflow-hidden flex justify-center items-center   relative scale-[-1] w-[60%]  max-w-[70vw] mx-auto     ">
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
                <div className="border-l border-b border-l-blue-500 border-b-blue-500 h-full w-[20%]"></div>
                <div className="border-b border-b-blue-500 h-full w-[80%]"></div>
              </div>
            </div>

            <div className="   h-[250px]  ">
              <div className="flex items-start h-full  ">
                <div className="w-full pt-12  ">
                  {hero_accordian?.map((data, index) => {
                    return (
                      <h1
                        onClick={() => setActiveAccordian(index)}
                        className={` ${
                          activeAccordian === index
                            ? "font-semibold"
                            : "font-normal text-[#9D9D9D]"
                        }  font-akrobatRegular  pb-3 mb-5  text-base md:text-xl cursor-pointer transition-all relative `}
                        key={index}
                      >
                        {data?.question}

                        <div
                          className={`bg-blue-500 h-[1px] max-w-[500px] absolute bottom-0 right-[60px] transition-all duration-700  ${
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
                      ? "h-[24%] "
                      : activeAccordian === 1
                      ? "h-[45%]"
                      : "h-[70%]"
                  } transition-all duration-700   w-fit flex items-end`}
                >
                  <div className="w-[5px] h-[5px] translate-y-[2px] rounded-full bg-blue-500"></div>
                </div>

                <div
                  className={` ${
                    activeAccordian === 0
                      ? "h-[24%] "
                      : activeAccordian === 1
                      ? "h-[45%]"
                      : "h-[70%]"
                  } transition-all duration-700 w-full border-b border-r border-b-blue-500 border-r-blue-500`}
                ></div>
                <div
                  style={{
                    height:
                      activeAccordian === 0
                        ? "32%"
                        : activeAccordian === 1
                        ? "50%"
                        : "70%",
                  }}
                  className=" transition-all w-[40%]"
                ></div>
              </div>
            </div>

            <div className="py-2"></div>
          </div>
        </div>

        {/* hero image after sm*/}
        <div className="w-[100%] md:w-[60%] -mt-5 md:-mt-10 lg:-mt-20 hidden sm:block self-start  rounded-full">
          <div className=" aspect-square rounded-full overflow-hidden flex justify-center items-center   relative scale-[-1] w-[100%] sm:w-[90%] md:w-[70%] lg:w-[65%]  max-w-[70vw] mx-auto sm:max-w-[60vw]   md:max-w-[50vw]  ">
            <img
              src={hero_image}
              alt="..."
              className=" scale-[200%] md:scale-[150%]   "
            />
            <div className="h-full w-full  absolute top-0 rounded-full boxshadow-blur md:boxshadow-blur-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
