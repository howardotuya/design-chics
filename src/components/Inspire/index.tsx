import Image from "next/image";
import React from "react";

const Inspire = () => {
  return (
    <div className="">
      {/* down arrow */}
      <div className=" flex justify-center my-10 lg:mt-32">
        <Image src="/images/arrowDown.png" alt="" width={77} height={82} />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-14">
        <div className="relative w-[200px] h-[200px] lg:h-[298px] lg:w-[306px]">
          <Image
            fill={true}
            alt="Mask group"
            src="https://c.animaapp.com/unzonupS/img/mask-group@2x.png"
          />
        </div>
        <div className="relative w-[200px] h-[200px] xl:h-[306px] xl:w-[306px] flex items-center justify-center p-5 bg-brandGreen rounded-full overflow-hidden">
          <div className="font-roc-grotesk font-helvetica text-[50px] font-bold tracking-[-0.51px] leading-[43.5px] text-center whitespace-nowrap">
            INSPIRE.
          </div>
        </div>
        <div className="relative w-[200px] h-[200px]   lg:h-[298px] lg:w-[306px]">
          <Image
            fill={true}
            alt="Mask group"
            src="https://c.animaapp.com/unzonupS/img/mask-group-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Inspire;
