'use client';

import React from 'react';

export default function TestSection() {
  const steps = [
    {
      num: 1,
      title: 'Orders synced',
      desc: 'Every order, in real time.',
      highlighted: false,
    },
    {
      num: 2,
      title: 'Inventory updated',
      desc: 'Always stock-aware.',
      highlighted: false,
    },
    {
      num: 3,
      title: 'Live sales',
      desc: "Know what's selling, now.",
      highlighted: false,
    },
    {
      num: 4,
      title: 'Kitchen status',
      desc: 'Every order on track.',
      highlighted: false,
    },
    {
      num: 5,
      title: 'Outlet performance',
      desc: 'One view. Every outlet.',
      highlighted: true,
    },
  ];

  return (
    <div className="w-full">
      {/* Horizontal Divider Line */}
      <hr className="border-t border-zinc-200 w-full" />

      <section className="mx-auto max-w-7xl px-6 md:px-8 py-10 md:py-16">
        {/* Section Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-[44px] font-[850] tracking-tight text-[#111111] leading-[1.15] mb-10 md:mb-12">
          Can your outlet pass the
          <br />
          <span className="text-[#FF4F18]">Saturday night</span> test?
        </h2>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12 items-center">

          {/* Left: WhatsApp Mockup Image */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <img
              src="/image.png"
              alt="WhatsApp Group Chat Mockup"
              className="w-full max-w-[440px] h-auto object-contain"
            />
          </div>

          {/* Right: Steps Timeline */}
          <div className="lg:col-span-6 w-full max-w-[480px] mx-auto lg:ml-auto">
            <div className="relative pl-16 space-y-8 py-4">

              {/* Vertical timeline line */}
              <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-[#FF4F18]" />

              {steps.map((step) => (
                <div key={step.num} className="relative flex items-start group">

                  {/* Number Circle */}
                  <div className="absolute -left-16 flex items-center justify-center">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full border-2 font-bold text-base transition-all duration-300 ${step.highlighted
                          ? 'bg-[#FF4F18] border-[#FF4F18] text-white shadow-[0_4px_12px_rgba(255,79,24,0.35)]'
                          : 'bg-white border-[#FF4F18] text-zinc-800'
                        }`}
                    >
                      {step.num}
                    </div>
                  </div>

                  {/* Step Text Info */}
                  <div className="w-full pb-5 border-b border-[#FF4F18]/25">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-zinc-950 leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-zinc-550 text-xs sm:text-sm mt-1 leading-normal">
                      {step.desc}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
