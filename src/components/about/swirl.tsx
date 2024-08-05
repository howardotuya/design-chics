import Image from "next/image";
import React from "react";
import swirl from "../../../public/svg/about/swirl.svg";

function SwirlSVG() {
  return (
    <Image
      className="w-[54px] md:w-[70px] lg:w-auto h-auto"
      src={swirl}
      alt=""
    />
  );
}

export default SwirlSVG;
