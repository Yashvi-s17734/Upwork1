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

  const chatMessages = [
    {
      role: 'Chef',
      text: 'Table 12 order missing.',
      time: '7:42 PM',
      avatarColor: 'bg-red-100 text-red-700',
      avatarLabel: '👨‍🍳',
    },
    {
      role: 'Inventory',
      text: 'Paneer out of stock.',
      time: '7:45 PM',
      avatarColor: 'bg-red-100 text-red-700',
      avatarLabel: '📦',
    },
    {
      role: 'Cashier',
      text: 'Billing system stuck.',
      time: '7:48 PM',
      avatarColor: 'bg-red-100 text-red-700',
      avatarLabel: '💵',
    },
    {
      role: 'Manager',
      text: "Need today's sales.",
      time: '7:52 PM',
      avatarColor: 'bg-red-100 text-red-700',
      avatarLabel: '👔',
    },
    {
      role: 'Captain',
      text: '3 orders delayed.',
      time: '7:53 PM',
      avatarColor: 'bg-red-100 text-red-700',
      avatarLabel: '🤵',
    },
  ];

  return (
    <div className="w-full">
      {/* Horizontal Divider Line */}
      <hr className="border-t border-zinc-200 w-full" />

      <section className="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-24">
        {/* Section Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 leading-[1.15] mb-16 md:mb-20">
          Can your outlet pass the
          <br />
          <span className="text-[#FF4F18]">Saturday night</span> test?
        </h2>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12 items-center">
          
          {/* Left: WhatsApp Mockup (Warning/Error State) */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <div className="w-full max-w-[440px] rounded-[32px] bg-[#F0EBE3] shadow-2xl overflow-hidden relative">
              
              {/* Phone Header */}
              <div className="bg-[#005C4B] px-4 py-4 flex items-center justify-between text-white select-none">
                <div className="flex items-center gap-3">
                  {/* Back Arrow */}
                  <svg className="h-5 w-5 opacity-90 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  
                  {/* Group Avatar */}
                  <div className="h-10 w-10 rounded-full bg-zinc-200/20 flex items-center justify-center font-semibold text-xs border border-white/10">
                    Group
                  </div>
                  
                  {/* Header Info */}
                  <div>
                    <h3 className="font-semibold text-sm leading-tight">Restaurant Operations</h3>
                    <span className="text-[11px] text-emerald-100/80">12 members, 3 online</span>
                  </div>
                </div>
                
                {/* Call/Menu Icons */}
                <div className="flex items-center gap-4 text-white/95">
                  <svg className="h-5 w-5 cursor-pointer hover:opacity-80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                  </svg>
                  <svg className="h-5 w-5 cursor-pointer hover:opacity-80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.57a.987.987 0 00-1.01.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.7 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.62c0-.55-.45-1-1-1z" />
                  </svg>
                  <svg className="h-5 w-5 cursor-pointer hover:opacity-80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </div>
              </div>

              {/* Chat Area */}
              <div className="p-4 space-y-4 max-h-[460px] overflow-y-auto">
                {/* Date Separator */}
                <div className="flex justify-center my-2">
                  <span className="bg-white/80 backdrop-blur-xs text-[11px] text-zinc-500 font-medium px-3 py-1 rounded-md shadow-xs select-none">
                    Today
                  </span>
                </div>

                {/* Chat Messages */}
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 transition-all duration-300 hover:translate-x-1"
                  >
                    {/* Avatar */}
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center shadow-xs shrink-0 text-sm select-none ${msg.avatarColor}`}>
                      {msg.avatarLabel}
                    </div>

                    {/* Message Bubble */}
                    <div className="bg-white rounded-2xl rounded-tl-none px-3.5 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.08)] max-w-[82%] relative flex flex-col">
                      <span className="text-[11px] font-bold text-red-600 mb-0.5 leading-none">
                        {msg.role}
                      </span>
                      <p className="text-[13px] text-zinc-800 leading-snug pr-8 py-0.5">
                        {msg.text}
                      </p>
                      <span className="text-[9px] text-zinc-400 absolute bottom-1 right-2 leading-none">
                        {msg.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mock Chat Input Bar */}
              <div className="bg-[#F0F2F5] px-3 py-3 border-t border-zinc-200/50 flex items-center gap-2 select-none">
                <div className="flex items-center gap-2.5 bg-white rounded-full px-3 py-2 flex-1 shadow-xs border border-zinc-200/20">
                  <svg className="h-5.5 w-5.5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-zinc-400 text-xs flex-1">Type a message</span>
                  <svg className="h-5 w-5 text-zinc-500 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </div>
                <button className="bg-[#00a884] h-9 w-9 rounded-full flex items-center justify-center text-white shrink-0">
                  <svg className="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>
              </div>

            </div>
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
                      className={`flex h-12 w-12 items-center justify-center rounded-full border-2 font-bold text-base transition-all duration-300 ${
                        step.highlighted
                          ? 'bg-[#FF4F18] border-[#FF4F18] text-white shadow-[0_4px_12px_rgba(255,79,24,0.35)]'
                          : 'bg-white border-[#FF4F18] text-zinc-800'
                      }`}
                    >
                      {step.num}
                    </div>
                  </div>

                  {/* Step Text Info */}
                  <div className="w-full pb-5 border-b border-[#FF4F18]/25">
                    <h4 className="text-lg font-bold text-zinc-950 leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-zinc-550 text-sm mt-1 leading-normal">
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
