import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/index";
import { navitems, PHONE_NUMBER } from "./constants";
import type { NavigationProps, PageType } from "./types";
import logowhite from "@/assets/logo-white.svg";
import { Icon } from "@/components/Icon/Icon";

export function Navigation({ currentPage, onNavigate, heroHeight = 600 }: NavigationProps) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > heroHeight);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heroHeight]);

  return (
    <div className={`fixed top-0 z-50 w-full transition-all duration-500 ${
      isScrolled 
        ? 'bg-gradient-to-r from-[#5e4684] to-[#7a5ba8] backdrop-blur-md shadow-xl' 
        : 'bg-transparent'
    }`}>
      <div className="flex flex-col items-center relative w-full">
        <div className="flex flex-row items-center justify-between max-w-6xl w-full px-8 py-4">
          {/* Logo */}
          <Link to="/" onClick={() => onNavigate('home')} className="h-[60px] w-[120px] p-0 bg-transparent hover:scale-105 transition-transform flex items-center">
            <img src={logowhite} alt="Planting Roots Realty" className="h-full w-auto" />
          </Link>
          {/* Navigation Menu */}
          <ul className="flex gap-6 items-center">
            {navitems.map((item) => (
              <li key={item.page}>
                <Link
                  to={item.page === 'home' ? '/' : `/${item.page}`}
                  className={cn(
                    "text-white hover:text-white/80 font-semibold transition-colors px-3 py-2",
                    (location.pathname === '/' && item.page === 'home') ||
                    location.pathname.includes(item.page)
                      ? "border-b-2 border-white"
                      : ""
                  )}
                  onClick={() => onNavigate(item.page)}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          {/* Phone CTA */}
          <div className="hidden md:flex items-center bg-white/20 hover:bg-white/30 rounded-lg px-4 py-2 backdrop-blur-sm shadow-md transition-all">
            <Icon name="phone" className="text-white w-5 h-5" />
            <span className="ml-2 text-white font-semibold text-sm uppercase">{PHONE_NUMBER}</span>
          </div>
        </div>
      </div>
    </div>
  );
}