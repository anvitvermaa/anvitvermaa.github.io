"use client";
import React from 'react';

const Education = () => {
  const educationData = [
    {
      institution: 'Vellore Institute of Technology',
      location: 'Bhopal, India',
      degree: 'Bachelor of Technology in Computer Science Engineering',
      range: '2023 - 2027',
      url: 'https://vitbhopal.ac.in',
      html: `
        
        <li><strong>Relevant Coursework:</strong> Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Networks, Object Oriented Programming.</li>
        
      `
    }
  ];

  return (
    <section id="education" className="max-w-[1000px] mx-auto py-[100px]">
      
      {/* SECTION HEADER */}
      <div className="flex items-center gap-[10px] mb-[60px] w-full whitespace-nowrap">
        <span className="font-mono text-[clamp(26px,5vw,32px)] text-[#64ffda] font-semibold mr-[10px]">04.</span>
        <h2 className="font-bold text-[clamp(26px,5vw,32px)] text-[#ccd6f6] m-0">Education</h2>
        <div className="w-full max-w-[300px] h-[1px] bg-[#233554] ml-[20px]"></div>
      </div>

      {/* TIMELINE CONTAINER (Matches Jobs Exact Structure) */}
      <div className="relative border-l-2 border-[#233554] ml-[20px]">
        
        {educationData.map((edu, i) => (
          <div 
            key={i} 
            className="relative pl-[40px] mb-[60px] last:mb-0 group"
          >
            
            {/* THE DOT */}
            <div className="absolute left-[-9px] top-0 w-[16px] h-[16px] rounded-full bg-[#0a192f] border-2 border-[#64ffda] group-hover:bg-[#64ffda] transition-colors duration-300"></div>

            {/* THE CARD */}
            <div className="flex flex-row items-stretch bg-[#112240] rounded shadow-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              
              {/* LEFT COLUMN: Dates & Institution (Blue Box) */}
              {/* Exact width and padding as Jobs component */}
              <div className="w-[280px] shrink-0 bg-[#172a45] p-[25px] flex flex-col justify-between border-r border-[#233554]">
                <div>
                  <div className="font-mono text-[#64ffda] text-xs mb-1 tracking-wider uppercase">From</div>
                  <div className="text-[#ccd6f6] font-bold text-lg mb-4">{edu.range.split(' - ')[0]}</div>
                  
                  <div className="font-mono text-[#64ffda] text-xs mb-1 tracking-wider uppercase">To</div>
                  <div className="text-[#ccd6f6] font-bold text-lg mb-8">{edu.range.split(' - ')[1]}</div>
                </div>

                <div>
                  <h4 className="text-[#ccd6f6] font-bold text-xl leading-tight mb-1">{edu.institution}</h4>
                  <p className="text-[#8892b0] font-mono text-xs">{edu.location}</p>
                </div>
              </div>

              {/* RIGHT COLUMN: Degree & Description (Dark Box) */}
              <div className="flex-1 p-[25px] min-w-0">
                <h3 className="text-[22px] font-bold text-[#ccd6f6] mb-[20px] group-hover:text-[#64ffda] transition-colors duration-300">
                  {edu.degree}
                </h3>
                
                <div 
                  className="text-[#8892b0] text-[15px] leading-relaxed [&>li]:mb-[10px] [&>li]:relative [&>li]:pl-[20px] [&>li]:before:content-['▹'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-[#64ffda]"
                  dangerouslySetInnerHTML={{ __html: `<ul>${edu.html}</ul>` }} 
                />
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;