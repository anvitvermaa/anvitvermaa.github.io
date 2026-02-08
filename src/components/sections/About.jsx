"use client";
import React from 'react';

const About = () => {
  return (
    <section id="about" className="max-w-[900px] mx-auto py-[100px]">
      
      {/* 1. HEADER */}
      <div className="flex items-center gap-[10px] mb-[40px] w-full whitespace-nowrap">
        <span 
          className="text-[clamp(26px,5vw,32px)] text-[#64ffda] font-semibold mr-[10px]"
          style={{ fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace" }}
        >
          01.
        </span>
        <h2 className="font-bold text-[clamp(26px,5vw,32px)] text-[#ccd6f6] m-0">About Me</h2>
        <div className="w-full max-w-[300px] h-[1px] bg-[#233554] ml-[20px]"></div>
      </div>

      {/* 2. INNER CONTENT (Text Only) */}
      <div className="w-full">
        
        {/* TEXT COLUMN */}
        <div className="text-[#8892b0] font-sans text-[20px] leading-[1.3]">
          <div>
            <p className="mb-[15px]">
              Hello! My name is Anvit and I enjoy building intelligent systems that solve real-world problems. My journey into technology started with a deep curiosity for computer science, which led me to pursue a <strong>Bachelor of Technology</strong> at <span className="text-[#64ffda]">Vellore Institute of Technology, Bhopal</span>.
            </p>

            <p className="mb-[15px]">
              Fast-forward to today, and I’ve had the privilege of working as an <strong>AI Intern</strong> at <span className="text-[#64ffda]">Jio Platforms Limited</span>, where I constructed autonomous agents and RAG pipelines using LangChain and LLAMA 3. I also serve as a <strong>Research Assistant</strong> evaluating neural architectures for autonomous driving, and a <strong>Teaching Assistant</strong> spearheading technical development for university-wide Linux courses.
            </p>

            <p className="mb-[15px]">
              My main focus these days is engineering robust <strong>AI/ML pipelines</strong> and developing <span className="text-[#64ffda]">multi-agent orchestration systems</span>. I thrive at the intersection of full-stack development and advanced machine learning, constantly looking to bridge the gap between theoretical research and practical application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;