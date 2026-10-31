import React from "react";

const SectionDivider = () => {
  return (
    <div className="relative my-14 sm:my-20 flex w-full justify-center px-6" aria-hidden="true">
      <div className="relative w-full max-w-5xl flex items-center justify-center">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/90 to-transparent dark:via-white/[0.08]" />
        <div className="absolute flex items-center justify-center bg-[#fbfbfe] dark:bg-[#090a10] px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-700 transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
