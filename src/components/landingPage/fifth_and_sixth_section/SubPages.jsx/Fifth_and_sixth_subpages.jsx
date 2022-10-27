import React, { useEffect, useState } from "react";
import Footer from "../../../global/footer/Footer";
import Hamburger from "../../../global/header/Hamburger";
import Header from "../../../global/header/Header";
import Overlay from "../../../global/overlay/Overlay";
import Sidebar from "../../../global/sidebar/Sidebar";
import AI_Frame from "../../../../assets/fifth_and_sixth/AI_Frame.png";
import BigData_Frame from "../../../../assets/fifth_and_sixth/BigData_Frame.png";
import ML_Frame from "../../../../assets/fifth_and_sixth/ML_Frame.png";
import Analytics_Frame from "../../../../assets/fifth_and_sixth/Analytics_Frame.png";
import Group from "../../../../assets/fifth_and_sixth/Group.svg";
import { useLocation } from "react-router-dom";

import AI_ML from "./AI_ML";
const Fifth_and_sixth_subpages = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  const location = useLocation();
  const selectedItem = location.state;
  // console.log("USE LOCATION DATA", selectedItem);

  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState({
    para1: "",
    para2: "",
  });
  const [image, setImage] = useState();

  const [selectedData, setSelectedData] = useState(selectedItem);
  const displayPage = () => {
    if (selectedItem === "AI & ML") {
      setTitle("artificial intelligence");
      setParagraph({
        para1:
          "The current AI wave is poised to finally break through enterprises and is making the landfall at an opportune time. Leveraging highly skilled data scientists and professionals, is on the cusp of transforming into an AI company. We are weaving AI to our customer's business processes to help them achieve cost optimization, efficiencies, agility, and most importantly, deliver continuous value.",
        para2:
          "Today data is currency. Enhance your business analysts skillset and train them to become citizen data scientists who use AI / ML tools to build customer acquisition, retention and lifetime-value models",
      });
      setImage(AI_Frame);
    } else if (selectedItem === "Big Data") {
      setTitle("big data analytics");
      setParagraph({
        para1:
          "Big Data offers amazing potential, returning benefits on some of the wildest wishes your business users have always had. Let EKO Infomaticsand our team of award-winning Big Data Architects help your organization bring those wishes to life.",
        para2:
          "The world has witnessed a data explosion triggered by proliferation of devices and emerging channels of data creation and consumption. Uncovering insights from this data requires effective data integration capability, analytical processes, methodologies and workflows aimed at generating the right insights that accelerate real-time business value. Our team of experts partner with you from a pilot, to build, to scale, to support stages leveraging on Big Data technologies.",
      });
      setImage(BigData_Frame);
    } else if (selectedItem === "Machine Learning") {
      setTitle("machine learning");
      setParagraph({
        para1:
          "We offer end-to-end Machine Learning and Deep Learning, Data Science, AI & software development. Innovative solutions created with Machine learning are one of the best ways to achieve efficiency, increase ROI and boost your profits Our years of experience in the industry and having helped numerous clients in the past make us one of the best machine learning companies. ",
        para2: "Our Machine Learning solutions and services ",
        para3: {
          l1: "Customer Marketing / Targeting",
          l2: "IoT Solutions",
          l3: "Cyber Security",
          l4: "Risk and Fraud Management",
          l5: "Log Analytics",
          l6: "Pattern Recognition",
          l7: "Text Mining and Analytics",
          l8: "Trading",
        },
      });
      setImage(ML_Frame);
      // setImage(Group);
    } else if (selectedItem === "Analytic Solution") {
      setTitle("Analytic solution");
      setParagraph({
        para1:
          "As a Business Intelligence consulting leader, EKO continues to expand and combine innovative analytics with reporting tools for building relationships around, and achieving valuable insights from structured, semi-structured, and unstructured data.",
        para2:
          "Through our EKO Analytics™ consulting and development service, our BI consultants help you select, optimize and deploy an array of custom as well as pre-built analytics and reporting tools to help you understand your customers, brand, competitors, operations, and market opportunities. During the roll-out phase, we ensure you realize the benefit of your solution by working with your team through the change management process. ",
      });
      setImage(Analytics_Frame);
    }
  };
  useEffect(() => {
    displayPage();
  }, [selectedData]);

  return (
    <div className="bg-black">
      {/* <div className="h-[20px] w-full bg-black"></div> */}
      <div className="cursor-default font-akrobatRegular">
        <div className="h-[20px] w-full"></div>

        <Overlay />
        <Sidebar />
        <Hamburger />
        <Header />
        <div className="md:pt-10 lg:pt-20"></div>
        {/* {displayPage()} */}
        <AI_ML title={title} paragraph={paragraph} image={image} />
      </div>
    </div>
  );
};

export default Fifth_and_sixth_subpages;
