import Container from "@/components/container/container";
import React from "react";
import march8 from "../../../public/images/about/march8.png";
import swirl from "../../../public/svg/about/swirl.svg";
import Image from "next/image";

function Page() {
  return (
    <>
      <Container style="" innerStyle="max-w-[999px] px-[22px]">
        <div className="pt-[148px] md:pt-[184px] lg:pt-[198.5px] pb-[191px] md:pb-[221px] lg:pb-[228px] flex flex-col justify-center gap-4 lg:gap-5 mx-auto">
          <h1 className="font-roc-grotesk font-bold text-[36px] leading-[120%] tracking-[-1.828px] md:text-[66px] md:leading-[110%] lg:text-[86px] text-center text-[#FDF8E8] ">
            Daring. <span className="text-brandBlue">Diverse.</span> Driven.
          </h1>
          <p className="font-karla font-normal text-[#BABABA] text-[16px] leading-[150%]  md:text-[18px] md:leading-[140%]  lg:text-[24px] max-w-[548px] lg:max-w-none text-center mx-auto">
            We are a non-profit organization of dedicated female designers who
            are passionate about creating a more disruptive design world. We
            believe that design should be inclusive, inspiring, and a powerful
            tool for positive change.
          </p>
        </div>
      </Container>

      <Container
        style=""
        innerStyle="bg-[#171717] w-full pt-[70px] pb-[81px]"
        innerSize="max-w-[1240px]"
      >
        <div className="flex justify-between gap-[100px] w-full">
          <div className="flex flex-col gap-[30px] w-full">
            <h6 className="w-full max-w-[364px] text-[46px] font-bold leading-[120%] tracking-[-0.02px] font-roc-grotesk">
              It all started on{" "}
              <span className="text-[#9291EB]">8 March 2023</span>
            </h6>

            <div className="max-w-[551px] h-[469px] relative w-full">
              <Image
                className="object-cover obejct-center z-[1]"
                src={march8}
                alt=""
                fill
              />
              <Image
                className="absolute z-[2] bottom-[-31px] right-[-55px]"
                src={swirl}
                alt=""
              />
            </div>
          </div>
          <div className="font-karla w-full max-w-[589px] text-[18px] leading-[160%] text-[rgba(255, 252, 245, 0.80)]">
            <p>
              In the early stages of Dinma Anuigbo&apos;s career, she often
              found herself as the only woman on her design teams. This
              isolation fueled her desire for connection, support, and
              inspiration from other female designers. She realized that many
              women faced similar challenges and needed a strong community for
              career growth.
            </p>
            <br />
            <p>
              Driven by this vision, She shared her ideas with Oyindamola
              Ajiboye (Dammy) to create a community for female designers across
              Africa.
            </p>

            <br />
            <p>
              <span className="text-[#FFFCF5] font-bold">
                Launched on International Women&apos;s Day 2023,
              </span>
              Design Chics is a safe space for women to connect, share,
              collaborate, and grow together.
            </p>

            <br />
            <p>
              Design Chics aims to build a robust network of female designers
              across Africa, providing resources for them to reach their full
              potential. It hosts events, workshops, and professional
              development opportunities, enhancing skills and advancing careers.
              The community also fosters networking, leading to job
              opportunities, collaborations, and mentorship.
            </p>

            <br />
            <p>
              <span className="text-[#FFFCF5] font-bold">
                Through Design Chics, women are not just envisioning a better
                future—they are actively shaping it.
              </span>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Page;
