import React from "react";

import LandingPage from "../../../../pages/LandingPage";
import Footer from "../../../global/footer/Footer";
import Hamburger from "../../../global/header/Hamburger";
import Header from "../../../global/header/Header";
import Overlay from "../../../global/overlay/Overlay";
import Sidebar from "../../../global/sidebar/Sidebar";

const AI_ML = ({ title, paragraph, image }) => {
  return (
    <>
      <section className="h-[92vh] pt-2">
        <div className="w-full bg-black text-white py-2 md:pt-0">
          <div className="flex flex-col items-center justify-center gap-5 mt-[5rem] text-[#FFFFFF] ">
            <div className="w-[85%] flex-1">
              <h1 className="uppercase text-center sm:text-left md:text-left text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold tracking-widest font-akrobatRegular pb-5">
                {title}
              </h1>
              <div className="line h-1 w-[50%] sm:w-[80%] md:w-[80%] float-right"></div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row  justify-center items-center w-[70%] gap-5 md:gap-8 lg:gap-10 flex-1 ">
              <div
                className={`${
                  title === "machine learning"
                    ? "flex flex-col gap-2 md:gap-5 sm:gap-5 lg:gap-10 mt-[1rem] md:mt-[2rem] lg:mt-[5rem]  font-gillSans  flex-[0.7] text-justify md:text-left"
                    : "flex flex-col gap-2 md:gap-5 sm:gap-5 lg:gap-10 mt-[1rem] md:mt-[2rem] lg:mt-[5rem]  font-gillSans  flex-1 text-justify md:text-left"
                }text-lg sm:text-lg md:text-[16px] lg:text-[18px] xl:text-[20px]`}
              >
                <h1 className="text-center md:text-left">Overview</h1>
                <p>{paragraph?.para1}</p>
                <p>
                  <p>{paragraph?.para2}</p>
                  {paragraph?.para3 ? (
                    <div className="ml-5">
                      <div className="flex justify-start items-center gap-5">
                        <div>
                          <div className="w-2 h-2 bg-white rounded"></div>
                        </div>
                        <div>{paragraph?.para3?.l1}</div>
                      </div>
                      <div className="flex justify-start items-center gap-5">
                        <div>
                          <div className="w-2 h-2 bg-white rounded"></div>
                        </div>
                        <div>{paragraph?.para3?.l2}</div>
                      </div>
                      <div className="flex justify-start items-center gap-5">
                        <div>
                          <div className="w-2 h-2 bg-white rounded"></div>
                        </div>
                        <div>{paragraph?.para3?.l3}</div>
                      </div>
                      <div className="flex justify-start items-center gap-5">
                        <div>
                          <div className="w-2 h-2 bg-white rounded"></div>
                        </div>
                        <div>{paragraph?.para3?.l4}</div>
                      </div>
                      <div className="flex justify-start items-center gap-5">
                        <div>
                          <div className="w-2 h-2 bg-white rounded"></div>
                        </div>
                        <div>{paragraph?.para3?.l5}</div>
                      </div>
                      <div className="flex justify-start items-center gap-5">
                        <div>
                          <div className="w-2 h-2 bg-white rounded"></div>
                        </div>
                        <div>{paragraph?.para3?.l6}</div>
                      </div>
                      <div className="flex justify-start items-center gap-5">
                        <div>
                          <div className="w-2 h-2 bg-white rounded"></div>
                        </div>
                        <div>{paragraph?.para3?.l7}</div>
                      </div>
                      <div className="flex justify-start items-center gap-5">
                        <div>
                          <div className="w-2 h-2 bg-white rounded"></div>
                        </div>
                        <div>{paragraph?.para3?.l8}</div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </p>
              </div>
              <div className="flex-1">
                <div className="flex justify-center items-center md:mt-[3rem] lg:mt-[5rem]">
                  <img
                    src={image}
                    alt={title}
                    className="w-full max-w-[16rem] md:max-w-[20rem] lg:max-w-[30rem] lg:scale-[1.3]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AI_ML;
