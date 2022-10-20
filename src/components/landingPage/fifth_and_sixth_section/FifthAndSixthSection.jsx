import React, { useState, useEffect } from "react";

// carousel
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

// assets
import mlAi from "../../../assets/forth_section/mlAi.png";
import bigData from "../../../assets/forth_section/BigData.png";
import dcCloud from "../../../assets/forth_section/DC&Cloud.png";

import DataEngineering from "../../../assets/forth_section/DataEngineering.png";
import ArtificialIntel from "../../../assets/forth_section/AI2.png";
import webDev from "../../../assets/forth_section/webDev.png";
import BusinessIntell from "../../../assets/forth_section/BusinessIntell.png";
import MachineLearning from "../../../assets/forth_section/ML.png";

import ModalFifthSixth from "./Modal/ModalFifthSixth";
import DataEngineer from "../../../assets/fifth_and_sixth/capabilities/DataEngineer.png";
import AI from "../../../assets/fifth_and_sixth/capabilities/AI.png";
import WebDev from "../../../assets/fifth_and_sixth/capabilities/WebDev.png";
import BI from "../../../assets/fifth_and_sixth/capabilities/BI.png";
import ML from "../../../assets/fifth_and_sixth/capabilities/ML.png";
import { Link } from "react-router-dom";

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
      name: "Machine Learning",
      image: dcCloud,
      content: "CLoud, AWS, Azure, G-Cloud, On-Prem DC/DR",
    },

    {
      name: "Analytic Solution",
      image: bigData,
      content: "ETL/ EDW/ MDM/ AI/ ML/ BI /Reporting, NLP",
    },
  ];

  const solutions = solutionsData?.map((data, index) => {
    return (
      <div
        key={index}
        onDragStart={handleDragStart}
        role="presentation"
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

          <div className="h-[10%]  flex justify-center gap-5 lg:gap-10 items-center overflow-hidden pb-10">
            <div className="group relative cursor-pointer ">
              <Link
                className="text-sm md:text-[12px] xl:text-lg tracking-[0.1em] pb-1"
                to={{
                  pathname: "/fifth_sixth_subpage",
                }}
                state={data.name}
              >
                View More
              </Link>
              {/* <h1 className="text-2xl xl:text-3xl 2xl:text-4xl tracking-[0.1em] pb-1">
            <span>GET</span> <span className="font-semibold">STARTED</span>
          </h1> */}

              <div className="bg-[#0074E5] group-hover:bg-gradient-to-r from-[#0085FE] to-[#29E5FF] h-[1px]  lg:h-[2px] w-full transition-all duration-300"></div>

              <div className="bg-[#EAFAFF] h-[1px]  lg:h-[2px] w-[8px] absolute bottom-0 right-3 group-hover:translate-x-40 transition-all duration-300"></div>
            </div>
          </div>
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

  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [image, setImage] = useState();

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  function openModals(m) {
    console.log("Modals to open", m);

    if (m === "Data Engineering") {
      setOpen(true);
      setData({
        title: "Data Engineering",
        para1:
          "The key to understanding what data engineering lies in the “engineering” part. Engineers design and build things. “Data” engineers design and build pipelines that transform and transport data into a format wherein, by the time it reaches the Data Scientists or other end users, it is in a highly usable state. These pipelines must take data from many disparate sources and collect them into a single warehouse that represents the data uniformly as a single source of truth.",
        para2:
          "Sounds simple enough but a lot of data literacy skills goes into this role. This is why Data Engineers are in such short supply and why there is confusion around the role. The figure below is one example of the activities involved in data engineering.",
      });
      setImage(DataEngineer);
    } else if (m === "Artificial Intelligence") {
      setOpen(true);
      setData({
        title: "Artificial Intelligence",
        para1:
          "Among the technologies offering the most promise in addressing these issues are advanced data analytics for so-called big data; accessible, scalable cloud platforms; and AI that drives machine learning (ML). Complementing these at the field level are increasingly “smart,” self-calibrating sensors that provide offshore equipment and components with the ability to communicate status to higher-level systems. In addition, well-established global standards are facilitating machine-to-machine communication. Finally, cybersecurity standards and layered, defense-in-depth models have grown in response to the increasing frequency and sophistication of cyber threats that continue to endanger critical infrastructure, especially energy.",
      });
      setImage(AI);
    } else if (m === "Web/App Development") {
      setOpen(true);
      setData({
        title: " Web/App Development",
        para1:
          "Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.",
      });
      setImage(WebDev);
    } else if (m === "Business Intelligence") {
      setOpen(true);

      setData({
        title: "Business Intelligence",
        para1:
          "Business intelligence combines business analytics, data mining, data visualization, data tools and infrastructure, and best practices to help organizations make more data-driven decisions. In practice, you know you’ve got modern business intelligence when you have a comprehensive view of your organization’s data and use that data to drive change, eliminate inefficiencies, and quickly adapt to market or supply changes. Modern BI solutions prioritize flexible self-service analysis, governed data on trusted platforms, empowered business users, and speed to insight.",
      });
      setImage(BI);
    } else if (m === "Machine Learning") {
      setOpen(true);

      setData({
        title: "Machine Learning",
        para3: {
          l1: "Advance Analytics -real cost, revenue and risk differential",
          l2: "ML based advanced Business analytics solutions",
          l3: " Migration of Traditional analytics to AI and ML",
          l4: " Semi/Unstructured Data analytics",
          l5: " Advanced Visualization",
        },
      });
      setImage(ML);
    } else {
      setOpen(false);
      setData({});
    }
  }
  return (
    <div className="bg-gradient-to-b from-black to-[#030c30]">
      <section
        className="bg-[url('../src/assets/forth_section/section_bg.svg')] bg-center  bg-cover  w-full min-h-screen flex justify-center items-center"
        id="Expertise"
      >
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

      <section className=" py-20 pb-32" id="Capabilities">
        <div className="flex flex-row md:flex-col  gap-5  w-[95%] mx-auto  ">
          <div className="flex-1 max-w-[200px] flex-col md:flex-row flex  md:max-w-none  gap-5 lg:gap-10  ">
            {capabilitiesData?.map((data, index) => {
              return (
                <div
                  onClick={() => openModals(data?.name)}
                  key={index}
                  className="cursor-pointer bg-[#061137]  w-fit p-5 md:py-5 md:px-0 lg:p-5  rounded-3xl border-[#0074E5] border border-opacity-50 aspect-square flex justify-between items-center flex-col "
                >
                  <h1 className="text-white font-semibold text-sm sm:text-base md:text-sm lg:text-lg xl:text-xl xl:w-[80%] xl:mx-auto  tracking-[0.2em] text-center  mb-2 lg:mb-5 ">
                    {data?.name}
                  </h1>
                  <div className="aspect-square w-[70%] md:w-[50%] lg:w-[70%] mx-auto">
                    <img src={data?.image} alt={data?.name} />
                  </div>

                  {/* <div className="   aspect-square w-[90%] md:w-[80%] lg:w-[90%] mx-auto">
                    <img
                      src={data?.image}
                      alt={data?.name}
                      className=" mx-auto"
                    />
                  </div> */}
                </div>
              );
            })}
            <ModalFifthSixth
              data={data}
              open={open}
              setOpen={setOpen}
              onCloseModal={onCloseModal}
              image={image}
            />
          </div>

          {/* mobile  dashed boders */}
          <div className="flex-1 flex   justify-center items-center md:hidden  ">
            <div className="   h-[80%] w-[80%]   flex flex-col  justify-between items-start">
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
