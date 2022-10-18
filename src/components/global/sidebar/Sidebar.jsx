import React from "react";

// State management (recoil js)
import { useRecoilState } from "recoil";
import { SidebarStatusAtom } from "../../../recoil/global/sidebar/SidebarStatusAtom";
import { Nav_links_atom } from "../../../recoil/helper/nav_links/Nav_links_atom";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

// media assets
import arrow from "../../../assets/sidebar/arrow.svg";

const Sidebar = () => {
  //global variables
  const [sidebarIsActive, setSidebarIsActive] =
    useRecoilState(SidebarStatusAtom);
  const [linksData] = useRecoilState(Nav_links_atom);

  return (
    <aside
      className={` ${
        sidebarIsActive ? "w-[70%] md:hidden  ease-in" : "w-[0%] ease-out"
      } bg-white max-w-[999px] text-black transition-all duration-200  fixed right-0 top-0 bottom-0 z-[45] overflow-hidden `}
    >
      <div className="h-[60vh] pt-32 mx-auto text-right flex flex-col justify-around ">
        {linksData?.map((data, index) => {
          return (
            <div className="text-2xl pb-10 px-10 cursor-pointer" key={index}>
              {data?.name === "About Us" ? (
                <Link
                  to="/about_us"
                  className="px-6 lg:px-8 xl:px-10
                   pb-2 text-xl lg:text-2xl flex justify-between items-center gap-10"
                >
                  <img src={arrow} alt="arrow" />
                  <h1 className="tracking-[0.06em] ">{data?.name}</h1>
                </Link>
              ) : (
                <NavHashLink
                  to={`/#${data?.name}`}
                  className="px-6 lg:px-8 xl:px-10
                   pb-2 text-xl lg:text-2xl flex justify-between items-center gap-10"
                >
                  <img src={arrow} alt="arrow" />
                  <h1 className="tracking-[0.06em] ">{data?.name}</h1>
                </NavHashLink>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
