import React from 'react';
import { siteConfig } from '../data/siteConfig';

interface AdPlacementProps {
  slotType: 'inArticle' | 'postQuiz' | 'sidebar';
  className?: string;
}

/**
 * Disabled-by-default ad placement component compliant with Section 15.
 * Prevents Cumulative Layout Shift (CLS) by only rendering when advertising is configured and enabled.
 * Never displays fake or deceptive dummy ads.
 */
export function AdPlacement({ slotType, className = '' }: AdPlacementProps) {
  if (!siteConfig.advertising.enabled) {
    return null;
  }

  const slotId = siteConfig.advertising.adSlots[slotType];

  return (
    <aside
      aria-label="Advertisement"
      className={`my-8 p-4 bg-[#FAF9F6] border border-[#E7E9E5] rounded-xl text-center text-xs text-[#69736D] min-h-[120px] flex flex-col items-center justify-center ${className}`}
    >
      <span className="text-[10px] uppercase tracking-wider text-[#A3ABA5] mb-2">Advertisement</span>
      <div
        className="w-full flex items-center justify-center"
        data-ad-client={siteConfig.advertising.publisherId}
        data-ad-slot={slotId}
      >
        {/* Ad network script container */}
      </div>
    </aside>
  );
}
