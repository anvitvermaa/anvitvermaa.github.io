"use client";
import React from 'react';
import Image from 'next/image'; 
import { GitHub, ExternalLink } from 'react-feather';

const SelectedWorks = () => {
  const featuredProjects = [
    {
      title: 'Repo Analyst AI',
      external: 'https://anvitvermaa.github.io/Repo_Analyst_AI/',
      github: 'https://github.com/anvitvermaa/Repo_Analyst_AI',
      tech: ['LangGraph', 'LLaMA-3', 'RAG', 'React', 'Python'],
      html: 'Multi-agent system for automated repository intelligence. LangGraph-orchestrated LLaMA-3 agents perform semantic code search, RAG-based analysis, auto-README generation, and multi-stage security auditing within an interactive desktop-style UI.',
      cover: '/repo-analyst.png',
    },
    {
      title: 'Rondônia Fishbone Harmonizer',
      external: 'https://anvitvermaa.github.io/rondonia-fishbone-harmonizer/',
      github: 'https://github.com/anvitvermaa/rondonia-fishbone-harmonizer',
      tech: ['Python', 'PyTorch (SR-GAN)', 'ETL Pipeline', 'Satellite Imagery'],
      html: 'World’s first 30-year, 10m-resolution ARD dataset for the Rondônia deforestation corridor. Built using a large-scale satellite ETL pipeline and a custom SR-GAN to restore historical imagery for long-term environmental monitoring.',
      cover: '/rondonia.png',
    },
    {
      title: 'Multi-Agent Telecom Optimizer',
      external: 'https://github.com/anvitvermaa/Multi-Agent-Telecom-Optimizer',
      github: 'https://github.com/anvitvermaa/Multi-Agent-Telecom-Optimizer',
      tech: ['LLMs', 'RAG', 'MLflow', 'Web Retrieval', 'Python'],
      html: 'Stateful multi-agent orchestration for marketing intelligence and support workflows. Combines creative and supervisor LLMs, web retrieval, RAG grounding, and MLflow-based evaluation to generate and refine telecom messaging using customer data.',
      cover: '/telecom.png',
    },
    {
      title: 'Tastelytics',
      external: '#',
      github: '#',
      tech: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'Serverless'],
      html: 'Serverless music review platform — Goodreads / Letterboxd for music. Built on AWS using API Gateway, Lambda, DynamoDB with GSIs, and IAM-secured endpoints for scalable, auditable review management.',
      cover: '/tastelytics.png',
    },
  ];

  return (
    <section id="selected-works" className="max-w-[1000px] mx-auto py-[100px]">
      
      {/* HEADER */}
      <div className="flex items-center gap-[10px] mb-[40px] w-full whitespace-nowrap">
        <span className="font-mono text-[clamp(26px,5vw,32px)] text-[#64ffda] font-semibold mr-[10px]">03.</span>
        <h2 className="font-bold text-[clamp(26px,5vw,32px)] text-[#ccd6f6] m-0">Selected Works</h2>
        <div className="w-full max-w-[300px] h-[1px] bg-[#233554] ml-[20px]"></div>
      </div>

      {/* PROJECTS GRID */}
      <ul className="list-none p-0 m-0">
        {featuredProjects.map((project, i) => {
          const isOdd = i % 2 !== 0; 

          return (
            <li key={i} className="relative grid grid-cols-12 items-center gap-[10px] mb-[100px] last:mb-0">
              
              {/* --- CONTENT SECTION --- */}
              <div className={`
                project-content
                relative z-20 col-span-12 md:col-span-7 row-start-1
                flex flex-col justify-center h-full
                p-[25px] sm:p-[40px] md:p-0
                ${isOdd ? 'md:col-start-7 md:text-right' : 'md:col-start-1 md:text-left'}
              `}>
                
                {/* REMOVED 'Featured Project' Label from here */}
                
                <h3 className="font-bold text-[clamp(24px,5vw,28px)] mb-[20px]">
                  {/* FIX: Added text-[#ccd6f6] to force light color on the title */}
                  <a href={project.external} className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors">
                    {project.title}
                  </a>
                </h3>

                {/* DESCRIPTION BOX */}
                <div 
                  className="bg-[#112240] text-[#a8b2d1] text-[16px] leading-relaxed p-[25px] rounded shadow-xl hover:shadow-2xl transition-shadow relative z-20"
                  dangerouslySetInnerHTML={{ __html: project.html }}
                />

                {/* TECH STACK */}
                <ul className={`
                  flex flex-wrap gap-x-[20px] gap-y-[5px] mt-[25px] mb-[10px] text-[#a8b2d1] font-mono text-[13px] list-none
                  ${isOdd ? 'justify-start md:justify-end' : 'justify-start'}
                `}>
                  {project.tech.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ul>

                {/* LINKS (ICONS) */}
                <div className={`
                  flex items-center gap-[20px] mt-[10px]
                  ${isOdd ? 'justify-start md:justify-end' : 'justify-start'}
                `}>
                  {project.cta && (
                    <a href={project.cta} className="border border-[#64ffda] text-[#64ffda] rounded px-[15px] py-[10px] text-[13px] font-mono hover:bg-[#64ffda]/10 transition-colors">
                      Learn More
                    </a>
                  )}
                  {project.github && (
                    /* FIX: Added text-[#ccd6f6] directly to the icon link */
                    <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors">
                      <GitHub width={20} height={20} />
                    </a>
                  )}
                  {project.external && !project.cta && (
                    /* FIX: Added text-[#ccd6f6] directly to the icon link */
                    <a href={project.external} aria-label="External Link" target="_blank" rel="noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors">
                      <ExternalLink width={22} height={22} />
                    </a>
                  )}
                </div>
              </div>

              {/* --- IMAGE SECTION --- */}
              <div className={`
                project-image
                col-span-12 md:col-span-7 relative h-full z-10 row-start-1
                opacity-25 md:opacity-100
                ${isOdd ? 'md:col-start-1' : 'md:col-start-6'}
              `}>
                 <a href={project.external || project.github} target="_blank" rel="noreferrer" className="block w-full h-full relative rounded bg-[#64ffda] transition-all duration-300 hover:bg-transparent group before:absolute before:inset-0 before:bg-[#0a192f] before:mix-blend-screen before:transition-all before:duration-300 group-hover:before:bg-transparent">
                    <div className="relative w-full h-auto mix-blend-multiply filter grayscale contrast-100 transition-all duration-300 group-hover:mix-blend-normal group-hover:filter-none">
                       {/* IMAGE PLACEHOLDER */}
                       <div className="w-full aspect-video bg-slate-300 rounded flex items-center justify-center font-mono font-bold text-navy text-xl">
                          [{project.title}]
                       </div>
                    </div>
                 </a>
              </div>

            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SelectedWorks;