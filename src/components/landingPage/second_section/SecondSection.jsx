import React, { useEffect, useRef, useState } from "react";
import video from "../../../assets/second_section/second_video.mp4";
import playButton from "../../../assets/second_section/play.svg";
import pauseButton from "../../../assets/second_section/pause.svg";

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
    <div className=" py-10 md:py-0 w-full ">
      <h1 className="text-center font-semibold tracking-[0.06em] text-2xl md:hidden">
        Application of AI
      </h1>

      <div className="flex flex-col gap-10 mt-10 md:mt-0 sm:flex-row-reverse items-center justify-between">
        <div className="w-full ">
          <div className="relative  overflow-hidden ">
            <video
              className="mx-auto w-[90%] md:w-full"
              ref={videoRef}
              src={video}
            ></video>

            <div className="absolute  top-0 -bottom-1  -left-[30px] md:-left-[50px] -skew-x-[15deg]  flex w-[100px]">
              <div className="bg-white h-full w-[70%]"></div>
              <div className="bg-blue-50   h-full w-[30%]"></div>
            </div>

            <div className="absolute md:hidden top-0 -bottom-1  -right-[30px] -skew-x-[15deg]  flex w-[100px]">
              <div className="bg-white h-full w-[100%]"></div>
            </div>

            <button
              className="bg-[#1ECAFF] w-[50px] md:w-[60px] aspect-square rounded-full absolute bottom-5 right-[120px] sm:right-[150px] md:right-10 bg-opacity-75 flex justify-center items-center group"
              onClick={() => setControlIs(!controlIs)}
            >
              <img
                src={controlIs ? pauseButton : playButton}
                alt=".."
                className=" w-[20px] md:w-[25px] mx-auto group-active:scale-95 transition-all"
              />
            </button>

            {/* <div className="absolute top-0 bottom-0  -left-[18%] w-[20%] -skew-x-[20deg] ">
            <div className="bg-white w-full h-full flex ">
              <div className="flex-1"></div>
              <div className="w-[30px] bg-blue-200 opacity-50"></div>
            </div>
          </div> */}
          </div>
        </div>

        <div className=" w-[80%] md:w-[60%]  mx-auto pl-[5%] bg-white">
          <h1 className="text-center font-semibold tracking-[0.06em] text-2xl hidden md:block pt-5 pb-10">
            Application of AI
          </h1>
          <p className="font-gillSans  ">
            Artificial Intelligence has various applications in today's society.
            It is becoming essential for today's time because it can solve
            complex problems with an efficient way in multiple industries, such
            as Healthcare, entertainment, finance, education, etc. AI is making
            our daily life more comfortable and fast.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
