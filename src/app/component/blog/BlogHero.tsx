'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogHeroProps {
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export default function BlogHero({
  selectedCategory = 'All Articles',
  onSelectCategory,
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
      {/* Top Header Bar: Explore Topics & Categories */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 md:pb-12 border-b border-zinc-200/60 dark:border-zinc-800/60">
        <span className="text-xs md:text-sm font-semibold tracking-wider text-zinc-400 dark:text-zinc-500 uppercase">
          EXPLORE TOPICS
        </span>

        <nav className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'text-zinc-900 dark:text-white font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Featured Article Section */}
      <div className="pt-8 md:pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-4">
          <span className="inline-block px-3.5 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[11px] font-semibold text-zinc-600 dark:text-zinc-300 tracking-wider uppercase mb-6">
            FEATURED ARTICLE
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-medium leading-[1.2] text-zinc-900 dark:text-white tracking-tight mb-4">
            Why Restaurants in India Trust Digitory for Smart Operations &amp; Growth
          </h1>

          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8 font-normal">
            July 8, 2026
          </p>

          <Link
            href="/blog/why-restaurants-in-india-trust-digitory-for-smart-operations-growth"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-xs group"
          >
            <span>Read article</span>
            <svg
              className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>

        {/* Right Image Column */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[620px] rounded-2xl overflow-hidden shadow-sm border border-zinc-200/50 dark:border-zinc-800/50 bg-amber-400">
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
