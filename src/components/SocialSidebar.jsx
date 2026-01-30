"use client";
import React from 'react';
import { GitHub, Linkedin, Instagram, Twitter, Codepen } from 'react-feather';

const SocialSidebar = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/anvitvermaa',
      icon: <GitHub size={26} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/anvit-verma',
      icon: <Linkedin size={26} />,
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com', 
      icon: <Instagram size={26} />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com', 
      icon: <Twitter size={26} />,
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io', 
      icon: <Codepen size={26} />,
    },
  ];

  return (
    <div 
      className="fixed left-[30px] md:left-[50px] z-[9999]"
      // FORCE BOTTOM: Inline styles override everything else.
      style={{ position: 'fixed', bottom: '0px' }}
    >
      <ul className="
        flex flex-col items-center gap-6 m-0 p-0 list-none 
        after:content-[''] 
        after:block 
        after:w-[1px] 
        after:bg-[#a8b2d1] 
        after:mt-6
        after:h-[120px] 
      ">
        {/* ^^^ CHANGE THIS NUMBER ^^^
            - 40px  = Short line
            - 90px  = Medium line (Current)
            - 150px = Long line 
        */}
        
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