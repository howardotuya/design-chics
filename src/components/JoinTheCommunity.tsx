import Image from 'next/image'
import React from 'react'

const JoinTheCommunity = () => {
  return (
      <div className=" p-[100px] bg-neutral-900 rounded-[40px] flex-col justify-start items-center gap-20 inline-flex">
          <div className="w-[1240px] justify-between items-center inline-flex">
              <div className="w-[452px]"><span className="text-stone-50 text-6xl font-bold font-roc-grotesk leading-[66px]">The </span><span className="text-brandBlue text-6xl font-bold font-roc-grotesk leading-[66px]">community</span><span className="text-stone-50 text-6xl font-bold font-roc-grotesk leading-[66px]"> so far...</span></div>
              <div className="w-[333px] text-stone-50/opacity-90 text-xl font-normal font-karla leading-7">Join our thriving community and tap into the collective knowledge, inspiration, and support to amplify your success and creativity.</div>
          </div>
          <div className="flex-col justify-start items-start gap-5 flex">
              <div className="justify-start items-center gap-[15px] inline-flex">
                  <div className="flex-col justify-start items-start gap-[15px] inline-flex">
                      <div className="w-[299px] h-[285px] p-5 bg-neutral-800 rounded-[20px] flex-col justify-between items-start flex">
                          <div className="flex-col justify-start items-start flex">
                              <div className="text-white text-[50px] font-extrabold font-roc-grotesk leading-[60px]">30+</div>
                              <div className="text-white text-xl font-bold font-roc-grotesk leading-normal">DC Online Events</div>
                          </div>
                          <div className="w-[246px] text-stone-50 text-base font-normal font-karla leading-normal">Join our lively Twitter and Instagram sessions, where we invite leading female designers to share their insights on various captivating topics.</div>
                      </div>
                    
                      <Image src="/images/team_at_event.png" width={299} height={115} alt=""  />
                      <div className="w-[299px] justify-start items-start gap-1 grid grid-cols-2">
                          <div className="w-[144.50px] h-[101.50px] p-14 bg-neutral-800 rounded-[20px] justify-center items-center gap-5 flex">
                              <div className="w-9 h-9 relative" />
                          </div>
                          <div className="w-[144.50px] h-[101.50px] p-14 bg-neutral-800 rounded-[20px] justify-center items-center gap-5 flex">
                              <div className="w-9 h-9 relative" />
                          </div>
                          <div className="w-[144.50px] h-[101.50px] p-14 bg-neutral-800 rounded-[20px] justify-center items-center gap-5 flex">
                              <div className="w-9 h-9 relative" />
                          </div>
                          <div className="w-[144.50px] h-[101.50px] p-14 bg-neutral-800 rounded-[20px] justify-center items-center gap-5 flex">
                              <div className="w-9 h-9 relative" />
                          </div>
                      </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-[15px] inline-flex">
                      <div className="w-[299px] h-[415px] p-5 bg-brandBlue rounded-[20px] flex-col justify-between items-start flex">
                          <div className="flex-col justify-start items-start flex">
                              <div className="text-neutral-950 text-[50px] font-extrabold font-roc-grotesk leading-[60px]">750+</div>
                              <div className="text-neutral-950 text-xl font-bold font-roc-grotesk leading-[17.40px]">Community Members</div>
                          </div>
                          <div className="w-[264px] text-neutral-950 text-base font-normal font-karla leading-normal">Design Chics' ultimate goal is to empower women in design to reach their full potential. By fostering a supportive and inspiring environment, the community aims to bridge the gender gap in design and shape the future of the industry with a strong female voice.</div>
                      </div>
                      <div className="w-[299px] h-[213px] p-5 bg-neutral-800 rounded-[20px] flex-col justify-between items-start flex">
                          <div className="flex-col justify-start items-start flex">
                              <div className="text-stone-50 text-[50px] font-extrabold font-roc-grotesk leading-[60px]">2200+</div>
                              <div className="text-stone-50 text-xl font-bold font-roc-grotesk leading-normal">Followers</div>
                          </div>
                          <div className="text-stone-50 text-base font-normal font-karla leading-tight">Keep up with us on social media</div>
                      </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-[15px] inline-flex">
                      <Image src="/images/team_meeting_view.png" width={299} height={186} alt="" />
                      {/* <img className="w-[299px] h-[186px] rounded-[20px]" src="https://via.placeholder.com/299x186" /> */}
                      <div className="w-[299px] h-[442px] p-5 bg-white rounded-[20px] border-2 border-gray-200 flex-col justify-between items-start flex">
                          <div className="flex-col justify-start items-start flex">
                              <div className="text-neutral-950 text-[50px] font-extrabold font-roc-grotesk leading-[60px]">94</div>
                              <div className="text-neutral-950 text-xl font-bold font-roc-grotesk leading-7">Mentees Onboarded</div>
                          </div>
                          <div className="self-stretch text-neutral-950 text-base font-normal font-karla leading-normal">As a community, we sponsored newbie and junior designers for mentorship program and design courses.</div>
                      </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-[15px] inline-flex">
                      <div className="w-[299px] h-[363px] p-5 bg-neutral-800 rounded-[20px] flex-col justify-between items-start flex">
                          <div className="flex-col justify-start items-start flex">
                              <div className="text-stone-50 text-[50px] font-extrabold font-roc-grotesk leading-[60px]">26,278+</div>
                              <div className="w-[236px] text-stone-50 text-xl font-bold font-roc-grotesk leading-normal">Community Conversations</div>
                          </div>
                          <div className="w-[241px] text-stone-50 text-base font-normal font-karla leading-normal">As a supportive community, we thrive on active communication and networking within the community.</div>
                      </div>
                      <Image src="/images/team_with_love.png" className='rounded-[20px]' alt="" width={299} height={265} />
                    
                  </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 h-[120px] px-5 py-[30px] bg-neutral-800 rounded-[20px] justify-between items-center flex">
                      <div className="justify-start items-center gap-[15px] flex">
                          <div className="justify-start items-center flex">
                              <img className="w-[60px] h-[60px] rounded-full border-4 border-neutral-800" src="https://via.placeholder.com/60x60" />
                              <img className="w-[60px] h-[60px] rounded-full border-4 border-neutral-800" src="https://via.placeholder.com/60x60" />
                              <img className="w-[60px] h-[60px] rounded-full border-4 border-neutral-800" src="https://via.placeholder.com/60x60" />
                              <img className="w-[60px] h-[60px] rounded-full border-4 border-neutral-800" src="https://via.placeholder.com/60x60" />
                              <img className="w-[60px] h-[60px] rounded-full border-4 border-neutral-800" src="https://via.placeholder.com/60x60" />
                              <div className="w-[60px] h-[60px] relative">
                                  <div className="w-[60px] h-[60px] left-0 top-0 absolute bg-brandBlue rounded-full border-4 border-neutral-800" />
                                  <div className="w-6 h-6 left-[18px] top-[18px] absolute" />
                              </div>
                          </div>
                          <div><span className="text-white text-2xl font-normal font-karla leading-[28.80px]">Join over </span><span className="text-teal-200 text-2xl font-bold font-karla leading-[28.80px]">750+</span><span className="text-white text-2xl font-normal font-karla leading-[28.80px]"> designers</span></div>
                      </div>
                      <div className="h-14 px-4 py-[18px] bg-brandBlue rounded-[515.61px] justify-center items-center gap-[8.25px] flex">
                          <div className="w-[181px] h-5 text-center text-neutral-950 text-base font-bold font-roc-grotesk uppercase tracking-tight">Join the community</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default JoinTheCommunity