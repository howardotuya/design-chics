import Image from "next/image";
import React from "react";

const Inspire = () => {
  return (
    <div className="">
      {/* down arrow */}
      <div className=" flex justify-center my-10 lg:mt-32">
        <Image src="/images/arrowDown.png" alt="" width={77} height={82} />
      </div>
      <div className="container mx-auto grid grid-cols-3 justify-center items-center gap-5 lg:gap-14 px-4">
        <Image
          width={0}
          height={0}
          className="w-full"
          unoptimized={true}
          alt="Mask group"
          src="https://c.animaapp.com/unzonupS/img/mask-group@2x.png"
        />

        <div className="h-full w-full flex items-center justify-center p-5 bg-brandGreen rounded-full font-roc-grotesk font-helvetica text-[20px] md:text-[50px] font-bold tracking-[-0.51px]">
          INSPIRE.
        </div>

        <Image
          width={0}
          height={0}
          className="w-full"
          unoptimized={true}
          alt="Mask group"
          src="https://c.animaapp.com/unzonupS/img/mask-group-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Inspire;
