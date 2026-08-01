'use client';

import React, { useState } from 'react';

export default function DemoForm() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    restaurantName: '',
    outlets: '1',
    primaryGoal: 'Kitchen communication',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormState({
        name: '',
        phone: '',
        email: '',
        restaurantName: '',
        outlets: '1',
        primaryGoal: 'Kitchen communication',
        notes: '',
      });
    }, 1500);
  };

  return (
    <section id="demo-form" className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-y border-zinc-200/60 dark:border-zinc-800/60 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="bg-white dark:bg-[#0F1015] border border-zinc-200/80 dark:border-zinc-800/80 p-8 md:p-12 rounded-[28px] shadow-2xs relative overflow-hidden">
          {/* Subtle Orange Glow decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4F18]/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
            <span className="text-[11px] md:text-[12px] font-extrabold uppercase tracking-widest text-[#FF4F18] block">
              SCHEDULE WALKTHROUGH
            </span>
            <h2 className="text-3xl sm:text-4xl font-[850] text-[#111111] dark:text-white tracking-tight">
              Book a personal walkthrough
            </h2>
            <p className="text-base text-zinc-650 dark:text-zinc-400 leading-relaxed">
              Fill out the details below, and our product specialists will reach out within 2 hours to schedule your personalized live demo.
            </p>
          </div>

          {submitStatus === 'success' ? (
            <div className="text-center py-10 space-y-4 animate-[fadeIn_0.3s_ease-out]">
              <div className="w-16 h-16 bg-[#FFF3EF] dark:bg-emerald-950/30 text-[#FF4F18] rounded-full flex items-center justify-center mx-auto border border-orange-100 dark:border-emerald-900/50 shadow-2xs">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-[850] text-[#111111] dark:text-white">
                Demo Request Submitted!
              </h3>
              <p className="text-base text-zinc-650 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
                Thank you! Our kitchen technology team is already reviewing your details. We will contact you shortly via email or phone.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-zinc-300">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3.5 text-xs font-medium rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-[#F8F9FA] dark:bg-zinc-900 text-[#111111] dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-[#FF4F18] focus:ring-1 focus:ring-[#FF4F18] shadow-2xs"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-zinc-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    required
                    className="w-full px-4 py-3.5 text-xs font-medium rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-[#F8F9FA] dark:bg-zinc-900 text-[#111111] dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-[#FF4F18] focus:ring-1 focus:ring-[#FF4F18] shadow-2xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-zinc-300">
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="e.g. owner@restaurant.com"
                    required
                    className="w-full px-4 py-3.5 text-xs font-medium rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-[#F8F9FA] dark:bg-zinc-900 text-[#111111] dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-[#FF4F18] focus:ring-1 focus:ring-[#FF4F18] shadow-2xs"
                  />
                </div>

                {/* Restaurant Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-zinc-300">
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    name="restaurantName"
                    value={formState.restaurantName}
                    onChange={handleChange}
                    placeholder="Enter brand or company name"
                    required
                    className="w-full px-4 py-3.5 text-xs font-medium rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-[#F8F9FA] dark:bg-zinc-900 text-[#111111] dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-[#FF4F18] focus:ring-1 focus:ring-[#FF4F18] shadow-2xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Number of Outlets */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-zinc-300">
                    Number of Outlets
                  </label>
                  <select
                    name="outlets"
                    value={formState.outlets}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 text-xs font-medium rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-[#F8F9FA] dark:bg-zinc-900 text-[#111111] dark:text-zinc-100 focus:outline-none focus:border-[#FF4F18] focus:ring-1 focus:ring-[#FF4F18] cursor-pointer shadow-2xs"
                  >
                    <option value="1">Single Outlet</option>
                    <option value="2-5">2 to 5 Outlets</option>
                    <option value="6-10">6 to 10 Outlets</option>
                    <option value="10+">10+ Outlets</option>
                  </select>
                </div>

                {/* Primary operational pain point */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-zinc-300">
                    Primary Area of Focus
                  </label>
                  <select
                    name="primaryGoal"
                    value={formState.primaryGoal}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 text-xs font-medium rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-[#F8F9FA] dark:bg-zinc-900 text-[#111111] dark:text-zinc-100 focus:outline-none focus:border-[#FF4F18] focus:ring-1 focus:ring-[#FF4F18] cursor-pointer shadow-2xs"
                  >
                    <option value="Kitchen communication">Kitchen communication (KDS)</option>
                    <option value="Inventory wastage">Inventory wastage & tracking</option>
                    <option value="Slow billing">Billing speed & POS queue</option>
                    <option value="Multi-outlet management">Multi-outlet performance monitoring</option>
                    <option value="Other">Other / All in one OS</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-zinc-300">
                  Additional requirements or notes (Optional)
                </label>
                <textarea
                  name="notes"
                  value={formState.notes}
                  onChange={handleChange}
                  placeholder="Tell us about your kitchen stack, pain points, or specific features you'd like to see."
                  rows={4}
                  className="w-full px-4 py-3.5 text-xs font-medium rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-[#F8F9FA] dark:bg-zinc-900 text-[#111111] dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-[#FF4F18] focus:ring-1 focus:ring-[#FF4F18] resize-none shadow-2xs"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-[#FF4F18] hover:bg-[#E03F0D] disabled:bg-zinc-400 text-white font-bold text-sm sm:text-base rounded-full transition-all duration-200 shadow-[0_8px_20px_rgba(255,79,24,0.35)] hover:shadow-[0_10px_24px_rgba(255,79,24,0.45)] cursor-pointer select-none active:scale-[0.98]"
              >
                {isSubmitting ? 'Submitting request...' : 'Book My Live Demo'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
