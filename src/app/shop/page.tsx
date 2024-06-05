import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import Banner from '@/components/banner/Banner'

import shirtSvg from '../../../public/images/shirt.svg'
import GirlsSmiling from '../../../public/images/allGirls.svg'
import Image from 'next/image'
import Button from '@/components/buttons/Button'
import Pointer from '@/components/Pointer'


const Shop = () => {
    return (
        <div >
            <div className='container'>
                <Banner
                    title='Design Chics Merch:
                    Rep Your Community'
                    subTitlte='Check out cool an amazing customized products curated with love from our community to you.'
                />
                {/* list of shopping content */}
                <div className='mt-10'>
                    {/* start card */}
                    <div className='grid gap-2 grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-3 lg:grid-rows-3 lg:grid-cols-auto  justify-evenly'>
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
                </div>
                {/* end of card */}
                {/* like to support us banner */}
                <div className=' flex justify-center'>
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
            </div>
            <div className="relative mt-7  ">
                <div className='w-full h-full md:h-[500px]'>
                    <Image src={GirlsSmiling} alt='A group of happy girls' className="w-full h-full object-cover object-top" />
                </div>
                <Pointer
                    bgColor='brandBlue'
                    position='right'
                    title='You GO girl!'
                    className='bottom-48 left-80 text-black'
                />
                <Pointer
                    bgColor='brandPurple'
                    position='left'
                    title='You’re simply FIRE!'
                    className='bottom-32 right-40 text-white'
                />
            </div>

        </div>
    )
}

export default Shop