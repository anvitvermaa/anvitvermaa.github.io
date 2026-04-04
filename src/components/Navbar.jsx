"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
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
      {/* Floating hamburger — top-right, no bar */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{
          position: "fixed", top: "20px", right: "20px", zIndex: 10000,
          background: menuOpen ? "rgba(10,10,10,0.9)" : "transparent",
          backdropFilter: menuOpen ? "blur(8px)" : "none",
          border: "none", borderRadius: "6px", cursor: "pointer",
          padding: "10px", display: "flex", flexDirection: "column", gap: "5px", outline: "none",
          transition: "background 0.3s ease",
        }}
      >
        <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#ffffff", transition: "transform 0.3s, opacity 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
        <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#ffffff", transition: "opacity 0.3s", opacity: menuOpen ? 0 : 1 }} />
        <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#ffffff", transition: "transform 0.3s, opacity 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
      </button>

      {/* Right-side sliding panel */}
      <div style={{
        position: "fixed", top: 0, right: 0,
        width: menuOpen ? "220px" : "0px", height: "100vh",
        overflowX: "hidden", overflowY: "auto",
        backgroundColor: "rgba(10,10,10,0.98)",
        backdropFilter: "blur(20px)",
        zIndex: 9999,
        borderLeft: menuOpen ? "1px solid #2a2a2a" : "none",
        transition: "width 0.3s ease",
        boxShadow: menuOpen ? "-8px 0 30px rgba(0,0,0,0.8)" : "none",
        display: "flex", flexDirection: "column", justifyContent: "center",
      }}>
        <ol style={{ listStyle: "none", margin: 0, padding: "20px 0", display: "flex", flexDirection: "column", whiteSpace: "nowrap" }}>
          {navLinks.map((item, i) => (
            <li key={i} style={{ borderBottom: "1px solid #1e1e1e" }}>
              <a href={item.url} onClick={() => setMenuOpen(false)}
                style={{ display: "flex", alignItems: "center", padding: "16px 28px", textDecoration: "none", color: "#efefef", fontFamily: monoFont, fontSize: "14px", fontWeight: "500", transition: "color 0.2s, background 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#ffffff"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#efefef"; e.currentTarget.style.background = "none"; }}
              >
                <span style={{ color: "#ffffff", marginRight: "10px", fontSize: "11px", fontFamily: monoFont }}>{item.number}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ol>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div onClick={() => setMenuOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 9998, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(2px)" }}
        />
      )}
    </>
  );
};

export default Navbar;