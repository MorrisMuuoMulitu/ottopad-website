import React from 'react';
import Link from 'next/link';
import { Globe2, Smartphone, Cpu, Code2, ChevronRight } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: Smartphone, title: 'Mobile-First', desc: 'Responsive experiences optimized for varying local connection speeds.' },
    { icon: Cpu, title: 'Custom Software', desc: 'Bespoke internal tools to streamline your specific business operations.' },
  ];

  return (
    <section id="services" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Expertise</h2>
            <p className="text-zinc-500 max-w-md">
              Precision-engineered solutions tailored for the modern African digital landscape.
            </p>
          </div>
          <Link
            href="#contact"
            className="text-emerald-600 font-medium flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
          >
            View all services{' '}
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* Featured tall card */}
          <div className="md:row-span-2 p-8 md:p-10 rounded-[2rem] bg-zinc-900 text-white flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#10b98140,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-8">
                <Globe2 className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Web Platforms</h3>
              <p className="text-zinc-400 leading-relaxed">
                High-performance, SEO-optimized web applications built with React and Next.js, designed to convert visitors into loyal customers.
              </p>
            </div>
            <div className="relative z-10 mt-8 pt-8 border-t border-zinc-800">
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node', 'AWS'].map(tag => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-zinc-800 text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Standard cards */}
          {services.map((service, i) => (
            <div
              key={i}
              className="p-8 rounded-[2rem] bg-white border border-zinc-100 hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/40 transition-all duration-300 group"
            >
              <service.icon className="w-10 h-10 text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}

          {/* Wide card */}
          <div className="md:col-span-2 p-8 md:p-10 rounded-[2rem] bg-white border border-zinc-200/50 flex flex-col md:flex-row items-center gap-8 group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex-1 relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-zinc-900">E-Commerce & Fintech</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Seamless integration with M-Pesa, Stripe, and local payment gateways. We build secure storefronts that Kenyan customers trust.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-emerald-700 font-semibold group-hover:gap-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
              >
                Explore Solutions <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="w-full md:w-1/3 aspect-square relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-teal-50 rounded-3xl rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/50 flex items-center justify-center">
                <Code2 className="w-16 h-16 text-emerald-200" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
