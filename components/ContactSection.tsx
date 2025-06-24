"use client";

import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formsubmit.co/ajax/kalkidantiru14@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _template: 'table',
          _subject: 'New message from your portfolio!'
        })
      });

      const data = await response.json();
      
      if (data.success === 'true') {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-8 md:px-16 bg-white dark:bg-stone-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center font-bold text-4xl mb-6">
          Get In Touch
          <hr className="w-12 h-1 mx-auto my-4 bg-teal-500 border-0 rounded-full" />
        </h2>
        
        <div className="bg-gray-50 dark:bg-stone-800 p-8 rounded-xl shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-stone-600 focus:ring-teal-500 focus:border-teal-500" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-stone-600 focus:ring-teal-500 focus:border-teal-500" 
                  required 
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-stone-600 focus:ring-teal-500 focus:border-teal-500" 
                required 
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
              <textarea 
                id="message" 
                name="message"
                rows={4} 
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-stone-600 focus:ring-teal-500 focus:border-teal-500" 
                required
              ></textarea>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus=== 'success' && (
                <div className="animate-fadeIn">
                  <p className="text-green-600 text-sm font-medium flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Message sent successfully!
                  </p>
                </div>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-sm">Failed to send message. Please try again.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;