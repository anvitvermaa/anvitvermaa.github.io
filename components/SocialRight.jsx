const SocialRight = () => {
  return (
    <div className="fixed bottom-0 right-10 hidden md:flex flex-col gap-6 items-center text-light-slate z-10 w-10">
      <a href="mailto:anvit@example.com" className="font-mono text-xs tracking-widest hover:text-green hover:-translate-y-1 transition-all duration-300 rotate-90 mb-24" style={{ writingMode: 'vertical-rl' }}>
        anvit@example.com
      </a>
      <div className="w-[1px] h-24 bg-light-slate mt-4"></div>
    </div>
  );
};
export default SocialRight;