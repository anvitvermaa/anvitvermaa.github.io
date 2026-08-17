'use client';
import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [phase, setPhase] = useState('enter'); // enter → hold → exit → done

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 50);
    const t2 = setTimeout(() => setPhase('exit'), 1800);
    const t3 = setTimeout(() => setPhase('done'), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999998,
        backgroundColor: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '12px',
        opacity: phase === 'exit' ? 0 : 1,
        transform: phase === 'exit' ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: phase === 'exit' ? 'none' : 'all',
      }}
    >
      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 'clamp(28px, 5vw, 60px)',
        fontWeight: 700,
        letterSpacing: '-0.04em',
        color: '#ffffff',
        opacity: phase === 'hold' ? 1 : 0,
        transform: phase === 'hold' ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)',
      }}>
        ANVIT VERMA
      </div>
      <div style={{
        fontFamily: "'SF Mono','Fira Code',monospace",
        fontSize: '11px',
        letterSpacing: '0.2em',
        color: '#555555',
        textTransform: 'uppercase',
        opacity: phase === 'hold' ? 1 : 0,
        transform: phase === 'hold' ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.65s 0.15s cubic-bezier(0.16,1,0.3,1), transform 0.65s 0.15s cubic-bezier(0.16,1,0.3,1)',
      }}>
        AI Engineer & Researcher
      </div>
    </div>
  );
}
