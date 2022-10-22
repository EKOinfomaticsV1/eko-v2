import React, { useEffect, useState, useRef } from "react";

import Hamburger from "../../global/header/Hamburger";
import Header from "../../global/header/Header";
import Overlay from "../../global/overlay/Overlay";
import Sidebar from "../../global/sidebar/Sidebar";
import { useLocation } from "react-router-dom";

// Email js
import emailjs from "@emailjs/browser";

const GetStarted = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  const [showMsg, setShowMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [validationMsg, setValidationMsg] = useState("");

  const [checkNumber, setCheckNumber] = useState(false);
  const [checkNumberMsg, setCheckNumberMsg] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [agree, setAgree] = useState("");

  const formref = useRef();

  const sendData = (e) => {
    e.preventDefault();

    if (
      e?.target[0]?.value?.length > 0 &&
      e?.target[1]?.value?.length > 0 &&
      e?.target[2]?.value?.length > 0
    ) {
      emailjs
        .sendForm(
          "service_m65erzh",
          "template_wkdlz8l",
          formref.current,
          "CZKC1r6auDp8kIoe0"
        )
        .then(
          (result) => {
            console.log(result.text);
            setShowMsg(true);
            setSuccessMsg("Data has been submitted succesfully!");
            setTimeout(() => {
              setShowMsg(false);
            }, 4000);
          },
          (error) => {
            console.log(error.text);
            setShowMsg(true);
            setSuccessMsg("Oops something went wrong. Please retry!");
            setTimeout(() => {
              setShowMsg(false);
            }, 4000);
          }
        );
      e.target.reset();
    }
  };
  useEffect(() => {
    console.log(isChecked);
    if (isChecked === true) {
      setAgree("YES");
    } else if (isChecked === false) {
      setAgree("NO");
    } else {
      setAgree("");
    }
  }, [isChecked]);
  return (
    <div className="bg-black fade-in-text">
      <div className="cursor-default font-akrobatRegular">
        <div className="h-[20px] w-full "></div>

        <Overlay />
        <Sidebar />
        <Hamburger />
        <Header />
        <div className="md:pt-10 lg:pt-20"></div>

        <div className="text-white pt-6">
          <div className="flex flex-col justify-center items-center py-2 md:my-0 ">
            <div className="w-[65%] text-center ">
              <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-akrobatRegular">
                <span>we work to provide</span>
                <br />
                <span>your solution</span>
              </h1>
              <h1 className="font-gillSans text-sm md:text-lg mx-[1rem] sm:mx-[3rem]  text-center flex justify-center items-center mt-8">
                Finding Your Critical Business Priorities should be Simple.
              </h1>
            </div>
            <div className="w-[80%] md:w-[60%] lg:w-[40%]">
              <p className="font-gillSans text-sm md:text-lg text-justify md:text-center flex justify-center items-center mt-8">
                We're here to help you make business decisions that are valuable
                and validated by data. Book an exclusive 30-minute meeting with
                our experts to understand what your immediate and top business
                priorities should be.
              </p>

              <div className="pt-10">
                <form
                  ref={formref}
                  className="font-gillSans"
                  onSubmit={sendData}
                >
                  {showMsg ? (
                    <span className="text-green-400 text-[16px] fade-in-text">
                      {successMsg}
                    </span>
                  ) : (
                    ""
                  )}
                  {validationMsg && (
                    <span className="text-yellow-400 text-[12px] md:text-[16px] fade-in-text ">
                      {validationMsg}
                    </span>
                  )}
                  <input
                    className="placeholder:text-[#575757] bg-black border-b-[#575757] outline-none border-b text-xl w-full py-5 pb-2 focus:border-b-[#a0a0a0] focus:placeholder:text-[#a0a0a0] mb-8"
                    type="text"
                    placeholder="First Name"
                    name="senderFirstName"
                    required
                  />
                  <input
                    className="placeholder:text-[#575757] bg-black border-b-[#575757] outline-none border-b text-xl w-full py-5 pb-2 focus:border-b-[#a0a0a0] focus:placeholder:text-[#a0a0a0] mb-8"
                    type="text"
                    placeholder="Last Name"
                    name="senderLastName"
                    required
                  />
                  <input
                    className="placeholder:text-[#575757] bg-black border-b-[#575757] outline-none border-b text-xl w-full py-5 pb-2 focus:border-b-[#a0a0a0] focus:placeholder:text-[#a0a0a0] mb-8"
                    type="tel"
                    maxLength="10"
                    placeholder="Phone Number"
                    name="senderPhoneNumber"
                    onChange={(event) => {
                      if (isNaN(event.target.value)) {
                        // alert("Must input numbers");
                        setCheckNumber(true);
                        setCheckNumberMsg("Only numbers are allowed!");
                        return false;
                      } else {
                        setCheckNumber(false);
                        setCheckNumberMsg("");
                      }
                    }}
                    required
                  />
                  {checkNumber === true ? (
                    <span className="text-[16px] text-yellow-500 fade-in-text">
                      {checkNumberMsg}
                    </span>
                  ) : (
                    ""
                  )}
                  <input
                    className="placeholder:text-[#575757] bg-black border-b-[#575757] outline-none border-b text-xl w-full py-5 pb-2 focus:border-b-[#a0a0a0] focus:placeholder:text-[#a0a0a0] mb-8"
                    type="email"
                    placeholder="Email ID"
                    name="senderEmail"
                    required
                  />

                  <textarea
                    id=""
                    cols="5"
                    rows="3"
                    placeholder="Note"
                    name="senderNote"
                    required
                    className="placeholder:text-[#575757] bg-black border-b-[#575757] outline-none border-b text-xl w-full py-5 pb-2 focus:border-b-[#a0a0a0] focus:placeholder:text-[#a0a0a0] mb-8"
                  ></textarea>

                  <p className="my-5 md:my-10 font-gillSans text-[12px] md:text-[16px]">
                    Eko Infomatics is committed to protecting and respecting
                    your privacy, and we’ll only use your personal information
                    to administer your account and to provide the products and
                    services you requested from us. From time to time, we would
                    like to contact you about our products and services, as well
                    as other content that may be of interest to you. If you
                    consent to us contacting you for this purpose, please tick
                    below to say how you would like us to contact you:
                  </p>
                  <div className="font-gillSans ">
                    <label className="cursor-pointer text-[12px] md:text-[16px]">
                      <input
                        type="checkbox"
                        name="agree"
                        value={agree}
                        className="cursor-pointer mr-2 md:mr-8"
                        onChange={(event) => {
                          setIsChecked(!isChecked);
                          console.log(isChecked);
                        }}
                        required
                      />
                      I agree to receive other communications from Eko
                      Infomatics
                    </label>
                  </div>
                  <button
                    type="submit"
                    className=" rounded-full w-[70%] sm:w-[60%] md:w-[50%] mx-auto block my-8 bg-[757575] text-white border-[#1ECAFF] border-4  text-xl py-3 hover:bg-[#1ECAFF] hover:text-black transition-all font-semibold tracking-widest active:scale-95 "
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
