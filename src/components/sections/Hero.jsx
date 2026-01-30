"use client";
import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen max-w-[1000px] mx-auto -mt-[80px]">
      
      {/* Intro - Reduced gap significantly (mb-[12px]) */}
      <h1 className="text-[#64ffda] font-mono text-[16px] mb-[12px] ml-[2px]">
        Hi, my name is
      </h1>

      {/* Name - Kept margin small */}
      <h2 className="text-[#ccd6f6] font-bold text-[clamp(40px,8vw,80px)] leading-[1.1] mb-[5px]">
        Anvit Verma.
      </h2>

      {/* Tagline - Reduced gap to pull description closer (mb-[15px]) */}
      <h3 className="text-[#8892b0] font-bold text-[clamp(40px,8vw,80px)] leading-[1.1] mb-[15px]">
        I build things for the web.
      </h3>

      {/* Short Bio */}
      <p className="text-[#8892b0] text-[18px] max-w-[540px] leading-relaxed mb-[50px]">
        I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <span className="text-[#64ffda]">Vellore Institute of Technology</span>.
      </p>

      {/* CTA Button */}
      <div>
        <a 
          href="/resume.pdf"
          target="_blank" 
          rel="noopener noreferrer"
          className="border border-[#64ffda] text-[#64ffda] bg-transparent rounded-[4px] px-[50px] py-[20px] font-mono text-[14px] hover:bg-[#64ffda]/10 transition-colors inline-block"
        >
          Resume
        </a>
      </div>

    </section>
  );
};

export default Hero;