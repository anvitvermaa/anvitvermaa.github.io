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
        <span
          className="text-[clamp(26px,5vw,32px)] text-[#64ffda] font-semibold mr-[10px]"
          style={{ fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace" }}
        >
          05.
        </span>
        <h2 className="font-bold text-[clamp(26px,5vw,32px)] text-[#ccd6f6] m-0">Education</h2>
        <div className="w-full max-w-[300px] h-[1px] bg-[#233554] ml-[20px]"></div>
      </div>

      {/* TIMELINE CONTAINER */}
      <div className="relative border-l-2 border-[#233554] ml-[20px]">

        {educationData.map((edu, i) => (
          <div
            key={i}
            className="relative pl-[40px] mb-[60px] last:mb-0 group"
          >

            {/* THE DOT */}
            <div className="absolute left-[-9px] top-0 w-[16px] h-[16px] rounded-full bg-[#0a192f] border-2 border-[#64ffda] group-hover:bg-[#64ffda] transition-colors duration-300"></div>

            {/* THE CARD — always side-by-side, left column shrinks on mobile */}
            <div className="card-flex items-stretch bg-[#112240] rounded shadow-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">

              {/* LEFT COLUMN — shrinks on mobile, full 280px on desktop */}
              <div className="card-left-col bg-[#172a45] p-[20px] md:p-[25px] flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[#64ffda] text-[10px] sm:text-[11px] md:text-xs mb-[2px] tracking-wider uppercase">From</div>
                  <div className="text-[#ccd6f6] font-bold text-[13px] sm:text-[15px] md:text-lg mb-2 md:mb-4">{edu.range.split(' - ')[0]}</div>

                  <div className="font-mono text-[#64ffda] text-[10px] sm:text-[11px] md:text-xs mb-[2px] tracking-wider uppercase">To</div>
                  <div className="text-[#ccd6f6] font-bold text-[13px] sm:text-[15px] md:text-lg mb-3 md:mb-8">{edu.range.split(' - ')[1]}</div>
                </div>

                <div>
                  <h4 className="text-[#ccd6f6] font-bold text-[11px] sm:text-[14px] md:text-xl leading-tight mb-1">{edu.institution}</h4>
                  <p className="text-[#8892b0] font-mono text-[10px] sm:text-[11px] md:text-xs mt-1">{edu.location}</p>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex-1 p-[12px] sm:p-[18px] md:p-[25px] min-w-0">
                <h3 className="text-[16px] sm:text-[18px] md:text-[22px] font-bold text-[#ccd6f6] mb-[12px] md:mb-[20px] group-hover:text-[#64ffda] transition-colors duration-300">
                  {edu.degree}
                </h3>

                <div
                  className="text-[#8892b0] text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed [&>li]:mb-[10px] [&>li]:relative [&>li]:pl-[18px] [&>li]:before:content-['▹'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-[#64ffda]"
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