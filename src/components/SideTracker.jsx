"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SideTracker() {
  const [activeSection, setActiveSection] = useState("01 / ABOUT");
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress (0 to 1) to vertical movement (top to bottom of screen)
  const diverY = useTransform(scrollYProgress, [0, 1], ["10vh", "90vh"]);

  useEffect(() => {
    const sections = [
      { id: "about", label: "01 / ABOUT" },
      { id: "jobs", label: "02 / EXPERIENCE" },
      { id: "publications", label: "03 / PUBLICATIONS" },
      { id: "selected-works", label: "04 / WORKS" },
      { id: "education", label: "05 / EDUCATION" },
      { id: "skills", label: "06 / SKILLS" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(s => s.id === entry.target.id);
            if (section) setActiveSection(section.label);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" } 
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-[120px] lg:w-[150px] h-screen pointer-events-none z-[50] flex-col items-center border-r border-[#2a2a2a]/30 hidden md:flex mix-blend-difference">
      
      {/* Active Section Label */}
      <div className="absolute left-[30px] lg:left-[40px] top-[100px] text-[#efefef] font-mono text-[12px] tracking-widest whitespace-nowrap">
        ( {activeSection} )
      </div>

      {/* Depth Markers */}
      <div className="absolute left-[20px] lg:left-[30px] flex flex-col justify-between h-[80vh] top-[10vh] text-[#666666] font-mono text-[10px] tracking-widest">
        <div className="flex items-center gap-3"><div className="w-[15px] h-[1px] bg-[#666]"></div>00,00,00</div>
        <div className="flex items-center gap-3"><div className="w-[10px] h-[1px] bg-[#444]"></div></div>
        <div className="flex items-center gap-3"><div className="w-[15px] h-[1px] bg-[#666]"></div>00,30,00</div>
        <div className="flex items-center gap-3"><div className="w-[10px] h-[1px] bg-[#444]"></div></div>
        <div className="flex items-center gap-3"><div className="w-[15px] h-[1px] bg-[#666]"></div>00,60,00</div>
        <div className="flex items-center gap-3"><div className="w-[10px] h-[1px] bg-[#444]"></div></div>
        <div className="flex items-center gap-3"><div className="w-[15px] h-[1px] bg-[#666]"></div>01,00,00</div>
        <div className="flex items-center gap-3"><div className="w-[10px] h-[1px] bg-[#444]"></div></div>
        <div className="flex items-center gap-3"><div className="w-[15px] h-[1px] bg-[#666]"></div>01,30,00</div>
      </div>

      {/* The Diver Character */}
      <motion.div 
        className="absolute left-[80px] lg:left-[100px]"
        style={{ top: diverY }}
      >
        <svg 
          width="30" 
          height="50" 
          viewBox="0 0 24 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#a0e0ff] drop-shadow-[0_0_12px_rgba(160,224,255,0.6)]"
        >
          {/* Sleek deep sea diver abstract shape */}
          <path d="M12 0L14 10C14 10 19 12 19 16C19 20 14 26 14 26L12 40L10 26C10 26 5 20 5 16C5 12 10 10 10 10L12 0Z" fill="currentColor" opacity="0.9"/>
          
          {/* Appendages / Fins */}
          <path d="M14 16L20 12L16 22Z" fill="currentColor" opacity="0.5"/>
          <path d="M10 16L4 12L8 22Z" fill="currentColor" opacity="0.5"/>
          
          {/* Core glow */}
          <circle cx="12" cy="16" r="2" fill="#ffffff" />
        </svg>
      </motion.div>

    </div>
  );
}
