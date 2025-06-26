"use client";

import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="bg-white dark:bg-stone-900 min-w-full overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32 md:py-48 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Hero Text */}
        <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
          
          <h2 className="text-2xl md:text-3xl mt-4">
            Hi, I&apos;m  <span className="font-bold hover-underline">Kalkidan Debas</span>
          </h2>

          <p className="mt-4 mb-6 text-lg md:text-2xl">
            I&apos;m a{" "}
            <span className="text-teal-600 font-semibold inline-block min-w-[180px] md:min-w-[220px]">
              <Typewriter
                words={["Frontend Developer", "SQL Developer"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>{" "}
            based in Addis Ababa, Ethiopia. Working in the banking sector and have previously worked as a Frontend Developer Intern at a software company.
          </p>

          <div className="flex flex-nowrap justify-center md:justify-start gap-3 sm:gap-4 mt-8 overflow-x-auto w-full pb-2">
            <Link
              to="projects"
              className="flex-shrink-0 relative group bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-teal-400/30 whitespace-nowrap"
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            
            <a
              href="/Kalkidan Belayneh Debas CV2.pdf"
              download
              className="flex-shrink-0 flex items-center gap-2 border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold px-5 py-3 rounded-lg transition-all duration-300 group whitespace-nowrap"
            >
              <span>Download CV</span>
              <FiDownload className="group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative md:w-1/2 group order-1 md:order-2">
          <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Image
            src="/kalphoto.png"
            alt="Kalkidan Debas - Frontend Developer"
            width={400}
            height={400}
            className="relative rounded-full shadow-2xl border-[6px] border-white dark:border-stone-800 floating-image"
            priority
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white dark:bg-stone-800 px-4 py-2 rounded-full shadow-md">
            <span className="text-teal-600 dark:text-teal-400 font-medium">Open to Work</span>
          </div>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="flex justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          aria-label="Scroll to About section"
          className="hover:scale-110 transition-transform"
        >
          <HiArrowDown size={35} className="animate-bounce text-teal-600 dark:text-teal-400" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;