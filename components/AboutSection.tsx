"use client";

import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML", level: "Advanced" },
  { skill: "CSS", level: "Advanced" },
  { skill: "JavaScript", level: "Advanced" },
  { skill: "React", level: "Advanced" },
  { skill: "TypeScript", level: "Intermediate" },
  { skill: "Next.js", level: "Intermediate" },
  { skill: "Tailwind CSS", level: "Advanced" },
  { skill: "Git/GitHub", level: "Intermediate" },
  { skill: "UI/UX Principles", level: "Intermediate" },
  { skill: "Responsive Design", level: "Advanced" },
  { skill: "Web Accessibility", level: "Intermediate" },
  { skill: "Python", level: "Basic" },
  { skill: "Numpy", level: "Intermediate" },
  { skill: "Pandas", level: "Intermediate" },
  { skill: "Matplotlib", level: "Intermediate" },
  { skill: "Seaborn", level: "Intermediate" },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-white dark:bg-stone-900 w-full">
      <div className="py-12 md:py-24 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto">
        <div>
          <h2 className="text-center font-bold text-4xl mb-8">
            About Me
            <hr className="w-12 h-1 mx-auto my-4 bg-teal-500 border-0 rounded-full" />
          </h2>

          <div className="flex flex-col md:flex-row items-start justify-center gap-12 md:gap-16 lg:gap-24">
            {/* Intro & Description */}
            <div className="md:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                Get to know me!
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Hi! I&apos;m Kalkidan, a <span className="font-bold text-teal-600 dark:text-teal-400">Frontend Developer</span> based in Addis Ababa, Ethiopia.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                I graduated from Addis Ababa University in 2023 with a BSc in Computer Science. I&apos;m currently working in the banking sector.
                 {/* while contributing as a Junior Frontend Developer at a software company. */}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                I&apos;m passionate about building interactive user experiences and constantly learning new technologies. Outside of work, you&apos;ll find me reading, exploring, or enjoying a good movie.
              </p>
              {/* <blockquote className="border-l-4 border-teal-500 pl-4 italic text-gray-600 dark:text-gray-400 my-6">
                &ldquo;I believe technology should feel simple, intuitive, and empowering &mdash; that&apos;s what I strive for in every line of code.&rdquo;
              </blockquote> */}
            </div>

            {/* Skills & Image */}
            <div className="md:w-1/2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-4">
                  My Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((item, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 rounded-full font-medium shadow-sm hover:scale-105 transition-transform duration-200 ${
                        item.level === "Advanced"
                          ? "bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200"
                          : item.level === "Intermediate"
                          ? "bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                      }`}
                      title={item.level}
                    >
                      {item.skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hidden md:block mt-8">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl opacity-20 blur"></div>
                  <Image
                    src="/hero-image.png"
                    alt="Kalkidan's development workspace"
                    width={400}
                    height={400}
                    className="relative rounded-lg shadow-xl border-4 border-white dark:border-stone-800"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;