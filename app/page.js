import Hero from "../src/components/sections/Hero";
import About from "../src/components/sections/About";
import Jobs from "../src/components/sections/Jobs";
import SelectedWorks from "../src/components/sections/SelectedWorks";
import Education from "../src/components/sections/Education"; 
import Skills from "../src/components/sections/Skills";
import MorphingFooter from "../src/components/sections/MorphingFooter"; 

export default function Home() {
  return (
    <main className="px-6 md:px-24 lg:px-36 min-h-screen w-full overflow-x-hidden">
      <div className="max-w-[1000px] mx-auto w-full">
        
        {/* Main Sections */}
        <Hero />
        <About />
        <Jobs />
        <SelectedWorks />
        <Education />
        <Skills />
        

        
        {/* 3. Morphing Footer at the very bottom */}
        <MorphingFooter />
        
        {/* 4. Removed the "Built & Designed by" section completely */}
      </div>
    </main>
  );
}