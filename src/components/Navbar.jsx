"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "About", url: "/#about", number: "01." },
    { name: "Experience", url: "/#jobs", number: "02." },
    { name: "Publications", url: "/#publications", number: "03." },
    { name: "Work", url: "/#selected-works", number: "04." },
    { name: "Education", url: "/#education", number: "05." },
    { name: "Skills", url: "/#skills", number: "06." },
  ];

  const linkStyle = {
    textDecoration: "none",
    color: "#ccd6f6",
    fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace",
    fontSize: "13px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    transition: "color 0.3s ease",
    cursor: "pointer",
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: scrolled ? "70px" : "100px",
          backgroundColor: "rgba(10, 25, 47, 0.85)",
          backdropFilter: "blur(10px)",
          zIndex: "9999",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "0 25px",
          boxSizing: "border-box",
          transition: "height 0.3s ease, background-color 0.3s ease",
          boxShadow: scrolled ? "0 10px 30px -10px rgba(2,12,27,0.7)" : "none",
        }}
      >
        {/* Desktop nav links */}
        <div className="hidden md:flex" style={{ alignItems: "center" }}>
          <ol style={{ display: "flex", gap: "30px", listStyle: "none", margin: "0", padding: "0" }}>
            {navLinks.map((item, i) => (
              <li key={i}>
                <a
                  href={item.url}
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#64ffda")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#ccd6f6")}
                >
                  <span style={{ color: "#64ffda", marginRight: "5px" }}>{item.number}</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2 cursor-pointer bg-transparent border-none z-[10000]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ outline: "none" }}
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "#64ffda",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "#64ffda",
              transition: "opacity 0.3s ease",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "#64ffda",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className="md:hidden"
        style={{
          position: "fixed",
          top: scrolled ? "70px" : "100px",
          left: "0",
          width: "100%",
          backgroundColor: "rgba(10, 25, 47, 0.97)",
          backdropFilter: "blur(20px)",
          zIndex: "9998",
          padding: menuOpen ? "20px 0 30px" : "0",
          maxHeight: menuOpen ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease, padding 0.35s ease, top 0.3s ease",
          boxShadow: menuOpen ? "0 10px 30px -10px rgba(2,12,27,0.7)" : "none",
        }}
      >
        <ol style={{ listStyle: "none", margin: "0", padding: "0 30px", display: "flex", flexDirection: "column", gap: "0" }}>
          {navLinks.map((item, i) => (
            <li key={i} style={{ borderBottom: "1px solid rgba(35,53,84,0.5)", padding: "16px 0" }}>
              <a
                href={item.url}
                style={{ ...linkStyle, fontSize: "15px", justifyContent: "center" }}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#64ffda")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#ccd6f6")}
              >
                <span style={{ color: "#64ffda", marginRight: "8px", fontSize: "13px" }}>{item.number}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Navbar;