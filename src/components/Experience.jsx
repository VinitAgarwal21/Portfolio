import React from 'react';
import { Calendar, MapPin, ChevronRight, Briefcase } from 'lucide-react';
import { experiences as defaultExperiences } from '../data/portfolioData';

export default function Experience({ experiencesList }) {
  const currentExperiences = experiencesList || defaultExperiences;

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Clean Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-heading font-semibold text-teal-500 uppercase tracking-widest block mb-2">
            Career Journey
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-500 to-rose-500">Experience</span>
          </h2>
          <p className="mt-3 font-body text-slate-600 dark:text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
            A track record of high-impact engineering milestones, production deployments, and technical contributions.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 sm:ml-28 space-y-10">
          {currentExperiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-rose-500 group-hover:scale-125 transition-transform" />

              {/* Date stamp on the left for tablet & desktop */}
              <div className="hidden sm:block absolute -left-32 top-1 text-right w-24">
                <span className="font-heading text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                  {exp.period}
                </span>
                <span className="font-body text-[11px] text-slate-400">
                  {exp.location}
                </span>
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 shadow-sm">
                
                {/* Mobile Date Header */}
                <div className="sm:hidden flex items-center gap-2 text-xs font-heading text-slate-500 dark:text-slate-400 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>

                {/* Top Badges */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-heading font-medium bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900/50">
                    {exp.type || "Full-Time"}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-heading font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {exp.status || "Completed"}
                  </span>
                </div>

                {/* Role & Company */}
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  {exp.role}
                </h3>
                <div className="font-heading text-sm text-rose-500 font-semibold mb-3">
                  {exp.company}
                </div>

                {/* Description */}
                <p className="font-body text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Bullet Points */}
                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-2 text-sm font-body text-slate-600 dark:text-slate-300">
                        <ChevronRight className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Pills */}
                {exp.tech && exp.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md text-xs font-body bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
