'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';

export default function Updates() {
  const updatesList = [
    {
      date: '14',
      month: 'SEP',
      category: 'PRODUCT UPDATE',
      title: 'AI Sales Forecasting Now Live',
      desc: 'Predict peak hours, optimize staffing, and prepare inventory with intelligent sales forecasting.',
    },
    {
      date: '02',
      month: 'OCT',
      category: 'NEW FEATURE',
      title: 'Real-Time Kitchen Display System',
      desc: 'Improve kitchen coordination with instant order updates and live preparation tracking.',
    },
    {
      date: '18',
      month: 'OCT',
      category: 'PLATFORM UPDATE',
      title: 'Multi-Outlet Management Released',
      desc: 'Monitor sales, inventory, staff, and operations across all restaurant locations from one dashboard.',
    },
    {
      date: '30',
      month: 'OCT',
      category: 'INTEGRATION',
      title: 'Swiggy & Zomato Order Sync',
      desc: 'Automatically receive and manage delivery orders from leading food delivery platforms in one place.',
    },
  ];

  const [selectedUpdate, setSelectedUpdate] = useState<typeof updatesList[0] | null>(null);
  const [mounted, setMounted] = useState(false);

  const handleItemClick = (item: typeof updatesList[0]) => {
    setSelectedUpdate(item);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedUpdate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedUpdate]);

  return (
    <div className="w-full pointer-events-auto">
      {/* Horizontal Divider Line */}
      <hr className="border-t border-zinc-200 w-full" />

      <section className="mx-auto max-w-7xl px-6 md:px-8 py-10 md:py-16">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-[850] tracking-tight text-[#111111] mb-10 leading-[1.15]">
          Latest <span className="text-[#FF4F18]">Updates</span>
          <br />& Announcements
        </h2>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Updates List */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            {updatesList.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleItemClick(item)}
                className="flex gap-6 py-6 items-start border-b border-zinc-200/60 last:border-b-0 first:pt-0 last:pb-0 cursor-pointer lg:cursor-default hover:bg-zinc-50/40 dark:hover:bg-zinc-900/40 lg:hover:bg-transparent rounded-xl px-2 -mx-2 transition-all duration-250 pointer-events-auto"
              >
                {/* Date Badge */}
                <div className="flex flex-col items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-2xl border border-orange-200/50 bg-[#FAF6F0] shrink-0 shadow-2xs select-none">
                  <span className="text-2xl md:text-3xl font-extrabold text-[#FF4F18] leading-none">
                    {item.date}
                  </span>
                  <span className="text-[10px] md:text-xs font-bold text-[#FF4F18]/80 mt-1 uppercase tracking-wider">
                    {item.month}
                  </span>
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <span className="text-[10px] md:text-xs font-bold tracking-wider text-[#FF4F18] uppercase mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-zinc-950 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-xs md:text-sm mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Featured Update Card */}
          <div className="lg:col-span-6">
            <div className="rounded-[28px] overflow-hidden border border-zinc-200/80 bg-[#FFF] p-4 flex flex-col shadow-xs">
              
              {/* Featured Image */}
              <div className="relative w-full aspect-16/10 rounded-[20px] overflow-hidden">
                <Image
                  src="/Background+HorizontalBorder.png"
                  alt="Featured Update Mockup"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Card Body */}
              <div className="px-2 py-6">
                <span className="text-[10px] md:text-xs font-bold tracking-wider text-[#FF4F18] uppercase mb-2 block">
                  FEATURED UPDATE
                </span>
                
                <h3 className="text-xl md:text-2xl font-bold text-zinc-950 leading-snug mb-3">
                  Restaurant Operations, Smarter Than Ever.
                </h3>
                
                <p className="text-zinc-650 text-xs md:text-sm leading-relaxed mb-6">
                  Digitary brings together POS, Kitchen Display System, Inventory Management, Analytics, and Delivery Integrations into one intelligent platform. Automate daily operations, reduce manual work, minimize food waste, and make faster business decisions with real-time insights.
                </p>

                {/* Read Full Story Button */}
                <Link
                  href="#"
                  className="inline-block border border-[#FF4F18] text-[#FF4F18] font-bold text-xs uppercase tracking-wider px-6 py-3 hover:bg-[#FF4F18] hover:text-white transition-colors duration-200 rounded-xs"
                >
                  Read Full Story →
                </Link>
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* Styles for Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        `
      }} />

      {/* Bottom Sheet Drawer for Mobile */}
      {mounted && selectedUpdate && createPortal(
        <div className="fixed inset-0 z-[999] lg:hidden flex flex-col justify-end">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-[fadeIn_0.2s_ease-out]"
            onClick={() => setSelectedUpdate(null)}
          />
          
          {/* Drawer Sheet */}
          <div className="relative w-full max-h-[85vh] bg-white dark:bg-zinc-900 rounded-t-[32px] p-6 shadow-2xl flex flex-col animate-[slideUp_0.3s_cubic-bezier(0.16,1,0.3,1)] overflow-y-auto z-10">
            {/* Drag Handle Indicator */}
            <div className="mx-auto w-12 h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full mb-6 shrink-0" />
            
            {/* Header Area */}
            <div className="relative flex justify-between items-start mb-6 pr-10">
              <div className="flex flex-col">
                <span className="text-[11px] font-extrabold tracking-wider text-[#FF4F18] uppercase">
                  {selectedUpdate.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 dark:text-white mt-3 leading-snug">
                  {selectedUpdate.title}
                </h3>
                
                {/* Meta details line (matching design style) */}
                <div className="flex items-center gap-4 text-xs font-semibold text-zinc-400 dark:text-zinc-500 mt-4 select-none">
                  <span className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400">
                    <span className="text-[9px]">◆</span> {selectedUpdate.date} {selectedUpdate.month}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-[9px]">◇</span> DIGITORY PRODUCT TEAM
                  </span>
                </div>
              </div>
              
              {/* Close Button (Matching square 'X' box in screenshot) */}
              <button
                onClick={() => setSelectedUpdate(null)}
                className="absolute top-0 right-0 p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-650 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors duration-200 cursor-pointer"
                aria-label="Close details"
              >
                <svg className="h-4 w-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Divider Line */}
            <hr className="border-t border-zinc-100 dark:border-zinc-800/80 w-full mb-6 shrink-0" />
            
            {/* Content Area */}
            <div className="flex-1 overflow-y-auto pb-4">
              <p className="text-zinc-650 dark:text-zinc-400 text-[14px] sm:text-base leading-relaxed mb-6 font-medium">
                {selectedUpdate.desc}
              </p>
              
              {/* Extra Details (matching orange bullet in screenshot) */}
              <div className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800/50">
                <span className="text-[#FF4F18] text-xs mt-0.5">◆</span>
                <span className="leading-snug">Status: Released and live in production for all outlets.</span>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
