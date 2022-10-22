import React, { useEffect, useRef, useState } from "react";
import video from "../../../assets/second_section/second_video.mp4";
import AIvideo from "../../../assets/second_section/AIvideo.mp4";
import playButton from "../../../assets/second_section/play.svg";
import pauseButton from "../../../assets/second_section/pause.svg";
import { Link } from "react-router-dom";

const SecondSection = () => {
  const [controlIs, setControlIs] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    if (controlIs) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [controlIs]);

  return (
    <div className="py-10 sm:py-0 w-full ">
      <h1 className="text-center font-semibold tracking-[0.06em] text-2xl sm:hidden">
        Application of AI
      </h1>

      <div className="flex flex-col gap-10 mt-10 sm:mt-0 sm:flex-row-reverse overflow-y-visible overflow-x-clip   justify-between ">
        <div className="w-full  lg:w-[50%] sm:scale-110 ">
          <div className="relative  overflow-hidden ">
            <video
              className="mx-auto w-[90%] sm:w-full clip-polygon-1  "
              ref={videoRef}
              src={AIvideo}
            ></video>

            <button
              className="bg-[#1ECAFF] w-[50px] md:w-[60px] aspect-square rounded-full absolute bottom-[5%] right-[25%] sm:right-[20%] lg:right-[10%] md:right-10 bg-opacity-75 flex justify-center items-center group"
              onClick={() => setControlIs(!controlIs)}
            >
              <img
                src={controlIs ? pauseButton : playButton}
                alt=".."
                className=" w-[20px] md:w-[25px] mx-auto group-active:scale-95 transition-all"
              />
            </button>
          </div>
        </div>

        <div className=" w-[80%] sm:w-[100%] lg:w-[50%]  mx-auto sm:mx-0 pl-[5%] bg-white h-[100%] md:flex flex-col justify-between items-start pb-5">
          <h1 className="text-center sm:text-left font-semibold tracking-[0.06em] text-3xl lg:text-4xl hidden sm:block py-10 sm:pb-5">
            Application of AI
          </h1>
          <p className="font-gillSans block text-xs md:text-sm lg:text-base lg:mt-10 xl:mt-16 2xl:mt-20 xl:w-[60%]">
            Artificial Intelligence has various applications in today's society.
            It is becoming essential for today's time because it can solve
            complex problems with an efficient way in multiple industries, such
            as Healthcare, entertainment, finance, education, etc. AI is making
            our daily life more comfortable and fast.
          </p>
          <div className="h-[10%]  flex justify-center gap-5 lg:gap-10 items-end overflow-hidden lg:mt-10">
            <div className="group relative cursor-pointer ">
              <Link
                className="text-sm md:text-[12px] xl:text-lg tracking-[0.1em] pb-1 font-semibold font-gillSans"
                to={{
                  pathname: "/fifth_sixth_subpage",
                }}
                state="AI & ML"
              >
                View More
              </Link>

              <div className="bg-[#0074E5] group-hover:bg-gradient-to-r from-[#0085FE] to-[#29E5FF] h-[1px]  lg:h-[2px] w-full transition-all duration-300"></div>

              <div className="bg-[#EAFAFF] h-[1px]  lg:h-[2px] w-[8px] absolute bottom-0 right-3 group-hover:translate-x-40 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
