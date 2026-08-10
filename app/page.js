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

      <div className="px-6 md:px-12 lg:px-16 w-full relative z-10">
        <div className="mx-auto w-full flex flex-col justify-center">
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