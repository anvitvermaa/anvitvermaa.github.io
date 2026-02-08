"use client";
import React from 'react';
import ResumeButton from '../ResumeButton'; 

const Hero = () => {
  return (
    // Added id="about" so the Navbar link works
    <section id="about" className="flex flex-col justify-center min-h-screen max-w-[1000px] mx-auto px-6 md:px-0">
      
      {/* Intro */}
      <h1 className="text-[#64ffda] font-mono text-[16px] mb-0 ml-[2px]">
        Hi, my name is
      </h1>

      {/* Name (Restored tight spacing) */}
      <h2 className="text-[#ccd6f6] font-bold text-[clamp(40px,8vw,80px)] leading-[0.9] -mt-[5px] mb-[10px]">
        Anvit Verma.
      </h2>

      {/* Tagline (Restored tight spacing) */}
      <h3 className="text-[#8892b0] font-bold text-[clamp(40px,8vw,80px)] leading-[0.9] -mt-[5px] mb-[30px]">
        AI Engineer and Researcher.
      </h3>

      {/* Detailed Bio (Merged from old About section) */}
      <div className="text-[#8892b0] text-[17px] max-w-[540px] leading-relaxed mb-[50px] space-y-4">
        <p>
          I enjoy building intelligent systems that solve real-world problems. My journey into technology started with a deep curiosity for computer science, which led me to pursue a <strong>Bachelor of Technology</strong> at <span className="text-[#64ffda]">Vellore Institute of Technology, Bhopal</span>.
        </p>
        <p>
          Fast-forward to today, and I’ve had the privilege of working as an <strong>AI Intern</strong> at <span className="text-[#64ffda]">Jio Platforms Limited</span>, where I constructed autonomous agents and RAG pipelines using LangChain and LLAMA 3. I also serve as a <strong>Research Assistant</strong> evaluating neural architectures for autonomous driving, and a <strong>Teaching Assistant</strong> spearheading technical development for university-wide Linux courses.
        </p>
        <p>
          My main focus these days is engineering robust <strong>AI/ML pipelines</strong> and developing <span className="text-[#64ffda]">multi-agent orchestration systems</span>. I thrive at the intersection of full-stack development and advanced machine learning.
        </p>
      </div>

      {/* Resume Button */}
      <div>
        <ResumeButton />
      </div>

    </section>
  );
};

export default Hero;