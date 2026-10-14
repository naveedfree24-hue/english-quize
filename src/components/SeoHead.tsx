import { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';

interface SeoProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  schema?: object | null;
  ogType?: string;
}

export function SeoHead({
  title,
  description,
  canonicalPath = '',
  schema = null,
  ogType = 'website',
}: SeoProps) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${siteConfig.brandName}`
      : `${siteConfig.brandName} – ${siteConfig.tagline}`;
    const metaDesc = description || siteConfig.defaultMetaDescription;
    const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const canonicalUrl = `${siteConfig.baseUrl}${cleanPath === '/' ? '' : cleanPath}`;

    // Update title
    document.title = fullTitle;

    // Update meta description
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.setAttribute('name', 'description');
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', metaDesc);

    // Update OG tags
    const setOgMeta = (prop: string, val: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', prop);
        document.head.appendChild(el);
      }
      el.setAttribute('content', val);
    };

    setOgMeta('og:title', fullTitle);
    setOgMeta('og:description', metaDesc);
    setOgMeta('og:type', ogType);
    setOgMeta('og:url', canonicalUrl);
    setOgMeta('og:site_name', siteConfig.brandName);

    // Update Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Update or insert structured data script
    const existingSchemaScript = document.getElementById('dynamic-jsonld');
    if (schema) {
      if (existingSchemaScript) {
        existingSchemaScript.textContent = JSON.stringify(schema);
      } else {
        const script = document.createElement('script');
        script.id = 'dynamic-jsonld';
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      }
    } else if (existingSchemaScript) {
      existingSchemaScript.remove();
    }
  }, [title, description, canonicalPath, schema, ogType]);

  return null;
}
