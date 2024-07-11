import Image from "next/image";
import React from "react";

const WhyDesignChick = () => {
  const items = [
    {
      title: "Job opportunities",
      summary:
        "Get access to shared job openings for designers of every level.",
      icon: "https://c.animaapp.com/unzonupS/img/fi-3357526.svg",
    },
    {
      title: "Mentorship programs",
      summary:
        "Receive personalized guidance as you navigate your design journey.",
      icon: "https://c.animaapp.com/unzonupS/img/fi-1570696.svg",
    },
    {
      title: "DC Connect",
      summary:
        "Join our virtual meetups, held monthly &amp; sometimes fortnightly!",
      icon: "https://c.animaapp.com/unzonupS/img/fi-4140320.svg",
    },
    {
      title: "DC Online Events",
      summary:
        "Engage with experts, ask questions, &amp; gain valuable insights.",
      icon: "https://c.animaapp.com/unzonupS/img/fi-5602981.svg",
    },
    {
      title: "UX Roasts",
      summary:
        "Dissect digital products, explore, &amp; brainstorm innovative enhancements.",
      icon: "https://c.animaapp.com/unzonupS/img/fi-2344334.svg",
    },
    {
      title: "Portfolio Reviews",
      summary:
        "Get valuable insights &amp; constructive feedback to improve your portfolio.",
      icon: "https://c.animaapp.com/unzonupS/img/fi-2343797.svg",
    },
  ];
  return (
    <div className=" flex flex-col items-center gap-8 md:gap-[60px] bg-[#9adbe5] mx-[10px] rounded-[40px] py-10 lg:p-[120px_0] ">
      <div className="relative inline-flex flex-col items-center gap-[5px]">
        <div className="relative text-brandblack font-roc-grotesk text-[28px] md:text-[40px] lg:text-[46px] font-bold tracking-[0.02px] leading-[50.6px] text-center lg:whitespace-nowrap">
          Why Design Chics?
        </div>
        <p className="px-8 text-wrapper-37 relative text-brandblack font-karla text-[16px] lg:text-[20px] font-normal leading-[28px] text-center lg:whitespace-nowrap">
          Being a part of Design Chics Community gives you access to:
        </p>
      </div>
      <div className="container relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between gap-3 md:gap-5">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative bg-[#fdf8e8] rounded-[25px] md:h-[182px] overflow-hidden p-5"
          >
            <div className="relative inline-flex flex-col items-start gap-[18px]">
              <Image
                className="relative"
                height={36}
                width={36}
                alt="Fi"
                src={item.icon}
              />
              <div className="relative inline-flex flex-col items-start gap-[8px]">
                <div className="relative text-[#0b0a0ae6] font-roc-grotesk text-[18px] font-medium -mt-[1px]">
                  {item.title}
                </div>
                <p className="relative text-[#0b0a0ae6] font-karla text-[16px] font-normal leading-[22.4px]">
                  {item.summary}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyDesignChick;
