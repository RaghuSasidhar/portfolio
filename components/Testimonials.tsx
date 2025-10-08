
import React from 'react';
import { testimonials } from '../data';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center scroll-animate">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-12">What Others Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-lg shadow-lg flex flex-col scroll-animate"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex-grow">
                <svg className="w-10 h-10 text-cyan-400 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.333 8h-2.667v-4h2.667v4zM25.333 8h-2.667v-4h2.667v4zM29.333 12h-8c0-2.209 1.791-4 4-4h4v4zM13.333 12h-8c0-2.209 1.791-4 4-4h4v4zM13.333 28v-12h-10.667c0 4.418 3.582 8 8 8h2.667zM29.333 28v-12h-10.667c0 4.418 3.582 8 8 8h2.667z"></path>
                </svg>
                <p className="text-slate-300 italic">"{testimonial.quote}"</p>
              </div>
              <div className="mt-6">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
