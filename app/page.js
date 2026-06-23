"use client";
import React from "react";
import Hero from "../src/components/sections/Hero";
import Jobs from "../src/components/sections/Jobs";
import Publications from "../src/components/sections/Publications"; 
import SelectedWorks from "../src/components/sections/SelectedWorks";
import Education from "../src/components/sections/Education"; 
import Skills from "../src/components/sections/Skills";
import MorphingFooter from "../src/components/sections/MorphingFooter"; 
import RotatingStar from "../src/components/RotatingStar"; 
import SideTracker from "../src/components/SideTracker";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      <RotatingStar />
      <SideTracker />

      <div className="px-6 md:pl-[180px] lg:pl-[220px] md:pr-24 lg:pr-36 w-full relative z-10">
        <div className="max-w-[800px] mx-auto w-full">
          <Hero />
          <Jobs />
          <Publications />
          <SelectedWorks />
          <Education />
          <Skills />
          <MorphingFooter />
        </div>
      </div>
    </main>
  );
}