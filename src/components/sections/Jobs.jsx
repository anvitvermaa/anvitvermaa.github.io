"use client";
import React from 'react';

const Jobs = () => {
  const jobsData = [
    {
      company: 'Jio Platforms Limited (JPL)',
      location: 'Navi Mumbai, IN',
      title: 'Databricks Intern',
      range: 'June 2026 - Present',
      url: 'https://www.jio.com',
      html: `
        <li>Just got started! Currently setting up my environment, diving into the Databricks ecosystem, and drinking from the firehose. More updates coming soon as I start building out scalable data pipelines.</li>
      `
    },
    {
      company: 'Official University E-Learning Portal (Vityarthi)',
      location: 'Bhopal, IN',
      title: 'Technical Assistant',
      range: 'Sept 2025 - Jan 2026',
      url: '#',
      html: `
        <li>Spearheaded the end-to-end technical development of the university wide Linux course (CSE0002) for 4,100+ students in just first semester of the launch.</li>
        <li>Systematized 90 Bash and Shell automation scripts replicating real-world system administration workflows including log analysis and process monitoring.</li>
        <li>Delivered 100% of technical screen demonstrations capturing real-time execution of advanced Linux commands for asynchronous learning at scale.</li>
      `
    },
    {
      company: 'Vellore Institute of Technology',
      location: 'Bhopal, IN',
      title: 'Research Assistant',
      range: 'Jan 2025 - Present',
      url: 'https://vitbhopal.ac.in',
      html: `
        <li><strong>Research Focus 4: Causal Evaluation of EV Subsidies:</strong> Evaluated the Maharashtra EV Policy 2025 via a macro-panel (N=9, T=54). Engineered an out-of-core DuckDB/Polars ETL pipeline and implemented Synthetic Difference-in-Differences (SDiD) in Python to quantify the "Demand Displacement Paradox."</li>
        <li><strong>Research Focus 3: Rondônia Fishbone Harmonizer:</strong> Upscaled historical 30m Landsat imagery to 10m Sentinel-2 resolution to monitor Amazon deforestation. Built a PySTAC ETL pipeline and benchmarked 7 PyTorch architectures (EDSR, SwinIR, ESRGAN) for super-resolution.</li>
        <li><strong>Research Focus 2: ADAS & Neural Networks:</strong> Co-authored a technical review mapping the shift to Deep Learning in autonomous driving. Quantified a 40% drop in trajectory prediction error (Kalman Filters to LSTM/GNNs) and proposed Neuro-Symbolic AI integrations for ISO 26262 compliance.</li>
        <li><strong>Research Focus 1: AV Perception & Integration:</strong> Co-authored a published review on autonomous vehicle perception. Benchmarked classical filters vs. deep learning for LiDAR/vision fusion, and analyzed SLAM HD mapping & GAN dehazing for adverse weather.</li>
      `
    },
    {
      company: 'Jio Platforms Limited (JPL)',
      location: 'Navi Mumbai, IN',
      title: 'AI Intern',
      range: 'May 2025 - June 2025',
      url: 'https://www.jio.com',
      html: `
        <li>Constructed autonomous AI agents using LangChain and LLaMA 3, implementing a RAG pipeline over 500+ internal documents for precise information retrieval.</li>
        <li>Implemented dynamic SQL generation enabling structured querying across complex relational databases within the agent workflow.</li>
        <li>Launched a LangGraph-based multi-agent system that automated 90% of complaint routing and reduced operational latency by 20%.</li>
      `
    }
  ];

  return (
    <section id="jobs" className="max-w-[1000px] mx-auto py-[100px]">

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
            <div className="card-flex items-stretch bg-white/5 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">

              {/* LEFT COLUMN */}
              <div className="card-left-col bg-transparent p-[20px] md:p-[25px] flex flex-col justify-between">
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