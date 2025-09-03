export const baseImageClass =
  "block w-full h-auto object-cover rounded-lg transition-opacity ease-in-out duration-300"

export const loadingClass = "opacity-50 blur-sm"

export const fallbackClass = baseImageClass

export const wrapperClass = "relative flex items-center justify-center w-full h-full"

export const bgStyles = {
  lg: "fixed inset-0 size-full object-cover object-top-right hidden lg:block z-0",
  md: "fixed inset-0 size-full object-cover bg-center hidden md:block lg:hidden z-0",
  sm: "fixed inset-0 size-full object-cover bg-center block md:hidden z-0",
}
