
import React from 'react'
import Image from 'next/image'
import SupportUsBanner from '@/components/banner/SupportUsBanner'
import smiling_inspired_girls from '@/../public/images/smiling_inspired_girls.png'
import new_girls_smiling from '@/../public/images/new_girls_smiling.png'
import { teams } from '@/data/The_team'
import { communityAdvocates } from '@/data/advocates'
import chidinma_about from '@/../public/images/chidinma_about.png'
import { values } from '@/data/values'

const aboutUs = () => {
  return (
    <div>
      <div className='container flex flex-col justify-center gap-5  lg:w-[999px] h-[340px] lg:h-[548px] mx-auto'>
        <h1 className='font-roc-grotesk font-bold text-[40px] leading-[40px] lg:text-[80px] text-center text-[#FDF8E8] lg:leading-[94.6px]'>Daring. <span className='text-brandBlue'>Diverse.</span>  Driven.</h1>
        <p className='font-karla font-normal text-[12px] text-[#BABABA] lg:text-[24px] leading-[17px] lg:leading-[33.6px] text-center'>We are a dynamic community of dedicated female designers who are passionate about creating a more disruptive design world. We believe that design should be inclusive, inspiring, and a powerful tool for positive change.</p>
      </div>
      <div className='bg-[#FDF8E8] text-black  w-full  py-20 lg:py-40'>
        <div className='container grid grid-cols-1 md:grid-cols-2 gap-10 items-center mx-0 lg:mx-10'>
          <div className='w-full md:w-[494px]'>
            <h1 className='font-roc-grotesk font-bold text-[46px] leading-[50.6px]'>Our Mission</h1>
            <p className='font-karla text-[20px] leading-[28px]'>Our mission is to foster communication, encourage collaboration, and accelerate the career development of female designers across the continent, regardless of their current position.</p>
          </div>
          <div className='w-full'>
            <Image src={smiling_inspired_girls} alt='smiling girls' />
          </div>
          <div>
            <Image src={new_girls_smiling} alt='smiling girls' />
          </div>
          <div className='w-full md:w-[494px]'>
            <h1 className='font-roc-grotesk font-bold text-[46px] leading-[50.6px]'>Our Vision</h1>
            <p className='font-karla text-[20px] leading-[28px]'>Design Chics is a community dedicated toconnecting and empowering African women in Design with the right resources and opportunities they need to grow and thrive. </p>
          </div>
        </div>
      </div>
      <div className='bg-[#9ADBE5] text-black py-20'>

        <div className='container'>
          <div className='w-full lg:w-[800px] mx-auto text-center '>
            <h1 className='font-roc-grotesk font-bold text-[46px] leading-[50px]'>Our Values</h1>
            <p className='font-karla text-[20px] leading-[28px]'>Empowering women through collaboration and providing <br /> them with mentorship opportunities. Got other African women <br /> to walk with you.</p>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-8'>
              {values.map(value => <div key={value.id} className='bg-white py-3 px-5 rounded-full gap-3 flex items-center'>
                <div className='p-2 bg-[#9ADBE5] rounded-full'>
                  <Image src={value.logo} alt='' height={39} width={39} />
                </div>
                <p className='font-roc-grotesk font-semibold text-[18px] leading-[25px]'>{value.name}</p>
              </div>)}
            </div>
          </div>
        </div>
      </div>
      <div className='  py-20'>
        {/* team */}
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-3 justify-between text-[#FFFCF5] '>
            <h1 className='font-roc-grotesk font-bold  text-[40px] lg:text-[60px] leading-[33px] lg:leading-[66px]'>Meet The Team</h1>
            <p className='font-karla text-[20px] leading-[28px] w-full lg:w-[411.1px]'>Meet our remarkable team of dedicated women who pour their hearts and souls into our mission, working tirelessly together to bring our vision to life.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-10'>
            {teams.map(team => <div key={team.id} className='relative '>
              <div className='relative h-[299px] w-full '>
                <Image src={team.image} alt="" fill={true} objectFit='cover' />
              </div>
              <div className='absolute bottom-3 py-2 left-1/2 transform -translate-x-1/2 m-auto h-[50px] bg-brandPurple w-9/12  text-center rounded-lg'>
                <h1 className='font-roc-grotesk font-extrabold text-[16px] leading-[23px]'>{team.name}</h1>
                <p className='font-roc-grotesk font-medium text-[14px] text-brandblack leading-[20px]'>{team.position}</p>
              </div>
            </div>)}
          </div>
        </div>
      </div>
      <div className='bg-[#FFFCF5] py-20 text-black'>
        <div className='container'>
          <div className='flex flex-col md:flex-row gap-3 justify-between  '>
            <h1 className='font-roc-grotesk font-bold w-full lg:w-[500px] text-[40px] lg:text-[60px] leading-[33px] lg:leading-[66px]'>Our Community Advocates</h1>
            <p className='font-karla text-[20px] leading-[28px] w-fill lg:w-[411.1px]'>Meet our community advocates who actively support and work towards positive change within the community.</p>
          </div>
          <div className='flex my-10 '>
            {communityAdvocates.map(advocate => <div key={advocate.id} className='relative -mx-2 lg:-mx-5'>
              <div className='relative h-[60px] w-[60px] lg:h-[200px] lg:w-[200px] '>
                <Image src={advocate.image} fill={true} alt={`picture of advocate ${advocate.name}`} />
              </div>
              <div className='absolute bottom-1 lg:bottom-4  text-white rounded-full py-1 px-2 left-1/2 transform -translate-x-1/2 m-auto'>
                <h1 className='font-roc-grotesk text-[4px] lg:text-[14px] leadin-[20px]'>         {advocate.name}</h1>
              </div>
            </div>)}
          </div>
        </div>
      </div>
      <div className='bg-[#9ADBE5] py-24 '>
        <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 w-full lg:w-[955px] lg:h-[586px] mx-auto rounded-2xl bg-white text-black p-7'>
            <div>
              <h1 className='font-roc-grotesk font-bold text-[46px] leading-[55px]'>Meet Dimma:
                <br /> The Founder</h1>
              <Image src={chidinma_about} alt="" />
            </div>
            <div className='flex flex-col gap-5'>

              <p className='font-karla text-[18px] leading-[27px]'>Dinma Anuigbo is a Senior Product Designer with a background in Economics. She has worked with several multinational organizations, such as Shopify, Babbel, and Toptal, leading the design of diverse projects that drive user adoption and GMV growth.</p>
              <p className='font-karla text-[18px] leading-[27px]'>In addition to her professional achievements, she is committed to making a positive impact in the design industry. Dinma founded Design Chics, a non-profit organization that supports African women in design.</p>
              <p className='font-karla text-[18px] leading-[27px]'> She also created a Job Board that showcases remote and relocation opportunities for design talent in Africa. Additionally, she creates content on social media to help designers level up their careers.</p>
              <p className='font-karla text-[18px] leading-[27px]'>She is dedicated to making a real difference with her innovative spirit one step at a time.</p>
            </div>
          </div>
        </div>
      </div>
      <SupportUsBanner />
    </div>
  )
}

export default aboutUs