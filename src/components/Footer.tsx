import React from 'react'
import footerLinks from './footerLinks.json'
import Link from 'next/link'
import Button from './buttons/Button'
import Input from './input/Input'
import Image from 'next/image'
import { styles } from '@/styles'

const Footer = () => {
    return (
        <div className='h-full lg:h-[299px]  py-10 md:py-20 bg-[#FDF8E8]'>
            <div className='container  text-brandblack grid grid-cols-1 lg:grid-cols-6 items-start justify-between gap-10'>
                <div className='relative w-[100.71px] h-[60px] col-span-0 lg:col-span-3 '>
                    <Image src={'/images/logo_black.png'} fill={true} alt="logo" />
                </div>

                {footerLinks.map(footer => (
                    <div key={footer.id} className=''>
                        <h1 className={styles.h1small}>
                            {footer.title}
                        </h1>
                        <div className='flex flex-col gap-3'>
                            {footer.subtitle.map(subT => (<Link href={subT.href} key={subT.id} className={styles.body}>{subT.title}</Link>))}
                        </div>
                    </div>
                ))}


                <div className='flex row ' >
                    <div className='h-[24px] w-[24px] relative'>
                        <Image src={'/images/twitter_logo.png'} alt="twitter logo" fill={true} />
                    </div>
                    <div className='h-[24px] w-[24px] relative'>
                        <Image src={'/images/instagram_logo.png'} alt="instagram logo" fill={true} />
                    </div>
                    <div className='h-[24px] w-[24px] relative'>
                        <Image src={'/images/linkedin_logo.png'} alt="linkedin logo" fill={true} />
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Footer








// import React from 'react'
// import footerLinks from './footerLinks.json'
// import Link from 'next/link'
// import Button from './buttons/Button'
// import Input from './input/Input'

// import Image from 'next/image'

// const Footer = () => {
//     return (
//         <div className='container  py-10 md:py-20 bg-white text-brandblack flex flex-col md:flex-row items-start justify-evenly gap-10'>
//             <div className='relative w-[100.71px] h-[60px]'>
//                 <Image src={'/images/logo_black.png'} fill={true} alt="logo" />
//             </div>
//             <div className='grid grid-rows-2 grid-cols-3 md:grid-cols-4 md:grid-rows-2 gap-5 '>

//             </div>
//         </div>
//     )
// }

// export default Footer