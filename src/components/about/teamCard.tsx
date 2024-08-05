import React from "react";
import asset1 from "../../../public/images/about/teamMember1.png";
import asset2 from "../../../public/images/about/teamMember2.png";
import asset3 from "../../../public/images/about/teamMember3.png";
import asset4 from "../../../public/images/about/teamMember4.png";
import asset5 from "../../../public/images/about/teamMember5.png";
import asset6 from "../../../public/images/about/teamMember6.png";
import asset7 from "../../../public/images/about/teamMember7.png";
import asset8 from "../../../public/images/about/teamMember8.png";
import Image from "next/image";

const assets = [asset1, asset2, asset3, asset4, asset5, asset6, asset7, asset8];

type TeamCardProps = {
  index: number;
  name: string;
  position: string;
};

function TeamCard({ index, name, position }: TeamCardProps) {
  return (
    <div className="h-[250px] md:h-[270px] xl:h-[299px] bg-[#FDF8E8] w-full rounded-[20px] relative">
      <Image
        className="object-[0_0] object-cover"
        src={assets[index]}
        alt={name}
        fill
      />

      <div className="grid text-center p-[10px] md:p-[20px] xl:py-4 xl:px-[38.5px] h-full relative">
        <div className="bg-[#9291EB] mt-auto w-full flex flex-col gap-1 md:gap-0 py-[6px] rounded-[10px]">
          <h4 className="text-[14px] leading-4 md:text-[16px] md:leading-6 font-bold tracking-[0.5px]">
            {name}
          </h4>
          <h6 className="text-[12px] xl:text-[14px] font-medium leading-[17px] xl:leading-5 text-[#0B0A0AE5]">
            {position}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
