import React from 'react';
import * as LucideIcons from 'lucide-react';

export default function SkillCard({ skill }) {
  // Dynamically select Lucide icon with fallback
  const IconComponent = LucideIcons[skill.icon] || LucideIcons.Code;

  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all duration-300 group hover:shadow-md">
      <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 border border-slate-200 dark:border-slate-700 group-hover:scale-110 transition-transform shrink-0">
        <IconComponent className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-base font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
          {skill.name}
        </h4>
        {skill.description && (
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
            {skill.description}
          </p>
        )}
      </div>
    </div>
  );
}
