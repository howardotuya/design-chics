import React from "react";

import SliderContainer from "./SliderContainer";

const HearFromOurCommunity = () => {
  return (
    <div className="mx-[10px] py-[100px] bg-yellow-50 overflow-x-hidden rounded-[40px] ">
      <div className="flex-col justify-start items-center gap-[15px] flex">
        <div
          // data-aos="fade-right"
          // data-aos-mirror="true"
          className=" text-center text-[28px] md:text-[46px] leading-tight md:leading-[50.60px] my-10"
        >
          <span className="text-neutral-950  font-bold font-roc-grotesk  tracking-tight">
            Hear from{" "}
          </span>
          <span className="text-indigo-400 font-bold font-roc-grotesk tracking-tight">
            our community
          </span>
          <br />
          <span className="text-neutral-950 font-bold font-roc-grotesk tracking-tight">
            {" "}
            about Design Chics
          </span>
        </div>
      </div>
      <SliderContainer />
    </div>
  );
};

export default HearFromOurCommunity;