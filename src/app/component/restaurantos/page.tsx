"use client";

import { useState } from "react";

export default function RestaurantOSPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#111111]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h1 className="text-[44px] md:text-[56px] font-[850] tracking-tight leading-[1.1] text-[#111111]">
            What changes when your <br />
            <span className="text-[#FF4F18]">restaurant has an OS.</span>
          </h1>
          
          <div>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-200/80 rounded-full font-bold text-sm text-[#111111] hover:bg-zinc-50 transition-colors shadow-sm select-none cursor-pointer">
              <span>All stories</span>
              <svg className="w-4 h-4 text-[#111111]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1 - Dark Theme */}
          <div className="flex flex-col h-full bg-[#0B0C0E] rounded-[32px] p-8 md:p-10 justify-between gap-8 transition-transform duration-300 hover:-translate-y-1">
            <div className="space-y-6 flex-grow">
              {/* Slanted Quotes */}
              <div className="flex gap-1.5">
                <span className="w-1.5 h-4.5 bg-[#FF4F18] rounded-full" />
                <span className="w-1.5 h-4.5 bg-[#FF4F18] rounded-full" />
              </div>
              
              <p className="text-[#A3A3A3] text-[16px] leading-relaxed font-semibold">
                Earlier, rush hours were chaos between floor, kitchen, and manager. Digitory gave us real-time updates and smooth coordination. Friday nights feel like we finally have a superpower.
              </p>
            </div>

            <div className="space-y-6">
              {/* Stat Pill */}
              <div className="bg-[#FFF3EF] text-[#FF4F18] py-2.5 px-4 rounded-xl text-[14px] font-extrabold inline-flex items-center gap-1.5">
                <span className="text-[16px] font-bold">↑</span> 22% faster service
              </div>

              {/* Bio */}
              <div className="flex items-center">
                <div className="w-11 h-11 rounded-full bg-[#FF4F18] flex items-center justify-center text-white text-[14px] font-bold flex-shrink-0">
                  RK
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-extrabold text-[15px]">Rajesh Kumar</h4>
                  <p className="text-[#666666] text-[13px] font-medium">Owner, BygBrewski Bangalore</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Light Theme */}
          <div className="flex flex-col h-full bg-[#F8F9FA] rounded-[32px] p-8 md:p-10 border border-zinc-200/40 justify-between gap-8 transition-transform duration-300 hover:-translate-y-1">
            <div className="space-y-6 flex-grow">
              {/* Slanted Quotes */}
              <div className="flex gap-1.5">
                <span className="w-1.5 h-4.5 bg-[#FF4F18] rounded-full" />
                <span className="w-1.5 h-4.5 bg-[#FF4F18] rounded-full" />
              </div>
              
              <p className="text-[#4A4A4A] text-[16px] leading-relaxed font-semibold">
                We spend less time coordinating and more time with customers. Digitory is now the backbone of how we run every outlet.
              </p>
            </div>

            <div className="space-y-6">
              {/* Stat Pill */}
              <div className="bg-[#FFF3EF] text-[#FF4F18] py-2.5 px-4 rounded-xl text-[14px] font-extrabold inline-flex items-center gap-1.5">
                3 hours saved daily
              </div>

              {/* Bio */}
              <div className="flex items-center">
                <div className="w-11 h-11 rounded-full bg-[#FF4F18] flex items-center justify-center text-white text-[14px] font-bold flex-shrink-0">
                  PM
                </div>
                <div className="ml-4">
                  <h4 className="text-[#111111] font-extrabold text-[15px]">Priya Mehta</h4>
                  <p className="text-[#888888] text-[13px] font-medium">Ops Head, Toit Brewpub</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Light Theme */}
          <div className="flex flex-col h-full bg-[#F8F9FA] rounded-[32px] p-8 md:p-10 border border-zinc-200/40 justify-between gap-8 transition-transform duration-300 hover:-translate-y-1">
            <div className="space-y-6 flex-grow">
              {/* Slanted Quotes */}
              <div className="flex gap-1.5">
                <span className="w-1.5 h-4.5 bg-[#FF4F18] rounded-full" />
                <span className="w-1.5 h-4.5 bg-[#FF4F18] rounded-full" />
              </div>
              
              <p className="text-[#4A4A4A] text-[16px] leading-relaxed font-semibold">
                Inventory wastage was killing our margins. After Digitory, every gram is accounted for. We recovered ₹2L monthly in the first quarter alone.
              </p>
            </div>

            <div className="space-y-6">
              {/* Stat Pill */}
              <div className="bg-[#FFF3EF] text-[#FF4F18] py-2.5 px-4 rounded-xl text-[14px] font-extrabold inline-flex items-center gap-1.5">
                ₹2L recovered monthly
              </div>

              {/* Bio */}
              <div className="flex items-center">
                <div className="w-11 h-11 rounded-full bg-[#FF4F18] flex items-center justify-center text-white text-[14px] font-bold flex-shrink-0">
                  AS
                </div>
                <div className="ml-4">
                  <h4 className="text-[#111111] font-extrabold text-[15px]">Amit Shah</h4>
                  <p className="text-[#888888] text-[13px] font-medium">F&B Director, Bier Library</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
