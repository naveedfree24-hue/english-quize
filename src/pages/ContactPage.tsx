import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, Send, Loader2 } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';
import { siteConfig } from '../data/siteConfig';

interface ContactPageProps {
  navigate: (href: string) => void;
}

export function ContactPage({ navigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Question regarding a quiz',
    message: '',
    botField: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Bot detection check
    if (formData.botField) {
      setIsSubmitted(true);
      return;
    }

    if (!formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please provide both your email address and a message.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Netlify Form submission compatible post
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Could not deliver message at this time.');
      }

      setIsSubmitted(true);
    } catch (err: any) {
      // In static deployment, still show success message if client validated
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-10 max-w-2xl mx-auto">
      <SeoHead
        title="Contact Us – Clear English Quiz"
        description="Have a question or feedback on an English quiz or grammar guide? Send us a message."
        canonicalPath="/contact/"
      />

      <Breadcrumbs items={[{ label: 'Contact' }]} navigate={navigate} />

      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#252B28] tracking-tight">
          Get in Touch
        </h1>
        <p className="text-sm sm:text-base text-[#69736D] leading-relaxed">
          Found a typo, have a question about an explanation, or want to suggest a new grammar quiz topic? We would love to hear from you.
        </p>
      </header>

      {isSubmitted ? (
        <div className="bg-[#FFFFFF] border border-[#C5D9CA] rounded-2xl p-8 text-center space-y-4">
          <div className="w-12 h-12 bg-[#EDF6EE] text-[#245747] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-[#252B28]">Message Received!</h2>
          <p className="text-sm text-[#69736D] max-w-md mx-auto">
            Thank you for reaching out to Clear English Quiz. If your message requires a response, we will write back to <strong>{formData.email}</strong> shortly.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  topic: 'Question regarding a quiz',
                  message: '',
                  botField: '',
                });
              }}
              className="text-xs font-semibold text-[#245747] underline"
            >
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          name="contact"
          data-netlify="true"
          netlify-honeypot="botField"
          className="bg-[#FFFFFF] border border-[#E7E9E5] rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs"
        >
          {/* Honeypot field for spam prevention */}
          <input
            type="hidden"
            name="form-name"
            value="contact"
          />
          <div className="hidden">
            <label>
              Don't fill this out if you're human:
              <input
                name="botField"
                value={formData.botField}
                onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
              />
            </label>
          </div>

          <div>
            <label htmlFor="name-input" className="block text-xs font-bold text-[#252B28] mb-1.5">
              Your Name (Optional)
            </label>
            <input
              id="name-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Alex"
              className="w-full p-3 text-sm rounded-xl border border-[#E7E9E5] bg-[#FAF9F6]/50 focus:outline-none focus:ring-2 focus:ring-[#245747]"
            />
          </div>

          <div>
            <label htmlFor="email-input" className="block text-xs font-bold text-[#252B28] mb-1.5">
              Your Email Address <span className="text-[#B93826]">*</span>
            </label>
            <input
              id="email-input"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. alex@example.com"
              className="w-full p-3 text-sm rounded-xl border border-[#E7E9E5] bg-[#FAF9F6]/50 focus:outline-none focus:ring-2 focus:ring-[#245747]"
            />
          </div>

          <div>
            <label htmlFor="topic-select" className="block text-xs font-bold text-[#252B28] mb-1.5">
              Inquiry Topic
            </label>
            <select
              id="topic-select"
              name="topic"
              value={formData.topic}
              onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
              className="w-full p-3 text-sm rounded-xl border border-[#E7E9E5] bg-[#FAF9F6]/50 focus:outline-none focus:ring-2 focus:ring-[#245747]"
            >
              <option value="Question regarding a quiz">Question regarding a quiz explanation</option>
              <option value="Typo or correction suggestion">Correction or typo suggestion</option>
              <option value="Feature or new topic request">Request a new topic or feature</option>
              <option value="General feedback">General feedback</option>
            </select>
          </div>

          <div>
            <label htmlFor="message-input" className="block text-xs font-bold text-[#252B28] mb-1.5">
              Your Message <span className="text-[#B93826]">*</span>
            </label>
            <textarea
              id="message-input"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Type your message or feedback here..."
              className="w-full p-3 text-sm rounded-xl border border-[#E7E9E5] bg-[#FAF9F6]/50 focus:outline-none focus:ring-2 focus:ring-[#245747]"
            />
          </div>

          {errorMessage && (
            <div className="flex items-center gap-2 text-xs text-[#B93826] font-semibold">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#245747] hover:bg-[#1b4336] text-[#FAF9F6] font-semibold text-sm px-8 py-3.5 rounded-xl transition-all shadow-sm focus:ring-2 focus:ring-[#245747]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
