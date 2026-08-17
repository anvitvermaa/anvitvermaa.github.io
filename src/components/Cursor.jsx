'use client';
import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef    = useRef(null);
  const ringRef   = useRef(null);
  const labelRef  = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot   = dotRef.current;
    const ring  = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
    let visible = false;
    let rafId;

    // Start hidden
    dot.style.opacity   = '0';
    ring.style.opacity  = '0';
    label.style.opacity = '0';

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      ringX = lerp(ringX, mouseX, 0.1);
      ringY = lerp(ringY, mouseY, 0.1);

      dot.style.transform  = `translate(${mouseX}px, ${mouseY}px)`;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      label.style.transform = `translate(${ringX}px, ${ringY}px)`;

      rafId = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) {
        ringX = mouseX;
        ringY = mouseY;
        dot.style.opacity  = '1';
        ring.style.opacity = '1';
        visible = true;
      }
    };

    // ── Hover states ──────────────────────────────────
    const expand = (e) => {
      const el = e.currentTarget;
      const labelText = el.dataset.cursorLabel || '';
      
      dot.style.opacity        = '0';
      ring.style.width         = '64px';
      ring.style.height        = '64px';
      ring.style.marginLeft    = '-32px';
      ring.style.marginTop     = '-32px';
      ring.style.backgroundColor = 'rgba(255,255,255,0.08)';
      ring.style.borderColor   = 'rgba(255,255,255,0.9)';

      if (labelText) {
        label.textContent     = labelText;
        label.style.opacity   = '1';
      }
    };

    const collapse = () => {
      dot.style.opacity          = '1';
      ring.style.width           = '36px';
      ring.style.height          = '36px';
      ring.style.marginLeft      = '-18px';
      ring.style.marginTop       = '-18px';
      ring.style.backgroundColor = 'transparent';
      ring.style.borderColor     = 'rgba(255,255,255,0.3)';
      label.style.opacity        = '0';
      label.textContent          = '';
    };

    const attachListeners = () => {
      document.querySelectorAll('a, button, [role="button"], label').forEach((el) => {
        el.removeEventListener('mouseenter', expand);
        el.removeEventListener('mouseleave', collapse);
        el.addEventListener('mouseenter', expand);
        el.addEventListener('mouseleave', collapse);
      });
    };

    window.addEventListener('mousemove', onMove);
    attachListeners();
    tick();

    const obs = new MutationObserver(attachListeners);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      {/* Instant dot */}
      <div ref={dotRef} aria-hidden="true" style={{
        position: 'fixed', top: 0, left: 0,
        width: '10px', height: '10px',
        marginLeft: '-5px', marginTop: '-5px',
        borderRadius: '50%',
        backgroundColor: '#ffffff',
        pointerEvents: 'none',
        zIndex: 2147483647,
        willChange: 'transform',
        transition: 'opacity 0.2s ease',
      }} />

      {/* Lerp ring */}
      <div ref={ringRef} aria-hidden="true" style={{
        position: 'fixed', top: 0, left: 0,
        width: '36px', height: '36px',
        marginLeft: '-18px', marginTop: '-18px',
        borderRadius: '50%',
        border: '1.5px solid rgba(255,255,255,0.3)',
        backgroundColor: 'transparent',
        pointerEvents: 'none',
        zIndex: 2147483646,
        willChange: 'transform',
        transition:
          'width 0.35s cubic-bezier(0.16,1,0.3,1),' +
          'height 0.35s cubic-bezier(0.16,1,0.3,1),' +
          'margin 0.35s cubic-bezier(0.16,1,0.3,1),' +
          'background-color 0.25s ease,' +
          'border-color 0.25s ease,' +
          'opacity 0.4s ease',
      }} />

      {/* Hover label inside ring */}
      <div ref={labelRef} aria-hidden="true" style={{
        position: 'fixed', top: 0, left: 0,
        width: '64px', height: '64px',
        marginLeft: '-32px', marginTop: '-32px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'SF Mono','Fira Code',monospace",
        fontSize: '9px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#ffffff',
        pointerEvents: 'none',
        zIndex: 2147483647,
        willChange: 'transform',
        transition: 'opacity 0.2s ease',
      }} />
    </>
  );
}
