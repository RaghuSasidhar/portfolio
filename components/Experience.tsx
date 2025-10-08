
import React from 'react';
import { experience } from '../data';
import type { ExperienceItem } from '../types';

const WorkIcon = () => (
    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const EducationIcon = () => (
    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
    </svg>
);

const CertificationIcon = () => (
    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
);

const getIconForType = (type: ExperienceItem['type']) => {
    switch(type) {
        case 'work': return <WorkIcon />;
        case 'education': return <EducationIcon />;
        case 'certification': return <CertificationIcon />;
        default: return null;
    }
};

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-20 lg:py-32 bg-slate-900/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center scroll-animate">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">My Journey</h2>
                    <p className="text-lg text-slate-400 mb-12">
                        A timeline of my professional career, education, and key certifications.
                    </p>
                </div>

                <div className="relative border-l-2 border-slate-700 ml-6 md:ml-0 md:mx-auto">
                    {experience.map((item, index) => (
                        <div key={index} className="mb-10 ml-10 md:ml-0 scroll-animate">
                           <div className="absolute -left-5 md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-slate-800 rounded-full mt-1.5 -ml-1 border-2 border-cyan-400 flex items-center justify-center">
                               {getIconForType(item.type)}
                            </div>
                            <div className={`p-6 bg-slate-800 rounded-lg shadow-md md:w-[45%] ${index % 2 === 0 ? 'md:ml-auto md:mr-12' : 'md:mr-auto md:ml-12'}`}>
                                <time className="text-sm font-semibold text-cyan-400">{item.date}</time>
                                <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                                <h4 className="text-md font-medium text-slate-400 mb-2">{item.company}</h4>
                                <p className="text-slate-300">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
