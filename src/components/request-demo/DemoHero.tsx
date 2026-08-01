'use client';

import React, { useRef, useState } from 'react';

export default function DemoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const trustCircles = [
    { text: 'R', bg: 'bg-[#ECECEC]', textCol: 'text-zinc-650' },
    { text: 'C', bg: 'bg-[#D2E9E9]', textCol: 'text-teal-600' },
    { text: 'B', bg: 'bg-[#FFE5D9]', textCol: 'text-orange-600' },
    { text: 'K', bg: 'bg-[#E8EAFF]', textCol: 'text-indigo-600' },
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 max-w-7xl mx-auto px-6 md:px-8 text-center space-y-10 z-10">
      {/* Tagline Badge */}
      <span className="text-[11px] md:text-[12px] font-extrabold uppercase tracking-widest text-[#FF4F18] block">
        Request a Demo
      </span>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-[52px] font-[850] tracking-tight text-[#111111] dark:text-white leading-[1.1]">
          See Digitory in action.
          <br />
          <span className="text-[#FF4F18]">Transform your kitchen operations.</span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-650 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Discover how our unified restaurant operating system manages chaos hours, optimizes inventory, and boosts margins.
        </p>
      </div>

      {/* Trust Circles (Trustship) */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
        <div className="flex -space-x-3 select-none">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ECECEC] text-zinc-650 font-extrabold text-[11px] border-2 border-white shadow-2xs">
            R
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF3EF] text-[#FF4F18] font-extrabold text-[11px] border-2 border-white shadow-2xs">
            C
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFE5D9] text-[#FF4F18] font-extrabold text-[11px] border-2 border-white shadow-2xs">
            B
          </div>
        </div>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
          Trusted by top restaurants, cafés, and breweries across India.
        </p>
      </div>

      {/* Short Intro Video */}
      <div className="relative max-w-4xl mx-auto aspect-16/9 rounded-[28px] overflow-hidden border border-zinc-200/60 dark:border-zinc-800 shadow-2xs group">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover cursor-pointer"
          onClick={togglePlay}
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Play/Pause Overlay Button */}
        <button
          onClick={togglePlay}
          className="absolute bottom-6 right-6 p-4 rounded-full bg-white/90 dark:bg-zinc-900/90 text-zinc-900 dark:text-white backdrop-blur-md shadow-lg border border-zinc-200/50 dark:border-zinc-800/50 hover:scale-105 active:scale-95 transition-all z-10 cursor-pointer"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
      </div>
    </section>
  );
}
