import { useEffect, useState } from 'react';
import MetallicPaint, { parseLogoImage } from '../effects/MetallicPaint';

function createTextSVGBlob(text) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800">
      <rect width="100%" height="100%" fill="white"/>
      <text x="50%" y="50%" font-size="100" font-family="sans-serif" font-weight="bold"
            dominant-baseline="middle" text-anchor="middle" fill="black">
        ${text}
      </text>
    </svg>
  `;
  const blob = new Blob([svg], { type: 'image/svg+xml' });
  return new File([blob], 'text.svg', { type: 'image/svg+xml' });
}

export default function MetallicName() {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    async function generateAndParseSVG() {
      const file = createTextSVGBlob('Anvit Verma');
      const parsed = await parseLogoImage(file);
      setImageData(parsed.imageData);
    }

    generateAndParseSVG();
  }, []);

  if (!imageData) return <div>Loading...</div>;

  return (
    <div style={{ width: 300, height: 300 }}>
      <MetallicPaint imageData={imageData} />
    </div>
  );
}
