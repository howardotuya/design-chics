import Image from "next/image";
import Link from "next/link";
import React from "react";

const PowerOfCommunity = () => {
  const items = [
    {
      title: "Newbie Designers",
      summary:
        "Start your design journey with us. Access mentorship and resources to launch your career.",
      image: (
        <div className="w-[26px] h-[26px] left-[1px] top-[1px] absolute bg-indigo-400 rounded-full" />
      ),
    },
    {
      title: "Junior Designers",
      summary:
        "Elevate your skills, network and thrive as a junior designer with us.",
      image: (
        <>
          <div className="w-7 h-7 left-0 top-0 absolute rounded-full border border-indigo-400" />
          <div className="w-[22.59px] h-[22.67px] left-[2.70px] top-[2.70px] absolute rounded-full border border-indigo-400" />
          <div className="w-[17.82px] h-[17.82px] left-[5.09px] top-[5.17px] absolute rounded-full border border-indigo-400" />
          <div className="w-[12.81px] h-[12.81px] left-[7.56px] top-[7.64px] absolute rounded-full border border-indigo-400" />
          <div className="w-[7.40px] h-[7.40px] left-[10.26px] top-[10.34px] absolute bg-indigo-400 rounded-full" />
        </>
      ),
    },
    {
      title: "Mid-level Designers",
      summary:
        "Advance your career and refine your craft in our supportive community.",
      image: (
        <>
          {" "}
          <div className="w-3 h-3 left-0 top-0 absolute bg-indigo-400 rounded-full" />
          <div className="w-3 h-3 left-[8px] top-0 absolute bg-indigo-400 rounded-full" />
          <div className="w-3 h-3 left-[16px] top-0 absolute bg-indigo-400 rounded-full" />
        </>
      ),
    },
    {
      title: "Senior Designers",
      summary:
        "Leverage your expertise, mentor and connect with experienced peers in our design network.",
      image: (
        <>
          <div className="w-[15px] h-[15px] left-0 top-0 absolute bg-indigo-400 rounded-full" />
          <div className="w-[15px] h-[15px] left-[11px] top-0 absolute bg-indigo-400 rounded-full" />
          <div className="w-[15px] h-[15px] left-0 top-[11px] absolute bg-indigo-400 rounded-full" />
          <div className="w-[15px] h-[15px] left-[11px] top-[11px] absolute bg-indigo-400 rounded-full" />
        </>
      ),
    },
  ];
  return (
    <div className="my-14 md:my-20 lg:my-40 px-0 flex justify-center">
      <div className="px-[24px] max-w-[1440px] gap-10 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <div className="relative inline-flex flex-col items-center md:items-start gap-[10px] flex-[0_0_auto]">
            <p
              //data-aos="fade-in"
              //data-aos-mirror="true"
              className="relative text-transparent mx-auto lg:mx-0 font-roc-grotesk text-center lg:text-left font-helvetica text-[28px] md:text-[40px] lg:text-[46px] font-bold tracking-[0.02px] leading-[33px] md:leading-[44px] lg:leading-[50.6px] mt-[-0.99px] md:w-[427px]"
            >
              <span className="text-[#fffcf5e6] tracking-[0.01px]">
                The power of a <span className="text-brandPurple">community</span> rooting for each other
              </span>
            </p>
            <p
              //data-aos-delay="100"
              //data-aos="fade-in"
              //data-aos-mirror="true"
              className="relative text-center lg:text-left mx-auto lg:mx-0 text-[#bababa] font-karla font-helvetica text-[16px] font-normal leading-[24px] tracking-[0] "
            >
              We are empowering women through collaboration and <br />{" "}
              creativity. Different phases in your career?
            </p>
          </div>
          <Link href="https://forms.gle/hCViiZDn59eQ5X9r7" target="_blank"
            //data-aos-delay="200"
            //data-aos="fade-in"
            //data-aos-mirror="true"
            className="to-blue mx-auto lg:mx-0 relative flex items-center justify-center gap-[8.25px] bg-brandPurple rounded-[515.61px] box-border p-[18px_16px] w-[280px] flex-[0_0_auto] all-unset"
          >
            <div className="text relative text-black font-roc-grotesk  font-helvetica text-[16px] font-bold tracking-[0] mt-[-1.03px] w-fit">
              JOIN THE COMMUNITY
            </div>
          </Link>
        </div>
        <div
          //data-aos-delay="400"
          //data-aos="fade-right"
          //data-aos-mirror="true"
          className="relative w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-8 mt-10 lg:mt-0"
        >
          <Image
            className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={"/images/circlebg.svg"}
            alt=""
            width={517}
            height={517}
          />
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full relative inline-flex flex-col gap-y-10 bg-[#0E0D0D] border-2 border-[#191818] p-5 rounded-[20px]"
            >
              <div className="inline-flex flex-none flex-col gap-y-2 relative">
                <div className="flex items-center h-12 w-28">
                  <div className="w-7 h-7 relative">{item.image}</div>
                </div>
                <div className="relative inline-flex flex-col gap-y-5">
                  <div className="relative text-[var(--x-2)] font-roc-grotesk font-helvetica text-[20px] font-bold tracking-[0] leading-[26px] mt-[-1px] whitespace-nowrap">
                    {item.title}
                  </div>
                  <p className="relative text-[#FFFCF5] font-karla font-helvetica text-[16px] font-normal leading-[22.4px] h-78">
                    {item.summary}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PowerOfCommunity;
