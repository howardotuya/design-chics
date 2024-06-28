import SupportUsBanner from '@/components/banner/SupportUsBanner'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const Quizzes = () => {
  return (
    <>
      <div className='container'>
        <div className='my-10 lg:my-20 flex flex-col justify-center items-center relative '>
          <h1 className='flex flex-col text-[32.4px] md:text-6xl font-roc-grotesk font-bold  mb-5'>
            <span>Quizzes!</span>
          </h1>
          <p className='w-full md:w-2/5 text-center text-sm text-[#BABABA] font-karla font-normal leading-4'>
            Questions? Feedback? We are all ears! Reach out and lets make magic happen together. We’d love to hear from you.
          </p>
        </div>

        {/* box */}
        <div className='grid gap-2 grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-3 lg:grid-rows-3 lg:grid-cols-auto  justify-evenly'>
          {
            Array.from([0, 0, 0, 0, 0, 0, 0, 0]).map((shop, i) => (
              <Card key={i} className='relative bg-[#232323] text-white border-0'>
                <CardHeader className='p-0 m-4'>
                  <div className='flex items-center rounded-lg h-48 md:h-60 w-full'>
                  </div>
                </CardHeader>
                <CardContent className='px-4 py-0 '>
                  <p className='text-xs font-karla font-normal text-brandBlue '>Quiz</p>
                  <div className='flex flex-col items-start gap-0 my-4'>
                    <span className='font-roc-grotesk font-bold text-sm md:text-xl items-center'>
                      What kind of
                    </span>
                    <span className='font-roc-grotesk font-bold text-sm md:text-xl items-center'>
                      designer are you?
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))

          }
        </div>
      </div>

      <SupportUsBanner />
    </>
  )
}

export default Quizzes