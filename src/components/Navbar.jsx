import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center py-6 px-10 bg-[#0a192f]/90 backdrop-blur-sm z-50 shadow-lg">
      {/* Logo */}
      <div className="text-[#64ffda] font-mono text-xl font-bold border-2 border-[#64ffda] w-12 h-12 flex items-center justify-center rounded hover:bg-[#64ffda]/10 cursor-pointer transition-colors duration-300">
        A
      </div>

      {/* Navigation Links - FORCED VISIBLE and BIGGER */}
      <div className="flex gap-8 items-center text-[#ccd6f6] font-mono text-sm md:text-base">
        <Link href="#about" className="hover:text-[#64ffda] transition-colors duration-300">
          <span className="text-[#64ffda] mr-1">01.</span> About
        </Link>
        <Link href="#experience" className="hover:text-[#64ffda] transition-colors duration-300">
          <span className="text-[#64ffda] mr-1">02.</span> Experience
        </Link>
        <Link href="#work" className="hover:text-[#64ffda] transition-colors duration-300">
          <span className="text-[#64ffda] mr-1">03.</span> Work
        </Link>
        <Link href="#contact" className="hover:text-[#64ffda] transition-colors duration-300">
          <span className="text-[#64ffda] mr-1">04.</span> Contact
        </Link>
        <button className="border border-[#64ffda] text-[#64ffda] px-5 py-2.5 rounded hover:bg-[#64ffda]/10 transition-colors duration-300 ml-4">
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;