'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface Article {
  id: string;
  slug: string;
  title: string;
  date: string;
  image: string;
  category: string;
}

const mainArticle: Article = {
  id: 'main-1',
  slug: 'kitchen-automation-how-to-future-proof-restaurant-backends',
  title: 'Kitchen Automation: How to Future-Proof Restaurant Backends',
  date: 'July 8, 2026',
  image: '/Kitchen Automation.png',
  category: 'Kitchen',
};

const topSideArticles: Article[] = [
  {
    id: 'side-1',
    slug: 'data-driven-kitchen-operations',
    title: 'Data-Driven Kitchen Operations: From Insights to Efficiency',
    date: 'July 18, 2026',
    image: '/data_driven.png',
    category: 'Kitchen',
  },
  {
    id: 'side-2',
    slug: 'ai-powered-forecasting-reducing-food-waste',
    title: 'AI-Powered Forecasting: Reducing Food Waste with Predictive Analytics',
    date: 'June 12, 2026',
    image: '/ai_driven_forecasting.png',
    category: 'Analytics',
  },
];

const mediumGridArticles: Article[] = [
  {
    id: 'med-1',
    slug: 'dynamic-pricing-for-fb',
    title: 'Dynamic Pricing for F&B: What It Is and How to Implement It',
    date: 'May 28, 2026',
    image: '/Dynamic Pricing.png',
    category: 'Restaurant Operations',
  },
  {
    id: 'med-2',
    slug: 'how-ai-is-transforming-menu-strategy',
    title: 'How AI Is Transforming Menu Strategy for Modern Restaurants',
    date: 'April 28, 2026',
    image: '/AI is Transforming.png',
    category: 'Analytics',
  },
  {
    id: 'med-3',
    slug: 'smart-qr-menus',
    title: 'Smart QR Menus: Dynamic Pricing, Upsell Automation & Allergy Filters | Automated Inventory Management Software',
    date: 'April 21, 2026',
    image: '/Smart QR Menus.png',
    category: 'Restaurant Operations',
  },
  {
    id: 'med-4',
    slug: 'ai-and-automation-in-fb',
    title: 'AI & Automation in F&B: Menu Engineering, Predictive Ordering & Dynamic Pricing with Automated Inventory Management Software',
    date: 'April 5, 2026',
    image: '/AI & Automation in F&B.png',
    category: 'Inventory',
  },
];

const smallGridArticles: Article[] = [
  {
    id: 'sm-1',
    slug: 'why-smart-restaurants-are-reducing-staff-dependency',
    title: 'Why Smart Restaurants Are Reducing Staff Dependency, Not Just Managing Shifts',
    date: 'March 5, 2026',
    image: '/Why Smart Restaurants.png',
    category: 'Restaurant Operations',
  },
  {
    id: 'sm-2',
    slug: 'smart-kitchens-and-central-kitchens',
    title: "Smart Kitchens and Central Kitchens: How India's Top F&B Brands Scale in 2025",
    date: 'March 3, 2026',
    image: '/Smart Kitchens and Central Kitchens.png',
    category: 'Kitchen',
  },
  {
    id: 'sm-3',
    slug: 'how-smart-menu-engineering-boosts-profits',
    title: 'How Smart Menu Engineering Boosts Restaurant Profits by 15–25%',
    date: 'January 19, 2026',
    image: '/How Smart Menu.png',
    category: 'Analytics',
  },
  {
    id: 'sm-4',
    slug: 'beyond-points-native-crm-loyalty-strategies',
    title: 'Beyond Points: Native CRM & Loyalty Strategies for F&B Growth',
    date: 'January 19, 2026',
    image: '/Beyond Point.png',
    category: 'Restaurant Operations',
  },
  {
    id: 'sm-5',
    slug: 'how-to-manage-and-scale-a-microbrewery-in-india',
    title: 'How to Manage and Scale a Microbrewery in India: The Secret Ingredient Behind the Best Brands',
    date: 'January 19, 2026',
    image: '/How to Manage and Scale a Microbrewery in India.png',
    category: 'Restaurant Operations',
  },
  {
    id: 'sm-6',
    slug: 'how-restaurants-bars-and-breweries-can-slash-wastage',
    title: 'How Restaurants, Bars, and Breweries Can Slash Wastage and Unlock Growth Margins in 2025',
    date: 'January 15, 2026',
    image: '/How Restaurants, Bars.png',
    category: 'Inventory',
  },
];

interface LatestStoriesProps {
  selectedCategory?: string;
}

export default function LatestStories({ selectedCategory = 'All Articles' }: LatestStoriesProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(12);

  const allStories = [
    mainArticle,
    ...topSideArticles,
    ...mediumGridArticles,
    ...smallGridArticles,
  ];

  const matchesFilter = (article: Article) => {
    const matchesCategory =
      selectedCategory === 'All Articles' ||
      article.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      searchQuery.trim() === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  };

  const isFiltering = searchQuery.trim() !== '' || selectedCategory !== 'All Articles';
  const filteredStories = allStories.filter(matchesFilter);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      {/* Section Header: Title + Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-900 dark:text-white">
          Latest stories
        </h2>

        {/* Search Bar */}
        <div className="relative w-full sm:w-80">
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
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="What are you looking for?"
            className="w-full pl-10 pr-4 py-2 text-sm rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-all shadow-2xs"
          />
        </div>
      </div>

      {/* Filtered Results */}
      {isFiltering ? (
        <div>
          {filteredStories.length === 0 ? (
            <div className="text-center py-16 text-zinc-500 dark:text-zinc-400">
              No stories found matching your criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.slice(0, visibleCount).map((article) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.slug}`}
                  className="group flex flex-col"
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 mb-4 border border-zinc-200/60 dark:border-zinc-800/60">
                    <Image
                      src={encodeURI(article.image)}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-base font-medium leading-snug text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-auto">
                    {article.date}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Default Layout matching exact reference image */
        <div className="space-y-12 md:space-y-16">
          {/* Row 1: Featured Main + 2 Stacked Side Stories */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Big Main Left Card */}
            <Link
              href={`/blog/${mainArticle.slug}`}
              className="lg:col-span-8 group flex flex-col"
            >
              <div className="relative aspect-16/9 w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 mb-4 border border-zinc-200/60 dark:border-zinc-800/60 shadow-xs">
                <Image
                  src={encodeURI(mainArticle.image)}
                  alt={mainArticle.title}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-300"
                  priority
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-medium leading-snug text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors mb-2">
                {mainArticle.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-500">
                {mainArticle.date}
              </p>
            </Link>

            {/* Right Stacked 2 Cards */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {topSideArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.slug}`}
                  className="group flex flex-col"
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 mb-3 border border-zinc-200/60 dark:border-zinc-800/60 shadow-xs">
                    <Image
                      src={encodeURI(article.image)}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-base font-medium leading-snug text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors mb-1.5">
                    {article.title}
                  </h3>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">
                    {article.date}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Row 2 & 3: Medium Cards (2 per row grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {mediumGridArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="group flex flex-col"
              >
                <div className="relative aspect-16/9 w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 mb-4 border border-zinc-200/60 dark:border-zinc-800/60 shadow-xs">
                  <Image
                    src={encodeURI(article.image)}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-medium leading-snug text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-500">
                  {article.date}
                </p>
              </Link>
            ))}
          </div>

          {/* Row 4 & 5: Small Cards (3 per row grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
            {smallGridArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="group flex flex-col"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 mb-4 border border-zinc-200/60 dark:border-zinc-800/60 shadow-xs">
                  <Image
                    src={encodeURI(article.image)}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-base font-medium leading-snug text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-xs text-zinc-400 dark:text-zinc-500">
                  {article.date}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Load More Button */}
      <div className="pt-12 md:pt-16 flex justify-center">
        <button
          type="button"
          onClick={() => setVisibleCount((prev) => prev + 6)}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-all shadow-xs cursor-pointer"
        >
          <span>Load More</span>
          <svg
            className="w-4 h-4 text-zinc-500 dark:text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
