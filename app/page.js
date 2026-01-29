import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <main className="min-h-screen px-6 md:px-24 lg:px-36">
      <div className="max-w-[1000px] mx-auto">
        <Hero />
        <About />
        <section className="h-screen flex items-center justify-center text-slate">
           <p className="font-mono">More sections coming soon...</p>
        </section>
      </div>
    </main>
  );
}