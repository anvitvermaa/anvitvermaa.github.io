"use client";
import React, { useEffect, useRef } from "react";
import Hero from "../src/components/sections/Hero";
import Jobs from "../src/components/sections/Jobs";
import Publications from "../src/components/sections/Publications"; 
import SelectedWorks from "../src/components/sections/SelectedWorks";
import Education from "../src/components/sections/Education"; 
import Skills from "../src/components/sections/Skills";
import MorphingFooter from "../src/components/sections/MorphingFooter"; 
import RotatingStar from "../src/components/RotatingStar"; 

export default function Home() {
  const contentRef = useRef(null);

  useEffect(() => {
    // Only apply on md+ screens (768px and above)
    const isDesktop = () => window.matchMedia('(min-width: 768px)').matches;
    if (!isDesktop()) return;

    const baseDPR = window.devicePixelRatio || 1;
    // The star extends 16rem to the right from the left edge.
    // At 100% zoom the padding is 17rem (272px at 16px root font size).
    const basePaddingPx = 17 * 16; // 272px

    let rafId;
    const updatePadding = () => {
      if (!contentRef.current) return;
      if (!isDesktop()) {
        // Reset to default mobile padding if window was resized
        contentRef.current.style.paddingLeft = '';
        return;
      }
      const currentDPR = window.devicePixelRatio || 1;
      // zoomFactor > 1 when zoomed in (e.g. 1.5 at 150%)
      const zoomFactor = currentDPR / baseDPR;
      // The star stays constant screen-size via inverse zoom.
      // Content padding needs to be multiplied by zoomFactor so it also
      // stays constant on screen, preventing collision.
      const adjustedPadding = basePaddingPx * zoomFactor;
      contentRef.current.style.paddingLeft = `${adjustedPadding}px`;

      rafId = requestAnimationFrame(updatePadding);
    };
    updatePadding();

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <main className="min-h-screen w-full relative">
      
      <RotatingStar />

      <div ref={contentRef} className="px-6 md:pl-[17rem] md:pr-24 lg:pl-[17rem] lg:pr-36 w-full overflow-x-hidden relative z-10">
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