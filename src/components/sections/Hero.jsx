"use client";
import React from 'react';
import ResumeButton from '../ResumeButton';

const Hero = () => {
  return (
    <section id="about" className="flex flex-col min-h-[100svh] max-w-[1000px] mx-auto px-6 md:px-0 pt-[clamp(6rem,12vh,10rem)] pb-[100px]">
      
      {/* Main Content Group (Header + Grid) */}
      <div className="w-full">
        <p className="text-[#ffffff] font-mono text-[clamp(14px,1.5vw,18px)] ml-[2px] mb-[1vh]" style={{ margin: 0, padding: 0 }}>
          Hi, my name is
        </p>
        <h2 className="text-[#efefef] font-bold text-[clamp(50px,8vw,100px)] tracking-tight" style={{ margin: 0, padding: 0, lineHeight: 1.1 }}>
          Anvit Verma.
        </h2>
        <h3 className="text-[#888888] font-bold text-[clamp(40px,6vw,80px)] tracking-tight" style={{ margin: 0, padding: 0, lineHeight: 1.1, marginBottom: 'clamp(30px, 5vh, 60px)' }}>
          AI Engineer and Researcher.
        </h3>

        {/* Bio + Photo side by side */}
        <div className="hero-grid items-center">
          <div style={{ minWidth: 0 }}>
            <div className="text-[#aaaaaa] text-[clamp(15px,1.5vh+0.5vw,22px)] max-w-[600px] leading-relaxed space-y-[clamp(1rem,3vh,2rem)]">
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

      {/* Bottom: Resume Button */}
      <div className="w-full mt-auto pt-[clamp(2rem,6vh,6rem)]">
        <ResumeButton />
      </div>

    </section>
  );
};

export default Hero;