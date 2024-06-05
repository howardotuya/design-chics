import SupportUsBanner from '@/components/banner/SupportUsBanner'
import ContactForm from '@/components/form/ContactForm'
import React from 'react'

const contactPage = () => {
  return (
    <>
      <div className='container my-10 lg:my-20 flex flex-col justify-center items-center relative '>
        <h1 className='w-full md:w-1/2 text-center flex flex-col text-[32.4px] md:text-6xl font-roc-grotesk font-bold  mb-5'>
          <span>We’d Love To Hear From You!</span>
        </h1>
        <p className='w-full md:w-2/5 text-center text-sm text-[#BABABA] font-karla font-normal leading-4'>
          Questions? Feedback? We are all ears! Reach out and lets make magic happen together. We’d love to hear from you.
        </p>
        <div className='w-full md:w-2/4' >
          <ContactForm />
        </div>
      </div>
      <SupportUsBanner />
    </>
  )
}

export default contactPage