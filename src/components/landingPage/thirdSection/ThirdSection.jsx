import React, { useState } from "react";
// assets
import thridSectionImg from "../../../assets/third_section/thridSectionImg.svg";
import earth from "../../../assets/third_section/earth.mp4";
import retail from "../../../assets/third_section/retail.png";
import Retail from "../../../assets/third_section/Retail.png";

import Defence from "../../../assets/third_section/Defence.png";

import Manufacture from "../../../assets/third_section/Manufacture.png";
import Banking from "../../../assets/third_section/Banking.png";
import Healthcare from "../../../assets/third_section/Healthcare.png";

import RetailModal from "../../../assets/third_section/Modal/RetailModal.png";
import TelecomModal from "../../../assets/third_section/Modal/TelecomModal.png";
import EducationModal from "../../../assets/third_section/Modal/EducationModal.png";
import BankingModal from "../../../assets/third_section/Modal/BankingModal.png";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ModalShow from "./ModalShow";

function ThirdSection() {
  // const modals = ["Retail", "Manufacture", "Defence", "Banking"];
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [image, setImage] = useState();

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  function openModals(m) {
    if (m === "retail") {
      setOpen(true);
      setImage(RetailModal);
      setData({
        name: "RETAIL",
        data1:
          " Retail is the process of selling consumer goods or services to customers through multiple channels of distribution to earn a profit. Retailers satisfy demand identified through a supply chain. The term retailer is typically applied where a service provider fills the small orders of a large number of individuals, who are end-users, rather than large orders of a small number of wholesale, corporate or government clientele.",
        data2:
          "Shopping generally refers to the act of buying products.Sometimes this is done to obtain final goods, including necessities such as food and clothing; sometimes it takes place as a recreational activity. Recreational shopping often involves window shopping and browsing: it does not always result in a purchase..",
        data3: {
          l1: "Supply Chain Analytics",
          l2: "Operational analytics",
          l3: "Customer Analytics",
        },
      });
    } else if (m === "telecom") {
      setOpen(true);
      setImage(TelecomModal);
      setData({
        name: "TELECOM",
        data1:
          " Telecommunication is the transmission of signs, signals, messages, words, writings, images and sounds or information of any nature by wire, radio, optical or electromagnetic systems. Telecommunication occurs when the exchange of information between communication participants includes the use of technology. It is transmitted either electrically over physical media, such as cables, or via electromagnetic radiation Such transmission paths are often divided into communication channels which afford the advantages of multiplexing.",
        data2:
          "Since the Latin term communicatio is considered the social process of information exchange, the term telecommunications is often used in its plural form because it involves many different technologies.",
      });
    } else if (m === "education") {
      setOpen(true);
      setImage(EducationModal);
      setData({
        name: "EDUCATION",
        data1:
          "Digital Educational Platform which supports online Transactions, Education and go digital with minimal loss in time and resources Integrate core business functions Easy-to-configure Centrally Managed Solution (Managed by EKO) Streamline processes Plug and Play and Custom Enhancement / Development",

        data2:
          "Since the Latin term communicatio is considered the social process of information exchange, the term telecommunications is often used in its plural form because it involves many different technologies.",
      });
    } else if (m === "banking") {
      setOpen(true);
      setImage(BankingModal);
      setData({
        name: "BANKING",
        data1:
          "The world of banking has encountered unprecedented change over the past few years. Today, banks have that rare opportunity to reinvent themselves with data and analytics. Analytics will be a differentiator using analytics to gain an edge in a cutthroat environment—by improving risk assessment and predicting customer behavior. Analytics should be a part of every major initiative, in areas ranging from customers and risk to finance, workforce, and supply chain.",

        data2:
          "Since the Latin term communicatio is considered the social process of information exchange, the term telecommunications is often used in its plural form because it involves many different technologies.",
        data3: {
          l1: "Analytics can help",
          l2: "Increase the ability to address and monitor regulatory compliance",
          l3: "Increase transparency and understanding of risk exposures to manage the business more effectively",
          l4: "Develop a risk-adjusted view of performance",
          l5: "Manage fraud effectively",
          l6: "Measure customer and product profitability",
          l7: "Identify “high-potential” prospects and customers",
          l8: "Improve the ability to target products and services to prospects or customers",
          l9: "Enhance specific elements of the offer—product, pricing, channel",
          l10: "Allow senior management to make informed operational decisions",
        },
      });
    } else {
      setOpen(false);
      setData({});
    }
  }

  return (
    <section
      className="bg-black py-20 text-white overflow-hidden "
      id="Industries"
    >
      <div className=" text-right text-3xl  text-white px-5 mb-14 md:mb-20 font-semibold tracking-widest md:text-3xl  lg:text-7xl ">
        OUR SOLUTIONS
      </div>
      <div className="flex h-full ">
        {/* <div className="flex justify-between items-center w-fit sm:w-full  border border-red-500"> */}
        <div className="flex justify-between items-center w-fit sm:w-full  ">
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

            <div className="w-full flex items-center z-10 translate-x-[10%] sm:-translate-x-[2%] translate-y-[10%] sm:translate-y-[10%] md:translate-x-[4%] lg:-translate-x-[10%] xl:-translate-x-[15%] 2xl:-translate-x-[5%]  lg:translate-y-[15%] xl:translate-y-[0%] 2xl:translate-y-[0%]   overflow-hidden">
              <div className="flex items-start w-[28%] sm:w-[50%] md:w-[40%] lg:w-[22%] xl:w-[18%]">
                <div className="bg-[#0085FE] aspect-square w-[8px] rounded-full -translate-y-[2.5px]"></div>
                <div className="border-t-[#0085FE] border-t-2 border-dashed flex-1"></div>
              </div>

              <div
                onClick={() => openModals("retail")}
                className="cursor-pointer rounded-lg p-2 aspect-square w-[65%] max-w-[75px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[100px] xl:max-w-[120px]  2xl:max-w-[150px] bg-[#061137] border-[#0074E5] border border-opacity-50"
              >
                <h1 className="text-white font-semibold text-sm sm:text-base md:text-sm lg:text-lg xl:text-xl xl:w-[80%] xl:mx-auto   text-center  mb-2 lg:mb-5 ">
                  RETAIL
                </h1>
                <div className="aspect-square  mx-auto">
                  <img src={Retail} alt="retail" />
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="w-full flex items-center z-10 translate-x-[25%] sm:translate-x-[15%] md:translate-x-[16%] lg:translate-x-[5%] translate-y-[10%] lg:translate-y-[12%] xl:translate-y-[10%] overflow-hidden">
              <div className="flex items-start w-[28%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%]">
                <div className="bg-[#0085FE] aspect-square w-[8px] rounded-full -translate-y-[2.5px]"></div>
                <div className="border-t-[#0085FE] border-t-2 border-dashed flex-1"></div>
              </div>

              <div
                onClick={() => openModals("telecom")}
                className="cursor-pointer rounded-lg p-2 aspect-square w-[65%] max-w-[75px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[100px] xl:max-w-[120px]  2xl:max-w-[150px] bg-[#061137] border-[#0074E5] border border-opacity-50"
              >
                <h1 className="text-white font-semibold text-[12px] sm:text-base md:text-sm lg:text-md xl:text-lg  xl:mx-auto   text-center  mb-2 lg:mb-5 ">
                  TELECOM
                </h1>
                <div className="aspect-square  mx-auto">
                  <img src={Manufacture} alt="telecom" />
                </div>
              </div>
            </div>
            {/* 3 */}
            {/* <div className="w-full flex items-center z-10 translate-x-[30%] sm:translate-x-[15%] md:translate-x-[16%] lg:translate-x-[5%]  translate-y-[15%] xl:translate-x-[5%] xl:translate-y-[5%] overflow-hidden">
              <div className="flex items-start w-[10%] sm:w-[30%] md:w-[10%] lg:w-[20%] xl:w-[10%]">
                <div className="bg-[#0085FE] aspect-square w-[8px] rounded-full -translate-y-[2.5px]"></div>
                <div className="border-t-[#0085FE] border-t-2 border-dashed flex-1"></div>
              </div>

              <div className="rounded-lg p-2 aspect-square w-[65%] max-w-[75px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[100px] xl:max-w-[120px]  2xl:max-w-[150px] bg-[#061137] border-[#0074E5] border border-opacity-50">
                <h1 className="text-white font-semibold text-[12px] sm:text-base md:text-sm lg:text-md xl:text-lg  xl:mx-auto   text-center  mb-2 lg:mb-5 ">
                  HEALTHCARE
                </h1>
                <div className="aspect-square  mx-auto">
                  <img src={Healthcare} alt="Healthcare" />
                </div>
              </div>
            </div> */}
            {/* 4 */}
            <div className="w-full flex items-center z-10  translate-y-[20%] translate-x-[25%] md:translate-x-[16%] lg:translate-x-[5%]  sm:translate-x-[15%] lg:translate-y-[5%] overflow-hidden">
              <div className="flex items-start w-[28%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%]">
                <div className="bg-[#0085FE] aspect-square w-[8px] rounded-full -translate-y-[2.5px]"></div>
                <div className="border-t-[#0085FE] border-t-2 border-dashed flex-1"></div>
              </div>

              <div
                onClick={() => openModals("education")}
                className="cursor-pointer rounded-lg p-2 aspect-square w-[65%] max-w-[75px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[100px] xl:max-w-[120px]  2xl:max-w-[150px] bg-[#061137] border-[#0074E5] border border-opacity-50"
              >
                <h1 className="text-white font-semibold text-[12px] sm:text-base md:text-sm lg:text-md xl:text-lg  xl:mx-auto   text-center  mb-2 lg:mb-5 ">
                  EDUCATION
                </h1>
                <div className="aspect-square  mx-auto">
                  <img src={Defence} alt="Defence" />
                </div>
              </div>
            </div>
            {/* 5 */}

            <div className="w-full flex items-center z-10 translate-x-[10%] sm:-translate-x-[2%] translate-y-[10%] sm:translate-y-[10%] md:translate-x-[4%] lg:-translate-x-[10%] xl:-translate-x-[15%] 2xl:-translate-x-[5%]  lg:-translate-y-[8%] xl:translate-y-[0%] 2xl:translate-y-[0%]   overflow-hidden">
              <div className="flex items-start w-[28%] sm:w-[50%] md:w-[40%] lg:w-[22%] xl:w-[18%]">
                <div className="bg-[#0085FE] aspect-square w-[8px] rounded-full -translate-y-[2.5px]"></div>
                <div className="border-t-[#0085FE] border-t-2 border-dashed flex-1"></div>
              </div>

              <div
                onClick={() => openModals("banking")}
                className="cursor-pointer rounded-lg p-2 aspect-square w-[65%] max-w-[75px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[100px] xl:max-w-[120px]  2xl:max-w-[150px] bg-[#061137] border-[#0074E5] border border-opacity-50"
              >
                <h1 className="text-white font-semibold text-sm sm:text-base md:text-sm lg:text-lg xl:text-xl xl:w-[80%] xl:mx-auto   text-center  mb-2 lg:mb-5 ">
                  BANKING
                </h1>
                <div className="aspect-square  mx-auto">
                  <img src={BankingModal} alt="banking" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ModalShow
          data={data}
          open={open}
          setOpen={setOpen}
          onCloseModal={onCloseModal}
          image={image}
        />
        <div className=" flex flex-col  w-fit  pr-5 ">
          <h1 className="vertival-rl tracking-[1.2em] sm:tracking-[1.7em] text-xl lg:text-2xl xl:text-3xl flex items-end justify-start   flex-[0.7]">
            POWERS
          </h1>

          <div className="w-[2px] bg-[#0074E5] flex-1 mx-auto"></div>
        </div>
      </div>

      <h1 className=" text-right text-3xl md:text-3xl  lg:text-7xl  text-white px-5 mt-20  w-min ml-auto  tracking-widest z-10">
        MULTILE INDUSTRIES
      </h1>
    </section>
  );
}

export default ThirdSection;
