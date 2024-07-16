"use client";
import React, { useRef } from "react";
import SliderControl from "./SliderControl";
import CommentCarousel from "./Slider";

const SliderContainer = () => {
  const ref = useRef(null);
  return (
    <div className="flex-col justify-start items-center flex">
      <div >
        <CommentCarousel ref={ref} />
      </div>
      <SliderControl ref={ref} />
    </div>
  );
};

export default SliderContainer;