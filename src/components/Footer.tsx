import React from 'react';
import { BookOpen, Heart } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface FooterProps {
  navigate: (href: string) => void;
}

export function Footer({ navigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E7E9E5] mt-16 sm:mt-24 pt-12 pb-8 text-[#252B28]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#245747] flex items-center justify-center text-[#FAF9F6]">
                <BookOpen className="w-4 h-4 text-[#DCE9DF]" />
              </div>
              <span className="font-bold text-base text-[#252B28]">{siteConfig.brandName}</span>
            </div>
            <p className="text-xs text-[#69736D] leading-relaxed">
              {siteConfig.tagline} Free, friendly English grammar quizzes, vocabulary tests, and educational guides for learners worldwide.
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] bg-[#DCE9DF] text-[#245747] font-semibold px-2.5 py-1 rounded-full">
                100% Free Educational Resource
              </span>
            </div>
          </div>

          {/* Quizzes Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#69736D] mb-3">
              Practice Quizzes
            </h3>
            <ul className="space-y-2 text-xs text-[#252B28]">
              {siteConfig.footerLinks.quizzes.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="hover:text-[#245747] hover:underline transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#69736D] mb-3">
              Learning Guides
            </h3>
            <ul className="space-y-2 text-xs text-[#252B28]">
              {siteConfig.footerLinks.guides.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="hover:text-[#245747] hover:underline transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & About Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#69736D] mb-3">
              Trust & Legal
            </h3>
            <ul className="space-y-2 text-xs text-[#252B28]">
              {siteConfig.footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="hover:text-[#245747] hover:underline transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 border-t border-[#E7E9E5] text-[11px] text-[#69736D] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            © {currentYear} {siteConfig.brandName}. Designed to help global learners build English confidence independently. Not affiliated with Cambridge Assessment, IELTS, or TOEFL.
          </p>
          <p className="flex items-center gap-1">
            Built with care for learners worldwide <Heart className="w-3.5 h-3.5 text-[#245747] inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}
