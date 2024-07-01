import Image from 'next/image'
import React from 'react'

const pages = () => {
  return (
    <>
      
   <div className="flex-col justify-center items-center gap-5 flex">
          {/* <div className="origin-top-left  w-[74px] h-[182px]  bg-red-900">
        <img className=" h-[182px] left-0 top-0  origin-top-left" src="https://via.placeholder.com/74x182" />
        <div className="h-4 left-[21px] top-[-45px]  text-center text-neutral-950 text-lg font-bold font-roc-grotesk uppercase leading-[18px] tracking-wide">450+ Members</div>
    </div> */}
        <div className="w-[918px] text-center">
          <span className="text-[86px] font-bold font-roc-grotesk leading-[94.60px]">Don't go on your</span>
        <span className="text-stone-50 text-[86px] font-bold font-roc-grotesk leading-[94.60px]"> <br/></span>
        <span className="text-brandBlue text-[86px] font-bold font-roc-grotesk leading-[94.60px]">design journey</span>
        <span className="text-stone-50 text-[86px] font-bold font-roc-grotesk leading-[94.60px]"> </span>
        <span className="text-stone-50/opacity-90 text-[86px] font-bold font-roc-grotesk leading-[94.60px]">alone</span>
        </div>
        <div className="w-[785px] text-center text-zinc-400 text-2xl font-normal font-['Karla'] leading-[33.60px]">We are providing African women in design with the resources and opportunities they need to grow and reach their full potential.</div>
    </div>

  
</>
      
  )
}

export default pages