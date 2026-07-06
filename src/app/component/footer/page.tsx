"use client";

import { useState } from "react";

const FOOTER_COLUMNS = [
  {
    title: "PLATFORM",
    links: ["Order Engine", "Kitchen Display", "Inventory Control", "Owner Dashboard", "Multi-Outlet"]
  },
  {
    title: "FOR",
    links: ["Breweries & Pubs", "QSR Chains", "Fine Dining", "Cloud Kitchens", "Multi-Outlet Groups"]
  },
  {
    title: "COMPANY",
    links: ["About", "Blog", "Careers", "Partnership"]
  },
  {
    title: "CONTACT",
    links: ["Book a Demo", "hello@digitory.in", "+91 95350 XXXXX"]
  }
];

export default function FooterPage() {
  return (
    <footer className="bg-[#0B0C0E] text-white pt-16 pb-8 font-sans antialiased border-t border-[#1F2124]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">
          
          {/* Logo & Description Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2.5">
              {/* Custom Orange Pixel Logo */}
              <svg className="w-5 h-5 text-[#FF4F18] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="8" height="8" rx="1.5" />
                <rect x="2" y="14" width="8" height="8" rx="1.5" />
                <rect x="14" y="14" width="8" height="8" rx="1.5" />
              </svg>
              <span className="font-extrabold text-white text-[19px] tracking-tight">Digitory</span>
            </div>

            <p className="text-[14px] text-[#888888] leading-relaxed max-w-[260px]">
              The operating system for modern restaurants. From chaos to clarity.
            </p>

            {/* Social Links */}
            <div className="flex gap-2.5 pt-2">
              {["in", "tw", "ig"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 bg-[#161719] hover:bg-[#202225] border border-zinc-800/80 rounded-xl flex items-center justify-center text-[12px] font-bold text-[#888888] hover:text-white transition-colors cursor-pointer select-none"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className="space-y-4">
                <h4 className="text-[11px] font-extrabold tracking-widest text-[#FFFFFF] uppercase">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => {
                    const isEmail = link.includes("@");
                    const isPhone = link.startsWith("+");
                    return (
                      <li key={link}>
                        <a
                          href={isEmail ? `mailto:${link}` : isPhone ? `tel:${link.replace(/\s+/g, "")}` : "#"}
                          className="text-[14px] font-semibold text-[#888888] hover:text-white transition-colors block py-0.5"
                        >
                          {link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="border-t border-[#1F2124]/70 pt-8 mt-16 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-[#666666] font-medium">
            © 2026 Digitory. All rights reserved.
          </p>
          <div className="flex gap-4 text-[13px] text-[#666666] font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
