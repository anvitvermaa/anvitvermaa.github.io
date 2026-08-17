"use client";
import React from 'react';
import Image from 'next/image';
import { GitHub, ExternalLink } from 'react-feather';

const monoFont = "'SF Mono','Fira Code','Fira Mono','Roboto Mono',monospace";
const serifFont = "'Cormorant Garamond', Georgia, serif";

const SelectedWorks = () => {
  const featuredProjects = [
    {
      title: 'Tastelytics',
      external: 'https://d36b12rj7f0r2u.cloudfront.net/',
      github: null,
      tech: ['React', 'Vite', 'Python', 'AWS CloudFront', 'Spotify API', 'GitHub Actions'],
      html: `
        <ul style="list-style-type: disc; padding-left: 20px; margin: 0;">
          <li style="margin-bottom: 10px;">Architected a serverless music analytics platform on <strong>AWS CloudFront</strong> with a Python backend, achieving global low-latency delivery and zero-downtime deployments via a <strong>GitHub Actions CI/CD pipeline</strong>.</li>
          <li style="margin-bottom: 10px;">Integrated Spotify's <strong>PKCE OAuth 2.0</strong> flow for secure, backend-less authentication and built interactive analytics visualizing top artists, tracks, and algorithmic recommendations across multiple time ranges.</li>
          <li style="margin-bottom: 0;">Engineered a custom <strong>Windows 95 / Frutiger Aero</strong> design system using Tailwind CSS, featuring a virtual CD Burner playlist builder, state-machine-driven Easter eggs, and retro pixel-art micro-interactions.</li>
        </ul>
      `,
      cover: '/tastelytics.png',
    },
    {
      title: 'GitHub Repo Analyst AI',
      external: 'https://anvitvermaa.github.io/Repo_Analyst_AI/',
      github: 'https://github.com/anvitvermaa/Repo_Analyst_AI',
      tech: ['LangGraph', 'LLaMA 3', 'ChromaDB', 'React (Vite)', 'Framer Motion'],
      html: 'Architected an autonomous LangGraph orchestration layer with LLaMA 3 agents and a ChromaDB RAG pipeline, enabling conversational codebase analysis, repository discovery, and automated README generation. Engineered an interactive React frontend with a flawless Windows XP-themed desktop experience, completely automating complex three-stage security audits (SAST &amp; dependencies) directly within the OS simulation.',
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
      title: 'EV Subsidy Causal Evaluation',
      external: null,
      github: null,
      tech: ['Python', 'Polars', 'SDiD', 'AJAX', 'Causal Inference'],
      html: `
        <p style="margin-bottom: 10px;"><strong>Project Context:</strong> A rigorous quasi-experimental causal evaluation of the Maharashtra EV Subsidy Policy 2025 across a balanced macro-state panel of top vehicle-registering Indian states (N=16, T=54 months).</p>
        <ul style="list-style-type: disc; padding-left: 20px; margin: 0;">
          <li style="margin-bottom: 10px;"><strong>Uncovered the "Demand Displacement Paradox":</strong> Mathematically isolated a null short-run demand signal using quasi-experimental causal analysis, driven by volatile national FAME-II subsidy expirations.</li>
          <li style="margin-bottom: 10px;"><strong>High-Performance Data Engineering:</strong> Engineered an out-of-core ETL pipeline utilizing a Python AJAX scraper and Polars to lazily ingest, transform, and evaluate nearly 100 million API-sourced vehicle registrations across 54 months of macroscopic Vahan data.</li>
          <li style="margin-bottom: 10px;"><strong>Advanced Causal Architecture:</strong> Pioneered a rigorous dual-specification causal architecture utilizing the Synthetic Difference-in-Differences (SDiD) estimator with L2 Ridge Regularization to construct unconfounded baseline counterfactuals.</li>
          <li style="margin-bottom: 0;"><strong>Mathematical Robustness:</strong> Designed advanced spatial robustness checks ("Donut Hole" specifications) and placebo bootstrap permutation tests to mathematically validate SUTVA compliance against cross-border arbitrage spillovers.</li>
        </ul>
      `,
      cover: null,
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
  ];

  return (
    <section id="selected-works" className="w-full max-w-[1000px] mx-auto py-[100px] px-[20px] md:px-0">

      {/* Section header */}
      <div className="flex items-center gap-[10px] mb-[60px] w-full whitespace-nowrap relative">
        <span className="section-num">04</span>
        <span
          className="text-[clamp(26px,5vw,32px)] text-[#ffffff] font-semibold mr-[10px] relative z-10"
          style={{ fontFamily: monoFont }}
        >
          04.
        </span>
        <h2
          className="m-0 relative z-10"
          style={{ fontFamily: serifFont, fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(30px,5vw,42px)', color: '#efefef' }}
        >
          Selected Works
        </h2>
        <div className="w-full max-w-[300px] h-[1px] bg-[#2a2a2a] ml-[20px] relative z-10" />
      </div>

      {/* Project list */}
      <ul className="list-none p-0 m-0">
        {featuredProjects.map((project, i) => (
          <li
            key={i}
            className="reveal mb-[80px] md:mb-[120px]"
            style={{ '--stagger': i }}
          >
            {/* Number + title row */}
            <div className="flex items-baseline gap-4 mb-5">
              <span style={{ fontFamily: monoFont, fontSize: '11px', color: '#3a3a3a', letterSpacing: '0.2em', flexShrink: 0 }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 style={{ fontFamily: serifFont, fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(28px, 4vw, 48px)', color: '#f0ede8', margin: 0, lineHeight: 1.1 }}>
                {project.external || project.github ? (
                  <a
                    href={project.external || project.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-label="VIEW"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#f0ede8')}
                  >
                    {project.title}
                  </a>
                ) : project.title}
              </h3>
            </div>

            {/* Cover image — only if the project has one, shown at natural aspect ratio */}
            {project.cover && (
              <div
                className="relative w-full mb-5 rounded overflow-hidden"
                style={{ aspectRatio: '16/9', maxHeight: '380px' }}
              >
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top center', filter: 'grayscale(15%) brightness(0.8)' }}
                  sizes="(max-width: 768px) 100vw, 1000px"
                />
              </div>
            )}

            {/* Description */}
            <div
              className="text-[#888888] text-[15px] md:text-[16px] leading-relaxed mb-5"
              dangerouslySetInnerHTML={{ __html: project.html }}
            />

            {/* Tech stack + links */}
            <div className="flex flex-wrap justify-between items-center gap-4">
              <ul className="flex flex-wrap gap-x-4 gap-y-1 list-none p-0 m-0">
                {project.tech.map((t, j) => (
                  <li key={j} style={{ fontFamily: monoFont, fontSize: '12px', color: '#555555' }}>{t}</li>
                ))}
              </ul>
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[#555555] hover:text-[#ffffff] transition-colors">
                    <GitHub size={18} />
                  </a>
                )}
                {project.external && (
                  <a href={project.external} target="_blank" rel="noreferrer" aria-label="Open project" className="text-[#555555] hover:text-[#ffffff] transition-colors">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            {/* Divider */}
            {i < featuredProjects.length - 1 && (
              <div className="mt-[60px] md:mt-[80px] w-full h-[1px] bg-[#1e1e1e]" />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SelectedWorks;