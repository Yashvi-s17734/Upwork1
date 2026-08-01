'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogHeroProps {
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export default function BlogHero({
  selectedCategory = 'All Articles',
  onSelectCategory,
  searchQuery = '',
  onSearchChange,
}: BlogHeroProps) {
  const [internalCategory, setInternalCategory] = useState('All Articles');

  const activeCategory = onSelectCategory ? selectedCategory : internalCategory;

  const handleCategoryClick = (category: string) => {
    if (onSelectCategory) {
      onSelectCategory(category);
    } else {
      setInternalCategory(category);
    }
  };

  const categories = [
    'All Articles',
    'Restaurant Operations',
    'Kitchen',
    'Inventory',
    'Analytics',
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      {/* Top Header Bar: Explore Topics & Categories + Right-aligned Search Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 md:pb-12 border-b border-zinc-200/60 dark:border-zinc-800/60">
        <span className="text-[11px] md:text-[12px] font-extrabold tracking-widest text-[#FF4F18] uppercase shrink-0">
          EXPLORE TOPICS
        </span>

        {/* Right Section Wrapper */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-end flex-1 gap-6 w-full lg:w-auto">
          {/* Search Bar */}
          <div className="relative w-full sm:w-72 shrink-0">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400 dark:text-zinc-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
              placeholder="What are you looking for?"
              className="w-full pl-10 pr-4 py-2.5 text-xs font-medium rounded-full border border-zinc-200 dark:border-zinc-800 bg-[#F8F9FA] dark:bg-zinc-900 text-[#111111] dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-[#FF4F18] focus:ring-1 focus:ring-[#FF4F18] transition-all shadow-2xs"
            />
          </div>

          <nav className="flex flex-wrap items-center gap-2 sm:gap-3 justify-end shrink-0">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#FF4F18] text-white shadow-[0_4px_12px_rgba(255,79,24,0.25)]'
                      : 'bg-[#F8F9FA] dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-[#F1F3F5] border border-zinc-200/60'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Featured Article Section */}
      <div className="pt-8 md:pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#FFF3EF] dark:bg-[#FF4F18]/10 text-[11px] font-extrabold text-[#FF4F18] tracking-widest uppercase mb-4 border border-orange-100 dark:border-transparent">
            FEATURED ARTICLE
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-[850] leading-[1.15] text-[#111111] dark:text-white tracking-tight mb-4">
            Why Restaurants in India Trust Digitory for Smart Operations &amp; Growth
          </h1>

          <p className="text-xs font-bold text-zinc-400 mb-6 uppercase tracking-wide">
            July 8, 2026
          </p>

          <Link
            href="/blog/why-restaurants-in-india-trust-digitory-for-smart-operations-growth"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FF4F18] text-sm font-bold text-white transition-all duration-200 hover:bg-[#E03F0D] shadow-[0_8px_20px_rgba(255,79,24,0.35)] hover:shadow-[0_10px_24px_rgba(255,79,24,0.45)] active:scale-[0.98] group cursor-pointer"
          >
            <span>Read article</span>
            <svg
              className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>

        {/* Right Image Column */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[620px] rounded-[28px] overflow-hidden shadow-2xs border border-zinc-200/60 dark:border-zinc-800/60 bg-amber-400">
            <Image
              src="/blogpage.png"
              alt="Why Restaurants in India Trust Digitory for Smart Operations & Growth"
              width={1220}
              height={675}
              className="w-full h-auto object-cover block"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
