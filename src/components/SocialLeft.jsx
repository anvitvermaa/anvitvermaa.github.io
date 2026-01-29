import { FiGithub, FiInstagram, FiTwitter, FiLinkedin, FiCodepen } from "react-icons/fi";

const SocialLeft = () => {
  return (
    <div className="fixed bottom-0 left-10 z-10 text-[#a8b2d1]">
      <div className="flex flex-col gap-6 items-center">
        <a href="https://github.com/anvitvermaa" aria-label="GitHub" target="_blank" rel="noreferrer" className="hover:text-[#64ffda] hover:-translate-y-1 transition-all duration-300 p-2">
          <FiGithub size={20} />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-[#64ffda] hover:-translate-y-1 transition-all duration-300 p-2">
          <FiInstagram size={20} />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-[#64ffda] hover:-translate-y-1 transition-all duration-300 p-2">
          <FiTwitter size={20} />
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:text-[#64ffda] hover:-translate-y-1 transition-all duration-300 p-2">
          <FiLinkedin size={20} />
        </a>
        
        {/* The Line */}
        <div className="w-[1px] h-24 bg-[#a8b2d1] mt-4"></div>
      </div>
    </div>
  );
};

export default SocialLeft;