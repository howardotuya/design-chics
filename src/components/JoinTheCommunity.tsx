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
    <div className="container mx-auto py-20 lg:py-40">
      <div className="justify-between items-start md:items-center flex flex-col md:flex-row mb-5 md:mb-10">
        <div className="md:w-[452px]">
          <span className="text-stone-50 text-6xl font-bold font-roc-grotesk leading-[66px]">
            The{" "}
          </span>
          <span className="text-brandBlue text-6xl font-bold font-roc-grotesk leading-[66px]">
            community
          </span>
          <span className="text-stone-50 text-6xl font-bold font-roc-grotesk leading-[66px]">
            {" "}
            so far...
          </span>
        </div>
        <div className="md:w-[333px] text-stone-50/opacity-90 text-xl font-normal font-karla leading-7">
          Join our thriving community and tap into the collective knowledge,
          inspiration, and support to amplify your success and creativity.
        </div>
      </div>
      <div className="flex items-start flex-col flex-nowrap relative w-full min-w-min justify-start overflow-visible gap-4">
        <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap mt-10 flex-start gap-3 h-min justify-start overflow-visible relative w-full ">
          {/* col 1 */}
          <div className="gap-3 flex flex-col w-full sm:w-[50%] md:w-[50%] lg:w-1/4">
            {/* row 1 */}
            <div className="bg-[#232323] rounded-xl p-4">
              <h1 className="text-5xl font-bold font-roc-grotesk">30+</h1>
              <p className="text-xl">DC Online Events</p>
              <p className="mt-5">
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
            <div className="h-full rounded-xl grid grid-cols-2 gap-3">
              {socials.map((item) => (
                <a
                  target="_blank"
                  href={item.link}
                  key={item.name}
                  className="bg-[#232323] hover:bg-[#9ADBE5] slide hover:text-black cursor-pointer rounded-2xl h-[100px] flex items-center justify-center"
                >
                  <span className="text"> {item.icon}</span>
                </a>
              ))}
            </div>
          </div>
          {/* col 2 */}
          <div className="flex flex-col-reverse gap-3 sm:flex-col w-full sm:w-[50%] md:w-[50%] lg:w-1/4">
            {/* row 1 */}
            <div className="flex flex-col justify-between bg-[#9ADBE5] rounded-xl p-4 h-full">
              <div>
                <h1 className="text-5xl font-bold font-roc-grotesk text-black">
                  750+
                </h1>
                <p className="text-xl text-black">Community Members</p>
              </div>
              <p className="mt-14 text-black">
                Design Chics' ultimate goal is to empower women in design to
                reach their full potential. By fostering a supportive and
                inspiring environment, the community aims to bridge the gender
                gap in design and shape the future of the industry with a strong
                female voice.
              </p>
            </div>
            {/* row 2 */}
            <div className="bg-[#232323] rounded-xl p-4">
              <h1 className="text-5xl font-bold font-roc-grotesk">2200+</h1>
              <p className="text-xl">Followers</p>
              <p className="mt-5">Keep up with us on social media</p>
            </div>
          </div>
          {/* col 3 */}
          <div className="flex flex-col gap-3 w-full sm:w-[50%] md:w-[50%] lg:w-1/4">
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
            <div className="flex flex-col justify-between bg-[#fff] rounded-xl p-4 h-full">
              <div>
                {" "}
                <h1 className="text-5xl font-bold font-roc-grotesk text-black">
                  94
                </h1>
                <p className="text-xl text-black">Mentees Onboarded</p>
              </div>
              <p className="mt-14 text-black">
                As a community, we sponsored newbie and junior designers for
                mentorship program and design courses.
              </p>
            </div>
          </div>
          {/* col 4 */}
          <div className="flex flex-col  gap-3 w-full sm:w-[50%] md:w-[50%] lg:w-1/4">
            {/* row 2 */}
            <div className="flex flex-col justify-between h-full bg-[#232323] rounded-xl p-4">
              <div>
                <h1 className="text-5xl font-bold font-roc-grotesk ">
                  26,278+
                </h1>
                <p className="text-xl ">Community Conversations</p>
              </div>
              <p className="mt-14 ">
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

        <div className="w-full bg-[#232323] rounded-[20px] p-3 gap-3 flex flex-col md:flex-row md:justify-between md:items-center">
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
          <button className="slide bg-[#9ADBE5] h-[56px] rounded-full px-10 text-center text-neutral-950 text-base font-bold font-roc-grotesk uppercase tracking-tight">
            <span className="text"> Join the community</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinTheCommunity;
