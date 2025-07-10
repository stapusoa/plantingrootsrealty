import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/index";
import { navitems, PHONE_NUMBER } from "./constants";
import type { NavigationProps } from "./types";
import logowhite from "@/assets/logo-contrast.webp";
import { Icon } from "@/components/Icon/Icon";

export function Navigation({ currentPage, onNavigate, heroHeight = 600 }: NavigationProps) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleCallClick = () => {
    if (window.confirm(`Call ${PHONE_NUMBER}?`)) {
      window.location.href = `tel:${PHONE_NUMBER}`;
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > heroHeight);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heroHeight]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? "bg-primary-95 backdrop-blur-md shadow-xl"
          : "bg-transparent"
      )}>
        <div className="flex flex-col items-center relative w-full">
          <div className="flex flex-row items-center justify-between max-w-6xl w-full px-8 py-4">
            {/* Logo */}
            <Link to="/" onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }} className="h-full w-auto p-0 bg-transparent hover:scale-105 transition-transform flex items-center">
              <img src={logowhite} alt="Planting Roots Realty" className="h-full max-h-40 w-auto" />
            </Link>
            {/* Desktop Navigation Menu */}
            <ul className="hidden lg:flex gap-6 items-center">
              {navitems.map((item) => {
                const isActive =
                  (location.pathname === '/' && item.page === 'home') ||
                  (item.page !== 'home' && location.pathname.includes(item.page));
                return (
                  <li key={item.page} className="group">
                    <Link
                      to={item.page === 'home' ? '/' : `/${item.page}`}
                      onClick={() => onNavigate(item.page)}
                      className={cn(
                        "relative transition-colors px-3 py-2 font-semibold text-secondary hover:text-secondary-light"
                      )}
                    >
                      {item.text}
                      {/* Single Underline */}
                      <span
                        className={cn(
                          "absolute bottom-0 left-0 w-full h-[2px] pointer-events-none origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100",
                          isActive && "scale-x-100",
                          isActive ? "bg-secondary" : "bg-secondary-light"
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* Phone CTA and Mobile Menu Toggle Button Wrapper */}
            <div className="flex items-center gap-4">
              {/* Icon-only Phone Button on mobile (<md) */}
              <button
                onClick={handleCallClick}
                className="flex md:hidden items-center justify-center bg-white/20 hover:bg-white/30 rounded-lg px-4 py-2 backdrop-blur-sm shadow-md transition-all text-white font-semibold text-sm uppercase"
                aria-label={`Call ${PHONE_NUMBER}`}
              >
                <span className="flex items-center justify-center gap-2">
                  <Icon name="phone" className="w-6 h-6" />
                </span>
              </button>
              {/* Icon-only Phone Button on md to lg screens with "Learn More" text */}
              <button
                onClick={handleCallClick}
                className="hidden md:flex lg:hidden items-center justify-center bg-white/20 hover:bg-white/30 rounded-lg px-4 py-2 backdrop-blur-sm shadow-md transition-all text-white font-semibold text-sm uppercase"
                aria-label={`Learn More about ${PHONE_NUMBER}`}
              >
                <span className="flex items-center justify-center gap-2">
                  <Icon name="phone" className="w-6 h-6" />
                  <span>Learn More</span>
                </span>
              </button>
              {/* Full Phone Button on large screens */}
              <button
                onClick={handleCallClick}
                className="hidden lg:flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-lg px-4 py-2 backdrop-blur-sm shadow-md transition-all text-white font-semibold text-sm uppercase"
              >
                <span className="flex items-center justify-center gap-2">
                  <Icon name="phone" className="w-6 h-6" />
                  <span> {PHONE_NUMBER} </span>
                </span>
              </button>
              {/* Mobile Menu Toggle Button */}
              <button
                onClick={toggleMobileMenu}
                className="flex lg:hidden p-2 rounded-md text-white hover:bg-white/20 transition"
                aria-label="Toggle mobile menu"
              >
                <Icon name={isMobileMenuOpen ? "close" : "menu"} className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 z-40 lg:z-40 md:z-40 sm:z-40 w-full h-screen bg-primary-95 backdrop-blur-md shadow-xl flex flex-col overflow-hidden">
          <div className="flex flex-col flex-grow overflow-y-auto h-full px-6 py-6 pt-50">
            <ul className="flex flex-col gap-4">
              {navitems.map((item) => (
                <li key={item.page}>
                  <Link
                    to={item.page === 'home' ? '/' : `/${item.page}`}
                    onClick={() => { onNavigate(item.page); setIsMobileMenuOpen(false); }}
                    className="block text-white font-semibold text-lg py-2 hover:text-secondary transition"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
