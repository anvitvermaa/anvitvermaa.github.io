"use client";
import React, { useCallback, useEffect, useRef } from "react";

// Helper for class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const morphTime = 1.5;
const cooldownTime = 0.5;

const useMorphingText = (texts) => {
  const textIndexRef = useRef(0);
  const morphRef = useRef(0);
  const cooldownRef = useRef(0);
  const timeRef = useRef(new Date());

  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  const setStyles = useCallback(
    (fraction) => {
      const [current1, current2] = [text1Ref.current, text2Ref.current];
      if (!current1 || !current2) return;

      current2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      current2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      const invertedFraction = 1 - fraction;
      current1.style.filter = `blur(${Math.min(
        8 / invertedFraction - 8,
        100
      )}px)`;
      current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;

      current1.textContent = texts[textIndexRef.current % texts.length];
      current2.textContent = texts[(textIndexRef.current + 1) % texts.length];
    },
    [texts]
  );

  const doMorph = useCallback(() => {
    morphRef.current -= cooldownRef.current;
    cooldownRef.current = 0;

    let fraction = morphRef.current / morphTime;

    if (fraction > 1) {
      cooldownRef.current = cooldownTime;
      fraction = 1;
    }

    setStyles(fraction);

    if (fraction === 1) {
      textIndexRef.current++;
    }
  }, [setStyles]);

  const doCooldown = useCallback(() => {
    morphRef.current = 0;
    const [current1, current2] = [text1Ref.current, text2Ref.current];
    if (current1 && current2) {
      current2.style.filter = "none";
      current2.style.opacity = "100%";
      current1.style.filter = "none";
      current1.style.opacity = "0%";
    }
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const newTime = new Date();
      const dt = (newTime.getTime() - timeRef.current.getTime()) / 1000;
      timeRef.current = newTime;

      cooldownRef.current -= dt;

      if (cooldownRef.current <= 0) doMorph();
      else doCooldown();
    };

    animate();
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [doMorph, doCooldown]);

  return { text1Ref, text2Ref };
};

const Texts = ({ texts }) => {
  const { text1Ref, text2Ref } = useMorphingText(texts);
  return (
    <>
      <span
        className="absolute inset-0 flex justify-center items-center w-full text-center text-[#64ffda]"
        ref={text1Ref}
      />
      <span
        className="absolute inset-0 flex justify-center items-center w-full text-center text-[#64ffda]"
        ref={text2Ref}
      />
    </>
  );
};

const SvgFilters = () => (
  <svg
    id="filters"
    className="fixed h-0 w-0"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <filter id="threshold">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
        />
      </filter>
    </defs>
  </svg>
);

const MorphingText = ({ texts, className }) => (
  <div
    className={cn(
      "relative w-full h-full font-sans leading-none font-bold text-center [filter:url(#threshold)_blur(0.6px)]",
      className
    )}
  >
    <Texts texts={texts} />
    <SvgFilters />
  </div>
);

// --- MAIN SECTION COMPONENT ---
const MorphingFooter = () => {
  const footerTexts = [
    "Get in Touch",
    "Research?",
    "Inquiries?",
    "Collaboration?",
    "Open-Source?",
    "Projects?",
    "Hiring?",
    "Freelance?",    
  ];

  return (
    <section id="contact" className="max-w-[1000px] mx-auto pt-[200px] pb-[40px] flex flex-col items-center justify-center relative z-10">
      
      {/* 1. MORPHING TEXT ANIMATION */}
      <div className="w-full h-[50px] md:h-[300px] mb-[20px]">
        <MorphingText 
          texts={footerTexts} 
          className="text-[96px] md:text-[144px] text-[#ccd6f6]" 
        />
      </div>

      {/* 2. CONTACT ME TEXT */}
      {/* ADJUSTED GAP: mt-[100px] (Balanced) */}
      <div className="mt-[100px] text-center">
        <a 
            href="mailto:anvitvermaa@gmail.com" 
            className="no-underline group"
        >
            <h2 
                className="text-[30px] md:text-[40px] font-bold text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors"
                style={{ fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace" }}
            >
                CONTACT ME !
            </h2>
        </a>
      </div>

    </section>
  );
};

export default MorphingFooter;