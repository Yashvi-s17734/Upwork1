"use client";

import React, { useState } from "react";

interface ModuleData {
  id: string;
  label: string;
  sublabel: string;
  iconBg: string;
  iconColor: string;
  iconSvg: React.ReactNode;
  inspectorTitle: string;
  inspectorDesc: string;
  metricValue: string;
  metricLabel: string;
}

export default function RadialCommandCenter() {
  const modules: ModuleData[] = [
    {
      id: "pos",
      label: "POS & Billing",
      sublabel: "15s Billing Counter",
      iconBg: "bg-[#FFF3EF]",
      iconColor: "text-[#FF4F18]",
      iconSvg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      ),
      inspectorTitle: "POS & Billing Hub",
      inspectorDesc: "Ultra-fast counter POS, visual table management, QR digital menus, and split billing in 15 seconds.",
      metricValue: "15 sec",
      metricLabel: "Avg Checkout Time",
    },
    {
      id: "kds",
      label: "Kitchen KDS",
      sublabel: "35% Faster Prep",
      iconBg: "bg-[#FFF3EF]",
      iconColor: "text-[#FF4F18]",
      iconSvg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
      inspectorTitle: "Kitchen KDS Hub",
      inspectorDesc: "Direct routing from orders to specific kitchen displays. Eliminates paper tickets, coordinates prep stages, and minimizes communication errors.",
      metricValue: "35%",
      metricLabel: "Faster Food Prep",
    },
    {
      id: "inventory",
      label: "Smart Inventory",
      sublabel: "Recipe Auto-Deduct",
      iconBg: "bg-[#FFF3EF]",
      iconColor: "text-[#FF4F18]",
      iconSvg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
      inspectorTitle: "Smart Inventory Hub",
      inspectorDesc: "Tracks raw ingredients and auto-deducts them based on recipe configurations. Sends proactive alerts before items run out of stock.",
      metricValue: "98%",
      metricLabel: "Inventory Accuracy",
    },
    {
      id: "multioutlet",
      label: "Multi-Outlet Hub",
      sublabel: "Global Menu Push",
      iconBg: "bg-[#FFF3EF]",
      iconColor: "text-[#FF4F18]",
      iconSvg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      ),
      inspectorTitle: "Multi-Outlet Hub",
      inspectorDesc: "Push menu updates globally, manage multi-store configurations, sync pricing tiers, and monitor centralized reports without logging into separate accounts.",
      metricValue: "1-Click",
      metricLabel: "Global Menu Sync",
    },
    {
      id: "ai",
      label: "AI Forecast BI",
      sublabel: "Real-Time Reports",
      iconBg: "bg-[#FFF3EF]",
      iconColor: "text-[#FF4F18]",
      iconSvg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0017.75 3.75H6.25A2.25 2.25 0 004 6v12A2.25 2.25 0 006.25 20.25z" />
        </svg>
      ),
      inspectorTitle: "AI Forecast BI Engine",
      inspectorDesc: "Anticipate customer demands, optimize staff shifts, and reduce raw ingredient spoilage through predictive AI and live dashboard widgets.",
      metricValue: "92%",
      metricLabel: "Forecasting Precision",
    },
    {
      id: "integrations",
      label: "Swiggy & Zomato",
      sublabel: "2-Way Sync Engine",
      iconBg: "bg-[#FFF3EF]",
      iconColor: "text-[#FF4F18]",
      iconSvg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.61 9.51m5.98 4.86a14.98 14.98 0 01-6.16 12.12A14.978 14.978 0 012.25 12c0-8.3 6.7-15 15-15h.75v.75c0 8.3-6.7 15-15 15z" />
        </svg>
      ),
      inspectorTitle: "Swiggy & Zomato Engine",
      inspectorDesc: "Eliminate manual entries on separate tablets. Real-time direct integrations map online orders directly into your billing terminal and kitchen setup.",
      metricValue: "0 min",
      metricLabel: "Manual Order Delay",
    },
  ];

  const [activeModuleId, setActiveModuleId] = useState<string>("pos");
  const activeModule = modules.find((m) => m.id === activeModuleId) || modules[0];

  return (
    <section className="mx-auto max-w-7xl px-6 md:px-8 py-6 md:py-10">
      {/* Header Block */}
      <div className="text-left mb-12 md:mb-16 animate-fade-in">
        <span className="text-[11px] md:text-[12px] font-extrabold uppercase tracking-widest text-[#FF4F18] block mb-3">
          Radial Command Center
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-[850] tracking-tight text-[#111111] leading-[1.15] mb-4">
          The Centralized <span className="text-[#FF4F18]">Restaurant Brain</span>
        </h2>
        <p className="text-base md:text-lg text-zinc-650 leading-relaxed">
          Click any module around the central Digitory brain to inspect real-time performance indicators and operational metrics.
        </p>
      </div>

      {/* 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
        
        {/* Left Column: Modules Grid List */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 items-start content-start">
          {modules.map((item) => {
            const isActive = activeModuleId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveModuleId(item.id)}
                className={`flex items-center gap-4 p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer w-full select-none ${
                  isActive
                    ? "bg-white border-zinc-900 shadow-[0_8px_24px_rgba(0,0,0,0.04)] scale-[1.01]"
                    : "bg-[#FFF]/40 border-zinc-200/60 hover:bg-white hover:border-zinc-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.015)]"
                }`}
              >
                {/* Styled Icon Wrapper */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg} ${item.iconColor}`}>
                  {item.iconSvg}
                </div>

                {/* Text Details */}
                <div className="flex flex-col min-w-0">
                  <span className="text-[14px] font-extrabold text-[#111111] leading-tight truncate">
                    {item.label}
                  </span>
                  <span className="text-[11px] font-bold text-zinc-400 mt-1 uppercase tracking-wide">
                    {item.sublabel}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Module Inspector Panel */}
        <div className="lg:col-span-5 flex">
          <div className="w-full bg-[#FAF6F0] rounded-2xl p-8 border border-orange-100/50 flex flex-col justify-between gap-8 select-none transition-all duration-300 shadow-2xs">
            
            {/* Top Inspector Status info */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold tracking-widest text-[#FF4F18] uppercase">
                  Module Inspector
                </span>
                <div className="flex items-center gap-1.5 bg-[#FFF3EF] border border-[#FF4F18]/20 px-2.5 py-1 rounded-full text-[10px] font-extrabold text-[#FF4F18] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F18] animate-pulse" />
                  Connected
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-black text-[#111111] tracking-tight">
                  {activeModule.inspectorTitle}
                </h3>
                <p className="text-sm text-zinc-650 leading-relaxed">
                  {activeModule.inspectorDesc}
                </p>
              </div>
            </div>

            {/* Bottom Inspector Metric Highlight - Square Base */}
            <div className="bg-white rounded-xl p-8 border border-zinc-200 flex flex-col items-center justify-center text-center shadow-3xs min-h-[160px]">
              <span className="text-4xl md:text-5xl font-black text-[#FF4F18] leading-none mb-2">
                {activeModule.metricValue}
              </span>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wide">
                {activeModule.metricLabel}
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
