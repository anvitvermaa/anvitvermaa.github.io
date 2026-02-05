"use client";
import React from 'react';
import { Send, Phone } from 'react-feather';

const Contact = () => {
  return (
    <section id="contact" className="max-w-[700px] mx-auto py-[100px] px-6 mb-[100px]">
      
      {/* 1. SECTION HEADER (Removed "07. What's Next?") */}
      <div className="flex flex-col items-center mb-[50px] text-center">
        <h2 className="font-bold text-[clamp(40px,5vw,50px)] text-[#ccd6f6] m-0">
          Get In Touch
        </h2>
        <p className="text-[#8892b0] text-[18px] max-w-[500px] mt-[20px] leading-relaxed">
          My inbox is always open. Whether you have a question, a project idea, or just want to say hi, I’ll try my best to get back to you!
        </p>
      </div>

      {/* 2. AESTHETIC FORM CONTAINER */}
      <div className="bg-[#112240] p-[40px] rounded-xl shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] border border-[#233554] w-full relative overflow-hidden group">
        
        {/* Subtle decorative glow */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#64ffda] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

        <form 
          // 1. THIS EMAIL MUST BE VALID
          action="https://formsubmit.co/anvitvermaa@gmail.com" 
          method="POST"
          className="flex flex-col gap-[25px]"
        >
          <input type="hidden" name="_captcha" value="false" />
          
          {/* 2. UPDATE THIS URL TO YOUR ACTUAL LIVE WEBSITE URL */}
          <input type="hidden" name="_next" value="http://localhost:3000/#contact" />

          {/* Top Row: Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            <div className="flex flex-col gap-[8px]">
              <label className="text-[#64ffda] font-mono text-[12px] uppercase tracking-wider">Full Name</label>
              <input 
                type="text" 
                name="name" 
                required
                placeholder="John Doe"
                className="bg-[#0a192f] border border-[#233554] rounded-md p-[14px] text-[#ccd6f6] text-[14px] placeholder-[#8892b0]/50 focus:outline-none focus:border-[#64ffda] focus:shadow-[0_0_10px_rgba(100,255,218,0.1)] transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-[8px]">
              <label className="text-[#64ffda] font-mono text-[12px] uppercase tracking-wider">Email Address</label>
              <input 
                type="email" 
                name="email" 
                required
                placeholder="john@example.com"
                className="bg-[#0a192f] border border-[#233554] rounded-md p-[14px] text-[#ccd6f6] text-[14px] placeholder-[#8892b0]/50 focus:outline-none focus:border-[#64ffda] focus:shadow-[0_0_10px_rgba(100,255,218,0.1)] transition-all duration-300"
              />
            </div>
          </div>

          {/* Subject Select */}
          <div className="flex flex-col gap-[8px]">
            <label className="text-[#64ffda] font-mono text-[12px] uppercase tracking-wider">Subject</label>
            <div className="relative">
              <select 
                name="subject" 
                className="w-full bg-[#0a192f] border border-[#233554] rounded-md p-[14px] text-[#ccd6f6] text-[14px] focus:outline-none focus:border-[#64ffda] transition-all duration-300 appearance-none cursor-pointer"
              >
                <option value="Project Collaboration">Project Collaboration</option>
                <option value="Research Collaboration">Research Collaboration</option>
                <option value="Freelance Work">Freelance Work</option>
                <option value="Hiring Opportunity">Hiring / Job Opportunity</option>
                <option value="Just saying hi">Just saying hi!</option>
              </select>
              <div className="absolute right-[15px] top-1/2 -translate-y-1/2 pointer-events-none text-[#64ffda]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-[8px]">
            <label className="text-[#64ffda] font-mono text-[12px] uppercase tracking-wider">Message</label>
            <textarea 
              name="message" 
              required
              rows="5"
              placeholder="Hello Anvit, I'd like to discuss..."
              className="bg-[#0a192f] border border-[#233554] rounded-md p-[14px] text-[#ccd6f6] text-[14px] placeholder-[#8892b0]/50 focus:outline-none focus:border-[#64ffda] focus:shadow-[0_0_10px_rgba(100,255,218,0.1)] transition-all duration-300 resize-none"
            ></textarea>
          </div>

          {/* Buttons Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px] mt-[10px]">
            {/* Primary Action: Send Email */}
            <button 
              type="submit"
              className="group relative border border-[#64ffda] text-[#64ffda] bg-transparent font-mono text-[14px] py-[14px] rounded-md transition-all duration-300 hover:bg-[#64ffda]/10 active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer overflow-hidden"
            >
              <Send size={16} className="group-hover:-translate-y-[2px] group-hover:translate-x-[2px] transition-transform duration-300" /> 
              <span>Send Message</span>
            </button>
            
            {/* Secondary Action: WhatsApp */}
            <a 
              href="https://wa.me/918779979151" 
              target="_blank" 
              rel="noreferrer"
              className="group border border-transparent bg-[#64ffda] text-[#0a192f] font-mono font-bold text-[14px] py-[14px] rounded-md transition-all duration-300 hover:brightness-110 active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer"
            >
              <Phone size={16} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>WhatsApp</span>
            </a>
          </div>

        </form>
      </div>

    </section>
  );
};

export default Contact;