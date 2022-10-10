import React from "react";

// carousel
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

// assets
import case1 from "../../../assets/eight_section/case-1.svg";
import case2 from "../../../assets/eight_section/case-2.svg";
import case3 from "../../../assets/eight_section/case-3.svg";
import smallScreenArrow from "../../../assets/landingPage/arrow-tr.svg";

const EightSection = () => {
  const handleDragStart = (e) => e.preventDefault();

  const responsiveObject = {
    0: {
      items: 1,
    },

    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  };

  return (
    <section className="bg-[#F5FEFF] py-10 md:pt-16 lg:pt-24 md:pb-28">
      <div className="w-[80%] mx-auto text-center">
        <h1 className="text-[ #010101] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider  mx-auto">
          Our Solved Cases
        </h1>
        <p className="text-[#5C5C5C] font-gillSans md:text-lg lg:text-xl w-[80%] mx-auto mt-5 ">
          AI is transforming every industry and department by delivering better
          insights, personalized experiences, streamlined operations, and
          reduced risk
        </p>
      </div>

      <div className="py-20 md:py-24 lg:py-32 ">
        <AliceCarousel
          onDragStart={handleDragStart}
          role="presentation"
          mouseTracking
          //   autoPlay={true}
          autoPlayInterval={5000}
          infinite={true}
          disableButtonsControls={true}
          disableDotsControls
          responsive={responsiveObject}
        >
          <div className="w-[90%] md:min-h-[550px] mx-auto bg-[#EAFAFF] ">
            <img src={case1} alt="case-1" className="mx-auto w-full" />
            <div className="p-8 ">
              <h1 className="text-[ #010101] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider  mx-auto my-5 mb-10">
                FRAUD DETECTION
              </h1>
              <p className="text-[#5C5C5C] font-gillSans md:text-lg lg:text-xl  pb-10">
                Leverage AI to analyze massive data sets, better identify fraud
                patterns, and flag fraudulent transactions as they happen in
                real-time.
              </p>
            </div>
          </div>

          <div className="w-[90%] md:min-h-[550px] mx-auto bg-[#EAFAFF] ">
            <img src={case2} alt="case-1" className="mx-auto w-full" />
            <div className="p-8 ">
              <h1 className="text-[ #010101] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider  mx-auto my-5 mb-10">
                CUSTOMER CHURN PREDICTION
              </h1>
              <p className="text-[#5C5C5C] font-gillSans md:text-lg lg:text-xl  pb-10">
                Leverage AI to analyze massive data sets, better identify fraud
                patterns, and flag fraudulent transactions as they happen in
                real-time.
              </p>
            </div>
          </div>

          <div className="w-[90%] md:min-h-[550px] mx-auto bg-[#EAFAFF] ">
            <img src={case3} alt="case-1" className="mx-auto w-full" />
            <div className="p-8 ">
              <h1 className="text-[ #010101] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider  mx-auto my-5 mb-10">
                CREDIT RISK SCORING
              </h1>
              <p className="text-[#5C5C5C] font-gillSans md:text-lg lg:text-xl  pb-65">
                Leverage AI to analyze massive data sets, better identify fraud
                patterns, and flag fraudulent transactions as they happen in
                real-time.
              </p>
            </div>
          </div>
        </AliceCarousel>
      </div>

      <div className="h-[10%]  flex justify-center gap-5 lg:gap-10 items-center overflow-hidden">
        <div className="group relative cursor-pointer ">
          <h1 className="text-2xl xl:text-3xl 2xl:text-4xl tracking-[0.1em] pb-1">
            <span>GET</span> <span className="font-semibold">STARTED</span>
          </h1>

          <div className="bg-[#0074E5] group-hover:bg-gradient-to-r from-[#0085FE] to-[#29E5FF] h-[4px] w-full transition-all duration-300"></div>

          <div className="bg-[#EAFAFF] h-[4px] w-[50px] absolute bottom-0 right-5 group-hover:translate-x-40 transition-all duration-300"></div>
        </div>
        <img
          src={smallScreenArrow}
          alt="..."
          className=" pb-3 hidden sm:block w-[40px]"
        />
      </div>
    </section>
  );
};

export default EightSection;
