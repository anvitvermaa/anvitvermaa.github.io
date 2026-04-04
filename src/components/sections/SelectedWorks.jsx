"use client";
import React from 'react';
import Image from 'next/image'; 
import { GitHub, ExternalLink } from 'react-feather';

const SelectedWorks = () => {
  const featuredProjects = [
    {
      title: 'GitHub Repo Analyst AI',
      external: 'https://anvitvermaa.github.io/Repo_Analyst_AI/',
      github: 'https://github.com/anvitvermaa/Repo_Analyst_AI',
      tech: ['LangGraph', 'LLaMA 3', 'ChromaDB', 'React (Vite)', 'Framer Motion'],
      html: 'Architected an autonomous LangGraph orchestration layer with LLaMA 3 agents and a ChromaDB RAG pipeline, enabling conversational codebase analysis, repository discovery, and automated README generation. Engineered an interactive React frontend with a flawless Windows XP-themed desktop experience, completely automating complex three-stage security audits (SAST & dependencies) directly within the OS simulation.',
      cover: '/repo-analyst.png',
    },
    {
      title: 'Rondônia Fishbone Harmonizer',
      external: 'https://anvitvermaa.github.io/rondonia-fishbone-harmonizer/',
      github: 'https://github.com/anvitvermaa/rondonia-fishbone-harmonizer',
      tech: ['Python', 'PyTorch (GANs & Transformers)', 'GDAL', 'Sentinel-2', 'skimage'],
      html: 'Pioneered a VRAM-optimized PyTorch pipeline and a proprietary "Smart Scaling" algorithm to upscale 30m Landsat to 10m Sentinel-2 imagery, strictly preserving 16-bit TOA multispectral integrity of the Rondônia fishbone deforestation pattern. Executed a definitive benchmarking study of 8 Super-Resolution architectures (SRGAN, SwinIR, HAT) using a rigorous perception-distortion matrix (PSNR, SSIM, SAM, LPIPS) to quantify sub-hectare logging road hallucination.',
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
          <li style="margin-bottom: 10px;"><strong>Creative &amp; Supervisor LLMs:</strong> Deployed LLaMA 3 for generating marketing messages and reviewing tone/clarity, utilizing scoring systems to drive iterative content refinement.</li>
          <li style="margin-bottom: 10px;"><strong>Observability &amp; Data:</strong> Integrated MLflow for autologging prompts and retrieval metrics, while tying MySQL customer features (churn risk, usage) to high-quality content generation.</li>
        </ul>
      `,
      cover: null,
    },
    {
      title: 'Tastelytics – Serverless Music Review API',
      external: null,
      github: null,
      tech: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'Cognito', 'CodePipeline'],
      html: `
        <ul style="list-style-type: disc; padding-left: 20px; margin: 0;">
          <li style="margin-bottom: 10px;">Architected a scalable serverless backend for a dynamic music review platform using AWS Lambda and API Gateway, leveraging DynamoDB Global Secondary Indexes (GSI) to deliver sub-300ms queries for community interactions.</li>
          <li style="margin-bottom: 0px;">Secured role-based user authentication via Amazon Cognito and integrated the Spotify API for real-time track metadata, deployed through a zero-downtime CI/CD pipeline using AWS CodePipeline.</li>
        </ul>
      `,
      cover: null,
    },
  ];

  return (
    <section id="selected-works" className="max-w-[1200px] mx-auto py-[100px] px-[20px]">
      
      <div className="flex items-center gap-[10px] mb-[60px] w-full whitespace-nowrap">
        <span 
          className="text-[clamp(26px,5vw,32px)] text-[#ffffff] font-semibold mr-[10px]"
          style={{ fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace" }}
        >
          04.
        </span>
        <h2 className="font-bold text-[clamp(26px,5vw,32px)] text-[#efefef] m-0">Selected Works</h2>
        <div className="w-full max-w-[300px] h-[1px] bg-[#2a2a2a] ml-[20px]"></div>
      </div>

      <ul className="list-none p-0 m-0">
        {featuredProjects.map((project, i) => {
          const isOdd = i % 2 !== 0; 
          const isWideProject = i < 2;

          return (
            <li key={i} className="mb-[100px] last:mb-0">

              {/* MOBILE LAYOUT: simple stacked card (shown on small screens) */}
              <div className="block md:hidden">
                {project.cover && (
                  <a 
                    href={project.external || project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="block w-full h-auto relative rounded-2xl overflow-hidden shadow-lg mb-6 group"
                  >
                    <div className="relative w-full h-auto">
                      <Image 
                        src={project.cover} 
                        alt={project.title}
                        width={800} 
                        height={500} 
                        className="w-full h-auto object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 z-10 bg-[#ffffff] mix-blend-multiply opacity-50 group-hover:opacity-0 transition-all duration-500 rounded-2xl"></div>
                      <div className="absolute inset-0 bg-[#0a0a0a]/10 group-hover:opacity-0 transition-all duration-500 rounded-2xl"></div>
                    </div>
                  </a>
                )}

                <h3 className="font-bold text-[clamp(20px,5vw,26px)] mb-4">
                  <a href={project.external || project.github} className="text-[#efefef] hover:text-[#ffffff] transition-colors no-underline">
                    {project.title}
                  </a>
                </h3>

                <div 
                  className="bg-[#181818]/90 backdrop-blur-2xl text-[#f0f0f0] text-[15px] leading-relaxed p-[20px] rounded-2xl shadow-xl mb-4"
                  style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}
                  dangerouslySetInnerHTML={{ __html: project.html }}
                />

                <ul className="flex flex-wrap gap-x-[15px] gap-y-[8px] mb-3 text-[#666666] font-mono text-[12px] list-none p-0">
                  {project.tech.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ul>

                <div className="flex items-center gap-[16px]">
                  {project.cta && (
                    <a href={project.cta} className="border border-[#ffffff] text-[#ffffff] rounded px-[12px] py-[8px] text-[13px] font-mono hover:bg-[#ffffff]/10 transition-colors no-underline">
                      Learn More
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noreferrer" className="text-[#efefef] hover:text-[#ffffff] transition-colors no-underline">
                      <GitHub width={20} height={20} />
                    </a>
                  )}
                  {project.external && !project.cta && (
                    <a href={project.external} aria-label="External Link" target="_blank" rel="noreferrer" className="text-[#efefef] hover:text-[#ffffff] transition-colors no-underline">
                      <ExternalLink width={22} height={22} />
                    </a>
                  )}
                </div>
              </div>

              {/* DESKTOP LAYOUT: 12-col grid with alternating sides (hidden on mobile) */}
              <div className="hidden md:grid md:grid-cols-12 md:items-center md:gap-[10px]">
                
                <div className={`
                  project-content
                  relative z-20 
                  row-start-1
                  flex flex-col justify-center h-full
                  ${isOdd 
                    ? 'col-start-6 col-end-13 text-right items-end' 
                    : 'col-start-1 col-end-8 text-left items-start'
                  }
                `}>
                  
                  <h3 
                    className="font-bold text-[clamp(24px,5vw,28px)] mb-[20px]"
                    style={{ 
                      width: '100%',
                      transform: i === 0 ? 'translateX(-80px)' : (i === 1 ? 'translateX(80px)' : 'none')
                    }}
                  >
                    <a href={project.external || project.github} className="text-[#efefef] hover:text-[#ffffff] transition-colors no-underline">
                      {project.title}
                    </a>
                  </h3>

                  <div 
                    className={`
                      bg-[#181818]/90 backdrop-blur-2xl
                      text-[#f0f0f0] 
                      text-[16px] md:text-[17px]
                      leading-relaxed p-[25px] 
                      !rounded-2xl shadow-xl hover:shadow-2xl transition-shadow relative z-20
                      ${!isWideProject && 'md:h-[400px] overflow-y-auto w-full'}
                    `}
                    style={{
                      width: '100%',
                      transform: i === 0 ? 'translateX(-80px)' : (i === 1 ? 'translateX(80px)' : 'none'),
                      textShadow: '0 1px 2px rgba(0,0,0,0.8)'
                    }}
                    dangerouslySetInnerHTML={{ __html: project.html }}
                  />

                  <ul className={`
                    flex flex-wrap gap-x-[20px] gap-y-[10px] mt-[25px] mb-[10px] text-[#666666] font-mono text-[13px] list-none
                    ${isOdd ? 'justify-end' : 'justify-start'}
                  `}
                  style={{ 
                    width: '100%',
                    transform: i === 0 ? 'translateX(-80px)' : (i === 1 ? 'translateX(80px)' : 'none')
                  }}
                  >
                    {project.tech.map((t, idx) => (
                      <li key={idx}>{t}</li>
                    ))}
                  </ul>

                  <div className={`
                    flex items-center gap-[20px] mt-[10px]
                    ${isOdd ? 'justify-end' : 'justify-start'}
                  `}
                   style={{ 
                     width: '100%',
                     transform: i === 0 ? 'translateX(-80px)' : (i === 1 ? 'translateX(80px)' : 'none')
                   }}
                  >
                    {project.cta && (
                      <a href={project.cta} className="border border-[#ffffff] text-[#ffffff] rounded px-[15px] py-[10px] text-[13px] font-mono hover:bg-[#ffffff]/10 transition-colors no-underline">
                        Learn More
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noreferrer" className="text-[#efefef] hover:text-[#ffffff] transition-colors no-underline">
                        <GitHub width={20} height={20} />
                      </a>
                    )}
                    {project.external && !project.cta && (
                      <a href={project.external} aria-label="External Link" target="_blank" rel="noreferrer" className="text-[#efefef] hover:text-[#ffffff] transition-colors no-underline">
                        <ExternalLink width={22} height={22} />
                      </a>
                    )}
                  </div>

                </div>

                {project.cover && (
                  <div 
                    className={`
                      project-image
                      relative z-10 row-start-1 h-full flex items-center
                      ${isOdd 
                        ? 'col-start-1 col-end-8' 
                        : 'col-start-6 col-end-13'
                      }
                    `}
                  >
                     <a 
                        href={project.external || project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="block w-full h-auto relative !rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group"
                     >
                        <div className="relative w-full h-auto">
                           <Image 
                             src={project.cover} 
                             alt={project.title}
                             width={800} 
                             height={500} 
                             className="w-full h-auto object-cover !rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
                           />
                           
                           <div className="absolute inset-0 z-10 bg-[#ffffff] mix-blend-multiply opacity-50 group-hover:opacity-0 transition-all duration-500 !rounded-2xl"></div>
                           
                           <div className="absolute inset-0 bg-[#0a0a0a]/10 group-hover:opacity-0 transition-all duration-500 !rounded-2xl"></div>
                        </div>
                     </a>
                  </div>
                )}

              </div>

            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SelectedWorks;