"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link"; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", url: "/#about" },
    { name: "Experience", url: "/#jobs" },
    { name: "Work", url: "/#projects" },
    { name: "Contact", url: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
        scrolled
          ? "h-[70px] bg-[rgba(10,25,47,0.85)] backdrop-blur-md shadow-lg"
          : "h-[100px] bg-transparent"
      }`}
    >
      
      {/* 1. LOGO SECTION (Hexagon + Letter 'A') */}
      <div className="flex items-center justify-center">
        <Link href="/" aria-label="home" className="group relative">
          {/* Hexagon SVG */}
          <svg 
            className="w-12 h-12 text-[#64ffda] transition-transform duration-300 group-hover:-translate-y-1" 
            viewBox="0 0 100 100" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="5"
          >
            <polygon points="50 5, 95 27.5, 95 72.5, 50 95, 5 72.5, 5 27.5" />
            {/* Letter 'A' inside */}
            <text x="50" y="65" fontSize="45" fill="#64ffda" textAnchor="middle" className="font-sans font-bold stroke-0">A</text>
          </svg>
        </Link>
      </div>

      {/* 2. DESKTOP MENU (Links) */}
      {/* hidden md:flex -> Hides on mobile, shows on Desktop */}
      <div className="hidden md:flex items-center gap-8">
        <ol className="flex gap-8 list-none m-0 p-0">
          {navLinks.map((item, i) => (
            <li key={i} className="font-mono text-[13px]">
              <Link 
                href={item.url} 
                className="!text-[#ccd6f6] hover:!text-[#64ffda] transition-colors duration-300 flex items-center gap-1"
              >
                <span className="!text-[#64ffda]">0{i + 1}.</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ol>

        {/* RESUME BUTTON */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 border border-[#64ffda] !text-[#64ffda] px-4 py-2 rounded text-[13px] font-mono hover:bg-[rgba(100,255,218,0.1)] transition-colors duration-300"
        >
          Resume
        </a>
      </div>

      {/* 3. MOBILE MENU TOGGLE (Placeholder) */}
      {/* This only shows if screen is small (md:hidden) */}
      <div className="md:hidden">
        <button className="text-[#64ffda] focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

    </header>
  );
};

export default Navbar;