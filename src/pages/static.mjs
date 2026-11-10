import { site, services, areas } from '../site.mjs';
import { head, header, footer, form, businessSchema, crumbs, crumbSchema } from '../layout.mjs';
import { img, bg, esc } from '../lib.mjs';

const banner = ({ eyebrow, h1, lead, image, trail }) => `<section class="mhero mhero--short">
  <div class="mhero__bg">${img(image, { sizes: '100vw', eager: true })}</div>
  <div class="wrap mhero__in">${crumbs(trail)}<p class="eyebrow eyebrow--light rise">${eyebrow}</p><h1 class="rise">${h1}</h1><p class="mhero__lead rise">${lead}</p></div>
</section>`;

export function renderAbout() {
  const trail = [{ name: 'Home', url: '/' }, { name: 'About Us', url: '/about-us/' }];
  const body = `<main id="main">
  ${banner({ eyebrow: 'About us', h1: 'A floor coating crew that sweats the details.', lead: 'We coat garages, patios, interiors and commercial floors for Anthem and the north Valley foothills — with preparation first and shortcuts never.', image: 'crewTrowel', trail })}
  <section class="sec">
    <div class="wrap about2">
      <div class="prose">
        <h2 class="rise">Why we do it this way</h2>
        <p class="rise">Coated concrete has a reputation problem. Plenty of people have seen a garage floor peel within a year, or a patio coating turn yellow and chalky. Almost every one of those failures traces back to the same few causes: the concrete wasn’t properly prepared, the wrong material was used for the conditions, or the system was too thin to do its job.</p>
        <p class="rise">We built our approach around avoiding those mistakes. Every slab is diamond-ground with dust collection. Cracks and chips are repaired, not covered. Moisture is tested. Materials are chosen for the specific space — a flexible base for a shop that bakes all summer, a UV-stable topcoat for a garage that faces the afternoon sun, a textured finish for a pool deck. And every layer is documented in your quote.</p>
        <h2 class="rise">What working with us looks like</h2>
        <ul class="dots rise">
          <li>An on-site visit with full-size samples — never a phone guess.</li>
          <li>An itemized written quote listing prep, repairs and every layer.</li>
          <li>Post-tension-safe preparation: surface grinding only, no cutting or drilling.</li>
          <li>Clear timelines for walking, parking and moving back in.</li>
          <li>A tidy site, protected surfaces and respectful crews in your neighborhood.</li>
        </ul>
        <h2 class="rise">Who we serve</h2>
        <p class="rise">Most of our work is for homeowners in Anthem’s neighborhoods and the foothill communities around them — families who want a garage they’re proud to open, a patio they actually use and interior spaces that are easy to live in. We also work with Anthem businesses and facilities that need durable, good-looking floors installed with minimal disruption.</p>
        <p class="rise">If you’re still exploring, each service page explains how a system works and where it fits. We’re always happy to answer questions, whether or not you’re ready to schedule.</p>
      </div>
      <aside class="about2__aside rise">
        <figure>${img('grinder', { sizes: '(max-width: 900px) 94vw, 32vw' })}</figure>
        <h2>Our coatings</h2>
        <ul>${services.map((s) => `<li><a href="/${s.slug}/">${s.name}</a></li>`).join('')}</ul>
        <button type="button" class="pill pill--gold" data-drawer-open>Get a free quote</button>
      </aside>
    </div>
  </section>
</main>`;
  return head({ title: 'About Us | Anthem Epoxy Flooring', description: 'Meet Anthem Epoxy Flooring — a north Valley floor coating crew focused on proper preparation, post-tension-safe methods and finishes chosen for desert conditions.', path: '/about-us/', schema: [businessSchema(), crumbSchema(trail)] }) + header('about') + body + footer();
}

const areaCopy = {
  'Anthem Parkside': 'Parkside neighborhoods surround the community park, the recreation center and trail access toward Daisy Mountain. Garages here tend to be busy family spaces full of bikes, sports gear and strollers, and full-flake floors with polyaspartic topcoats are the most common request. Backyard patios and pool decks are popular follow-up projects.',
  'Anthem Country Club': 'Homes around the golf courses often feature larger and tandem garages, golf cart bays, outdoor kitchens and courtyards. Many owners pair a flake garage with a textured patio coating, and a growing number add metallic or terrazzo-look finishes to casitas and game rooms.',
  'Desert Hills': 'Custom homes on acreage are common in Desert Hills, often with detached garages, RV barns and workshops. These buildings see bigger temperature swings, so flexible polyurea base coats and heavier shop systems are frequent recommendations.',
  'New River': 'Rural properties around New River include horse facilities, equipment barns and workshops alongside the main home. We coat shop and garage floors, densify barn slabs and help owners choose practical, durable finishes for hard-working spaces.',
  'Tramonto & North Phoenix': 'South of Anthem along I-17, master-planned neighborhoods like Tramonto and the surrounding north Phoenix communities share many of Anthem’s features — newer post-tension slabs, three-car garages and outdoor living spaces.',
  'Cave Creek': 'To the east, Cave Creek homes often embrace desert architecture with courtyards, casitas and stone accents. Warm flake blends, stone-look patio coatings and metallic interiors suit the style well.',
  'Black Canyon City': 'Further up I-17, Black Canyon City properties include hillside homes, shops and outbuildings. We schedule projects here efficiently and recommend systems suited to the slightly cooler, higher-elevation conditions.',
};

export function renderAreas() {
  const trail = [{ name: 'Home', url: '/' }, { name: 'Service Areas', url: '/service-areas/' }];
  const body = `<main id="main">
  ${banner({ eyebrow: 'Service areas', h1: 'Serving Anthem and the north Valley foothills.', lead: 'From Anthem’s neighborhoods to the custom lots of Desert Hills and New River, we bring the same preparation-first approach to every floor.', image: 'ridgeline', trail })}
  <section class="sec">
    <div class="wrap">
      <div class="areacards">${areas.map((a) => `<article class="areacard rise"><h2>${a.name}</h2><p>${esc(areaCopy[a.name])}</p></article>`).join('')}</div>
      <div class="prose narrow rise" style="margin-top:60px">
        <h2>Just outside our area?</h2>
        <p>We regularly help customers beyond these communities, especially for larger garages, shops and commercial floors. Tell us where your project is and we’ll let you know how we can help. Every service — from <a href="/garage-floor-coatings/">garage coatings</a> and <a href="/patio-concrete-coatings/">patio coatings</a> to <a href="/warehouse-floor-coatings/">warehouse floors</a> — is available throughout our service area.</p>
      </div>
    </div>
  </section>
</main>`;
  return head({ title: 'Service Areas | Anthem Epoxy Flooring', description: 'Floor coatings in Anthem Parkside, Anthem Country Club, Desert Hills, New River, Tramonto and north Phoenix, Cave Creek and Black Canyon City.', path: '/service-areas/', schema: [businessSchema(), crumbSchema(trail)] }) + header('areas') + body + footer();
}

export function renderContact() {
  const trail = [{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact-us/' }];
  const body = `<main id="main">
  ${banner({ eyebrow: 'Contact', h1: 'Request your free quote.', lead: 'Share a few details and we’ll reach out within one business day to set up an on-site visit.', image: 'bareGarage', trail })}
  <section class="sec">
    <div class="wrap contact2">
      <div class="contact2__form rise">${form({ id: 'contact', heading: 'Tell us about your project', sub: 'All fields except the message are required.', message: true, submit: 'Send my request' })}</div>
      <div class="contact2__info">
        <div class="cbox rise"><h2>Call</h2><p class="cbox__big"><a href="tel:${site.phone.tel}">${site.phone.display}</a></p><p>${site.hours}</p></div>
        <div class="cbox rise"><h2>What happens next</h2><ol><li>We confirm details and schedule a visit.</li><li>We inspect the slab, test moisture and show samples.</li><li>You receive an itemized written quote.</li><li>We schedule at a time that suits you.</li></ol></div>
        <div class="cbox rise"><h2>Service area</h2><p>Anthem, Desert Hills, New River, Tramonto and north Phoenix, Cave Creek and Black Canyon City. <a href="/service-areas/">Details</a>.</p></div>
      </div>
    </div>
  </section>
</main>`;
  return head({ title: 'Contact Us | Free Quote | Anthem Epoxy Flooring', description: 'Request a free on-site quote for garage, patio, interior or commercial floor coatings in Anthem, AZ. We respond within one business day.', path: '/contact-us/', schema: [businessSchema(), crumbSchema(trail)] }) + header('contact') + body + footer();
}

export function renderPrivacy() {
  const trail = [{ name: 'Home', url: '/' }, { name: 'Privacy Policy', url: '/privacy-policy/' }];
  const body = `<main id="main"><section class="sec sec--plain"><div class="wrap prose narrow">
  ${crumbs(trail)}
  <h1>Privacy Policy</h1>
  <p>This policy describes how ${esc(site.name)} handles information you share through this website.</p>
  <h2>Information you provide</h2>
  <p>Our quote forms ask for your name, phone number, email address and project type, plus an optional description. We also note which page the form was sent from.</p>
  <h2>How it’s used</h2>
  <p>We use this information to contact you about your request, arrange a visit and prepare a quote. We don’t sell, rent or trade it.</p>
  <h2>Outside services</h2>
  <p>Embedded Google Maps and Google Fonts may collect usage data according to Google’s policies. Form submissions pass through our hosting provider to reach us.</p>
  <h2>Your choices</h2>
  <p>To review or delete your information, call ${site.phone.display} or reach us through the <a href="/contact-us/">contact page</a>.</p>
  </div></section></main>`;
  return head({ title: 'Privacy Policy | Anthem Epoxy Flooring', description: 'How Anthem Epoxy Flooring handles information submitted through its website.', path: '/privacy-policy/' }) + header('') + body + footer();
}

export function render404() {
  const body = `<main id="main"><section class="sec sec--plain"><div class="wrap prose narrow">
  <p class="eyebrow">404</p>
  <h1>This trail doesn’t lead anywhere.</h1>
  <p>The page you’re after may have moved. Try one of these instead:</p>
  <p><a class="pill pill--gold" href="/">Home</a> <a class="pill pill--line" href="/garage-floor-coatings/">Garage coatings</a> <a class="pill pill--line" href="/contact-us/">Contact</a></p>
  </div></section></main>`;
  return head({ title: 'Page Not Found | Anthem Epoxy Flooring', description: 'The page you requested could not be found.', path: '/404.html' }).replace('index, follow', 'noindex') + header('') + body + footer();
}
