const SectionDivider = () => {
  return (
    <div className="relative mt-12 mb-16 sm:mt-16 sm:mb-24 w-full flex justify-center px-4">
      <div className="relative w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

      <div className="absolute top-1/2 -translate-y-1/2 w-1/2 h-20 bg-white/10 blur-3xl pointer-events-none" />
    </div>
  );
};

export default SectionDivider;
