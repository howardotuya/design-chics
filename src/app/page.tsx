"use client";

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
import AOS from "aos";

// import aos styles
import "aos/dist/aos.css";

const HomePage = () => {
  React.useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <main className="pt-10 md:pt-44 bg-[#0B0A0A]">
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
