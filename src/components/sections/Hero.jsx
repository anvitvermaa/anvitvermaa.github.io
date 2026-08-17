"use client";
import React, { useEffect, useRef } from 'react';
import ResumeButton from '../ResumeButton';

const monoFont = "'SF Mono','Fira Code','Fira Mono','Roboto Mono',monospace";
const serifFont = "'Cormorant Garamond', Georgia, serif";

const Hero = () => {
  const leftRef  = useRef(null);
  const nameRef  = useRef(null);
  const metaRef  = useRef(null);
  const photoRef = useRef(null);

  // Stagger the panels in after page loader finishes (~2.5s)
  useEffect(() => {
    const els = [
      { el: leftRef.current,  delay: 2600, from: 'translateX(-20px)' },
      { el: nameRef.current,  delay: 2750, from: 'translateY(40px)' },
      { el: metaRef.current,  delay: 2950, from: 'translateY(20px)' },
      { el: photoRef.current, delay: 2650, from: 'translateX(20px)' },
    ];
    els.forEach(({ el, delay, from }) => {
      if (!el) return;
      el.style.opacity   = '0';
      el.style.transform = from;
      el.style.transition = 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)';
      setTimeout(() => {
        el.style.opacity   = '1';
        el.style.transform = 'none';
      }, delay);
    });
  }, []);

  // Subtle mouse parallax
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    let rafId;
    const onMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const cx = window.innerWidth  / 2;
        const cy = window.innerHeight / 2;
        const dx = (e.clientX - cx) / cx;
        const dy = (e.clientY - cy) / cy;
        if (nameRef.current)  nameRef.current.style.transform  = `translate(${dx * 6}px, ${dy * 4}px)`;
        if (photoRef.current) photoRef.current.style.transform = `translate(${dx * -10}px, ${dy * -6}px) scale(1.02)`;
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(rafId); };
  }, []);

  return (
    <section id="about" className="hero-editorial" style={{ paddingTop: 0, marginTop: 0 }}>

      {/* ── LEFT PANEL ─────────────────────────────── */}
      <div className="hero-editorial-left" ref={leftRef}>

        {/* Top label row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span style={{ fontFamily: monoFont, fontSize: '10px', letterSpacing: '0.25em', color: '#3a3a3a', textTransform: 'uppercase' }}>
            Portfolio — 2025
          </span>
          <span style={{ fontFamily: monoFont, fontSize: '10px', letterSpacing: '0.15em', color: '#3a3a3a', textTransform: 'uppercase' }}>
            AI / ML / Research
          </span>
        </div>

        {/* Main name block */}
        <div ref={nameRef} style={{ willChange: 'transform', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px 0' }}>
          {/* Small intro label */}
          <p style={{
            fontFamily: monoFont,
            fontSize: '11px',
            letterSpacing: '0.3em',
            color: '#4a4a4a',
            textTransform: 'uppercase',
            marginBottom: '24px',
            marginLeft: '3px',
          }}>
            Hi, my name is
          </p>

          {/* THE NAME — editorial serif */}
          <h1 style={{
            fontFamily: serifFont,
            fontSize: 'clamp(68px, 9.5vw, 138px)',
            fontWeight: 500,
            lineHeight: 0.87,
            color: '#f0ede8',
            letterSpacing: '-0.025em',
            margin: 0,
          }}>
            Anvit<br />
            <span style={{ paddingLeft: '0.08em', color: '#c8c3bc' }}>Verma.</span>
          </h1>

          {/* Thin rule */}
          <div style={{
            width: '100%',
            height: '1px',
            background: 'linear-gradient(to right, #333333, transparent)',
            margin: '32px 0 28px',
          }} />

          {/* Descriptor + button */}
          <div ref={metaRef} style={{ willChange: 'transform' }}>
            <p style={{
              fontFamily: serifFont,
              fontStyle: 'italic',
              fontSize: 'clamp(17px, 2vw, 22px)',
              color: '#6a6a6a',
              lineHeight: 1.5,
              marginBottom: '32px',
              maxWidth: '420px',
            }}>
              Building intelligent systems at the intersection of full-stack engineering and advanced machine learning.
            </p>
            <ResumeButton />
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '1px',
            height: '36px',
            backgroundColor: '#333333',
            animation: 'scrollLine 2s ease-in-out infinite',
            transformOrigin: 'top',
          }} />
          <span style={{ fontFamily: monoFont, fontSize: '9px', letterSpacing: '0.3em', color: '#3a3a3a', textTransform: 'uppercase' }}>
            Scroll
          </span>
        </div>
      </div>

      {/* ── RIGHT PANEL — Photo ─────────────────────── */}
      <div className="hero-editorial-photo">
        <div ref={photoRef} style={{ width: '100%', height: '100%', willChange: 'transform', position: 'relative' }}>
          <img
            src="/photo.png"
            alt="Anvit Verma"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              filter: 'grayscale(10%) brightness(0.8) contrast(1.05)',
              display: 'block',
            }}
          />
          {/* Gradient: fade left edge into dark bg */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, #0e0e0e 0%, rgba(14,14,14,0.3) 30%, transparent 60%)',
            pointerEvents: 'none',
          }} />
          {/* Gradient: darken bottom */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, #0e0e0e 0%, transparent 35%)',
            pointerEvents: 'none',
          }} />
        </div>
      </div>

    </section>
  );
};

export default Hero;