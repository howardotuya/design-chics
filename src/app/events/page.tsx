import ComingSoon from '@/components/ComingSoon'
import React from 'react'
import Hero from './_components/Hero'
import SupportUsBanner from '@/components/banner/SupportUsBanner'
import EventComponents from './_components/eventsComponents'
import EventListType from './_components/eventsComponents/EventListType'
import Link from 'next/link'
import DontGoJourney from '@/components/DontGoJourney/DontGoJourney'

const page = () => {
  return (
    <main className="pt-10 md:pt-28 bg-[#0B0A0A]">
      <Hero />
      <EventComponents />
      <DontGoJourney/>
      <SupportUsBanner />
    </main >
  )
}

export default page