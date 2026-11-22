import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ViceBackground from './components/ViceBackground';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Theme state: dark / light with localStorage and prefers-color-scheme
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  const [activeSection, setActiveSection] = useState('hero');

  // Apply theme class to document root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Active section tracking via IntersectionObserver for smooth scrollspy
  useEffect(() => {
    const sectionIds = ['hero', 'skills', 'experience', 'projects', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="relative min-h-screen text-slate-900 dark:text-slate-100 selection:bg-rose-500 selection:text-white transition-colors duration-300">
      {/* Subtle Atmospheric Sunset Background */}
      <ViceBackground />

      {/* Sticky Header & Navbar (Visitor-clean, zero admin clutter) */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Single-Page Content Sections */}
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
