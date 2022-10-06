import React from "react";

// State management (recoil js)
import { useRecoilState } from "recoil";
import { SidebarStatusAtom } from "../../../recoil/global/sidebar/SidebarStatusAtom";

const Overlay = () => {
  //global variables
  const [sidebarIsActive, setSidebarIsActive] =
    useRecoilState(SidebarStatusAtom);

  return (
    <div
      className={` ${
        sidebarIsActive ? "block ease-in" : "hidden ease-out"
      } fixed top-0 bottom-0 right-0 left-0 bg-[#00000067] z-[44] transition-all duration-200`}
    ></div>
  );
};

export default Overlay;
