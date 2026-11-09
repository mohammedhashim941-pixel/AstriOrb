/**
 * Cookie-free analytics through Umami. Stays off until VITE_UMAMI_WEBSITE_ID
 * is set at build time.
 */
const WEBSITE_ID = import.meta.env.VITE_UMAMI_WEBSITE_ID;
const SCRIPT_URL = 'https://cloud.umami.is/script.js';
const KNOWN_SOURCES = new Set(['qr', 'nfc', 'linkedin', 'email-signature']);

const source = new URLSearchParams(window.location.search).get('src');
const eventData = KNOWN_SOURCES.has(source) ? { src: source } : undefined;

let started = false;
let queue = [];

export function track(name) {
  if (!WEBSITE_ID) return;
  if (window.umami) window.umami.track(name, eventData);
  else queue.push(name);
}

export function initAnalytics() {
  if (!WEBSITE_ID || started) return;
  started = true;

  if (eventData) track('card_open');

  const script = document.createElement('script');
  script.defer = true;
  script.src = SCRIPT_URL;
  script.dataset.websiteId = WEBSITE_ID;
  script.onload = () => {
    queue.forEach((name) => window.umami?.track(name, eventData));
    queue = [];
  };
  document.head.appendChild(script);
}
