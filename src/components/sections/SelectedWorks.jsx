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
      html: 'Designed a LangGraph-based orchestration layer coordinating specialized LLaMA 3 agents for repository navigation and documentation generation. Integrated a three-stage security auditing pipeline combining SAST, dependency analysis, and RAG-based code inspection using ChromaDB. Customized an interactive Windows XP-inspired desktop interface in React including a custom window manager and deterministic simulation engine.',
      cover: '/repo-analyst.png',
    },
    {
      title: 'Rondônia Fishbone Harmonizer',
      external: 'https://anvitvermaa.github.io/rondonia-fishbone-harmonizer/',
      github: 'https://github.com/anvitvermaa/rondonia-fishbone-harmonizer',
      tech: ['Python', 'PyTorch (SR-GAN)', 'ETL Pipeline', 'Satellite Imagery'],
      html: 'Engineered an ETL pipeline to ingest and process <strong>5.5 TB</strong> of multi-temporal satellite imagery, normalizing cross-sensor inconsistencies. Compiled a unified dataset of 1,336 aligned image pairs enabling consistent long-term analysis of deforestation trends in the Amazon. Optimized legacy 30m-resolution maps into sharp 10m imagery using a custom SR-GAN, achieving a 0.54 SSIM score.',
      cover: '/fishbone.png',
    },
    {
      title: 'Multi-Agent Telecom Optimizer',
      external: null, 
      github: 'https://github.com/anvitvermaa/Multi-Agent-Telecom-Optimizer',
      tech: ['LangGraph', 'LLaMA 3', 'MLflow', 'Databricks', 'ChromaDB'],
      html: `
        <ul style="list-style-type: disc; padding-left: 20px; margin: 0;">
          <li style="margin-bottom: 10px;"><strong>Stateful Orchestration:</strong> Orchestrated complex marketing workflows using LangGraph with dynamic branching, reflection, and supervisor-review loops for auto-regeneration based on quality thresholds.</li>
          <li style="margin-bottom: 10px;"><strong>Creative & Supervisor LLMs:</strong> Deployed LLaMA 3 for generating marketing messages and reviewing tone/clarity, utilizing scoring systems to drive iterative content refinement.</li>
          <li style="margin-bottom: 10px;"><strong>Observability & Data:</strong> Integrated MLflow for autologging prompts and retrieval metrics, while tying MySQL customer features (churn risk, usage) to high-quality content generation.</li>
        </ul>
      `,
      cover: null, 
    },
    {
      title: 'Tastelytics',
      external: null, 
      github: null,
      tech: ['AWS Lambda', 'DynamoDB', 'Cognito', 'CodePipeline'],
      html: `
        <ul style="list-style-type: disc; padding-left: 20px; margin: 0;">
          <li style="margin-bottom: 10px;">Architected a scalable serverless API on AWS with 10+ endpoints, achieving <strong>less than 300ms</strong> response times by leveraging DynamoDB Global Secondary Indexes (GSI).</li>
          <li style="margin-bottom: 0px;">Established a fully automated CI/CD pipeline via AWS CodePipeline and secured the system with Amazon Cognito, ensuring zero-downtime deployments and role-based access control.</li>
        </ul>
      `,
      cover: null, 
    },
  ];

  return (
    <section id="selected-works" className="max-w-[1200px] mx-auto py-[100px] px-[20px]">
      
      {/* HEADER */}
      <div className="flex items-center gap-[10px] mb-[60px] w-full whitespace-nowrap">
        <span 
          className="text-[clamp(26px,5vw,32px)] text-[#64ffda] font-semibold mr-[10px]"
          style={{ fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace" }}
        >
          04.
        </span>
        <h2 className="font-bold text-[clamp(26px,5vw,32px)] text-[#ccd6f6] m-0">Selected Works</h2>
        <div className="w-full max-w-[300px] h-[1px] bg-[#233554] ml-[20px]"></div>
      </div>

      {/* PROJECTS GRID */}
      <ul className="list-none p-0 m-0">
        {featuredProjects.map((project, i) => {
          const isOdd = i % 2 !== 0; 

          return (
            <li key={i} className="relative grid grid-cols-12 items-center gap-[10px] mb-[100px] last:mb-0">
              
              {/* CONTENT (Text Side) */}
              <div className={`
                project-content
                relative z-20 col-span-12 md:col-span-6 row-start-1
                flex flex-col justify-center h-full
                ${isOdd 
                  ? 'md:col-start-7 md:text-right md:items-end' // Odd: Text on Right
                  : 'md:col-start-1 md:text-left md:items-start' // Even: Text on Left
                }
              `}>
                
                {/* Project Title */}
                <h3 className="font-bold text-[clamp(24px,5vw,28px)] mb-[20px]">
                  <a href={project.external || project.github} className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors no-underline">
                    {project.title}
                  </a>
                </h3>

                {/* DESCRIPTION BOX - FORCED WIDTH AND SQUARE SHAPE */}
                <div 
                  className={`
                    bg-[#112240] text-[#a8b2d1] 
                    text-[16px] md:text-[17px]
                    leading-relaxed p-[25px] rounded shadow-xl hover:shadow-2xl transition-shadow relative z-20
                    ${i < 2 
                        ? '' // First two (Repo & Fishbone) get custom width below
                        : 'md:h-[400px] overflow-y-auto w-full' // Last two (Telecom/Taste) stay scrollable
                    }
                  `}
                  // FORCE WIDTH AND OVERLAP HERE
                  style={i < 2 ? {
                    width: '130%', // Makes it wider than its column (Overlap)
                    minWidth: '500px', // Forces it to be at least 500px wide (The Rectangle you want)
                    marginLeft: isOdd ? '-30%' : '0', // Pulls it left if it's on the right
                    marginRight: isOdd ? '0' : '-30%', // Pulls it right if it's on the left
                  } : {}}
                  dangerouslySetInnerHTML={{ __html: project.html }}
                />

                {/* TECH STACK */}
                <ul className={`
                  flex flex-wrap gap-x-[20px] gap-y-[10px] mt-[25px] mb-[10px] text-[#a8b2d1] font-mono text-[13px] list-none
                  ${isOdd ? 'justify-end' : 'justify-start'}
                `}
                // Force Tech Stack to match the box width roughly
                style={{ width: i < 2 ? '130%' : '100%' }}
                >
                  {project.tech.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ul>

                {/* LINKS */}
                <div className={`
                  flex items-center gap-[20px] mt-[10px]
                  ${isOdd ? 'justify-end' : 'justify-start'}
                `}
                 style={{ width: i < 2 ? '130%' : '100%' }}
                >
                  {project.cta && (
                    <a href={project.cta} className="border border-[#64ffda] text-[#64ffda] rounded px-[15px] py-[10px] text-[13px] font-mono hover:bg-[#64ffda]/10 transition-colors no-underline">
                      Learn More
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors no-underline">
                      <GitHub width={20} height={20} />
                    </a>
                  )}
                  {project.external && !project.cta && (
                    <a href={project.external} aria-label="External Link" target="_blank" rel="noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors no-underline">
                      <ExternalLink width={22} height={22} />
                    </a>
                  )}
                </div>

              </div>

              {/* IMAGE (Cover Side) */}
              {project.cover && (
                <div className={`
                  project-image
                  col-span-12 md:col-span-7 relative z-10 row-start-1
                  ${isOdd 
                    ? 'md:col-start-1' // Odd: Image on Left
                    : 'md:col-start-6' // Even: Image on Right
                  }
                `}>
                   <a 
                      href={project.external || project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block w-full h-auto relative rounded overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                   >
                      <div className="relative w-full h-auto">
                         <Image 
                           src={project.cover} 
                           alt={project.title}
                           width={800} 
                           height={500} 
                           className="w-full h-auto object-cover rounded grayscale hover:grayscale-0 transition-all duration-300"
                         />
                         <div className="absolute inset-0 bg-[#0a192f]/50 hover:bg-transparent transition-colors duration-300"></div>
                      </div>
                   </a>
                </div>
              )}

            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SelectedWorks;