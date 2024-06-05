import React from 'react'
import footerLinks from './footerLinks.json'
import Link from 'next/link'
import Button from './buttons/Button'
import Input from './input/Input'

const Footer = () => {
    return (
        <div className='container  pt-10 md:pt-20 bg-white text-brandblack flex flex-col md:flex-row items-start justify-evenly gap-10'>
            <div >
                <h1 className='font-karla text-center font-bold text-brandblack'>Sign Up for Newsletter!</h1>
                <Input placeholder='EMAIL ADDRESS'
                    type='email' name='email' className='border border-brandblack my-3' />
                <Button
                    title='BECOME A PARTNER'
                    // onClick={() => console.log('clicked')}
                    className='bg-brandBlue '
                />
            </div>
            <div className='grid grid-rows-2 grid-cols-3 md:grid-cols-4 md:grid-rows-2 gap-5'>
                {footerLinks.map(footer => (
                    <div key={footer.id}>
                        <h1 className='font-medium font-roc-grotesk'>
                            {footer.title}
                        </h1>
                        <div className='flex flex-col gap-3'>
                            {footer.subtitle.map(subT => (<Link href={subT.href} key={subT.id} className='font-karla text-xs font-normal'>{subT.title}</Link>))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Footer