import React from 'react'

import SliderContainer from './SliderContainer'

const HearFromOurCommuniyt = () => {
    return (
        <div className="w-full py-[100px] bg-yellow-50 rounded-[40px] flex-col justify-start items-center gap-[30px] inline-flex">
            <div className="flex-col justify-start items-center gap-[15px] flex">
                <div className="w-[708px] text-center"><span className="text-neutral-950 text-[46px] font-bold font-roc-grotesk leading-[50.60px] tracking-tight">Hear from </span><span className="text-indigo-400 text-[46px] font-bold font-roc-grotesk leading-[50.60px] tracking-tight">our community</span><br /><span className="text-neutral-950 text-[46px] font-bold font-roc-grotesk leading-[50.60px] tracking-tight"> about Design Chics</span></div>
            </div>
           <SliderContainer/>      
        </div>
    )
}

export default HearFromOurCommuniyt