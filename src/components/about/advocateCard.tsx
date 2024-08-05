import React from "react";
import asset1 from "../../../public/images/about/advocate1.png";
import asset2 from "../../../public/images/about/advocate2.png";
import asset3 from "../../../public/images/about/advocate3.png";
import asset4 from "../../../public/images/about/advocate4.png";
import asset5 from "../../../public/images/about/advocate5.png";
import asset6 from "../../../public/images/about/advocate6.png";
import asset7 from "../../../public/images/about/advocate7.png";
import Image from "next/image";

const assets = [asset1, asset2, asset3, asset4, asset5, asset6, asset7];

type AdvocateCardProps = {
  index: number;
  name: string;
};

function AdvocateCard({ index, name }: AdvocateCardProps) {
  return (
    <div className="w-[96px] h-[96px] md:w-[180px] md:h-[180px] 2xl:w-[200px] 2xl:h-[200px] pb-4 md:pb-5 lg:pb-6 rounded-full border-[3px] md:border-[5px] lg:border-[6px] border-[#FFFCF5] relative">
      <Image
        className="object-[0_0] object-cover"
        src={assets[index]}
        alt={name}
        fill
      />

      <div className="grid text-center h-full relative">
        <div className="mt-auto ">
          <div className="bg-[#0B0A0A] font-roc-grotesk h-4 md:h-[33px] lg:h-10 w-auto inline-flex flex-col justify-center items-center gap-1 md:gap-0 px-[10px] lg:px-4 py-[6px] rounded-[40px]">
            <h4 className="text-[9px] md:text-[12px] lg:text-[14px] leading-[100%] font-bold">
              {name}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvocateCard;
