import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects as defaultProjects } from '../data/portfolioData';

export default function Projects({ projectsList }) {
  const currentProjects = projectsList || defaultProjects;
  const [selectedTag, setSelectedTag] = useState('ALL');

  const allTags = ['ALL', ...Array.from(new Set(currentProjects.flatMap((p) => p.tags || [])))].slice(0, 7);

  const filteredProjects = selectedTag === 'ALL'
    ? currentProjects
    : currentProjects.filter((p) => (p.tags || []).includes(selectedTag));

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-heading font-semibold text-rose-500 uppercase tracking-widest block mb-2">
            Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-amber-500 to-purple-600">Projects</span>
          </h2>
          <p className="mt-3 font-body text-slate-600 dark:text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
            A selection of web applications, cloud tools, and open-source software I've designed and engineered.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                type="button"
                className={`px-3.5 py-1.5 rounded-full font-heading text-xs font-medium tracking-wide transition-all duration-200 ${
                  selectedTag === tag
                    ? 'bg-rose-500 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
