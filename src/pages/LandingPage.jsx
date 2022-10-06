import React from "react";
//media assets
import hero_image from "../assets/landingPage/hero_image.gif";
const LandingPage = () => {
  return (
    <div className="h-[200vh] bg-black text-white">
      <div className="w-[90%] mx-auto md:ml-auto md:mx-0 md:flex justify-between items-center">
        <div>lorem</div>
        <div className="">
          <div className=" aspect-square rounded-full overflow-hidden flex justify-center items-center   relative scale-[-1] max-w-[100vw]  md:max-w-[50vw] ">
            <img
              src={hero_image}
              alt="..."
              className=" scale-[130%] md:scale-[150%]  "
            />
            <div className="h-full w-full  absolute top-0 rounded-full boxshadow-blur"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
