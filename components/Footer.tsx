import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gray-1000 text-gray-500 text-sm border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary-600 rounded md:rounded-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-sm" />
          </div>
          <span className="font-bold text-gray-200">Ottopad Technologies</span>
        </div>
        <nav className="flex gap-8" aria-label="Social media links">
          <Link
            href="https://twitter.com/ottopad"
            className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>
          <Link
            href="https://linkedin.com/company/ottopad"
            className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link
            href="https://instagram.com/ottopad"
            className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
        </nav>
        <div>
          © {currentYear} &middot; Made with precision in Nairobi.
        </div>
      </div>
    </footer>
  );
}
