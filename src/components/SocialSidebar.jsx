"use client";
import React from 'react';
import { GitHub, Linkedin, Mail, Phone } from 'react-feather';

// Custom Patreon Icon (since react-feather doesn't have it)
const PatreonIcon = ({ size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M14.82 2.41a6.06 6.06 0 0 0-5.87 6.04c-.03 3.32 2.65 6.04 5.96 6.04 3.31 0 6-2.7 6-6.04a6.03 6.03 0 0 0-6.09-6.04Z" />
    <path d="M2.66 21.6h4.27V2.41H2.66z" />
  </svg>
);

const SocialSidebar = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/anvitvermaa',
      icon: <GitHub size={22} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/anvit-verma',
      icon: <Linkedin size={22} />,
    },
    {
      name: 'Email',
      url: 'mailto:anvitvermaa@gmail.com', // Added Email
      icon: <Mail size={22} />,
    },
    {
      name: 'Phone',
      url: 'tel:+918779979151', // Added Phone
      icon: <Phone size={22} />,
    },
    {
      name: 'Patreon',
      url: 'https://www.patreon.com/c/anvitvermaa_labs', // Placeholder Patreon link
      icon: <PatreonIcon size={20} />,
    },
  ];

  return (
    <div 
      className="fixed left-[20px] md:left-[50px] z-[9999]"
      // Fixed to bottom
      style={{ position: 'fixed', bottom: '0px' }}
    >
      <ul className="
        flex flex-col items-center gap-6 m-0 p-0 list-none 
        after:content-[''] 
        after:block 
        after:w-[1px] 
        after:bg-[#a8b2d1] 
        after:mt-6
        after:h-[90px] 
      ">
        
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