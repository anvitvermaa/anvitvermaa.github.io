"use client";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Trigger the animation after a short delay
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const one = (
    <h1 className="text-[#64ffda] font-mono text-sm md:text-base mb-5 ml-1">
      Hi, my name is
    </h1>
  );
  
  const two = (
    <h2 className="text-[#ccd6f6] text-4xl md:text-7xl font-bold leading-tight">
      Anvit Verma.
    </h2>
  );
  
  const three = (
    <h3 className="text-[#8892b0] text-4xl md:text-7xl font-bold leading-tight mt-2">
      I build things for the web.
    </h3>
  );
  
  const four = (
    <p className="text-[#8892b0] mt-5 max-w-[540px] text-lg leading-relaxed">
      I’m a 3rd-year Computer Science student specializing in AI and software development. 
      Currently, I’m focused on building accessible, human-centered products and researching model poisoning.
    </p>
  );
  
  const five = (
    <a
      href="https://github.com/anvitvermaa"
      target="_blank"
      rel="noreferrer"
      className="inline-block mt-12 border border-[#64ffda] text-[#64ffda] py-4 px-7 rounded text-sm font-mono hover:bg-[rgba(100,255,218,0.1)] transition-colors duration-300"
    >
      Check out my GitHub!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-0 mx-auto max-w-[1000px]">
      {items.map((item, i) => (
        <div
          key={i}
          // ANIMATION LOGIC:
          // 1. opacity-0 translate-y-5 -> Hidden state
          // 2. opacity-100 translate-y-0 -> Visible state (triggered by isMounted)
          className={`transition-all duration-500 ease-in-out transform ${
            isMounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
          // STAGGER DELAY: Each item waits 100ms longer than the previous one
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          {item}
        </div>
      ))}
    </section>
  );
};

export default Hero;