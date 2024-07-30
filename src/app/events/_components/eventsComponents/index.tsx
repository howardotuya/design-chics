import React from 'react'
import EventListType from './EventListType'

const EventComponents = () => {
    return (
        <div className="mx-5 px-3  md:px-10 lg:px-30 mt-40  rounded-[40px] py-10 lg:py-20 bg-[#171717]">
            <div className=" lg:px-[24px] max-w-[1440px] mx-auto flex flex-col gap-10">
                <EventListType title='Upcoming Events' />
                <EventListType title='Past Events' viewMore />
            </div>
        </div>
    )
}

export default EventComponents