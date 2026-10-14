# Clear English Quiz 📚

> **Learn English. Test Yourself. Grow with Confidence.**  
> A fast, free, SEO-first English grammar and vocabulary practice platform ready for 1-click Netlify deployment.

---

## 1. Project Overview

**Clear English Quiz** is a comprehensive, free educational web platform built for global English learners (CEFR A2, B1, B2, and C1). It provides:
- **10 Complete Diagnostic Quizzes**: Over 100 verified questions across verb tenses, prepositions, articles, conditionals, common mistakes, phrasal verbs, and workplace communication.
- **Immediate Step-by-Step Explanations**: Deep explanations for every question explaining both why the correct choice works and why distractors do not.
- **4 Comprehensive Learning Guides**: Detailed lessons with examples, common mistakes, and interactive checks.
- **Free AI Quiz Generator & AI Grammar Tutor**: An integrated tool powered by Google Gemini AI (`gemini-3.8-flash`) allowing students to generate custom quizzes and get instant explanations on any topic.
- **SEO & Search Console Ready**: Generated XML sitemap, `robots.txt`, `llms.txt` for AI search engines, canonical tags, Open Graph / Twitter cards, and Schema.org JSON-LD structured data.
- **Ethical Monetization Framework**: Disabled-by-default display ad placeholders (preventing Cumulative Layout Shift) and a centralized affiliate resource directory with clear commercial disclosure badges (`rel="sponsored"`).
- **Zero Lock-In & Netlify Compatible**: Pure static build with optional Express/API backend.

---

## 2. Technology Stack

- **Framework**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS v4 (Warm Ivory `#FAF9F6`, Deep Forest Green `#245747`, Soft Sage `#DCE9DF`)
- **Icons**: Lucide React
- **AI Integration**: `@google/genai` TypeScript SDK (using `gemini-3.8-flash`)
- **Hosting / Deployment Target**: Netlify (via `netlify.toml` static publishing `dist/`)

---

## 3. Quickstart & Local Development

### Prerequisites
- Node.js 18+ or 20+
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/clear-english-quiz.git
cd clear-english-quiz

# Install dependencies
npm install
```

### Running Locally
```bash
npm run dev
```
The application will start on `http://localhost:3000`.

### Production Build & Preview
```bash
# Build the production static distribution
npm run build

# Preview the built distribution locally
npm run preview
```

---

## 4. Netlify Deployment Guide

The repository includes a preconfigured `netlify.toml` file that specifies:
- Build command: `npm run build`
- Publish directory: `dist`
- Client-side SPA redirect rule: `/* -> /index.html (200)`
- Static assets: Stored in `/public/images/` and copied automatically into `dist/images/` during build so all images resolve reliably in production.
- Strict security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`)

### Method A: Git-Connected Netlify Deployment (Recommended)
1. Push your repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **Add new site** > **Import an existing project**.
4. Select your Git provider and choose the repository.
5. Netlify will automatically detect `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. (Optional) In **Site configuration** > **Environment variables**, add:
   - `GEMINI_API_KEY`: Your Google AI Studio API key (enables dynamic AI quiz generation).
7. Click **Deploy Clear English Quiz**. Your live site URL will be ready in under 60 seconds!

### Method B: Manual Drag-and-Drop Deploy
1. Run `npm run build` on your computer.
2. In the Netlify dashboard, go to the **Deploys** tab.
3. Drag and drop the generated `dist` folder into the Netlify upload zone.

---

## 5. Google Search Console & SEO Setup

Once your site is deployed to your custom domain:

1. **Verify Your Domain**:
   - Go to [Google Search Console](https://search.google.com/search-console).
   - Add your property (e.g. `https://clearenglishquiz.com`).
   - Verify ownership via DNS TXT record or HTML meta tag in `index.html`.
2. **Submit the XML Sitemap**:
   - Navigate to **Sitemaps** in the left menu.
   - Enter `sitemap.xml` and click **Submit**.
3. **Inspect Key URLs**:
   - Use the URL Inspection tool to request indexing for the homepage and major category pages.
4. **AI & LLM Search Engine Discoverability**:
   - The file `/public/llms.txt` provides clear context and direct links for search crawlers, answer engines, and LLM-powered search tools.

---

## 6. How to Customize & Manage Content

### A. Central Site Configuration (`src/data/siteConfig.ts`)
To update your brand name, tagline, production domain, or contact email:
```typescript
export const siteConfig = {
  brandName: 'Clear English Quiz',
  tagline: 'Learn English. Test Yourself. Grow with Confidence.',
  baseUrl: 'https://yourdomain.com',
  contactEmail: 'hello@yourdomain.com',
  // ...
};
```

### B. Adding a New Quiz (`src/data/quizzes.ts`)
Add a new object to the `quizzes` array with your verified questions:
```typescript
{
  slug: 'new-quiz-topic',
  categorySlug: 'english-grammar-quizzes',
  title: 'My New English Quiz',
  level: 'B1',
  estimatedMinutes: 8,
  questions: [
    {
      id: 'nq-1',
      question: 'Question sentence here with ___ blank.',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctIndex: 0,
      explanation: 'Explanation of why Option A is grammatically sound.',
      topicTag: 'Grammar Topic'
    }
  ],
  // ...
}
```

### C. Adding a Learning Guide (`src/data/guides.ts`)
Add a new guide to `guides` with title, sections, comparison table, and common mistakes.

### D. Enabling Display Advertising (`src/data/siteConfig.ts`)
Display ads are **disabled by default** to keep the site clean and prevent Cumulative Layout Shift (CLS). Once approved by Google AdSense or another network:
1. Open `src/data/siteConfig.ts`.
2. Set `advertising.enabled = true`.
3. Fill in your verified `publisherId` and `adSlots`.

### E. Connecting Affiliate Partners (`src/data/affiliates.ts`)
Edit `affiliateResources` in `src/data/affiliates.ts` to connect your approved educational partner links. All links automatically receive `rel="sponsored noopener noreferrer"` and a clear disclosure badge.

---

## 7. Quality Assurance Checklist

- [x] All 10 initial quizzes loaded with full 100 verified questions and explanations.
- [x] All 4 in-depth educational learning guides with comparison tables and practice exercises.
- [x] Responsive layout tested for mobile, tablet, and desktop viewports.
- [x] Screen-reader accessible progress notifications and keyboard navigation.
- [x] Real-time score calculation and percentage rounding.
- [x] AI-powered practice quiz generator and grammar tutor integration.
- [x] Netlify deployment configuration (`netlify.toml`) with security headers.
- [x] XML Sitemap (`/public/sitemap.xml`) and `robots.txt` ready.
- [x] AI discoverability document (`/public/llms.txt`) implemented.
- [x] Custom 404 page, contact form, privacy policy, and terms pages.
