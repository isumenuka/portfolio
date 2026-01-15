import React, { useRef, useState } from 'react';
import { Reveal } from '../ui/TextAnimations';
import VariableProximity from '../ui/VariableProximity';
import Stepper, { Step } from '../ui/Stepper';

const Contact: React.FC = () => {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form Submitted:', formData);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      // Reset form or show success message
      // simple mailto fallback
      window.location.href = `mailto:contact@isumenuka.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <footer id="contact" className="py-24 px-4 sm:px-6 border-t border-white/10 bg-black text-center">
        <Reveal>
          <div className="max-w-xl mx-auto p-12 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-cyan-400 mb-4">Message Sent!</h2>
            <p className="text-gray-300 text-lg mb-8">Thank you for reaching out. I'll get back to you as soon as possible.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-colors"
            >
              Send Another
            </button>
          </div>
        </Reveal>
      </footer>
    );
  }

  return (
    <footer id="contact" className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 relative border-t border-white/10 bg-black">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div ref={containerRef} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white" style={{ minHeight: '1.2em' }}>
              <VariableProximity
                label="Let's Connect"
                className="cursor-default"
                fromFontVariationSettings="'wght' 500, 'opsz' 20"
                toFontVariationSettings="'wght' 900, 'opsz' 40"
                containerRef={containerRef}
                radius={150}
                falloff="exponential"
              />
            </h2>
            <div className="text-lg text-gray-400 max-w-2xl mx-auto" style={{ minHeight: '1.5em' }}>
              <VariableProximity
                label="Follow the steps below to send me a message directly."
                className="cursor-default"
                fromFontVariationSettings="'wght' 400, 'opsz' 15"
                toFontVariationSettings="'wght' 700, 'opsz' 20"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </div>
          </div>

          <div className="w-full">
            <Stepper
              onFinalStepCompleted={handleSubmit}
              nextButtonText="Next Step"
              backButtonText="Go Back"
              stepCircleContainerClassName="bg-black/50 backdrop-blur-md border border-white/10"
              contentClassName="pt-4 pb-8"
              footerClassName="flex justify-end"
            >
              {/* Step 1: Personal Info */}
              <Step>
                <div className="grid gap-6">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">My Details</h3>
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all text-white placeholder:text-gray-600"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all text-white placeholder:text-gray-600"
                    />
                  </div>
                </div>
              </Step>

              {/* Step 2: Message Content */}
              <Step>
                <div className="grid gap-6">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">The Message</h3>
                  <div className="grid gap-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration"
                      className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all text-white placeholder:text-gray-600"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell me about your idea..."
                      className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all text-white placeholder:text-gray-600 resize-none"
                    />
                  </div>
                </div>
              </Step>

              {/* Step 3: Review */}
              <Step>
                <div className="grid gap-6">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">Review & Send</h3>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-4">
                    <div>
                      <span className="text-sm text-gray-500 block">From</span>
                      <p className="text-white text-lg">{formData.name} <span className="text-gray-500 text-sm">({formData.email})</span></p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 block">Subject</span>
                      <p className="text-white text-lg">{formData.subject}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 block">Message</span>
                      <p className="text-gray-300 italic">"{formData.message}"</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 text-center">
                    Ready to launch? Click 'Complete' below to send via email client.
                  </p>
                </div>
              </Step>
            </Stepper>
          </div>

          <div className="text-gray-600 text-sm text-center mt-16">
            <p>&copy; {new Date().getFullYear()} Isum Enuka. All rights reserved.</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Contact;