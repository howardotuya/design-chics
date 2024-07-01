import Image from 'next/image'
import React from 'react'

const WhyDesignChickOne = () => {
  return (
      <div className=" flex flex-col items-center gap-[60px] bg-[#9adbe5] mx-[10px] rounded-[40px] p-[120px_0] ">
          <div className="relative inline-flex flex-col items-center gap-[15px]">
              <div className="relative text-[#0b0a0a] font-roc-grotesk text-[40px] lg:text-[46px] font-bold tracking-[0.02px] leading-[50.6px] -mt-[1px] text-center lg:whitespace-nowrap">Why Design Chics?</div>
              <p className="text-wrapper-37 relative text-[#0b0a0a] font-karla text-[16px] lg:text-[20px] font-normal leading-[28px] text-center lg:whitespace-nowrap">Being a part of Design Chics Community gives you access to:</p>
          </div>
          <div className="relative grid grid-cols-3  justify-between  gap-5 lg:w-[1241px]">
              <div className="relative bg-[#fdf8e8] rounded-[25px] h-[182px] overflow-hidden w-[397px]">
                  <div className="relative inline-flex flex-col items-start gap-[18px] top-[25px] left-[25px]">
                      <Image className="relative"  height={36} width={36} alt="Fi" src="https://c.animaapp.com/unzonupS/img/fi-3357526.svg" />
                      <div className="relative inline-flex flex-col items-start gap-[8px]">
                          <div className="relative text-[#0b0a0ae6] font-roc-grotesk text-[18px] font-medium -mt-[1px]">Job Opportunities</div>
                          <p className="relative text-[#0b0a0ae6] font-karla text-[16px] font-normal leading-[22.4px] w-[310px]">
                              Get access to shared job openings for <br />
                              designers of every level.
                          </p>
                      </div>
                  </div>
              </div>
              <div className="relative bg-[#fdf8e8] rounded-[25px] h-[182px] overflow-hidden w-[397px]">
                  <div className="relative inline-flex flex-col items-start gap-[18px] top-[25px] left-[25px]">
                      <Image className="relative"  height={36} width={36} alt="Fi" src="https://c.animaapp.com/unzonupS/img/fi-1570696.svg" />
                      <div className="relative inline-flex flex-col items-start gap-[8px]">
                          <div className="relative text-[#0b0a0ae6] font-roc-grotesk text-[18px] font-medium -mt-[1px]">Mentorship Programs</div>
                          <p className="relative text-[#0b0a0ae6] font-karla text-[16px] font-normal leading-[22.4px] w-[310px]">Receive personalized guidance as you navigate your design journey.</p>
                      </div>
                  </div>
              </div>
              <div className="relative bg-[#fdf8e8] rounded-[25px] h-[182px] overflow-hidden w-[397px]">
                  <div className="relative inline-flex flex-col items-start gap-[18px] top-[25px] left-[25px]">
                      <Image className="relative"  height={36} width={36} alt="Fi" src="https://c.animaapp.com/unzonupS/img/fi-4140320.svg" />
                      <div className="relative inline-flex flex-col items-start gap-[8px]">
                          <div className="relative text-[#0b0a0ae6] font-roc-grotesk text-[18px] font-medium -mt-[1px]">DC Connect</div>
                          <p className="relative text-[#0b0a0ae6] font-karla text-[16px] font-normal leading-[22.4px] w-[310px]">
                              Join our virtual meetups, held monthly <br />
                              &amp; sometimes fortnightly!
                          </p>
                      </div>
                  </div>
              </div>
              <div className="relative bg-[#fdf8e8] rounded-[25px] h-[182px] overflow-hidden w-[397px]">
                  <div className="relative inline-flex flex-col items-start gap-[18px] top-[25px] left-[25px]">
                      <Image className="relative"  height={36} width={36} alt="Fi" src="https://c.animaapp.com/unzonupS/img/fi-5602981.svg" />
                      <div className="relative inline-flex flex-col items-start gap-[8px]">
                          <div className="relative text-[#0b0a0ae6] font-roc-grotesk text-[18px] font-medium -mt-[1px]">DC Online Events</div>
                          <p className="relative text-[#0b0a0ae6] font-karla text-[16px] font-normal leading-[22.4px] w-[310px]">Engage with experts, ask questions, &amp; gain valuable insights.</p>
                      </div>
                  </div>
              </div>
              <div className="relative bg-[#fdf8e8] rounded-[25px] h-[182px] overflow-hidden w-[397px]">
                  <div className="relative inline-flex flex-col items-start gap-[18px] top-[25px] left-[25px]">
                      <Image className="relative"  height={36} width={36} alt="Fi" src="https://c.animaapp.com/unzonupS/img/fi-2344334.svg" />
                      <div className="relative inline-flex flex-col items-start gap-[8px]">
                          <div className="relative text-[#0b0a0ae6] font-roc-grotesk text-[18px] font-medium -mt-[1px]">UX Roast</div>
                          <p className="relative text-[#0b0a0ae6] font-karla text-[16px] font-normal leading-[22.4px] w-[310px]">
                              Dissect digital products, explore, &amp; brainstorm innovative enhancements.
                          </p>
                      </div>
                  </div>
              </div>
              <div className="relative bg-[#fdf8e8] rounded-[25px] h-[182px] overflow-hidden w-[397px]">
                  <div className="relative inline-flex flex-col items-start gap-[18px] top-[25px] left-[25px]">
                      <Image className="relative"  height={36} width={36} alt="Fi" src="https://c.animaapp.com/unzonupS/img/fi-2343797.svg" />
                      <div className="relative inline-flex flex-col items-start gap-[8px]">
                          <div className="relative text-[#0b0a0ae6] font-roc-grotesk text-[18px] font-medium -mt-[1px]">Portfolio Reviews</div>
                          <p className="relative text-[#0b0a0ae6] font-karla text-[16px] font-normal leading-[22.4px] w-[310px]">
                              Get valuable insights &amp; constructive feedback to improve your portfolio.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default WhyDesignChickOne