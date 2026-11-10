import { site, services, areas } from '../site.mjs';
import { head, header, footer, form, businessSchema, faqSchema } from '../layout.mjs';
import { img, bg, md, esc } from '../lib.mjs';

const faqs = [
  { q: 'My home has a post-tension slab. Can it still be coated?', a: 'Yes. Many homes in Anthem were built on post-tension slabs, which contain tensioned steel cables. Coating is completely safe because we only grind the top surface — we never cut, core or drill into the slab. If a repair ever calls for anything deeper, we stop and discuss it with you first.' },
  { q: 'Does my HOA need to approve a floor coating?', a: 'Garage and interior floors generally aren’t visible from the street, so they rarely need approval. Front entries, walkways and driveways can be a different story. If the area is visible, check your neighborhood guidelines before choosing a color; we’re happy to provide samples or product information for your submission.' },
  { q: 'How long does a typical Anthem garage take?', a: 'Most two- and three-car garages take one to two days. With a fast-cure polyaspartic system, the whole floor can often be finished in a single day, with foot traffic the next morning and vehicles back within a few days.' },
  { q: 'Which finish hides dust best?', a: 'A full-broadcast flake floor in a mid-tone blend. Sand, tan and gray mixes disguise the fine desert dust that drifts in under garage doors far better than solid colors or very light and very dark blends.' },
  { q: 'Is an epoxy patio too hot to walk on in summer?', a: 'Color makes the biggest difference. Light, reflective shades stay far more comfortable than dark ones, and a textured finish keeps feet secure. We help you choose a color suited to your patio’s sun exposure.' },
  { q: 'Will my new floor turn yellow?', a: 'Standard epoxy can amber in sunlight, which is why we finish garages, patios and sunny rooms with a UV-stable polyaspartic or aliphatic urethane topcoat that keeps colors true.' },
  { q: 'Can you coat a floor that has old paint or a DIY kit on it?', a: 'Yes. We grind off old paint and failing coatings completely so the new system bonds to clean concrete. Coating over a weak layer is the most common reason floors fail.' },
  { q: 'Do you offer estimates outside Anthem?', a: 'We regularly work in Desert Hills, New River, Tramonto and the north Phoenix neighborhoods along I-17, as well as Cave Creek and Black Canyon City. Ask about your location.' },
];

export function renderHome() {
  const list = services
    .map((s, i) => `<li><a href="/${s.slug}/" data-swap="${img(s.img, { sizes: '(max-width: 900px) 0px, 40vw' }).match(/srcset="([^"]+)"/)[1]}" data-alt="${esc(s.name)}">
        <span class="svcx__n">${String(i + 1).padStart(2, '0')}</span>
        <span class="svcx__t">${s.name}</span>
        <span class="svcx__d">${esc(s.blurb)}</span>
      </a></li>`)
    .join('');

  const body = `
<main id="main">
  <!-- HERO: full-bleed -->
  <section class="hero">
    <div class="hero__bg">${img('heroDusk', { sizes: '100vw', eager: true, cls: 'hero__img' })}</div>
    <div class="wrap hero__inner">
      <p class="eyebrow eyebrow--light rise">Anthem, Arizona · Floor coatings</p>
      <h1 class="rise">Concrete floors with the polish of the rest of your home.</h1>
      <p class="hero__lead rise">Garage, patio, interior and commercial coatings for Anthem and the north Valley — prepared properly, built in layers, and finished in colors that belong in the desert foothills.</p>
      <div class="hero__cta rise"><button type="button" class="pill pill--gold" data-drawer-open>Get a free quote</button><a class="pill pill--glass" href="#systems">Explore the systems</a></div>
    </div>
    <div class="wrap hero__strip">
      <dl class="strip">
        <div><dt><span data-count="9">9</span></dt><dd>Coating systems</dd></div>
        <div><dt><span data-count="5">5</span> layers</dt><dd>In a typical flake garage</dd></div>
        <div><dt><span data-count="1">1</span> day</dt><dd>Fast-cure garage installs</dd></div>
        <div><dt>0</dt><dd>Cuts into post-tension slabs</dd></div>
      </dl>
    </div>
  </section>

  <!-- INTRO -->
  <section class="sec">
    <div class="wrap intro">
      <p class="eyebrow rise">Epoxy flooring in Anthem</p>
      <h2 class="intro__big rise">Most Anthem homes have beautiful finishes everywhere — except the concrete. We fix that.</h2>
      <div class="intro__cols">
        <div class="rise">
          <p>Walk through almost any home in Anthem and you’ll find thoughtful details: stone accents, tile roofs, outdoor kitchens, carefully planned landscaping. Then you open the door to the garage and find bare gray concrete with an oil spot or two, or a patio slab that has faded, cracked and collected years of stains. Those surfaces get used every day, yet they’re often the last to receive any attention.</p>
          <p>A professionally installed floor coating closes that gap. It gives garages, patios and interior slabs a finished, durable surface that is easy to clean and holds up to real life — kids’ bikes, muddy trail shoes, the boat trailer, the weekend project and the steady drift of desert dust.</p>
        </div>
        <div class="rise">
          <p>Our work is built on preparation. Every slab is diamond-ground to remove the weak top layer, old sealers and paint. Cracks and chips are repaired. Moisture is tested. Only then do we build the coating system, layer by layer, using materials chosen for the space: a flexible base where a slab moves, a decorative flake broadcast for texture, and a UV-stable topcoat wherever sunlight reaches.</p>
          <p>The result is a floor that looks like it belongs in your home — and still looks that way years from now. Start with our <a href="/garage-floor-coatings/">garage floor coatings</a>, or explore every system below.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICES: list + sticky image swap -->
  <section class="sec sec--cream" id="systems">
    <div class="wrap svcx">
      <div class="svcx__head">
        <p class="eyebrow rise">Our services</p>
        <h2 class="rise">Nine systems. One standard of preparation.</h2>
        <p class="rise">Hover or tap a service to preview it. Every page covers how the system is built, where it shines and the questions worth asking any contractor.</p>
        <figure class="svcx__fig" aria-hidden="true">${img(services[0].img, { sizes: '(max-width: 900px) 0px, 40vw', alt: '', attrs: 'data-swap-target' })}</figure>
      </div>
      <ol class="svcx__list">${list}</ol>
    </div>
  </section>

  <!-- WHY CHOOSE -->
  <section class="sec">
    <div class="wrap">
      <div class="head2 rise"><p class="eyebrow">Why choose us</p><h2>What Anthem homeowners tell us mattered.</h2></div>
      <ol class="why">
        <li class="rise"><span>01</span><h3>We explain the slab before we sell the floor</h3><p>Every estimate starts with a close look at the concrete — cracks, old coatings, moisture and how the space is used. You’ll understand what your floor needs and why.</p></li>
        <li class="rise"><span>02</span><h3>Grinding is non-negotiable</h3><p>Diamond grinding with HEPA dust collection gives coatings a clean, open surface to bond to. We don’t acid etch, and we don’t skip steps to save an hour.</p></li>
        <li class="rise"><span>03</span><h3>Systems, not single products</h3><p>The right floor often combines two or three chemistries. We explain each layer’s job and put it in writing, so quotes are easy to compare.</p></li>
        <li class="rise"><span>04</span><h3>Respect for your home and your neighbors</h3><p>Tidy setups, protected walls and driveways, sensible work hours and a clean site at the end of each day — the kind of crew you don’t mind having around.</p></li>
      </ol>
    </div>
  </section>

  <!-- GARAGE + LAYER STACK -->
  <section class="sec sec--sand">
    <div class="wrap garage">
      <div class="garage__copy">
        <p class="eyebrow rise">Garage epoxy flooring</p>
        <h2 class="rise">A garage floor is a system. Here’s what goes into ours.</h2>
        <div class="rise">
          <p>In Anthem, the garage often works harder than any room in the house. It’s where SUVs and pickups park after the commute up I-17, where bikes and strollers live, where holiday decorations are stacked and where weekend projects happen. Bare concrete absorbs every drip, sheds dust onto everything and never quite looks clean.</p>
          <p>Our standard garage system is built in layers, each with a specific job. Together they produce a floor that bonds tightly, resists hot tires and chemicals, hides everyday dust and keeps its color where the afternoon sun pours in through the open door. Three-car and tandem garages are common here, and we plan the work so large floors still go down evenly from wall to wall.</p>
        </div>
        <a class="arrow rise" href="/garage-floor-coatings/">See garage systems in detail</a>
      </div>
      <div class="stack rise" aria-label="Layers of a typical flake garage system">
        <div class="stack__layer stack__layer--5"><b>Topcoat</b><span>UV-stable polyaspartic — resists sun, scuffs and hot tires</span></div>
        <div class="stack__layer stack__layer--4"><b>Flake broadcast</b><span>Decorative chips for color, texture and dust camouflage</span></div>
        <div class="stack__layer stack__layer--3"><b>Base coat</b><span>Pigmented epoxy or polyurea that grips the flake</span></div>
        <div class="stack__layer stack__layer--2"><b>Repairs &amp; primer</b><span>Cracks filled, pores sealed, bond established</span></div>
        <div class="stack__layer stack__layer--1"><b>Ground concrete</b><span>Diamond-ground to an open, even profile</span></div>
      </div>
      <figure class="garage__img img-in">${img('garageDoorway', { sizes: '(max-width: 900px) 94vw, 100vw' })}</figure>
    </div>
  </section>

  <!-- OUTDOOR LIVING -->
  <section class="sec">
    <div class="wrap outdoor">
      <div class="outdoor__mosaic">
        <figure class="m1 img-in">${img('deckSunset', { sizes: '(max-width: 900px) 94vw, 34vw' })}</figure>
        <figure class="m2 img-in">${img('patioLounge', { sizes: '(max-width: 900px) 46vw, 20vw' })}</figure>
        <figure class="m3 img-in">${img('palmHome', { sizes: '(max-width: 900px) 46vw, 20vw' })}</figure>
      </div>
      <div class="outdoor__copy">
        <p class="eyebrow rise">Patios &amp; outdoor living</p>
        <h2 class="rise">Outdoor rooms deserve finished floors too.</h2>
        <div class="rise">
          <p>Anthem is built for being outside — morning walks, evenings on the patio, weekends around the pool with Daisy Mountain on the horizon. Many backyards here have grown into true outdoor rooms with kitchens, fire features and shade structures. The concrete underneath is often the one piece that never got upgraded.</p>
          <p>Our <a href="/patio-concrete-coatings/">patio and concrete coatings</a> are designed for the sun. We use UV-stable materials that don’t yellow, choose lighter colors that stay more comfortable underfoot, and build in texture so the surface stays secure when it’s wet from the pool or a summer storm. Courtyards, covered patios, pool decks and front entries all benefit.</p>
          <p>Planning a visible front entry or walkway? We’ll bring samples you can share with your HOA if your neighborhood reviews exterior changes.</p>
          <p>Timing matters outdoors, too. Fall through spring is the sweet spot for patio work here — comfortable temperatures, dry days and the season when backyards get the most use. Summer jobs start before the heat builds, and we track the radar so fresh resin never meets an afternoon cloudburst.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- RESIDENTIAL + DECORATIVE/METALLIC TILES -->
  <section class="sec sec--cream">
    <div class="wrap">
      <div class="head2 head2--split rise">
        <div><p class="eyebrow">Residential, decorative &amp; metallic</p><h2>Inside the house, finishes get personal.</h2></div>
        <p>Coatings aren’t only for garages. Game rooms, casitas, home gyms, laundry rooms and kitchens can all sit on a seamless coated slab — understated or show-stopping.</p>
      </div>
      <div class="tiles">
        <a class="tile tile--wide rise" href="/residential-epoxy-flooring/">${img('gameRoom', { sizes: '(max-width: 900px) 94vw, 60vw', alt: '' })}<span class="tile__txt"><b>Residential epoxy flooring</b><em>Seamless interior floors for game rooms, casitas, laundry and flex spaces. Solid satin colors, fine flake or a stone-look finish — all easy to clean and kind to pets.</em></span></a>
        <a class="tile rise" href="/decorative-flake-flooring/">${img('flakeRust', { sizes: '(max-width: 900px) 94vw, 30vw', alt: '' })}<span class="tile__txt"><b>Decorative flake</b><em>Terracotta, sand and stone blends with built-in grip.</em></span></a>
        <a class="tile rise" href="/metallic-epoxy-flooring/">${img('metalGold', { sizes: '(max-width: 900px) 94vw, 30vw', alt: '' })}<span class="tile__txt"><b>Metallic epoxy</b><em>Hand-worked pearlescent finishes with real depth.</em></span></a>
        <a class="tile tile--wide rise" href="/polyaspartic-floor-coatings/">${img('sportsGarage', { sizes: '(max-width: 900px) 94vw, 60vw', alt: '' })}<span class="tile__txt"><b>Polyaspartic &amp; polyurea</b><em>Fast-cure, sun-stable and flexible chemistries that let us finish many garages in a single day and protect slabs that move.</em></span></a>
      </div>
    </div>
  </section>

  <!-- FULL-WIDTH CTA -->
  <section class="fullcta" style="--cta:url('${bg('cactusGold', 2200)}')">
    <div class="wrap fullcta__in">
      <h2 class="rise">Your floor. Done right, the first time.</h2>
      <p class="rise">Free on-site estimates across Anthem and the north Valley. Expect samples, a slab test and a written plan — no hard sell.</p>
      <div class="rise"><button type="button" class="pill pill--gold" data-drawer-open>Request a quote</button> <a class="pill pill--glass" href="tel:${site.phone.tel}">${site.phone.display}</a></div>
    </div>
  </section>

  <!-- PROCESS: horizontal scroller -->
  <section class="sec" id="process">
    <div class="wrap">
      <div class="head2 head2--split rise"><div><p class="eyebrow">Installation process</p><h2>From bare slab to finished floor.</h2></div><p>Swipe or scroll through the steps. Most garages are complete in one to two days; interiors and large commercial floors take longer.</p></div>
    </div>
    <div class="track" tabindex="0" aria-label="Installation steps, scroll horizontally">
      <article class="track__card"><figure>${img('bareGarage', { sizes: '340px' })}</figure><span>Step 1</span><h3>Consult &amp; test</h3><p>We measure, inspect cracks and old coatings, check moisture and show you real samples. You get a written, itemized proposal.</p></article>
      <article class="track__card"><figure>${img('grinder', { sizes: '340px' })}</figure><span>Step 2</span><h3>Grind</h3><p>Diamond grinders with HEPA vacuums open the surface evenly. Edges and corners are finished with smaller tools.</p></article>
      <article class="track__card"><figure>${img('sweep', { sizes: '340px' })}</figure><span>Step 3</span><h3>Repair &amp; clean</h3><p>Cracks and spalls are filled and ground flush. The floor is vacuumed spotless so nothing gets trapped under the coating.</p></article>
      <article class="track__card"><figure>${img('pour', { sizes: '340px' })}</figure><span>Step 4</span><h3>Base &amp; design</h3><p>The base coat goes down and the look is built — flake broadcast, solid pigment or metallic movement.</p></article>
      <article class="track__card"><figure>${img('crewTrowel', { sizes: '340px' })}</figure><span>Step 5</span><h3>Topcoat</h3><p>A clear, sun-stable topcoat seals and protects. Optional grit adds traction where you need it.</p></article>
      <article class="track__card"><figure>${img('garageDoorway', { sizes: '340px' })}</figure><span>Step 6</span><h3>Walkthrough</h3><p>We review the floor together and give you clear timing for foot traffic, parking and moving back in.</p></article>
    </div>
  </section>

  <!-- BENEFITS -->
  <section class="sec sec--sand">
    <div class="wrap">
      <div class="head2 rise"><p class="eyebrow">Benefits of professional epoxy flooring</p><h2>Why a properly installed coating pays off.</h2></div>
      <div class="bens">
        <div class="ben rise"><i class="ben__i ben__i--1"></i><h3>Stays bonded</h3><p>Mechanical prep and commercial-grade materials resist the hot-tire peeling and flaking that plague DIY kits.</p></div>
        <div class="ben rise"><i class="ben__i ben__i--2"></i><h3>Cleans in minutes</h3><p>Spills, mud and leaves wipe or hose away instead of soaking into porous concrete.</p></div>
        <div class="ben rise"><i class="ben__i ben__i--3"></i><h3>No more concrete dust</h3><p>Sealed slabs stop shedding the fine powder that coats shelves, bikes and stored belongings.</p></div>
        <div class="ben rise"><i class="ben__i ben__i--4"></i><h3>Better grip</h3><p>Flake texture and optional grit help keep footing secure on wet patios and in garages.</p></div>
        <div class="ben rise"><i class="ben__i ben__i--5"></i><h3>Color that lasts</h3><p>UV-stable topcoats keep floors from yellowing where Arizona sun reaches them.</p></div>
        <div class="ben rise"><i class="ben__i ben__i--6"></i><h3>Adds appeal</h3><p>A finished garage and patio make a home feel complete — and they show well when it’s time to sell.</p></div>
      </div>
    </div>
  </section>

  <!-- COMMERCIAL & INDUSTRIAL -->
  <section class="sec">
    <div class="wrap biz">
      <figure class="biz__img img-in">${img('detailShop', { sizes: '(max-width: 900px) 94vw, 46vw' })}</figure>
      <div class="biz__copy">
        <p class="eyebrow rise">Commercial &amp; industrial flooring</p>
        <h2 class="rise">For the businesses that keep Anthem running.</h2>
        <div class="rise">
          <p>Anthem’s retail centers, restaurants, salons, fitness studios, clinics and service shops all depend on floors that look good and clean quickly. Our <a href="/commercial-epoxy-flooring/">commercial epoxy flooring</a> systems are chosen for each environment — slip-resistant textures for kitchens, chemical-resistant topcoats for salons and detail shops, decorative finishes for showrooms. We work nights and weekends when needed so you don’t lose business days.</p>
          <p>For storage buildings, contractor shops and light-industrial spaces along the I-17 corridor, our <a href="/warehouse-floor-coatings/">warehouse floor coatings</a> focus on abrasion resistance, dust control, joint repair and clear safety striping, phased around your operations.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- LOCAL CONSIDERATIONS -->
  <section class="sec sec--cream">
    <div class="wrap local">
      <div class="local__head">
        <p class="eyebrow rise">Local flooring considerations</p>
        <h2 class="rise">Things we account for on every Anthem project.</h2>
        <figure class="local__img img-in">${img('cactusGold', { sizes: '(max-width: 900px) 94vw, 38vw' })}</figure>
      </div>
      <div class="local__notes">
        <div class="note rise"><h3>Post-tension slabs</h3><p>Much of Anthem was built from the late 1990s onward, and post-tension foundations are common. These slabs contain tensioned steel cables, so we never saw-cut, core or drill. Surface grinding is safe, and all of our standard prep stays at the surface.</p></div>
        <div class="note rise"><h3>Foothill sun and heat</h3><p>Sitting a bit higher than central Phoenix doesn’t make summer gentle. Garage slabs heat up quickly and sunlight reaches deep through open doors. We schedule summer work early in the day and finish every sun-exposed floor with a UV-stable topcoat.</p></div>
        <div class="note rise"><h3>Monsoon dust and rain</h3><p>Summer storms drive dust under garage doors and send water across patios. Mid-tone flake blends hide the dust, and textured finishes keep wet surfaces secure.</p></div>
        <div class="note rise"><h3>HOA guidelines</h3><p>Interior and garage floors are typically your call, but visible surfaces like front entries and walkways may fall under neighborhood guidelines. We’re glad to provide samples and product information if you need approval.</p></div>
        <div class="note rise"><h3>Bigger garages, bigger plans</h3><p>Three-car, tandem and RV-height garages are common. Larger floors need careful sequencing so the flake broadcast and topcoat look consistent from one end to the other.</p></div>
      </div>
    </div>
  </section>

  <!-- WHAT A QUOTE INCLUDES -->
  <section class="sec">
    <div class="wrap visit">
      <div class="visit__copy">
        <p class="eyebrow rise">What to expect from a quote</p>
        <h2 class="rise">A visit that answers questions, not a sales pitch.</h2>
        <div class="rise">
          <p>Our estimates happen at your home, because a floor can’t be priced properly from a photo. We start by walking the space with you and asking how it’s used. Is the garage mostly for parking, or is there a workbench and a treadmill too? Does the patio get afternoon sun? Is there a trailer that parks in the third bay? Those answers shape the system as much as the concrete does.</p>
          <p>Then we look closely at the slab. We check for hairline cracks and chipped joints, look for builder sealer or old paint, take moisture readings and note anything that will need extra attention during prep. If your home sits on a post-tension foundation, we’ll explain how our surface-only preparation keeps those cables safe.</p>
          <p>Last, full-size chip and color boards go right on your concrete so you can judge them under your own lights. You leave with an itemized written quote that lists the preparation, any repairs and each coating layer — so you can compare it fairly against anyone else’s.</p>
        </div>
      </div>
      <ul class="visit__list">
        <li class="rise"><b>How you use the space</b><span>Parking, storage, hobbies, pets, trailers — the system follows the use.</span></li>
        <li class="rise"><b>Slab inspection</b><span>Cracks, joints, sealers, old coatings and moisture readings.</span></li>
        <li class="rise"><b>Samples in your light</b><span>Full-size flake and color boards on your actual floor.</span></li>
        <li class="rise"><b>Itemized quote</b><span>Prep, repairs and every layer listed in writing.</span></li>
      </ul>
    </div>
  </section>

  <!-- GALLERY with filters -->
  <section class="sec" id="gallery">
    <div class="wrap">
      <div class="head2 head2--split rise"><div><p class="eyebrow">Project gallery</p><h2>Looks and spaces we love.</h2></div>
        <div class="filters" role="group" aria-label="Filter gallery"><button type="button" aria-pressed="true" data-filter="all">All</button><button type="button" aria-pressed="false" data-filter="garage">Garage</button><button type="button" aria-pressed="false" data-filter="outdoor">Outdoor</button><button type="button" aria-pressed="false" data-filter="interior">Interior</button><button type="button" aria-pressed="false" data-filter="business">Business</button></div>
      </div>
      <div class="gal" data-gal>
        ${[
          ['garagePair', 'garage', 'Gloss garage floor'], ['patioFire', 'outdoor', 'Pergola patio'], ['kitchenSleek', 'interior', 'Gloss kitchen floor'],
          ['sportsGarage', 'garage', 'Show-garage finish'], ['terrazzo', 'interior', 'Micro-flake texture'], ['restaurant', 'business', 'Restaurant floor'],
          ['deckSunset', 'outdoor', 'Outdoor dining terrace'], ['warehouse', 'business', 'Warehouse epoxy'], ['garageDoorway', 'garage', 'Classic-car garage'],
        ].map(([k, c, t]) => `<figure class="gal__item" data-cat="${c}">${img(k, { sizes: '(max-width: 640px) 94vw, (max-width: 1000px) 46vw, 31vw' })}<figcaption>${t}</figcaption></figure>`).join('')}
      </div>
    </div>
  </section>

  <!-- SERVICE AREAS -->
  <section class="sec sec--sand">
    <div class="wrap areas">
      <div>
        <p class="eyebrow rise">Service areas</p>
        <h2 class="rise">Anthem and the north Valley foothills.</h2>
        <p class="rise">We’re centered on Anthem and serve neighborhoods along the I-17 corridor and into the foothills. Travel time rarely changes our approach, but it helps us schedule well — so let us know where you are.</p>
        <a class="arrow rise" href="/service-areas/">Explore our service areas</a>
      </div>
      <ul class="areas__chips">${areas.map((a) => `<li class="rise"><b>${a.name}</b><span>${esc(a.note)}</span></li>`).join('')}</ul>
    </div>
  </section>

  <!-- FAQ -->
  <section class="sec" id="faq">
    <div class="wrap faqwrap">
      <div class="faqwrap__side">
        <p class="eyebrow rise">FAQ</p>
        <h2 class="rise">Questions, answered straight.</h2>
        <figure class="img-in">${img('ridgeline', { sizes: '(max-width: 900px) 94vw, 32vw' })}</figure>
      </div>
      <div class="acc">${faqs.map((f, i) => `<details class="acc__i rise"${i === 0 ? ' open' : ''}><summary>${esc(f.q)}</summary><div><p>${md(f.a)}</p></div></details>`).join('')}</div>
    </div>
  </section>

  <!-- FINAL CTA + FORM -->
  <section class="closing" id="quote" style="--close:url('${bg('desertHome', 1600)}')">
    <div class="wrap closing__in">
      <div class="closing__copy">
        <p class="eyebrow rise">Start your project</p>
        <h2 class="rise">Let’s give your concrete the finish it’s been missing.</h2>
        <p class="rise">Tell us about your space and we’ll schedule a free on-site visit. You’ll get samples, a moisture check and a written, itemized quote — with no pressure to decide on the spot.</p>
        <p class="closing__tel rise">Or call <a href="tel:${site.phone.tel}">${site.phone.display}</a></p>
      </div>
      <div class="closing__form rise">${form({ id: 'home-q', heading: 'Request your free quote', message: true })}</div>
    </div>
  </section>
</main>`;

  return head({
    title: 'Anthem Epoxy Flooring | Garage, Patio & Interior Coatings, AZ',
    description: 'Epoxy, flake, metallic and polyaspartic floor coatings for Anthem, AZ garages, patios, interiors and businesses. Post-tension-safe prep and UV-stable finishes.',
    path: '/',
    schema: [businessSchema(), faqSchema(faqs), { '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: `${site.domain}/` }],
  }) + header('home', true) + body + footer();
}
