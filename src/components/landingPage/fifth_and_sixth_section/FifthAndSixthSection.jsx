import React from "react";

// carousel
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

// assets
import mlAi from "../../../assets/forth_section/mlAi.png";
import bigData from "../../../assets/forth_section/BigData.png";
import dcCloud from "../../../assets/forth_section/DC&Cloud.png";

import DataEngineering from "../../../assets/forth_section/DataEngineering.png";
import ArtificialIntel from "../../../assets/forth_section/AI2.svg";
import webDev from "../../../assets/forth_section/webDev.png";
import BusinessIntell from "../../../assets/forth_section/BusinessIntell.png";
import MachineLearning from "../../../assets/forth_section/ML.png";

const FifthAndSixthSection = () => {
  const handleDragStart = (e) => e.preventDefault();

  const responsiveObject = {
    0: {
      items: 2,
    },

    768: {
      items: 3,
    },
    1024: {
      items: 4,
    },
  };

  const solutionsData = [
    {
      name: "AI & ML",
      image: mlAi,
      content: "ML Models, BI, Solutions for Marketing, Risk, Ops",
    },

    {
      name: "Big Data",
      image: bigData,
      content: "ETL/ EDW/ MDM/ AI/ ML/ BI /Reporting, NLP",
    },
    {
      name: "DC & Cloud",
      image: dcCloud,
      content: "CLoud, AWS, Azure, G-Cloud, On-Prem DC/DR",
    },

    {
      name: "Big Data",
      image: bigData,
      content: "ETL/ EDW/ MDM/ AI/ ML/ BI /Reporting, NLP",
    },
  ];

  const solutions = solutionsData?.map((data, index) => {
    return (
      <div
        key={index}
        className="bg-white rounded-lg overflow-hidden text-black text-center font-gillSans mx-1 sm:mx-5 md:mx-10"
      >
        <img src={data?.image} alt="..." className="w-full " />
        <div className="-mt-5 md:-mt-10 xl:-mt-12">
          <h1 className="font-semibold text-lg md:text-xl xl:text-2xl">
            {data?.name}
          </h1>
          <p className="text-gray-500 text-xs md:text-sm xl:text-md w-[80%] xl:w-[60%] mx-auto mt-2 pb-4 md:pb-6 xl:pb-8">
            {data?.content}
          </p>
        </div>
      </div>
    );
  });

  const capabilitiesData = [
    {
      name: "Data Engineering",
      image: DataEngineering,
    },
    {
      name: "Artificial Intelligence",
      image: ArtificialIntel,
    },
    {
      name: "Web/App Development",
      image: webDev,
    },
    {
      name: "Business Intelligence",
      image: BusinessIntell,
    },
    {
      name: "Machine Learning",
      image: MachineLearning,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black to-[#030c30]">
      <section className="bg-[url('../src/assets/forth_section/section_bg.svg')] bg-center  bg-cover  w-full min-h-screen flex justify-center items-center">
        <div className="w-full mx-auto text-whit pt-10 text-white">
          <h1 className=" text-3xl sm:text-4xl md:text-5xl md:w-[80%] mx-auto text-center tracking-widest font-thin">
            We help you <span className="text-[#2AF6FF]">Bridge</span> the gap
            through
          </h1>

          <p className="tracking-wider text-sm sm:text-base w-[80%] sm:w-[70%] md:w-[60%] mx-auto font-gillSans text-gray-400 text-center mt-5">
            We’re bringing together the right data, services, and technology to
            help you grow towards your business goals.
          </p>

          <div className="py-20">
            <AliceCarousel
              mouseTracking
              autoPlay={false}
              autoPlayInterval={2000}
              infinite={true}
              items={solutions}
              disableButtonsControls
              disableDotsControls
              responsive={responsiveObject}
            />
          </div>
        </div>
      </section>

      <section className=" py-20 pb-32">
        <div className="flex flex-row md:flex-col gap-1  w-[95%] mx-auto  ">
          <div className="flex-1 max-w-[200px] flex-col md:flex-row flex  md:max-w-none  gap-5 lg:gap-10  ">
            {capabilitiesData?.map((data, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#061137]  w-fit p-5 md:py-5 md:px-0 lg:p-5  rounded-3xl border-[#0074E5] border border-opacity-50 aspect-square flex justify-between items-center flex-col "
                >
                  <h1 className="text-white font-semibold text-sm sm:text-base md:text-sm lg:text-lg xl:text-xl xl:w-[80%] xl:mx-auto  tracking-[0.2em] text-center  mb-2 lg:mb-5 ">
                    {data?.name}
                  </h1>
                  {/* <div className="aspect-square w-[70%] md:w-[50%] lg:w-[70%] mx-auto">
                    <img src={data?.image} alt={data?.name} />
                  </div> */}

                  <div className=" w-full   mx-auto">
                    <img
                      src={data?.image}
                      alt={data?.name}
                      className=" mx-auto"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* mobile  dashed boders */}
          <div className="flex-1 flex   justify-center items-center md:hidden  ">
            <div className="   h-[80%] w-[80%]  flex flex-col  justify-between items-start">
              <div className="flex w-full   items-start ">
                <div className="bg-[#0085FE] aspect-square w-[8px] rounded-full -translate-y-[2.5px]"></div>
                <div className="border-t-[#0085FE] border-t-2 border-dashed flex-1"></div>
              </div>

              <div className="flex w-[80%]   items-start">
                <div className="bg-[#0085FE] aspect-square w-[8px] rounded-full -translate-y-[2.5px]"></div>
                <div className="border-t-[#0085FE] border-t-2 border-dashed flex-1"></div>
              </div>

              <div className="flex w-[80%]   items-start">
                <div className="bg-[#0085FE] aspect-square w-[8px] rounded-full -translate-y-[2.5px]"></div>
                <div className="border-t-[#0085FE] border-t-2 border-dashed flex-1"></div>
              </div>

              <div className="flex w-[80%]   items-start">
                <div className="bg-[#0085FE] aspect-square w-[8px] rounded-full -translate-y-[2.5px]"></div>
                <div className="border-t-[#0085FE] border-t-2 border-dashed flex-1"></div>
              </div>

              <div className="flex w-[100%]   items-end">
                <div className="bg-[#0085FE] aspect-square w-[8px] rounded-full translate-y-[2.5px]"></div>
                <div className="border-t-[#0085FE] border-t-2 border-dashed flex-1"></div>
              </div>
            </div>

            <div className="h-[80%] w-[20%]   flex flex-col justify-between items-start">
              <div className="h-full border-transparent border-l-[#0085FE] border-l-2 border-dashed"></div>
              <div className="text-white text-3xl w-max h-full  flex justify-center items-center  ">
                <h1 className=" vertival-rl mx-auto text-center  w-full h-max my-auto -translate-x-5 font-semibold tracking-widest">
                  Our Capabilities
                </h1>
              </div>
              <div className="h-full border-transparent border-l-[#0085FE] border-l-2 border-dashed"></div>
            </div>
          </div>

          {/* dashed borders after mobile */}
          <div className="w-full hidden md:block ">
            <div className="w-[80%]  mx-auto ">
              <div className="flex justify-between h-[150px] lg:h-[200px] xl:h-[250px]">
                <div className="flex flex-col justify-center items-center gap-1 h-[150px] lg:h-[200px]  xl:h-[250px]">
                  <div className="w-[5px] aspect-square rounded-full bg-[#0085FE] "></div>
                  <div className="border-[#0085FE] border-l-2 border-dashed h-full"></div>
                </div>

                <div className="flex flex-col justify-start items-center gap-1 h-[150px] lg:h-[200px]  xl:h-[250px]">
                  <div className="w-[5px] aspect-square rounded-full bg-[#0085FE] "></div>
                  <div className="border-[#0085FE] border-l-2 border-dashed h-[70%]"></div>
                </div>

                <div className="flex flex-col justify-start items-center gap-1 h-[150px] lg:h-[200px]  xl:h-[250px]">
                  <div className="w-[5px] aspect-square rounded-full bg-[#0085FE] "></div>
                  <div className="border-[#0085FE] border-l-2 border-dashed h-[70%]"></div>
                </div>

                <div className="flex flex-col justify-start items-center gap-1 h-[150px] lg:h-[200px]  xl:h-[250px]">
                  <div className="w-[5px] aspect-square rounded-full bg-[#0085FE] "></div>
                  <div className="border-[#0085FE] border-l-2 border-dashed h-[70%]"></div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1 h-[150px] lg:h-[200px]  xl:h-[250px]">
                  <div className="w-[5px] aspect-square rounded-full bg-[#0085FE] "></div>
                  <div className="border-[#0085FE] border-l-2 border-dashed h-full"></div>
                </div>
              </div>
            </div>

            <div className=" w-[79.5%] mx-auto flex justify-between items-start">
              <div className="border-dashed border-t-2 border-[#0085FE] flex-1"></div>
              <div className="text-3xl lg:text-4xl  text-white px-5  -translate-y-5 font-semibold tracking-widest">
                Our Capabilities
              </div>
              <div className="border-dashed border-t-2 border-[#0085FE] flex-1"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FifthAndSixthSection;
