// Site-wide configuration for Anthem Epoxy Flooring.
// PHONE: replace the placeholder below once the business line is live.
export const site = {
  name: 'Anthem Epoxy Flooring',
  domain: 'https://anthemepoxyflooring.com',
  city: 'Anthem',
  state: 'AZ',
  phone: { display: '(623) 000-0000', tel: '+16230000000', placeholder: true },
  geo: { lat: 33.8673, lng: -112.1468 },
  mapQuery: 'Anthem, AZ 85086',
  hours: 'Mon–Fri 7am–6pm · Sat by appointment',
  ogImage: '/images/hero/foothills-golf-course-at-dusk-1200.webp',
};

export const services = [
  { slug: 'garage-floor-coatings', name: 'Garage Floor Coatings', tag: 'Garages', blurb: 'Full-flake and solid systems that seal out oil, dust and hot-tire marks in everyday and show garages.', img: 'garagePair' },
  { slug: 'residential-epoxy-flooring', name: 'Residential Epoxy Flooring', tag: 'Interiors', blurb: 'Seamless coated concrete for game rooms, kitchens, casitas, laundry and flex spaces.', img: 'gameRoom' },
  { slug: 'decorative-flake-flooring', name: 'Decorative Flake Flooring', tag: 'Flake', blurb: 'Chip blends in warm terracotta, sand and stone tones with built-in grip.', img: 'flakeRust' },
  { slug: 'metallic-epoxy-flooring', name: 'Metallic Epoxy Flooring', tag: 'Metallic', blurb: 'Pearlescent, hand-worked floors with the depth of polished stone or poured metal.', img: 'metalGold' },
  { slug: 'polyaspartic-floor-coatings', name: 'Polyaspartic Floor Coatings', tag: 'Polyaspartic', blurb: 'Fast-curing, sun-stable coatings for one-day garages and bright entries.', img: 'sportsGarage' },
  { slug: 'polyurea-floor-coatings', name: 'Polyurea Floor Coatings', tag: 'Polyurea', blurb: 'A tough, elastic base layer for hard-working garages and hobby shops.', img: 'garageDoorway' },
  { slug: 'patio-concrete-coatings', name: 'Patio & Concrete Coatings', tag: 'Outdoor', blurb: 'Cool-toned, textured coatings for patios, pool decks, courtyards and entries.', img: 'patioLounge' },
  { slug: 'commercial-epoxy-flooring', name: 'Commercial Epoxy Flooring', tag: 'Commercial', blurb: 'Easy-clean, hard-wearing floors for salons, restaurants, studios and service shops.', img: 'salon' },
  { slug: 'warehouse-floor-coatings', name: 'Warehouse Floor Coatings', tag: 'Industrial', blurb: 'Abrasion-resistant coatings, joint repair and safety lines for storage and light industry.', img: 'warehouse' },
];

export const areas = [
  { name: 'Anthem Parkside', note: 'Family neighborhoods around the community park and Daisy Mountain trailheads.' },
  { name: 'Anthem Country Club', note: 'Golf-course homes with oversized garages and outdoor living spaces.' },
  { name: 'Desert Hills', note: 'Custom homes on larger lots with detached garages and shops.' },
  { name: 'New River', note: 'Rural properties, workshops and equipment barns north of Anthem.' },
  { name: 'Tramonto & North Phoenix', note: 'Master-planned neighborhoods along the I-17 corridor south of Anthem.' },
  { name: 'Cave Creek', note: 'Desert-style homes, casitas and courtyards to the east.' },
  { name: 'Black Canyon City', note: 'Hill-country homes and shops further up I-17.' },
];

export const projectTypes = [
  'Garage floor coating',
  'Patio / pool deck / courtyard',
  'Interior room or casita',
  'Decorative flake',
  'Metallic epoxy',
  'One-day polyaspartic',
  'Polyurea shop floor',
  'Commercial space',
  'Warehouse / industrial',
  'Not sure — need advice',
];
