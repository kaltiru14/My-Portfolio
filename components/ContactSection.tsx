"use client"; // Add this at the top if using React hooks

import React from 'react'; // Add this import

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-8 md:px-16 bg-white dark:bg-stone-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center font-bold text-4xl mb-6">
          Get In Touch
          <hr className="w-12 h-1 mx-auto my-4 bg-teal-500 border-0 rounded-full" />
        </h2>
        
        <div className="bg-gray-50 dark:bg-stone-800 p-8 rounded-xl shadow-md">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-stone-600 focus:ring-teal-500 focus:border-teal-500" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-stone-600 focus:ring-teal-500 focus:border-teal-500" required />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
              <input type="text" id="subject" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-stone-600 focus:ring-teal-500 focus:border-teal-500" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-stone-600 focus:ring-teal-500 focus:border-teal-500" required></textarea>
            </div>
            <button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-md transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; // Make sure this export exists