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
      // SVG POS machine, receipt printer, credit card
      svg: (
        <svg viewBox="0 0 280 140" fill="none" className="w-full h-[140px] max-w-[240px] mx-auto mb-6">
          {/* Base Desktop Screen */}
          <rect x="70" y="20" width="100" height="70" rx="8" fill="#F4F4F5" stroke="#D4D4D8" strokeWidth="2" />
          <rect x="76" y="26" width="88" height="46" rx="4" fill="#FFFFFF" />
          {/* POS Interface details */}
          <rect x="82" y="32" width="24" height="6" rx="1.5" fill="#FF4F18" />
          <rect x="110" y="32" width="24" height="6" rx="1.5" fill="#E4E4E7" />
          <rect x="138" y="32" width="20" height="6" rx="1.5" fill="#E4E4E7" />
          <rect x="82" y="44" width="48" height="4" rx="1" fill="#A1A1AA" />
          <rect x="82" y="52" width="64" height="4" rx="1" fill="#E4E4E7" />
          <circle cx="154" cy="46" r="6" fill="#00A884" />
          <path d="M152 46l1.5 1.5 2.5-3.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          {/* Stand */}
          <path d="M110 90h20l6 24h-32l6-24z" fill="#E4E4E7" stroke="#D4D4D8" strokeWidth="2" />
          <rect x="94" y="112" width="52" height="6" rx="3" fill="#D4D4D8" />
          
          {/* Receipt Printer */}
          <rect x="186" y="54" width="54" height="48" rx="6" fill="#E4E4E7" stroke="#D4D4D8" strokeWidth="2" />
          <rect x="194" y="60" width="38" height="6" fill="#18181B" />
          {/* Receipt Paper */}
          <path d="M198 66h30v26l-3-2-3 2-3-2-3 2-3-2-3 2-3-2-3 2-3-2-3 2v-26z" fill="#FFFFFF" stroke="#D4D4D8" strokeWidth="1.5" />
          <line x1="202" y1="72" x2="224" y2="72" stroke="#E4E4E7" strokeWidth="2" strokeLinecap="round" />
          <line x1="202" y1="78" x2="218" y2="78" stroke="#E4E4E7" strokeWidth="2" strokeLinecap="round" />
          <line x1="202" y1="84" x2="220" y2="84" stroke="#E4E4E7" strokeWidth="2" strokeLinecap="round" />
          
          {/* Credit Card */}
          <g transform="rotate(-15 42 78)">
            <rect x="18" y="64" width="48" height="32" rx="4" fill="#FF4F18" shadow-sm="true" />
            <rect x="18" y="70" width="48" height="6" fill="#18181B" />
            <circle cx="28" cy="84" r="4" fill="#FFFFFF" fillOpacity="0.4" />
            <circle cx="34" cy="84" r="4" fill="#FFFFFF" fillOpacity="0.6" />
          </g>
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Kitchen display system',
      desc: 'Every order reaches the right station instantly. Less shouting. Less confusion. Faster service.',
      borderClasses: 'border-b border-zinc-200 md:border-r md:border-b',
      // SVG KDS Monitor showing order cards
      svg: (
        <svg viewBox="0 0 280 140" fill="none" className="w-full h-[140px] max-w-[240px] mx-auto mb-6">
          {/* KDS Monitor Screen */}
          <rect x="65" y="16" width="150" height="96" rx="8" fill="#18181B" stroke="#27272A" strokeWidth="3" />
          <rect x="71" y="22" width="138" height="84" rx="4" fill="#27272A" />
          
          {/* KDS Interface layout */}
          {/* Header */}
          <rect x="75" y="26" width="130" height="8" rx="2" fill="#005C4B" />
          <circle cx="80" cy="30" r="2" fill="#34D399" />
          
          {/* Card 1 */}
          <rect x="75" y="38" width="38" height="60" rx="3" fill="#FFFFFF" />
          <rect x="79" y="42" width="30" height="6" rx="1.5" fill="#FFE5D9" />
          <rect x="82" y="44" width="12" height="2" fill="#FF4F18" />
          <line x1="79" y1="54" x2="109" y2="54" stroke="#E4E4E7" strokeWidth="2" />
          <line x1="79" y1="60" x2="103" y2="60" stroke="#E4E4E7" strokeWidth="2" />
          <rect x="79" y="84" width="16" height="6" rx="1.5" fill="#00A884" />
          
          {/* Card 2 */}
          <rect x="121" y="38" width="38" height="60" rx="3" fill="#FFFFFF" />
          <rect x="125" y="42" width="30" height="6" rx="1.5" fill="#E8EAFF" />
          <rect x="128" y="44" width="12" height="2" fill="#4F46E5" />
          <line x1="125" y1="54" x2="155" y2="54" stroke="#E4E4E7" strokeWidth="2" />
          <line x1="125" y1="60" x2="149" y2="60" stroke="#E4E4E7" strokeWidth="2" />
          <rect x="125" y="84" width="16" height="6" rx="1.5" fill="#00A884" />

          {/* Card 3 */}
          <rect x="167" y="38" width="38" height="60" rx="3" fill="#FFFFFF" />
          <rect x="171" y="42" width="30" height="6" rx="1.5" fill="#E4E4E7" />
          <rect x="174" y="44" width="12" height="2" fill="#71717A" />
          <line x1="171" y1="54" x2="201" y2="54" stroke="#E4E4E7" strokeWidth="2" />
          <line x1="171" y1="60" x2="195" y2="60" stroke="#E4E4E7" strokeWidth="2" />
          <rect x="171" y="84" width="16" height="6" rx="1.5" fill="#A1A1AA" />

          {/* Stand */}
          <rect x="132" y="112" width="16" height="12" fill="#18181B" />
          <rect x="115" y="124" width="50" height="4" rx="2" fill="#18181B" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Inventory that thinks ahead',
      desc: "Every dish updates your inventory automatically. Know what's running low before your chef does.",
      borderClasses: 'border-b border-zinc-200 md:border-b md:border-r-0',
      // SVG crate of vegetables next to an inventory stats monitor
      svg: (
        <svg viewBox="0 0 280 140" fill="none" className="w-full h-[140px] max-w-[240px] mx-auto mb-6">
          {/* Mini Monitor on left */}
          <rect x="35" y="24" width="80" height="64" rx="6" fill="#F4F4F5" stroke="#D4D4D8" strokeWidth="2" />
          <rect x="40" y="29" width="70" height="44" rx="3" fill="#FFFFFF" />
          <rect x="45" y="35" width="40" height="4" rx="1" fill="#FF4F18" />
          {/* Progress bar charts */}
          <rect x="45" y="45" width="60" height="4" rx="2" fill="#E4E4E7" />
          <rect x="45" y="45" width="45" height="4" rx="2" fill="#00A884" />
          <rect x="45" y="53" width="60" height="4" rx="2" fill="#E4E4E7" />
          <rect x="45" y="53" width="20" height="4" rx="2" fill="#FF4F18" />
          <rect x="45" y="61" width="60" height="4" rx="2" fill="#E4E4E7" />
          <rect x="45" y="61" width="52" height="4" rx="2" fill="#3B82F6" />
          {/* Stand */}
          <rect x="70" y="88" width="10" height="12" fill="#D4D4D8" />
          <rect x="58" y="100" width="34" height="4" rx="2" fill="#D4D4D8" />

          {/* Crate of Veggies on right */}
          <rect x="145" y="52" width="90" height="52" rx="4" fill="#18181B" stroke="#27272A" strokeWidth="2" />
          {/* Crate grill slots */}
          <rect x="153" y="62" width="6" height="32" rx="1" fill="#27272A" />
          <rect x="169" y="62" width="6" height="32" rx="1" fill="#27272A" />
          <rect x="185" y="62" width="6" height="32" rx="1" fill="#27272A" />
          <rect x="201" y="62" width="6" height="32" rx="1" fill="#27272A" />
          <rect x="217" y="62" width="6" height="32" rx="1" fill="#27272A" />

          {/* Veggies popping out */}
          {/* Tomato */}
          <circle cx="165" cy="46" r="12" fill="#EF4444" />
          <path d="M165 34c-1 2 1 4 0 5M163 34c1 1 2 2 2 3" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
          {/* Carrot */}
          <path d="M210 24l-14 30 6 2 14-30-6-2z" fill="#F97316" />
          <path d="M212 21c-2 2-4 0-5-1M211 23c-1 1-3 0-4-1" stroke="#22C55E" strokeWidth="2" />
          {/* Lettuce */}
          <circle cx="190" cy="44" r="14" fill="#22C55E" />
          <circle cx="184" cy="40" r="8" fill="#4ADE80" />
          <circle cx="196" cy="42" r="8" fill="#4ADE80" />
        </svg>
      ),
    },
    {
      num: '04',
      title: 'Live business dashboard',
      desc: 'Sales. Orders. Inventory. Outlet performance. Everything you need to know, in one place, in real time.',
      borderClasses: 'border-b border-zinc-200 md:border-b-0 md:border-r',
      // SVG Laptop showing line graphs, bar charts and gauge
      svg: (
        <svg viewBox="0 0 280 140" fill="none" className="w-full h-[140px] max-w-[240px] mx-auto mb-6">
          {/* Laptop Screen */}
          <rect x="55" y="16" width="170" height="98" rx="8" fill="#18181B" stroke="#27272A" strokeWidth="2.5" />
          <rect x="60" y="21" width="160" height="88" rx="4" fill="#FFFFFF" />
          {/* Dashboard details */}
          <rect x="66" y="27" width="38" height="6" rx="1.5" fill="#FF4F18" />
          
          {/* Main Chart */}
          <rect x="66" y="39" width="94" height="42" rx="3" fill="#F4F4F5" />
          <path d="M72 72l16-16 14 10 20-22 10 14 16-18" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="148" cy="40" r="3" fill="#3B82F6" />
          
          {/* Mini Gauge Widget */}
          <rect x="166" y="39" width="48" height="42" rx="3" fill="#F4F4F5" />
          <circle cx="190" cy="60" r="14" stroke="#E4E4E7" strokeWidth="3.5" />
          <path d="M178 68a14 14 0 0122-14" stroke="#FF4F18" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="190" cy="60" r="3" fill="#18181B" />
          
          {/* Bottom Bar Indicators */}
          <rect x="66" y="87" width="22" height="16" rx="2" fill="#E8EAFF" />
          <rect x="94" y="87" width="22" height="16" rx="2" fill="#FFE5D9" />
          <rect x="122" y="87" width="22" height="16" rx="2" fill="#E8F8F5" />
          <rect x="150" y="87" width="22" height="16" rx="2" fill="#F4F4F5" />
          
          {/* Laptop Base */}
          <path d="M35 114h210l-10 10H45l-10-10z" fill="#D4D4D8" stroke="#A1A1AA" strokeWidth="1.5" />
          <rect x="120" y="115" width="40" height="4" rx="2" fill="#A1A1AA" />
        </svg>
      ),
    },
    {
      num: '05',
      title: 'Every order. One flow.',
      desc: 'No switching between apps. No missed tickets. Every online and offline order stays connected from start to finish.',
      borderClasses: 'border-b border-zinc-200 md:border-b-0 md:border-r',
      // SVG smartphone with timeline delivery tracking, next to a brown delivery bag and coffee cup
      svg: (
        <svg viewBox="0 0 280 140" fill="none" className="w-full h-[140px] max-w-[240px] mx-auto mb-6">
          {/* Smartphone */}
          <rect x="35" y="12" width="60" height="110" rx="10" fill="#18181B" stroke="#27272A" strokeWidth="2.5" />
          <rect x="39" y="16" width="52" height="102" rx="7" fill="#FFFFFF" />
          <rect x="57" y="18" width="16" height="4" rx="2" fill="#18181B" />
          
          {/* Order Tracking UI */}
          <rect x="45" y="28" width="40" height="6" rx="1.5" fill="#FFE5D9" />
          <rect x="48" y="30" width="10" height="2" fill="#FF4F18" />
          {/* Vertical step tracking dots */}
          <circle cx="48" cy="46" r="2.5" fill="#00A884" />
          <line x1="48" y1="48.5" x2="48" y2="59.5" stroke="#00A884" strokeWidth="1.5" />
          <circle cx="48" cy="62" r="2.5" fill="#00A884" />
          <line x1="48" y1="64.5" x2="48" y2="75.5" stroke="#E4E4E7" strokeWidth="1.5" />
          <circle cx="48" cy="78" r="2.5" fill="#E4E4E7" />
          <line x1="48" y1="80.5" x2="48" y2="91.5" stroke="#E4E4E7" strokeWidth="1.5" />
          <circle cx="48" cy="94" r="2.5" fill="#E4E4E7" />
          
          <rect x="56" y="44" width="26" height="4" rx="1" fill="#71717A" />
          <rect x="56" y="60" width="26" height="4" rx="1" fill="#71717A" />
          <rect x="56" y="76" width="26" height="4" rx="1" fill="#E4E4E7" />
          <rect x="56" y="92" width="26" height="4" rx="1" fill="#E4E4E7" />

          {/* Delivery Bag */}
          <path d="M125 44h45l6 64h-57l6-64z" fill="#DDB892" stroke="#B08968" strokeWidth="2" />
          <path d="M135 44V34a6 6 0 0112 0v10M147 44V34a6 6 0 0112 0v10" stroke="#7F5539" strokeWidth="2" strokeLinecap="round" />
          {/* Bag label */}
          <circle cx="147.5" cy="76" r="12" fill="#FF4F18" />
          <path d="M144 76l2 2 4-4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

          {/* Coffee Cup */}
          <path d="M198 64h24l-3 40h-18l-3-40z" fill="#E4E4E7" stroke="#D4D4D8" strokeWidth="2" />
          <rect x="195" y="60" width="30" height="6" rx="2" fill="#B08968" />
          {/* Sleeve */}
          <rect x="196" y="74" width="28" height="16" fill="#DDB892" stroke="#B08968" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      num: '06',
      title: 'Multi-outlet management',
      desc: "Whether you're managing one outlet or twenty, get complete visibility without chasing managers or waiting for reports.",
      borderClasses: 'border-b-0',
      // SVG central map marker pointing to a small network of connected store icons
      svg: (
        <svg viewBox="0 0 280 140" fill="none" className="w-full h-[140px] max-w-[240px] mx-auto mb-6">
          {/* Network Connection Lines */}
          <path d="M140 40L60 96M140 40L140 102M140 40L220 96" stroke="#FF4F18" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
          
          {/* Store 1 (Left) */}
          <g transform="translate(35 90)">
            <rect x="10" y="10" width="30" height="24" rx="2" fill="#F4F4F5" stroke="#D4D4D8" strokeWidth="1.5" />
            <path d="M6 10l19-8 19 8H6z" fill="#FF4F18" />
            <rect x="20" y="22" width="10" height="12" fill="#D4D4D8" />
          </g>

          {/* Store 2 (Center) */}
          <g transform="translate(115 96)">
            <rect x="10" y="10" width="30" height="24" rx="2" fill="#F4F4F5" stroke="#D4D4D8" strokeWidth="1.5" />
            <path d="M6 10l19-8 19 8H6z" fill="#18181B" />
            <rect x="20" y="22" width="10" height="12" fill="#D4D4D8" />
          </g>

          {/* Store 3 (Right) */}
          <g transform="translate(195 90)">
            <rect x="10" y="10" width="30" height="24" rx="2" fill="#F4F4F5" stroke="#D4D4D8" strokeWidth="1.5" />
            <path d="M6 10l19-8 19 8H6z" fill="#FF4F18" />
            <rect x="20" y="22" width="10" height="12" fill="#D4D4D8" />
          </g>

          {/* Main Overlay Map Pin (Top-Center) */}
          <g transform="translate(125 10)">
            <path d="M15 0C6.7 0 0 6.7 0 15c0 10.5 12 21 15 25 3-4 15-14.5 15-25C30 6.7 23.3 0 15 0z" fill="#FF4F18" shadow-sm="true" />
            <circle cx="15" cy="14" r="6" fill="#FFFFFF" />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* Horizontal Divider Line */}
      <hr className="border-t border-zinc-200 w-full" />

      <section className="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-24">
        {/* Top Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 md:mb-20">
          {/* Heading */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 leading-[1.15]">
              When every second counts,
              <br />
              every <span className="text-[#FF4F18]">system should too.</span>
            </h2>
          </div>

          {/* Description & Action */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-md">
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

              {/* Vector Mockup */}
              <div className="w-full flex items-center justify-center my-4 select-none">
                {item.svg}
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
