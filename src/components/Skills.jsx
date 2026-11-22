import React, { useState } from 'react';
import { 
  Code2, 
  FileCode, 
  Terminal, 
  Database, 
  Layout, 
  Cpu, 
  Component, 
  Globe, 
  Palette, 
  Layers, 
  Zap, 
  Sparkles, 
  Server, 
  HardDrive, 
  Gauge, 
  Network, 
  Box, 
  GitBranch, 
  Cloud, 
  UploadCloud, 
  CheckCircle,
  Sliders
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Code2,
  FileCode,
  Terminal,
  Database,
  Layout,
  Cpu,
  Component,
  Globe,
  Palette,
  Layers,
  Zap,
  Sparkles,
  Server,
  HardDrive,
  Gauge,
  Network,
  Box,
  GitBranch,
  Cloud,
  UploadCloud,
  CheckCircle
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...skillCategories.map((c) => c.category)];

  const filteredCategories = activeTab === 'All'
    ? skillCategories
    : skillCategories.filter((c) => c.category === activeTab);

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Clean, Modern Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-heading font-semibold text-rose-500 uppercase tracking-widest block mb-2">
            Capabilities
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600">Technologies</span>
          </h2>
          <p className="mt-3 font-body text-slate-600 dark:text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
            The core languages, frameworks, and developer tools I leverage to engineer fast, scalable web products.
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((group) => {
            const getBarColor = (accent) => {
              if (accent === 'rose') return 'from-rose-500 to-pink-500';
              if (accent === 'teal') return 'from-teal-500 to-cyan-500';
              if (accent === 'amber') return 'from-amber-500 to-orange-500';
              return 'from-purple-500 to-indigo-500';
            };

            const getAccentBadge = (accent) => {
              if (accent === 'rose') return 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900/50';
              if (accent === 'teal') return 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-900/50';
              if (accent === 'amber') return 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/50';
              return 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-900/50';
            };

            return (
              <div
                key={group.category}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 shadow-sm"
              >
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                      {group.category}
                    </h3>
                    <p className="font-body text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {group.description}
                    </p>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-heading font-semibold border ${getAccentBadge(group.accent)}`}>
                    {group.skills.length} skills
                  </span>
                </div>

                <div className="space-y-4">
                  {group.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || Sliders;
                    return (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <IconComponent className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                            <span className="font-body text-sm font-medium text-slate-700 dark:text-slate-200">
                              {skill.name}
                            </span>
                          </div>
                          <span className="font-body text-xs text-slate-400 font-medium">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${getBarColor(group.accent)} transition-all duration-700`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
