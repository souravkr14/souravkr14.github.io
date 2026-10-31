import React, { useId } from "react";
import { cn } from "../../lib/utils";

export const NoiseTexture = ({
  className,
  frequency = 0.5,
  octaves = 4,
  slope = 0.2,
  noiseOpacity = 0.4,
  ...props
}) => {
  const filterId = useId();

  return (
    <svg
      className={cn(
        "pointer-events-none absolute inset-0 z-0 h-full w-full select-none",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <filter id={filterId}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency={frequency}
          numOctaves={octaves}
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncR type="linear" slope={slope} />
          <feFuncG type="linear" slope={slope} />
          <feFuncB type="linear" slope={slope} />
        </feComponentTransfer>
      </filter>
      <rect
        width="100%"
        height="100%"
        filter={`url(#${filterId})`}
        opacity={noiseOpacity}
      />
    </svg>
  );
};

export default NoiseTexture;
