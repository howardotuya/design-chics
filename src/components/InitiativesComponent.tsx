import Image from "next/image";
import Link from "next/link";
import React from "react";

const InitiativesComponent = () => {
  const items = [
    {
      title: "The Design Foundry",
      summary: (
        <>
          <span className="text-stone-50 opacity-80 text-lg font-normal font-karla leading-[28.80px]">
            The Design Foundry is an initiative focused on offering a foundation
            in visual design to aspiring female designers. We have partnered
            with Geneza School of Design to award
          </span>

          <span className="text-stone-50 opacity-95 text-lg font-bold font-karla leading-[28.80px]">
            10 scholarships
          </span>
          <span className="text-stone-50 opacity-80 text-lg font-normal font-karla leading-[28.80px]">
            to members of the Design Chics community.
          </span>
        </>
      ),
      thumbnail: "/images/design-foundry.png",
      color: "text-[#9ADBE5]",
    },
    {
      title: "DC Mentorship Program",
      summary: (
        <>
          <span className="text-stone-50 opacity-80 text-lg font-normal font-karla leading-[28.80px]">
            Our mentorship program connects experienced professionals with
            aspiring designers within our community. We matched{" "}
          </span>
          <span className="text-stone-50/opacity-95 text-lg font-bold font-karla leading-[28.80px]">
            47 mentors
          </span>
          <span className="text-stone-50 opacity-80 text-lg font-normal font-karla leading-[28.80px]">
            {" "}
            with{" "}
          </span>
          <span className="text-stone-50/opacity-95 text-lg font-bold font-karla leading-[28.80px]">
            94 mentees
          </span>
          <span className="text-stone-50 opacity-80 text-lg font-normal font-karla leading-[28.80px]">
            . This personalized approach ensures each mentee receives focused
            support tailored to their unique needs.
          </span>
        </>
      ),
      thumbnail: "/images/mentorship-program.png",
      color: "text-[#9291EB]",
    },
  ];
  return (
    <div className="bg-neutral-900 rounded-[40px] mx-[10px] flex items-center justify-center">
      <div className="px-[24px] max-w-[1440px]  m-[10px] py-20 md:py-40 flex-col justify-center items-center gap-20 flex">
        <div className="flex-col justify-start items-center gap-[30px] flex">
          <div className="flex-col justify-start items-center gap-[15px] flex">
            <div className="max-w-[589px] text-center">
              <span className="text-stone-50 text-[46px] font-bold font-roc-grotesk leading-[50.60px] tracking-tight">
                Design Chics{" "}
              </span>
              <span className="text-indigo-400 text-[46px] font-bold font-roc-grotesk leading-[50.60px] tracking-tight">
                Initiatives
              </span>
            </div>
            <div className="max-w-[665.64px] text-center">
              <span className="text-stone-50 opacity-80 text-xl font-normal font-karla leading-7">
                A comprehensive collection of programs empowering African women
                in design through{" "}
              </span>
              <span className="text-stone-50/opacity-95 text-xl font-bold font-karla leading-7">
                skills development
              </span>
              <span className="text-stone-50 opacity-80 text-xl font-normal font-karla leading-7">
                ,{" "}
              </span>
              <span className="text-stone-50/opacity-95 text-xl font-bold font-karla leading-7">
                industry exposure
              </span>
              <span className="text-stone-50 opacity-80 text-xl font-normal font-karla leading-7">
                ,{" "}
              </span>
              <span className="text-stone-50/opacity-95 text-xl font-bold font-karla leading-7">
                networking
              </span>
              <span className="text-stone-50 opacity-80 text-xl font-normal font-karla leading-7">
                ,{" "}
              </span>
              <span className="text-stone-50/opacity-95 text-xl font-bold font-karla leading-7">
                mentorship
              </span>
              <span className="text-stone-50 opacity-80 text-xl font-normal font-karla leading-7">
                , &{" "}
              </span>
              <span className="text-stone-50/opacity-95 text-xl font-bold font-karla leading-7">
                community support.
              </span>
            </div>
          </div>
          <Link href='/initiatives'  className="to-blue w-[280px] px-4 py-[18px] bg-indigo-400 rounded-[515.61px] justify-center items-center gap-[8.25px] inline-flex">
            <span className="text w-[174px] text-center text-neutral-950 text-base font-bold font-roc-grotesk uppercase">
              View All Initiatives
            </span>
          </Link>
        </div>
        <div className="w-full lg:justify-center gap-[22px] flex flex-col lg:flex-row">
          {items.map((item, index) => (
            <div
              key={index}
              className="space-y-5 w-full lg:w-1/2 bg-neutral-800 rounded-[25px] p-5 md:p-10"
            >
              <Image
                width={0}
                height={0}
                className="w-full left-0 top-0 rounded-lg"
                src={item.thumbnail}
                alt=""
                unoptimized
              />
              <div className="text-stone-50/opacity-90 text-4xl font-bold font-roc-grotesk tracking-tight">
                {item.title}
              </div>
              <div>{item.summary}</div>
              <br />
              <Link href="/learn-more"
                className={`mt-20 ${item.color} block text-base font-normal font-roc-grotesk uppercase`}
              >
                Learn more {">"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InitiativesComponent;
