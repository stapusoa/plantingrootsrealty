import { useEffect, useState } from 'react';

export const baseWrapper =
  "fixed top-0 z-50 w-full transition-all duration-500 flex items-center gap-4";

export const navScrolled =
  "bg-gradient-to-r from-[#5e4684] to-[#7a5ba8] backdrop-blur-md shadow-xl";

export const navTransparent = "bg-transparent";

export const linkBase =
  "cursor-pointer h-full relative shrink-0 group text-white hover:text-white/80";

export const activeUnderline =
  "absolute bg-white bottom-0 h-[3px] left-0 right-0 rounded-t-sm";

export const phoneButtonBase =
  "relative rounded-[10px] shrink-0 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg backdrop-blur-sm";

export const phoneButtonScrolled = "bg-white/20 hover:bg-white/30";
export const phoneButtonTransparent = "bg-white/10 hover:bg-white/20";

// Additional classes for layout adjustments
export const phoneButtonFull = "hidden lg:flex";
export const phoneButtonLearnMore = "hidden md:flex lg:hidden";
export const phoneButtonIconOnly = "flex md:hidden";
export const phoneAndMenuContainer = "flex space-x-4 items-center";