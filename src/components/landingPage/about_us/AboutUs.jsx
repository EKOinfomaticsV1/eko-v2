import React, { useEffect, useState } from "react";
import Footer from "../../global/footer/Footer";
import Hamburger from "../../global/header/Hamburger";
import Header from "../../global/header/Header";
import Overlay from "../../global/overlay/Overlay";
import Sidebar from "../../global/sidebar/Sidebar";
import { useLocation } from "react-router-dom";

const AboutUs = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);
  return (
    <div className="bg-black">
      {/* <div className="h-[20px] w-full bg-black"></div> */}
      <div className="cursor-default font-akrobatRegular">
        <div className="h-[20px] w-ful"></div>

        <Overlay />
        <Sidebar />
        <Hamburger />
        <Header />
        <div className="md:pt-10 lg:pt-20"></div>
        <div className="h-screen text-white pt-2">
          <div className="flex justify-center items-center">
            <div className="w-full bg-black text-white py-2 md:my-0">
              <div className="flex flex-col items-center justify-center gap-5 mt-[5rem] text-[#FFFFFF] ">
                <div className="w-[85%] flex-1">
                  <h1 className="uppercase text-center sm:text-left md:text-left text-2xl sm:text-2xl lg:text-6xl font-semibold tracking-widest font-akrobatRegular pb-5">
                    About Us
                  </h1>
                  <div className="line h-1 w-[50%] sm:w-[80%] md:w-[80%] float-right"></div>
                  <br />
                  <div className=" mt-10 w-full  flex flex-col justify-center items-center text-sm md:text-lg font-gillSans gap-10">
                    <p className="w-[95%]">
                      We help our clients across the globe to enhance ROI, build
                      customer loyalty and enhance business goals. We provide
                      customized solutions in the areas of Risk Management,
                      Marketing Automation, Security Analytics, Loyalty
                      Management etc. across various domains and industries with
                      great success.{" "}
                    </p>
                    <p className="w-[95%]">
                      Our team consists of experts from the industry who have
                      100+ years of combined experience across industry. We
                      bring with us decades of experience in Research, Data
                      Analytics & Strategic Management Consulting Our team has
                      helped organizations leverage our expertise, helping them
                      meet their goals and constantly outperform their
                      competition.
                    </p>
                  </div>
                </div>

                <div className="flex  justify-start items-center w-full gap-3 sm:gap-5 lg:gap-10 xl:gap-16 flex-1 my-10">
                  <div className="flex">
                    <div className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] cust-grad "></div>

                    <div className="z-[9] ml-[-3rem] sm:ml-[-5rem] md:ml-[-6rem] lg:ml-[-7.8rem] xl:ml-[-9rem] bg-[url('assets/about_us/ranganathan.png')]   w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] rounded-[50%] aspect-square bg-cover bg-center bg-white"></div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-akrobatRegular font-medium">
                      Ranganathan Srinivasan
                    </h1>
                    <h1 className="text-left md:text-xl pt-2 lg:pt-10 font-gillSans">
                      Managing Director
                    </h1>
                  </div>
                </div>
                <div className="flex  justify-end items-center w-full gap-3 sm:gap-5 lg:gap-10 xl:gap-16  flex-1 my-10">
                  <div className="flex flex-col items-end justify-end">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-akrobatRegular text-right font-medium">
                      Rajlaxmi Shivram
                    </h1>
                    <h1 className="text-left md:text-xl pt-2 lg:pt-10">
                      Director
                    </h1>
                  </div>
                  <div className="flex flex-row-reverse">
                    <div className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] cust-grad2 "></div>
                    <div className="z-[9] mr-[-3rem] sm:mr-[-5rem] md:mr-[-6rem] lg:mr-[-7.8rem] xl:mr-[-9rem] bg-[url('assets/about_us/Rajlaxmi.png')] bg-white w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] rounded-[50%] aspect-square bg-cover bg-center"></div>
                  </div>
                </div>
                <div className="flex  justify-start items-center w-full gap-3 sm:gap-5 lg:gap-10 flex-1 my-10">
                  <div className="flex">
                    <div className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px]  cust-grad "></div>

                    <div className="z-[9] ml-[-3rem] sm:ml-[-5rem] md:ml-[-6rem] lg:ml-[-7.8rem] xl:ml-[-9.5rem] bg-[url('assets/about_us/darshan.png')]   w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px]  rounded-[50%] aspect-square bg-cover bg-center bg-white"></div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-akrobatRegular font-medium">
                      Darshan Shetty
                    </h1>
                    <h1 className="text-left md:text-xl pt-2 lg:pt-10 font-gillSans">
                      Director
                    </h1>
                  </div>
                </div>
                <div className="flex  justify-end items-center w-full gap-3 sm:gap-5 lg:gap-10 flex-1 my-10">
                  <div className="flex flex-col items-end justify-end">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-akrobatRegular text-right font-medium">
                      Patrick Toner
                    </h1>
                    <h1 className="text-left md:text-xl pt-2 lg:pt-10 font-gillSans">
                      Director US EKO
                    </h1>
                  </div>
                  <div className="flex flex-row-reverse">
                    <div className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px]  cust-grad2 "></div>
                    <div className="z-[9] mr-[-3rem] sm:mr-[-5rem] md:mr-[-6rem] lg:mr-[-7.8rem] xl:mr-[-9.5rem]  bg-[url('assets/about_us/Patrick.png')] bg-white w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px]  rounded-[50%] aspect-square bg-cover bg-center"></div>
                  </div>
                </div>
                <div className="flex  justify-start items-center w-full gap-3 sm:gap-5 lg:gap-10 flex-1 my-10">
                  <div className="flex">
                    <div className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px]  cust-grad "></div>

                    <div className="z-[9] ml-[-3rem] sm:ml-[-5rem] md:ml-[-6rem] lg:ml-[-7.8rem] xl:ml-[-9.5rem] bg-[url('assets/about_us/NeerajPalSingh.png')]   w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px]  rounded-[50%] aspect-square bg-cover bg-center bg-white"></div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-akrobatRegular font-medium">
                      Neeraj Pal Singh
                    </h1>
                    <h1 className="text-left md:text-xl pt-2 lg:pt-10 font-gillSans">
                      Advisor
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
