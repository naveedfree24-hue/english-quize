import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  navigate: (href: string) => void;
}

export function Breadcrumbs({ items, navigate }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ label: 'Home', href: '/' }, ...items];

  // Schema.org BreadcrumbList
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `https://clearenglishquiz.com${item.href}` : undefined,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-[#69736D]">
        {allItems.map((item, idx) => {
          const isLast = idx === allItems.length - 1;
          return (
            <li key={idx} className="flex items-center gap-1.5">
              {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-[#A3ABA5]" />}
              {idx === 0 && (
                <button
                  onClick={() => navigate('/')}
                  className="hover:text-[#245747] transition-colors p-0.5 rounded focus:outline-none focus:ring-2 focus:ring-[#245747]"
                  aria-label="Home"
                >
                  <Home className="w-3.5 h-3.5" />
                </button>
              )}
              {isLast || !item.href ? (
                <span className="font-medium text-[#252B28] truncate max-w-[200px] sm:max-w-md" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => navigate(item.href!)}
                  className="hover:text-[#245747] hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-[#245747] rounded"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
