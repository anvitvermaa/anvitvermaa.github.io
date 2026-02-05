"use client";
import React from 'react';

const Publications = () => {
  const publicationsData = [
    {
      journal: 'Airo International Research Journal',
      meta: 'ISSN 2320-3714',
      title: 'Review on Autonomous Vehicle Perception: Challenges & Technologies',
      year: '2025',
      volume: 'Vol 1 - Issue 3',
      url: 'https://www.airo.co.in/view-publication/2356',
      html: `
        <li>Investigated the multifaceted challenges of autonomous driving, focusing on sensor fusion, object detection, and localization to enhance operational reliability and safety.</li>
        <li>Evaluated critical technologies including depth estimation, dynamic object tracking, and semantic segmentation to construct a cohesive environmental model for self-directed vehicles.</li>
        <li>Addressed the ethical implications and privacy concerns related to data collection while formulating a technical roadmap for overcoming adverse environmental conditions in perception systems.</li>
      `
    }
  ];

  return (
    <section id="publications" className="max-w-[1000px] mx-auto py-[100px]">
      
      {/* SECTION HEADER */}
      <div className="flex items-center gap-[10px] mb-[60px] w-full whitespace-nowrap">
        <span 
          className="text-[clamp(26px,5vw,32px)] text-[#64ffda] font-semibold mr-[10px]"
          // Forced Font Match with Navbar
          style={{ fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace" }}
        >
          03.
        </span>
        <h2 className="font-bold text-[clamp(26px,5vw,32px)] text-[#ccd6f6] m-0">Publications</h2>
        <div className="w-full max-w-[300px] h-[1px] bg-[#233554] ml-[20px]"></div>
      </div>

      {/* CONTENT CONTAINER */}
      <div className="flex flex-col gap-[50px]">
        {publicationsData.map((pub, i) => (
          <div key={i} className="relative group">
            
            {/* THE CARD */}
            <div className="flex flex-row items-stretch bg-[#112240] rounded shadow-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              
              {/* LEFT COLUMN */}
              <div className="w-[280px] shrink-0 bg-[#172a45] p-[25px] flex flex-col justify-between border-r border-[#233554]">
                <div>
                  <div className="font-mono text-[#64ffda] text-xs mb-1 tracking-wider uppercase">Year</div>
                  <div className="text-[#ccd6f6] font-bold text-lg mb-4">{pub.year}</div>
                  
                  <div className="font-mono text-[#64ffda] text-xs mb-1 tracking-wider uppercase">Volume</div>
                  <div className="text-[#ccd6f6] font-bold text-lg mb-8">{pub.volume}</div>
                </div>

                <div>
                  <h4 className="text-[#ccd6f6] font-bold text-lg leading-tight mb-1">{pub.journal}</h4>
                  <p className="text-[#8892b0] font-mono text-xs mt-2">{pub.meta}</p>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex-1 p-[25px] min-w-0">
                <a 
                  href={pub.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block group-hover:text-[#64ffda] transition-colors duration-300"
                >
                  <h3 className="text-[22px] font-bold text-[#ccd6f6] mb-[20px]">
                    {pub.title}
                  </h3>
                </a>
                
                <div 
                  className="text-[#8892b0] text-[15px] leading-relaxed max-w-[95%] [&>li]:mb-[10px] [&>li]:relative [&>li]:pl-[20px] [&>li]:before:content-['▹'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-[#64ffda]"
                  dangerouslySetInnerHTML={{ __html: `<ul>${pub.html}</ul>` }} 
                />
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;