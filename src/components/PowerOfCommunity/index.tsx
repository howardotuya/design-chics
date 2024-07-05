import Image from "next/image";
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
    <div className="my-10 lg:my-40 px-6">
      <div className="container gap-10 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <div className="relative inline-flex flex-col items-start gap-[10px] flex-[0_0_auto]">
            <p className="relative text-transparent font-roc-grotesk  font-helvetica text-[40px] lg:text-[46px] font-bold tracking-[0.02px] leading-[50.6px] mt-[-0.99px] md:w-[427px]">
              <span className="text-[#fffcf5e6] tracking-[0.01px]">
                The power of a{" "}
              </span>
              <span className="text-brandPurple tracking-[0.01px]">
                community
              </span>
              <span className="text-[#fffcf5e6] tracking-[0.01px]">
                {" "}
                rooting for each other
              </span>
            </p>
            <p className="relative text-[#bababa] font-karla font-helvetica text-[20px] font-normal leading-[28px] tracking-[0] ">
              We are empowering women through collaboration and <br />{" "}
              creativity. Different phases in your career?
            </p>
          </div>
          <button className="relative flex items-center justify-center gap-[8.25px] bg-brandPurple rounded-[515.61px] box-border p-[18px_16px] w-[280px] flex-[0_0_auto] all-unset">
            <div className="relative text-black font-roc-grotesk  font-helvetica text-[16px] font-bold tracking-[0] mt-[-1.03px] w-fit">
              JOIN THE COMMUNITY
            </div>
          </button>
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-14 mt-10 lg:mt-0">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full relative inline-flex flex-col gap-y-10 "
            >
              <div className="inline-flex flex-none flex-col gap-y-2 relative">
                <div className="flex items-center h-12 w-28">
                  <div className="w-7 h-7 relative">{item.image}</div>
                </div>
                <div className="relative inline-flex flex-col gap-y-5">
                  <div className="relative text-[var(--x-2)] font-roc-grotesk font-helvetica text-[20px] font-bold tracking-[0] leading-[26px] mt-[-1px] whitespace-nowrap">
                    {item.title}
                  </div>
                  <p className="relative text-[#fffcf5e6] font-karla font-helvetica text-[16px] font-normal leading-[22.4px] h-78">
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
