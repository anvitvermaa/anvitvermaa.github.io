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

export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      
      <RotatingStar />

      <div className="px-6 md:pl-[17rem] md:pr-24 lg:pl-[17rem] lg:pr-36 w-full overflow-x-hidden relative z-10">
        <div className="max-w-[1100px] mx-auto w-full">
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