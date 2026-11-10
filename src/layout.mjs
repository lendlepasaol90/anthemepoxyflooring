import { site, services, projectTypes, areas } from './site.mjs';
import { esc } from './lib.mjs';

export function form({ id, heading = '', sub = '', message = false, submit = 'Get my free quote', tone = 'light' }) {
  return `<form class="lf lf--${tone}" id="${id}" action="/api/lead" method="post" novalidate data-lead-form>
  ${heading ? `<h2 class="lf__heading">${heading}</h2>` : ''}${sub ? `<p class="lf__sub">${sub}</p>` : ''}
  <div class="lf__rows">
    <div class="lf__f"><input id="${id}-n" name="name" type="text" placeholder=" " autocomplete="name" required maxlength="80"><label for="${id}-n">Full name</label><em class="lf__e" aria-live="polite"></em></div>
    <div class="lf__f"><input id="${id}-p" name="phone" type="tel" placeholder=" " inputmode="tel" autocomplete="tel" required><label for="${id}-p">Phone</label><em class="lf__e" aria-live="polite"></em></div>
    <div class="lf__f"><input id="${id}-m" name="email" type="email" placeholder=" " autocomplete="email" required maxlength="120"><label for="${id}-m">Email</label><em class="lf__e" aria-live="polite"></em></div>
    <div class="lf__f lf__f--select"><select id="${id}-t" name="project" required><option value="" disabled selected hidden></option>${projectTypes.map((p) => `<option>${esc(p)}</option>`).join('')}</select><label for="${id}-t">Flooring project type</label><em class="lf__e" aria-live="polite"></em></div>
    ${message ? `<div class="lf__f lf__f--wide"><textarea id="${id}-x" name="message" rows="4" placeholder=" " maxlength="1500"></textarea><label for="${id}-x">Tell us about the space (optional)</label></div>` : ''}
    <div class="lf__hp" aria-hidden="true"><input name="company_website" tabindex="-1" autocomplete="off" aria-label="Leave empty"></div>
    <button class="pill pill--gold lf__go" type="submit"><span>${submit}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg></button>
  </div>
  <p class="lf__out" role="status" aria-live="polite"></p>
</form>`;
}

export function head({ title, description, path, schema = [], image = site.ogImage }) {
  const url = site.domain + path;
  return `<!doctype html>
<html lang="en-US" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#fbf5ea">
<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${site.domain}${image}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${site.domain}${image}">
<meta name="geo.region" content="US-AZ">
<meta name="geo.placename" content="Anthem">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap">
<link rel="stylesheet" href="/assets/css/anthem.css?v=1">
${schema.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n')}
</head>`;
}

export function header(active = '', overlay = false) {
  const on = (k) => (active === k ? ' aria-current="page"' : '');
  return `<body${overlay ? ' class="has-overlay-header"' : ''}>
<a class="skip" href="#main">Skip to content</a>
<header class="hdr${overlay ? ' hdr--overlay' : ''}" data-hdr>
  <div class="wrap hdr__bar">
    <a class="mark" href="/" aria-label="${esc(site.name)} home">
      <span class="mark__slot" aria-hidden="true"><i></i><i></i><i></i></span>
      <span class="mark__word">Anthem<span>Epoxy Flooring</span></span>
    </a>
    <nav class="nav" aria-label="Primary navigation">
      <ul>
        <li><a href="/"${on('home')}>Home</a></li>
        <li class="nav__drop">
          <button type="button" aria-expanded="false" aria-controls="nav-services" data-dd>Services<span aria-hidden="true">+</span></button>
          <div class="nav__panel" id="nav-services">
            <ul>${services.map((s) => `<li><a href="/${s.slug}/"${on(s.slug)}><small>${s.tag}</small>${s.name}</a></li>`).join('')}</ul>
          </div>
        </li>
        <li><a href="/about-us/"${on('about')}>About Us</a></li>
        <li><a href="/service-areas/"${on('areas')}>Service Areas</a></li>
        <li><a href="/contact-us/"${on('contact')}>Contact</a></li>
      </ul>
    </nav>
    <a class="hdr__tel" href="tel:${site.phone.tel}">${site.phone.display}</a>
    <button type="button" class="pill pill--gold hdr__quote" aria-expanded="false" aria-controls="quote-drawer" data-drawer-open>Get a quote</button>
    <button type="button" class="hdr__menu" aria-expanded="false" aria-controls="mobile-nav" data-menu><span></span><span></span><b class="skip">Menu</b></button>
  </div>
  <div class="mnav" id="mobile-nav" hidden data-mnav>
    <ul>
      <li><a href="/">Home</a></li>
      ${services.map((s) => `<li><a href="/${s.slug}/">${s.name}</a></li>`).join('')}
      <li><a href="/about-us/">About Us</a></li>
      <li><a href="/service-areas/">Service Areas</a></li>
      <li><a href="/contact-us/">Contact</a></li>
    </ul>
    <div class="mnav__cta"><button type="button" class="pill pill--gold" data-drawer-open>Get a quote</button><a class="pill pill--line" href="tel:${site.phone.tel}">${site.phone.display}</a></div>
  </div>
  <div class="drawer" id="quote-drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title" hidden data-drawer>
    <div class="drawer__scrim" data-drawer-close></div>
    <div class="drawer__panel">
      <button type="button" class="drawer__x" aria-label="Close quote form" data-drawer-close>×</button>
      <p class="eyebrow">Free, no-obligation quote</p>
      <p class="drawer__title" id="drawer-title">Let’s talk about your floor.</p>
      <p class="drawer__lead">Four quick details and we’ll reach out within one business day to schedule an on-site look.</p>
      ${form({ id: 'hdq', submit: 'Request my quote' })}
      <p class="drawer__call">Prefer the phone? <a href="tel:${site.phone.tel}">${site.phone.display}</a></p>
    </div>
  </div>
</header>`;
}

export function footer() {
  const map = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=12&output=embed`;
  const y = new Date().getFullYear();
  return `<footer class="ftr">
  <div class="wrap ftr__top">
    <div class="ftr__intro">
      <a class="mark mark--ftr" href="/"><span class="mark__slot" aria-hidden="true"><i></i><i></i><i></i></span><span class="mark__word">Anthem<span>Epoxy Flooring</span></span></a>
      <p>Garage, patio, interior and commercial floor coatings for Anthem and the north Valley foothills.</p>
      <p class="ftr__tel"><a href="tel:${site.phone.tel}">${site.phone.display}</a></p>
      <p class="ftr__hours">${site.hours}</p>
    </div>
    <nav class="ftr__col" aria-label="Services"><h2>Coatings</h2><ul>${services.map((s) => `<li><a href="/${s.slug}/">${s.name}</a></li>`).join('')}</ul></nav>
    <nav class="ftr__col" aria-label="Company"><h2>Company</h2><ul><li><a href="/about-us/">About Us</a></li><li><a href="/service-areas/">Service Areas</a></li><li><a href="/contact-us/">Contact</a></li><li><a href="/privacy-policy/">Privacy Policy</a></li></ul><h2 class="ftr__h2b">Areas</h2><p class="ftr__areas">${areas.map((a) => a.name).join(' / ')}</p></nav>
  </div>
  <div class="wrap ftr__map"><iframe title="Map of Anthem, Arizona" src="${map}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe><span class="ftr__pin">Anthem, Arizona</span></div>
  <div class="wrap ftr__base"><p>© ${y} ${esc(site.name)}</p><p><a href="/privacy-policy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></p></div>
</footer>
<script src="/assets/js/anthem.js?v=1" defer></script>
</body>
</html>`;
}

export const bizId = `${site.domain}/#business`;
export const businessSchema = () => {
  const s = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': bizId,
    name: site.name,
    url: `${site.domain}/`,
    image: site.domain + site.ogImage,
    description: 'Epoxy, flake, metallic, polyaspartic and polyurea floor coatings for garages, patios, interiors and businesses in Anthem, Arizona and nearby north Valley communities.',
    address: { '@type': 'PostalAddress', addressLocality: 'Anthem', addressRegion: 'AZ', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: ['Anthem, AZ', 'Desert Hills, AZ', 'New River, AZ', 'Phoenix, AZ', 'Cave Creek, AZ', 'Black Canyon City, AZ'].map((n) => ({ '@type': 'Place', name: n })),
    knowsAbout: services.map((s) => s.name),
  };
  if (!site.phone.placeholder) s.telephone = site.phone.tel;
  return s;
};
export const serviceSchema = (svc, description) => ({
  '@context': 'https://schema.org', '@type': 'Service', name: svc.name, serviceType: svc.name, description,
  url: `${site.domain}/${svc.slug}/`, provider: { '@id': bizId }, areaServed: { '@type': 'Place', name: 'Anthem, AZ' },
});
export const faqSchema = (faqs) => ({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '') } })),
});
export const crumbSchema = (items) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: site.domain + it.url })),
});
export const crumbs = (items) =>
  `<nav class="crumbs" aria-label="Breadcrumb"><ol>${items.map((it, i) => (i < items.length - 1 ? `<li><a href="${it.url}">${esc(it.name)}</a></li>` : `<li aria-current="page">${esc(it.name)}</li>`)).join('')}</ol></nav>`;
