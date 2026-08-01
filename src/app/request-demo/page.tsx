'use client';

import React from 'react';
import Header from '../component/header/page';
import DemoHero from '../component/request-demo/DemoHero';
import DemoForm from '../component/request-demo/DemoForm';
import RestaurantOSPage from '../component/restaurantos/page';
import FAQPage from '../component/faq/page';
import FooterPage from '../component/footer/page';

export default function RequestDemoPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#08080a] transition-colors duration-300 flex flex-col font-sans relative">
      {/* Header Overlay */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <main className="flex-1 w-full bg-[#fafafa] dark:bg-[#08080a] text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        {/* Hero, Intro Video & Trustship */}
        <DemoHero />

        {/* Demo Booking Form */}
        <DemoForm />

        {/* Testimonials (Chaos Stories) */}
        <RestaurantOSPage />

        {/* FAQs */}
        <FAQPage />

        {/* Footer */}
        <FooterPage />
      </main>
    </div>
  );
}
