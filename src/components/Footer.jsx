import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white/50 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 py-10 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
            <span className="text-lg">🌴</span>
            <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
              {personalInfo.name}
            </span>
          </div>
          <p className="font-body text-xs text-slate-400">
            © {currentYear} {personalInfo.name}. Built with React, Vite & Tailwind CSS.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-heading text-xs font-medium text-slate-500 hover:text-rose-500 dark:text-slate-400 dark:hover:text-rose-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:text-rose-500 border border-slate-200 dark:border-slate-800 transition-colors"
            aria-label="GitHub profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:text-teal-500 border border-slate-200 dark:border-slate-800 transition-colors"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            type="button"
            className="p-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-rose-500 dark:hover:bg-rose-500 dark:hover:text-white transition-all shadow-sm"
            aria-label="Back to top"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
