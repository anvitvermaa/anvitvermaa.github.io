'use client';
import { useEffect, useRef, useMemo } from 'react';

// --- HELPER: GENERATE STAR GEOMETRY ---
const getStarData = (points, innerRadius) => {
  let path = "";
  
  const centerX = 50;
  const centerY = 50;
  const outerRadius = 50; 
  const innerRadiusPercent = outerRadius * innerRadius;
  const totalSteps = points * 2;
  const stepAngle = Math.PI / points;

  for (let i = 0; i < totalSteps; i++) {
    const isTip = i % 2 === 0;
    const r = isTip ? outerRadius : innerRadiusPercent;
    
    // Angle math
    const angle = i * stepAngle - Math.PI / 2;
    
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);
    
    path += `${x.toFixed(1)}% ${y.toFixed(1)}%, `;
  }
  
  return `polygon(${path.slice(0, -2)})`;
};

export default function RotatingStar() {
  const solidRef = useRef(null);
  const gradientRef = useRef(null);
  const grainRef = useRef(null); 
  const borderRef = useRef(null);

  // --- CONFIG ---
  const numPoints = 12; 
  const starPath = useMemo(() => getStarData(numPoints, 0.5), []);

  // --- GAME LOOP FOR ROTATION ---
  useEffect(() => {
    let animationFrameId;
    let angle = 0;

    const renderLoop = () => {
      angle += 0.2; // Rotation Speed

      const rotateStyle = `rotate(${angle}deg)`;

      // 1. Rotate Solid Base
      if (solidRef.current) solidRef.current.style.transform = rotateStyle;
      
      // 2. Rotate Gradient Mask
      if (gradientRef.current) gradientRef.current.style.transform = rotateStyle;

      // 3. Rotate Grain Layer (Syncs with star)
      if (grainRef.current) grainRef.current.style.transform = rotateStyle;
      
      // 4. Rotate Border Outline
      if (borderRef.current) borderRef.current.style.transform = rotateStyle;

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    // CONTAINER:
    // Added 'hidden md:block' to hide on mobile and show on desktop
    <div className="hidden md:block fixed -top-[8rem] -left-[8rem] w-[24rem] h-[24rem] z-[99999] pointer-events-none">
      
      {/* LAYER 1: SOLID TEAL BASE (The Blocker) */}
      <div 
        ref={solidRef}
        className="absolute inset-0 w-full h-full"
        style={{
          clipPath: starPath,
          WebkitClipPath: starPath,
          backgroundColor: '#64ffda', // Solid Teal
          opacity: 1,                 // 100% Opaque
          willChange: 'transform',
        }}
      />

      {/* LAYER 2: GRADIENT OVERLAY (The Glow) */}
      <div 
        ref={gradientRef} 
        className="absolute inset-0 w-full h-full"
        style={{ 
            clipPath: starPath, 
            WebkitClipPath: starPath, 
            willChange: 'transform',
            background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, transparent 60%)'
        }}
      />

      {/* LAYER 3: GRAIN TEXTURE (Retro Polaroid Effect) */}
      <div 
        ref={grainRef}
        className="absolute inset-0 w-full h-full"
        style={{
            clipPath: starPath,
            WebkitClipPath: starPath,
            willChange: 'transform',
            // SVG Noise Filter Encoded as Data URI
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px', // Tiling the noise
            opacity: 0.7, // Adjust intensity of the grain
            mixBlendMode: 'overlay', // Blends grain into the teal color
        }}
      />

      {/* LAYER 4: BORDER OUTLINE (The Edge) */}
      <div 
        ref={borderRef}
        className="absolute inset-0"
        style={{ 
            clipPath: starPath,
            WebkitClipPath: starPath,
            backgroundColor: '#64ffda', 
            opacity: 1,
            transform: 'scale(1.05)', 
            zIndex: -1, 
            willChange: 'transform' 
        }}
      />
    </div>
  );
}