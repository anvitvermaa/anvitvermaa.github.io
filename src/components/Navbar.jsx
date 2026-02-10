"use client";
import React, { useState, useEffect } from "react";

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
    { name: "About", url: "/#about", number: "01." },
    { name: "Experience", url: "/#jobs", number: "02." },
    { name: "Publications", url: "/#publications", number: "03." },
    { name: "Work", url: "/#selected-works", number: "04." },
    { name: "Education", url: "/#education", number: "05." },
    { name: "Skills", url: "/#skills", number: "06." },
  ];

  return (
    <nav
      // LOGIC: 'hidden' on mobile. 'md:flex' (display:flex) on screens 768px and wider (Laptop/Desktop)
      className="hidden md:flex justify-end items-center"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: scrolled ? "70px" : "100px",
        backgroundColor: "rgba(10, 25, 47, 0.30)", 
        backdropFilter: "blur(10px)",
        zIndex: "9999", 
        padding: "0 50px",
        boxSizing: "border-box",
        transition: "height 0.3s ease, background-color 0.3s ease",
        boxShadow: scrolled ? "0 10px 30px -10px rgba(2,12,27,0.7)" : "none",
        // IMPORTANT: 'display' is intentionally removed from here so className controls it!
      }}
    >
      
      {/* LINKS (Right Side) */}
      <div style={{ display: "flex", alignItems: "center" }}>
        
        <ol style={{ display: "flex", gap: "30px", listStyle: "none", margin: "0", padding: "0" }}>
          {navLinks.map((item, i) => (
            <li key={i}>
              <a 
                href={item.url} 
                style={{
                  textDecoration: "none",
                  color: "#ccd6f6", 
                  fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace",
                  fontSize: "13px",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  transition: "color 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#64ffda"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#ccd6f6"}
              >
                <span style={{ color: "#64ffda", marginRight: "5px" }}>{item.number}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ol>

      </div>
    </nav>
  );
};

export default Navbar;