import React from "react";

import SliderContainer from "./SliderContainer";

const HearFromOurCommunity = () => {
  return (
    <div className="mx-[10px] py-[50px] md:py-[100px] bg-yellow-50 overflow-hidden rounded-[40px] ">
      <div className="flex-col justify-start items-center gap-[15px] flex">
        <div
          // data-aos="fade-right"
          // data-aos-mirror="true"
          className=" px-10 text-center text-[28px] md:text-[46px] leading-[30px] md:leading-[50.60px] my-10"
        >
          <span className="text-neutral-950  font-bold font-roc-grotesk  tracking-tight">
            Hear from  <span className="text-indigo-400"> our community </span> <br /> about Design Chics
          </span>
        </div>
      </div>
      <SliderContainer />
    </div>
  );
};

export default HearFromOurCommunity;