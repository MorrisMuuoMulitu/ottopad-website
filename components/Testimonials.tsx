import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Voices from our partners</h2>
          <p className="text-zinc-500">We build long-term relationships, not just software.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Large Testimonial */}
          <div className="lg:col-span-8 p-10 md:p-12 bg-white rounded-[2.5rem] shadow-sm relative flex flex-col justify-between min-h-[400px]">
            <Quote className="text-emerald-500/10 w-32 h-32 absolute top-6 right-8 -rotate-12" aria-hidden="true" />
            <div className="relative z-10">
              <div className="flex gap-1 mb-8" aria-label="5 star rating">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} className="w-4 h-4 fill-emerald-500 text-emerald-500" aria-hidden="true" />
                ))}
              </div>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed text-zinc-900">
                &quot;Ottopad transformed our archaic system into a sleek, modern web app. Their ability to navigate local payment integrations while keeping the UI world-class is unmatched in Nairobi.&quot;
              </p>
            </div>
            <div className="flex items-center gap-4 mt-12">
              <div className="w-12 h-12 bg-zinc-100 rounded-full border border-zinc-200" />
              <div>
                <div className="font-bold text-zinc-900">Sarah Kimani</div>
                <div className="text-zinc-500 text-sm">CEO, TechSafari Ltd</div>
              </div>
            </div>
          </div>

          {/* Smaller Stacked Testimonials */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-8 bg-zinc-900 text-white rounded-[2.5rem] relative flex-1">
              <div className="flex gap-1 mb-6" aria-label="5 star rating">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" aria-hidden="true" />
                ))}
              </div>
              <p className="text-lg font-medium leading-relaxed mb-8 relative z-10">
                &quot;We needed an MVP in 6 weeks. Ottopad delivered it in 5. True engineering professionals.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-800 rounded-full" />
                <div>
                  <div className="font-bold text-white text-sm">David Omondi</div>
                  <div className="text-zinc-400 text-xs">Founder, Kibo Logistics</div>
                </div>
              </div>
            </div>
            <div className="p-8 bg-emerald-100 text-emerald-900 rounded-[2.5rem] relative">
              <div className="flex items-center justify-between">
                <div className="text-5xl font-bold tracking-tighter">
                  4.9<span className="text-2xl text-emerald-600/70">/5</span>
                </div>
                <div className="text-right">
                  <div className="font-bold">Clutch Rating</div>
                  <div className="text-sm text-emerald-700">Based on 40+ reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
