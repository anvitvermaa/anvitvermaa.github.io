// src/App.jsx
import React, { useState, useEffect } from 'react';
import Dither from './components/Dither';
import MetallicPaint, { parseLogoImage } from './components/MetallicPaint';
import anvitLogo from './assets/AnvitLogo.svg';

function App() {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    async function loadLogo() {
      try {
        const response = await fetch(anvitLogo);
        const blob = await response.blob();
        const file = new File([blob], "anvit-logo.svg", { type: blob.type });
        const parsedData = await parseLogoImage(file);
        setImageData(parsedData?.imageData ?? null);
      } catch (err) {
        console.error("Logo loading error:", err);
      }
    }
    loadLogo();
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Dither background */}
      <div style={{ position: 'absolute', width: '100vw', height: '100vh', top: 0, left: 0, zIndex: 0 }}>
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>
      {/* Metallic Paint Name, top left with aesthetic spacing */}
      <div style={{
        position: 'absolute',
        top: '3rem',    // 48px down
        left: '2.5rem', // 40px from left
        width: '320px',
        height: '100px',
        zIndex: 2,
        pointerEvents: 'none',
      }}>
        <MetallicPaint 
          imageData={imageData ?? new window.ImageData(1, 1)}
          params={{
            edge: 2,
            patternBlur: 0.005,
            patternScale: 2,
            refraction: 0.015,
            speed: 0.3,
            liquid: 0.07
          }}
        />
      </div>
      {/* Rest of your portfolio content below */}
    </div>
  );
}
export default App;
