"use client";
import React from 'react';
import ResumeButton from '../ResumeButton'; // Import the new component

const Hero = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen max-w-[1000px] mx-auto">
      
      {/* Intro */}
      <h1 className="text-[#64ffda] font-mono text-[16px] mb-0 ml-[2px]">
        Hi, my name is
      </h1>

      {/* Name */}
      <h2 className="text-[#ccd6f6] font-bold text-[clamp(40px,8vw,80px)] leading-[0.9] -mt-[5px] mb-[10px]">
        Anvit Verma.
      </h2>

      {/* Tagline */}
      <h3 className="text-[#8892b0] font-bold text-[clamp(40px,8vw,80px)] leading-[0.9] -mt-[5px] mb-[30px]">
        AI Engineer and Researcher.
      </h3>

      {/* Short Bio */}
      <p className="text-[#8892b0] text-[18px] max-w-[540px] leading-relaxed mb-[50px]">
        I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <span className="text-[#64ffda]">Vellore Institute of Technology</span>.
      </p>

      {/* THE NEW BUTTON */}
      <div>
        <ResumeButton />
      </div>

    </section>
  );
};

export default Hero;