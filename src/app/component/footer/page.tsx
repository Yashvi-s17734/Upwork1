"use client";

import { useState } from "react";
import Image from "next/image";

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
    <footer className="bg-[#0B0C0E] text-white pt-12 pb-6 font-sans antialiased border-t border-[#1F2124]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">

          {/* Logo & Description Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2.5">
              {/* Custom Orange Pixel Logo */}
              <Image
                src="/demologo.png"
                alt="Digitory Logo"
                width={28}
                height={28}
                className="h-7 w-auto object-contain"
                priority
              />
              <span className="font-extrabold text-white text-[19px] tracking-tight">Digitory</span>
            </div>

            <p className="text-[14px] text-[#888888] leading-relaxed max-w-[260px]">
              The operating system for modern restaurants. From chaos to clarity.
            </p>

            {/* Social Links */}
            <div className="flex gap-2.5 pt-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 bg-[#161719] hover:bg-[#202225] border border-zinc-800/80 rounded-xl flex items-center justify-center text-[#888888] hover:text-white transition-colors cursor-pointer select-none"
              >
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="w-9 h-9 bg-[#161719] hover:bg-[#202225] border border-zinc-800/80 rounded-xl flex items-center justify-center text-[#888888] hover:text-white transition-colors cursor-pointer select-none"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 bg-[#161719] hover:bg-[#202225] border border-zinc-800/80 rounded-xl flex items-center justify-center text-[#888888] hover:text-white transition-colors cursor-pointer select-none"
              >
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
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
