import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import SkillCard from './SkillCard';
import { skillCategories } from '../data/skills';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="My Skills"
          title="Technologies & Technical Capabilities"
          subtitle="A comprehensive overview of my core technical stack, developer tools, and database frameworks."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-sky-600 text-white shadow-md shadow-sky-500/20'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white dark:bg-slate-900/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-6 bg-sky-500 rounded-full inline-block"></span>
                  {category.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
