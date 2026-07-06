"use client";

import { useState } from "react";

const INSIGHTS_ITEMS = [
  {
    id: 1,
    badge: "FEATURED",
    imageSrc: "/featured.png",
    metadata: "Operations · 8 min read · June 2025",
    title: "Why Restaurants in India Face Operational Burnout — And What the Numbers Tell Us"
  },
  {
    id: 2,
    badge: "KITCHEN",
    imageSrc: "/kitchen.png",
    metadata: "Kitchen · 5 min read",
    title: "Future-Proof Your Kitchen: How Advanced KDS Changes Rush-Hour Service"
  },
  {
    id: 3,
    badge: "DATA",
    imageSrc: "/data.png",
    metadata: "Technology · 6 min read",
    title: "Data-Driven Kitchens: How Forecasting Changes Real-Time Restaurant Operations"
  }
];

export default function InsightsPage() {
  return (
    <div className="bg-white font-sans antialiased text-[#111111] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h1 className="text-[44px] md:text-[56px] font-[850] tracking-tight leading-[1.1] text-[#111111]">
            Latest <span className="text-[#FF4F18]">insights.</span>
          </h1>
          
          <div>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-200/80 rounded-full font-bold text-sm text-[#111111] hover:bg-zinc-50 transition-colors shadow-sm select-none cursor-pointer">
              <span>View all</span>
              <svg className="w-4 h-4 text-[#111111]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {INSIGHTS_ITEMS.map((item) => (
            <div 
              key={item.id}
              className="flex flex-col h-full bg-white rounded-[28px] border border-zinc-200/60 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.025)] group"
            >
              {/* Top Banner Graphic area - Full bleed image */}
              <div className="h-[200px] w-full relative overflow-hidden">
                <img 
                  src={item.imageSrc} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-20" />
                
                {/* Badge */}
                <div className="absolute top-5 left-5 bg-[#FF4F18] text-white text-[11px] font-extrabold px-3 py-1.5 rounded-full tracking-wider z-10">
                  {item.badge}
                </div>
              </div>

              {/* Bottom text content */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Metadata */}
                  <p className="text-[12px] text-zinc-400 font-semibold tracking-wide">
                    {item.metadata}
                  </p>
                  
                  {/* Title */}
                  <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#111111] leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
