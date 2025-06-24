import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone
} from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute -top-6 left-0 right-0 flex justify-center">
          <div className="h-12 w-12 rounded-full bg-teal-500 dark:bg-teal-600 blur-xl opacity-20"></div>
        </div>
        <hr className="w-full h-0.5 mx-auto mt-8 bg-gradient-to-r from-transparent via-teal-500 to-transparent border-0" />
      </div>

      <div className="mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright and contact info */}
        <div className="flex flex-col items-center md:items-start space-y-3 text-neutral-700 dark:text-neutral-300">
          <div className="text-sm md:text-base">
            © 2025 Kalkidan Belayneh Debas
          </div>
          
          {/* Contact Info - Stacked vertically always */}
          <div className="flex flex-col gap-2 text-sm">
            <a 
              href="mailto:kalkidan.debas@example.com" 
              className="flex items-center gap-2 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              <AiOutlineMail size={18} />
              <span>kalkidantiru14@gmail.com</span>
            </a>
            <a 
              href="tel:+251912345678" 
              className="flex items-center gap-2 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              <AiOutlinePhone size={18} />
              <span>+251 965 005 706</span>
            </a>
          </div>
        </div>

        {/* Social media links */}
        <div className="flex flex-row items-center space-x-4">
          <a 
            href="https://github.com/kaltiru14" 
            rel="noreferrer" 
            target="_blank"
            className="p-2 rounded-full bg-gray-100 dark:bg-stone-700 hover:bg-teal-100 dark:hover:bg-teal-900/50 transition-colors group"
            aria-label="GitHub"
          >
            <AiOutlineGithub
              className="text-neutral-700 dark:text-neutral-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors"
              size={22}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kalkidan-debas/"
            rel="noreferrer"
            target="_blank"
            className="p-2 rounded-full bg-gray-100 dark:bg-stone-700 hover:bg-teal-100 dark:hover:bg-teal-900/50 transition-colors group"
            aria-label="LinkedIn"
          >
            <AiOutlineLinkedin
              className="text-neutral-700 dark:text-neutral-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors"
              size={22}
            />
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;