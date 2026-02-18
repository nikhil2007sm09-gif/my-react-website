import React from "react";
import HeroSection from "../components/HomePage/Hero";
import NewThisWeek from "../components/HomePage/New";
import CollectionPage from "../components/HomePage/XIV";
import FashionApproach from "../components/HomePage/TestimonialSlider";

export default function Home() {
  return (
    
    <>
      <HeroSection />
      <NewThisWeek />
      <CollectionPage />
      <FashionApproach />
    </>
  );
}
