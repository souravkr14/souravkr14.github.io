import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "../../lib/utils";

export function InteractiveHoverButton({
  children,
  className,
  href,
  ...props
}) {
  const commonClasses = cn(
    "group relative inline-flex h-12 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-slate-900 bg-slate-900 px-7 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:border-indigo-600 hover:bg-indigo-600 dark:border-white/10 dark:bg-white dark:text-slate-950 dark:hover:border-white dark:hover:bg-slate-100",
    className
  );

  const innerContent = (
    <>
      <div className="flex items-center justify-center gap-2 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        <span>{children}</span>
        <FiArrowRight size={14} />
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{children}</span>
        <FiArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className={commonClasses} {...props}>
        {innerContent}
      </a>
    );
  }

  return (
    <button className={commonClasses} {...props}>
      {innerContent}
    </button>
  );
}

export default InteractiveHoverButton;
