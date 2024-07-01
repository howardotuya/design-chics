import Image from 'next/image'
import React from 'react'


type props = {
    comment: {
        name: string,
        role: string,
        avatar: string,
        commentOne: string,
        commentTwo: string
    }
}
const CommunityCard = ({ comment }: props) => {

    const {
        name,
        role,
        avatar,
        commentOne,
        commentTwo, } = comment
    return (
        <div className="mx-3 w-[360px]  p-[25px] bg-[#E9E4D4] rounded-[25px] flex-col justify-start items-start gap-5 inline-flex">
            <div className="flex-col justify-start items-start gap-[15px] flex">
                <div className="flex-col justify-start items-start gap-5 flex">
                    <div className="w-[310px] text-neutral-950 text-base font-normal font-['Karla'] leading-snug">{commentOne}</div>
                    <div className="w-[310px] text-neutral-950 text-base font-normal font-['Karla'] leading-snug">{commentTwo}</div>
                </div>
            </div>
            <div className="justify-start items-center gap-2.5 inline-flex">
                <div className='bg-brandPurple p-1 rounded-full'>
                    <Image width={50} height={50} className=" rounded-[594px] border-2 border-stone-200" alt='' src={avatar} />
                </div>
                <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="text-neutral-950 text-base font-bold font-['Roc Grotesk'] leading-tight">{name}</div>
                    <div className="self-stretch text-neutral-950 opacity-70 text-sm font-medium font-['Karla'] leading-[18.20px]">{role} </div>
                </div>
            </div>
        </div>
    )
}

export default CommunityCard