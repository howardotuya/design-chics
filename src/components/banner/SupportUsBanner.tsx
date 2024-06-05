import React from 'react'
import Banner from './Banner'
import Button from '../buttons/Button'
import Image from 'next/image'

import GirlsSmiling from '../../../public/images/allGirls.svg'
import Pointer from '../Pointer'


const SupportUsBanner = () => {
    return (
        <>
            <div className='container flex justify-center'>
                <div className='pt-16 w-full lg:w-4/12 '>
                    <Banner
                        title='Like To Support Us?'
                        subTitlte='Support Design Chics Community to help us reach more African women in Design and invest in empowering more women.'
                    />
                    <div className='flex gap-2 my-2'>
                        <Button title='DONATE' className='bg-brandBlack border border-brandBlue text-brandBlue text-xs' />
                        <Button
                            title='BECOME A PARTNER'
                            // onClick={() => console.log('clicked')}
                            className='bg-brandBlue  text-xs'
                        />
                    </div>
                </div>
            </div>

            <div className="relative mt-7  ">
                <div className='w-full h-full md:h-[500px]'>
                    <Image src={GirlsSmiling} alt='A group of happy girls' className="w-full h-full object-cover object-top" />
                </div>
                <Pointer
                    bgColor='brandBlue'
                    position='right'
                    title='You GO girl!'
                    className='bottom-40 left-12 lg:bottom-48 lg:left-80 text-black'
                />
                <Pointer
                    bgColor='brandPurple'
                    position='left'
                    title='You’re simply FIRE!'
                    className='bottom-20 right-10 lg:bottom-32 lg:right-40 text-white'
                />
            </div>
        </>

    )
}

export default SupportUsBanner