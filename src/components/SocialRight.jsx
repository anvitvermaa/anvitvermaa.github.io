const SocialRight = () => {
  return (
    <div className="fixed bottom-0 right-5 md:right-10 flex flex-col gap-6 items-center text-light-slate z-50">
      <a 
        href="mailto:anvit@example.com" 
        className="font-mono text-xs tracking-widest hover:text-green hover:-translate-y-1 transition-all duration-300 vertical-writing mb-24"
        style={{ writingMode: 'vertical-rl' }}
      >
        anvit@example.com
      </a>
      <div className="w-[1px] h-24 bg-light-slate mt-4"></div>
    </div>
  );
};

export default SocialRight;