import Image from 'next/image'
import React from 'react'

const pages = () => {
  return (
    <div className="bg-[#0b0a0a] flex flex-row justify-center w-full">
      <div className="bg-[#0b0a0a] relative w-[1440px]">

        <div className="absolute h-[373px]  w-full">
          <div className="absolute top-95 left-0 inline-flex flex-col items-center gap-20  w-full">
            <p className="text-transparent font-roc-grotesk font-helvetica text-[40px] lg:text-[86px] font-bold tracking-tight leading-95 leading-tight mt-1 relative text-center w-full ">
              <span className="text-white font-helvetica tracking-tighter">Dont go on your</span>
              <span className="span">
                {" "}
                <br />
              </span>
              <span className="text-blue-300 tracking-tighter">design journey</span>
              <span className="span">&nbsp;</span>
              <span className="text-white font-helvetica tracking-tighter">alone</span>
            </p>
            <p className="text-gray-400 font-karla font-helvetica text-base font-normal leading-42 leading-normal text-center lg:w-[785px]">
              We are providing African women in design with the resources and opportunities they need to grow and reach
              their full potential.
            </p>
          </div>
          {/* <div className="absolute -top-53 left-[422px] h-[182px] w-[76px] ">
            <div className="relative h-[182px] w-[74px]">
              <Image className="" height={74} width={182} alt="Union" src="https://c.animaapp.com/unzonupS/img/union.svg" />
              <div className="absolute text-var-x-1 font-roc-grotesk font-helvetica text-18 font-bold left-negative-33 tracking-wide leading-18 text-center top-[83px] whitespace-nowrap w-[140px]">450 MEMBERS</div>
            </div>
          </div> */}
          <div className="absolute top-[80px] right-[150px] h-[65px] w-[185px]">
            <div className="relative h-60 top-5">
              <div className="absolute top-12  bg-brandPurple rounded-full inline-flex items-center justify-center gap-2.5 px-5 py-3">
                <div className="relative text-white font-karla font-helvetica text-sm font-bold leading-5 tracking-normal whitespace-nowrap">Design boldly, girl!</div>
              </div>
              <Image className="absolute top-0 left-0 " width={20} height={70} alt="Vector" src="https://c.animaapp.com/unzonupS/img/vector.svg" />
            </div>
          </div>
        </div>
        {/* <div className="absolute top-[506px] left-[93px] h-[67px] w-[385px] transform rotate-180">
          <div className="h-[62px] relative">

            <div className="absolute top-0 left-21 bg-[#0e4a56] rounded-full inline-flex items-center justify-center gap-[11.28px] px-5 py-3">
              <p className="relative text-[#fffcf5] font-karla font-helvetica text-lg font-bold leading-[22.4px] mt-[-2.82px] whitespace-nowrap transform rotate-180 w-fit">You can shape the world with your designs</p>
            </div>
            <Image className="absolute top-[40px] left-0  transform -rotate-180" width={22} height={22} alt="Vector" src="https://c.animaapp.com/unzonupS/img/vector-1.svg" />
          </div>
        </div> */}
       
        <div className="absolute w-full  top-[626px] grid grid-cols-3 items-center justify-center gap-[80px]">
          <div className="relative w-[200px] h-[200px] lg:h-[298px] lg:w-[306px]">
            <Image fill={true} alt="Mask group" src="https://c.animaapp.com/unzonupS/img/mask-group@2x.png" />
          </div>
          <div className="relative  w-[200px] h-[200px] xl:h-[306px] xl:w-[306px] flex items-center justify-center p-5 bg-brandGreen rounded-full overflow-hidden">
            <div className="font-roc-grotesk font-helvetica text-[50px] font-bold tracking-[-0.51px] leading-[43.5px] text-center whitespace-nowrap">INSPIRE.</div>
          </div>
          <div className="relative w-[200px] h-[200px]   lg:h-[298px] lg:w-[306px]">
            <Image fill={true} alt="Mask group" src="https://c.animaapp.com/unzonupS/img/mask-group-1@2x.png" />
          </div>
        </div>
        <div className="absolute top-[1394px] left-[99px] inline-flex flex-col items-start gap-[30px]">
          <div className="relative inline-flex flex-col items-start gap-[10px] flex-[0_0_auto]">
            <p className="relative text-transparent font-roc-grotesk- font-helvetica text-[46px] font-bold tracking-[0.02px] leading-[50.6px] mt-[-0.99px] w-[427px]">
              <span className="text-[#fffcf5e6] tracking-[0.01px]">The power of a </span>
              <span className="text-[#9291eb] tracking-[0.01px]">community</span>
              <span className="text-[#fffcf5e6] tracking-[0.01px]"> rooting for each other</span>
            </p>
            <p className="relative text-[#bababa] font-karla font-helvetica text-[20px] font-normal leading-[28px] tracking-[0] w-[527px]">
              We are empowering women through collaboration and creativity. Different phases in your career?
            </p>
          </div>
          <button className="relative flex items-center justify-center gap-[8.25px] bg-[#9291eb] rounded-[515.61px] box-border p-[18px_16px] w-[280px] flex-[0_0_auto] all-unset">
            <div className="relative text-[var(--x-1)] font-roc-grotesk- font-helvetica text-[16px] font-bold tracking-[0] mt-[-1.03px] w-fit">JOIN THE COMMUNITY</div>
          </button>
        </div>
        <div className="absolute top-[1292px] left-[715px] h-[517px] w-[624px]">
          <div className="h-[517px] relative ">
            <img className="absolute top-0   left-53 h-[517px] w-[517px]" alt="Group" src="https://c.animaapp.com/unzonupS/img/group-316124405.png" />
            <div className="absolute top-59 left-0 flex flex-wrap gap-5 ">
              <div className="relative inline-flex flex-col items-center justify-center gap-y-10 bg-[#0e0d0d] border border-solid border-[#e8e8e80d] rounded-[20px] p-[20px_40px] flex-[0_0_auto]">
                <div className="align-items-start inline-flex flex-none flex-col gap-y-10 relative">
                  <div className="flex items-center h-12 w-28">
                    <div className=" bg-[#9291eb] rounded-full h-[40px] w-[40px]" />
                  </div>
                  <div className="relative inline-flex flex-col gap-y-5">
                    <div className="relative text-[var(--x-2)] font-roc-grotesk font-helvetica text-[20px] font-bold tracking-[0] leading-[26px] mt-[-1px] whitespace-nowrap">Newbie Designers</div>
                    <p className="relative text-[#fffcf5e6] font-karla font-helvetica text-[16px] font-normal leading-[22.4px] h-78 w-[251px]">
                      Start your design journey with us. Access mentorship and resources to launch your career.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative inline-flex flex-col items-center justify-center gap-y-10 bg-[#0e0d0d] border border-solid border-[#e8e8e80d] rounded-[20px] p-[20px_40px] flex-[0_0_auto]">
                <div className="align-items-start inline-flex flex-none flex-col gap-y-10 relative">
                  <div className="relative h-12 w-28">
                    <div className="relative h-12 w-16 left-6">
                      <div className="relative h-12">
                        <div className="absolute bg-[#9291eb] rounded-full h-[20px] w-[20px] top-0 left-0" />
                        <div className="absolute bg-[#9291eb] rounded-full h-[20px] w-[20px] top-8 left-0" />
                      </div>
                    </div>
                  </div>
                  <div className="relative inline-flex flex-col gap-y-5">
                    <div className="relative text-[var(--x-2)] font-roc-grotesk font-helvetica text-[20px] font-bold tracking-[0] leading-[26px] mt-[-1px] whitespace-nowrap">Junior Designers</div>
                    <p className="relative text-[#fffcf5e6] font-karla font-helvetica text-[16px] font-normal leading-[22.4px] h-78 w-[251px]">
                      Elevate your skills, network <br />
                      and thrive as a junior designer with us.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative inline-flex flex-col items-center justify-center gap-y-10 bg-[#0e0d0d] border border-solid border-[#e8e8e80d] rounded-[20px] p-[20px_40px] flex-[0_0_auto]">
                <div className="align-items-start inline-flex flex-none flex-col gap-y-10 relative">
                  <div className="relative  w-28">
                    <div className="relative h-12 top-8">
                      <div className="relative h-12 w-28">
                        <div className="absolute bg-[#9291eb] rounded-full h-[20px] w-[20px] top-0 left-0" />
                        <div className="absolute bg-[#9291eb] rounded-full h-[20px] w-[20px] top-0 left-3" />
                        <div className="absolute bg-[#9291eb] rounded-full h-[20px] w-[20px] top-0 left-5" />
                      </div>
                    </div>
                  </div>
                  <div className="relative inline-flex flex-col gap-y-5">
                    <div className="relative text-[var(--x-2)] font-roc-grotesk font-helvetica text-[20px] font-bold tracking-[0] leading-[26px] mt-[-1px] whitespace-nowrap">Mid-Level Designers</div>
                    <p className="relative text-[#fffcf5e6] font-karla font-helvetica text-[16px] font-normal leading-[22.4px] h-78 w-[251px]">
                      Advance your career and <br />
                      refine your craft in our supportive community.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative inline-flex flex-col items-center justify-center gap-y-[20.32px] bg-[#0e0d0d] border border-solid border-[#e8e8e80d] rounded-[20px] p-[20px_40px] flex-[0_0_auto]">
                <div className="align-items-start inline-flex flex-none flex-col gap-y-10 relative">
                  <div className="relative h-12 w-28">
                    <div className="relative h-26 w-26 left-1 top-1">
                      <div className="relative h-26">
                        <div className="absolute bg-[#9291eb] rounded-full h-[20px] w-[20px] top-0 left-0" />
                        <div className="absolute bg-[#9291eb] rounded-full h-[20px] w-[20px] top-0 left-4" />
                        <div className="absolute bg-[#9291eb] rounded-full h-[20px] w-[20px] top-4 left-0" />
                        <div className="absolute bg-[#9291eb] rounded-full h-[20px] w-[20px] top-4 left-4" />
                      </div>
                    </div>
                  </div>
                  <div className="relative inline-flex flex-col gap-y-5">
                    <div className="relative text-[var(--x-2)] font-roc-grotesk font-helvetica text-[20px] font-bold tracking-[0] leading-[26px] mt-[-1px] whitespace-nowrap">Senior Designers</div>
                    <p className="relative text-[#fffcf5e6] font-karla font-helvetica text-[16px] font-normal leading-[22.4px] h-78 w-[251px]">
                      Leverage your expertise, mentor and connect with experienced peers in our design network.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="why-design-chics">
          <div className="frame-8">
            <p className="brands-we-ve">
              <span className="text-wrapper-6">Brands we&#39;ve </span>
              <span className="text-wrapper-12">partnered</span>
              <span className="text-wrapper-6"> with</span>
            </p>
          </div>
          <div className="frame-9">
            <div className="img-wrapper">
              <img
                className="propel-logo-black"
                alt="Propel logo black"
                src="https://c.animaapp.com/unzonupS/img/propel-logo-black-1@2x.png"
              />
            </div>
            <img className="frame-10" alt="Frame" src="https://c.animaapp.com/unzonupS/img/frame-316124718.svg" />
            <div className="img-wrapper">
              <img
                className="learnable-dark"
                alt="Learnable dark"
                src="https://c.animaapp.com/unzonupS/img/learnable-dark-2@2x.png"
              />
            </div>
            <div className="img-wrapper">
              <img className="image" alt="Image" src="https://c.animaapp.com/unzonupS/img/image-1521@2x.png" />
            </div>
            <div className="img-wrapper">
              <img
                className="logo-copy"
                alt="Logo copy"
                src="https://c.animaapp.com/unzonupS/img/logo-copy--1--1@2x.png"
              />
            </div>
            <div className="img-wrapper">
              <img className="image-2" alt="Image" src="https://c.animaapp.com/unzonupS/img/image-1520@2x.png" />
            </div>
          </div>
        </div> */}
        {/* <div className="frame-11">
          <div className="frame-12">
            <p className="the-community-so-far">
              <span className="text-wrapper-13">The </span>
              <span className="text-wrapper-14">community</span>
              <span className="text-wrapper-13"> so far...</span>
            </p>
            <p className="text-wrapper-15">
              Join our thriving community and tap into the collective knowledge, inspiration, and support to amplify
              your success and creativity.
            </p>
          </div>
          <div className="frame-13">
            <div className="frame-14">
              <div className="frame-15">
                <div className="card">
                  <div className="frame-16">
                    <div className="text-wrapper-16">30+</div>
                    <div className="text-wrapper-17">DC Online Events</div>
                  </div>
                  <p className="text-wrapper-18">
                    Join our lively Twitter and Instagram sessions, where we invite leading female designers to share
                    their insights on various captivating topics.
                  </p>
                </div>
                <img className="IMG" alt="Img" src="https://c.animaapp.com/unzonupS/img/img-5271-2@2x.png" />
                <img className="frame-17" alt="Frame" src="https://c.animaapp.com/unzonupS/img/frame-316124723.svg" />
              </div>
              <div className="frame-15">
                <div className="card-2">
                  <div className="frame-16">
                    <div className="text-wrapper-19">750+</div>
                    <div className="text-wrapper-20">Community Members</div>
                  </div>
                  <p className="design-chics">
                    Design Chics&#39; ultimate goal is to empower women in design to reach their full potential. By
                    fostering a supportive and inspiring environment, the community aims to bridge the gender gap in
                    design and shape the future of the industry with a strong female voice.
                  </p>
                </div>
                <div className="card-3">
                  <div className="frame-16">
                    <div className="text-wrapper-21">2200+</div>
                    <div className="text-wrapper-22">Followers</div>
                  </div>
                  <p className="text-wrapper-23">Keep up with us on social media</p>
                </div>
              </div>
              <div className="frame-15">
                <img className="IMG-2" alt="Img" src="https://c.animaapp.com/unzonupS/img/img-4952-1@2x.png" />
                <div className="card-4">
                  <div className="frame-16">
                    <div className="text-wrapper-19">94</div>
                    <div className="text-wrapper-24">Mentees Onboarded</div>
                  </div>
                  <p className="text-wrapper-25">
                    As a community, we sponsored newbie and junior designers for mentorship program and design courses.
                  </p>
                </div>
              </div>
              <div className="frame-15">
                <div className="card-5">
                  <div className="frame-16">
                    <div className="text-wrapper-21">26,278+</div>
                    <div className="text-wrapper-26">Community Conversations</div>
                  </div>
                  <p className="text-wrapper-27">
                    As a supportive community, we thrive on active communication and networking within the community.
                  </p>
                </div>
                <img
                  className="screen-shot"
                  alt="Screen shot"
                  src="https://c.animaapp.com/unzonupS/img/screen-shot-2023-09-05-at-1-24-2@2x.png"
                />
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card-6">
                <div className="grid-2">
                  <div className="grid-3">
                    <div className="image-wrapper" />
                    <div className="image-wrapper-2">
                      <img className="image-3" alt="Image" src="https://c.animaapp.com/unzonupS/img/image-1@2x.png" />
                    </div>
                    <div className="image-wrapper-3" />
                    <div className="image-wrapper-4" />
                    <img
                      className="img-2"
                      alt="Rectangle"
                      src="https://c.animaapp.com/unzonupS/img/rectangle-8739@2x.png"
                    />
                    <img
                      className="img-2"
                      alt="Image wrapper"
                      src="https://c.animaapp.com/unzonupS/img/image-wrapper.svg"
                    />
                  </div>
                  <p className="join-over">
                    <span className="text-wrapper-28">Join over </span>
                    <span className="text-wrapper-29">750+</span>
                    <span className="text-wrapper-28"> designers</span>
                  </p>
                </div>
                <button className="button-3">
                  <div className="join-the-community">JOIN THE COMMUNITY</div>
                </button>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="why-design-chics-2">
          <div className="frame-18">
            <div className="frame-8">
              <div className="text-wrapper-30">Like to support us?</div>
              <p className="text-wrapper-31">
                Support Design Chics Community to help us reach more African women in Design and invest in empowering
                more women.
              </p>
            </div>
            <div className="frame-19">
              <button className="donate-wrapper">
                <div className="donate">DONATE</div>
              </button>
              <button className="button-3">
                <div className="text-wrapper-9">BECOME A PARTNER</div>
              </button>
            </div>
          </div>
          <div className="group-6">
            <div className="overlap-4">
              <div className="cusor-2">
                <div className="relative h-60 top-5">
                  <div className="label">
                    <p className="text-wrapper-3">You’re the lady for the job!</p>
                  </div>
                  <img className="vector" alt="Vector" src="https://c.animaapp.com/unzonupS/img/vector-2.svg" />
                </div>
              </div>
              <div className="cusor-3">
                <div className="overlap-2">
                  <div className="label-3">
                    <div className="text-wrapper-32">You GO girl!</div>
                  </div>
                  <img className="img" alt="Vector" src="https://c.animaapp.com/unzonupS/img/vector-3.svg" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="frame-wrapper">
          <div className="frame-20">
            <img className="DC-logo" alt="Dc logo" src="https://c.animaapp.com/unzonupS/img/dc-logo-1.svg" />
            <div className="frame-21">
              <div className="frame-22">
                <div className="text-wrapper-33">Community</div>
                <div className="frame-23">
                  <div className="text-wrapper-34">Become a member</div>
                  <div className="text-wrapper-35">Initiatives</div>
                  <div className="text-wrapper-35">Events</div>
                  <div className="text-wrapper-35">Shop Merch</div>
                </div>
              </div>
              <div className="frame-22">
                <div className="text-wrapper-33">About Us</div>
                <div className="frame-23">
                  <div className="text-wrapper-34">Meet the Team</div>
                  <div className="text-wrapper-35">Partner With Us</div>
                  <div className="text-wrapper-35">Volunteer</div>
                </div>
              </div>
              <img className="frame-24" alt="Frame" src="https://c.animaapp.com/unzonupS/img/frame-316124473.svg" />
            </div>
          </div>
        </div> */}
        {/* <div className="why-design-chics-3">
          <div className="frame-8">
            <div className="text-wrapper-36">Why Design Chics?</div>
            <p className="text-wrapper-37">Being a part of Design Chics Community gives you access to:</p>
          </div>
          <div className="frame-25">
            <div className="frame-26">
              <div className="frame-27">
                <img className="fi" alt="Fi" src="https://c.animaapp.com/unzonupS/img/fi-3357526.svg" />
                <div className="frame-28">
                  <div className="text-wrapper-38">Job Opportunities</div>
                  <p className="text-wrapper-39">
                    Get access to shared job openings for <br />
                    designers of every level.
                  </p>
                </div>
              </div>
            </div>
            <div className="frame-26">
              <div className="frame-27">
                <img className="fi" alt="Fi" src="https://c.animaapp.com/unzonupS/img/fi-1570696.svg" />
                <div className="frame-28">
                  <div className="text-wrapper-38">Mentorship Programs</div>
                  <p className="text-wrapper-39">Receive personalized guidance as you navigate your design journey.</p>
                </div>
              </div>
            </div>
            <div className="frame-26">
              <div className="frame-27">
                <img className="fi" alt="Fi" src="https://c.animaapp.com/unzonupS/img/fi-4140320.svg" />
                <div className="frame-28">
                  <div className="text-wrapper-38">DC Connect</div>
                  <p className="text-wrapper-39">
                    Join our virtual meetups, held monthly <br />
                    &amp; sometimes fortnightly!
                  </p>
                </div>
              </div>
            </div>
            <div className="frame-26">
              <div className="frame-27">
                <img className="fi" alt="Fi" src="https://c.animaapp.com/unzonupS/img/fi-5602981.svg" />
                <div className="frame-28">
                  <div className="text-wrapper-38">DC Online Events</div>
                  <p className="text-wrapper-39">Engage with experts, ask questions, &amp; gain valuable insights.</p>
                </div>
              </div>
            </div>
            <div className="frame-26">
              <div className="frame-27">
                <img className="fi" alt="Fi" src="https://c.animaapp.com/unzonupS/img/fi-2344334.svg" />
                <div className="frame-28">
                  <div className="text-wrapper-38">UX Roast</div>
                  <p className="text-wrapper-39">
                    Dissect digital products, explore, &amp; brainstorm innovative enhancements.
                  </p>
                </div>
              </div>
            </div>
            <div className="frame-26">
              <div className="frame-27">
                <img className="fi" alt="Fi" src="https://c.animaapp.com/unzonupS/img/fi-2343797.svg" />
                <div className="frame-28">
                  <div className="text-wrapper-38">Portfolio Reviews</div>
                  <p className="text-wrapper-39">
                    Get valuable insights &amp; constructive feedback to improve your portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="testimonials">
          <div className="frame-8">
            <p className="hear-from-our">
              <span className="text-wrapper-40">Hear from </span>
              <span className="text-wrapper-7">our community</span>
              <span className="text-wrapper-40"> about Design Chics</span>
            </p>
          </div>
          <div className="frame-29">
            <div className="fi-wrapper">
              <img className="fi-2" alt="Fi" src="https://c.animaapp.com/unzonupS/img/fi-271228.svg" />
            </div>
            <div className="fi-wrapper">
              <img className="fi-2" alt="Fi" src="https://c.animaapp.com/unzonupS/img/fi-271228-1.svg" />
            </div>
          </div>
          <div className="group-7" />
        </div> */}
        {/* <div className="frame-30">
          <div className="frame-18">
            <div className="frame-8">
              <p className="design-chics-2">
                <span className="text-wrapper-41">Design Chics </span>
                <span className="text-wrapper-7">Initiatives</span>
              </p>
              <p className="a-comprehensive">
                <span className="text-wrapper-42">
                  A comprehensive collection of programs empowering African women in design through{" "}
                </span>
                <span className="text-wrapper-43">skills development</span>
                <span className="text-wrapper-42">, </span>
                <span className="text-wrapper-43">industry exposure</span>
                <span className="text-wrapper-42">, </span>
                <span className="text-wrapper-43">networking</span>
                <span className="text-wrapper-42">, </span>
                <span className="text-wrapper-43">mentorship</span>
                <span className="text-wrapper-42">, &amp; </span>
                <span className="text-wrapper-43">community support.</span>
              </p>
            </div>
            <button className="button-2">
              <div className="view-all-initiatives">VIEW ALL INITIATIVES</div>
            </button>
          </div>
          <div className="group-8">
            <div className="grid-4">
              <div className="frame-31">
                <div className="text-wrapper-44">The Design Foundry</div>
                <p className="the-design-foundry">
                  <span className="text-wrapper-42">
                    The Design Foundry is an initiative focused on offering a foundation in visual design to aspiring
                    female designers. We have partnered with Geneza School of Design to award{" "}
                  </span>
                  <span className="text-wrapper-43">10 scholarships</span>
                  <span className="text-wrapper-42"> to members of the Design Chics community.</span>
                </p>
              </div>
              <button className="learn-more-wrapper">
                <div className="learn-more">LEARN MORE</div>
              </button>
            </div>
            <div className="group-wrapper">
              <div className="group-9">
                <img
                  className="screen-shot-2"
                  alt="Screen shot"
                  src="https://c.animaapp.com/unzonupS/img/screen-shot-2023-04-01-at-11-35-3@2x.png"
                />
                <img
                  className="screen-shot-3"
                  alt="Screen shot"
                  src="https://c.animaapp.com/unzonupS/img/screen-shot-2023-04-01-at-11-35-4.png"
                />
              </div>
            </div>
          </div>
          <div className="group-8">
            <div className="grid-4">
              <div className="frame-32">
                <div className="text-wrapper-45">DC Mentorship Program</div>
                <p className="our-mentorship">
                  <span className="text-wrapper-42">
                    Our mentorship program connects experienced professionals with aspiring designers within our
                    community. We matched{" "}
                  </span>
                  <span className="text-wrapper-43">47 mentors</span>
                  <span className="text-wrapper-42"> with </span>
                  <span className="text-wrapper-43">94 mentees</span>
                  <span className="text-wrapper-42">
                    . This personalized approach ensures each mentee receives focused support tailored to their unique
                    needs.
                  </span>
                </p>
              </div>
              <button className="button-4">
                <div className="learn-more-2">LEARN MORE</div>
              </button>
            </div>
            <div className="group-10">
              <div className="group-11">
                <img
                  className="clip-path-group"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group@2x.png"
                />
                <img
                  className="clip-path-group-2"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-1@2x.png"
                />
                <img
                  className="clip-path-group-3"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-2@2x.png"
                />
                <img
                  className="clip-path-group-4"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-3@2x.png"
                />
                <img
                  className="clip-path-group-5"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-4@2x.png"
                />
                <img
                  className="clip-path-group-6"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-5@2x.png"
                />
                <img
                  className="clip-path-group-7"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-6@2x.png"
                />
                <img
                  className="clip-path-group-8"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-7@2x.png"
                />
                <img
                  className="clip-path-group-9"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-8@2x.png"
                />
                <img
                  className="clip-path-group-10"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-9@2x.png"
                />
                <img
                  className="clip-path-group-11"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-10@2x.png"
                />
                <img
                  className="clip-path-group-12"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-11@2x.png"
                />
                <img
                  className="clip-path-group-13"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-12@2x.png"
                />
                <img
                  className="clip-path-group-14"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-13@2x.png"
                />
                <img
                  className="clip-path-group-15"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-14@2x.png"
                />
                <img
                  className="clip-path-group-16"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-15@2x.png"
                />
                <img
                  className="clip-path-group-17"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-16@2x.png"
                />
                <img
                  className="clip-path-group-18"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-17@2x.png"
                />
                <img
                  className="clip-path-group-19"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-18@2x.png"
                />
                <img
                  className="clip-path-group-20"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-19@2x.png"
                />
                <img
                  className="clip-path-group-21"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-20@2x.png"
                />
                <img
                  className="clip-path-group-22"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-21@2x.png"
                />
                <img
                  className="clip-path-group-23"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-22@2x.png"
                />
                <img
                  className="clip-path-group-24"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-23@2x.png"
                />
                <img
                  className="clip-path-group-25"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-24@2x.png"
                />
                <img
                  className="clip-path-group-26"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-25@2x.png"
                />
                <img
                  className="clip-path-group-27"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-26@2x.png"
                />
                <img
                  className="clip-path-group-28"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-27@2x.png"
                />
                <img
                  className="clip-path-group-29"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-28@2x.png"
                />
                <img
                  className="clip-path-group-30"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-29@2x.png"
                />
                <img
                  className="clip-path-group-31"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-30@2x.png"
                />
                <img className="sweeney" alt="Sweeney" src="https://c.animaapp.com/unzonupS/img/sweeney-2@2x.png" />
                <img className="atasie" alt="Atasie" src="https://c.animaapp.com/unzonupS/img/atasie-1@2x.png" />
                <img
                  className="clip-path-group-32"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-31@2x.png"
                />
                <img
                  className="clip-path-group-33"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-32@2x.png"
                />
                <img
                  className="clip-path-group-34"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-33@2x.png"
                />
                <img
                  className="clip-path-group-35"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-34@2x.png"
                />
                <img
                  className="clip-path-group-36"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-35@2x.png"
                />
                <img
                  className="clip-path-group-37"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-36@2x.png"
                />
                <img
                  className="queenneth"
                  alt="Queenneth"
                  src="https://c.animaapp.com/unzonupS/img/queenneth-1@2x.png"
                />
                <img
                  className="clip-path-group-38"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-37@2x.png"
                />
                <img
                  className="clip-path-group-39"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-38@2x.png"
                />
                <img
                  className="clip-path-group-40"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-39@2x.png"
                />
                <img
                  className="clip-path-group-41"
                  alt="Clip path group"
                  src="https://c.animaapp.com/unzonupS/img/clip-path-group-40@2x.png"
                />
              </div>
            </div>
          </div>
        </div>  */}
      </div>
    </div>
  )
}

export default pages