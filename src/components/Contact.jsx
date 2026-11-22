import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending message
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 7000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-heading font-semibold text-rose-500 uppercase tracking-widest block mb-2">
            Reach Out
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">Touch</span>
          </h2>
          <p className="mt-3 font-body text-slate-600 dark:text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
            Have a project in mind, an opportunity to discuss, or just want to connect? Feel free to reach out directly.
          </p>
        </div>

        {/* Two Prominent Action Buttons: Call Me (tel:) & Email Me (mailto:) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">

          {/* CALL ME BUTTON */}
          <a
            href={`tel:${personalInfo.phone}`}
            className="group glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-teal-500/50 hover:shadow-sm transition-all duration-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading text-xs text-slate-500 dark:text-slate-400 block font-medium">
                  Direct Line
                </span>
                <span className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-teal-500 transition-colors">
                  Call Me
                </span>
                <span className="font-body text-xs text-slate-400 block">
                  {personalInfo.phone}
                </span>
              </div>
            </div>
            <span className="text-xs font-heading font-medium text-teal-600 dark:text-teal-400 group-hover:translate-x-0.5 transition-transform">
              Dial →
            </span>
          </a>

          {/* EMAIL ME BUTTON */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="group glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-rose-500/50 hover:shadow-sm transition-all duration-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading text-xs text-slate-500 dark:text-slate-400 block font-medium">
                  Email Inbox
                </span>
                <span className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-rose-500 transition-colors">
                  Email Me
                </span>
                <span className="font-body text-xs text-slate-400 block">
                  {personalInfo.email}
                </span>
              </div>
            </div>
            <span className="text-xs font-heading font-medium text-rose-600 dark:text-rose-400 group-hover:translate-x-0.5 transition-transform">
              Write →
            </span>
          </a>
        </div>

        {/* Contact Form & Socials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Social Links (2 cols) */}
          <div className="lg:col-span-2 glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 space-y-6">
            <div>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                Connect Online
              </h3>
              <p className="font-body text-sm text-slate-500 dark:text-slate-400 mt-1">
                You can also find my profiles and open-source contributions across these platforms:
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-rose-500 hover:text-rose-500 transition-colors"
              >
                <Github className="w-4 h-4 text-slate-500" />
                <span className="font-heading text-xs font-semibold">GitHub</span>
              </a>

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-teal-500 hover:text-teal-500 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-slate-500" />
                <span className="font-heading text-xs font-semibold">LinkedIn</span>
              </a>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
              <span className="font-heading text-xs font-semibold text-rose-500 block mb-1">
                Location & Availability
              </span>
              <p className="font-body text-xs text-slate-600 dark:text-slate-400">
                Based in Una, Himachal Pradesh, open to internships and full time oppurtunities PAN India.
              </p>
            </div>
          </div>

          {/* Contact Form (3 cols) */}
          <div className="lg:col-span-3 glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800">

            {/* Success Toast */}
            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center flex items-center justify-center gap-2 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-heading text-xs font-semibold">
                  Message sent successfully! Thanks for reaching out — I will respond shortly.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-heading text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-slate-900 dark:text-slate-100 placeholder-slate-400 font-body text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-heading text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-slate-900 dark:text-slate-100 placeholder-slate-400 font-body text-sm outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block font-heading text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry or opportunity"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-slate-900 dark:text-slate-100 placeholder-slate-400 font-body text-sm outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-heading text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about what you have in mind..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-slate-900 dark:text-slate-100 placeholder-slate-400 font-body text-sm outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl font-heading text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-purple-600 hover:opacity-95 shadow-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
