'use client';
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Touch devices: bail out
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
    let visible = false;
    let rafId;

    dot.style.opacity  = '0';
    ring.style.opacity = '0';

    const lerp = (a, b, t) => a + (b - a) * t;

    // rAF loop — only ring lerps, dot snaps instantly
    const tick = () => {
      ringX = lerp(ringX, mouseX, 0.11);
      ringY = lerp(ringY, mouseY, 0.11);

      dot.style.transform  = `translate(${mouseX}px, ${mouseY}px)`;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;

      rafId = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) {
        // Seed ring at mouse so it doesn't sweep from (0,0)
        ringX = mouseX;
        ringY = mouseY;
        dot.style.opacity  = '1';
        ring.style.opacity = '1';
        visible = true;
      }
    };

    // ── Hover states ──────────────────────────────────────────
    const expand = () => {
      dot.style.opacity      = '0';
      ring.style.width       = '52px';
      ring.style.height      = '52px';
      ring.style.marginLeft  = '-26px';
      ring.style.marginTop   = '-26px';
      ring.style.borderColor = 'rgba(255,255,255,0.85)';
    };

    const collapse = () => {
      dot.style.opacity      = '1';
      ring.style.width       = '34px';
      ring.style.height      = '34px';
      ring.style.marginLeft  = '-17px';
      ring.style.marginTop   = '-17px';
      ring.style.borderColor = 'rgba(255,255,255,0.35)';
    };

    const attachListeners = () => {
      document.querySelectorAll('a, button, [role="button"], label').forEach((el) => {
        el.addEventListener('mouseenter', expand);
        el.addEventListener('mouseleave', collapse);
      });
    };

    window.addEventListener('mousemove', onMove);
    attachListeners();
    tick();

    // Re-attach when DOM changes (menu opens, etc.)
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
      {/* ── Instant dot ────────────────────────────────── */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed', top: 0, left: 0,
          width: '7px', height: '7px',
          marginLeft: '-3.5px', marginTop: '-3.5px',
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          zIndex: 999999,
          willChange: 'transform',
          transition: 'opacity 0.2s ease',
        }}
      />

      {/* ── Lerp ring ──────────────────────────────────── */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed', top: 0, left: 0,
          width: '34px', height: '34px',
          marginLeft: '-17px', marginTop: '-17px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.35)',
          pointerEvents: 'none',
          zIndex: 999998,
          willChange: 'transform',
          transition:
            'width 0.3s cubic-bezier(0.16,1,0.3,1), ' +
            'height 0.3s cubic-bezier(0.16,1,0.3,1), ' +
            'margin 0.3s cubic-bezier(0.16,1,0.3,1), ' +
            'border-color 0.3s ease, ' +
            'opacity 0.4s ease',
        }}
      />
    </>
  );
}
