"use client";
import React from 'react';
import { GitHub, Linkedin, Mail, Phone } from 'react-feather';

const PatreonIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.38 2.41c-3.32 0-6 2.68-6 6a5.98 5.98 0 0 0 6 6 6 6 0 0 0 6-6c0-3.32-2.68-6-6-6zm-9.33 19.19h4.19V2.41H6.05v19.19z"/>
  </svg>
);

const socialLinks = [
  { name: 'GitHub',   url: 'https://github.com/anvitvermaa',             icon: <GitHub size={22} /> },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/anvit-verma',         icon: <Linkedin size={22} /> },
  { name: 'Email',    url: 'mailto:anvitvermaa@gmail.com',                icon: <Mail size={22} /> },
  { name: 'WhatsApp', url: 'https://wa.me/918779979151',                  icon: <Phone size={22} /> },
  { name: 'Patreon',  url: 'https://www.patreon.com/c/anvitvermaa_labs',  icon: <PatreonIcon size={20} /> },
];

const SocialSidebar = () => {
  return (
    <>
      {/* ── DESKTOP: fixed left sidebar (hidden on mobile) ── */}
      <div className="hidden md:block" style={{ position: 'fixed', bottom: '0px', left: '100px', zIndex: 9997 }}>
        <ul
          className="after:content-[''] after:block after:w-[1px] after:bg-[#a8b2d1] after:mt-6 after:h-[90px]"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', margin: 0, padding: 0, listStyle: 'none' }}
        >
          {socialLinks.map((item, i) => (
            <li key={i}>
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

      {/* ── MOBILE: fixed bottom bar (hidden on desktop) ── */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          zIndex: 9997,
          backgroundColor: 'rgba(10, 25, 47, 0.95)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid #233554',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 0',
        }}
      >
        {socialLinks.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            aria-label={item.name}
            className="text-[#a8b2d1] hover:text-[#64ffda] transition-all duration-300 p-[10px]"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialSidebar;