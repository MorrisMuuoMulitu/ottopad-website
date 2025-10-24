import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Work() {
  return (
    <section id="work" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="lg:w-3/5">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] group">
              <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-zinc-900/0 transition-colors z-10" />
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000"
                alt="Fintech App Dashboard showcasing M-Ledger Pro interface"
                fill
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              {/* Floating Tag */}
              <div className="absolute top-8 left-8 z-20">
                <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-zinc-900 text-xs font-bold tracking-wider uppercase shadow-sm">
                  Featured Case Study
                </span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-2/5">
            <div className="flex gap-3 mb-6">
              <span className="text-emerald-600 font-medium">Fintech</span>
              <span className="text-zinc-300" aria-hidden="true">•</span>
              <span className="text-zinc-500">Mobile App</span>
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
              M-Ledger Pro
            </h3>
            <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
              We helped a leading Nairobi micro-lender digitize their entire loan disbursement process, 
              reducing processing time by 90% and serving 50k+ new customers in the first quarter.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10 py-8 border-y border-zinc-100">
              <div>
                <div className="text-3xl font-bold text-zinc-900 mb-1">-90%</div>
                <div className="text-sm text-zinc-500">Processing Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-zinc-900 mb-1">50k+</div>
                <div className="text-sm text-zinc-500">New Users</div>
              </div>
            </div>

            <button 
              className="group px-6 py-3 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all flex items-center gap-2 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              aria-label="Read full M-Ledger Pro case study"
            >
              Read Full Story{' '}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
