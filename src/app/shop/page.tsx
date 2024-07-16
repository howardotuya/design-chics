import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"


import shirtSvg from '../../../public/images/shirt.svg'
import Image from 'next/image'
import Pointer from '@/components/Pointer'
import SupportUsBanner from '@/components/banner/SupportUsBanner'
import ComingSoon from '@/components/ComingSoon'


const Shop = () => {
    return (
        <div >
             <div className='container'>
                {/* <div className='my-10 lg:my-20 flex flex-col justify-center items-center relative '>
                    <h1 className='flex flex-col text-[31px] md:text-6xl font-roc-grotesk font-bold  mb-5'>
                        <span>Design Chics Merch:</span>
                        <span>Rep Your Community</span>
                    </h1>
                    <p className='w-full md:w-2/5 text-center text-sm text-[#BABABA] font-karla font-normal leading-4'>
                        We are providing African women in design with the resources and opportunities they need to grow and reach their full potential.
                    </p>
                    <Pointer
                        bgColor='brandPurple'
                        position='left'
                        title='Design boldly, girl!'
                        className='hidden lg:block bottom-8 right-30 lg:-bottom-2 lg:right-60 text-white'
                    />
                </div>
                {/* <Banner
                    title='Design Chics Merch:
                    Rep Your Community'
                    subTitlte='Check out cool an amazing customized products curated with love from our community to you.'
                /> */}
                {/* list of shopping content */}
                {/* <div className='mt-10'> */}
                    {/* start card */}
                    {/* <div className='grid gap-2 grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-3 lg:grid-rows-3 lg:grid-cols-auto  justify-evenly'>
                        {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]).map((el, i) => (
                            <Card key={i} className='relative'>
                                <CardHeader className='p-0 m-2'>
                                    <div className='flex items-center bg-brandBlue rounded-lg h-50 md:h-60 w-full'>
                                        <Image className='w-full h-full' src={shirtSvg} alt='' />
                                        <p className='absolute top-3 right-3 w-10 p-1 text-white text-xs text-center  bg-brandPurple rounded-full'>New</p>
                                    </div>
                                </CardHeader>
                                <CardContent className='px-2 py-0 '>
                                    <p className='text-xs font-karla font-normal '>Star Girl Designer</p>
                                    <div className='flex flex-row items-center gap-1'>
                                        <p className='font-roc-grotesk font-bold text-xl items-center'>
                                            ₦8,000
                                        </p>
                                        <span className='text-xs text-brandPurple font-roc-grotesk font-bold'>-15%</span>
                                    </div>
                                </CardContent>
                                <CardFooter className='px-2 flex flex-col md:flex-row justify-between items-start font-karla font-normal'>
                                    <div className='text-xs md:text-sm'>
                                        <p className='text-brandLightGrey'>Available Color:</p>
                                        <p> White, Black, Army Green, Purple</p>
                                    </div>
                                    <div className='text-xs md:text-sm '>
                                        <p className='text-brandLightGrey'>Available Sizes:</p>
                                        <p> S  M  L  XL  XXL</p>
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div> */} 
                {/* end of card */}
                {/* like to support us banner */}
                <ComingSoon/>
                <SupportUsBanner />
            </div>
        </div>
    )
}

export default Shop