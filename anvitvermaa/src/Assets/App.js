import MetallicPaint, { parseLogoImage } from "./MetallicPaint";
import { useState, useEffect } from 'react';

// replace with your own SVG
// NOTE: your SVG should have a bit of padding around the shape, to keep it from being cut off
// it should also have black fill color, to allow the metallic effect to show through the mask
import logo from '../../assets/logos/react-bits-logo-small-black.svg';

const Component = () => {
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    async function loadDefaultImage() {
      try {
        const response = await fetch(logo);
        const blob = await response.blob();
        const file = new File([blob], "default.png", { type: blob.type });

        const parsedData = await parseLogoImage(file);
        setImageData(parsedData?.imageData ?? null);

      } catch (err) {
        console.error("Error loading default image:", err);
      }
    }

    loadDefaultImage();
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <MetallicPaint 
        imageData={imageData ?? new ImageData(1, 1)} 
        params={{ edge: 2, patternBlur: 0.005, patternScale: 2, refraction: 0.015, speed: 0.3, liquid: 0.07 }} 
      />
    </div>
  );
}

import Dither from './Dither';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
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

import React, { useState, useEffect } from 'react';
import MetallicPaint, { parseLogoImage } from './components/MetallicPaint';
import anvitLogo from './assets/AnvitLogo.svg';

const App = () => {
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
      {/* Metallic Name positioned top left with proper spacing */}
      <div style={{
        position: 'absolute',
        top: '3rem',    // 48px from top
        left: '2.5rem', // 40px from left
        width: '320px',
        height: '100px',
        zIndex: 10,
        pointerEvents: 'none', // to allow clicks through if necessary
      }}>
        <MetallicPaint 
          imageData={imageData ?? new ImageData(1, 1)}
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
      {/* Rest of your app content goes here */}
    </div>
  );
};

export default App;



