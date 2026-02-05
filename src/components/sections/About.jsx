"use client";
import React from 'react';

const About = () => {
  // Skills extracted from your resume
  const skills = ['Python', 'C++', 'React', 'LangChain', 'PyTorch', 'AWS'];

  return (
    <section id="about" className="max-w-[900px] mx-auto py-[100px]">
      
      {/* 1. HEADER */}
      <div className="flex items-center gap-[10px] mb-[40px] w-full whitespace-nowrap">
        <span 
          className="text-[clamp(26px,5vw,32px)] text-[#64ffda] font-semibold mr-[10px]"
          // Forced Font Match
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
              Hello! My name is Anvit and I enjoy building intelligent systems that solve real-world problems. My journey into technology started with a deep curiosity for computer science, which led me to pursue a <strong>Bachelor of Technology</strong> at <a href="https://vitbhopal.ac.in/" className="text-[#64ffda] inline-block relative hover:underline">Vellore Institute of Technology, Bhopal</a>.
            </p>

            <p className="mb-[15px]">
              Fast-forward to today, and I’ve had the privilege of working as an <strong>AI Intern</strong> at <a href="https://www.jio.com/" className="text-[#64ffda] inline-block relative hover:underline">Jio Platforms Limited</a>, where I constructed autonomous agents and RAG pipelines using LangChain and LLAMA 3. I also serve as a <strong>Research Assistant</strong> evaluating neural architectures for autonomous driving, and a <strong>Teaching Assistant</strong> spearheading technical development for university-wide Linux courses.
            </p>

            <p className="mb-[15px]">
              My main focus these days is engineering robust <strong>AI/ML pipelines</strong> and developing <a href="#" className="text-[#64ffda] inline-block relative hover:underline">multi-agent orchestration systems</a>. I thrive at the intersection of full-stack development and advanced machine learning, constantly looking to bridge the gap between theoretical research and practical application.
            </p>

            <p className="mb-[15px]">Here are a few technologies I’ve been working with recently:</p>
          </div>

          {/* SKILLS LIST */}
          <ul className="grid grid-cols-[repeat(2,minmax(140px,200px))] gap-[0_10px] p-0 m-[20px_0_0_0] overflow-hidden list-none">
            {skills.map((skill, i) => (
              <li key={i} className="relative mb-[10px] pl-[20px] font-mono text-[13px] text-[#8892b0] flex items-center">
                <span className="absolute left-0 text-[#64ffda] text-[14px] leading-[12px]">▹</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;