import Image from "next/image";
import React from "react";
import purpleClove from "../../../public/svg/about/purple-clove.svg";

function PurpleClove() {
  return (
    <Image
      className="w-[61px] md:w-[72px] lg:w-auto"
      src={purpleClove}
      alt=""
    />
  );
}

export default PurpleClove;
