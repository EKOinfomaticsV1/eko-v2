import React, { useEffect, useState } from "react";

// carousel
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

// assets
import client1 from "../../../assets/seventh_section/MercedesLogo.png";
import client2 from "../../../assets/seventh_section/CBALogo.png";
import client3 from "../../../assets/seventh_section/CignaLogo.png";
import client4 from "../../../assets/seventh_section/EversideLogo.png";
import client5 from "../../../assets/seventh_section/GALogo.png";
import client6 from "../../../assets/seventh_section/GeneralElectricLogo.png";
import client7 from "../../../assets/seventh_section/HPLogo.png";
import client8 from "../../../assets/seventh_section/JJLogo.png";
import client9 from "../../../assets/seventh_section/JWLogo.png";
import client10 from "../../../assets/seventh_section/LincolnFLogo.png";
import client11 from "../../../assets/seventh_section/MindfulLogo.png";
import client12 from "../../../assets/seventh_section/MODLogo.png";
import client13 from "../../../assets/seventh_section/OoredooLogo.png";
import client14 from "../../../assets/seventh_section/PayGlocalLogo.png";
import client15 from "../../../assets/seventh_section/PNRGLogo.png";
import client16 from "../../../assets/seventh_section/PAPL.png";

const SeventhSection = () => {
  // local variables
  const [partnersItems, setPartnersItems] = useState(null);

  const partnersData = [
    {
      name: "MercedesLogo",
      image: client1,
    },
    {
      name: "CBALogo",
      image: client2,
    },
    {
      name: "CignaLogo",
      image: client3,
    },
    {
      name: "EversideLogo",
      image: client4,
    },
    {
      name: "GALogo",
      image: client5,
    },
    {
      name: "GeneralElectricLogo",
      image: client6,
    },
    {
      name: "HPLogo",
      image: client7,
    },
    {
      name: "JJLogo",
      image: client8,
    },
    {
      name: "JWLogo",
      image: client9,
    },
    {
      name: "LincolnFLogo",
      image: client10,
    },
    {
      name: "MindfulLogo",
      image: client11,
    },
    {
      name: "MODLogo",
      image: client12,
    },
    {
      name: "OoredooLogo",
      image: client13,
    },
    {
      name: "PayGlocalLogo",
      image: client14,
    },
    {
      name: "PNRGLogo",
      image: client15,
    },
    {
      name: "PAPL",
      image: client16,
    },
  ];

  const handleDragStart = (e) => e.preventDefault();

  const responsiveObject = {
    0: {
      items: 2,
    },

    768: {
      items: 4,
    },
    1024: {
      items: 6,
    },
  };

  useEffect(() => {
    const partnerItemsArray = partnersData?.map((data, index) => {
      return (
        <div
          key={data?.name}
          onDragStart={handleDragStart}
          role="presentation"
          className="mx-5 grayscale hover:grayscale-0 transition-all duration-300 "
        >
          <img
            src={data?.image}
            alt={data?.name}
            className="mx-auto max-w-[120px]"
          />
        </div>
      );
    });

    setPartnersItems(partnerItemsArray);

    console.log("hello");
  }, []);

  return (
    <section className="bg-[#F5FEFF] rounded-t-3xl mt-[-20px] py-10 md:pt-16 lg:pt-24">
      <div className="w-[80%] mx-auto text-center">
        <h1 className="text-[ #010101] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider  mx-auto">
          Always by our client's side
        </h1>
        <p className="text-[#5C5C5C] font-gillSans md:text-lg lg:text-xl w-[80%] mx-auto mt-5 ">
          From manufacturing to defense, our partners span all across the Globe
        </p>
      </div>
      {partnersItems && (
        <div className="py-20 md:py-24 lg:py-32 ">
          <AliceCarousel
            mouseTracking
            autoPlay={true}
            autoPlayInterval={2000}
            infinite={true}
            disableButtonsControls={true}
            disableDotsControls
            responsive={responsiveObject}
          >
            <img
              onDragStart={handleDragStart}
              role="presentation"
              src={client1}
              alt="client1"
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300 w-[100px] md:w-[150px] lg:w-[180px]"
            />
            <img
              onDragStart={handleDragStart}
              role="presentation"
              src={client2}
              alt="client2"
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300 w-[100px] md:w-[150px] lg:w-[180px]"
            />
            <img
              onDragStart={handleDragStart}
              role="presentation"
              src={client3}
              alt="client3"
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300 w-[100px] md:w-[150px] lg:w-[180px]"
            />
            <img
              onDragStart={handleDragStart}
              role="presentation"
              src={client4}
              alt="client4"
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300 w-[100px] md:w-[150px] lg:w-[180px]"
            />
            <img
              onDragStart={handleDragStart}
              role="presentation"
              src={client5}
              alt="client5"
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300 w-[100px] md:w-[150px] lg:w-[180px]"
            />
            <img
              onDragStart={handleDragStart}
              role="presentation"
              src={client6}
              alt="client6"
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300 w-[100px] md:w-[150px] lg:w-[180px]"
            />
            <img
              onDragStart={handleDragStart}
              role="presentation"
              src={client7}
              alt="client6"
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300 w-[100px] md:w-[150px] lg:w-[180px]"
            />
            <img
              onDragStart={handleDragStart}
              role="presentation"
              src={client8}
              alt="client6"
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300 w-[100px] md:w-[150px] lg:w-[180px]"
            />

            <img
              onDragStart={handleDragStart}
              role="presentation"
              src={client9}
              alt="client1"
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300 w-[100px] md:w-[150px] lg:w-[180px]"
            />
            <img
              onDragStart={handleDragStart}
              role="presentation"
              src={client10}
              alt="client2"
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300 w-[100px] md:w-[150px] lg:w-[180px]"
            />
            <img
              onDragStart={handleDragStart}
              role="presentation"
              src={client11}
              alt="client3"
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300 w-[100px] md:w-[150px] lg:w-[180px]"
            />
            <img
              onDragStart={handleDragStart}
              role="presentation"
              src={client12}
              alt="client4"
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300 w-[100px] md:w-[150px] lg:w-[180px]"
            />
            <img
              onDragStart={handleDragStart}
              role="presentation"
              src={client13}
              alt="client5"
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300 w-[100px] md:w-[150px] lg:w-[180px]"
            />
            <img
              onDragStart={handleDragStart}
              role="presentation"
              src={client14}
              alt="client6"
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300 w-[100px] md:w-[150px] lg:w-[180px]"
            />
            <img
              onDragStart={handleDragStart}
              role="presentation"
              src={client15}
              alt="client6"
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300 w-[100px] md:w-[150px] lg:w-[180px]"
            />
            <img
              onDragStart={handleDragStart}
              role="presentation"
              src={client16}
              alt="client6"
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300 w-[100px] md:w-[150px] lg:w-[180px]"
            />
          </AliceCarousel>
        </div>
      )}
    </section>
  );
};

export default SeventhSection;
