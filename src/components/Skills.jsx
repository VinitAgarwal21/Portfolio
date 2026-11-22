import React, { useState } from 'react';
import { getTechLogo } from './TechLogos';
import { skillCategories, projects as defaultProjects } from '../data/portfolioData';
import { Sparkles, ArrowUpRight, FolderGit2 } from 'lucide-react';

export default function Skills({ projectsList }) {
  const [activeTab, setActiveTab] = useState('All');
  const [activeHoverSkill, setActiveHoverSkill] = useState(null);

  const allProjects = projectsList || defaultProjects;

  const categories = ['All', ...skillCategories.map((c) => c.category)];

  const filteredCategories = activeTab === 'All'
    ? skillCategories
    : skillCategories.filter((c) => c.category === activeTab);

  // Helper to dynamically match projects where this skill is used
  const getProjectsForSkill = (skill) => {
    if (skill.projects && skill.projects.length > 0) {
      return skill.projects;
    }

    const sName = skill.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    const matched = [];

    allProjects.forEach((p) => {
      const hasTag = (p.tags || []).some((tag) => {
        const cleanTag = tag.toLowerCase().replace(/[^a-z0-9]/g, '');
        return (
          cleanTag === sName ||
          cleanTag.includes(sName) ||
          sName.includes(cleanTag)
        );
      });

      if (hasTag && !matched.includes(p.title)) {
        matched.push(p.title);
      }
    });

    return matched;
  };

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-heading font-semibold text-rose-500 uppercase tracking-widest block mb-2">
            Interactive Stack
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600">Technologies</span>
          </h2>
          <p className="mt-3 font-body text-slate-600 dark:text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
            Hover or tap any technology icon to discover which projects it is utilized in.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                type="button"
                className={`px-4 py-1.5 rounded-full font-heading text-xs font-medium tracking-wide transition-all duration-200 ${
                  activeTab === cat
                    ? 'bg-rose-500 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categories & Logo Cards */}
        <div className="space-y-10">
          {filteredCategories.map((group) => (
            <div key={group.category} className="space-y-4">
              
              {/* Category Header */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 dark:border-slate-800">
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                    {group.category}
                  </h3>
                  <p className="font-body text-xs text-slate-500 dark:text-slate-400">
                    {group.description}
                  </p>
                </div>
                <span className="text-xs font-heading font-semibold text-slate-400">
                  {group.skills.length} technologies
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                {group.skills.map((skill) => {
                  const Logo = getTechLogo(skill.icon || skill.name);
                  const usedInProjects = getProjectsForSkill(skill);
                  const isHovered = activeHoverSkill === skill.name;

                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setActiveHoverSkill(skill.name)}
                      onMouseLeave={() => setActiveHoverSkill(null)}
                      onClick={() => setActiveHoverSkill(isHovered ? null : skill.name)}
                      className="group relative p-4 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800 hover:border-rose-400 dark:hover:border-rose-500/50 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer select-none"
                    >
                      {/* Logo Icon */}
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center p-2 mb-2 transition-transform duration-300 group-hover:scale-110">
                        <Logo className="w-9 h-9 drop-shadow-sm" />
                      </div>

                      {/* Skill Name */}
                      <span className="font-heading text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-rose-500 transition-colors">
                        {skill.name}
                      </span>

                      {/* Small project count indicator */}
                      <span className="text-[10px] font-body text-slate-400 mt-0.5">
                        {usedInProjects.length > 0 ? (
                          <span className="text-rose-500 dark:text-rose-400 font-medium">
                            {usedInProjects.length} {usedInProjects.length === 1 ? 'project' : 'projects'}
                          </span>
                        ) : (
                          <span>Core stack</span>
                        )}
                      </span>

                      {/* Small Semi-Opaque Floating Box (Reveals projects on hover) */}
                      <div
                        className={`absolute bottom-[108%] left-1/2 -translate-x-1/2 w-56 sm:w-64 max-w-[88vw] p-3.5 rounded-xl bg-slate-950/90 dark:bg-slate-900/95 backdrop-blur-md border border-slate-700/80 text-white shadow-2xl transition-all duration-200 z-40 pointer-events-none ${
                          isHovered
                            ? 'opacity-100 scale-100 translate-y-0 visible'
                            : 'opacity-0 scale-95 translate-y-1 invisible'
                        }`}
                      >
                        {/* Box Header */}
                        <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-800">
                          <Logo className="w-4 h-4 shrink-0" />
                          <span className="font-heading font-bold text-xs text-white">
                            {skill.name}
                          </span>
                          <span className="ml-auto text-[10px] font-body text-rose-400 font-medium">
                            {usedInProjects.length} {usedInProjects.length === 1 ? 'project' : 'projects'}
                          </span>
                        </div>

                        {/* Projects List */}
                        <div className="space-y-1.5 text-left">
                          <span className="font-heading text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">
                            Used in Projects:
                          </span>
                          {usedInProjects.length > 0 ? (
                            <ul className="space-y-1">
                              {usedInProjects.map((pName, pIdx) => (
                                <li
                                  key={pIdx}
                                  className="flex items-start gap-1.5 text-[11px] font-body text-slate-200 leading-snug"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1 shrink-0" />
                                  <span className="font-medium hover:text-rose-300 transition-colors truncate">
                                    {pName}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-[11px] font-body text-slate-400 italic">
                              Foundational engineering competency used across repositories.
                            </p>
                          )}
                        </div>

                        {/* Tooltip Arrow Pointer */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-950/90 dark:bg-slate-900/95 border-r border-b border-slate-700/80 rotate-45 -mt-1" />
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
