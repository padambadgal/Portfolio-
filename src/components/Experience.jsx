import React from 'react';
import SectionHeading from './SectionHeading';
import { milestones } from '../data/experience';
import { BookOpen, Code2, Rocket, Briefcase, Calendar } from 'lucide-react';

const iconMap = {
  BookOpen,
  Code2,
  Rocket,
  Briefcase,
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Growth Timeline"
          title="Development Journey"
          subtitle="Key learning milestones, full-stack application builds, and freelancing evolution."
        />

        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Bar */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2"></div>

          <div className="space-y-12">
            {milestones.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Code2;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 z-10 w-9 h-9 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-md ring-4 ring-white dark:ring-slate-950">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  {/* Card Content */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all duration-300">
                      
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? 'sm:justify-end' : ''}`}>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                          <Calendar className="w-3 h-3" />
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className={`flex flex-wrap gap-1.5 ${isEven ? 'sm:justify-end' : ''}`}>
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
