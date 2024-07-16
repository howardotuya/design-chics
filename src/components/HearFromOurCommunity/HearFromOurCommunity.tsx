import React from "react";

import SliderContainer from "./SliderContainer";
import CommentCarousel from "./Slider";

const HearFromOurCommunity = () => {
  return (
    <div className="mx-[10px] py-[100px] bg-yellow-50 overflow-x-hidden rounded-[40px] ">
      <div className="flex-col justify-start items-center gap-[15px] flex">
        <div
          // data-aos="fade-right"
          // data-aos-mirror="true"
          className=" px-10 text-center text-[28px] md:text-[46px] leading-[33px] md:leading-[50.60px] my-10"
        >
          <span className="text-neutral-950  font-bold font-roc-grotesk  tracking-tight">
            Hear from  <span className="text-indigo-400"> our community </span> <br/> about Design Chics
          </span>
        </div>
      </div>
      <CommentCarousel  />
      {/* <SliderContainer /> */}
    </div>
  );
};

export default HearFromOurCommunity;