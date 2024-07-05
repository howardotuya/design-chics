import React from "react";
import Image from "next/image";
import WhyDesignChick from "@/components/WhyDesignChick";
import SupportUsBanner from "@/components/banner/SupportUsBanner";
import Brands from "@/components/Brands";
import InitiativesComponent from "@/components/InitiativesComponent";
import JoinTheCommunity from "@/components/JoinTheCommunity";
import HearFromOurCommuniyt from "@/components/HearFromOurCommunity/HearFromOurCommuniyt";
import Hero from "@/components/Hero";
import Inspire from "@/components/Inspire";
import PowerOfCommunity from "@/components/PowerOfCommunity";

const HomePage = () => {
  return (
    <main className="mt-10 md:mt-44 bg-[#0B0A0A]">
      <Hero />
      <Inspire />
      <PowerOfCommunity />
      <Brands />
      <WhyDesignChick />
      <JoinTheCommunity />
      <HearFromOurCommuniyt />
      <InitiativesComponent />
      <SupportUsBanner />
    </main>
  );
};

export default HomePage;
