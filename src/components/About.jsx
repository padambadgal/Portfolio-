import React from 'react';
import SectionHeading from './SectionHeading';
import { siteConfig } from '../data/siteConfig';
import { Layout, Server, Database, GitBranch, ShieldCheck, CheckCircle2 } from 'lucide-react';

const corePillars = [
  { icon: Layout, title: "Frontend Development", desc: "Crafting modern, responsive React interfaces with Tailwind CSS" },
  { icon: Server, title: "Backend Development", desc: "Building scalable web servers using Node.js & Express framework" },
  { icon: Database, title: "REST APIs & MongoDB", desc: "Designing structured JSON API endpoints and MongoDB database schemas" },
  { icon: GitBranch, title: "Git & GitHub Workflow", desc: "Managing clean version control, repository branches, and code reviews" },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white dark:bg-slate-900/50 relative border-t border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          badge="About Me"
          title="Passionate MERN Stack Developer"
          subtitle="Crafting clean, responsive, and performance-oriented web applications to solve real-world digital problems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Summary & Bio */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Engineering modern web solutions from frontend to backend
            </h3>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Hello! I'm <strong className="text-slate-900 dark:text-white">{siteConfig.name}</strong>, a dedicated MERN Stack Developer focused on building clean, intuitive, and high-quality web applications.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              My core technical passion lies in combining React's interactive component ecosystem with Node.js and Express to construct seamless end-to-end full-stack web experiences. I take pride in clean code structure, responsive layouts across all viewports, and efficient RESTful APIs.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Frontend Development (React, JS, HTML/CSS)",
                "Backend Development (Node.js & Express)",
                "REST API Design & Integration",
                "MongoDB Database Schemas",
                "Responsive Web Design & Tailwind CSS",
                "Version Control (Git & GitHub)"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Core Pillars & Highlights */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {corePillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Editable Stats Counters Area */}
        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {siteConfig.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50">
              <p className="text-3xl sm:text-4xl font-extrabold text-sky-600 dark:text-sky-400 tracking-tight">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                {stat.label}
              </p>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
