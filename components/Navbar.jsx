import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-6 lg:px-12 fixed w-full bg-navy/90 backdrop-blur-sm z-50 shadow-lg">
      <div className="text-green font-mono text-xl font-bold border-2 border-green w-10 h-10 flex items-center justify-center rounded hover:bg-green/10 cursor-pointer transition">
        A
      </div>
      <div className="hidden md:flex gap-8 items-center text-lightest-slate font-mono text-xs">
        <Link href="#about" className="group hover:text-green transition duration-300"><span className="text-green mr-1">01.</span> About</Link>
        <Link href="#experience" className="group hover:text-green transition duration-300"><span className="text-green mr-1">02.</span> Experience</Link>
        <Link href="#work" className="group hover:text-green transition duration-300"><span className="text-green mr-1">03.</span> Work</Link>
        <Link href="#contact" className="group hover:text-green transition duration-300"><span className="text-green mr-1">04.</span> Contact</Link>
        <button className="border border-green text-green px-4 py-2 rounded text-xs hover:bg-green/10 transition duration-300 ml-2">Resume</button>
      </div>
    </nav>
  );
};
export default Navbar;