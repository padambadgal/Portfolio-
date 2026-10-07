import React from 'react';
import SectionHeading from './SectionHeading';
import { siteConfig } from '../data/siteConfig';
import { Code2, Smartphone, Cpu, Zap, Users, Layers } from 'lucide-react';

const iconMap = {
  Code2,
  Smartphone,
  Cpu,
  Zap,
  Users,
  Layers,
};

export default function WhyChooseMe() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900/50 border-t border-b border-slate-200/60 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Value Proposition"
          title="Why Work With Me?"
          subtitle="Key principles that guide my web development process, code quality, and client deliverables."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.whyChooseMe.map((item) => {
            const IconComponent = iconMap[item.icon] || Code2;
            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
