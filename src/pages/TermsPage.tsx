import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';
import { siteConfig } from '../data/siteConfig';

interface TermsProps {
  navigate: (href: string) => void;
}

export function TermsPage({ navigate }: TermsProps) {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <SeoHead
        title="Terms of Use – Clear English Quiz"
        description="Terms of service and educational conditions for Clear English Quiz. Free self-study materials provided for personal learning."
        canonicalPath="/terms/"
      />

      <Breadcrumbs items={[{ label: 'Terms of Use' }]} navigate={navigate} />

      <header className="space-y-3">
        <h1 className="text-3xl font-extrabold text-[#252B28]">Terms of Use</h1>
        <p className="text-xs text-[#69736D]">Last updated: October 2026</p>
      </header>

      <div className="space-y-6 text-sm text-[#252B28] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#252B28]">1. Acceptance of Terms</h2>
          <p>
            By accessing or using {siteConfig.brandName}, you agree to these Terms of Use. If you do not agree, you should discontinue use of the website.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#252B28]">2. Educational Purpose & Disclaimer</h2>
          <p>
            All content, quizzes, and learning guides on this website are provided for informational, personal educational, and self-study purposes only. While every question and explanation has been carefully reviewed for accuracy, we make no representations or warranties regarding official exam scores, job placement, or academic admissions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#252B28]">3. Intellectual Property</h2>
          <p>
            The original quiz questions, explanations, design, branding, and learning articles on this website are the intellectual property of {siteConfig.brandName}. You may use them for personal study. Automated scraping or mass reproduction without permission is strictly prohibited.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#252B28]">4. Limitation of Liability</h2>
          <p>
            In no event shall {siteConfig.brandName} or its contributors be liable for any direct or indirect damages arising out of the use or inability to use the site materials.
          </p>
        </section>
      </div>
    </div>
  );
}
