
import React from 'react';
import { projects } from '../data';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center scroll-animate">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">My Projects</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
            Here are a few projects I've worked on recently. Want to see more? <a href="mailto:mamillapalliraghusasidhar@gmail.com" className="text-cyan-400 hover:underline">Email me</a>.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div key={index} className="scroll-animate" style={{ animationDelay: `${index * 150}ms` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
