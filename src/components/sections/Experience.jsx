"use client";
import { useState } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = [
    {
      company: "VIT",
      role: "Research Assistant",
      date: "Sept 2025 - Present",
      points: [
        "Analyzed findings from 80+ peer-reviewed papers to evaluate the evolution of neural architectures in autonomous driving from Kalman filter baselines to modern LSTM and GNN models.",
        "Determined a 40% reduction in trajectory prediction error across modern safety-critical systems by validating reported neural network benchmarks.",
        "Appraised 9 foundational ADAS surveys to identify research gaps and formulate a technical roadmap for Neuro-Symbolic and Bio-Inspired certifiable AI systems."
      ]
    },
    {
      company: "Vityarthi",
      role: "Teaching Assistant",
      date: "March 2025 - Aug 2025",
      points: [
        "Spearheaded the end-to-end technical development of the university wide Linux course (CSE0002) for 3,000+ students in just first semester of the launch.",
        "Systematized 90 Bash and Shell automation scripts replicating real-world system administration workflows including log analysis and process monitoring.",
        "Delivered 100% of technical screen demonstrations capturing real-time execution of advanced Linux commands for asynchronous learning at scale."
      ]
    },
    {
      company: "Jio Platforms",
      role: "AI Intern",
      date: "May 2025 - June 2025",
      points: [
        "Constructed autonomous AI agents using LangChain and LLAMA 3, implementing a RAG pipeline over 500+ internal documents for precise information retrieval.",
        "Implemented dynamic SQL generation enabling structured querying across complex relational databases within the agent workflow.",
        "Launched a LangGraph-based multi-agent system that automated 90% of complaint routing and reduced operational latency by 20%."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 max-w-[700px]">
      <div className="flex items-center gap-4 mb-10">
        <span className="text-green font-mono text-xl">02.</span>
        <h2 className="text-slate font-bold text-3xl whitespace-nowrap">Where I've Worked</h2>
        <div className="h-[1px] bg-lightest-navy w-full max-w-[300px] ml-4"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Tab List */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b-2 md:border-b-0 md:border-l-2 border-lightest-navy w-full md:w-32">
          {jobs.map((job, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-all duration-300 
                ${activeTab === index 
                  ? "text-green bg-navy md:border-l-2 border-green md:-ml-[2px]" 
                  : "text-slate hover:bg-light-navy hover:text-green"
                }`}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="py-2 px-4 w-full">
          <h3 className="text-xl font-bold text-lightest-slate">
            {jobs[activeTab].role} <span className="text-green">@ {jobs[activeTab].company}</span>
          </h3>
          <p className="font-mono text-xs text-slate mb-6 mt-1">{jobs[activeTab].date}</p>
          
          <ul className="flex flex-col gap-3">
            {jobs[activeTab].points.map((point, i) => (
              <li key={i} className="flex gap-3 text-slate text-sm">
                <span className="text-green mt-1">▹</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;