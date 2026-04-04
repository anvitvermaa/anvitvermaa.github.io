"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Close menu on ESC key
    const handleKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
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
      {/* ── Floating hamburger button — top-right, no bar ── */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 10000,
          background: menuOpen ? "rgba(10,25,47,0.85)" : "transparent",
          backdropFilter: menuOpen ? "blur(8px)" : "none",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          outline: "none",
          transition: "background 0.3s ease",
        }}
      >
        <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#64ffda", transition: "transform 0.3s, opacity 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
        <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#64ffda", transition: "opacity 0.3s", opacity: menuOpen ? 0 : 1 }} />
        <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#64ffda", transition: "transform 0.3s, opacity 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
      </button>

      {/* ── Right-side sliding dropdown ── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: menuOpen ? "220px" : "0px",
          height: "100vh",
          overflowX: "hidden",
          overflowY: "auto",
          backgroundColor: "rgba(10, 25, 47, 0.97)",
          backdropFilter: "blur(20px)",
          zIndex: 9999,
          borderLeft: menuOpen ? "1px solid #233554" : "none",
          transition: "width 0.3s ease",
          boxShadow: menuOpen ? "-8px 0 30px rgba(2,12,27,0.5)" : "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <ol style={{ listStyle: "none", margin: 0, padding: "20px 0", display: "flex", flexDirection: "column", whiteSpace: "nowrap" }}>
          {navLinks.map((item, i) => (
            <li key={i} style={{ borderBottom: "1px solid rgba(35,53,84,0.5)" }}>
              <a
                href={item.url}
                onClick={() => setMenuOpen(false)}
                style={{ display: "flex", alignItems: "center", padding: "16px 28px", textDecoration: "none", color: "#ccd6f6", fontFamily: monoFont, fontSize: "14px", fontWeight: "500", transition: "color 0.2s, background 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#64ffda"; e.currentTarget.style.background = "rgba(100,255,218,0.05)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#ccd6f6"; e.currentTarget.style.background = "none"; }}
              >
                <span style={{ color: "#64ffda", marginRight: "10px", fontSize: "11px", fontFamily: monoFont }}>{item.number}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ol>
      </div>

      {/* Backdrop overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 9998, background: "rgba(10,25,47,0.5)", backdropFilter: "blur(2px)" }}
        />
      )}
    </>
  );
};

export default Navbar;