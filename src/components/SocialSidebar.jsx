"use client";
import React from 'react';
import { GitHub, Linkedin, Mail, Phone } from 'react-feather';

// Custom Patreon Icon
const PatreonIcon = ({ size = 20 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="none"       
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.38 2.41c-3.32 0-6 2.68-6 6a5.98 5.98 0 0 0 6 6 6 6 0 0 0 6-6c0-3.32-2.68-6-6-6zm-9.33 19.19h4.19V2.41H6.05v19.19z"/>
  </svg>
);

const SocialSidebar = () => {
  // 1. REDUCED ICON SIZES (28px -> 24px)
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/anvitvermaa', icon: <GitHub size={24} /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/anvit-verma', icon: <Linkedin size={24} /> },
    { name: 'Email', url: 'mailto:anvitvermaa@gmail.com', icon: <Mail size={24} /> },
    { name: 'WhatsApp', url: 'https://wa.me/918779979151', icon: <Phone size={24} /> },
    { name: 'Patreon', url: 'https://www.patreon.com/c/anvitvermaa_labs', icon: <PatreonIcon size={22} /> },
  ];

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '0px',
        left: '100px', // Kept the 2cm spacing
        zIndex: 2147483647,
        display: 'block'
      }}
      className="hidden md:block"
    >
      <ul 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // 2. REDUCED GAP FURTHER (15px -> 10px)
          gap: '10px',
          margin: 0,
          padding: 0,
          listStyle: 'none'
        }}
        className="after:content-[''] after:block after:w-[1px] after:bg-[#a8b2d1] after:mt-6 after:h-[90px]"
      >
        {socialLinks.map((item, i) => (
          <li key={i} className="last:mb-0">
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              aria-label={item.name}
              className="text-[#a8b2d1] hover:text-[#64ffda] hover:-translate-y-[3px] transition-all duration-300 block p-[10px]"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialSidebar;