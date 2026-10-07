import React from 'react';
import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';
import { services } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Services"
          title="What I Can Build"
          subtitle="Specialized frontend and full-stack web development services tailored for clients, startups, and local businesses."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}
