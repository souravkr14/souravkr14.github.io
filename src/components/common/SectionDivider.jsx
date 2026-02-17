const SectionDivider = () => {
  return (
    <div className="mt-4 mb-16 sm:mt-6 sm:mb-20 w-full px-4">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute left-1/2 -translate-x-1/2 w-1/2 h-16 bg-indigo-500/5 blur-[80px] -mt-8 pointer-events-none" />
    </div>
  );
};
