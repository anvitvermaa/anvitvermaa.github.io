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
          className="text-[clamp(26px,5vw,32px)] text-[#ffffff] font-semibold mr-[10px]"
          style={{ fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace" }}
        >
          03.
        </span>
        <h2 className="font-bold text-[clamp(26px,5vw,32px)] text-[#efefef] m-0">Publications</h2>
        <div className="w-full max-w-[300px] h-[1px] bg-[#2a2a2a] ml-[20px]"></div>
      </div>

      {/* CONTENT CONTAINER */}
      <div className="flex flex-col gap-[50px]">
        {publicationsData.map((pub, i) => (
          <div key={i} className="relative group">
            
            {/* THE CARD — always side-by-side, left column shrinks on mobile */}
            <div className="card-flex items-stretch bg-[#141414] rounded shadow-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              
              {/* LEFT COLUMN — shrinks on mobile, full 280px on desktop */}
              <div className="card-left-col bg-[#1c1c1c] p-[20px] md:p-[25px] flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[#ffffff] text-[12px] sm:text-[12px] md:text-xs mb-1 tracking-wider uppercase">Year</div>
                  <div className="text-[#efefef] font-bold text-[16px] sm:text-[16px] md:text-lg mb-3 md:mb-4">{pub.year}</div>
                  
                  <div className="font-mono text-[#ffffff] text-[12px] sm:text-[12px] md:text-xs mb-1 tracking-wider uppercase">Volume</div>
                  <div className="text-[#efefef] font-bold text-[16px] sm:text-[16px] md:text-lg mb-4 md:mb-8">{pub.volume}</div>
                </div>

                <div>
                  <h4 className="text-[#efefef] font-bold text-[14px] sm:text-[15px] md:text-lg leading-tight mb-1">{pub.journal}</h4>
                  <p className="text-[#777777] font-mono text-[12px] sm:text-[12px] md:text-xs mt-2">{pub.meta}</p>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex-1 p-[25px] min-w-0">
                <a 
                  href={pub.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  // FIX 1: Moved color classes here (text-[#efefef] hover:text-[#ffffff])
                  // FIX 2: Added 'block' to ensure it captures the hover correctly
                  className="block no-underline text-[#efefef] hover:text-[#ffffff] transition-colors duration-300"
                >
                  {/* FIX 3: Removed text color from h3 so it inherits from parent <a> */}
                  <h3 className="text-[22px] font-bold mb-[20px]">
                    {pub.title}
                  </h3>
                </a>
                
                <div 
                  className="text-[#777777] text-[15px] leading-relaxed max-w-[95%] [&>li]:mb-[10px] [&>li]:relative [&>li]:pl-[20px] [&>li]:before:content-['▹'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-[#ffffff]"
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