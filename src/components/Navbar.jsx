import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme, activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Profile Picture */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-rose-500 rounded-lg p-1 relative z-20"
            aria-label={`${personalInfo.name} Home`}
          >
            {/* Profile Picture with Smooth Hover Expansion */}
            <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
              <img
                src={personalInfo.avatar || "/profile.jpg"}
                alt={personalInfo.name}
                className="w-9 h-9 rounded-xl object-cover ring-2 ring-rose-500/30 group-hover:ring-rose-500 shadow-sm transition-all duration-300 ease-out group-hover:scale-[2.1] group-hover:z-50 group-hover:shadow-2xl group-hover:shadow-rose-500/30 origin-center bg-slate-200 dark:bg-slate-800"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.nextElementSibling) {
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }
                }}
              />
              {/* Fallback avatar if image fails to load */}
              <div 
                style={{ display: 'none' }}
                className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-500 to-amber-400 items-center justify-center text-white font-heading font-bold text-xs shadow-sm transition-transform duration-300 group-hover:scale-[2.1] group-hover:z-50 group-hover:shadow-2xl"
              >
                {personalInfo.name ? personalInfo.name.split(' ').map(n => n[0]).slice(0, 2).join('') : 'VA'}
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-rose-500 transition-colors leading-tight">
                {personalInfo.name}
              </span>
              <span className="font-body text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-heading font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-rose-500 to-purple-600 shadow-sm font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-400'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Contact CTA + Theme Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-heading font-semibold text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900/50 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-all"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-xl px-6 py-6 transition-all duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`px-4 py-2.5 rounded-xl font-heading text-base font-medium flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-rose-500 text-white'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  <span>{link.name}</span>
                </a>
              );
            })}

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-3">
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-heading text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-rose-500" />
                <span>Call</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-rose-500 text-white font-heading text-xs font-semibold"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
