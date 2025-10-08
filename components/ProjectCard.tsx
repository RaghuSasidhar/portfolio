
import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg bg-slate-800 transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/20">
      <img src={project.imageUrl} alt={project.title} className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="p-6 relative text-white flex flex-col h-full">
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-2 text-cyan-400">{project.title}</h3>
          <p className="text-slate-300 mb-4 text-sm">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-slate-700 text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
       {project.projectUrl && (
         <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 bg-slate-900/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-cyan-500">
           <ExternalLinkIcon className="w-5 h-5" />
         </a>
       )}
    </div>
  );
};

export default ProjectCard;
