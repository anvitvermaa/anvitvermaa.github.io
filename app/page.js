import Hero from "../src/components/sections/Hero";
import About from "../src/components/sections/About";
import Jobs from "../src/components/sections/Jobs";
import Publications from "../src/components/sections/Publications"; 
import SelectedWorks from "../src/components/sections/SelectedWorks";
import Education from "../src/components/sections/Education"; 
import Skills from "../src/components/sections/Skills";
import MorphingFooter from "../src/components/sections/MorphingFooter"; 
import SocialSidebar from "../src/components/SocialSidebar"; 
import Contact from "../src/components/sections/Contact";
import RotatingStar from "../src/components/RotatingStar"; 

export default function Home() {
  return (
    <main className="px-6 md:px-24 lg:px-36 min-h-screen w-full overflow-x-hidden bg-[#0a192f] text-[#8892b0]">
      
      <RotatingStar />
      <SocialSidebar />

      <div className="max-w-[1100px] mx-auto w-full relative z-10">
        
        <Hero/>
        <About />
        <Jobs />
        
        {/* Added Publications Section Here */}
        <Publications />

        <SelectedWorks />
        <Education />
        <Skills />
        <MorphingFooter />
        <Contact />

      </div>
    </main>
  );
}