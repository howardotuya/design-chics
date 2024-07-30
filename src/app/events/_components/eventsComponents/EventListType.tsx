import React from 'react'
import EventCard from './EventCard'


type props = {
    title: string,
    viewMore?: boolean
}
const EventListType = ({ title, viewMore }: props) => {
    return (
        < >
            <h1 className='my-0 md:my-10 text-[28px] md:text-[40px] lg:text-[46px]  leading-[30.8px] md:leading-[44px] lg:leading-[50px] text-center font-bold font-roc-grotesk'>{title}</h1>
            <div className=' grid grid-cols-1 gap-3 '>
                {Array.from([0, 0, 0].map((e, idx) => <EventCard key={idx} />))}
            </div>
            {viewMore && <div className='flex justify-center my-10'>
                <button className="to-blue  border-2 border-[#9adbe5] rounded-full px-[18px] py-[16px]  md:w-[400px] mx-auto">
                    <span className="text  text-[#9adbe5] font-roc-grotesk text-[16px] font-bold uppercase">
                        View More Events
                    </span>
                </button>
            </div>}
        </>
    )
}

export default EventListType