import React from 'react';
import { skillsByCategory } from '../data';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center scroll-animate">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12"></div>
        </div>
        <div className="space-y-10">
          {skillsByCategory.map((category, catIndex) => (
            <div key={catIndex}>
              <h3
                className="text-2xl font-semibold text-cyan-400 mb-6 text-center scroll-animate"
                style={{ animationDelay: `${catIndex * 150}ms` }}
              >
                {category.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-slate-800 text-slate-300 py-2 px-5 rounded-md text-lg font-medium shadow-md border border-slate-700 scroll-animate transition-transform duration-300 hover:scale-105"
                    style={{ animationDelay: `${catIndex * 150 + (skillIndex + 1) * 75}ms` }}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;