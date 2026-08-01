"use client";

import React from "react";

export default function RestaurantOSHero() {
  return (
    <section className="mx-auto max-w-7xl px-6 md:px-8 py-6 md:py-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
        
        {/* Left Column: Product Information */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 md:space-y-8">
          {/* Badge */}
          <div className="inline-flex">
            <div className="flex items-center gap-2 bg-[#FFF3EF] px-3.5 py-1.5 rounded-full select-none">
              <span className="h-2 w-2 rounded-full bg-[#FF4F18]"></span>
              <span className="text-[11px] md:text-[12px] font-extrabold uppercase tracking-wider text-[#FF4F18]">
                Restaurant Operating System
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-[850] tracking-tight text-[#111111] leading-[1.15]">
            Manage rush hours,
            <br />
            <span className="text-[#FF4F18]">not rush.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-zinc-650 leading-relaxed">
            From lightning-fast billing counters and kitchen display screens to automated inventory auto-deduction and multi-outlet reporting — Digitory helps you operate smarter and grow profitably.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 items-center">
            <button className="rounded-full bg-[#FF4F18] px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-205 hover:bg-[#E03F0D] shadow-[0_8px_20px_rgba(255,79,24,0.35)] hover:shadow-[0_10px_24px_rgba(255,79,24,0.45)] active:scale-[0.98] cursor-pointer">
              Book a Live Demo
            </button>
            <button className="rounded-full bg-[#F1F3F5] text-zinc-800 px-7 py-3.5 text-[15px] font-bold transition-all duration-205 hover:bg-[#E4E6E8] active:scale-[0.98] flex items-center gap-1.5 cursor-pointer">
              Explore Features <span className="text-zinc-650 font-normal">↓</span>
            </button>
          </div>

          {/* Trust and Social Proof */}
          <div className="flex items-center gap-4 pt-6 border-t border-zinc-100">
            <div className="flex -space-x-3 select-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ECECEC] text-zinc-650 font-extrabold text-[11px] border-2 border-white shadow-2xs">
                R
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF3EF] text-[#FF4F18] font-extrabold text-[11px] border-2 border-white shadow-2xs">
                C
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFE5D9] text-[#FF4F18] font-extrabold text-[11px] border-2 border-white shadow-2xs">
                B
              </div>
            </div>
            <p className="text-[13px] text-zinc-500 font-medium leading-relaxed max-w-sm">
              Trusted by 500+ restaurants, cafés, bars, and cloud kitchens across India.
            </p>
          </div>
        </div>

        {/* Right Column: POS Terminal Static Mockup (Matches Uploaded Image) */}
        <div className="lg:col-span-6 flex justify-center w-full">
          <div className="w-full max-w-[500px] bg-[#0C0D0E] rounded-[32px] p-6 md:p-8 text-white shadow-2xl border border-zinc-800/30 flex flex-col gap-6 relative select-none">
            
            {/* 1. Terminal Topbar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <span className="text-[11px] font-extrabold tracking-wider text-[#A3A3A3] uppercase">
                  POS Terminal #01 • Main Floor
                </span>
              </div>
              <div className="px-2.5 py-1 rounded-full border border-[#FF4F18]/40 bg-[#FF4F18]/5 text-[#FF4F18] text-[10px] font-extrabold tracking-wider uppercase">
                Live Session
              </div>
            </div>

            {/* 2. Active Table Selection (Static) */}
            <div>
              <span className="text-[10px] font-extrabold text-[#777] tracking-widest block mb-2.5 uppercase">
                Select Active Table:
              </span>
              <div className="grid grid-cols-3 gap-3">
                {/* Table 01 */}
                <div className="flex flex-col items-center justify-center py-3.5 px-3 rounded-2xl border bg-[#18191B] border-zinc-800 text-zinc-300">
                  <span className="text-sm font-extrabold">Table 01</span>
                  <span className="text-[10px] font-bold mt-1 text-white">Ready</span>
                </div>

                {/* Table 04 - Selected */}
                <div className="flex flex-col items-center justify-center py-3.5 px-3 rounded-2xl border bg-[#FF4F18] border-[#FF4F18] text-white shadow-[0_4px_14px_rgba(255,79,24,0.4)]">
                  <span className="text-sm font-extrabold">Table 04</span>
                  <span className="text-[10px] font-bold mt-1 text-white/80">Busy (3 items)</span>
                </div>

                {/* Table 09 */}
                <div className="flex flex-col items-center justify-center py-3.5 px-3 rounded-2xl border bg-[#18191B] border-zinc-800 text-zinc-300">
                  <span className="text-sm font-extrabold">Table 09</span>
                  <span className="text-[10px] font-bold mt-1 text-white">Billing</span>
                </div>
              </div>
            </div>

            {/* 3. Fast Billing Shortcuts (Static) */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[10px] font-extrabold text-[#777] tracking-widest uppercase">
                  Fast Billing Shortcuts:
                </span>
                <span className="text-xs font-black text-[#FF4F18] uppercase tracking-wide">
                  Total: ₹ 670
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <div className="flex justify-between items-center py-2.5 px-4 bg-[#18191B] border border-zinc-850 rounded-xl">
                  <span className="text-xs font-bold text-zinc-300">+ Paneer Masala</span>
                  <span className="text-xs font-black text-[#A3A3A3]">₹280</span>
                </div>
                <div className="flex justify-between items-center py-2.5 px-4 bg-[#18191B] border border-zinc-850 rounded-xl">
                  <span className="text-xs font-bold text-zinc-300">+ Butter Naan</span>
                  <span className="text-xs font-black text-[#A3A3A3]">₹70</span>
                </div>
                <div className="flex justify-between items-center py-2.5 px-4 bg-[#18191B] border border-zinc-850 rounded-xl">
                  <span className="text-xs font-bold text-zinc-300">+ Chicken Biryani</span>
                  <span className="text-xs font-black text-[#A3A3A3]">₹320</span>
                </div>
                <div className="flex justify-between items-center py-2.5 px-4 bg-[#18191B] border border-zinc-850 rounded-xl">
                  <span className="text-xs font-bold text-zinc-300">+ Mango Lassi</span>
                  <span className="text-xs font-black text-[#A3A3A3]">₹110</span>
                </div>
              </div>
            </div>

            {/* 4. Order List Receipt (Static matching reference image) */}
            <div className="bg-[#131416] rounded-2xl p-4 border border-zinc-900 flex-grow min-h-[140px] flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-xs font-semibold text-zinc-300">
                  <span>1x Paneer Butter Masala</span>
                  <span className="font-extrabold text-zinc-400">₹280</span>
                </div>
                <div className="flex justify-between items-center text-xs font-semibold text-zinc-300">
                  <span>2x Butter Naan</span>
                  <span className="font-extrabold text-zinc-400">₹140</span>
                </div>
                <div className="flex justify-between items-center text-xs font-semibold text-zinc-300">
                  <span>1x Chicken Biryani</span>
                  <span className="font-extrabold text-zinc-400">₹250</span>
                </div>
              </div>
            </div>

            {/* 5. KDS Status Bar (Static) */}
            <div className="flex items-center justify-between bg-[#18191B]/80 px-4 py-3 rounded-2xl border border-zinc-800">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="text-[11px] font-bold text-zinc-400">
                  KDS Station #2 (Tandoor)
                </span>
              </div>
              <span className="bg-[#FFF3EF] text-[#FF4F18] text-[10px] font-extrabold px-2.5 py-1 rounded-lg">
                Prep: 03:42 mins
              </span>
            </div>

            {/* 6. Dispatch Button (Static) */}
            <button className="w-full py-4 rounded-2xl text-[13px] font-extrabold tracking-wide uppercase transition-all duration-200 flex items-center justify-center gap-2 select-none bg-[#FF4F18] hover:bg-[#E03F0D] text-white shadow-[0_8px_20px_rgba(255,79,24,0.3)] hover:shadow-[0_10px_24px_rgba(255,79,24,0.4)] active:scale-[0.98] cursor-pointer">
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
              Dispatch Order to KDS & Print Ticket
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
