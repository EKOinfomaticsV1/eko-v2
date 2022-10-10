import React from "react";
// assets
import mlAi from "../../../assets/forth_section/mlAi.png";
import bigData from "../../../assets/forth_section/BigData.png";
import dcCloud from "../../../assets/forth_section/DC&Cloud.png";

const FifthAndSixthSection = () => {
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

  return (
    <div className="bg-gradient-to-b from-black to-[#030c30]">
      <section className="bg-[url('../src/assets/forth_section/section_bg.svg')] bg-center  bg-cover  w-full min-h-screen flex justify-center items-center">
        <div className="w-[85%] mx-auto text-whit pt-10 text-white">
          <h1 className=" text-3xl sm:text-4xl md:text-5xl md:w-[80%] mx-auto text-center tracking-widest font-thin">
            We help you <span className="text-[#2AF6FF]">Bridge</span> the gap
            through
          </h1>

          <p className="tracking-wider text-sm sm:text-base w-[80%] sm:w-[70%] md:w-[60%] mx-auto font-gillSans text-gray-400 text-center mt-5">
            We’re bringing together the right data, services, and technology to
            help you grow towards your business goals.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
            {solutionsData?.map((data, index) => {
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden text-black text-center font-gillSans"
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
            })}
          </div>
        </div>
      </section>

      <section className="bg-transparent h-screen w-full"></section>
    </div>
  );
};

export default FifthAndSixthSection;
