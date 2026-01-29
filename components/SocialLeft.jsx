import { FiGithub, FiInstagram, FiTwitter, FiLinkedin, FiCodepen } from "react-icons/fi";

const SocialLeft = () => {
  return (
    <div className="fixed bottom-0 left-10 hidden md:flex flex-col gap-6 items-center text-light-slate z-10 w-10">
      <a href="https://github.com/anvitvermaa" className="hover:text-green hover:-translate-y-1 transition-all"><FiGithub size={20} /></a>
      <a href="#" className="hover:text-green hover:-translate-y-1 transition-all"><FiInstagram size={20} /></a>
      <a href="#" className="hover:text-green hover:-translate-y-1 transition-all"><FiTwitter size={20} /></a>
      <a href="#" className="hover:text-green hover:-translate-y-1 transition-all"><FiLinkedin size={20} /></a>
      <a href="#" className="hover:text-green hover:-translate-y-1 transition-all"><FiCodepen size={20} /></a>
      <div className="w-[1px] h-24 bg-light-slate mt-4"></div>
    </div>
  );
};
export default SocialLeft;