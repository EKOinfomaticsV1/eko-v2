import React, { useEffect } from "react";

// State management (recoil js)
import { useRecoilState } from "recoil";
import { SidebarStatusAtom } from "../../../recoil/global/sidebar/SidebarStatusAtom";

const Hamburger = () => {
  //global variables
  const [sidebarIsActive, setSidebarIsActive] =
    useRecoilState(SidebarStatusAtom);

  // useEffect(() => {
  //   console.log("Checking side bar is active", sidebarIsActive);
  // }, [sidebarIsActive]);

  return (
    <div
      onClick={() => setSidebarIsActive(!sidebarIsActive)}
      className=" fixed z-50 top-8 right-8 w-[35px] h-[25px] flex flex-col justify-between items-center cursor-pointer md:hidden"
    >
      <div
        className={` ${
          sidebarIsActive
            ? "rotate-45 translate-y-[10px] ease-in h-[2px] bg-black"
            : "rotate-0 translate-y-0  ease-out bg-white"
        }  h-[2px] w-full transition-all`}
      ></div>
      <div
        className={` ${
          sidebarIsActive ? "hidden ease-out" : "ease-in bg-white"
        }  h-[2px] w-full transition-all`}
      ></div>
      <div
        className={` ${
          sidebarIsActive
            ? "-rotate-45 -translate-y-[13px] ease-in h-[2px] bg-black"
            : "rotate-0 translate-y-0  ease-out bg-white"
        }  h-[2px] w-full transition-all`}
      ></div>
    </div>
  );
};

export default Hamburger;
