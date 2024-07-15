import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (

    <div className="container mx-auto left-[-1px] flex flex-col items-center gap-10 bg-brandblack p-[100px_0_150px] max-w-[1440px] px-10">
      <div className="relative inline-flex flex-col items-center gap-[15px]">
        <p
          //data-aos-delay="100"
          //data-aos="fade-up"
          //data-aos-mirror="true"
          className="relative text-transparent font-roc-grotesk text-[46px] font-bold tracking-[0.02px] leading-[50.6px] -mt-[1px] text-center"
        >
          <span className="text-[#fffcf5e6]">Brands we've </span>
          <span className="text-[#9adbe5] tracking-[0.01px]">partnered</span>
          <span className="text-[#fffcf5e6]"> with</span>
        </p>
      </div>
      {/* <div
        //data-aos-delay="200"
        //data-aos="fade-up"
        //data-aos-mirror="true"
        className="relative flex  animate-infinite-scroll space-x-5 overflow-x-hidden"
      > */}
      <Marquee autoFill gradientWidth={"200px"} speed={70} gradientColor="rgb(248,251,253)" >
        <div className="relative flex items-center justify-center bg-[#fdf8e8] rounded-[60px] mx-[12.5px]  gap-[8px]   overflow-hidden p-[20px_30px] w-[100px] md:w-[150px] h-[50px] md:h-[60px]">
          <Image
            width={84.59}
            height={24}
            className="relative object-cover "
            alt="Propel logo black"
            src="https://c.animaapp.com/unzonupS/img/propel-logo-black-1@2x.png"
          />
        </div>
        <div className="relative flex items-center justify-center bg-[#fdf8e8] rounded-[60px] mx-[12.5px]  gap-[8px]   overflow-hidden p-[20px_30px] w-[100px] md:w-[150px] h-[50px] md:h-[60px]">
          <Image
            className="relative "
            height={60}
            width={150}
            alt="Frame"
            src="https://c.animaapp.com/unzonupS/img/frame-316124718.svg"
          />
        </div>

        <div className="relative flex items-center justify-center bg-[#fdf8e8] rounded-[60px] mx-[12.5px]  gap-[8px]   overflow-hidden p-[20px_30px] w-[100px] md:w-[150px] h-[50px] md:h-[60px]">
          <Image
            className="relative object-cover "
            alt="Learnable dark"
            src="https://c.animaapp.com/unzonupS/img/learnable-dark-2@2x.png"
            width={38.27}
            height={24}
          />
        </div>
        <div className="relative flex items-center justify-center bg-[#fdf8e8] rounded-[60px] mx-[12.5px]  gap-[8px]   overflow-hidden p-[20px_30px] w-[100px] md:w-[150px] h-[50px] md:h-[60px]">
          <Image
            width={56}
            height={56}
            className="relative object-cover  mt-[-13px] mb-[-13px]"
            alt="Image"
            src="https://c.animaapp.com/unzonupS/img/image-1521@2x.png"
          />
        </div>
        <div className="relative flex items-center justify-center bg-[#fdf8e8] rounded-[60px] mx-[12.5px]  gap-[8px]   overflow-hidden p-[20px_30px] w-[100px] md:w-[150px] h-[50px] md:h-[60px]">
          <Image
            className="relative object-cover "
            alt="Logo copy"
            src="https://c.animaapp.com/unzonupS/img/logo-copy--1--1@2x.png"
            width={77.47}
            height={24}
          />
        </div>
        <div className="relative flex items-center justify-center bg-[#fdf8e8] rounded-[60px] mx-[12.5px]  gap-[8px]   overflow-hidden p-[20px_30px] w-[100px] md:w-[150px] h-[50px] md:h-[60px]">
          <Image
            className="relative object-cover  mx-[-11.47px]"
            alt="Image"
            src="https://c.animaapp.com/unzonupS/img/image-1520@2x.png"
            width={112.94}
            height={24}
          />
        </div>
        {/* </div> */}
      </Marquee>
    </div>
  );
};

export default Brands;
