import React from "react";
import Image from "next/image";
import { styles } from "@/styles";
import Button from "@/components/buttons/Button";
import WhyDesignChickOne from "@/components/whyDesignChickOne";
import SupportUsBanner from "@/components/banner/SupportUsBanner";
import Brands from "@/components/Brands";



const HomePage = () => {
  return (
    <main>

      <div className=" relative">
        <div className="container relative">
          <div className="flex flex-col items-center justify-center text-center relative ">
            <Image src="/images/membercount.png" alt='' width={130} height={200} />
            <div className=" left-0 inline-flex flex-col items-center gap-16  w-full">
              <p className="text-transparent font-roc-grotesk font-helvetica text-[40px] lg:text-[86px] font-bold tracking-tight leading-95 leading-tight mt-1 relative text-center w-full ">
                <span className="text-white font-helvetica tracking-tighter">Dont go on your</span>
                <span className="span">
                  {" "}
                  <br />
                </span>
                <span className="text-blue-300 tracking-tighter">design journey</span>
                <span className="span">&nbsp;</span>
                <span className="text-white font-helvetica tracking-tighter">alone</span>
              </p>
              <p className="text-gray-400 font-karla font-helvetica text-base font-normal leading-42 leading-normal text-center lg:w-[785px]">
                We are providing African women in design with the resources and opportunities they need to grow and reach
                their full potential.
              </p>
            </div>
            <div className=" hidden lg:block absolute top-[80px] right-[150px] h-[65px] w-[185px]">
              <div className="relative h-60 top-5">
                <div className="absolute top-4 left-8  bg-brandPurple rounded-full inline-flex items-center justify-center gap-2.5 px-5 py-3">
                  <div className="relative  text-white font-karla font-helvetica text-sm font-bold leading-5 tracking-normal whitespace-nowrap">Design boldly, girl!</div>
                </div>
                <Image className="absolute top-0 left-0 " width={20} height={70} alt="Vector" src="https://c.animaapp.com/unzonupS/img/vector.svg" />
              </div>

            </div>
            <div className="hidden lg:block absolute top-[406px] left-0 h-[67px] w-[385px] transform rotate-180">
              <div className="h-[62px] relative">
                <div className="absolute top-0 left-8 bg-[#0e4a56] rounded-full inline-flex items-center justify-center gap-[11.28px] px-5 py-3">
                  <p className="relative text-[#fffcf5] font-karla font-helvetica text-lg font-bold leading-[22.4px] mt-[-2.82px] whitespace-nowrap transform rotate-180 w-fit">You can shape the world with your designs</p>
                </div>
                <Image className="absolute top-[40px] left-0  transform -rotate-180" width={22} height={22} alt="Vector" src="https://c.animaapp.com/unzonupS/img/vector-1.svg" />
              </div>
            </div>
          </div>

          {/* down arrow */}
          <div className=" flex justify-center my-10 lg:my-24  ">
            <Image src="/images/arrowDown.png" className="animate-bounce" alt='' width={77} height={82} />
          </div>
          <div className="flex items-center justify-center gap-10">
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
      <div className="my-10 lg:my-20">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col gap-3">
            <div className="relative inline-flex flex-col items-start gap-[10px] flex-[0_0_auto]">
              <p className="relative text-transparent font-roc-grotesk  font-helvetica text-[40px] lg:text-[46px] font-bold tracking-[0.02px] leading-[50.6px] mt-[-0.99px] w-[427px]">
                <span className="text-[#fffcf5e6] tracking-[0.01px]">The power of a </span>
                <span className="text-[#9291eb] tracking-[0.01px]">community</span>
                <span className="text-[#fffcf5e6] tracking-[0.01px]"> rooting for each other</span>
              </p>
              <p className="relative text-[#bababa] font-karla font-helvetica text-[20px] font-normal leading-[28px] tracking-[0] ">
                We are empowering women through collaboration and creativity. Different phases in your career?
              </p>
            </div>
            <button className="relative flex items-center justify-center gap-[8.25px] bg-[#9291eb] rounded-[515.61px] box-border p-[18px_16px] w-[280px] flex-[0_0_auto] all-unset">
              <div className="relative font-roc-grotesk  font-helvetica text-[16px] font-bold tracking-[0] mt-[-1.03px] w-fit">JOIN THE COMMUNITY</div>
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
                    <div className=" bg-[#9291eb] rounded-full h-12 w-12" />
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
                    <div className="relative h-12 w-16 ">
                      <div className="relative h-12 w-12">
                        <Image src={'./svg/round-wave.svg'} fill={true} alt="" />
                      </div>
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
                  <div className="relative  w-28">
                    <div className="relative h-12 top-8">
                      <div className="relative h-12 w-28">
                        <div className="absolute bg-[#9291eb] rounded-full h-[20px] w-[20px] top-0 left-0" />
                        <div className="absolute bg-[#9291eb] rounded-full h-[20px] w-[20px] top-0 left-3" />
                        <div className="absolute bg-[#9291eb] rounded-full h-[20px] w-[20px] top-0 left-5" />
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
                    <div className="relative h-26 w-26 left-1 top-1">
                      <div className="relative h-26">
                        <div className="absolute bg-[#9291eb] rounded-full h-[20px] w-[20px] top-0 left-0" />
                        <div className="absolute bg-[#9291eb] rounded-full h-[20px] w-[20px] top-0 left-4" />
                        <div className="absolute bg-[#9291eb] rounded-full h-[20px] w-[20px] top-4 left-0" />
                        <div className="absolute bg-[#9291eb] rounded-full h-[20px] w-[20px] top-4 left-4" />
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
      <div className="p-2">
        <WhyDesignChickOne/>
      </div>

      {/* stop */}
      {/* why design chick */}
      {/* <div className="bg-[#FDF8E8] py-20">
        <div className="container">
          <Banner title="Why Design Chics?"
            subTitlte="Being a part of Design Chics Community gives you access to:"
            className="text-black"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="bg-[#0E4A56] p-5  inline-flex flex-col gap-4 rounded-lg">
              <div>
                <div className="bg-[#9ADBE5] rounded-full inline-block p-2">
                  <BriefcaseBusiness strokeWidth={2} color="black" />

                </div>
              </div>
              <h1 className="text-[22px] font-roc-grotesk font-bold leading-[30.8px] text-white">
                Job Opportunities
              </h1>
              <p className="text-[18px] font-karla leading-[25.2px] text-white">Get access to shared job openings for Designers of every level. </p>
            </div>
            <div className="bg-[#0E4A56] p-5  inline-flex flex-col gap-4 rounded-lg">
              <div>
                <div className="bg-[#9ADBE5] rounded-full inline-block p-2">
                  <MessagesSquare color="black" />
                </div>
              </div>
              <h1 className="text-[22px] font-roc-grotesk font-bold leading-[30.8px] text-white">
                Mentorship Programs
              </h1>
              <p className="text-[18px] font-karla leading-[25.2px] text-white">Receive personalized guidance as you navigate your design journey. </p>
            </div> */}
      {/* <div className="bg-[#0E4A56] p-5  inline-flex flex-col gap-4 rounded-lg">
              <div>
                <div className="bg-[#9ADBE5] rounded-full inline-block p-2">
                  <UsersRound color="black" />
                </div>
              </div>
              <h1 className="text-[22px] font-roc-grotesk font-bold leading-[30.8px] text-white">
                DC Connect
              </h1>
              <p className="text-[18px] font-karla leading-[25.2px] text-white">Be a part of our virtual meetups held monthly & sometimes fortnightly! </p>
            </div>
            <div className="bg-[#0E4A56] p-5  inline-flex flex-col gap-4 rounded-lg">
              <div>
                <div className="bg-[#9ADBE5] rounded-full inline-block p-2">
                  <CalendarDays color="black" />
                </div>
              </div>
              <h1 className="text-[22px] font-roc-grotesk font-bold leading-[30.8px] text-white">
                DC Online Events
              </h1>
              <p className="text-[18px] font-karla leading-[25.2px] text-white">Engage in helpful conversations, ask questions, and gain wisdom from industry experts.</p>
            </div>
            <div className="bg-[#0E4A56] p-5  inline-flex flex-col gap-4 rounded-lg">
              <div>
                <div className="bg-[#9ADBE5] rounded-full inline-block p-2">
                  <Search color="black" />
                </div>
              </div>
              <h1 className="text-[22px] font-roc-grotesk font-bold leading-[30.8px] text-white">
                UX Roast
              </h1>
              <p className="text-[18px] font-karla leading-[25.2px] text-white">Dissect digital products as a community, explore and brainstorm innovative additions.</p>
            </div>
            <div className="bg-[#0E4A56] p-5  inline-flex flex-col gap-4 rounded-lg">
              <div>
                <div className="bg-[#9ADBE5] rounded-full inline-block p-2">
                  <Laptop color="black" />
                </div>
              </div>
              <h1 className="text-[22px] font-roc-grotesk font-bold leading-[30.8px] text-white">
                Portfolio Reviews
              </h1>
              <p className="text-[18px] font-karla leading-[25.2px] text-white">Gain transformative insights and constructive feedback to enhance your portfolio.</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className=" py-20">
        <div className="">
          <div className="container grid grid-cols-1 lg:grid-cols-3 justify-between items-start gap-3 my-10 lg:my-20 ">
            <div className="flex flex-col gap-3 col-span-0 lg:col-span-2  ">
              <h1 className="text-[30px] font-roc-grotesk font-bold leading-[33px] lg:text-[60px] lg:leading-[66px]">The <span className="text-[#9ADBE5]">community</span> </h1>
              <h1 className="text-[30px] font-roc-grotesk font-bold leading-[33px] lg:text-[60px] lg:leading-[66px]">so far...</h1>
            </div>
            <p className="font-roc-grotesk  text-[16px] leading-[24px]">Join our thriving community and tap into the collective knowledge, inspiration, and support to amplify your success and creativity.</p>
          </div>
          {/* parent flex */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3 px-[24px] md:px-[48px] lg:px-[64px] ">
            <div className=" h-[600px] grid grid-rows-5 gap-3">
              <div className="bg-[#232323] hover:bg-[#0E4A56] row-span-2 rounded-lg p-3 flex flex-col justify-between">
                <div>
                  <h1 className="font-roc-grotesk font-bold text-[50px] leading-[60px]">30+</h1>
                  <h2 className="font-roc-grotesk font-semibold text-[20px] leading-[24px]">DC Online Events</h2>
                </div>
                <p className="font-roc-grotesk  text-[16px] leading-[24px]">
                  Join our lively Twitter and Instagram sessions, where we invite leading female designers to share their insights on various captivating topics.
                </p>
              </div>
              <div className="h-full w-full relative rounded-lg">
                <Image src="/images/team_at_event.png" alt="" fill={true} />
              </div>
              <div className="row-span-2 grid text-center text-black grid-cols-2 grid-rows-2 gap-3">
                <div className="bg-[#171616] flex items-center justify-center  rounded-lg">
                  <Image src={'/images/twitter_white_icon.png'} alt="twitter logo" height={30} width={30} />
                </div>

                <div className="bg-[#171616] flex items-center justify-center  rounded-lg">
                  <Image src={'/images/instagram_white_icon.png'} alt="twitter logo" height={30} width={30} />
                </div>
                <div className="bg-[#171616] flex items-center justify-center  rounded-lg">
                  <Image src={'/images/linkedin_white_icon.png'} alt="twitter logo" height={30} width={30} />
                </div>
                <div className="bg-[#171616] flex items-center justify-center  rounded-lg">
                  <Image src={'/images/email_white_icon.png'} alt="twitter logo" height={30} width={30} />
                </div>
              </div>
            </div>
            <div className=" h-[600px] grid grid-row-6 gap-3">
              <div className="p-3 bg-[#9ADBE5] hover:bg-[#FDF8E8] text-black flex flex-col justify-between row-span-2 rounded-lg">
                <div>
                  <h1 className="font-roc-grotesk font-bold text-[50px] leading-[60px]">750+</h1>
                  <h2 className="font-roc-grotesk font-semibold text-[20px] leading-[24px]">Community Members</h2>
                </div>
                <p className="font-roc-grotesk  text-[16px] leading-[24px]">
                  Design Chics ultimate goal is to empower women in design to reach their full potential. By fostering a supportive and inspiring environment, the community aims to bridge the gender gap in design and shape the future of the industry with a strong female voice.
                </p>
              </div>
              <div className="bg-[#232323] hover:bg-[#0E4A56] row-span-4 rounded-lg p-3 flex flex-col justify-between">
                <div>
                  <h1 className="font-roc-grotesk font-bold text-[50px] leading-[60px]">2200+</h1>
                  <h2 className="font-roc-grotesk font-semibold text-[20px] leading-[24px]">Followers</h2>
                </div>
                <p className="font-roc-grotesk  text-[16px] leading-[24px]">
                  Keep up with us on social media
                </p>
              </div>
            </div>
            <div className=" h-[600px] grid grid-row-5 gap-3">
              <div className="h-full w-full relative row-span-2 rounded-lg">
                <Image src="/images/team_meeting_view.png" alt="" fill={true} />
              </div>
              <div className="bg-white hover:bg-[#9ADBE5] p-3 flex flex-col justify-between text-black row-span-3 rounded-lg">
                <div>
                  <h1 className="font-roc-grotesk font-bold text-[50px] leading-[60px]">94</h1>
                  <h2 className="font-roc-grotesk font-semibold text-[20px] leading-[24px]">Mentees Onboarded</h2>
                </div>
                <p className="font-roc-grotesk  text-[16px] leading-[24px]">
                  As a community, we sponsored newbie and junior designers for mentorship program and design courses.
                </p>
              </div>
            </div>
            <div className=" h-[600px] grid grid-row-8 gap-3">
              <div className="bg-[#232323] hover:bg-[#0E4A56] p-3 flex flex-col justify-between row-span-5 rounded-lg">
                <div>
                  <h1 className="font-roc-grotesk font-bold text-[50px] leading-[60px]">26,278+</h1>
                  <h2 className="font-roc-grotesk font-semibold text-[20px] leading-[24px]">Community Conversations</h2>
                </div>
                <p className="font-roc-grotesk  text-[16px] leading-[24px]">
                  As a supportive community, we thrive on active communication and networking within the community.
                </p>
              </div>
              <div className="h-full w-full relative  row-span-5 rounded-lg">
                <Image src="/images/team_with_love.png" alt="" fill={true} />
              </div>

            </div>

            {/*  */}
          </div>
          <div className="mt-4 px-[24px] md:px-[48px] lg:px-[64px] ">
            <div className="container  bg-[#232323]  w-full p-8 flex flex-col lg:flex-row   lg:items-start  justify-between rounded-lg ">
              <div className="flex flex-col lg:flex-row items-center gap-3  w-full">
                {/* <Image src={grid_users} alt="" /> */}
                <h1 className="font-karla font-bold text-[24px] leading-[28.8px]">Join over 750+ designers</h1>
              </div>
              <div>
                <Button
                  title='Join the community'
                  className='bg-brandBlue  text-black uppercase font-roc-grotesk text-xs w-full'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#FFFCF5] text-black py-20 ">
        <div className="container  ">
          <div className="flex flex-col items-center justify-center gap-5 mb-5">
            <h1 className={`${styles.h1Big} text-center`}>Hear from our <span className="text-[#0E4A56]">community</span> </h1>
            <h1 className={`${styles.h1Big} text-center`}>about Design Chics </h1>

          </div>
        </div>
        <div className="container relative w-full h-[200px] md:h-[300px] px-5 ">
          <Image src={'/images/desing_comments.png'} alt="" fill={true} />
        </div>

      </div>
      {/* <div className=" py-20 bg-white text-black ">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-5 mb-5 text-center">
            <h1 className={styles.h1Big}>Design Chics Merch: </h1>
            <h1 className={styles.h1Big}>Rep Your Community </h1>
            <button className='p-4 bg-brandBlue text-black font-bold  rounded-full mx-auto w-[280px]'>
              shop now
            </button>
          </div> */}

      {/* <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
              {Array.from([1, 2, 3]).map((el, i) => (
                <Card key={i} className='relative  text-white p-3'>
                  <CardHeader className='p-0 m-2'>
                    <div className='flex items-center bg-white rounded-lg h-50 md:h-60 w-full'>
                      <Image className='w-full h-full' src={shirtSvg} alt='' />
                      <p className='absolute top-7 right-7 w-10 p-1 text-black text-xs text-center  bg-brandBlue rounded-full'>New</p>
                    </div>
                  </CardHeader>
                  <CardContent className='px-2 py-0 '>
                    <p className='text-xs font-karla font-normal '>Star Girl Designer</p>
                    <div className='flex flex-row items-center gap-1'>
                      <p className='font-roc-grotesk font-bold text-xl items-center'>
                        ₦8,000
                      </p>
                      <span className='text-xs text-brandPurple font-roc-grotesk font-bold'>-15%</span>
                    </div>
                  </CardContent>
                  <CardFooter className='px-2 flex flex-col md:flex-row justify-between items-start font-karla font-normal'>
                    <div className='text-xs md:text-sm'>
                      <p className='text-brandLightGrey'>Available Color:</p>
                      <p> White, Black, Army Green, Purple</p>
                    </div>
                    <div className='text-xs md:text-sm '>
                      <p className='text-brandLightGrey'>Available Sizes:</p>
                      <p> S  M  L  XL  XXL</p>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SupportUsBanner /> */}
      <SupportUsBanner /> 
    </main>
  );
};



export default HomePage