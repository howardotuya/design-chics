import React from "react";
import Image from "next/image";
import WhyDesignChick from "@/components/WhyDesignChick";
import SupportUsBanner from "@/components/banner/SupportUsBanner";
import Brands from "@/components/Brands";
import InitiativesComponent from "@/components/InitiativesComponent";
import JoinTheCommunity from "@/components/JoinTheCommunity";
import HearFromOurCommuniyt from "@/components/HearFromOurCommunity/HearFromOurCommuniyt";




const HomePage = () => {
  return (
    <main className=" mt-44">

      <div className=" relative">
        <div className="container relative">
          <div className="flex flex-col items-center justify-center text-center relative ">
            <Image src="/images/membercount.png" className="my-4" alt='' width={130} height={200} />
            <div className="flex-col justify-center items-center gap-5 flex">
              <div className="w-[918px] text-center">
                <span className="text-[86px] font-bold font-roc-grotesk leading-[94.60px]">Don't go on your</span>
                <span className="text-stone-50 text-[86px] font-bold font-roc-grotesk leading-[94.60px]"> <br /></span>
                <span className="text-brandBlue text-[86px] font-bold font-roc-grotesk leading-[94.60px]">design journey</span>
                <span className="text-stone-50 text-[86px] font-bold font-roc-grotesk leading-[94.60px]"> </span>
                <span className="text-stone-50/opacity-90 text-[86px] font-bold font-roc-grotesk leading-[94.60px]">alone</span>
              </div>
              <div className="w-[785px] text-center text-zinc-400 text-2xl font-normal font-['Karla'] leading-[33.60px]">We are providing African women in design with the resources and opportunities they need to grow and reach their full potential.</div>
            </div>
            <div className=" hidden lg:block absolute top-28 right-[90px] h-[65px] w-[185px]">
              <div className="relative h-60 top-5">
                <div className="absolute top-3 left-6  bg-brandPurple rounded-full inline-flex items-center justify-center gap-2.5 px-5 py-3">
                  <div className="relative  text-white font-karla font-helvetica text-sm font-bold leading-5 tracking-normal whitespace-nowrap">Design boldly, girl!</div>
                </div>
                <Image className="absolute top-0 left-0 " width={20} height={70} alt="Vector" src="https://c.animaapp.com/unzonupS/img/vector.svg" />
              </div>

            </div>
            <div className="hidden lg:block absolute top-[406px] left-20 h-[67px] w-[385px] transform rotate-180">
              <div className="h-[62px] relative">
                <div className="absolute top-0 left-8 bg-brandGreen rounded-full inline-flex items-center justify-center gap-[11.28px] px-5 py-3">
                  <p className="relative text-[#fffcf5] font-karla font-helvetica text-lg font-bold leading-[22.4px] mt-[-2.82px] whitespace-nowrap transform rotate-180 w-fit">You can shape the world with your designs</p>
                </div>
                <Image className="absolute top-[40px] left-0  transform -rotate-180" width={22} height={22} alt="Vector" src="https://c.animaapp.com/unzonupS/img/vector-1.svg" />
              </div>
            </div>
          </div>

          {/* down arrow */}
          <div className=" flex justify-center my-10 lg:mt-56   ">
            <Image src="/images/arrowDown.png" alt='' width={77} height={82} />
          </div>
          <div className="flex items-center justify-center gap-14">
            <div className="relative w-[200px] h-[200px] lg:h-[298px] lg:w-[306px]">
              <Image fill={true} alt="Mask group" src="https://c.animaapp.com/unzonupS/img/mask-group@2x.png" />
            </div>
            <div className="relative w-[200px] h-[200px] xl:h-[306px] xl:w-[306px] flex items-center justify-center p-5 bg-brandGreen rounded-full overflow-hidden">
              <div className="font-roc-grotesk font-helvetica text-[50px] font-bold tracking-[-0.51px] leading-[43.5px] text-center whitespace-nowrap">INSPIRE.</div>
            </div>
            <div className="relative w-[200px] h-[200px]   lg:h-[298px] lg:w-[306px]">
              <Image fill={true} alt="Mask group" src="https://c.animaapp.com/unzonupS/img/mask-group-1@2x.png" />
            </div>
          </div>

        </div>
      </div>
      {/* power or community */}
      <div className="my-10 lg:my-40">
        <div className="container grid grid-cols-1 lg:grid-cols-2 ">
          <div className="flex flex-col gap-3">
            <div className="relative inline-flex flex-col items-start gap-[10px] flex-[0_0_auto]">
              <p className="relative text-transparent font-roc-grotesk  font-helvetica text-[40px] lg:text-[46px] font-bold tracking-[0.02px] leading-[50.6px] mt-[-0.99px] w-[427px]">
                <span className="text-[#fffcf5e6] tracking-[0.01px]">The power of a </span>
                <span className="text-brandPurple tracking-[0.01px]">community</span>
                <span className="text-[#fffcf5e6] tracking-[0.01px]"> rooting for each other</span>
              </p>
              <p className="relative text-[#bababa] font-karla font-helvetica text-[20px] font-normal leading-[28px] tracking-[0] ">
                We are empowering women through collaboration and <br /> creativity. Different phases in your career?
              </p>
            </div>
            <button className="relative flex items-center justify-center gap-[8.25px] bg-brandPurple rounded-[515.61px] box-border p-[18px_16px] w-[280px] flex-[0_0_auto] all-unset">
              <div className="relative text-black font-roc-grotesk  font-helvetica text-[16px] font-bold tracking-[0] mt-[-1.03px] w-fit">JOIN THE COMMUNITY</div>
            </button>
          </div>
          <div className="relative flex flex-col   ">
            <div className="h-[100px] lg:h-[517px] relative ">
              <div className="absolute  top-0 lg:top-0 h-[200px] w-[200px]  lg:h-[517px] lg:w-[517px]" >
                <Image src="https://c.animaapp.com/unzonupS/img/group-316124405.png" fill={true} alt='' />
              </div>

            </div>
            <div className="relative lg:absolute w-full top-0 grid grid-cols-1 lg:grid-cols-2 gap-3 justify-end items-center ">
              <div className="w-full  lg:w-[299px] relative inline-flex flex-col items-center justify-center gap-y-10 bg-[#0e0d0d] border border-solid border-[#e8e8e80d] rounded-[20px] p-[20px_40px]">
                <div className="align-items-start inline-flex flex-none flex-col gap-y-10 relative">
                  <div className="flex items-center h-12 w-28">
                    <div className="w-7 h-7 relative">
                      <div className="w-[26px] h-[26px] left-[1px] top-[1px] absolute bg-indigo-400 rounded-full" />
                    </div>
                  </div>
                  <div className="relative inline-flex flex-col gap-y-5">
                    <div className="relative text-[var(--x-2)] font-roc-grotesk font-helvetica text-[20px] font-bold tracking-[0] leading-[26px] mt-[-1px] whitespace-nowrap">Newbie Designers</div>
                    <p className="relative text-[#fffcf5e6] font-karla font-helvetica text-[16px] font-normal leading-[22.4px] h-78 w-[251px]">
                      Start your design journey with us. Access mentorship and resources to launch your career.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[299px] relative inline-flex flex-col items-center justify-center gap-y-10 bg-[#0e0d0d] border border-solid border-[#e8e8e80d] rounded-[20px] p-[20px_40px] flex-[0_0_auto]">
                <div className="align-items-start inline-flex flex-none flex-col gap-y-10 relative">
                  <div className="relative h-12 w-28">
                    <div className="w-7 h-7 relative">
                      <div className="w-7 h-7 left-0 top-0 absolute rounded-full border border-indigo-400" />
                      <div className="w-[22.59px] h-[22.67px] left-[2.70px] top-[2.70px] absolute rounded-full border border-indigo-400" />
                      <div className="w-[17.82px] h-[17.82px] left-[5.09px] top-[5.17px] absolute rounded-full border border-indigo-400" />
                      <div className="w-[12.81px] h-[12.81px] left-[7.56px] top-[7.64px] absolute rounded-full border border-indigo-400" />
                      <div className="w-[7.40px] h-[7.40px] left-[10.26px] top-[10.34px] absolute bg-indigo-400 rounded-full" />
                    </div>
                  </div>
                  <div className="relative inline-flex flex-col gap-y-5">
                    <div className="relative text-[var(--x-2)] font-roc-grotesk font-helvetica text-[20px] font-bold tracking-[0] leading-[26px] mt-[-1px] whitespace-nowrap">Junior Designers</div>
                    <p className="relative text-[#fffcf5e6] font-karla font-helvetica text-[16px] font-normal leading-[22.4px] h-78 w-[251px]">
                      Elevate your skills, network <br />
                      and thrive as a junior designer with us.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[299px] relative inline-flex flex-col items-center justify-center gap-y-10 bg-[#0e0d0d] border border-solid border-[#e8e8e80d] rounded-[20px] p-[20px_40px] flex-[0_0_auto]">
                <div className="align-items-start inline-flex flex-none flex-col gap-y-10 relative">
                  <div className="relative h-12  w-28">
                    <div className="w-7 h-7 relative">
                      <div className="w-7 h-3 left-0 top-[8px] absolute">
                        <div className="w-3 h-3 left-0 top-0 absolute bg-indigo-400 rounded-full" />
                        <div className="w-3 h-3 left-[8px] top-0 absolute bg-indigo-400 rounded-full" />
                        <div className="w-3 h-3 left-[16px] top-0 absolute bg-indigo-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                  <div className="relative inline-flex flex-col gap-y-5">
                    <div className="relative text-[var(--x-2)] font-roc-grotesk font-helvetica text-[20px] font-bold tracking-[0] leading-[26px] mt-[-1px] whitespace-nowrap">Mid-Level Designers</div>
                    <p className="relative text-[#fffcf5e6] font-karla font-helvetica text-[16px] font-normal leading-[22.4px] h-78 w-[251px]">
                      Advance your career and <br />
                      refine your craft in our supportive community.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[299px] relative inline-flex flex-col items-center justify-center gap-y-[20.32px] bg-[#0e0d0d] border border-solid border-[#e8e8e80d] rounded-[20px] p-[20px_40px] flex-[0_0_auto]">
                <div className="align-items-start inline-flex flex-none flex-col gap-y-10 relative">
                  <div className="relative h-12 w-28">
                    <div className="w-7 h-7 relative">
                      <div className="w-[26px] h-[26px] left-[1px] top-[1px] absolute">
                        <div className="w-[15px] h-[15px] left-0 top-0 absolute bg-indigo-400 rounded-full" />
                        <div className="w-[15px] h-[15px] left-[11px] top-0 absolute bg-indigo-400 rounded-full" />
                        <div className="w-[15px] h-[15px] left-0 top-[11px] absolute bg-indigo-400 rounded-full" />
                        <div className="w-[15px] h-[15px] left-[11px] top-[11px] absolute bg-indigo-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                  <div className="relative inline-flex flex-col gap-y-5">
                    <div className="relative text-[var(--x-2)] font-roc-grotesk font-helvetica text-[20px] font-bold tracking-[0] leading-[26px] mt-[-1px] whitespace-nowrap">Senior Designers</div>
                    <p className="relative text-[#fffcf5e6] font-karla font-helvetica text-[16px] font-normal leading-[22.4px] h-78 w-[251px]">
                      Leverage your expertise, mentor and connect with experienced peers in our design network.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* brands */}

      <div className="my-10 ">
        <Brands />
      </div>
      <div className="">
        <WhyDesignChick />
      </div>

      <JoinTheCommunity />
      <HearFromOurCommuniyt />

      <InitiativesComponent />
      <SupportUsBanner />
    </main>
  );
};



export default HomePage