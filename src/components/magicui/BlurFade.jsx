import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "../../lib/utils";

export function BlurFade({
  children,
  className,
  duration = 0.5,
  delay = 0,
  yOffset = 16,
  inView = true,
  inViewMargin = "-40px",
  blur = "8px",
  ...props
}) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isVisible = !inView || inViewResult;

  const variants = {
    hidden: {
      y: yOffset,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      transition={{
        delay: 0.05 + delay,
        duration,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default BlurFade;
