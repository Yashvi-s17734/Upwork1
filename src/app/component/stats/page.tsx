'use client';

import React from 'react';

export default function Stats() {
  const stats = [
    {
      value: '30%',
      label: 'less wastage',
      desc: 'Better inventory visibility and tracking',
    },
    {
      value: '2x',
      label: 'faster decision making',
      desc: 'Real-time reports across outlets',
    },
    {
      value: '100%',
      label: 'operational visibility',
      desc: 'From orders to inventory to customer data',
    },
    {
      value: '1',
      label: 'connected system',
      desc: 'No more switching between 10 tools',
    },
  ];

  return (
    <div className="w-full">
      {/* Horizontal Divider Line */}
      <hr className="border-t border-zinc-200 w-full" />

      <section className="mx-auto max-w-7xl px-6 md:px-8 py-10 md:py-16">
        {/* Section Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-[44px] font-[850] tracking-tight text-[#111111] leading-[1.15] mb-16 md:mb-20">
          Be chaos-hour ready, <span className="text-[#FF4F18]">always</span>
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-y-12 gap-x-4 md:grid-cols-4 md:gap-0 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center px-4 md:border-r md:border-zinc-200 last:border-r-0"
            >
              {/* Stat Value */}
              <span className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#FF4F18] leading-none">
                {stat.value}
              </span>

              {/* Stat Label */}
              <span className="text-zinc-900 text-lg font-semibold mt-4 mb-2">
                {stat.label}
              </span>

              {/* Stat Description */}
              <p className="text-zinc-500 text-xs sm:text-sm max-w-[200px] leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
