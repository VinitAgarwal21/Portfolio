import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Send } from 'lucide-react';
import { personalInfo as defaultInfo } from '../data/portfolioData';

export default function Hero({ profileData }) {
  const personalInfo = profileData ? { ...defaultInfo, ...profileData } : defaultInfo;
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  // Typewriter effect cycle
  useEffect(() => {
    const titles = personalInfo.typewriterTitles;
    const currentFullTitle = titles[currentTitleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(currentFullTitle.substring(0, displayText.length + 1));
        setTypingSpeed(80);

        if (displayText === currentFullTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullTitle.substring(0, displayText.length - 1));
        setTypingSpeed(40);

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex, typingSpeed]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-16 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="max-w-4xl mx-auto w-full text-center relative z-20">

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 mb-8 backdrop-blur-md shadow-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-heading text-xs font-semibold tracking-wide">
            {personalInfo.status}
          </span>
        </div>

        {/* Big Clean Name */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-tight mb-4">
          <span className="text-slate-900 dark:text-white">
            {personalInfo.name.split(' ').slice(0, -1).join(' ')}{' '}
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-500">
            {personalInfo.name.split(' ').slice(-1).join(' ')}
          </span>
        </h1>

        {/* Animated Typewriter Subheading */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <p className="font-heading text-lg sm:text-2xl text-slate-700 dark:text-slate-300 font-semibold flex items-center">
            <span className="text-rose-500 mr-2">›</span>
            <span>{displayText}</span>
            <span className="w-2 h-5 sm:h-6 bg-rose-500 ml-1 inline-block animate-pulse" />
          </p>
        </div>

        {/* Short Bio */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-400 font-body leading-relaxed mb-10">
          {personalInfo.bio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-heading text-sm font-semibold text-white bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:opacity-95 shadow-soft-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>View Projects</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-heading text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-rose-400 dark:hover:border-rose-500 hover:text-rose-600 dark:hover:text-rose-400 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Contact Me</span>
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Stats Banner
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {personalInfo.stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:border-rose-500/40 dark:hover:border-rose-500/40 transition-all duration-200 text-center"
            >
              <div className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                {stat.value}
              </div>
              <div className="font-body text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#skills"
            className="p-2.5 rounded-full text-slate-400 hover:text-rose-500 transition-colors"
            aria-label="Scroll to Skills"
          >
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
