import React from 'react'
import footerLinks from './footerLinks.json'
import Link from 'next/link'
import Button from './buttons/Button'
import Input from './input/Input'
import Image from 'next/image'
import { styles } from '@/styles'

const Footer = () => {
    return (
//      <div className="w-[1200px] h-[179px] justify-between items-start inline-flex">
//     <div className="w-48 flex-col justify-start items-start gap-2.5 inline-flex" />
//     <div className="justify-center items-start gap-[120px] flex">
//         <div className="flex-col justify-start items-start gap-5 inline-flex">
//             <div className="text-neutral-950 text-lg font-bold font-['Roc Grotesk Variable']">Community</div>
//             <div className="flex-col justify-start items-start gap-[19px] flex">
//                 <div className="text-neutral-950 text-base font-normal font-['Karla']">Become a member</div>
//                 <div className="text-neutral-950 text-base font-normal font-['Karla']">Initiatives</div>
//                 <div className="text-neutral-950 text-base font-normal font-['Karla']">Events</div>
//                 <div className="text-neutral-950 text-base font-normal font-['Karla']">Shop Merch</div>
//             </div>
//         </div>
//         <div className="flex-col justify-start items-start gap-5 inline-flex">
//             <div className="text-neutral-950 text-lg font-bold font-['Roc Grotesk Variable']">About Us</div>
//             <div className="flex-col justify-start items-start gap-[19px] flex">
//                 <div className="text-neutral-950 text-base font-normal font-['Karla']">Meet the Team</div>
//                 <div className="text-neutral-950 text-base font-normal font-['Karla']">Partner With Us</div>
//                 <div className="text-neutral-950 text-base font-normal font-['Karla']">Volunteer</div>
//             </div>
//         </div>
//         <div className="justify-center items-start gap-5 flex">
//             <div className="w-6 h-6 relative" />
//             <div className="w-6 h-6 relative" />
//             <div className="w-6 h-6 relative" />
//         </div>
//     </div>
// </div>
        <div className="w-full py-[60px] bg-yellow-50 flex-col justify-start items-center gap-[60px] inline-flex">
            <div className="w-[1200px] justify-between items-start inline-flex ">
                
               
                <Image src='/svg/logo_black.svg' alt={'Image Logo'} width={77} height={46} />
                <div className="justify-center items-start gap-[120px] flex flex-row">
                  
                        {footerLinks.map(footer => (
                            <div key={footer.id} className='flex-col justify-start items-start gap-5 inline-flex'>
                                <div className="text-neutral-950 text-lg font-bold font-roc-grotesk"> {footer.title}</div>
                                <div className='flex-col justify-start items-start gap-[19px] flex'>
                                    {footer.subtitle.map(subT => (<Link href={subT.href} key={subT.id} className="text-neutral-950 text-base font-normal font-karla">{subT.title}</Link>))}
                                </div>
                            </div>
                        ))}
                   
                    <div className="justify-center items-start gap-5 flex">
                        <div className="w-6 h-6 relative " >
                            <Image src={'/images/twitter_logo.png'} alt="twitter logo" fill={true} />
                        </div>
                        <div className="w-6 h-6 relative" >
                            <Image src={'/images/instagram_logo.png'} alt="instagram logo" fill={true} />
                        </div>
                        <div className="w-6 h-6 relative" >
                            <Image src={'/images/linkedin_logo.png'} alt="linkedin logo" fill={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
