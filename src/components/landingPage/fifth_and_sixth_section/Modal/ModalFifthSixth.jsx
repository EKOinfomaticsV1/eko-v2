import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const ModalFifthSixth = ({
  onOpenModal,
  onCloseModal,
  open,
  setOpen,
  data,
  image,
}) => {
  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      // style=" fill:#000000;"
      fill="#000000"
    >
      <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
    </svg>
    // <svg
    //   fill="currentColor"
    //   viewBox="0 0 20 20"
    //   width={28}
    //   height={28}
    //   className="m-5"
    // >
    //   <path
    //     fillRule="evenodd"
    //     d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
    //     clipRule="evenodd"
    //   ></path>
    // </svg>
  );
  return (
    <>
      {/* <div className="bg-black"> */}
      <div className="">
        <Modal
          open={open}
          onClose={onCloseModal}
          hideModalContentWhileAnimating={true}
          center
          classNames={{
            overlay: "customOverlay",
            modal: "customModal",
          }}
          // closeIcon={closeIcon}
          showCloseIcon={false}
        >
          <div className="bg-[#061137] border-[#0074E5] border border-opacity-50 bg-opacity-90 p-10 rounded">
            <div className="flex flex-col justify-center items-center w-full">
              <div className="py-10">
                <h1 className="text-[48px]">{data.title}</h1>
              </div>
              <div className="mb-8">
                <img
                  src={image}
                  alt="Retail"
                  className="w-sm md:w-md lg:w-[20rem]"
                />
              </div>
              <div className="flex flex-col justify-center items-center w-[85%]">
                {data.para1 || data.para2 ? (
                  <div>
                    <p className="text-center">{data.para1}</p>
                    <p className="text-center py-5">{data.para2}</p>
                  </div>
                ) : (
                  ""
                )}

                {data.para3 ? (
                  <div className="flex flex-col justify-center items-center w-[1200px]">
                    <div className="flex justify-center items-center gap-2">
                      <div>
                        <div className="w-[0.5rem] h-[0.5rem] bg-white rounded"></div>
                      </div>
                      <div>{data?.para3?.l1}</div>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <div className="w-[0.5rem] h-[0.5rem] bg-white rounded"></div>
                      <div>{data?.para3?.l2}</div>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <div className="w-[0.5rem] h-[0.5rem] bg-white rounded"></div>
                      <div>{data?.para3?.l3}</div>
                    </div>
                    {data?.para3?.l4 ? (
                      <>
                        <div className="flex justify-center items-center gap-2">
                          <div className="w-[0.5rem] h-[0.5rem] bg-white rounded"></div>
                          <div>{data?.para3?.l4}</div>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                          <div className="w-[0.5rem] h-[0.5rem] bg-white rounded"></div>
                          <div>{data?.para3?.l5}</div>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ModalFifthSixth;
