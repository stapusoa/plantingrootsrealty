import React from "react";
import clsx from "clsx";

type OverlayProps = {
  className?: string;
};

export const Overlay: React.FC<OverlayProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        "absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20 pointer-events-none",
        className
      )}
    />
  );
};