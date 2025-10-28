"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FiDownload } from "react-icons/fi";

// Dynamic imports for better performance
const DynamicMoon = dynamic(() => import("react-icons/ri").then(mod => mod.RiMoonFill), { ssr: false });
const DynamicSun = dynamic(() => import("react-icons/ri").then(mod => mod.RiSunLine), { ssr: false });
const DynamicMenu = dynamic(() => import("react-icons/io").then(mod => mod.IoMdMenu), { ssr: false });
const DynamicClose = dynamic(() => import("react-icons/io").then(mod => mod.IoMdClose), { ssr: false });
const DynamicDownload = dynamic(() => import("react-icons/fi").then(mod => mod.FiDownload), { ssr: false });

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Projects", page: "projects" },
  { label: "Testimonials", page: "testimonials" },
  { label: "Contact", page: "contact" },
];

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [hasNewUpdate, setHasNewUpdate] = useState(true); // Would typically come from API

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  const handleNavLinkClick = () => {
    setNavbar(false);
  };

  if (!isMounted) return null;

  return (
    <>
      <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow backdrop-blur-sm bg-white/80 dark:bg-stone-900/80 dark:border-b dark:border-stone-600/30">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link 
            to="home" 
            smooth={true} 
            offset={-100} 
            duration={500}
            className="flex items-center space-x-2 cursor-pointer py-3 md:py-5 group"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent dark:from-teal-400 dark:to-blue-400">
              Kalkidan Debas
            </h2>
            {hasNewUpdate && (
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={idx}
                to={item.page}
                className="text-neutral-900 hover:text-teal-600 dark:text-neutral-100 dark:hover:text-teal-400 cursor-pointer text-sm font-medium uppercase tracking-wider relative group transition-colors duration-300"
                activeClass="active-nav-link"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    document.getElementById(item.page)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 dark:bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <div className="flex items-center space-x-4 ml-4">
              <button
                onClick={toggleTheme}
                className="bg-slate-100 dark:bg-slate-800 p-2 rounded-xl hover:scale-110 transition-all duration-200"
                aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
              >
                {currentTheme === "dark" ? (
                  <DynamicSun size={18} className="text-yellow-400" />
                ) : (
                  <DynamicMoon size={18} className="text-indigo-700" />
                )}
              </button>

              <a
                href="/Kalkidan Belayneh Debas CV.pdf"
                download
                className="flex items-center space-x-1 bg-teal-600 hover:bg-teal-700 text-white px-3 py-2 rounded-md transition-colors duration-200 text-sm font-medium"
                aria-label="Download resume"
              >
                <span>CV</span>
                <DynamicDownload size={16} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="bg-slate-100 dark:bg-slate-800 p-2 rounded-xl"
              aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {currentTheme === "dark" ? (
                <DynamicSun size={20} className="text-yellow-400" />
              ) : (
                <DynamicMoon size={20} className="text-indigo-700" />
              )}
            </button>
            <button
              aria-label="Toggle Navigation Menu"
              className="p-2 text-gray-700 dark:text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-teal-400"
              onClick={() => setNavbar(!navbar)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setNavbar(!navbar);
              }}
              tabIndex={0}
            >
              {navbar ? <DynamicClose size={24} /> : <DynamicMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {navbar && (
          <div className="md:hidden mt-2 space-y-3 pb-4 animate-fadeIn">
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={idx}
                to={item.page}
                className="block py-2 px-4 text-neutral-900 hover:text-teal-600 dark:text-neutral-100 dark:hover:text-teal-400 rounded-md hover:bg-gray-100 dark:hover:bg-stone-800 transition-colors"
                activeClass="active-nav-link-mobile"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleNavLinkClick}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleNavLinkClick();
                    document.getElementById(item.page)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-200 dark:border-stone-700">
              <a
                href="/Kalkidan Belayneh Debas.pdf"
                download
                className="flex items-center space-x-2 py-2 px-4 text-neutral-900 dark:text-neutral-100 rounded-md hover:bg-gray-100 dark:hover:bg-stone-800 transition-colors"
              >
                <span>Download Resume</span>
                <DynamicDownload size={16} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Scroll Progress Indicator */}
      <div 
        className="h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 fixed top-0 z-40" 
        style={{ width: `${scrollProgress}%`, transition: 'width 0.1s ease-out' }}
      />
    </>
  );
}