import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const BorderBeam = ({
  className,
  size = 60,
  delay = 0,
  duration = 6,
  colorFrom = "#6366f1",
  colorTo = "#a855f7",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1.5,
}) => {
  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden [mask-clip:padding-box,border-box]"
      style={{
        padding: `${borderWidth}px`,
      }}
    >
      <motion.div
        className={cn(
          "absolute aspect-square opacity-70",
          className
        )}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round 16px)`,
          background: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
          ...style,
        }}
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
          delay: -delay,
          ...transition,
        }}
      />
    </div>
  );
};

export default BorderBeam;
