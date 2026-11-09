/** Single source of truth for everything the card displays or exports. */

export const CARD_URL = 'https://card.astriorb.com';
export const CARD_QR_URL = `${CARD_URL}/?src=qr`;

export const PERSON = {
  fullName: 'Mohammed Hashim',
  firstName: 'Mohammed',
  lastName: 'Hashim',
  title: 'Founder & Managing Director',
  phone: '+918848953850',
  phoneDisplay: '+91 88489 53850',
  whatsapp: `https://wa.me/918848953850?text=${encodeURIComponent('Hi Hashim, we met ...')}`,
  email: 'hashim@astriorb.com',
  portfolio: 'https://hashim.astriorb.com',
  linkedin: 'https://www.linkedin.com/in/mohammed-hashim-astriorb/'
};

export const COMPANY = {
  brand: 'AstriOrb',
  legalName: 'AstriOrb Private Limited',
  shortLegalName: 'AstriOrb Pvt. Ltd.',
  tagline: 'Where Ideas Orbit into Reality',
  website: 'https://astriorb.com',
  websiteDisplay: 'astriorb.com',
  established: 'Est. 2025',
  recognition: 'DPIIT Recognised Startup',
  oneLiner:
    'An independent product technology company from Kerala, India, building consumer software and smart hardware across finance, healthcare, food tech and productivity.',
  address: {
    street: 'JC Chambers, 3rd Floor, Panampilly Nagar',
    city: 'Ernakulam',
    region: 'Kerala',
    postalCode: '682036',
    country: 'India'
  }
};

export const PRODUCTS = [
  {
    name: 'Fisclok',
    status: 'live',
    statusLabel: 'Live on Google Play',
    description: 'Private, offline-first personal finance tracker with Drive backup, budgets and insights',
    href: 'https://astriorb.com/products?id=fisclok',
    statusHref: 'https://play.google.com/store/apps/details?id=com.astriorb.fincend'
  },
  {
    name: 'DrCo',
    status: 'pilot',
    statusLabel: 'Piloting with hospitals',
    description: 'Doctor booking and live patient queue system for hospitals'
  },
  {
    name: 'Tastory',
    status: 'dev',
    statusLabel: 'In development',
    description: 'Food discovery: find the best dishes around you, not just restaurants'
  },
  {
    name: 'Ride On Watch',
    status: 'dev',
    statusLabel: 'In development',
    description: 'Bike navigation on your smartwatch'
  }
];
