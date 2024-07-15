import Image from "next/image";
import React from "react";

const Inspire = () => {
  return (
    <div className="">
      {/* down arrow */}
      <div
        //data-aos-delay="250"
        //data-aos="slide-down"
        //data-aos-mirror="true"
        className=" flex justify-center  mt-10 mb-4 md:mt-32"
      >
        <div className="relative w-[40px] h-[40px] md:w-[77px] md:h-[82px]">
          <Image src="/images/arrowDown.png" alt="" fill={true} />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-3 justify-center items-center gap-5 lg:gap-14 px-4">
        <Image
          //data-aos-delay="600"
          //data-aos="fade-left"
          //data-aos-mirror="true"
          width={0}
          height={0}
          className="w-full"
          unoptimized={true}
          alt="Mask group"
          src="https://c.animaapp.com/unzonupS/img/mask-group@2x.png"
        />

        <div
          //data-aos-delay="350"
          //data-aos="fade-in"
          //data-aos-mirror="true"
          className="h-full relative z-10 w-full flex items-center justify-center p-5 bg-brandGreen rounded-full font-roc-grotesk font-helvetica text-[20px] md:text-[50px] font-bold tracking-[-0.51px]"
        >
          INSPIRE.
        </div>

        <Image
          //data-aos-delay="600"
          //data-aos="fade-right"
          //data-aos-mirror="true"
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
