"use client";
import React from 'react';
import ResumeButton from '../ResumeButton';

const Hero = () => {
  return (
    <section id="about" className="flex flex-col justify-start min-h-screen max-w-[800px] mx-auto px-6 md:px-0 pt-24">
      
      <div className="pt-20 md:pt-0 w-full">
        {/* Headings - full width, no grid */}
        <p className="text-[#ffffff] font-mono text-[14px] md:text-[16px] ml-[2px]" style={{ margin: 0, padding: 0, marginBottom: '5px' }}>
          Hi, my name is
        </p>
        <h2 className="text-[#efefef] text-[clamp(40px,6vw,70px)] drop-shadow-md" style={{ margin: 0, padding: 0, lineHeight: 1.1, fontFamily: "'Karmatic Arcade', sans-serif", letterSpacing: '1px' }}>
          ANVIT VERMA
        </h2>
        <h3 className="text-[#888888] font-bold text-[clamp(40px,6vw,70px)]" style={{ margin: 0, padding: 0, lineHeight: 1.1, marginBottom: '20px' }}>
          AI Engineer and Researcher.
        </h3>

        {/* Bio + Photo side by side */}
        <div className="hero-grid">
          <div style={{ minWidth: 0 }}>
            <div className="text-[#aaaaaa] text-[15px] md:text-[16px] max-w-[480px] leading-relaxed mb-[30px] space-y-3">
              <p>
                I enjoy building intelligent systems that solve real-world problems. My journey into technology started with a deep curiosity for computer science, which led me to pursue a <strong className="text-[#efefef]">Bachelor of Technology</strong> at <span className="text-[#efefef]">Vellore Institute of Technology, Bhopal</span>.
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working as an <strong className="text-[#efefef]">AI Intern</strong> at <span className="text-[#efefef]">Jio Platforms Limited</span>, where I constructed autonomous agents and RAG pipelines using LangChain and LLAMA 3. I also serve as a <strong className="text-[#efefef]">Research Assistant</strong> evaluating neural architectures for autonomous driving, and a <strong className="text-[#efefef]">Technical Assistant</strong> spearheading technical development for university-wide Linux courses.
              </p>
              <p>
                My main focus these days is engineering robust <strong className="text-[#efefef]">AI/ML pipelines</strong> and developing <span className="text-[#efefef]">multi-agent orchestration systems</span>. I thrive at the intersection of full-stack development and advanced machine learning.
              </p>
            </div>

            <div>
              <ResumeButton />
            </div>
          </div>

          {/* Photo */}
          <div className="hero-photo">
            <div className="relative">
              <img 
                src="/photo.png" 
                alt="Anvit Verma" 
                className="relative w-full h-auto rounded grayscale hover:grayscale-0 transition-all duration-500 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;