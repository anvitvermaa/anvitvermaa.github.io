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
    <section id="publications" className="max-w-[1000px] mx-auto py-[60px] md:py-[100px] px-[20px]">
      
      {/* SECTION HEADER */}
      <div className="flex items-center gap-[10px] mb-[40px] md:mb-[60px] w-full whitespace-nowrap">
        <span 
          className="text-[20px] md:text-[clamp(26px,5vw,32px)] text-[#64ffda] font-semibold mr-[10px]"
          style={{ fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace" }}
        >
          03.
        </span>
        <h2 className="font-bold text-[24px] md:text-[clamp(26px,5vw,32px)] text-[#ccd6f6] m-0">Publications</h2>
        <div className="w-full max-w-[150px] md:max-w-[300px] h-[1px] bg-[#233554] ml-[20px]"></div>
      </div>

      {/* CONTENT CONTAINER */}
      <div className="flex flex-col gap-[30px] md:gap-[50px]">
        {publicationsData.map((pub, i) => (
          <div key={i} className="relative group">
            
            {/* THE CARD */}
            {/* Changed flex-row -> flex-col md:flex-row (Stacks on mobile) */}
            <div className="flex flex-col md:flex-row items-stretch bg-[#112240] rounded shadow-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              
              {/* LEFT COLUMN (Metadata) */}
              {/* Changed w-[280px] -> w-full md:w-[280px] */}
              {/* Changed border-r -> border-b md:border-b-0 md:border-r (Bottom border on mobile, Right on desktop) */}
              <div className="w-full md:w-[280px] shrink-0 bg-[#172a45] p-[20px] md:p-[25px] flex flex-col justify-between border-b md:border-b-0 border-[#233554] md:border-r">
                
                {/* Year & Volume Group */}
                {/* Mobile: Row (Side by Side). Desktop: Col (Stacked) */}
                <div className="flex flex-row md:flex-col justify-between md:justify-start mb-4 md:mb-0 gap-4">
                  <div>
                    <div className="font-mono text-[#64ffda] text-xs mb-1 tracking-wider uppercase">Year</div>
                    <div className="text-[#ccd6f6] font-bold text-lg md:mb-4">{pub.year}</div>
                  </div>
                  
                  <div className="text-right md:text-left">
                    <div className="font-mono text-[#64ffda] text-xs mb-1 tracking-wider uppercase">Volume</div>
                    <div className="text-[#ccd6f6] font-bold text-lg md:mb-8">{pub.volume}</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[#ccd6f6] font-bold text-lg leading-tight mb-1">{pub.journal}</h4>
                  <p className="text-[#8892b0] font-mono text-xs mt-2">{pub.meta}</p>
                </div>
              </div>

              {/* RIGHT COLUMN (Content) */}
              <div className="flex-1 p-[20px] md:p-[25px] min-w-0">
                <a 
                  href={pub.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block no-underline text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300"
                >
                  <h3 className="text-[20px] md:text-[22px] font-bold mb-[15px] md:mb-[20px] leading-snug">
                    {pub.title}
                  </h3>
                </a>
                
                <div 
                  className="text-[#8892b0] text-[14px] md:text-[15px] leading-relaxed max-w-full md:max-w-[95%] 
                  [&>ul]:p-0 [&>ul]:m-0 
                  [&>ul>li]:mb-[10px] [&>ul>li]:relative [&>ul>li]:pl-[20px] 
                  [&>ul>li]:before:content-['▹'] [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:text-[#64ffda]"
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