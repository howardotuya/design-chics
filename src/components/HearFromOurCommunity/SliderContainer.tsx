"use client";
import React, { useRef } from "react";
import SliderControl from "./SliderControl";
import CommentCarousel from "./Slider";

const SliderContainer = () => {
  const ref = useRef(null);
  return (
    <div>
      <div >
        <CommentCarousel ref={ref} />
      </div>
      <div>
        <SliderControl sliderRef={ref} />
      </div>
    </div>
  );
};

export default SliderContainer;