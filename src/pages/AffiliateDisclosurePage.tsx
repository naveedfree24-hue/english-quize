import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';
import { siteConfig } from '../data/siteConfig';

interface DisclosureProps {
  navigate: (href: string) => void;
}

export function AffiliateDisclosurePage({ navigate }: DisclosureProps) {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <SeoHead
        title="Affiliate & Advertising Disclosure – Clear English Quiz"
        description="Our transparent commercial disclosure. Learn how Clear English Quiz supports its free educational resources through affiliate links and future advertising."
        canonicalPath="/affiliate-disclosure/"
      />

      <Breadcrumbs items={[{ label: 'Affiliate Disclosure' }]} navigate={navigate} />

      <header className="space-y-3">
        <h1 className="text-3xl font-extrabold text-[#252B28]">
          Affiliate & Commercial Disclosure
        </h1>
        <p className="text-xs text-[#69736D]">Last updated: October 2026</p>
      </header>

      <div className="space-y-6 text-sm text-[#252B28] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#252B28]">1. Transparent Learning Commitment</h2>
          <p>
            {siteConfig.brandName} is dedicated to keeping English grammar and vocabulary quizzes 100% free and open to everyone around the world. To sustain website hosting and ongoing content development, we may earn compensation through affiliate programs and approved display advertising.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#252B28]">2. How Affiliate Links Work</h2>
          <p>
            Certain external links on this website (such as recommended grammar textbooks or vocabulary learning apps) may be affiliate links. If you choose to click one of these links and purchase a recommended resource, we may receive a small referral commission at no additional cost to you.
          </p>
          <p>
            All commercial links are clearly labeled with badges such as <em>"Affiliate Partner Link"</em> or <em>"Sponsored"</em> and utilize proper <code>rel="sponsored"</code> HTML tags.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#252B28]">3. Editorial Independence</h2>
          <p>
            We only recommend study tools, reference books, and dictionaries that genuinely help language learners. A commercial relationship never dictates our quiz questions, answers, or grammatical explanations.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#252B28]">4. Questions or Concerns?</h2>
          <p>
            If you have questions regarding any product recommendation or commercial disclosure on this site, please feel free to reach out through our{' '}
            <button
              onClick={() => navigate('/contact/')}
              className="text-[#245747] font-semibold underline"
            >
              Contact Page
            </button>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
