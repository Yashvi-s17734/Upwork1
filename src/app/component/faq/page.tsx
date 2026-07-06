"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    id: 1,
    question: "How does Digitory manage orders from different platforms?",
    answer: "Whether it's dine-in, Swiggy, Zomato, QR or direct orders, everything flows into one connected system, so you never have to switch between multiple apps."
  },
  {
    id: 2,
    question: "How does the kitchen stay in sync during rush hours?",
    answer: "Digitory prints and sends tickets instantly to the respective kitchen stations (e.g. pantry, grill, bar) based on the item type. Cooks view active orders on a digital display, ensuring no item is missed and preparation status is updated in real-time."
  },
  {
    id: 3,
    question: "Can Digitory help reduce inventory wastage?",
    answer: "Yes. By linking recipe ingredients to sales in real-time, Digitory deducts stock automatically. You receive instant alerts when inventory falls below thresholds, and real-time reports highlight wastage trends, allowing you to maximize margins."
  },
  {
    id: 4,
    question: "Can I manage customer loyalty and repeat business?",
    answer: "Absolutely. Digitory automatically builds customer profiles from dine-in or delivery numbers. You can launch tailored offers, manage feedback, and execute direct marketing campaigns to encourage repeat visits."
  }
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(1); // First item open by default

  const handleToggle = (id: number) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="bg-white font-sans antialiased text-[#111111] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Title */}
        <div className="mb-14">
          <h1 className="text-[36px] sm:text-[44px] md:text-[52px] font-[850] tracking-tight leading-[1.15] text-[#111111]">
            Questions Before You <span className="text-[#FF4F18]">Commit?</span>
          </h1>
        </div>

        {/* Accordions Container */}
        <div className="border-t border-zinc-100">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className="border-b border-zinc-100"
              >
                {/* Question Trigger */}
                <button
                  onClick={() => handleToggle(item.id)}
                  className="w-full flex items-center justify-between py-6 text-left outline-none cursor-pointer group"
                >
                  <span className="text-[16px] sm:text-[18px] font-bold text-[#111111] pr-6 transition-colors duration-200 group-hover:text-zinc-600">
                    {item.question}
                  </span>
                  
                  {/* Plus/Minus Indicator */}
                  <span className="text-[#FF4F18] font-[400] text-[26px] leading-none select-none flex-shrink-0 w-6 text-right transition-transform duration-200">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer Panel with smooth transition heights */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? "max-h-[250px] pb-6 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <p className="text-[15px] sm:text-[16px] text-[#666666] leading-relaxed max-w-[90%]">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
