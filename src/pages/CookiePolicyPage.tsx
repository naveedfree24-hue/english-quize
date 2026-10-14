import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';
import { siteConfig } from '../data/siteConfig';

interface PolicyProps {
  navigate: (href: string) => void;
}

export function CookiePolicyPage({ navigate }: PolicyProps) {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <SeoHead
        title="Cookie Policy – Clear English Quiz"
        description="Understand how cookies and local storage are utilized on Clear English Quiz. We do not use third-party tracking cookies by default."
        canonicalPath="/cookie-policy/"
      />

      <Breadcrumbs items={[{ label: 'Cookie Policy' }]} navigate={navigate} />

      <header className="space-y-3">
        <h1 className="text-3xl font-extrabold text-[#252B28]">Cookie Policy</h1>
        <p className="text-xs text-[#69736D]">Last updated: October 2026</p>
      </header>

      <div className="space-y-6 text-sm text-[#252B28] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#252B28]">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that a website stores on your computer or mobile device when you visit. They are commonly used to remember preferences and ensure core features function properly.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#252B28]">2. Our Cookie Usage</h2>
          <p>
            {siteConfig.brandName} is designed to be lightweight and respectful of your privacy. We do not place third-party marketing or tracking cookies on your device by default.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-[#69736D]">
            <li>
              <strong>Essential Browser Memory:</strong> Temporary state is kept in memory to allow you to answer questions and view your final score.
            </li>
            <li>
              <strong>Third-Party Analytics & Ads (Future):</strong> If analytics or display advertising are activated in the future with verified partners, this page and consent notices will be updated accordingly.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#252B28]">3. How You Can Control Cookies</h2>
          <p>
            You can modify your browser settings to block or delete cookies at any time. Because Clear English Quiz does not require cookies to operate, doing so will not disrupt your ability to take practice quizzes.
          </p>
        </section>
      </div>
    </div>
  );
}
