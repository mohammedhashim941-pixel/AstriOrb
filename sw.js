/* Built into /sw.js by the serviceWorker plugin in vite.config.js. */
const CACHE_NAME = 'card-93387dc2e738';
const PRECACHE_URLS = ["/","/manifest.webmanifest","/favicon.svg","/favicon-32.png","/apple-touch-icon.png","/icons/icon-192.png","/icons/icon-512.png","/icons/icon-maskable-512.png","/contact-photo.png","/assets/inter-latin-400-normal-C38fXH4l.woff2","/assets/inter-latin-600-normal-LgqL8muc.woff2","/assets/jetbrains-mono-latin-700-normal-BYuf6tUa.woff2","/assets/index-DDRG_DzI.css","/assets/PixelBlast-DraeXX9e.css","/assets/QRCodeModal-rB4EraNi.css","/assets/vendor-three-1dI_QNP4.js","/assets/vendor-react-DF3nNwgj.js","/assets/index-B2TWnLhx.js","/assets/PixelBlast-C9Qm3gbS.js","/assets/QRCodeModal-Z-_uCUrs.js"];
const NAVIGATION_TIMEOUT_MS = 3000;
// Precached and page requests can differ in headers such as Origin.
const MATCH_OPTIONS = { ignoreVary: true };

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) => Promise.all(names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))))
      .then(() => self.clients.claim())
  );
});

/** Prefers a fresh page, but falls back quickly on bad event networks. */
async function handleNavigation(request) {
  const cached = () => caches.match('/', MATCH_OPTIONS);
  try {
    const timeout = new Promise((_, reject) => setTimeout(reject, NAVIGATION_TIMEOUT_MS));
    return await Promise.race([fetch(request), timeout]);
  } catch {
    return (await cached()) ?? Response.error();
  }
}

async function handleAsset(request) {
  const cached = await caches.match(request, MATCH_OPTIONS);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, response.clone());
  }
  return response;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(request.mode === 'navigate' ? handleNavigation(request) : handleAsset(request));
});
