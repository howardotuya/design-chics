import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

const SliderControl = (props: { ref?: any; }) => {
    
    const { ref } = props;
    const handlePrevClick = () => {

        if (ref.current) {
            ref.current.slickPrev();
        }
    };

    const handleNextClick = () => {
        if (ref.current) {
            ref.current.slickNext();
        }
    };
    return (
        <div className="justify-start items-start gap-[34px] inline-flex mt-5">
            <button onClick={handlePrevClick} className="w-[50px] h-[50px] relative">
                <div className="flex items-center justify-center w-[50px] h-[50px] left-0 top-0  bg-[#E9E4D4] rounded-[594px]">
                    <ChevronLeft size={20} color='black' />
                </div>
            </button>
            <button onClick={handleNextClick} className="w-[50px] h-[50px] relative">
                <div className="flex items-center justify-center w-[50px] h-[50px] left-0 top-0  bg-[#E9E4D4] rounded-[594px]">
                    <ChevronRight size={20} color='black' />
                </div>
            </button>
        </div>
    )
}

export default SliderControl