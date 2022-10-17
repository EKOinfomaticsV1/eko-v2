import React from "react";
// import Footer from "./components/global/footer/Footer";
import Footer from "../components/global/footer/Footer";
import Hamburger from "../components/global/header/Hamburger";
import Header from "../components/global/header/Header";
import Overlay from "../components/global/overlay/Overlay";
import Sidebar from "../components/global/sidebar/Sidebar";
import LandingPage from "../pages/LandingPage";

const Home = () => {
  return (
    <div className="cursor-default font-akrobatRegular">
      <div className="h-[20px] w-full bg-red-500"></div>
      <Overlay />
      <Sidebar />
      <Hamburger />
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default Home;
