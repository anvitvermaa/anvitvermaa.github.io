'use client';

import { ScrollVelocityContainer, ScrollVelocityRow } from './ScrollVelocity';
import { motion } from 'framer-motion';
import { Press_Start_2P } from 'next/font/google';

const pixelFont = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function ResumeButton() {
  return (
    <motion.a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        display: 'inline-block',
        cursor: 'pointer',
        padding: '12px 0',
        width: '180px',
        // CHANGED: '30px' creates the rounded/pill aesthetic curves
        borderRadius: '30px', 
        border: '1px solid #64ffda', 
        background: 'transparent',
        overflow: 'hidden',
        textDecoration: 'none'
      }}
    >
      <div className="pointer-events-none w-full h-full flex items-center justify-center">
        <ScrollVelocityContainer>
          <ScrollVelocityRow
            baseVelocity={30} 
            className={`${pixelFont.className} text-[#64ffda] text-[12px] leading-tight`}
          >
            RESUME&nbsp;RESUME&nbsp;
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>
    </motion.a>
  );
}