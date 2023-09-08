import { cn } from "@/lib/utils";
import React, { FC } from "react";

export const GradientBall: FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={cn(
        "w-[416px] -z-50 aspect-square opacity-40 rounded-full radialGradient",
        className
      )}
    />
  );
};
