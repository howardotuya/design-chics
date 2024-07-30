import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <div className="space-y-5 max-w-[1014px] mx-auto p-5 relative mb-28 lg:mb-0  ">
            <div
                className="relative flex justify-center mt-2 mb-0 md:my-0 lg:my-0 "
                data-aos="fade-up"
                data-aos-mirror="true"
            >
                <div className="bg-[#FDF8E8] rounded-full h-[48px] w-[48px] md:h-20 md:w-20 relative -right-5" />
                <div className="bg-[#FDF8E8] rounded-full h-[48px] w-[48px] md:h-20 md:w-20 relative" />
                <div className="bg-[#FDF8E8] rounded-full h-[48px] w-[48px] md:h-20 md:w-20 relative -left-5" />
                <p className="absolute z-10 text-black text-xs font-bold md:text-lg top-[35%]">
                    conversations
                </p>
            </div>
            <h1
                data-aos-delay="100"
                data-aos="fade-up"
                data-aos-mirror="true"
                className="text-[#FDF8E8] text-[36px] md:text-[66px] lg:text-[86px] font-black font-roc-grotesk text-center leading-tight md:leading-[94.60px]"
            >
                Design Chics
                <span className="text-brandBlue"> Events</span>
            </h1>
            <p
                className="font-karla text-[16px] md:text-2xl text-center text-[#BABABA]"
                data-aos-delay="150"
                data-aos="fade-up"
                data-aos-mirror="true"
            >
                Join our lively sessions, where we invite leading female designers to share their insights on various captivating topics. Engage in meaningful conversations, ask questions, and gain wisdom from industry experts.
            </p>

            <div
                data-aos-delay="250"
                data-aos="zoom-in"
                data-aos-mirror="true"
                // className="absolute  right-44 md:top-[10%] md:right-[25%] xl:top-32 xl:right-0"
                className="absolute -bottom-4 right-[45%] md:right-[25%] lg:right-56"
            >
                <div className="absolute top-3 left-6  bg-brandPurple rounded-full inline-flex items-center justify-center gap-2.5 px-5 py-2 md:py-3">
                    <div className="relative  text-white font-karla font-helvetica text-xs lg:text-[14px] font-bold leading-5 tracking-normal whitespace-nowrap">
                        Let’s learn together
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

            <div className=" h-[37px] md:h-[62px] -top-8 md:-top-4 left-[35%] md:left-[25%] xl:left-[10%]  absolute transform -rotate-180">
                <div className="absolute top-0 left-8 bg-brandGreen rounded-full inline-flex items-center justify-center gap-[11.28px] px-5 py-2 md:py-3">
                    <p className="relative text-[#fffcf5] font-karla font-helvetica text-xs lg:text-[14px] font-bold leading-[22.4px] mt-[-2.82px] whitespace-nowrap transform rotate-180 w-fit">
                        Stay curious!
                    </p>
                </div>
                <Image
                    className="relative bottom-[0px] md:bottom-[10px] right-0  transform   -rotate-90"
                    width={22}
                    height={22}
                    alt="Vector"
                    src="https://c.animaapp.com/unzonupS/img/vector-1.svg"
                />
            </div>

            <div className="grid grid-cols-2 w-[55px] h-[54px] mx-auto -gap-10  absolute -bottom-[40%] md:-bottom-[20%] left-1/2 transform -translate-x-1/2">
                <div className="w-[30px] h-[30px] left-0 top-0 absolute bg-brandBlue rounded-full" />
                <div className="w-[30px] h-[30px] left-[24px] top-0 absolute bg-brandBlue rounded-full" />
                <div className="w-[30px] h-[30px] left-0 top-[24px] absolute bg-brandBlue rounded-full" />
                <div className="w-[30px] h-[30px] left-[24px] top-[24px] absolute bg-brandBlue rounded-full" />
            </div>
        </div>
    );
};

export default Hero;
