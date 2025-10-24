import React from 'react';
import { Layers, LineChart, Zap, Globe2, ShieldCheck } from 'lucide-react';

export default function SocialProof() {
  const partners = [
    { icon: Layers, name: 'KiboStack' },
    { icon: LineChart, name: 'VentuRes' },
    { icon: Zap, name: 'SwiftPay' },
    { icon: Globe2, name: 'Nara Health' },
    { icon: ShieldCheck, name: 'Equity One' },
  ];

  return (
    <section className="py-12 border-y border-zinc-200/60 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-center text-xs font-semibold text-zinc-400 uppercase tracking-[0.2em] mb-10">
          Powering Africa&apos;s fastest growing teams
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center gap-2 font-bold text-zinc-800">
              <partner.icon className="w-6 h-6" aria-hidden="true" />
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
