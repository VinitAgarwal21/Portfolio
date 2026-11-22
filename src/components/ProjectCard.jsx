import React, { useState } from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

export default function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const hasValidImage = project.image && project.image.trim() !== '' && !imgError;

  return (
    <article className="group glass-card rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 flex flex-col h-full shadow-sm hover:shadow-md">
      
      {/* Image Container */}
      <div className="relative w-full h-48 overflow-hidden bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
        {project.badge && (
          <div className="absolute top-3 right-3 z-10 px-2.5 py-0.5 rounded-full bg-slate-900/80 dark:bg-slate-950/80 backdrop-blur-md text-[11px] font-heading font-medium text-white shadow">
            {project.badge}
          </div>
        )}

        {hasValidImage ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={() => setImgError(true)}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          /* Clean, elegant placeholder fallback */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-rose-500 to-purple-600 flex items-center justify-center text-white mb-2 shadow-sm">
              <Code2 className="w-6 h-6" />
            </div>
            <span className="font-heading text-xs font-semibold text-slate-700 dark:text-slate-300">
              Source Preview
            </span>
            <span className="font-body text-xs text-slate-400 mt-0.5">
              {project.title.split('//')[0]}
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white group-hover:text-rose-500 transition-colors mb-1">
            {project.title}
          </h3>

          {project.tagline && (
            <p className="font-heading text-xs font-medium text-rose-500 dark:text-rose-400 mb-2.5">
              {project.tagline}
            </p>
          )}

          <p className="font-body text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-md text-xs font-body bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-heading text-xs font-semibold text-white bg-slate-900 dark:bg-slate-800 hover:bg-rose-500 dark:hover:bg-rose-500 transition-colors shadow-sm"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-rose-500 hover:text-rose-500 transition-colors"
              aria-label={`Live demo of ${project.title}`}
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
