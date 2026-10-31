import React from "react";
import { cn } from "../../lib/utils";

export const AnimatedShinyText = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      style={{
        "--shiny-width": `${shimmerWidth}px`,
      }}
      className={cn(
        "inline-block bg-clip-text text-transparent",
        "animate-shiny-text bg-[length:var(--shiny-width)_100%] bg-no-repeat",
        "bg-gradient-to-r from-slate-500 via-slate-900 to-slate-500 dark:from-slate-400 dark:via-white dark:to-slate-400",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default AnimatedShinyText;
