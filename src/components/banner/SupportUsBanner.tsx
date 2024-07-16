import React from "react";

import Image from "next/image";

const SupportUsBanner = () => {
  return (
    <div className=" flex flex-col items-center gap-[60px] bg-brandblack pt-[40px] lg:pt-[60px]">
      <div className="relative inline-flex flex-col items-center gap-[30px] px-10">
        <div className="relative inline-flex flex-col items-center gap-[15px]">
          <div className="relative text-[#fffcf5] font-roc-grotesk text-[40px] lg:text-[46px] font-bold tracking-[0.02px] leading-[50.6px] -mt-[1px] text-center lg:w-[589px]">
            Like to support us?
          </div>
          <p className="relative text-[#fffcf5] font-karla text-[18px] lg:text-[20px] font-normal leading-[28px] text-center lg:w-[584px]">
            Support Design Chics Community to help us reach more African women
            in Design and invest in empowering more women.
          </p>
        </div>
        <div className="relative flex flex-col sm:flex-row justify-center items-start gap-[30px] w-full">
          <button className="to-blue relative border-2 border-[#9adbe5] rounded-full px-[18px] py-[16px] w-full lg:w-[280px]">
            <span className="text relative text-[#9adbe5] font-roc-grotesk text-[16px] font-bold">
              DONATE
            </span>
          </button>
          <button className="to-purple bg-[#9adbe5] text-black rounded-full box-border gap-[8.25px] p-[18px_16px] relative w-full lg:w-[280px]">
            <span className="text relative   font-roc-grotesk text-[16px] font-bold leading-normal w-fit">
              BECOME A PARTNER
            </span>
          </button>
        </div>
      </div>

      <div className="w-full relative">
        <div className=" absolute bottom-[10%] right-0 md:bottom-[30%] md:right-[7%] lg:bottom-[38%] lg:right-[6%] h-[65px] w-[235px]">
          <div className="relative h-60 top-5">
            <div className="absolute top-[12px] left-[21px] inline-flex items-center justify-center gap-[11.28px] bg-brandPurple rounded-[1409.88px] p-[5px_20px] lg:p-[14px_20px]">
              <p className="relative mt-[-2.82px] text-[#fffcf5] font-karla text-xs md:text-[14px] font-bold leading-[19.6px] whitespace-nowrap w-fit">
                You’re the lady for the job!
              </p>
            </div>
            <Image
              className="absolute left-0 top-0"
              height={22}
              width={22}
              alt="Vector"
              src="https://c.animaapp.com/unzonupS/img/vector-2.svg"
            />
          </div>
        </div>

        <div className=" absolute  top-[38%] left-[9%] md:top-[30%] md:left-[14%] h-[67px] w-[149px] transform rotate-180">
          <div className="h-[62px] relative">
            <div className="absolute top-0 left-[21px] inline-flex items-center justify-center gap-[11.28px] bg-[#9adbe5] rounded-[1409.88px]  p-[5px_20px] lg:p-[14px_20px]">
              <div className="relative text-brandblack font-karla text-xs md:text-[14px] font-bold leading-[22.4px] -mt-[2.82px] transform rotate-180 whitespace-nowrap">
                You GO girl!
              </div>
            </div>
            <Image
              className="absolute left-0 top-[40px] rotate-180"
              height={22}
              width={22}
              alt="Vector"
              src="https://c.animaapp.com/unzonupS/img/vector-3.svg"
            />
          </div>
        </div>
        <Image
          unoptimized
          width={0}
          height={0}
          className="w-full"
          alt="Vector"
          src="/images/happy-ladies.png"
        />
      </div>
    </div>
  );
};

export default SupportUsBanner;
