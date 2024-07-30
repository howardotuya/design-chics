import Link from 'next/link'
import React from 'react'

const DontGoJourney = () => {
  return (
      <div className="mx-5 flex flex-col items-center gap-[60px] bg-yellow-50 text-black pt-[40px] lg:pt-[60px]  py-10 lg:py-20 rounded-[40px] ">
          <div className="flex flex-col items-center gap-[30px] px-10  max-w-[500px]">
              <div className="flex flex-col items-center gap-[15px]  ">
                  <div className="  font-roc-grotesk text-[28px] lg:text-[46px] font-bold tracking-[0.02px] leading-[30.6px] -mt-[1px] text-center lg:w-[500px]">
                      Don't go on your <br />
                      design journey alone
                  </div>
                  <p className="relative  font-karla text-[18px] lg:text-[20px] font-normal leading-[28px] text-center lg:w-[500px]">
                      We are empowering African women in design by providing them with the resources they need to grow and thrive in their careers.
                  </p>
              </div>
              <div className="relative flex flex-col sm:flex-row justify-center items-start gap-[30px] w-full">
                  <Link href="https://mail.google.com/mail/u/0/?fs=1&to=info@fordesignchics.com&tf=cm" target="_blank" className="to-purple bg-[#9adbe5] flex items-center justify-center text-black rounded-full box-border gap-[8.25px] p-[18px_16px] relative w-full lg:w-[280px]">
                      <span className="text relative  uppercase  font-roc-grotesk text-[16px] font-bold leading-normal w-fit">
                          Join the community
                      </span>
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default DontGoJourney