const SectionDivider = () => {
  return (
    <div className="relative my-16 flex w-full justify-center px-4 sm:my-24">
      <div className="relative w-full max-w-5xl">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-slate-300/80 to-transparent dark:via-white/20" />
        <div className="absolute left-1/2 top-1/2 h-20 w-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500/10 blur-3xl" />
        <div className="relative mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/70 bg-white/70 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60">
          <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400" />
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
