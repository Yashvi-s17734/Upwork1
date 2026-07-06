'use client';

import React from 'react';
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

  return (
    <div className="w-full">
      {/* Horizontal Divider Line */}
      <hr className="border-t border-zinc-200 w-full" />

      <section className="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-24">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-16 leading-[1.15]">
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
                className="flex gap-6 py-6 items-start border-b border-zinc-200/60 last:border-b-0 first:pt-0 last:pb-0"
              >
                {/* Date Badge */}
                <div className="flex flex-col items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-2xl border border-orange-200/50 bg-[#FAF6F0] shrink-0 shadow-2xs select-none">
                  <span className="text-2xl md:text-3xl font-extrabold text-[#9A3412] leading-none">
                    {item.date}
                  </span>
                  <span className="text-[10px] md:text-xs font-bold text-[#C2410C]/80 mt-1 uppercase tracking-wider">
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
                  src="/featured_update.png"
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
    </div>
  );
}
