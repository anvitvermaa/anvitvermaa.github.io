const About = () => {
  return (
    <section id="about" className="py-24 max-w-3xl mx-auto">
      <h2 className="section-heading numbered-heading text-lightest-slate">About Me</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="text-slate space-y-4">
          <p>Hello! My name is Anvit and I enjoy creating things that live on the internet.</p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="grid grid-cols-2 gap-2 font-mono text-sm mt-4">
            <li className="flex items-center gap-2"><span className="text-green">▹</span> JavaScript (ES6+)</li>
            <li className="flex items-center gap-2"><span className="text-green">▹</span> React</li>
            <li className="flex items-center gap-2"><span className="text-green">▹</span> Node.js</li>
          </ul>
        </div>
        <div className="relative group mx-auto md:mx-0 w-64 h-64">
           <div className="absolute inset-0 bg-green/20 rounded border-2 border-green z-10 hover:bg-transparent transition duration-300"></div>
           <div className="absolute top-4 left-4 w-full h-full border-2 border-green rounded -z-10 group-hover:top-2 group-hover:left-2 transition-all"></div>
        </div>
      </div>
    </section>
  );
};
export default About;