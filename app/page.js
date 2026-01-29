import Hero from "../src/components/sections/Hero";
import About from "../src/components/sections/About";
import Jobs from "../src/components/sections/Jobs";
import SelectedWorks from "../src/components/sections/SelectedWorks";
import Education from "../src/components/sections/Education"; 
import Skills from "../src/components/sections/Skills";
import MorphingFooter from "../src/components/sections/MorphingFooter"; // <--- Import This

export default function Home() {
  return (
    <main className="px-6 md:px-24 lg:px-36 min-h-screen w-full overflow-x-hidden">
      <div className="max-w-[1000px] mx-auto w-full">
        
        <Hero />
        <About />
        <Jobs />
        <SelectedWorks />
        <Education />
        <Skills />
        
        {/* The Morphing Footer */}
        <MorphingFooter />
        
        {/* Simple Copyright Footer */}
        <section className="pb-10 flex items-center justify-center text-center">
            <p className="font-mono text-sm text-[#8892b0]">
              Built & Designed by Anvit Verma
            </p>
        </section>
      </div>
    </main>
  );
}