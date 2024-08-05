import Container from "@/components/container/container";
import React from "react";
import Image from "next/image";
import asset1 from "../../../public/images/about/asset1.jpeg";
import asset2 from "../../../public/images/about/asset2.jpeg";
import march8 from "../../../public/images/about/dinmaa.png";
import dinma from "../../../public/images/about/dinma.jpeg";
import Inspire from "@/components/about/inspire";
import SwirlSVG from "@/components/about/swirl";
import GreenClove from "@/components/about/greenClove";
import PurpleClove from "@/components/about/purpleClove";
import community from "../../../public/svg/about/community.svg";
import growth from "../../../public/svg/about/growth.svg";
import inclusivity from "../../../public/svg/about/inclusivity.svg";
import mentorship from "../../../public/svg/about/mentorship.svg";
import bg from "../../../public/svg/about/bg.svg";
import joinTheCommunity from "../../../public/svg/about/joinTheCommunity.svg";
import TeamCard from "@/components/about/teamCard";
import SupportUsBanner from "@/components/banner/SupportUsBanner";
import AdvocateCard from "@/components/about/advocateCard";
import VideoPlayer from "@/components/video/ReactPlayer";

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
        innerStyle="bg-[#171717] w-full py-[60px] md:pt-[70px] pb-[81px] px-[18px] md:px-[30px]"
        innerSize="max-w-[1240px]"
      >
        <div className="flex flex-col md:flex-row justify-between gap-[30px] lg:gap-[100px] w-full">
          <div className="flex flex-col items-center md:items-start gap-10 md:gap-4 lg:gap-[30px] w-full">
            <h6 className="w-full text-center md:text-left max-w-[223px] md:max-w-[364px] text-[28px] md:text-[50px] leading-[110%] lg:text-[46px] font-bold lg:leading-[120%] tracking-[-0.02px] md:tracking-[-1.828px] lg:tracking-[-0.02px] font-roc-grotesk">
              It all started on{" "}
              <span className="text-[#9291EB]">8 March 2023</span>
            </h6>

            <div className="relative w-full grid h-full">
              <div className="md:max-w-[551px] grid h-[220px] md:h-full overflow-hidden rounded-[20px] relative w-full">
                <Image
                  className="object-cover object-[center_top] z-[1] grayscale lg:scale-x-[-1]"
                  src={march8}
                  alt=""
                  fill
                  quality={100}
                />
              </div>
              <div className="absolute z-[2] bottom-[-27px] md:bottom-[-31px] right-[-1px] md:right-[-25px] lg:right-[-55px]">
                <SwirlSVG />
              </div>
            </div>
          </div>
          <div className="font-karla w-full max-w-[589px] text-[16px] lg:text-[18px] leading-[160%] text-[rgba(255, 252, 245, 0.80)]">
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

      <Container
        style=""
        innerStyle="bg-[#fff] w-full py-[60px] md:py-[40px] lg:py-[50px] px-[18px] md:px-[60px]"
        innerSize="max-w-[1072px]"
      >
        <div>
          {/* TOP */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left">
              <h2 className="font-roc-grotesk text-[#0B0A0A] font-bold tracking-[0.02px] leading-[110%] text-[28px] md:text-[30px] lg:text-[36px] ">
                Our Mission
              </h2>
              <p className="mt-2.5 font-karla text-[#0B0A0A] max-w-[293px] md:max-w-[276px] lg:max-w-[380px] text-[16px] lg:text-[18px] leading-[140%] md:leading-[150%]">
                To accelerate the career growth of female designers across
                Africa, foster communication, & encourage collaboration, across
                all career levels.
              </p>
            </div>

            <div className="relative">
              <div className="mt-[30px] md:mt-0 w-[291px] h-[168px] md:w-[330px] md:h-[196px] lg:w-[436px] lg:h-[258px] relative overflow-hidden rounded-[20px]">
                <Image
                  className="object-cover object-center grayscale"
                  src={asset1}
                  alt=""
                  fill
                />
              </div>
              <div className=" absolute top-[40px] md:top-[23px] lg:top-[30px] right-[-24px] md:right-[-36px] lg:right-[-59px]">
                <PurpleClove />
              </div>
              <div className="absolute lg:left-[-56px] lg:bottom-[-16px] md:left-[-32px] md:bottom-[13px] left-[-24px] bottom-[14px]">
                <Inspire />
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-[60px] md:mt-[86px]">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="order-2 md:order-1 relative">
                <div className="mt-[30px] md:mt-0  w-[291px] h-[168px] md:w-[330px] md:h-[196px] lg:w-[436px] lg:h-[258px] relative overflow-hidden rounded-[20px]">
                  <Image
                    className="object-cover object-center grayscale"
                    src={asset2}
                    alt=""
                    fill
                  />
                </div>
                <div className="absolute left-[-25px] top-[67px] md:top-0  md:left-[-45px] lg:top-[18px] lg:left-[-59px]">
                  <GreenClove />
                </div>
                <div className="absolute bottom-[8px] right-[-25px] md:bottom-[-16px] md:right-[-36px] lg:right-[-59px]">
                  <SwirlSVG />
                </div>
              </div>

              <div className="order-1 md:order-2 text-center md:text-left">
                <h2 className="font-roc-grotesk text-[#0B0A0A] font-bold tracking-[0.02px] leading-[110%] text-[28px] md:text-[30px] lg:text-[36px] ">
                  Our Vision
                </h2>
                <p className="mt-2.5 font-karla text-[#0B0A0A] max-w-[293px] md:max-w-[306px] lg:max-w-[380px] text-[16px] lg:text-[18px] leading-[140%] md:leading-[150%]">
                  We want to build a space where every female designer in Africa
                  thrives through empowered collaboration, continuous growth,
                  and equitable opportunities, shaping the future of design
                  across the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container
        style="relative"
        innerStyle="bg-[#9ADBE5] w-full lg:py-[120px] md:py-[80px] py-[60px] px-[18px] md:px-[60px]"
        innerSize="max-w-[645px]"
      >
        <>
          <div className="relative">
            <div className="text-[#0B0A0A] text-center flex flex-col justify-center items-center">
              <h2 className="font-roc-grotesk text-[28px] md:text-[40px] lg:text-[46px] font-bold leading-[110%] tracking-[-0.02px]">
                Our Values
              </h2>
              <p className="mt-2.5 md:text-[18px] lg:text-[20px] lg:max-w-[388px] md:max-w-[285px] max-w-[307px] font-karla">
                At Design chics, we set the bar for excellence through;
              </p>
              <div className="font-roc-grotesk mt-10 md:mt-[60px] grid max-w-[260px] md:max-w-none grid-cols-2 justify-between md:grid-cols-4 gap-x-4 gap-y-[30px]">
                <div className="w-[120px] lg:w-[150px] md:text-[18px] text-[#0B0A0AE5] font-medium flex flex-col justify-center items-center gap-[18px]">
                  <Image src={mentorship} alt="" />
                  <h6>Mentorship</h6>
                </div>
                <div className="w-[120px] lg:w-[150px] md:text-[18px] text-[#0B0A0AE5] font-medium flex flex-col justify-center items-center gap-[18px]">
                  <Image src={growth} alt="" />
                  <h6>Growth</h6>
                </div>
                <div className="w-[120px] lg:w-[150px] md:text-[18px] text-[#0B0A0AE5] font-medium flex flex-col justify-center items-center gap-[18px]">
                  <Image src={inclusivity} alt="" />
                  <h6>Inclusivity</h6>
                </div>
                <div className="w-[120px] lg:w-[150px] md:text-[18px] text-[#0B0A0AE5] font-medium flex flex-col justify-center items-center gap-[18px]">
                  <Image src={community} alt="" />
                  <h6>Community</h6>
                </div>
              </div>
            </div>
          </div>
          <Image className="object-cover object-center" src={bg} alt="" fill />
        </>
      </Container>

      <Container
        style=""
        innerStyle="bg-[#171717] w-full py-[60px] md:py-[70px] px-[18px] md:px-[30px]"
        innerSize="max-w-[1240px]"
      >
        <div className="flex flex-col gap-[30px] md:gap-[50px] lg:gap-[80px] w-full">
          <div className="w-full flex flex-col gap-[10px] md:gap-4 lg:flex-row justify-between items-center">
            <h2 className="font-roc-grotesk text-[28px] md:text-[50px] lg:text-[60px] lg:text-left text-center font-bold leading-[110%] text-[#9ADBE5] tracking-[-0.02px] md:tracking-[-1.828px]">
              <span className="text-[#FFFCF5]">Meet</span> the team
            </h2>
            <p className="font-karla text-[#FFFCF5E5] max-w-[326px] md:max-w-[444px] lg:max-w-[333px] md:text-[18px] lg:text-[20px] leading-[140%] lg:text-left text-center">
              Meet our remarkable team of dedicated women who pour their hearts
              and souls into our mission, working tirelessly together to bring
              our vision to life.
            </p>
          </div>

          <div className="mx-auto font-roc-grotesk w-full max-w-[250px] md:max-w-[590px] xl:max-w-none grid gap-5 md:gap-[50px] xl:gap-4 md:grid-cols-2 xl:grid-cols-4">
            <TeamCard index={0} name={"Dinma Anuigbo"} position={"Founder "} />
            <TeamCard index={1} name={"Ajibike Oyindamola"} position={"COO"} />
            <TeamCard
              index={2}
              name={"Oluwatoyin Akande"}
              position={"Community Manager"}
            />
            <TeamCard
              index={3}
              name={"Adeniran Ademidoyin"}
              position={"Content / Product Designer"}
            />
            <TeamCard
              index={4}
              name={"Oyeyinka Oyerinde"}
              position={"Programs Coordinator"}
            />
            <TeamCard
              index={5}
              name={"Eniola Adeyeye"}
              position={"Social Media Manager"}
            />
            <TeamCard
              index={6}
              name={"Sweeney Okuma"}
              position={"Brand Designer"}
            />
            <TeamCard
              index={7}
              name={"Dami Ojetunji"}
              position={"Programs Coordinator"}
            />
          </div>
        </div>
      </Container>

      {/* 1. Our Community Advocates */}
      <Container
        style=""
        innerStyle="bg-[#FDF8E8] w-full py-[60px] md:py-[80px] px-[18px] md:px-[30px]"
        innerSize="max-w-[1240px]"
      >
        <div className="flex flex-col gap-[30px] md:gap-[50px] lg:gap-[80px] w-full">
          <div className="w-full flex flex-col gap-[10px] md:gap-4 lg:flex-row justify-between items-center">
            <h2 className="font-roc-grotesk max-w-[452px] text-[28px] md:text-[40px] lg:text-[60px] lg:text-left text-center font-bold leading-[110%] text-[#9291EB] tracking-[-0.02px] md:tracking-[-1.828px]">
              <span className="text-[#0B0A0A]">Our</span> Community <br />
              Advocates
            </h2>
            <p className="font-karla text-[#0B0A0A] max-w-[318px] md:max-w-[444px] lg:max-w-[333px] md:text-[18px] lg:text-[20px] leading-[140%] lg:text-left text-center">
              Meet our community advocates who actively support and work towards
              positive change within the community.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center mx-[unset] md:mx-auto overflow-hidden xl:flex-row gap-5 xl:gap-0">
            <span className="flex ">
              <span className="">
                <AdvocateCard index={0} name="Ifeoma" />
              </span>
              <span className="ml-[-14px] md:ml-[-27px]">
                <AdvocateCard index={1} name="Immaculate" />
              </span>
              <span className="ml-[-14px] md:ml-[-27px]">
                <AdvocateCard index={2} name="Vanessa" />
              </span>
              <span className="ml-[-14px] md:ml-[-27px]">
                <AdvocateCard index={3} name="Ifunaya" />
              </span>
            </span>
            <span className="mx-auto flex xl:ml-[-27px]">
              <span className="">
                <AdvocateCard index={4} name="Kayinsola" />
              </span>
              <span className="ml-[-14px] md:ml-[-27px]">
                <AdvocateCard index={5} name="Osahon" />
              </span>
              <span className="ml-[-14px] md:ml-[-27px]">
                <AdvocateCard index={6} name="Sandra" />
              </span>
            </span>
          </div>
        </div>
      </Container>

      {/* 2. Empowered by Design Chics: Hear our member stories */}

      <Container
        style=""
        innerStyle="bg-[#9ADBE5] w-full py-[60px] md:py-[80px] lg:py-[120px] px-[18px] md:px-[30px]"
        innerSize="max-w-[1040px]"
      >
        <div className="flex flex-col justify-center items-center gap-[40px] md:gap-[50px] lg:gap-[60px] w-full">
          <h2 className="text-[#0B0A0A] mx-auto text-center font-roc-grotesk lg:max-w-[657px] md:max-w-[562px] max-w-[283px] text-[28px] md:text-[40px] lg:text-[46px] tracking-[-0.02px] font-bold leading-[110%]">
            Empowered by Design Chics: Hear our member stories
          </h2>

          <div className="grid w-full max-w-[250px] md:max-w-[700px] lg:max-w-none md:grid-cols-3 gap-[30px] md:gap-5 lg:gap-10">
            <div className="qrv relative rounded-[25px] h-[220px] md:h-[193px] lg:h-[282px] grid overflow-hidden">
              <VideoPlayer url="https://testhowardishungry.000webhostapp.com/sample.webm" />
            </div>
            <div className="qrv relative rounded-[25px] h-[220px] md:h-[193px] lg:h-[282px] grid overflow-hidden">
              <VideoPlayer
                url={"https://testhowardishungry.000webhostapp.com/sample.webm"}
              />
            </div>
            <div className="qrv relative rounded-[25px] h-[220px] md:h-[193px] lg:h-[282px] grid overflow-hidden">
              <VideoPlayer
                url={"https://testhowardishungry.000webhostapp.com/sample.webm"}
              />
            </div>
          </div>
        </div>
      </Container>

      <Container
        style=""
        innerStyle="bg-[#FDF8E8] w-full py-[60px] md:py-20 lg:pt-[70px] lg:pb-[92px] px-[18px] md:px-[30px]"
        innerSize="max-w-[1240px]"
      >
        <div className="flex flex-col md:flex-row justify-between  gap-[30px] lg:gap-[100px] w-full">
          <div className="text-[#0B0A0A] flex flex-col items-center md:items-start gap-0 md:gap-[30px] lg:gap-4 w-full">
            <h6 className="w-full text-center md:text-left max-w-[223px] md:max-w-[357px] text-[28px] md:text-[50px] leading-[110%] lg:text-[46px] font-bold lg:leading-[120%] tracking-[-0.02px] md:tracking-[-1.828px] lg:tracking-[-0.02px] font-roc-grotesk">
              Meet Dinma: <br />
              The Founder
            </h6>

            <div className="relative mt-2.5 mb-[52px] max-w-[314px] md:max-w-none w-full mx-auto grid md:hidden h-auto">
              <div className="md:max-w-[605px] grid h-[288px] md:h-auto overflow-hidden rounded-[20px] relative w-full">
                <Image
                  className="object-cover object-center z-[1] "
                  src={dinma}
                  alt=""
                  fill
                  quality={100}
                />
              </div>
              <div className="absolute z-[2] lg:left-[-14px] lg:bottom-[-43px] md:left-[5px] md:bottom-[-31px] left-[-21px] bottom-[-32px]">
                <Inspire />
              </div>
            </div>

            <div className="font-karla w-full max-w-[499px] text-[16px] lg:text-[18px] leading-[160%] text-[rgba(255, 252, 245, 0.80)]">
              <p>
                Dinma Anuigbo, a Senior Product Designer with a background in
                Economics. She has worked with multinational organizations like
                Shopify, Babbel, and Toptal, leading projects that drive user
                adoption and GMV growth.
              </p>
              <br />
              <p>
                Committed to positively impacting the design industry, Dinma
                founded Design Chics, a non-profit supporting African women in
                design. She also created a Job Board for remote and relocation
                opportunities for African design talent and shares content on
                social media to help designers advance their careers.
              </p>

              <br />
              <p>
                She is dedicated to making a real difference with her innovative
                spirit one step at a time.
              </p>
            </div>
          </div>

          <div className="relative max-w-[314px] md:max-w-none w-full mx-auto hidden md:grid h-auto">
            <div className="md:max-w-[605px] grid h-[288px] md:h-auto overflow-hidden rounded-[20px] relative w-full">
              <Image
                className="object-cover object-center z-[1] "
                src={dinma}
                alt=""
                fill
                quality={100}
              />
            </div>
            <div className="absolute z-[2] lg:left-[-14px] lg:bottom-[-43px] md:left-[5px] md:bottom-[-31px] left-[-21px] bottom-[-32px]">
              <Inspire />
            </div>
          </div>
        </div>
      </Container>

      <Container
        style=""
        innerStyle="relative bg-[#171717] w-full py-[116px] px-[18px] md:px-[30px]"
        innerSize="max-w-[1240px]"
      >
        <>
          <div className="relative z-[1] w-full mx-auto flex flex-col items-center text-center">
            <h2 className="max-w-[284px] md:max-w-[589px] lg:max-w-[458px] text-center text-[28px] md:text-[40px] lg:text-[46px] font-bold leading-[110%] tracking-[0.02px] font-roc-grotesk">
              Don't go on your design journey alone
            </h2>
            <p className="mt-4 mb-10 lg:max-w-[643px] md:max-w-[590px] max-w-[322px] text-[16px] md:text-[18px] lg:text-[20px] ">
              We are empowering African women in design by providing them with
              the resources they need to grow and thrive in their careers.
            </p>
            <button className="h-11 lg:h-[56px] text-[14px] md:text-[16px] bg-[#9291EB] px-6 md:px-[38px] lg:px-[50px] uppercase font-bold text-[#0B0A0A] rounded-full">
              Join the community
            </button>
          </div>
          <Image
            className="object-cover object-center"
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
