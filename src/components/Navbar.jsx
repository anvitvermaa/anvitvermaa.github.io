"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "About",        url: "/#about",          number: "01." },
    { name: "Experience",   url: "/#jobs",            number: "02." },
    { name: "Publications", url: "/#publications",    number: "03." },
    { name: "Work",         url: "/#selected-works",  number: "04." },
    { name: "Education",    url: "/#education",       number: "05." },
    { name: "Skills",       url: "/#skills",          number: "06." },
  ];

  const monoFont = "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace";

  return (
    <>
      {/* ── NAVBAR BAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, width: "100%",
        height: scrolled ? "70px" : "100px",
        backgroundColor: "rgba(10, 25, 47, 0.85)",
        backdropFilter: "blur(10px)",
        zIndex: 9999,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0 25px",
        boxSizing: "border-box",
        transition: "height 0.3s ease, background-color 0.3s ease",
        boxShadow: scrolled ? "0 10px 30px -10px rgba(2,12,27,0.7)" : "none",
      }}>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ alignItems: "center" }}>
          <ol style={{ display: "flex", gap: "30px", listStyle: "none", margin: 0, padding: 0 }}>
            {navLinks.map((item, i) => (
              <li key={i}>
                <a href={item.url}
                  style={{ textDecoration: "none", color: "#ccd6f6", fontFamily: monoFont, fontSize: "13px", fontWeight: "500", display: "flex", alignItems: "center", transition: "color 0.3s ease", cursor: "pointer" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#64ffda"}
                  onMouseLeave={e => e.currentTarget.style.color = "#ccd6f6"}
                >
                  <span style={{ color: "#64ffda", marginRight: "5px" }}>{item.number}</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile hamburger — right side only */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "flex", flexDirection: "column", gap: "5px", outline: "none" }}
        >
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#64ffda", transition: "transform 0.3s, opacity 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#64ffda", transition: "opacity 0.3s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#64ffda", transition: "transform 0.3s, opacity 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </button>
      </nav>

      {/* ── MOBILE DROPDOWN — compact, right-aligned panel ── */}
      <div
        className="md:hidden"
        style={{
          position: "fixed",
          top: scrolled ? "70px" : "100px",
          right: 0,
          width: menuOpen ? "200px" : "0px",
          maxHeight: "calc(100vh - 100px)",
          overflowY: "auto",
          overflowX: "hidden",
          backgroundColor: "rgba(10, 25, 47, 0.97)",
          backdropFilter: "blur(20px)",
          zIndex: 9998,
          borderLeft: "1px solid #233554",
          borderBottom: "1px solid #233554",
          transition: "width 0.3s ease, top 0.3s ease",
          boxShadow: menuOpen ? "-5px 5px 20px rgba(2,12,27,0.5)" : "none",
        }}
      >
        <ol style={{ listStyle: "none", margin: 0, padding: "10px 0", display: "flex", flexDirection: "column", whiteSpace: "nowrap" }}>
          {navLinks.map((item, i) => (
            <li key={i} style={{ borderBottom: "1px solid rgba(35,53,84,0.5)" }}>
              <a
                href={item.url}
                onClick={() => setMenuOpen(false)}
                style={{ display: "flex", alignItems: "center", padding: "14px 20px", textDecoration: "none", color: "#ccd6f6", fontFamily: monoFont, fontSize: "13px", fontWeight: "500", transition: "color 0.2s, background 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#64ffda"; e.currentTarget.style.background = "rgba(100,255,218,0.05)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#ccd6f6"; e.currentTarget.style.background = "none"; }}
              >
                <span style={{ color: "#64ffda", marginRight: "8px", fontSize: "11px" }}>{item.number}</span>
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