
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-slate-900 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(to_bottom,white_40%,transparent)]"></div>
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Mamillapalli C S Raghu Sasidhar
        </h1>
        <p className="mt-4 text-2xl md:text-3xl text-cyan-400 font-semibold">
          Student at NRI Institute of Technology
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-400">
          A computer science student with a focus on machine learning and artificial intelligence, passionate about building practical tech solutions.
        </p>
        <a href="#projects" className="mt-10 inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-transform duration-300 hover:scale-105">
          View My Work
        </a>
      </div>
       <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" aria-label="Scroll down">
          <svg className="w-6 h-6 text-slate-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
