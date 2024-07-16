"use client";
import React, { useRef } from "react";
import SliderControl from "./SliderControl";
import CommentCarousel from "./Slider";

const SliderContainer = () => {
  const ref = useRef(null);
  return (
    <>

      <CommentCarousel ref={ref} />
      <SliderControl sliderRef={ref} />
    </>
  );
};

export default SliderContainer;