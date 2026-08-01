'use client';

import React from 'react';
import Header from '../component/header/page';
import FooterPage from '../component/footer/page';
import ScrollFocusWrapper from '../component/ScrollFocusWrapper';

import RestaurantOSHero from '../component/solutions/RestaurantOSHero';
import RadialCommandCenter from '../component/solutions/RadialCommandCenter';
import Capabilities from '../component/solutions/Capabilities';
import ChainControlDeck from '../component/solutions/ChainControlDeck';
import RestaurantTypes from '../component/solutions/RestaurantTypes';
import RoiCalculator from '../component/solutions/RoiCalculator';
import ToolIntegrations from '../component/solutions/ToolIntegrations';
import SolutionsCta from '../component/solutions/SolutionsCta';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0d0e] transition-colors duration-300 flex flex-col font-sans">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col">
        <ScrollFocusWrapper>
          <RestaurantOSHero />
        </ScrollFocusWrapper>
        
        <ScrollFocusWrapper>
          <RadialCommandCenter />
        </ScrollFocusWrapper>
        
        <ScrollFocusWrapper>
          <Capabilities />
        </ScrollFocusWrapper>
        
        <ScrollFocusWrapper>
          <ChainControlDeck />
        </ScrollFocusWrapper>
        
        <ScrollFocusWrapper>
          <RestaurantTypes />
        </ScrollFocusWrapper>
        
        <ScrollFocusWrapper>
          <RoiCalculator />
        </ScrollFocusWrapper>
        
        <ScrollFocusWrapper>
          <ToolIntegrations />
        </ScrollFocusWrapper>
        
        <ScrollFocusWrapper>
          <SolutionsCta />
        </ScrollFocusWrapper>
      </main>

      {/* Footer */}
      <FooterPage />
    </div>
  );
}
