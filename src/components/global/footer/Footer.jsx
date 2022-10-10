import React, { useRef } from "react";

// assets
import logo from "../../../assets/footer/full_logo.svg";
import fb from "../../../assets/footer/fb.svg";
import insta from "../../../assets/footer/insta.svg";
import twitter from "../../../assets/footer/twitter.svg";
import linkedin from "../../../assets/footer/linkedin.svg";

const Footer = () => {
  const formref = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    e.target.reset();

    // if (
    //   e?.target[0]?.value?.length > 0 &&
    //   e?.target[1]?.value?.length > 0 &&
    //   e?.target[2]?.value?.length > 0
    // ) {
    //   emailjs
    //     .sendForm(
    //       "service_i98uhfi", //service ID
    //       "template_ngmv1yx", //template ID
    //       formRef.current,
    //       "i-gSOvJ1W1yFXTqfC" //public key
    //     )
    //     .then(
    //       (result) => {
    //         if (result?.status === 200) {
    //           props?.setSuccess(true);
    //           setTimeout(() => {
    //             props?.setSuccess(false);
    //           }, 5000);
    //         }
    //         e.target.reset();
    //       },
    //       (error) => {
    //         props?.setError(true);
    //         setTimeout(() => {
    //           props?.setError(false);
    //         }, 5000);
    //       }
    //     );
    // }
  };
  return (
    <footer className="bg-[#000000] text-white py-10 md:pt-16 lg:pt-24 font-gillSans pb-32">
      <div className="w-[80%] mx-auto flex flex-col gap-16 md:flex-row justify-between">
        <div className="flex-1">
          <img
            src={logo}
            alt="logo"
            className="w-[70%] sm:w-[60% max-w-[300px]"
          />
          <div className="pb-10 mt-10">
            <h1 className="text-xl ">INDIA</h1>
            <p className="mt-5 text-gray-300 text-base sm:w-[60%] lg:w-[50%] max-w-[350px]">
              No.76, 7th A cross, 4th B Block, Koramangala, Bangalore, Karnataka
              560034.
            </p>
          </div>

          <div className="pb-10 ">
            <h1 className="text-xl ">USA</h1>
            <p className="mt-5 text-gray-300 text-base sm:w-[60%] lg:w-[50%] max-w-[350px]">
              EKO INFOMATICS SOLUTIONS INC. 171 Sylvan St Rutherford NJ
              07070-2433 US
            </p>
          </div>

          {/* social medias */}
          <div className=" grid grid-cols-4 items-center justify-center justify-items-center gap-5 md:gap-2 md:items-start md:justify-start md:justify-items-start max-w-[400px]">
            <button className="active:scale-95 transition-all">
              <img
                src={fb}
                alt="fb"
                className="w-full aspect-square max-w-[70px]"
              />
            </button>

            <button className="active:scale-95 transition-all">
              <img
                src={insta}
                alt="insta"
                className="w-full aspect-square max-w-[70px]"
              />
            </button>

            <button className="active:scale-95 transition-all">
              <img
                src={linkedin}
                alt="linkedin"
                className="w-full aspect-square max-w-[70px]"
              />
            </button>

            <button className="active:scale-95 transition-all">
              <img
                src={twitter}
                alt="twitter"
                className="w-full aspect-square max-w-[70px]"
              />
            </button>
          </div>
        </div>

        {/* form */}
        <div className="font-akrobatRegular flex-1">
          <div className="w-full md:w-[80%] mx-auto max-w-[500px]">
            <h1 className="bg-gradient-to-r from-[#0085FE] to-[#29E5FF] text-3xl font-semibold tracking-widest text-transparent bg-clip-text text-center">
              TALK TO OUR EXPERTS
            </h1>

            <form ref={formref} className="pt-10" onSubmit={submitHandler}>
              <input
                className="placeholder:text-[#575757] bg-black border-b-[#575757] outline-none border-b text-xl w-full py-5 pb-2 focus:border-b-[#a0a0a0] focus:placeholder:text-[#a0a0a0] mb-8"
                type="text"
                placeholder="Name"
              />

              <input
                className="placeholder:text-[#575757] bg-black border-b-[#575757] outline-none border-b text-xl w-full py-5 pb-2 focus:border-b-[#a0a0a0] focus:placeholder:text-[#a0a0a0] mb-8"
                type="email"
                placeholder="Email"
              />
              <input
                className="placeholder:text-[#575757] bg-black border-b-[#575757] outline-none border-b text-xl w-full py-5 pb-2 focus:border-b-[#a0a0a0] focus:placeholder:text-[#a0a0a0] mb-8"
                type="tel"
                placeholder="Phone Number"
              />

              <textarea
                name=""
                id=""
                cols="10"
                rows="5"
                placeholder="Message"
                className="placeholder:text-[#575757] bg-black border-b-[#575757] outline-none border-b text-xl w-full py-5 pb-2 focus:border-b-[#a0a0a0] focus:placeholder:text-[#a0a0a0] mb-8"
              ></textarea>

              <button
                type="submit"
                className=" rounded-full w-[50%] mx-auto block mt-8 bg-[757575] text-white border-[#1ECAFF] border-4  text-xl py-3 hover:bg-[#1ECAFF] hover:text-black transition-all font-semibold tracking-widest active:scale-95 transition-all"
              >
                GET STARTED
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
