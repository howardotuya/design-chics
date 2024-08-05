import Image from "next/image";
import React from "react";
import greenClove from "../../../public/svg/about/green-clove.svg";

function GreenClove() {
  return (
    <Image className="w-[61px] md:w-[72px] lg:w-auto" src={greenClove} alt="" />
  );
}

export default GreenClove;
