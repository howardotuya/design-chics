import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="space-y-5 max-w-4xl mx-auto px-5 relative mb-28 lg:mb-0">
      <div
        className="relative flex justify-center mt-10 mb-20 md:my-0 lg:my-0"
      //data-aos="fade-up"
      //data-aos-mirror="true"
      >
        <div className="bg-[#FDF8E8] rounded-full min-h-16 w-16 md:h-20 md:w-20 relative -right-5" />
        <div className="bg-[#FDF8E8] rounded-full min-h-16 w-16 md:h-20 md:w-20 relative" />
        <div className="bg-[#FDF8E8] rounded-full min-h-16 w-16 md:h-20 md:w-20 relative -left-5" />
        <p className="absolute z-10 text-black font-bold md:text-lg top-[35%]">
          750+ MEMBERS
        </p>
      </div>
      <h1
        //data-aos-delay="100"
        //data-aos="fade-up"
        //data-aos-mirror="true"
        className="text-[43px] md:text-[86px] font-black font-roc-grotesk text-center leading-tight md:leading-[94.60px]"
      >
        Don't go on your <br className="hidden sm:block" />
        <span className="text-brandBlue">design journey</span> alone
      </h1>
      <p
        className="font-karla text-lg md:text-2xl text-center text-[#BABABA]"
      //data-aos-delay="150"
      //data-aos="fade-up"
      //data-aos-mirror="true"
      >
        We are providing African women in design with the resources and
        opportunities they need to grow and reach their full potential.
      </p>

      <div
        //data-aos-delay="250"
        //data-aos="zoom-in"
        //data-aos-mirror="true"
        className="absolute top-14 right-44 md:top-0 lg:top-32 lg:right-0"
      >
        <div className="absolute top-3 left-6  bg-brandPurple rounded-full inline-flex items-center justify-center gap-2.5 px-5 py-2">
          <div className="relative  text-white font-karla font-helvetica text-xs font-bold leading-5 tracking-normal whitespace-nowrap">
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

      <div className="h-[62px] left-72 lg:left-40 absolute transform -rotate-180">
        <div className="absolute top-0 left-8 bg-brandGreen rounded-full inline-flex items-center justify-center gap-[11.28px] px-5 py-2">
          <p className="relative text-[#fffcf5] font-karla font-helvetica text-xs font-bold leading-[22.4px] mt-[-2.82px] whitespace-nowrap transform rotate-180 w-fit">
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
