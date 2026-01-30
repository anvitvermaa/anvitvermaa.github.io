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

  // Mappings:
  // About -> #about
  // Experience -> #jobs
  // Work -> #projects
  // Contact -> #contact (Ensure your MorphingFooter.jsx has id="contact")
  const navLinks = [
    { name: "About", url: "/#about", number: "01." },
    { name: "Experience", url: "/#jobs", number: "02." },
    { name: "Work", url: "/#projects", number: "03." },
    { name: "Contact", url: "/#contact", number: "04." },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: scrolled ? "70px" : "100px",
        backgroundColor: "rgba(10, 25, 47, 0.85)", // Dark Navy
        backdropFilter: "blur(10px)",
        zIndex: "1000",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 50px",
        boxSizing: "border-box",
        transition: "height 0.3s ease, background-color 0.3s ease",
        boxShadow: scrolled ? "0 10px 30px -10px rgba(2,12,27,0.7)" : "none",
      }}
    >
      
      {/* 1. LOGO (Left Side) */}
      <div style={{ color: "#64ffda" }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
           <svg width="42" height="42" viewBox="0 0 100 100" fill="none" stroke="#64ffda" strokeWidth="5">
             <polygon points="50 5, 95 27.5, 95 72.5, 50 95, 5 72.5, 5 27.5" />
             <text x="50" y="65" fontSize="45" fill="#64ffda" textAnchor="middle" style={{fontFamily: 'sans-serif', fontWeight: 'bold', stroke: 'none'}}>A</text>
           </svg>
        </Link>
      </div>

      {/* 2. LINKS (Right Side) */}
      <div style={{ display: "flex", alignItems: "center" }}>
        
        {/* GAP FIX: 30px gap between items */}
        <ol style={{ display: "flex", gap: "30px", listStyle: "none", margin: "0", padding: "0" }}>
          {navLinks.map((item, i) => (
            <li key={i}>
              <Link 
                href={item.url} 
                style={{
                  textDecoration: "none",
                  color: "#ccd6f6", // Light Slate
                  fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace",
                  fontSize: "13px",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "#64ffda", marginRight: "5px" }}>{item.number}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ol>

      </div>
    </nav>
  );
};

export default Navbar;