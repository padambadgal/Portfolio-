import React, { useState } from 'react';
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Terminal,
  Copy,
  Check,
  Code2,
  Sparkles,
  Database,
  Server,
  Layers,
  Cpu
} from 'lucide-react';
import Button from './Button';
import { siteConfig } from '../data/siteConfig';

const techBadges = [
  { name: 'React', color: 'text-cyan-700 bg-cyan-50 dark:text-cyan-300 dark:bg-cyan-950/60 border-cyan-200 dark:border-cyan-800/80 shadow-xs' },
  { name: 'Node.js', color: 'text-emerald-700 bg-emerald-50 dark:text-emerald-300 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800/80 shadow-xs' },
  { name: 'Express', color: 'text-slate-800 bg-slate-100 dark:text-slate-200 dark:bg-slate-800/80 border-slate-300 dark:border-slate-700 shadow-xs' },
  { name: 'MongoDB', color: 'text-green-700 bg-green-50 dark:text-green-300 dark:bg-green-950/60 border-green-200 dark:border-green-800/80 shadow-xs' },
  { name: 'JavaScript', color: 'text-amber-800 bg-amber-50 dark:text-amber-300 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800/80 shadow-xs' },
  { name: 'Tailwind CSS', color: 'text-sky-700 bg-sky-50 dark:text-sky-300 dark:bg-sky-950/60 border-sky-200 dark:border-sky-800/80 shadow-xs' },
];

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `const developer = {
  name: "Padam",
  role: "MERN Stack Developer",
  status: "Available for Hire",
  stack: [
    "React",
    "Node.js",
    "Express",
    "MongoDB"
  ],
  passion: "Building Scalable Web Apps"
};`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative pt-28 pb-10 lg:pt-36 lg:pb-12 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {siteConfig.availabilityBadge}
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-500">{siteConfig.name}</span>
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-200">
                MERN Stack Developer
              </p>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
              I build modern, scalable and user-friendly web applications using React, Node.js, Express.js and MongoDB.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={ArrowRight}
              >
                View My Projects
              </Button>

              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                icon={Mail}
              >
                Let's Work Together
              </Button>
            </div>

            {/* Social & Contact Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Connect:
              </span>
              <a
                href={siteConfig.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.socialLinks.email}`}
                aria-label="Email Me"
                className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Technology Badges */}
            <div className="pt-2">
              <p className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">
                Core Stack Technologies
              </p>
              <div className="flex flex-wrap gap-2.5">
                {techBadges.map((badge) => (
                  <span
                    key={badge.name}
                    className={`text-xs px-3 py-1.5 rounded-lg font-mono font-semibold border transition-all duration-200 hover:scale-105 ${badge.color}`}
                  >
                    {badge.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Hero Visual - Code Window */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Floating Decorative Badges */}
              <div className="absolute -top-4 -left-4 z-20 hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs font-mono px-3 py-1.5 rounded-lg border border-slate-700 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Full-Stack Ready</span>
              </div>

              <div className="absolute -bottom-4 -right-4 z-20 hidden sm:flex items-center gap-2 bg-sky-950 text-sky-300 text-xs font-mono px-3 py-1.5 rounded-lg border border-sky-800 shadow-lg">
                <Database className="w-3.5 h-3.5 text-sky-400" />
                <span>MongoDB & Node.js</span>
              </div>

              {/* Code Window Container */}
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-800 text-slate-100 font-mono text-sm">

                {/* Editor Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="ml-2 text-xs text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-sky-400" />
                      developer.js
                    </span>
                  </div>
                  <button
                    onClick={copyCode}
                    title="Copy code"
                    className="text-slate-400 hover:text-white p-1 rounded transition-colors focus:outline-none"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Editor Code View */}
                <div className="p-5 overflow-x-auto text-xs sm:text-sm leading-relaxed">
                  <pre className="text-slate-300 font-mono">
                    <code>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-amber-300">developer</span> = &#123;{'\n'}
                      {'  '}<span className="text-sky-400">name</span>: <span className="text-emerald-300">"Padam"</span>,{'\n'}
                      {'  '}<span className="text-sky-400">role</span>: <span className="text-emerald-300">"MERN Stack Developer"</span>,{'\n'}
                      {'  '}<span className="text-sky-400">status</span>: <span className="text-emerald-300">"Available for Hire"</span>,{'\n'}
                      {'  '}<span className="text-sky-400">stack</span>: [{'\n'}
                      {'    '}<span className="text-emerald-300">"React"</span>,{'\n'}
                      {'    '}<span className="text-emerald-300">"Node.js"</span>,{'\n'}
                      {'    '}<span className="text-emerald-300">"Express"</span>,{'\n'}
                      {'    '}<span className="text-emerald-300">"MongoDB"</span>{'\n'}
                      {'  '}],{'\n'}
                      {'  '}<span className="text-sky-400">passion</span>: <span className="text-emerald-300">"Building Scalable Web Apps"</span>{'\n'}
                      &#125;;
                    </code>
                  </pre>
                </div>

                {/* Editor Footer Bar */}
                <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>UTF-8</span>
                    <span>•</span>
                    <span>JavaScript ES6</span>
                  </div>
                  <span>{siteConfig.brand}</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
