import React, { useState, useEffect } from "react";
import LandingPage from "../../../../pages/LandingPage";
import Footer from "../../../global/footer/Footer";
import Hamburger from "../../../global/header/Hamburger";
import Header from "../../../global/header/Header";
import Overlay from "../../../global/overlay/Overlay";
import Sidebar from "../../../global/sidebar/Sidebar";
import case1 from "../../../../assets/eight_section/case-1.svg";
import case2 from "../../../../assets/eight_section/case-2.svg";
import case3 from "../../../../assets/eight_section/case-3.svg";
import icon1 from "../../../../assets/case_study/1.png";
import icon2 from "../../../../assets/case_study/2.png";
import icon3 from "../../../../assets/case_study/3.png";
import fraudDetection from "../../../../assets/case_study/caseImages/fraud-detection.png";
import { useLocation } from "react-router-dom";

const CaseStudyPage = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  const [caseSelectedData, setCaseSelectedData] = useState({});

  const location = useLocation();
  const selectedItem = location.state;
  console.log("USE LOCATION DATA", selectedItem);
  const cases = {
    caseFraudDetection: {
      casename: "Fraud Detection",
      image: fraudDetection,
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      text: {
        para1:
          "Multinational kitchen appliances and Home Products Retail Chain ",
        para2:
          "Build Loyalty Platform and Campaign Analytics to improved Marketing Revenue",
        para3:
          "ML team looking to build loyalty platform, algorithms to target",
      },
    },
    caseCustomerChurn: {
      casename: "customer churn prediction",
      image: fraudDetection,
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      text: {
        para1:
          "Multinational kitchen appliances and Home Products Retail Chain ",
        para2:
          "Build Loyalty Platform and Campaign Analytics to improved Marketing Revenue",
        para3:
          "ML team looking to build loyalty platform, algorithms to target",
      },
    },
    caseRetail: {
      casename: "RETAIL LOYALTY PLATFORM AND CAMPAIGN MANAGEMENT",
      image: fraudDetection,
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      text: {
        para1:
          "Multinational kitchen appliances and Home Products Retail Chain ",
        para2:
          "Build Loyalty Platform and Campaign Analytics to improved Marketing Revenue",
        para3:
          "ML team looking to build loyalty platform, algorithms to target",
      },
    },
  };
  useEffect(() => {
    if (selectedItem === "fraud detection") {
      setCaseSelectedData(cases?.caseFraudDetection);
    } else if (selectedItem === "customer churn prediction") {
      setCaseSelectedData(cases?.caseCustomerChurn);
    } else if (selectedItem === "credit risk scoring") {
      setCaseSelectedData(cases?.caseRetail);
    }
  }, [selectedItem]);
  //   const caseFraudDetection = [
  //     {
  //       casename: "",
  //       icon: "",
  //       text: "",
  //     },
  //   ];
  return (
    <div className="bg-black">
      {/* <div className="h-[20px] w-full bg-black"></div> */}
      <div className="cursor-default font-akrobatRegular">
        <div className="h-[20px] w-full bg-red-500"></div>

        <Overlay />
        <Sidebar />
        <Hamburger />
        <Header />
        <div className="pt-20"></div>
        <section className="h-[92vh] pt-2">
          <div className="w-full bg-black text-white py-5">
            <div className="flex flex-col items-center justify-center gap-5 mt-[5rem] text-[#FFFFFF] ">
              <div className="w-[85%] flex-1 ">
                <h1 className="w-[100%] md:w-[70%] uppercase text-left sm:text-left md:text-left text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-semibold tracking-widest font-akrobatRegular pb-5">
                  {caseSelectedData?.casename}
                </h1>
              </div>

              <div className="flex flex-col-reverse md:flex-row lg:flex-row  justify-center items-center w-full gap-10 flex-1 ">
                {/* <div className="bg-[url('assets/eight_section/case-1.svg')] w-[300px] h-[300px] bg-no-repeat object-cover"></div> */}
                <img src={caseSelectedData?.image} alt="" className="w-full" />
              </div>

              <div className="flex flex-row justify-start w-[90%] items-center gap-5 lg:gap-10 font-gillSans text-sm md:text-lg lg:text-2xl  ">
                <div className=" flex items-center justify-center ">
                  <img
                    src={caseSelectedData?.icon1}
                    alt=""
                    className="w-[3rem]"
                  />
                </div>
                <div className=" mt-1  lg:mt-3 xl:mt-4">
                  <p>{caseSelectedData?.text?.para1}</p>
                </div>
              </div>
              <div className="flex flex-row justify-start w-[90%] items-center   gap-5 lg:gap-10 font-gillSans text-sm md:text-lg lg:text-2xl ">
                <div>
                  <img
                    src={caseSelectedData?.icon2}
                    alt=""
                    className="w-[3rem]"
                  />
                </div>
                <div className="mt-1  lg:mt-3 xl:mt-4">
                  <p>{caseSelectedData?.text?.para2}</p>
                </div>
              </div>
              <div className="flex flex-row justify-start w-[90%] items-center   gap-5 lg:gap-10 font-gillSans text-sm md:text-lg lg:text-2xl ">
                <div>
                  <img
                    src={caseSelectedData?.icon3}
                    alt=""
                    className="w-[3rem]"
                  />
                </div>
                <div className="mt-1  lg:mt-3 xl:mt-4">
                  <p>{caseSelectedData?.text?.para3}</p>
                </div>
              </div>
            </div>
            <div className=" p-6 flex flex-col justify-center items-center ">
              <hr className="bg-[#9E9E9E] h-[2px] border-none my-5 md:my-8 w-[80%] md:w-[80%] lg:w-[70%]" />
              <div className="flex justify-center items-center">
                <h1 className="font-gillSans text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center md:my-10 w-[100%]">
                  Wanted to identify store-level performance to optimize local
                  inventories
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center w-full sm:w-[70%] md:w-[60%] lg:w-[50%] my-10">
                <div className="border w-full flex justify-center items-center text-xl md:text-2xl lg:text-3xl xl:text-4xl p-5 font-gillSans">
                  CUSTOMER PROFILE
                </div>
                <div className="border  w-full border-t-0 flex justify-center items-center">
                  <div className="w-full flex-1 text-center flex flex-col gap-5 font-gillSans text-lg md:text-xl lg:text-2xl b border bottom-0 border-l-0 border-t-0 border-b-0">
                    <div className="p-2"></div>
                    <div className="pt-5">Industry</div>
                    <div className="pt-5">Annual Revenue</div>
                    <div className="pt-5">Store</div>
                    <div className="pt-5">Location</div>
                    <div className="p-2"></div>
                  </div>
                  <div className="w-full flex-1 text-center flex flex-col gap-5 font-gillSans text-lg md:text-xl lg:text-2xl">
                    <div className="p-2"></div>
                    <div className="pt-5">Retail</div>
                    <div className="pt-5">$1 Bn+</div>
                    <div className="pt-5">650+</div>
                    <div className="pt-5">MNC</div>
                    <div className="p-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudyPage;
