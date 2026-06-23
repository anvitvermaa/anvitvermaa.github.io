"use client";
import React, { useState, useEffect } from "react";
import Hero from "../src/components/sections/Hero";
import Jobs from "../src/components/sections/Jobs";
import Publications from "../src/components/sections/Publications"; 
import SelectedWorks from "../src/components/sections/SelectedWorks";
import Education from "../src/components/sections/Education"; 
import Skills from "../src/components/sections/Skills";
import MorphingFooter from "../src/components/sections/MorphingFooter"; 
import RotatingStar from "../src/components/RotatingStar"; 
import IntroAnimation from "../src/components/IntroAnimation";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  // Lock scrolling while intro is playing
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showIntro]);

  return (
    <main className="min-h-screen w-full relative bg-[#050505]">
      
      {showIntro && (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      )}

      {/* Main content fades in as intro finishes zooming */}
      <div 
        className={`transition-opacity duration-1000 ease-in-out ${
          showIntro ? "opacity-0" : "opacity-100"
        }`}
      >
        <RotatingStar />

        <div className="px-6 md:px-24 lg:px-36 w-full relative z-10">
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
      </div>
      
    </main>
  );
}