import Image from "next/image";
import React from "react";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const JoinTheCommunity = () => {
  const socials = [
    {
      name: "twitter",
      icon: <FaXTwitter size={42} />,
      link: "",
    },
    {
      name: "instagram",
      icon: <FaInstagram size={42} />,
      link: "",
    },
    {
      name: "linkedin",
      icon: <FaLinkedin size={42} />,
      link: "",
    },
    {
      name: "gmail",
      icon: <BiLogoGmail size={42} />,
      link: "",
    },
  ];
  return (
    <div className="mx-[10px] px-5  md:px-10 lg:px-20  rounded-[40px] py-20 lg:py-40 bg-[#171717]">
      <div className="justify-between items-start md:items-center flex flex-col lg:flex-row mb-5 lg:mb-10">
        <div
          //data-aos="fade-up"
          //data-aos-mirror="true"
          className="mx-auto md:mx-0  lg:w-[452px] text-3xl md:text-6xl "
        >
          <p className="text-stone-50  font-bold font-roc-grotesk leading-[40px] md:leading-[60px] text-center md:text-start">
            The  <span className="text-brandBlue">community </span>so far...
          </p>
        </div>
        <div
          //data-aos-delay="100"
          //data-aos="fade-up"
          //data-aos-mirror="true"
          className="text-center lg:text-left md:w-[444px] lg:w-[333px] text-[#FFFCF5] text-xl font-normal font-karla leading-7"
        >
          Join our thriving community and tap into the collective knowledge,
          inspiration, and support to amplify your success and creativity.
        </div>
      </div>
      <div className="flex items-start flex-col flex-nowrap relative w-full min-w-min justify-start overflow-visible gap-4">
        <div className="flex flex-col  sm:flex-row sm:flex-wrap lg:flex-nowrap mt-10 flex-start gap-3 h-min justify-between overflow-visible relative w-full ">
          {/* col 1 */}
          <div className="gap-3 flex flex-col w-full sm:w-[49%] md:w-[49%] lg:w-1/4 ">
            {/* row 1 */}
            <div className="to-deepteal h-full bg-[#232323] rounded-xl p-4">
              <h1 className="text text-5xl font-bold font-roc-grotesk">30+</h1>
              <p className="text text-xl">DC Online Events</p>
              <p className="text mt-5">
                Join our lively Twitter & Instagram sessions, where we invite
                leading female designers to share their insights on various
                captivating topics.
              </p>
            </div>
            {/* row 2 */}
            <div>
              <Image
                src="/images/team_at_event.png"
                unoptimized
                className="w-full"
                width={0}
                height={0}
                alt=""
              />
            </div>
            {/* row 3 */}
            <div className="rounded-xl grid grid-cols-2 gap-3  ">
              {socials.map((item) => (
                <a
                  target="_blank"
                  href={item.link}
                  key={item.name}
                  className="to-deepteal bg-[#232323] hover:bg-[#9ADBE5] hover:text-black cursor-pointer rounded-2xl h-[100px] flex items-center justify-center"
                >
                  <span className="text"> {item.icon}</span>
                </a>
              ))}
            </div>
          </div>
          {/* col 2 */}
          <div className="flex flex-col-reverse gap-3 sm:flex-col w-full sm:w-[49%] md:w-[49%] lg:w-1/4">
            {/* row 1 */}
            <div className="to-milk flex flex-col justify-between bg-[#9ADBE5] rounded-xl p-4 h-full">
              <div className="text">
                <h1 className="text-5xl font-bold font-roc-grotesk text-black">
                  750+
                </h1>
                <p className="text-xl text-black">Community Members</p>
              </div>
              <p className="text mt-14 text-black">
                Design Chics' ultimate goal is to empower women in design to
                reach their full potential. By fostering a supportive and
                inspiring environment, the community aims to bridge the gender
                gap in design and shape the future of the industry with a strong
                female voice.
              </p>
            </div>
            {/* row 2 */}
            <div className="to-deepteal flex flex-col justify-between sm:h-[310px] bg-[#232323] hover:bg-[#9ADBE5] hover:text-black cursor-pointer rounded-xl p-4 ">
              <div>
              <h1 className="text text-5xl font-bold font-roc-grotesk">
                2200+
              </h1>
                <p className="text text-xl">Followers</p>
              </div>
                <p className="text mt-5">Keep up with us on social media</p>
             
            </div>
          </div>
          {/* col 3 */}
          <div className="flex flex-col gap-3 w-full sm:w-[49%] md:w-[49%] lg:w-1/4">
            {/* row 1 */}
            <Image
              unoptimized
              width={0}
              height={0}
              className="w-full"
              src="/images/team_meeting_view.png"
              alt=""
            />

            {/* row 2 */}
            <div className="to-blue flex flex-col justify-between bg-[#fff] rounded-xl p-4 h-full">
              <div className="text">
                {" "}
                <h1 className="text-5xl font-bold font-roc-grotesk text-black">
                  94
                </h1>
                <p className="text-xl text-black">Mentees Onboarded</p>
              </div>
              <p className="text mt-14 text-black">
                As a community, we sponsored newbie and junior designers for
                mentorship program and design courses.
              </p>
            </div>
          </div>
          {/* col 4 */}
          <div className="flex flex-col  gap-3 w-full sm:w-[49%] md:w-[49%] lg:w-1/4">
            {/* row 2 */}
            <div className="to-deepteal flex flex-col justify-between h-full bg-[#232323] rounded-xl p-4">
              <div className="text">
                <h1 className="text-5xl font-roc-grotesk font-helvetica font-bold">
                  26,278+
                </h1>
                <p className="text-xl ">Community Conversations</p>
              </div>
              <p className="text mt-14 ">
                As a supportive community, we thrive on active communication and
                networking within the community.
              </p>
            </div>
            {/* row 1 */}
            <div>
              <Image
                unoptimized
                width={0}
                height={0}
                className="w-full"
                src="/images/team_with_love.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-[#232323] rounded-[20px] p-3 gap-3 flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex flex-col md:flex-row gap-3 md:items-center">
            <Image
              unoptimized
              width={269}
              height={60}
              src="./images/grid_users.png"
              alt=""
            />
            <div>
              <span className="text-white text-2xl font-normal font-karla leading-[28.80px]">
                Join over{" "}
              </span>
              <span className="text-teal-200 text-2xl font-bold font-karla leading-[28.80px]">
                750+
              </span>
              <span className="text-white text-2xl font-normal font-karla leading-[28.80px]">
                {" "}
                designers
              </span>
            </div>
          </div>
          <button className="to-purple bg-[#9ADBE5] h-[56px] rounded-full mt-4 md:mt-0 px-10 text-center text-neutral-950 text-base font-bold font-roc-grotesk uppercase tracking-tight">
            <span className="text"> Join the community</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinTheCommunity;
