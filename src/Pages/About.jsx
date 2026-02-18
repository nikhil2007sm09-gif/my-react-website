import React from "react";
import HeroSection from "../components/About/HeroSection";
import EverydayLife from "../components/About/EverydayLife";
import Beliefs from "../components/About/Beliefs";
import OurStory from "../components/About/OurStory";
import CustomerPromise from "../components/About/CustomerPromise";
// import AboutSlider from "../components/About/Slider";

export default function About () {
  return (
    <>
      <div class="bg-[#f5f5f5] ">
        {/* <AboutSlider/> */}
        <HeroSection />
        <EverydayLife />
        <Beliefs />
        <CustomerPromise />
        <OurStory />
      </div>
    </>
  );
}
