import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="space-y-5 max-w-4xl mx-auto px-5 relative">
      <div className="relative flex justify-center">
        <div className="bg-white rounded-full min-h-20 w-20 relative -right-5" />
        <div className="bg-white rounded-full min-h-20 w-20 relative" />
        <div className="bg-white rounded-full min-h-20 w-20 relative -left-5" />
        <p className="absolute z-10 text-black font-bold text-lg top-[35%]">
          750+ MEMBERS
        </p>
      </div>
      <h1 className="text-[43px] md:text-[86px] font-bold font-roc-grotesk text-center leading-tight md:leading-[94.60px]">
        Don't go on your <br className="hidden sm:block" />
        <span className="text-brandBlue">design journey</span> alone
      </h1>
      <p
        className="text-lg md:text-2xl text-center text-[#BABABA
]"
      >
        We are providing African women in design with the resources and
        opportunities they need to grow and reach their full potential.
      </p>

      <div className="absolute hidden lg:block top-32 right-0">
        <div className="absolute top-3 left-6  bg-brandPurple rounded-full inline-flex items-center justify-center gap-2.5 px-5 py-3">
          <div className="relative  text-white font-karla font-helvetica text-sm font-bold leading-5 tracking-normal whitespace-nowrap">
            Design boldly, girl!
          </div>
        </div>
        <Image
          className="relative top-0 left-0 "
          width={20}
          height={70}
          alt="Vector"
          src="https://c.animaapp.com/unzonupS/img/vector.svg"
        />
      </div>

      <div className="h-[62px] left-40 absolute transform -rotate-180 hidden lg:block">
        <div className="absolute top-0 left-8 bg-brandGreen rounded-full inline-flex items-center justify-center gap-[11.28px] px-5 py-3">
          <p className="relative text-[#fffcf5] font-karla font-helvetica text-lg font-bold leading-[22.4px] mt-[-2.82px] whitespace-nowrap transform rotate-180 w-fit">
            You can shape the world with your designs
          </p>
        </div>
        <Image
          className="relative top-[40px] left-0  transform -rotate-180"
          width={22}
          height={22}
          alt="Vector"
          src="https://c.animaapp.com/unzonupS/img/vector-1.svg"
        />
      </div>
    </div>
  );
};

export default Hero;
