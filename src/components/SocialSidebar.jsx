"use client";
import React, { useState, useEffect } from 'react';
import { GitHub, Linkedin, Mail, Phone } from 'react-feather';

const PatreonIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M15.38 2.41c-3.32 0-6 2.68-6 6a5.98 5.98 0 0 0 6 6 6 6 0 0 0 6-6c0-3.32-2.68-6-6-6zm-9.33 19.19h4.19V2.41H6.05v19.19z"/>
  </svg>
);

const socialLinks = [
  { name: 'GitHub',   url: 'https://github.com/anvitvermaa',            icon: <GitHub size={20} /> },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/anvit-verma',        icon: <Linkedin size={20} /> },
  { name: 'Email',    url: 'mailto:anvitvermaa@gmail.com',               icon: <Mail size={20} /> },
  { name: 'WhatsApp', url: 'https://wa.me/918779979151',                 icon: <Phone size={20} /> },
  { name: 'Patreon',  url: 'https://www.patreon.com/c/anvitvermaa_labs', icon: <PatreonIcon size={18} /> },
];

const SocialSidebar = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(formatted);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Desktop: fixed left sidebar */}
      <div className="hidden md:flex" style={{
        position: 'fixed', bottom: '0px', left: '40px', zIndex: 9997,
        flexDirection: 'column', alignItems: 'center',
      }}>

        {/* Live IST clock */}
        <div style={{
          fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace",
          fontSize: '10px',
          color: '#444444',
          letterSpacing: '0.05em',
          marginBottom: '14px',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          transform: 'rotate(180deg)',
          userSelect: 'none',
          lineHeight: 1,
        }}>
          {time} IST
        </div>

        <ul
          className="after:content-[''] after:block after:w-[1px] after:bg-[#333333] after:mt-5 after:h-[80px]"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', margin: 0, padding: 0, listStyle: 'none' }}
        >
          {socialLinks.map((item, i) => (
            <li key={i}>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                className="text-[#444444] hover:text-[#ffffff] hover:-translate-y-[3px] transition-all duration-300 block p-[8px]"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile: fixed bottom bar */}
      <div className="md:hidden" style={{
        position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 9997,
        backgroundColor: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(12px)',
        borderTop: '1px solid #1e1e1e',
        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px', padding: '10px 0',
      }}>
        {socialLinks.map((item, i) => (
          <a key={i} href={item.url} target="_blank" rel="noreferrer" aria-label={item.name}
            className="text-[#444444] hover:text-[#ffffff] transition-all duration-300 p-[10px]">
            {item.icon}
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialSidebar;