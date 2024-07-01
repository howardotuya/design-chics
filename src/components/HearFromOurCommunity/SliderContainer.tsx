'use client'
import React, { useRef } from 'react'
import SliderControl from './SliderControl'
import CommentCarousel from './Slider'



const SliderContainer = () => {
    const ref = useRef(null)
    return (

        <div className="flex-col justify-start items-center flex">
            <div className="w-[1420px] relative">

                <CommentCarousel ref={ref} />
            </div>
        <SliderControl sliderRef={ref}/>

        </div>

  
    )
}

export default SliderContainer