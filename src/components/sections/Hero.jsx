"use client";
import React, { useEffect, useRef } from 'react';
import ResumeButton from '../ResumeButton';

function AnimatedText({ text, baseDelay = 0, className = '' }) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="letter-animate"
          aria-hidden="true"
          style={{ animationDelay: `${baseDelay + i * 35}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}

const Hero = () => {
  const bioRef     = useRef(null);
  const btnRef     = useRef(null);
  const labelRef   = useRef(null);
  const textColRef = useRef(null);
  const photoRef   = useRef(null);

  // ── Stagger bio + button on mount ─────────────────────────────────
  useEffect(() => {
    const elements = [labelRef.current, bioRef.current, btnRef.current];
    elements.forEach((el, i) => {
      if (!el) return;
      el.style.opacity   = '0';
      el.style.transform = 'translateY(22px)';
      el.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
      setTimeout(() => {
        el.style.opacity   = '1';
        el.style.transform = 'translateY(0)';
      }, 640 + i * 160);
    });
  }, []);

  // ── Mouse parallax ────────────────────────────────────────────────
  useEffect(() => {
    // Only on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let rafId;
    const onMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const cx = window.innerWidth  / 2;
        const cy = window.innerHeight / 2;
        const dx = (e.clientX - cx) / cx; // -1 to +1
        const dy = (e.clientY - cy) / cy;

        if (textColRef.current) {
          textColRef.current.style.transform =
            `translate(${dx * 7}px, ${dy * 5}px)`;
          textColRef.current.style.transition = 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)';
        }
        if (photoRef.current) {
          photoRef.current.style.transform =
            `translate(${dx * -12}px, ${dy * -8}px)`;
          photoRef.current.style.transition = 'transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)';
        }
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col justify-center min-h-screen w-full max-w-[1000px] mx-auto px-6 md:px-0 pt-24"
    >
      <div className="pt-20 md:pt-0 w-full">

        {/* ── Headings ───────────────────────────────────────── */}
        <p
          ref={labelRef}
          className="text-[#ffffff] font-mono text-[14px] md:text-[16px] ml-[2px]"
          style={{ margin: 0, padding: 0, marginBottom: '5px' }}
        >
          Hi, my name is
        </p>

        <h2
          className="text-[#efefef] font-bold text-[clamp(40px,6vw,70px)]"
          style={{ margin: 0, padding: 0, lineHeight: 1.1 }}
        >
          <AnimatedText text="Anvit Verma." baseDelay={200} />
        </h2>
        <h3
          className="text-[#888888] font-bold text-[clamp(40px,6vw,70px)]"
          style={{ margin: 0, padding: 0, lineHeight: 1.1, marginBottom: '20px' }}
        >
          <AnimatedText text="AI Engineer and Researcher." baseDelay={420} />
        </h3>

        {/* ── Bio + Photo ────────────────────────────────────── */}
        <div className="hero-grid">

          {/* Text column — parallax layer A */}
          <div ref={textColRef} style={{ minWidth: 0, willChange: 'transform' }}>
            <div
              ref={bioRef}
              className="text-[#aaaaaa] text-[17px] md:text-[18px] w-full leading-relaxed mb-[30px] space-y-3"
            >
              <p>
                I enjoy building intelligent systems that solve real-world problems. My journey into
                technology started with a deep curiosity for computer science, which led me to pursue
                a <strong className="text-[#efefef]">Bachelor of Technology</strong> at{' '}
                <span className="text-[#efefef]">Vellore Institute of Technology, Bhopal</span>.
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working as an{' '}
                <strong className="text-[#efefef]">AI Intern</strong> at{' '}
                <span className="text-[#efefef]">Jio Platforms Limited</span>, where I constructed
                autonomous agents and RAG pipelines using LangChain and LLAMA 3. I also serve as a{' '}
                <strong className="text-[#efefef]">Research Assistant</strong> evaluating neural
                architectures for autonomous driving, and a{' '}
                <strong className="text-[#efefef]">Technical Assistant</strong> spearheading technical
                development for university-wide Linux courses.
              </p>
              <p>
                My main focus these days is engineering robust{' '}
                <strong className="text-[#efefef]">AI/ML pipelines</strong> and developing{' '}
                <span className="text-[#efefef]">multi-agent orchestration systems</span>. I thrive at
                the intersection of full-stack development and advanced machine learning.
              </p>
            </div>

            <div ref={btnRef}>
              <ResumeButton />
            </div>
          </div>

          {/* Photo — parallax layer B (opposite direction) */}
          <div className="hero-photo">
            <div ref={photoRef} style={{ willChange: 'transform' }}>
              <img
                src="/photo.png"
                alt="Anvit Verma"
                className="relative w-full h-auto rounded grayscale hover:grayscale-0 transition-all duration-500 object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;