import React from 'react';
import Link from 'next/link';

export default function Approach() {
  const steps = [
    { title: 'Discovery', desc: 'We dive deep into your business goals, not just your feature list.' },
    { title: 'Agile Build', desc: 'Rapid iterations with constant feedback loops, keeping you in control.' },
    { title: 'Local Optimization', desc: 'Performance tuning for real-world African internet conditions and devices.' },
    { title: "Ongoing Support", desc: "We don't just launch and leave. We're your long-term tech partners." },
  ];

  return (
    <section id="approach" className="py-24 bg-zinc-950 text-zinc-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-8 leading-tight">
              Global quality, <br />
              <span className="text-zinc-500">Nairobi roots.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              We understand the nuance of the African market while adhering to Silicon Valley engineering standards.
            </p>
            <Link
              href="#contact"
              className="inline-flex px-6 py-3 rounded-full border border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700 transition-all text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              Learn about our process
            </Link>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 lg:pl-12">
            {steps.map((item, i) => (
              <div key={i} className="flex flex-col gap-4 items-start group">
                <span className="text-emerald-500/50 font-mono text-xl" aria-hidden="true">
                  0{i + 1}
                </span>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
