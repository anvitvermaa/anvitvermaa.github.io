"use client";
import React from 'react';
import ResumeButton from '../ResumeButton';

const Hero = () => {
  return (
    <section id="about" className="flex flex-col justify-center min-h-screen max-w-[1000px] mx-auto px-6 md:px-0">
      
      <div className="flex flex-col pt-20 md:pt-0 relative w-full justify-center">
        <div className="w-full">
          <h1 className="text-[#ffffff] font-mono text-[16px] md:text-[18px] mb-0 ml-[2px]">
            Hi, my name is
          </h1>

          <h2 className="text-[#efefef] font-bold text-[clamp(40px,8vw,80px)] leading-[0.9] -mt-[5px] mb-[10px]">
            Anvit Verma.
          </h2>

          <h3 className="text-[#888888] font-bold text-[clamp(40px,8vw,80px)] leading-[0.9] -mt-[5px] mb-[30px]">
            AI Engineer and Researcher.
          </h3>

          <div className="text-[#aaaaaa] text-[17px] md:text-[19px] max-w-[540px] leading-relaxed mb-[50px] space-y-4">
            <p>
              I enjoy building intelligent systems that solve real-world problems. My journey into technology started with a deep curiosity for computer science, which led me to pursue a <strong className="text-[#efefef]">Bachelor of Technology</strong> at <span className="text-[#efefef]">Vellore Institute of Technology, Bhopal</span>.
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working as an <strong className="text-[#efefef]">AI Intern</strong> at <span className="text-[#efefef]">Jio Platforms Limited</span>, where I constructed autonomous agents and RAG pipelines using LangChain and LLAMA 3. I also serve as a <strong className="text-[#efefef]">Research Assistant</strong> evaluating neural architectures for autonomous driving, and a <strong className="text-[#efefef]">Teaching Assistant</strong> spearheading technical development for university-wide Linux courses.
            </p>
            <p>
              My main focus these days is engineering robust <strong className="text-[#efefef]">AI/ML pipelines</strong> and developing <span className="text-[#efefef]">multi-agent orchestration systems</span>. I thrive at the intersection of full-stack development and advanced machine learning.
            </p>
          </div>

          <div>
            <ResumeButton />
          </div>
        </div>

        <div className="w-[250px] md:w-[280px] mt-10 md:mt-0 mx-auto md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 z-10">
          <div className="relative group">
            {/* Outline box behind the image */}
            <div className="absolute inset-0 border-2 border-[#ffffff] rounded opacity-50 group-hover:opacity-100 transition-all duration-300 translate-x-4 translate-y-4 group-hover:translate-x-3 group-hover:translate-y-3 z-0"></div>
            {/* Photo with grayscale filter */}
            <img 
              src="/photo.PNG" 
              alt="Anvit Verma" 
              className="relative z-10 w-full h-auto rounded grayscale hover:grayscale-0 transition-all duration-500 object-cover"
            />
            {/* Subtle tint overlay */}
            <div className="absolute inset-0 bg-[#ffffff] opacity-10 mix-blend-multiply group-hover:opacity-0 transition-all duration-500 z-20 rounded pointer-events-none"></div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;