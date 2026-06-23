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
  const sections = [
    { id: "about", label: "01 / ABOUT", Component: Hero },
    { id: "jobs", label: "02 / EXPERIENCE", Component: Jobs },
    { id: "publications", label: "03 / PUBLICATIONS", Component: Publications },
    { id: "selected-works", label: "04 / WORKS", Component: SelectedWorks },
    { id: "education", label: "05 / EDUCATION", Component: Education },
    { id: "skills", label: "06 / SKILLS", Component: Skills },
  ];

  return (
    <main className="min-h-screen w-full relative">
      <RotatingStar />
      
      {/* Fixed Diver (Center Left) */}
      <div className="fixed left-[85px] md:left-[165px] lg:left-[205px] top-1/2 -translate-y-1/2 z-[100] pointer-events-none animate-float">
        <svg 
          width="30" 
          height="50" 
          viewBox="0 0 24 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#a0e0ff] drop-shadow-[0_0_12px_rgba(160,224,255,0.6)]"
        >
          <path d="M12 0L14 10C14 10 19 12 19 16C19 20 14 26 14 26L12 40L10 26C10 26 5 20 5 16C5 12 10 10 10 10L12 0Z" fill="currentColor" opacity="0.9"/>
          <path d="M14 16L20 12L16 22Z" fill="currentColor" opacity="0.5"/>
          <path d="M10 16L4 12L8 22Z" fill="currentColor" opacity="0.5"/>
          <circle cx="12" cy="16" r="2" fill="#ffffff" />
        </svg>
      </div>

      <div className="w-full relative z-10 flex flex-col">
        {sections.map(({ id, label, Component }, index) => (
          <div key={id} className="flex w-full relative">
            
            {/* Left Sticky Sidebar for this section */}
            <div className="w-[100px] md:w-[180px] lg:w-[220px] shrink-0 border-r border-[#2a2a2a]/30 relative z-20">
              
              {/* Native Ruler Marks */}
              <div className="absolute right-0 top-0 bottom-0 w-full overflow-hidden pointer-events-none opacity-40">
                <div className="absolute top-0 right-0 h-full flex flex-col justify-between py-[100px]">
                   {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="flex items-center gap-1 md:gap-2 my-[80px] ml-auto">
                        <span className="text-[#666666] font-mono text-[8px] md:text-[9px] lg:text-[10px] tracking-widest hidden sm:inline-block">
                          0{index},{i*3}0,00
                        </span>
                        <div className="w-[6px] md:w-[10px] h-[1px] bg-[#666]"></div>
                      </div>
                   ))}
                </div>
              </div>

              {/* Sticky Title */}
              <div className="sticky top-[150px] left-0 pl-[10px] md:pl-[20px] lg:pl-[30px] pt-[15px] pb-[15px] bg-[#050505]/50 backdrop-blur-sm overflow-hidden">
                <span className="text-[#efefef] font-mono text-[9px] md:text-[12px] lg:text-[13px] tracking-widest whitespace-nowrap">
                  ( {label} )
                </span>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 min-w-0 px-4 sm:px-6 md:pl-0 md:pr-24 lg:pr-36 w-full relative">
               <div className="max-w-[800px] mx-auto w-full">
                  <Component />
               </div>
            </div>

          </div>
        ))}

        {/* Footer doesn't need the sticky sidebar */}
        <div className="flex w-full relative">
           <div className="w-[100px] md:w-[180px] lg:w-[220px] shrink-0 relative z-20"></div>
           <div className="flex-1 min-w-0 px-4 sm:px-6 md:pl-0 md:pr-24 lg:pr-36 w-full relative">
              <div className="max-w-[800px] mx-auto w-full">
                 <MorphingFooter />
              </div>
           </div>
        </div>

      </div>
    </main>
  );
}