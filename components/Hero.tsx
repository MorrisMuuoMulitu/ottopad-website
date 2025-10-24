import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-30%,#bef26420,transparent)]" />
      
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 shadow-sm text-zinc-600 text-xs font-bold tracking-wider uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Nairobi&apos;s Premier Dev Agency
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-zinc-900 leading-[1.1]">
            We craft digital <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              masterpieces.
            </span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Ottopad blends Silicon Savannah innovation with world-class engineering to build software that defines brands and scales businesses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="min-w-[180px] px-8 py-4 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              Let&apos;s Talk{' '}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="#work"
              className="min-w-[180px] px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-full font-medium hover:border-zinc-300 hover:bg-zinc-50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
