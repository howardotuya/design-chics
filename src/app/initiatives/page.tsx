import Container from "@/components/container/container";
import Image from "next/image";
import initiative1 from "../../../public/images/initiatives/ini1.png";
import initiative2 from "../../../public/images/initiatives/ini2.png";
import initiative3 from "../../../public/images/initiatives/ini3.png";
import initiative4 from "../../../public/images/initiatives/ini4.png";
import initiative5 from "../../../public/images/initiatives/ini5.png";
import initiative6 from "../../../public/images/initiatives/ini6.png";
import joinTheCommunity from "../../../public/svg/about/joinTheCommunity.svg";
import React from "react";
import Link from "next/link";
import SupportUsBanner from "@/components/banner/SupportUsBanner";

function Page() {
  return (
    <>
      <Container style="" innerStyle="max-w-[999px] px-[22px]">
        <div className="pt-[148px] md:pt-[184px] lg:pt-[198.5px] pb-[191px] md:pb-[221px] lg:pb-[228px] flex flex-col justify-center gap-4 lg:gap-5 mx-auto">
          <h1 className="font-roc-grotesk mx-auto max-w-[202px] md:max-w-[609px] lg:max-w-none font-bold text-[36px] leading-[120%] tracking-[-1.828px] md:text-[66px] md:leading-[110%] lg:text-[86px] text-center text-[#FDF8E8] ">
            Design Chics <span className="text-[#9291EB]">Initiatives</span>
          </h1>
          <p className="font-karla font-normal text-[#BABABA] text-[16px] leading-[150%]  md:text-[18px] md:leading-[140%]  lg:text-[24px] max-w-[548px] lg:max-w-[887.93px] text-center mx-auto">
            These initiatives are designed to provide women in design with
            dynamic programs for{" "}
            <span className="font-bold text-white">
              skills development, industry exposure, networking, mentorship, and
              community support.
            </span>
          </p>
        </div>
      </Container>

      {/* <span className="font-bold text-white">94 mentees</span> */}

      <Container
        style=""
        innerStyle="bg-[#171717] w-full py-[60px] md:py-20 lg:pt-[70px] lg:pb-[50px] px-[18px] md:px-[30px]"
        innerSize="max-w-[1268px]"
      >
        <div className="w-full  lg:max-w-none grid lg:grid-cols-2 gap-[50px]">
          {/* Purple */}
          <div className="w-full rounded-[25px] bg-[#232323] text-[#FFFCF5E5] md:pb-[52px] p-5 md:p-[32px] flex flex-col">
            <Image
              className="rounded-[16px] md:rounded-[20px] "
              src={initiative1}
              alt=""
            />
            <div className="flex flex-col justify-between h-full">
              <div>
                <h4 className="mt-5 md:mt-[30px] font-roc-grotesk text-[18px] leading-[22px] md:text-[30px] lg:text-[36px] font-bold md:leading-11 lg:leading-[52px] tracking-[-0.02px]">
                  DC Mentorship Program ’23
                </h4>
                <p className="mt-2.5 font-karla text-[14px] md:text-[16px] lg:text-[18px] leading-[160%]">
                  Our mentorship program connects experienced professionals with
                  aspiring designers within our community. We matched{" "}
                  <span className="font-bold text-white">47 mentors</span> with{" "}
                  <span className="font-bold text-white">94 mentees</span>. This
                  personalized approach ensures each mentee receives focused
                  support tailored to their unique needs.
                </p>
              </div>

              <Link
                className="text-[#9291EB] mt-4 md:mt-5 lg:mt-[30px] uppercase hover:underline block text-[14px] md:text-[16px]"
                href={""}
              >
                Learn more &gt;
              </Link>
            </div>
          </div>
          {/* Blue */}
          <div className="w-full rounded-[25px] bg-[#232323] text-[#FFFCF5E5] md:pb-[52px] p-5 md:p-[32px] flex flex-col">
            <Image
              className="rounded-[16px] md:rounded-[20px] "
              src={initiative2}
              alt=""
            />
            <div className="flex flex-col justify-between h-full">
              <div>
                <h4 className="mt-5 md:mt-[30px] font-roc-grotesk text-[18px] leading-[22px] md:text-[30px] lg:text-[36px] font-bold md:leading-11 lg:leading-[52px] tracking-[-0.02px]">
                  DC Book Club
                </h4>
                <p className="mt-2.5 font-karla text-[14px] md:text-[16px] lg:text-[18px] leading-[160%]">
                  Every month, we select a book to read and explore together as
                  a community. So far, we’ve delved into{" "}
                  <span className="font-bold text-white">
                    3 incredible books
                  </span>
                  , and have had over{" "}
                  <span className="font-bold text-white">25 sessions</span>, and
                  we’re just getting started!Join fellow designers every week to
                  read, discuss, and draw inspiration from a variety of
                  thought-provoking books.
                </p>
              </div>
              <Link
                className="text-[#9ADBE5] mt-4 md:mt-5 lg:mt-[30px] uppercase hover:underline block text-[14px] md:text-[16px]"
                href={""}
              >
                Learn more &gt;
              </Link>
            </div>
          </div>
          {/* Blue */}
          <div className="w-full rounded-[25px] bg-[#232323] text-[#FFFCF5E5] md:pb-[52px] p-5 md:p-[32px] flex flex-col">
            <Image
              className="rounded-[16px] md:rounded-[20px] "
              src={initiative3}
              alt=""
            />
            <div className="flex flex-col justify-between h-full">
              <div>
                <h4 className="mt-5 md:mt-[30px] font-roc-grotesk text-[18px] leading-[22px] md:text-[30px] lg:text-[36px] font-bold md:leading-11 lg:leading-[52px] tracking-[-0.02px]">
                  Connectivity Aid
                </h4>
                <p className="mt-2.5 font-karla text-[14px] md:text-[16px] lg:text-[18px] leading-[160%]">
                  The initiative made a tangible impact by equipping community
                  members with workspace passes and MiFi routers to enhance
                  productivity and connectivity, providing a total of{" "}
                  <span className="font-bold text-white">
                    3 workspace passes
                  </span>{" "}
                  and{" "}
                  <span className="font-bold text-white">2 MiFi routers.</span>
                </p>
              </div>

              <Link
                className="text-[#9ADBE5] mt-4 md:mt-5 lg:mt-[30px] uppercase hover:underline block text-[14px] md:text-[16px]"
                href={""}
              >
                Learn more &gt;
              </Link>
            </div>
          </div>
          {/* Purple */}
          <div className="w-full rounded-[25px] bg-[#232323] text-[#FFFCF5E5] md:pb-[52px] p-5 md:p-[32px] flex flex-col">
            <Image
              className="rounded-[16px] md:rounded-[20px] "
              src={initiative4}
              alt=""
            />
            <div className="flex flex-col justify-between h-full">
              <div>
                <h4 className="mt-5 md:mt-[30px] font-roc-grotesk text-[18px] leading-[22px] md:text-[30px] lg:text-[36px] font-bold md:leading-11 lg:leading-[52px] tracking-[-0.02px]">
                  Untitled Designers (UDC23)
                </h4>
                <p className="mt-2.5 font-karla text-[14px] md:text-[16px] lg:text-[18px] leading-[160%]">
                  We partnered with the Untitled Designers Conference (UDC) to
                  offer 50% discount tickets for{" "}
                  <span className="font-bold text-white">26 Design Chics</span>{" "}
                  who attended UDC23, as well as{" "}
                  <span className="font-bold text-white">
                    10 fully funded tickets
                  </span>{" "}
                  for 10 lucky Design Chics in the community. This initiative
                  aims to provide access to a major design conference, enhancing
                  exposure to industry trends and networking opportunities.
                </p>
              </div>

              <Link
                className="text-[#9291EB] mt-4 md:mt-5 lg:mt-[30px] uppercase hover:underline block text-[14px] md:text-[16px]"
                href={""}
              >
                Learn more &gt;
              </Link>
            </div>
          </div>
          {/* Purple */}
          <div className="w-full rounded-[25px] bg-[#232323] text-[#FFFCF5E5] md:pb-[52px] p-5 md:p-[32px] flex flex-col">
            <Image
              className="rounded-[16px] md:rounded-[20px] "
              src={initiative5}
              alt=""
            />
            <div className="flex flex-col justify-between h-full">
              <div>
                <h4 className="mt-5 md:mt-[30px] font-roc-grotesk text-[18px] leading-[22px] md:text-[30px] lg:text-[36px] font-bold md:leading-11 lg:leading-[52px] tracking-[-0.02px]">
                  The Design Foundry II
                </h4>
                <p className="mt-2.5 font-karla text-[14px] md:text-[16px] lg:text-[18px] leading-[160%]">
                  The Design Foundry II is an initiative focused on advancing
                  the product design skills of entry-level designers within the
                  community. We partnered with Learnable to award{" "}
                  <span className="font-bold text-white">
                    17 fully funded scholarships
                  </span>{" "}
                  for the Product Design course of the Learnable cohort 2023 to
                  members of the Design Chics community.
                </p>
              </div>

              <Link
                className="text-[#9291EB] mt-4 md:mt-5 lg:mt-[30px] uppercase hover:underline block text-[14px] md:text-[16px]"
                href={""}
              >
                Learn more &gt;
              </Link>
            </div>
          </div>
          {/* Blue */}
          <div className="w-full rounded-[25px] bg-[#232323] text-[#FFFCF5E5] md:pb-[52px] p-5 md:p-[32px] flex flex-col">
            <Image
              className="rounded-[16px] md:rounded-[20px] "
              src={initiative6}
              alt=""
            />
            <div className="flex flex-col justify-between h-full">
              <div>
                <h4 className="mt-5 md:mt-[30px] font-roc-grotesk text-[18px] leading-[22px] md:text-[30px] lg:text-[36px] font-bold md:leading-11 lg:leading-[52px] tracking-[-0.02px]">
                  The Design Foundry I
                </h4>
                <p className="mt-2.5 font-karla text-[14px] md:text-[16px] lg:text-[18px] leading-[160%]">
                  The Design Foundry is an initiative focused on offering a
                  foundation in visual design to aspiring female designers. We
                  have partnered with Geneza School of Design to award{" "}
                  <span className="font-bold text-white">10 scholarships</span>{" "}
                  to members of the Design Chics community.
                </p>
              </div>
              <Link
                className="text-[#9ADBE5] mt-4 md:mt-5 lg:mt-[30px] uppercase hover:underline block text-[14px] md:text-[16px]"
                href={""}
              >
                Learn more &gt;
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <Container
        style=""
        innerStyle="relative bg-[#FDF8E8] w-full py-[60px] md:py-[80px] lg:py-[120px] px-[18px] md:px-[30px]"
        innerSize="max-w-[1240px]"
      >
        <>
          <div className="text-[#0B0A0A] relative z-[1] w-full mx-auto flex flex-col items-center text-center">
            <h2 className="max-w-[284px] md:max-w-[589px] lg:max-w-[458px] text-center text-[28px] md:text-[40px] lg:text-[46px] font-bold leading-[110%] tracking-[0.02px] font-roc-grotesk">
              Don&apos;t go on your design journey alone
            </h2>
            <p className="mt-4 mb-10 lg:max-w-[643px] md:max-w-[590px] max-w-[322px] text-[16px] md:text-[18px] lg:text-[20px] ">
              We are empowering African women in design by providing them with
              the resources they need to grow and thrive in their careers.
            </p>
            <button className="h-11 lg:h-[56px] text-[14px] md:text-[16px] bg-[#9ADBE5] px-6 md:px-[38px] lg:px-[50px] uppercase font-bold text-[#0B0A0A] rounded-full">
              Join the community
            </button>
          </div>
          <Image
            className="hidden lg:block object-cover object-center"
            src={joinTheCommunity}
            alt=""
            fill
          />
        </>
      </Container>

      <SupportUsBanner />
    </>
  );
}

export default Page;
