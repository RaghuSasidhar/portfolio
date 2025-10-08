
import React from 'react';

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-animate text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            I'm Mamillapalli C. S. Raghu, a student of computer science and engineering with a focus on machine learning and artificial intelligence. Using HTML, CSS, and JavaScript, I created basic projects like a calculator and a number guessing game because I genuinely enjoy examining how technology can address practical issues. I feel at ease using HTML, Excel, C/C++, and Python. I think that learning never ends, so I'm constantly interested in learning about new technologies and getting better every day. Making connections with like-minded individuals, gaining knowledge from practical experiences, and helping to develop significant tech-driven solutions are all things I'm looking forward to.
          </p>
          <a
            href="/placeholder-resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-slate-800 text-cyan-400 font-bold py-3 px-6 rounded-md hover:bg-slate-700 transition-all duration-300 border border-cyan-400/50"
          >
            <DownloadIcon className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
