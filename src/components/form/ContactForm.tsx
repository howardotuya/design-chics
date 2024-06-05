import React from 'react'


import Input from '../input/Input'
import Button from '../buttons/Button'

const ContactForm = () => {
    return (
        <form className='my-10 w-full flex flex-col gap-4'>
            <Input
                name='Full Name'
                placeholder='Full Name'
                type='text'
                className='bg-brandblack border w-full placeholder:text-white'
            />
            <Input
                name='Email'
                placeholder='Email'
                type='text'
                className='bg-brandblack border w-full placeholder:text-white'
            />
            <textarea
                className='p-3 bg-brandblack border w-full h-32 placeholder:text-white rounded-lg font-light focus:outline-none focus:ring-0'
                name=""
                id=""
                placeholder='YOUR MESSAGE'
            />
            <Button
                title='Send'
                className='bg-brandBlue text-brandblack'
            />

        </form>
    )
}

export default ContactForm