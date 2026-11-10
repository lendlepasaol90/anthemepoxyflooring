import { site, services } from '../site.mjs';
import { head, header, footer, form, businessSchema, serviceSchema, faqSchema, crumbSchema, crumbs } from '../layout.mjs';
import { img, bg, md, paras, esc } from '../lib.mjs';

// Content shape: { slug, title, description, eyebrow, h1, lead, heroImg,
//   spec:{ best, time, finish, layers:[str] },
//   sections:[{ h2, paras?, list?, kind?:'grid'|'steps'|'options'|'quote', items?, quote?, img?, caption? }],
//   faqs:[{q,a}], related:[slug], cta:{h2,p}, ctaImg }

function block(s) {
  let extra = '';
  if (s.kind === 'grid') extra = `<div class="sgrid">${s.items.map((it) => `<div class="sgrid__i rise"><h3>${esc(it.h)}</h3><p>${md(it.p)}</p></div>`).join('')}</div>`;
  if (s.kind === 'steps') extra = `<ol class="ssteps">${s.items.map((it, i) => `<li class="rise"><b>${String(i + 1).padStart(2, '0')}</b><div><h3>${esc(it.h)}</h3><p>${md(it.p)}</p></div></li>`).join('')}</ol>`;
  if (s.kind === 'options') extra = `<div class="sopts">${s.items.map((it) => `<div class="sopts__i rise"><h3>${esc(it.h)}</h3><p>${md(it.p)}</p></div>`).join('')}</div>`;
  const quote = s.quote ? `<blockquote class="pull rise"><p>${md(s.quote)}</p></blockquote>` : '';
  const fig = s.img ? `<figure class="sfig img-in">${img(s.img, { sizes: '(max-width: 900px) 94vw, 60vw' })}${s.caption ? `<figcaption>${esc(s.caption)}</figcaption>` : ''}</figure>` : '';
  return `<section class="ssec"${s.id ? ` id="${s.id}"` : ''}>
    <h2 class="rise">${esc(s.h2)}</h2>
    ${s.paras ? `<div class="prose rise">${paras(s.paras)}</div>` : ''}
    ${s.list ? `<ul class="dots rise">${s.list.map((l) => `<li>${md(l)}</li>`).join('')}</ul>` : ''}
    ${quote}${extra}${fig}
  </section>`;
}

export function renderService(c) {
  const svc = services.find((s) => s.slug === c.slug);
  const path = `/${c.slug}/`;
  const trail = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/#systems' }, { name: svc.name, url: path }];
  const related = c.related.map((r) => services.find((s) => s.slug === r));
  const body = `
<main id="main">
  <section class="mhero">
    <div class="mhero__bg">${img(c.heroImg, { sizes: '100vw', eager: true })}</div>
    <div class="wrap mhero__in">
      ${crumbs(trail)}
      <p class="eyebrow eyebrow--light rise">${esc(c.eyebrow)}</p>
      <h1 class="rise">${esc(c.h1)}</h1>
      <p class="mhero__lead rise">${md(c.lead)}</p>
    </div>
  </section>

  <div class="wrap article">
    <article class="article__main">
      ${c.sections.map(block).join('')}
      <section class="ssec" id="faq">
        <h2 class="rise">${esc(c.faqTitle || 'Common questions')}</h2>
        <div class="acc">${c.faqs.map((f, i) => `<details class="acc__i rise"${i === 0 ? ' open' : ''}><summary>${esc(f.q)}</summary><div><p>${md(f.a)}</p></div></details>`).join('')}</div>
      </section>
    </article>
    <aside class="spec">
      <div class="spec__card">
        <p class="spec__k">System snapshot</p>
        <dl>
          <div><dt>Best for</dt><dd>${esc(c.spec.best)}</dd></div>
          <div><dt>Typical timeline</dt><dd>${esc(c.spec.time)}</dd></div>
          <div><dt>Finish</dt><dd>${esc(c.spec.finish)}</dd></div>
        </dl>
        <p class="spec__k">Typical layers</p>
        <ol class="spec__layers">${c.spec.layers.map((l) => `<li>${esc(l)}</li>`).join('')}</ol>
        <button type="button" class="pill pill--gold" data-drawer-open>Get a free quote</button>
        <a class="spec__tel" href="tel:${site.phone.tel}">or call ${site.phone.display}</a>
      </div>
    </aside>
  </div>

  <section class="sec sec--cream">
    <div class="wrap">
      <div class="head2 rise"><p class="eyebrow">Related services</p><h2>Systems that pair well</h2></div>
      <div class="rel">${related.map((r) => `<a class="tile rise" href="/${r.slug}/">${img(r.img, { sizes: '(max-width: 900px) 94vw, 31vw', alt: '' })}<span class="tile__txt"><b>${r.name}</b><em>${esc(r.blurb)}</em></span></a>`).join('')}</div>
    </div>
  </section>

  <section class="closing closing--svc" style="--close:url('${bg(c.ctaImg || 'cactusGold', 1600)}')">
    <div class="wrap closing__in">
      <div class="closing__copy"><p class="eyebrow rise">Free quote</p><h2 class="rise">${esc(c.cta.h2)}</h2><p class="rise">${md(c.cta.p)}</p></div>
      <div class="closing__form rise">${form({ id: 'svcq', heading: 'Tell us about your project' })}</div>
    </div>
  </section>
</main>`;
  return head({
    title: c.title,
    description: c.description,
    path,
    image: `${(img(c.heroImg).match(/src="([^"]+)"/) || [])[1]}`,
    schema: [businessSchema(), serviceSchema(svc, c.description), faqSchema(c.faqs), crumbSchema(trail.filter((t) => !t.url.includes('#')))],
  }) + header(c.slug) + body + footer();
}
