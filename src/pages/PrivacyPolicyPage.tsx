import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';
import { siteConfig } from '../data/siteConfig';

interface PolicyProps {
  navigate: (href: string) => void;
}

export function PrivacyPolicyPage({ navigate }: PolicyProps) {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <SeoHead
        title="Privacy Policy – Clear English Quiz"
        description="Learn how Clear English Quiz respects your privacy. No mandatory user accounts, no tracking cookies by default, and minimal data collection."
        canonicalPath="/privacy-policy/"
      />

      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} navigate={navigate} />

      <header className="space-y-3">
        <h1 className="text-3xl font-extrabold text-[#252B28]">Privacy Policy</h1>
        <p className="text-xs text-[#69736D]">Last updated: October 2026</p>
      </header>

      <div className="space-y-6 text-sm text-[#252B28] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#252B28]">1. Introduction & Overview</h2>
          <p>
            {siteConfig.brandName} ("we", "our", or "the website") is committed to protecting the privacy of our visitors. This Privacy Policy outlines what information is collected when you use our website and how that information is handled.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#252B28]">2. No Account or Registration Required</h2>
          <p>
            You can take every quiz, review answer explanations, and read all educational guides without creating an account or providing your name, phone number, address, or billing details.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#252B28]">3. Information You Voluntarily Provide</h2>
          <p>
            If you choose to contact us using our contact form, we collect the email address and message contents you provide solely to reply to your inquiry. We do not sell, rent, or trade email addresses to third parties.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#252B28]">4. Local Browser Storage</h2>
          <p>
            Quiz progression (such as temporary question state while taking a quiz) is handled locally within your web browser memory. Your test answers are evaluated client-side and are not transmitted to or stored on external database servers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#252B28]">5. Third-Party Hosting & Log Data</h2>
          <p>
            Like all web applications, our hosting infrastructure (Netlify / Cloud Run) may record standard server log information such as IP addresses, browser user agent, and timestamp solely for security maintenance and reliability monitoring.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#252B28]">6. Contact Information</h2>
          <p>
            If you have questions about this Privacy Policy, please reach out via our{' '}
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
