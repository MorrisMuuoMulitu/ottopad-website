import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gray-1000 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f655,transparent)]" />
      
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900 border border-gray-700 text-gray-300 text-xs font-bold tracking-wider uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            Nairobi&apos;s Premier Dev Agency
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-gray-50 leading-[1.1]">
            We craft digital <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-400">
              masterpieces.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Ottopad blends Silicon Savannah innovation with world-class engineering to build software that defines brands and scales businesses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="min-w-[180px] px-8 py-4 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-all flex items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-1000"
            >
              Let&apos;s Talk{' '}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="#work"
              className="min-w-[180px] px-8 py-4 bg-gray-900 text-gray-200 border border-gray-700 rounded-full font-medium hover:bg-gray-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-1000"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
