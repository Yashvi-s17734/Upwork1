'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Solutions', href: '#' },
    { label: 'Restaurant Types', href: '#' },
    { label: 'Success Stories', href: '#' },
    { label: 'Resources', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <div className="sticky top-0 z-50 w-full px-4 pt-3 pb-1 md:px-8 md:pt-4 md:pb-2 bg-transparent">
      <header className="mx-auto max-w-7xl rounded-full bg-[#EAEAEA]/80 backdrop-blur-md pl-8 pr-4 py-3 flex items-center justify-between shadow-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/demologo.png"
            alt="Digitory Logo"
            width={18}
            height={18}
            className="h-4.5 w-auto object-contain"
            priority
          />
          <span className="text-[20px] font-extrabold tracking-tight text-black">
            Digitory
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium text-zinc-650 hover:text-black transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="#"
            className="rounded-full bg-[#FF4F18] px-6 py-2.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-[#E03F0D] shadow-[0_6px_16px_rgba(255,79,24,0.35)] hover:shadow-[0_8px_20px_rgba(255,79,24,0.45)] active:scale-[0.98]"
          >
            Book a demo
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 hover:bg-black/5 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden transition-all duration-200 ease-in-out ${isMenuOpen
          ? 'max-h-96 opacity-100 mt-3 border border-zinc-100 rounded-3xl bg-[#EAEAEA]/90 backdrop-blur-md p-6 shadow-lg'
          : 'max-h-0 opacity-0 overflow-hidden pointer-events-none'
          }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-[15px] font-medium text-zinc-700 hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 pt-4 border-t border-zinc-200">
            <Link
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-[#FF4F18] py-3 text-[15px] font-semibold text-white transition-all hover:bg-[#E03F0D] shadow-[0_6px_16px_rgba(255,79,24,0.35)]"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
