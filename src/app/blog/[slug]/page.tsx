'use client';

import React, { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../component/header/page';
import FooterPage from '../../component/footer/page';
import { getArticleBySlug, ARTICLES_DATA } from '../../data/blogData';

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const resolvedParams = use(params);
  const article = getArticleBySlug(resolvedParams.slug);

  const [copied, setCopied] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Get 4 similar articles
  const similarArticles = article.similarSlugs
    .map((slug) => ARTICLES_DATA[slug])
    .filter(Boolean)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0d0e] transition-colors duration-300 flex flex-col font-sans">
      {/* Header */}
      <Header />

      <main className="flex-1 w-full text-zinc-900 dark:text-zinc-100">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-12 md:pb-24">
          {/* Top Date */}
          <div className="text-xs sm:text-sm font-medium text-zinc-400 dark:text-zinc-500 mb-4">
            {article.date}
          </div>

          {/* Title & Introduction Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-8">
            {/* Left 7 columns: Main Title */}
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold leading-[1.15] text-zinc-900 dark:text-white tracking-tight">
                {article.title}
              </h1>
            </div>

            {/* Right 5 columns: Intro Text */}
            <div className="lg:col-span-5 text-sm md:text-base text-zinc-600 dark:text-zinc-300 space-y-4 leading-relaxed font-normal">
              <p>{article.introText}</p>
              <p>{article.secondaryIntro}</p>
            </div>
          </div>

          {/* Main Cover Image */}
          <div className="relative w-full aspect-16/9 max-h-[520px] rounded-2xl md:rounded-3xl overflow-hidden my-6 md:my-10 border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm bg-zinc-100 dark:bg-zinc-900">
            <Image
              src={encodeURI(article.image)}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Grid: Left TOC | Middle Content | Right CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-6">
            {/* Left Sidebar: Table of Contents & Social Links */}
            <aside className="lg:col-span-3 hidden lg:block sticky top-28 self-start space-y-8">
              <div>
                <h3 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-4">
                  TABLE OF CONTENTS
                </h3>
                <nav className="space-y-3">
                  {article.tableOfContents.map((toc) => (
                    <a
                      key={toc.id}
                      href={`#${toc.id}`}
                      className="block text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors leading-snug"
                    >
                      {toc.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Share Article */}
              <div className="pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60">
                <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-3">
                  Share this article
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyLink}
                    type="button"
                    className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                    title="Copy Link"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>{copied ? 'Copied!' : 'Copy Link'}</span>
                  </button>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    aria-label="Share on X"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                </div>
              </div>
            </aside>

            {/* Middle Main Content */}
            <div className="lg:col-span-6 space-y-10 text-zinc-800 dark:text-zinc-200 leading-relaxed font-normal text-base md:text-[17px]">
              {/* Media Block / Video Preview if available */}
              {article.mediaBlock && (
                <div className="my-6">
                  {article.mediaBlock.type === 'video' ? (
                    <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm">
                      {isPlayingVideo ? (
                        <video
                          src={article.mediaBlock.src}
                          controls
                          autoPlay
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div
                          onClick={() => setIsPlayingVideo(true)}
                          className="relative w-full h-full cursor-pointer group flex items-center justify-center bg-zinc-900"
                        >
                          <Image
                            src={encodeURI(article.image)}
                            alt="Video Thumbnail"
                            fill
                            className="object-cover opacity-80 group-hover:opacity-90 transition-opacity"
                          />
                          {/* Play Button Overlay */}
                          <div className="relative z-10 w-16 h-16 rounded-full bg-[#FF4F18] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      )}
                      <p className="p-3 text-center text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/90 border-t border-zinc-200/50 dark:border-zinc-800/50">
                        {article.mediaBlock.caption}
                      </p>
                    </div>
                  ) : (
                    <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm">
                      <Image
                        src={encodeURI(article.mediaBlock.src)}
                        alt={article.mediaBlock.caption}
                        fill
                        className="object-cover"
                      />
                      <p className="p-3 text-center text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/90 border-t border-zinc-200/50 dark:border-zinc-800/50">
                        {article.mediaBlock.caption}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Sections */}
              {article.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white tracking-tight">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((para, idx) => (
                    <p key={idx} className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      {para}
                    </p>
                  ))}
                  {section.bulletPoints && (
                    <ul className="list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300 pt-2">
                      {section.bulletPoints.map((item, bIdx) => (
                        <li key={bIdx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {/* Author Info Card */}
              <div className="pt-8 mt-12 border-t border-zinc-200/60 dark:border-zinc-800/60">
                <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-amber-400 border border-zinc-300 dark:border-zinc-700">
                    <Image
                      src="/demologo.png"
                      alt={article.author.name}
                      fill
                      className="object-contain p-2 bg-white"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-zinc-900 dark:text-white">
                      {article.author.name}
                    </h4>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-1">
                      {article.author.role}
                    </p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {article.author.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar: Sticky Call to Action Card */}
            <aside className="lg:col-span-3 hidden lg:block sticky top-28 self-start">
              <div className="bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200/60 dark:border-zinc-800/60 p-6 rounded-2xl space-y-4 shadow-2xs">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white leading-tight">
                  Want to transform your kitchen?
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Scale your restaurant operations with Digitory&apos;s all-in-one OS.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center py-2.5 px-4 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-xs"
                >
                  Book a demo
                </Link>
              </div>
            </aside>
          </div>

          {/* Similar Articles Section */}
          {similarArticles.length > 0 && (
            <div className="mt-20 pt-12 border-t border-zinc-200/60 dark:border-zinc-800/60">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-8">
                Similar articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {similarArticles.map((simArticle) => (
                  <Link
                    key={simArticle.slug}
                    href={`/blog/${simArticle.slug}`}
                    className="group flex flex-col"
                  >
                    <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 mb-3.5 border border-zinc-200/60 dark:border-zinc-800/60 shadow-xs">
                      <Image
                        src={encodeURI(simArticle.image)}
                        alt={simArticle.title}
                        fill
                        className="object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                      <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xs text-[10px] font-semibold text-zinc-800 dark:text-zinc-200">
                        {simArticle.category}
                      </span>
                    </div>
                    <h3 className="text-sm font-medium leading-snug text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors mb-2 line-clamp-2">
                      {simArticle.title}
                    </h3>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-auto">
                      {simArticle.date}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      {/* Footer */}
      <FooterPage />
    </div>
  );
}
