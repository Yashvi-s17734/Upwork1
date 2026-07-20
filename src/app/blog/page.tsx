'use client';

import React, { useState } from 'react';
import Header from '../component/header/page';
import BlogHero from '../component/blog/BlogHero';
import LatestStories from '../component/blog/LatestStories';
import FooterPage from '../component/footer/page';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Articles');

  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0d0e] transition-colors duration-300 flex flex-col font-sans">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full text-zinc-900 dark:text-zinc-100">
        <BlogHero
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <LatestStories selectedCategory={selectedCategory} />
      </main>

      {/* Footer */}
      <FooterPage />
    </div>
  );
}
