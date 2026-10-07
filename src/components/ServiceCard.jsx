import React from 'react';
import * as LucideIcons from 'lucide-react';

export default function ServiceCard({ service }) {
  const IconComponent = LucideIcons[service.icon] || LucideIcons.Code2;

  return (
    <div className="flex flex-col p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all duration-300 group hover:shadow-lg">
      <div className="w-12 h-12 rounded-xl bg-sky-500/10 dark:bg-sky-500/15 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
        <IconComponent className="w-6 h-6" />
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
        {service.title}
      </h3>

      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1">
        {service.description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-mono px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
