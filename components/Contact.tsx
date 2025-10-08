
import React, { useState } from 'react';

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., API call)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-slate-900/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center scroll-animate">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-400 mb-8">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4 text-lg text-slate-400 mb-8">
                <div className="flex items-center gap-2">
                    <PhoneIcon className="w-5 h-5 text-cyan-400" />
                    <a href="tel:7995846706" className="hover:text-cyan-400">7995846706</a>
                </div>
                 <div className="flex items-center gap-2">
                    <MailIcon className="w-5 h-5 text-cyan-400" />
                    <a href="mailto:mamillapalliraghusasidhar@gmail.com" className="hover:text-cyan-400">mamillapalliraghusasidhar@gmail.com</a>
                </div>
            </div>
             <div className="flex items-center justify-center gap-3 text-sm text-slate-500 mb-12 text-center max-w-sm mx-auto">
             <LocationIcon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
             <span>7/199 in sivalayam, near bus stand, nuzvid, krishna district, andhra pradesh</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="scroll-animate">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full bg-slate-800 border border-slate-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full bg-slate-800 border border-slate-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition" />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
            <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full bg-slate-800 border border-slate-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"></textarea>
          </div>
          <div className="mt-8 text-center">
            <button type="submit" className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-transform duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
              Send Message
            </button>
          </div>
          {submitted && (
            <p className="text-center mt-4 text-green-400">Thank you for your message! I'll get back to you soon.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
