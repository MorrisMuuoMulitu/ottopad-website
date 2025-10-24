import React from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ isScrolled, mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const navItems = ['Services', 'Work', 'Approach', 'Contact'];

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl border-b border-zinc-200/50 py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform duration-300">
              <div className="w-3 h-3 bg-emerald-500 rounded-sm -rotate-3" />
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900">
              ottopad<span className="text-emerald-600">.</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 rounded-full hover:bg-zinc-100 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                {item}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-zinc-200">
              <Link
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-zinc-50 text-sm font-medium rounded-full hover:bg-zinc-800 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                Start Project{' '}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </nav>

          <button
            className="md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white px-6 pt-24 pb-6 flex flex-col md:hidden">
          <nav className="flex flex-col gap-6 text-lg font-medium">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-zinc-100 pb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                {item}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 bg-emerald-600 text-white py-3 rounded-xl text-center font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              Start Your Project
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
