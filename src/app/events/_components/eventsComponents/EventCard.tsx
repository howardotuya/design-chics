import Image from 'next/image';
import React from 'react'
import { FcCalendar } from "react-icons/fc";

const EventCard = () => {
    return (
        <div className=' bg-[#232323] rounded-[25px] p-7 flex items-center'>
            <div className='flex gap-3 grow'>
                <div>
                    <Image src={"/images/portFolioBanner.png"} width={120} height={120} alt="" />
                </div>
                <div className='flex flex-col gap-2 '>
                    <h1 className='font-roc-grotesk font-bold 
                  text-[16px] md:text-[22px] lg:text-[26px]
                  leading-[19px] md:leading-[31.68px] lg:leading-[37.44px] '>
                        Design Chics Portfolio review
                    </h1>
                    <div className='flex items-center gap-1'>
                        <FcCalendar />
                        <p className='text-[#bcbcbc] font-karla  font-normal text-[10px] md:text-[16px] lg:text-[18px] leading-[16.37px] md:leading-[18px] lg:leading-[28px]'>
                            28th Sept, 2023 | 05 PM WAT
                        </p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FcCalendar />
                        <p className='text-[#bcbcbc] font-karla  font-normal text-[10px] md:text-[16px] lg:text-[18px] leading-[16.37px] md:leading-[18px] lg:leading-[28px]'>
                            Instagram
                        </p>
                    </div>
                </div>
            </div>
            <div className=' hidden md:block flex-none'>
                <button className="to-blue relative border-2 border-[#9adbe5] rounded-full px-[18px] py-[16px]  md:w-[130px] lg:w-[150px]">
                    <span className="text relative text-[#9adbe5] font-roc-grotesk text-[16px] font-bold">
                        ATTEND
                    </span>
                </button>
            </div>
        </div>
    )
}

export default EventCard