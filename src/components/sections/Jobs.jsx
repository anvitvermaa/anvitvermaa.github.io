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
          className="text-[clamp(26px,5vw,32px)] text-[#ffffff] font-semibold mr-[10px]"
          style={{ fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace" }}
        >
          02.
        </span>
        <h2 className="font-bold text-[clamp(26px,5vw,32px)] text-[#efefef] m-0">Experience</h2>
        <div className="w-full max-w-[300px] h-[1px] bg-[#2a2a2a] ml-[20px]"></div>
      </div>

      {/* TIMELINE CONTAINER */}
      <div className="relative border-l-2 border-[#2a2a2a] ml-[20px]">

        {jobsData.map((job, i) => (
          <div
            key={i}
            className="relative pl-[40px] mb-[60px] last:mb-0 group"
          >

            {/* THE DOT */}
            <div className="absolute left-[-9px] top-0 w-[16px] h-[16px] rounded-full bg-[#0a0a0a] border-2 border-[#ffffff] group-hover:bg-[#ffffff] transition-colors duration-300"></div>

            {/* THE CARD */}
            <div className="card-flex items-stretch bg-[#141414] rounded shadow-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">

              {/* LEFT COLUMN */}
              <div className="card-left-col bg-[#1c1c1c] p-[20px] md:p-[25px] flex flex-col justify-between">
                <div>
                  <div className="card-label font-mono text-[#ffffff] tracking-wider uppercase mb-[2px]">From</div>
                  <div className="card-date text-[#efefef] font-bold mb-2">{job.range.split(' - ')[0]}</div>

                  <div className="card-label font-mono text-[#ffffff] tracking-wider uppercase mb-[2px]">To</div>
                  <div className="card-date text-[#efefef] font-bold mb-3">{job.range.split(' - ')[1] || 'Present'}</div>
                </div>

                <div>
                  <h4 className="card-company text-[#efefef] font-bold leading-tight mb-1">{job.company}</h4>
                  <p className="text-[#aaaaaa] font-mono text-[10px] sm:text-[11px] mt-1">{job.location}</p>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex-1 p-[10px] sm:p-[18px] md:p-[25px] min-w-0 overflow-hidden">
                <h3 className="card-title font-bold text-[#efefef] mb-[10px] group-hover:text-[#ffffff] transition-colors duration-300">
                  {job.title}
                </h3>

                <div
                  className="card-body text-[#aaaaaa] leading-relaxed [&>li]:mb-[10px] [&>li]:relative [&>li]:pl-[18px] [&>li]:before:content-['▹'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-[#ffffff]"
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