"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Zekaryas Kobota",
    role: "Junior Application Developer Officer, Amhara Bank",
    content: "I work with Kalkidan at Amhara Bank, where she contributes to our data lakehouse project and various reporting tasks. She has strong skills in data analysis and works with tools like Apache NiFi, Spark, and Iceberg. Kalkidan is quick to learn and consistently delivers high-quality results.",
    avatar: "/zekaryas.jpg",
  },
  {
    name: "Aschale Tikuye",
    role: "MIS Team Leader, Amhara Bank",
    content: "As the MIS Team Leader, I have had the pleasure of supervising Kalkidan in our department. She has been actively involved in analyzing and preparing critical business reports by extracting and transforming data from various systems. Kalkidan demonstrates strong skills in SQL, data integration tools, and business intelligence platforms. Her ability to understand complex data structures and turn them into meaningful insights has been a valuable asset to our team. She is hardworking, detail-oriented, and continuously seeks to improve her skills.",
    avatar: "/asche.jpg",
  },
  {
    name: "Blen Assefa",
    role: "Freelancer",
    content: "Working with Kalkidan on our project was a pleasure. She translated our requirements into a functional Typescript application with excellent UI/UX considerations. Very responsive to feedback throughout the process.",
    avatar: "/blen.jpg",
  },
  // {
  //   name: "Project Manager",
  //   role: "Where in Addis Project",
  //   content: "Kalkidan's work on our location-based app was outstanding. She implemented complex geolocation features with clean, maintainable code and delivered ahead of deadlines.",
  //   avatar: "/manager-avatar.jpg",
  // },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const isFirstTestimonial = currentIndex === 0;
  const isLastTestimonial = currentIndex === testimonials.length - 1;

  useEffect(() => {
    const scrollContainer = testimonialRef.current;
    if (scrollContainer) {
      const scrollAmount = currentIndex * scrollContainer.offsetWidth;
      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const nextTestimonial = () => {
    if (isLastTestimonial) return;
    setCurrentIndex(prev => prev + 1);
  };

  const prevTestimonial = () => {
    if (isFirstTestimonial) return;
    setCurrentIndex(prev => prev - 1);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="bg-white dark:bg-stone-900 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-bold text-4xl mb-6">
          Testimonials
          <hr className="w-12 h-1 mx-auto my-4 bg-teal-500 border-0 rounded-full" />
        </h2>

        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          What colleagues and mentors say about working with me
        </p>

        <div className="relative">
          <div 
            ref={testimonialRef}
            className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none' }}
          >
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx}
                className="flex-shrink-0 w-full px-4 snap-center"
              >
                <div className="bg-gray-50 dark:bg-stone-800 p-8 rounded-xl shadow-md max-w-2xl mx-auto">
                  <div className="flex items-center mb-6">
                    <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-teal-500">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <FaQuoteLeft className="text-teal-400/20 text-4xl absolute -top-2 -left-2" />
                    <p className="text-gray-700 dark:text-gray-300 relative z-10">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={prevTestimonial}
            disabled={isFirstTestimonial}
            className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-stone-800 p-2 rounded-full shadow-md transition-colors ${
              isFirstTestimonial 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-teal-100 dark:hover:bg-teal-900/50'
            }`}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className={`text-xl ${
              isFirstTestimonial 
                ? 'text-gray-400 dark:text-gray-600' 
                : 'text-teal-600 dark:text-teal-400'
            }`} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            disabled={isLastTestimonial}
            className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-stone-800 p-2 rounded-full shadow-md transition-colors ${
              isLastTestimonial 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-teal-100 dark:hover:bg-teal-900/50'
            }`}
            aria-label="Next testimonial"
          >
            <FaChevronRight className={`text-xl ${
              isLastTestimonial 
                ? 'text-gray-400 dark:text-gray-600' 
                : 'text-teal-600 dark:text-teal-400'
            }`} />
          </button>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToTestimonial(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === idx 
                  ? 'bg-teal-600 dark:bg-teal-400' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Want to see more professional feedback?
          </p>
          <a
            href="#contact"
            className="inline-block border border-teal-600 text-teal-600 dark:text-teal-400 hover:bg-teal-600 hover:text-white dark:hover:bg-teal-700 font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Request References
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;