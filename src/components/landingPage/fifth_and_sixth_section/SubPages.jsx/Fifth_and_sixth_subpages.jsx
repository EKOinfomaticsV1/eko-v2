import React, { useEffect } from "react";
import Footer from "../../../global/footer/Footer";
import Hamburger from "../../../global/header/Hamburger";
import Header from "../../../global/header/Header";
import Overlay from "../../../global/overlay/Overlay";
import Sidebar from "../../../global/sidebar/Sidebar";
import { useLocation } from "react-router-dom";

import AI_ML from "./AI_ML";
const Fifth_and_sixth_subpages = () => {
  const location = useLocation();
  const selectedItem = location.state;
  console.log("USE LOCATION DATA", selectedItem);

  // const [selectedData, setSelectedData] = useState(selectedItem);
  const displayPage = () => {
    if (selectedItem === "AI/ML") {
      return <AI_ML />;
    }
  };

  return (
    <div className="bg-black">
      {/* <div className="h-[20px] w-full bg-black"></div> */}

      <Overlay />
      <Sidebar />
      <Hamburger />
      <Header />
      <div className="pt-20"></div>
      {displayPage()}
    </div>
  );
};

export default Fifth_and_sixth_subpages;
