const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20">
      <p className="text-green font-mono mb-5 text-lg">Hi, my name is</p>
      <h1 className="text-4xl md:text-7xl font-bold text-lightest-slate mb-4">Anvit Verma.</h1>
      <h2 className="text-4xl md:text-7xl font-bold text-slate mb-8">I build things for the web.</h2>
      <p className="text-slate max-w-xl text-lg mb-12 leading-relaxed">
        I am a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
      </p>
      <a href="https://github.com/anvitvermaa" target="_blank" className="w-fit border border-green text-green px-8 py-4 rounded font-mono hover:bg-green/10 transition duration-300">Check out my code!</a>
    </section>
  );
};
export default Hero;