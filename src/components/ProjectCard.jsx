import React, { useState } from 'react';
import { Github, ExternalLink, Folder, Terminal } from 'lucide-react';
import Button from './Button';

export default function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col h-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all duration-300 overflow-hidden group shadow-sm hover:shadow-xl">
      
      {/* Project Image / Visual Header */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950 border-b border-slate-200 dark:border-slate-800/80">
        
        {project.image && !imageError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500 brightness-95 dark:brightness-90 group-hover:brightness-100"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${project.accentColor} p-6 flex flex-col justify-between`}>
            <div className="relative z-10 flex items-center justify-between">
              <div className="p-2 rounded-lg bg-slate-900/90 text-sky-400 border border-slate-800 shadow-md">
                <Folder className="w-5 h-5" />
              </div>
            </div>
            <div className="relative z-10 my-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-mono">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>{project.id}.app</span>
              </div>
            </div>
          </div>
        )}

        {/* Floating Category Badge Overlay */}
        <div className="absolute top-3 right-3 z-10">
          <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-slate-950/80 text-sky-300 border border-slate-700/80 backdrop-blur-md shadow-md">
            {project.badge}
          </span>
        </div>

        {/* Category Label Overlay */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950/80 text-slate-300 border border-slate-800 backdrop-blur-sm">
            {project.category}
          </span>
        </div>

      </div>

      {/* Card Content Body */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons Footer */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
          <Button
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            icon={Github}
            className="flex-1"
          >
            Code
          </Button>

          <Button
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
            icon={ExternalLink}
            className="flex-1"
          >
            Live Demo
          </Button>
        </div>

      </div>

    </div>
  );
}
