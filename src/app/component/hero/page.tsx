'use client';

import React from 'react';
import Link from 'next/link';

export default function Hero() {
  const trustCircles = [
    { text: 'R', bg: 'bg-[#ECECEC]', textCol: 'text-zinc-650' },
    { text: 'C', bg: 'bg-[#D2E9E9]', textCol: 'text-teal-600' },
    { text: 'B', bg: 'bg-[#FFE5D9]', textCol: 'text-orange-600' },
    { text: 'K', bg: 'bg-[#E8EAFF]', textCol: 'text-indigo-600' },
  ];


  return (
    <section className="mx-auto max-w-7xl px-6 md:px-8 pt-4 pb-10 md:pt-8 md:pb-16 lg:pt-10 lg:pb-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
        
        {/* Left Copy Column */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 md:space-y-8">
          {/* Tagline */}
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF4F18]"></span>
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#FF4F18]">
              Built for restaurants, cafés & cloud kitchens
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 leading-[1.1]">
            Manage rush hours,
            <br />
            <span className="text-[#FF4F18]">not rush.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-zinc-600 max-w-xl leading-relaxed">
            From billing and inventory to customer loyalty and reporting, we help you operate smarter and grow profitably
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="#"
              className="rounded-full bg-[#FF4F18] px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-[#E03F0D] shadow-[0_8px_20px_rgba(255,79,24,0.35)] hover:shadow-[0_10px_24px_rgba(255,79,24,0.45)] active:scale-[0.98]"
            >
              Book a demo
            </Link>
            <Link
              href="#"
              className="rounded-full border border-zinc-200 bg-white px-8 py-4 text-base font-semibold text-zinc-800 transition-colors duration-200 hover:bg-zinc-50 active:scale-[0.98]"
            >
              See how it works
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-4 pt-4 border-t border-zinc-100">
            <div className="flex -space-x-3">
              {trustCircles.map((circle, idx) => (
                <div
                  key={idx}
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${circle.bg} ${circle.textCol} font-extrabold text-xs border-2 border-white`}
                >
                  {circle.text}
                </div>
              ))}
            </div>
            <p className="text-xs md:text-sm text-zinc-500 max-w-xs leading-normal">
              Trusted by restaurants, cafés, bars, breweries and cloud kitchens across India.
            </p>
          </div>
        </div>

        {/* Right WhatsApp Mockup Column */}
        <div className="lg:col-span-6 flex justify-center w-full">
          <img
            src="/image.png"
            alt="WhatsApp Group Chat Mockup"
            className="w-full max-w-[440px] h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}
