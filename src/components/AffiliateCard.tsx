import React from 'react';
import { ExternalLink, Bookmark } from 'lucide-react';
import { AffiliateResource } from '../types';

interface AffiliateCardProps {
  resource: AffiliateResource;
}

export function AffiliateCard({ resource }: AffiliateCardProps) {
  return (
    <div className="bg-[#FFFFFF] border border-[#E7E9E5] rounded-xl p-5 hover:border-[#245747]/40 transition-colors">
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="text-[11px] font-semibold text-[#245747] bg-[#DCE9DF] px-2.5 py-0.5 rounded-full flex items-center gap-1">
          <Bookmark className="w-3 h-3" />
          {resource.badgeText}
        </span>
        <span className="text-[10px] text-[#69736D] italic">
          {resource.disclosureLabel}
        </span>
      </div>

      <h4 className="text-base font-bold text-[#252B28] mb-1">{resource.name}</h4>
      <p className="text-xs text-[#245747] font-medium mb-2">{resource.tagline}</p>
      <p className="text-xs sm:text-sm text-[#69736D] leading-relaxed mb-4">
        {resource.description}
      </p>

      <a
        href={resource.destinationUrl}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#245747] hover:underline"
      >
        <span>Learn more about this resource</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}
