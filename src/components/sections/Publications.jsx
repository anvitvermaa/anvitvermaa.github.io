"use client";
import React from 'react';

const Publications = () => {
  const publicationsData = [
    {
      journal: 'Airo International Research Journal',
      meta: 'ISSN 2320-3714',
      title: 'Perception Challenges in Autonomous Vehicles',
      authors: 'Ishaan Shrivastava, Anvit Verma',
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
    <section id="publications" className="w-full max-w-[1000px] mx-auto py-[100px]">
      
      {/* SECTION HEADER */}
      <div className="flex items-center gap-[10px] mb-[60px] w-full whitespace-nowrap relative">
        <span className="section-num">03</span>
        <span 
          className="text-[clamp(26px,5vw,32px)] text-[#ffffff] font-semibold mr-[10px] relative z-10"
          style={{ fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace" }}
        >
          03.
        </span>
        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(30px,5vw,42px)', color: '#efefef', margin: 0 }} className="relative z-10">Publications</h2>
        <div className="w-full max-w-[300px] h-[1px] bg-[#2a2a2a] ml-[20px] relative z-10"></div>
      </div>

      {/* CONTENT CONTAINER */}
      <div className="flex flex-col gap-[50px]">
        {publicationsData.map((pub, i) => (
          <div key={i} className="relative group reveal" data-stagger-index={i}>
            
            {/* THE CARD — always side-by-side, left column shrinks on mobile */}
            <div className="card-flex items-stretch bg-white/5 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden transition-all duration-300"
              style={{ borderLeft: '2px solid transparent', transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow='0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.15)'; e.currentTarget.style.transform='translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow=''; e.currentTarget.style.borderColor='transparent'; e.currentTarget.style.transform=''; }}
            >
              
              {/* LEFT COLUMN — shrinks on mobile, full 280px on desktop */}
              <div className="card-left-col bg-transparent p-[20px] md:p-[25px] flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[#ffffff] text-[12px] sm:text-[12px] md:text-xs mb-1 tracking-wider uppercase">Year</div>
                  <div className="text-[#efefef] font-bold text-[16px] sm:text-[16px] md:text-2xl mb-3 md:mb-4">{pub.year}</div>
                  
                  <div className="font-mono text-[#ffffff] text-[12px] sm:text-[12px] md:text-xs mb-1 tracking-wider uppercase">Volume</div>
                  <div className="text-[#efefef] font-bold text-[16px] sm:text-[16px] md:text-2xl mb-4 md:mb-8">{pub.volume}</div>
                </div>

                <div>
                  <h4 className="text-[#efefef] font-bold text-[14px] sm:text-[15px] md:text-2xl leading-tight mb-1">{pub.journal}</h4>
                  <p className="text-[#aaaaaa] font-mono text-[12px] sm:text-[12px] md:text-xs mt-2">{pub.meta}</p>
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
                  <h3 className="text-[22px] font-bold mb-[8px]">
                    {pub.title}
                  </h3>
                </a>
                <p className="text-[#777777] font-mono text-[12px] mb-[16px] italic">{pub.authors}</p>
                
                <div 
                  className="text-[#aaaaaa] text-[15px] leading-relaxed max-w-[95%] [&>li]:mb-[10px] [&>li]:relative [&>li]:pl-[20px] [&>li]:before:content-['▹'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-[#ffffff]"
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