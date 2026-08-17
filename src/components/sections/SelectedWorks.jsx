"use client";
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { GitHub, ExternalLink } from 'react-feather';

const monoFont = "'SF Mono','Fira Code','Fira Mono','Roboto Mono',monospace";
const serifFont = "'Cormorant Garamond', Georgia, serif";

const featuredProjects = [
  {
    title: 'Tastelytics',
    external: 'https://d36b12rj7f0r2u.cloudfront.net/',
    github: null,
    tech: ['React', 'Vite', 'Python', 'AWS CloudFront', 'Spotify API', 'GitHub Actions'],
    desc: 'Architected a serverless music analytics platform on AWS CloudFront with a Python backend, achieving global low-latency delivery and zero-downtime deployments via a GitHub Actions CI/CD pipeline. Integrated Spotify PKCE OAuth 2.0 and engineered a Windows 95 / Frutiger Aero design system with retro pixel-art micro-interactions.',
    cover: '/tastelytics.png',
  },
  {
    title: 'GitHub Repo\nAnalyst AI',
    external: 'https://anvitvermaa.github.io/Repo_Analyst_AI/',
    github: 'https://github.com/anvitvermaa/Repo_Analyst_AI',
    tech: ['LangGraph', 'LLaMA 3', 'ChromaDB', 'React (Vite)', 'Framer Motion'],
    desc: 'Architected an autonomous LangGraph orchestration layer with LLaMA 3 agents and a ChromaDB RAG pipeline, enabling conversational codebase analysis and automated README generation. Engineered a Windows XP-themed desktop experience that automates three-stage security audits (SAST & dependencies).',
    cover: '/repo-analyst.png',
  },
  {
    title: 'Rondônia Fishbone\nHarmonizer',
    external: 'https://anvitvermaa.github.io/rondonia-fishbone-harmonizer/',
    github: 'https://github.com/anvitvermaa/rondonia-fishbone-harmonizer',
    tech: ['Python', 'PyTorch', 'GDAL', 'Sentinel-2', 'skimage'],
    desc: 'Pioneered a VRAM-optimized PyTorch pipeline to upscale 30m Landsat to 10m Sentinel-2 imagery preserving 16-bit multispectral integrity. Executed a benchmarking study of 8 Super-Resolution architectures (SRGAN, SwinIR, HAT) using a perception-distortion matrix (PSNR, SSIM, LPIPS).',
    cover: '/fishbone.png',
  },
  {
    title: 'EV Subsidy\nCausal Evaluation',
    external: null,
    github: null,
    tech: ['Python', 'Polars', 'SDiD', 'AJAX', 'Causal Inference'],
    desc: 'Quasi-experimental causal evaluation of the Maharashtra EV Subsidy Policy 2025 across a balanced macro-state panel (N=16, T=54 months). Uncovered the "Demand Displacement Paradox" via Synthetic Difference-in-Differences with L2 Ridge Regularization. Engineered an out-of-core ETL pipeline ingesting ~100M vehicle registrations.',
    cover: null,
  },
  {
    title: 'Multi-Agent\nTelecom Optimizer',
    external: null,
    github: 'https://github.com/anvitvermaa/Multi-Agent-Telecom-Optimizer',
    tech: ['LangGraph', 'LLaMA 3', 'MLflow', 'Databricks', 'ChromaDB'],
    desc: 'Orchestrated complex marketing workflows using LangGraph with dynamic branching, reflection, and supervisor-review loops for auto-regeneration based on quality thresholds. Integrated MLflow for autologging prompts and retrieval metrics, tied to MySQL customer features for high-quality content generation.',
    cover: null,
  },
];

export default function SelectedWorks() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Keyboard/scroll navigation
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.offsetWidth);
      setActiveIndex(idx);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (i) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: el.offsetWidth * i, behavior: 'smooth' });
  };

  return (
    <section id="selected-works" style={{ width: '100%', paddingTop: '100px', paddingBottom: '100px' }}>

      {/* ── Section header ──────────────────────────── */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 40px 60px', position: 'relative' }}>
        <span className="section-num">04</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', position: 'relative', zIndex: 1 }}>
          <span style={{ fontFamily: monoFont, fontSize: 'clamp(26px,5vw,32px)', color: '#ffffff', fontWeight: 600, marginRight: '8px' }}>
            04.
          </span>
          <h2 style={{ fontFamily: serifFont, fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(30px,5vw,42px)', color: '#efefef', margin: 0 }}>
            Selected Works
          </h2>
          <div style={{ flex: 1, maxWidth: '300px', height: '1px', background: '#2a2a2a', marginLeft: '16px' }} />
        </div>
      </div>

      {/* ── Desktop: horizontal scroll strip ─────────── */}
      <div className="hidden md:block" style={{ position: 'relative' }}>

        {/* Counter */}
        <div style={{
          position: 'absolute',
          top: '32px',
          right: '40px',
          zIndex: 10,
          fontFamily: monoFont,
          fontSize: '11px',
          letterSpacing: '0.2em',
          color: '#444444',
        }}>
          {String(activeIndex + 1).padStart(2, '0')} / {String(featuredProjects.length).padStart(2, '0')}
        </div>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="scrollbar-none"
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            borderTop: '1px solid #1e1e1e',
            borderBottom: '1px solid #1e1e1e',
          }}
        >
          {featuredProjects.map((project, i) => (
            <div
              key={i}
              style={{
                flex: '0 0 85vw',
                maxWidth: '1100px',
                scrollSnapAlign: 'start',
                display: 'grid',
                gridTemplateColumns: project.cover ? '1fr 1fr' : '1fr',
                minHeight: '72vh',
                borderRight: '1px solid #1e1e1e',
              }}
            >
              {/* Text side */}
              <div style={{
                padding: '56px 56px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRight: project.cover ? '1px solid #1e1e1e' : 'none',
              }}>
                {/* Number */}
                <div style={{ fontFamily: monoFont, fontSize: '11px', color: '#3a3a3a', letterSpacing: '0.25em' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Title + desc */}
                <div>
                  <h3 style={{
                    fontFamily: serifFont,
                    fontSize: 'clamp(36px, 4vw, 58px)',
                    fontWeight: 500,
                    fontStyle: 'italic',
                    color: '#f0ede8',
                    lineHeight: 1.05,
                    marginBottom: '28px',
                    whiteSpace: 'pre-line',
                  }}>
                    {project.external ? (
                      <a href={project.external} target="_blank" rel="noreferrer" data-cursor-label="VIEW"
                        style={{ color: 'inherit', textDecoration: 'none' }}>
                        {project.title}
                      </a>
                    ) : project.github ? (
                      <a href={project.github} target="_blank" rel="noreferrer" data-cursor-label="VIEW"
                        style={{ color: 'inherit', textDecoration: 'none' }}>
                        {project.title}
                      </a>
                    ) : project.title}
                  </h3>

                  <p style={{ color: '#707070', fontSize: '15px', lineHeight: 1.7, maxWidth: '480px', marginBottom: '32px' }}>
                    {project.desc}
                  </p>
                </div>

                {/* Bottom row: tech + links */}
                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px', marginBottom: '24px' }}>
                    {project.tech.map((t, j) => (
                      <span key={j} style={{ fontFamily: monoFont, fontSize: '11px', color: '#444444', letterSpacing: '0.05em' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub"
                        style={{ color: '#555555' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                        onMouseLeave={e => e.currentTarget.style.color = '#555555'}>
                        <GitHub size={18} />
                      </a>
                    )}
                    {project.external && (
                      <a href={project.external} target="_blank" rel="noreferrer" aria-label="Open"
                        style={{ color: '#555555' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                        onMouseLeave={e => e.currentTarget.style.color = '#555555'}>
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Cover image side */}
              {project.cover && (
                <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#0a0a0a' }}>
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover', filter: 'grayscale(20%) brightness(0.75)', transition: 'filter 0.5s ease' }}
                    onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0%) brightness(0.9)'}
                    onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(20%) brightness(0.75)'}
                  />
                </div>
              )}
            </div>
          ))}

          {/* End spacer */}
          <div style={{ flex: '0 0 40px', scrollSnapAlign: 'none' }} />
        </div>

        {/* Dot nav */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', paddingTop: '28px' }}>
          {featuredProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              style={{
                width: i === activeIndex ? '24px' : '6px',
                height: '6px',
                borderRadius: '3px',
                backgroundColor: i === activeIndex ? '#ffffff' : '#333333',
                border: 'none',
                padding: 0,
                transition: 'all 0.3s ease',
              }}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Mobile: stacked cards ────────────────────── */}
      <div className="md:hidden" style={{ padding: '0 24px' }}>
        {featuredProjects.map((project, i) => (
          <div key={i} className="reveal" data-stagger-index={i}
            style={{ marginBottom: '60px', paddingBottom: '60px', borderBottom: '1px solid #1e1e1e' }}>
            {project.cover && (
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', marginBottom: '20px', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src={project.cover} alt={project.title} fill style={{ objectFit: 'cover', filter: 'grayscale(15%)' }} />
              </div>
            )}
            <span style={{ fontFamily: monoFont, fontSize: '10px', color: '#3a3a3a', letterSpacing: '0.2em' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 style={{ fontFamily: serifFont, fontStyle: 'italic', fontSize: '32px', fontWeight: 500, color: '#f0ede8', lineHeight: 1.1, margin: '8px 0 16px', whiteSpace: 'pre-line' }}>
              {project.title}
            </h3>
            <p style={{ color: '#707070', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>{project.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', marginBottom: '16px' }}>
              {project.tech.map((t, j) => (
                <span key={j} style={{ fontFamily: monoFont, fontSize: '10px', color: '#444444' }}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '14px' }}>
              {project.github && <a href={project.github} target="_blank" rel="noreferrer" style={{ color: '#555555' }}><GitHub size={17} /></a>}
              {project.external && <a href={project.external} target="_blank" rel="noreferrer" style={{ color: '#555555' }}><ExternalLink size={17} /></a>}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}