'use client';

import React from 'react';
import Link from 'next/link';

export default function Features() {
  const featureItems = [
    {
      num: '01',
      title: 'Orders & billing',
      desc: 'From dine-in to Swiggy, Zomato and direct orders, every bill, every payment and every table flows through one seamless system.',
      borderClasses: 'border-b border-zinc-200 md:border-r md:border-b',
      imageSrc: '/image4.png',
    },
    {
      num: '02',
      title: 'Kitchen display system',
      desc: 'Every order reaches the right station instantly. Less shouting. Less confusion. Faster service.',
      borderClasses: 'border-b border-zinc-200 md:border-r md:border-b',
      imageSrc: '/image 6.png',
    },
    {
      num: '03',
      title: 'Inventory that thinks ahead',
      desc: "Every dish updates your inventory automatically. Know what's running low before your chef does.",
      borderClasses: 'border-b border-zinc-200 md:border-b-0 md:border-r-0',
      imageSrc: '/image 7.png',
    },
    {
      num: '04',
      title: 'Live business dashboard',
      desc: 'Sales. Orders. Inventory. Outlet performance. Everything you need to know, in one place, in real time.',
      borderClasses: 'border-b border-zinc-200 md:border-b-0 md:border-r',
      imageSrc: '/image 8.png',
    },
    {
      num: '05',
      title: 'Every order. One flow.',
      desc: 'No switching between apps. No missed tickets. Every online and offline order stays connected from start to finish.',
      borderClasses: 'border-b border-zinc-200 md:border-b-0 md:border-r',
      imageSrc: '/image 9.png',
    },
    {
      num: '06',
      title: 'Multi-outlet management',
      desc: "Whether you're managing one outlet or twenty, get complete visibility without chasing managers or waiting for reports.",
      borderClasses: 'border-b-0',
      imageSrc: '/image 10.png',
    },
  ];

  return (
    <div className="w-full">
      {/* Horizontal Divider Line */}
      <hr className="border-t border-zinc-200 w-full" />

      <section className="mx-auto max-w-7xl px-6 md:px-8 py-10 md:py-16">
        {/* Top Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 md:mb-12">
          {/* Heading */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-[850] tracking-tight text-[#111111] leading-[1.15]">
              When every second counts,
              <br />
              <span className="text-[#FF4F18]"> every system should too.</span>
            </h2>
          </div>

          {/* Description & Action */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <p className="text-zinc-650 text-base md:text-lg leading-relaxed max-w-md">
              Connect every moving part of your restaurant, so orders, kitchens, inventory and reports stay perfectly in sync, even during your busiest hours.
            </p>
            <Link
              href="#"
              className="rounded-full bg-black px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-zinc-800 active:scale-[0.98]"
            >
              Explore Platform
            </Link>
          </div>
        </div>

        {/* Features Card Container with 3x2 inner grid */}
        <div className="border border-zinc-200 rounded-[28px] overflow-hidden bg-white grid grid-cols-1 md:grid-cols-3">
          {featureItems.map((item, idx) => (
            <div
              key={idx}
              className={`p-8 sm:p-10 flex flex-col justify-start transition-all duration-300 hover:bg-zinc-50/50 ${item.borderClasses}`}
            >
              {/* Feature Index */}
              <span className="text-sm font-bold text-zinc-400 mb-2">{item.num}</span>

              {/* Feature Image Mockup */}
              <div className="w-full h-[140px] flex items-center justify-center my-4 select-none relative">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="max-w-[240px] max-h-[140px] object-contain rounded-xl"
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-zinc-950 mb-2 mt-4">{item.title}</h3>
              <p className="text-zinc-550 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
