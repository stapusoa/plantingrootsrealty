export const bgStyles = {
  lg: "fixed z-0 inset-0 size-full object-cover object-top-right hidden lg:block",
  md: "fixed z-0 inset-0 size-full object-cover bg-center hidden md:block lg:hidden",
  sm: "fixed z-0 inset-0 size-full object-cover bg-center block md:hidden",
}

export const heroWrapperClass =
  "relative shrink-0 h-screen w-full"

export const heroBackgroundWrapperClass =
  "relative shrink-0 h-screen w-full"

export const heroBackgroundClass =
  "absolute bottom-0 left-0 right-0 top-0"

export const heroInnerClass =
"absolute left-1/2 translate-x-[-50%] translate-y-[-50%] w-[1280px] max-w-[90vw]"

export const heroHeaderClass =
"box-border content-stretch flex flex-col gap-8 items-center justify-center p-0 relative w-full"

export const heroTitleClass =
  "flex flex-col z-3 max-w-285 w-fullfont-['Merriweather'] text-6xl md:text-5xl sm:text-4xl justify-center not-italic relative shrink-0 text-white text-center w-full animate-fade-in"

export const heroSubheaderClass =
  "flex z-3 max-w-150 w-full mb-8 text-center font-['Karla:Regular',_sans-serif] text-white/90 text-[20px] leading-relaxed animate-fade-in"

export const heroButtonClass =
  "bg-white/10 z-3 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-lg px-8 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
  
export const overlayBaseClass =
  "fixed inset-0 w-full h-screen bg-gradient-to-b from-black/60 via-black/40 to-black/20 pointer-events-none z-1"

export const overlayHomeClass =
  "fixed inset-0 w-full h-screen bg-gradient-to-br from-[#5e4684]/80 via-[#7a5ba8]/70 to-[#45a9a7]/60 pointer-events-none z-0"

export const overlayDarkClass =
  "fixed inset-0 w-full h-screen bg-black/20 pointer-events-none z-0"