import Banner from "@/components/banner/Banner";
import SupportUsBanner from "@/components/banner/SupportUsBanner";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";

import shirtSvg from '../../public/images/shirt.svg'
import { styles } from "@/styles";
import { BriefcaseBusiness, CalendarDays, Check, Laptop, MessagesSquare, MoveDown, Search, UsersRound } from "lucide-react";
import Pointer from "@/components/Pointer";
import Button from "@/components/buttons/Button";

import grid_users from '@/../public/images/grid_users.png'


export default function Home() {
  return (

    <main>

      <div className="bg-black relative py-20">
        <div className="container relative">
          <div className="flex flex-col items-center justify-center text-center relative ">
            <Image src="/images/membercount.png" alt='' width={130} height={200} />
            <h1 className="font-roc-grotesk font-bold text-[43px] leading-[48px] lg:text-[86px] lg:leading-[94.6px]">Dont go on your </h1>
            <h1 className="font-roc-grotesk font-bold text-[43px] leading-[48px] lg:text-[86px] lg:leading-[94.6px]"><span className="text-[#9ADBE5]">design journey</span> alone</h1>
            <p className="w-full md:w-3/5 text-center text-[#BABABA] font-karla text-[24px] leading-[33.6px]">We are providing African women in design with the resources and opportunities they need to grow and reach their full potential.</p>
            <Pointer
              bgColor='brandBlue'
              position='right'
              title='You can shape the world with your designs'
              className='hidden md:block bottom-40 left-12 md:-bottom-10 md:left-0 lg:-bottom-20 lg:left-30 text-black '
            />
            <Pointer
              bgColor='brandPurple'
              position='left'
              title='Design boldly, girl!'
              className='hidden md:block bottom-40 right-12 md:bottom-20 md:right-0 lg:bottom-20 lg:right-30 text-black'
            />
            {/* <Pointer
              bgColor='brandGreen'
              position='left'
              title='Design boldly, girl!'
              className='bottom-40 right-12 lg:bottom-20 lg:right-30 text-black bg-brandGreen'
            /> */}
          </div>


          <div className=" flex justify-center my-10 lg:my-20 ">
            <Image src="/images/arrowDown.png" alt='' width={65} height={120} />
          </div>
          <div className="flex justify-center my-10 lg:my-20">

            <div className="w-full lg:w-9/12 h-[100px] lg:h-[280px] relative ">
              <Image src={'/images/inspire_picture.png'} alt="" fill={true} />
            </div>
          </div>

        </div>
      </div>
      {/* power or community */}
      <div className="my-5 lg:my-20">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="font-roc-grotesk font-bold text-[46px] leading-[50.6px]">The power of a <span className="text-[#9291EB]">community</span> rooting for each other</h1>
            <p className="font-karla text-[20px] leading-[28px]">We are empowering women through collaboration and creativity. Different phases in your career? </p>
            <button className='p-4 bg-brandBlue text-black font-bold  font-roc-grotesk rounded-full uppercase'>Join the community</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 col-span-2">
            <div className="border p-5  inline-flex flex-col gap-4 rounded-lg">
              <div>
                <div className="bg-[#9291EB] rounded-full inline-block p-2">
                  <Check />
                </div>
              </div>
              <h1 className="text-[22px] font-roc-grotesk font-bold leading-[30.8px] text-white">
                Newbie Designers
              </h1>
              <p className="text-[18px] font-karla leading-[25.2px] text-white">Start your design journey with us. Access mentorship and resources to launch your career.</p>
            </div>
            {/* ss */}
            <div className="border p-5  inline-flex flex-col gap-4 rounded-lg">
              <div>
                <div className="bg-[#9291EB] rounded-full inline-block p-2">
                  <Check />
                </div>
              </div>
              <h1 className="text-[22px] font-roc-grotesk font-bold leading-[30.8px] text-white">
                Junior Designers
              </h1>
              <p className="text-[18px] font-karla leading-[25.2px] text-white">Elevate your skills, network and thrive as a junior designer with us.</p>
            </div>
            {/* ss */}
            <div className="border p-5  inline-flex flex-col gap-4 rounded-lg">
              <div>
                <div className="bg-[#9291EB] rounded-full inline-block p-2">
                  <Check />
                </div>
              </div>
              <h1 className="text-[22px] font-roc-grotesk font-bold leading-[30.8px] text-white">
                Mid-Level Designers
              </h1>
              <p className="text-[18px] font-karla leading-[25.2px] text-white">Advance your career and refine your craft in our supportive community.</p>
            </div>
            {/* ss */}
            <div className="border p-5  inline-flex flex-col gap-4 rounded-lg">
              <div>
                <div className="bg-[#9291EB] rounded-full inline-block p-2">
                  <Check />
                </div>
              </div>
              <h1 className="text-[22px] font-roc-grotesk font-bold leading-[30.8px] text-white">
                Senior Designers
              </h1>
              <p className="text-[18px] font-karla leading-[25.2px] text-white">Leverage your expertise, mentor and connect with experienced peers in our design network.</p>
            </div>
            {/* ss */}
          </div>

        </div>
      </div>
      {/* brands */}

      <div className="my-10 lg:my-20">
        <div className="container">
          <h1 className="font-bold font-roc-grotesk text-center text-[46px] leading-[50.6px]">Brands we ve <span className="text-[#9ADBE5]">partnered</span>  with</h1>
          {/* <div className="flex justify-center gap-3">
            <div className="bg-[#FDF8E8] p-4 rounded-full relative w-[150px] h-[90px]">
              <Image src="/images/propel_banner.png" alt="" fill={true} />
            </div>
            <div className="bg-[#FDF8E8] p-4 rounded-full relative w-[150px] h-[90px]">
              <Image src="/images/geneza_banner.png" alt="" fill={true} />
            </div>
            <div className="bg-[#FDF8E8] p-4 rounded-full relative w-[150px] h-[90px]">
              <Image src="/images/learnable_banner.png" alt="" fill={true} />
            </div>
            <div className="bg-[#FDF8E8] p-4 rounded-full relative w-[150px] h-[90px]">
              <Image src="/images/ud_banner.png" alt="" fill={true} />
            </div>
            <div className="bg-[#FDF8E8] p-4 rounded-full relative w-[150px] h-[90px]">
              <Image src="/images/redwire_banner.png" alt="" fill={true} />
            </div>
            <div className="bg-[#FDF8E8] p-4 rounded-full relative w-[150px] h-[90px]">
              <Image src="/images/blocathon_banner.png" alt="" fill={true} />
            </div>
          </div> */}
        </div>
      </div>
      {/* stop */}
      {/* why design chick */}
      <div className="bg-[#FDF8E8] py-20">
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
            </div>
            <div className="bg-[#0E4A56] p-5  inline-flex flex-col gap-4 rounded-lg">
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
      </div>
      <div className="bg-black py-20">
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
                <Image src={grid_users} alt=""/>
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
      <div className=" py-20 bg-white text-black ">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-5 mb-5 text-center">
            <h1 className={styles.h1Big}>Design Chics Merch: </h1>
            <h1 className={styles.h1Big}>Rep Your Community </h1>
            <button className='p-4 bg-brandBlue text-black font-bold  rounded-full mx-auto w-[280px]'>
              shop now
            </button>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
              {Array.from([1, 2, 3]).map((el, i) => (
                <Card key={i} className='relative bg-black text-white p-3'>
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
      <SupportUsBanner />
    </main>
  );
}
