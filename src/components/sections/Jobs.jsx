"use client";
import React from 'react';

const Jobs = () => {
  const jobsData = [
    {
      company: 'Vellore Institute of Technology',
      location: 'Bhopal, IN',
      title: 'Research Assistant',
      range: 'Sept 2025 - Present',
      url: 'https://vitbhopal.ac.in',
      html: `
        <li>Analyzed findings from 80+ peer-reviewed papers to evaluate the evolution of neural architectures in autonomous driving from Kalman filter baselines to modern LSTM and GNN models.</li>
        <li>Determined a 40% reduction in trajectory prediction error across modern safety-critical systems by validating reported neural network benchmarks.</li>
        <li>Appraised 9 foundational ADAS surveys to identify research gaps and formulate a technical roadmap for Neuro-Symbolic and Bio-Inspired certifiable AI systems.</li>
      `
    },
    {
      company: 'Jio Platforms Limited (JPL)',
      location: 'Navi Mumbai, IN',
      title: 'AI Intern',
      range: 'May 2025 - June 2025',
      url: 'https://www.jio.com',
      html: `
        <li>Constructed autonomous AI agents using LangChain and LLAMA 3, implementing a RAG pipeline over 500+ internal documents for precise information retrieval.</li>
        <li>Implemented dynamic SQL generation enabling structured querying across complex relational databases within the agent workflow.</li>
        <li>Launched a LangGraph-based multi-agent system that automated 90% of complaint routing and reduced operational latency by 20%.</li>
      `
    },
    {
      company: 'Official University E-Learning Portal (Vityarthi)',
      location: 'Bhopal, IN',
      title: 'Teaching Assistant',
      range: 'March 2025 - August 2025',
      url: '#', 
      html: `
        <li>Spearheaded the end-to-end technical development of the university wide Linux course (CSE0002) for 3,000+ students in just first semester of the launch.</li>
        <li>Systematized 90 Bash and Shell automation scripts replicating real-world system administration workflows including log analysis and process monitoring.</li>
        <li>Delivered 100% of technical screen demonstrations capturing real-time execution of advanced Linux commands for asynchronous learning at scale.</li>
      `
    }
  ];

  return (
    <section id="jobs" className="max-w-[1000px] mx-auto py-[100px]">
      
      {/* SECTION HEADER */}
      <div className="flex items-center gap-[10px] mb-[60px] w-full whitespace-nowrap">
        <span 
          className="text-[clamp(26px,5vw,32px)] text-[#64ffda] font-semibold mr-[10px]"
          // Forced Font Match with Navbar
          style={{ fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace" }}
        >
          02.
        </span>
        <h2 className="font-bold text-[clamp(26px,5vw,32px)] text-[#ccd6f6] m-0">Experience</h2>
        <div className="w-full max-w-[300px] h-[1px] bg-[#233554] ml-[20px]"></div>
      </div>

      {/* TIMELINE CONTAINER */}
      <div className="relative border-l-2 border-[#233554] ml-[20px]">
        
        {jobsData.map((job, i) => (
          <div 
            key={i} 
            className="relative pl-[40px] mb-[60px] last:mb-0 group"
          >
            
            {/* THE DOT */}
            <div className="absolute left-[-9px] top-0 w-[16px] h-[16px] rounded-full bg-[#0a192f] border-2 border-[#64ffda] group-hover:bg-[#64ffda] transition-colors duration-300"></div>

            {/* THE CARD */}
            <div className="flex flex-row items-stretch bg-[#112240] rounded shadow-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              
              {/* LEFT COLUMN */}
              <div className="w-[280px] shrink-0 bg-[#172a45] p-[25px] flex flex-col justify-between border-r border-[#233554]">
                <div>
                  <div className="font-mono text-[#64ffda] text-xs mb-1 tracking-wider uppercase">From</div>
                  <div className="text-[#ccd6f6] font-bold text-lg mb-4">{job.range.split(' - ')[0]}</div>
                  
                  <div className="font-mono text-[#64ffda] text-xs mb-1 tracking-wider uppercase">To</div>
                  <div className="text-[#ccd6f6] font-bold text-lg mb-8">{job.range.split(' - ')[1] || 'Present'}</div>
                </div>

                <div>
                  <h4 className="text-[#ccd6f6] font-bold text-xl leading-tight mb-1">{job.company}</h4>
                  <p className="text-[#8892b0] font-mono text-xs">{job.location}</p>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex-1 p-[25px] min-w-0">
                <h3 className="text-[22px] font-bold text-[#ccd6f6] mb-[20px] group-hover:text-[#64ffda] transition-colors duration-300">
                  {job.title}
                </h3>
                
                <div 
                  className="text-[#8892b0] text-[15px] leading-relaxed [&>li]:mb-[10px] [&>li]:relative [&>li]:pl-[20px] [&>li]:before:content-['▹'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-[#64ffda]"
                  dangerouslySetInnerHTML={{ __html: `<ul>${job.html}</ul>` }} 
                />
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Jobs;