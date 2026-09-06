import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { site } from '../../config/site';

export function Seo({
  title = `${site.companyName} | Robotics, AI & Automation`,
  description = `${site.companyName} develops intelligent robots, AI-driven systems and practical automation for real-world challenges.`,
  type = 'website'
}) {
  const location = useLocation();

  useEffect(() => {
    document.title = title;

    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? `property="${name}"` : `name="${name}"`;
      let el = document.querySelector(`meta[${attr}]`);
      if (!el) {
        el = document.createElement('meta');
        if (isProperty) el.setAttribute('property', name);
        else el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Standard Meta
    setMeta('description', description);
    setMeta('robots', 'index, follow');
    setMeta('author', site.companyName);

    // Canonical
    const canonical = `${site.url}${location.pathname === '/' ? '' : location.pathname}`;
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonical);

    // Open Graph
    const logoAbsolute = `${site.url}${site.logoUrl}`;
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:url', canonical, true);
    setMeta('og:type', type, true);
    setMeta('og:image', logoAbsolute, true);
    setMeta('og:image:alt', `${site.companyName} official logo`, true);
    setMeta('og:image:type', 'image/png', true);
    setMeta('og:image:width', '1024', true);
    setMeta('og:image:height', '1024', true);

    // Twitter Card
    setMeta('twitter:card', 'summary');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', logoAbsolute);
    setMeta('twitter:image:alt', `${site.companyName} official logo`);

    // Schema.org JSON-LD
    let ld = document.querySelector('#zaltron-ld');
    if (!ld) {
      ld = document.createElement('script');
      ld.id = 'zaltron-ld';
      ld.type = 'application/ld+json';
      document.head.appendChild(ld);
    }
    ld.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: site.companyName,
      url: `${site.url}/`,
      logo: logoAbsolute,
      description: `${site.companyName} is an emerging robotics, artificial intelligence and automation initiative developing intelligent autonomous machines and the ZALTRON robotics ecosystem, led by its flagship robot, ${site.flagship}.`,
      email: site.email,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN'
      },
      sameAs: Object.values(site.social)
    });
  }, [title, description, type, location.pathname]);

  return null;
}
