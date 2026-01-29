"use client";
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Matches the 'navDelay' logic (waiting a bit before showing)
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const one = (
    // Gatsby: margin: 0 0 30px 4px; -> Tailwind: mb-[30px] ml-[4px]
    // I reduced mb-[30px] to mb-[20px] slightly to help with the gap you dislike.
    <h1 className="text-[#64ffda] font-mono font-normal mb-[20px] ml-[4px] text-[clamp(14px,5vw,16px)]">
      Hi, my name is
    </h1>
  );

  const two = (
    // Gatsby: .big-heading
    <h2 className="text-[#ccd6f6] font-bold m-0 p-0 leading-[0.9]" 
        style={{ fontSize: 'clamp(40px, 8vw, 80px)' }}>
      Anvit Verma.
    </h2>
  );

  const three = (
    // Gatsby: margin-top: 5px; line-height: 0.9;
    <h3 className="text-[#8892b0] font-bold m-0 p-0 mt-[5px] leading-[0.9]" 
        style={{ fontSize: 'clamp(40px, 8vw, 80px)' }}>
      I build things for the web.
    </h3>
  );

  const four = (
    // Gatsby: margin: 20px 0 0;
    <p className="text-[#8892b0] mt-[20px] max-w-[540px] text-[18px] md:text-[20px] leading-relaxed">
      I am a software engineer specializing in building (and occasionally designing) exceptional
      digital experiences. Currently, I’m focused on building accessible, human-centered products
      at{' '}
      <a href="https://upstatement.com/" target="_blank" rel="noreferrer" className="text-[#64ffda] hover:underline">
        Upstatement
      </a>
      .
    </p>
  );

  const five = (
    // Gatsby: .email-link { margin-top: 50px; }
    <a
      href="https://github.com/anvitvermaa" // Changed to your link
      target="_blank"
      rel="noreferrer"
      className="inline-block text-[#64ffda] border border-[#64ffda] rounded-[4px] py-[18px] px-[28px] mt-[50px] font-mono text-[14px] hover:bg-[#64ffda]/10 transition-colors duration-300 leading-none"
    >
      Check out my code!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <section className="min-h-screen flex flex-col justify-center items-start p-0 max-w-[1000px] mx-auto">
      {isMounted && (
        <>
          {items.map((item, i) => (
            // Replaces CSSTransition with our Tailwind animate-fadeup class
            <div 
              key={i} 
              className="animate-fadeup" 
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              {item}
            </div>
          ))}
        </>
      )}
    </section>
  );
};

export default Hero;